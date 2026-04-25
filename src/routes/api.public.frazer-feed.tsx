import { createFileRoute } from "@tanstack/react-router";
import Papa from "papaparse";

// Frazer DMS exports inventory nightly as a delimited file (CSV or tab).
// This endpoint accepts a URL pointing at the latest export (FTP-relayed to
// HTTPS, Dropbox direct link, S3, Google Drive direct link, etc.) and returns
// normalized JSON the site can render. Optionally protect with FRAZER_FEED_TOKEN.
//
// Configure the source URL via the FRAZER_FEED_URL env var, or pass ?url= on
// the request. Set FRAZER_FEED_TOKEN and pass ?token= to restrict access.

type RawRow = Record<string, string>;

export type FrazerVehicle = {
  stk: string;
  vin: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  name: string;
  price: string;
  miles: string;
  type: string;
  exterior: string;
  interior: string;
  drivetrain: string;
  transmission: string;
  fuel: string;
  engine: string;
  mpg: string;
  description: string;
  features: string[];
  photos: string[];
  img: string;
};

const pick = (row: RawRow, ...keys: string[]): string => {
  for (const k of keys) {
    const found = Object.keys(row).find((rk) => rk.toLowerCase().replace(/[\s_-]/g, "") === k.toLowerCase().replace(/[\s_-]/g, ""));
    if (found && row[found] != null && String(row[found]).trim() !== "") return String(row[found]).trim();
  }
  return "";
};

const num = (s: string) => Number(s.replace(/[^0-9.]/g, "")) || 0;

const formatPrice = (s: string) => {
  const n = num(s);
  if (!n) return "Call for Price";
  return `$${n.toLocaleString("en-US")}`;
};

const formatMiles = (s: string) => {
  const n = num(s);
  if (!n) return "—";
  return n.toLocaleString("en-US");
};

const inferBody = (s: string): string => {
  const v = s.toLowerCase();
  if (v.includes("suv") || v.includes("utility") || v.includes("crossover")) return "SUV";
  if (v.includes("truck") || v.includes("pickup")) return "Truck";
  if (v.includes("coupe")) return "Coupe";
  if (v.includes("hatch")) return "Hatchback";
  if (v.includes("van") || v.includes("minivan")) return "Van";
  if (v.includes("convertible") || v.includes("roadster")) return "Coupe";
  return "Sedan";
};

function normalize(row: RawRow): FrazerVehicle | null {
  const stk = pick(row, "stock", "stocknumber", "stockno", "stk", "stock#");
  const vin = pick(row, "vin");
  if (!stk && !vin) return null;

  const year = Number(pick(row, "year", "modelyear")) || 0;
  const make = pick(row, "make");
  const model = pick(row, "model");
  const trim = pick(row, "trim", "series", "style");
  const bodyRaw = pick(row, "body", "bodystyle", "bodytype", "vehicletype");

  const photoCsv = pick(row, "photos", "photourls", "imageurls", "images");
  let photos: string[] = [];
  if (photoCsv) photos = photoCsv.split(/[,;|]/).map((p) => p.trim()).filter(Boolean);
  if (photos.length === 0) {
    for (let i = 1; i <= 30; i++) {
      const p = pick(row, `pic${i}`, `photo${i}`, `image${i}`, `img${i}`);
      if (p) photos.push(p);
    }
  }

  const featuresStr = pick(row, "features", "options", "equipment");
  const features = featuresStr
    ? featuresStr.split(/[,;|]/).map((f) => f.trim()).filter(Boolean).slice(0, 12)
    : [];

  return {
    stk: stk || vin.slice(-6),
    vin,
    year,
    make,
    model,
    trim,
    name: [year || "", make, model].filter(Boolean).join(" ").trim(),
    price: formatPrice(pick(row, "internetprice", "askingprice", "price", "sellingprice", "listprice")),
    miles: formatMiles(pick(row, "miles", "mileage", "odometer")),
    type: inferBody(bodyRaw || trim || model),
    exterior: pick(row, "extcolor", "exteriorcolor", "color", "extcolour"),
    interior: pick(row, "intcolor", "interiorcolor", "intcolour"),
    drivetrain: pick(row, "drivetrain", "drive", "drivetype"),
    transmission: pick(row, "transmission", "trans"),
    fuel: pick(row, "fuel", "fueltype"),
    engine: pick(row, "engine", "enginedescription"),
    mpg: pick(row, "mpg", "fueleconomy"),
    description: pick(row, "description", "comments", "notes"),
    features,
    photos,
    img: photos[0] || "",
  };
}

async function fetchFeed(url: string): Promise<FrazerVehicle[]> {
  const res = await fetch(url, { headers: { Accept: "text/csv,text/plain,*/*" } });
  if (!res.ok) throw new Error(`Feed fetch failed [${res.status}]: ${res.statusText}`);
  const text = await res.text();

  // Auto-detect delimiter (comma / tab / pipe).
  const firstLine = text.split(/\r?\n/, 1)[0] || "";
  const delim = firstLine.includes("\t") ? "\t" : firstLine.includes("|") ? "|" : ",";

  const parsed = Papa.parse<RawRow>(text, {
    header: true,
    skipEmptyLines: true,
    delimiter: delim,
    transformHeader: (h) => h.trim(),
  });

  return parsed.data.map(normalize).filter((v): v is FrazerVehicle => v !== null);
}

export const Route = createFileRoute("/api/public/frazer-feed")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const url = new URL(request.url);
          const feedUrl = url.searchParams.get("url") || process.env.FRAZER_FEED_URL;
          const token = url.searchParams.get("token");
          const expected = process.env.FRAZER_FEED_TOKEN;

          if (expected && token !== expected) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
          }
          if (!feedUrl) {
            return Response.json(
              {
                error:
                  "No feed URL configured. Set FRAZER_FEED_URL secret, or pass ?url=<https-csv-url>.",
              },
              { status: 400 }
            );
          }

          const vehicles = await fetchFeed(feedUrl);
          return Response.json(
            { count: vehicles.length, vehicles, fetchedAt: new Date().toISOString() },
            { headers: { "Cache-Control": "public, max-age=300" } }
          );
        } catch (err) {
          console.error("frazer-feed error:", err);
          const message = err instanceof Error ? err.message : "Unknown error";
          return Response.json({ error: message }, { status: 500 });
        }
      },
    },
  },
});

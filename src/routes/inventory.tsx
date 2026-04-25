import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gauge, Calendar, ArrowRight, Search, BadgeCheck } from "lucide-react";
import { useMemo, useState } from "react";
import suv from "@/assets/car-suv.jpg";
import sedan from "@/assets/car-sedan.jpg";
import coupe from "@/assets/car-coupe.jpg";
import truck from "@/assets/car-truck.jpg";
import accord from "@/assets/car-accord.jpg";
import tahoe from "@/assets/car-tahoe.jpg";
import porsche from "@/assets/hero-porsche.jpg";

export const Route = createFileRoute("/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory — Prestige Rides | Cars, Trucks & SUVs Columbus OH" },
      { name: "description", content: "Browse our hand-picked inventory of pre-owned cars, trucks, and SUVs at Prestige Rides in Columbus, OH. Every vehicle inspected." },
      { property: "og:title", content: "Inventory — Prestige Rides" },
      { property: "og:description", content: "Hand-picked pre-owned cars, trucks, and SUVs." },
    ],
  }),
  component: Inventory,
});

type Body = "All" | "SUV" | "Sedan" | "Truck" | "Coupe" | "Hatchback";

const vehicles: { img: string; name: string; trim: string; price: string; year: number; miles: string; mpg: string; type: Exclude<Body, "All">; stk: string; justIn?: boolean }[] = [
  { img: suv, name: "2021 BMW X5", trim: "xDrive40i", price: "$42,995", year: 2021, miles: "38,200", mpg: "20/26", type: "SUV", stk: "PR2401", justIn: true },
  { img: sedan, name: "2022 Mercedes-Benz C300", trim: "4MATIC", price: "$38,500", year: 2022, miles: "24,500", mpg: "23/32", type: "Sedan", stk: "PR2402", justIn: true },
  { img: accord, name: "2020 Toyota Camry", trim: "SE", price: "$22,995", year: 2020, miles: "41,800", mpg: "28/39", type: "Sedan", stk: "PR2403" },
  { img: truck, name: "2021 Ford F-150", trim: "XLT SuperCrew", price: "$39,500", year: 2021, miles: "35,600", mpg: "20/24", type: "Truck", stk: "PR2404", justIn: true },
  { img: accord, name: "2022 Honda Accord", trim: "Sport", price: "$28,900", year: 2022, miles: "19,200", mpg: "30/38", type: "Sedan", stk: "PR2405" },
  { img: tahoe, name: "2019 Chevrolet Tahoe", trim: "LT", price: "$35,500", year: 2019, miles: "52,300", mpg: "15/22", type: "SUV", stk: "PR2406" },
  { img: coupe, name: "2021 BMW M4", trim: "Competition", price: "$72,400", year: 2021, miles: "21,300", mpg: "16/23", type: "Coupe", stk: "PR2407" },
  { img: porsche, name: "2020 Porsche 911", trim: "Carrera S", price: "$118,900", year: 2020, miles: "18,400", mpg: "18/24", type: "Coupe", stk: "PR2408", justIn: true },
  { img: suv, name: "2022 Range Rover Sport", trim: "HSE", price: "$78,500", year: 2022, miles: "26,100", mpg: "18/23", type: "SUV", stk: "PR2409" },
];

const tabs: Body[] = ["All", "SUV", "Sedan", "Truck", "Coupe", "Hatchback"];

function Inventory() {
  const [filter, setFilter] = useState<Body>("All");
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    return vehicles.filter(v =>
      (filter === "All" || v.type === filter) &&
      (q === "" || (v.name + " " + v.trim).toLowerCase().includes(q.toLowerCase()))
    );
  }, [filter, q]);

  return (
    <Layout>
      <section className="border-b border-border/60 bg-gradient-dark py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Inventory</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3">Our Selection</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Cars, trucks, and SUVs — hand-picked, fully inspected, and ready to drive.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search make, model, year..." className="pl-11 h-12 bg-card border-border/60" />
            </div>
            <Button className="h-12 px-6 bg-gradient-red uppercase tracking-wider">Search</Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap gap-2 mb-10 border-b border-border/60 pb-4">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-2 text-xs uppercase tracking-widest font-semibold rounded-full border transition-smooth ${
                  filter === t
                    ? "bg-gradient-red border-primary shadow-red text-foreground"
                    : "border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center py-20 text-muted-foreground">No vehicles match your filters. <Link to="/contact" className="text-primary underline">Tell us what you're looking for</Link>.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((v) => (
                <article key={v.stk} className="group rounded-lg overflow-hidden border border-border/60 bg-card transition-smooth hover:border-primary/60 hover:shadow-red">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={v.img} alt={v.name} className="h-full w-full object-cover transition-smooth group-hover:scale-105" loading="lazy" width={1280} height={832} />
                    <span className="absolute top-4 left-4 bg-background/85 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded">{v.type}</span>
                    {v.justIn && <span className="absolute top-4 right-4 bg-gradient-red px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded">Just In</span>}
                  </div>
                  <div className="p-6">
                    <div className="text-2xl font-bold text-gradient-red mb-1">{v.price}</div>
                    <h3 className="text-lg font-bold">{v.name}</h3>
                    <p className="text-sm text-muted-foreground">{v.trim}</p>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-muted-foreground border-t border-border/60 pt-4">
                      <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" />{v.year}</div>
                      <div className="flex items-center gap-1.5"><Gauge className="h-3.5 w-3.5 text-primary" />{v.miles} mi</div>
                      <div className="flex items-center gap-1.5"><BadgeCheck className="h-3.5 w-3.5 text-primary" />Inspected</div>
                    </div>
                    <div className="mt-2 text-[11px] text-muted-foreground">STK# {v.stk}</div>
                    <div className="mt-4 flex gap-2">
                      <Button asChild className="flex-1 bg-gradient-red uppercase tracking-wider text-xs">
                        <Link to="/inventory/$stk" params={{ stk: v.stk }}>View <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1 uppercase tracking-wider text-xs border-foreground/20">
                        <Link to="/financing">Finance</Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

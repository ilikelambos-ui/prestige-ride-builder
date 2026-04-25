import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gauge, Calendar, ArrowRight, Search, BadgeCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { vehicles, type Body } from "@/data/vehicles";

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

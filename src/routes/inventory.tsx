import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gauge, Fuel, Calendar, ArrowRight, Search } from "lucide-react";
import suv from "@/assets/car-suv.jpg";
import sedan from "@/assets/car-sedan.jpg";
import coupe from "@/assets/car-coupe.jpg";
import hero from "@/assets/hero-car.jpg";

export const Route = createFileRoute("/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory — Prestige Rides | Luxury Cars Columbus OH" },
      { name: "description", content: "Browse our curated inventory of luxury and performance pre-owned vehicles at Prestige Rides in Columbus, OH 43229." },
      { property: "og:title", content: "Inventory — Prestige Rides" },
      { property: "og:description", content: "Curated luxury and performance vehicles." },
    ],
  }),
  component: Inventory,
});

const vehicles = [
  { img: hero, name: "2022 Lamborghini Huracán", price: "$249,900", year: 2022, miles: "8,420", mpg: "13/18", type: "Coupe" },
  { img: suv, name: "2023 Range Rover Autobiography", price: "$129,500", year: 2023, miles: "12,100", mpg: "16/21", type: "SUV" },
  { img: sedan, name: "2022 Mercedes-Benz S580", price: "$94,800", year: 2022, miles: "18,900", mpg: "18/27", type: "Sedan" },
  { img: coupe, name: "2021 BMW M4 Competition", price: "$72,400", year: 2021, miles: "21,300", mpg: "16/23", type: "Coupe" },
  { img: suv, name: "2022 Porsche Cayenne GTS", price: "$98,900", year: 2022, miles: "14,500", mpg: "15/19", type: "SUV" },
  { img: sedan, name: "2023 Audi RS7", price: "$118,000", year: 2023, miles: "9,800", mpg: "15/22", type: "Sedan" },
];

function Inventory() {
  return (
    <Layout>
      <section className="border-b border-border/60 bg-gradient-dark py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Inventory</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3">The Collection</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Hand-picked luxury and performance vehicles, ready to drive home today.</p>
          <div className="mt-8 flex gap-3 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search make, model, year..." className="pl-11 h-12 bg-card border-border/60" />
            </div>
            <Button className="h-12 px-6 bg-gradient-red uppercase tracking-wider">Search</Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((v) => (
              <article key={v.name} className="group rounded-lg overflow-hidden border border-border/60 bg-card transition-smooth hover:border-primary/60 hover:shadow-red">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={v.img} alt={v.name} className="h-full w-full object-cover transition-smooth group-hover:scale-105" loading="lazy" width={1280} height={832} />
                  <span className="absolute top-4 left-4 bg-gradient-red px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded">{v.type}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{v.name}</h3>
                  <div className="mt-1 text-2xl font-bold text-gradient-red">{v.price}</div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-muted-foreground border-t border-border/60 pt-4">
                    <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" />{v.year}</div>
                    <div className="flex items-center gap-1.5"><Gauge className="h-3.5 w-3.5 text-primary" />{v.miles}</div>
                    <div className="flex items-center gap-1.5"><Fuel className="h-3.5 w-3.5 text-primary" />{v.mpg}</div>
                  </div>
                  <div className="mt-5 flex gap-2">
                    <Button asChild className="flex-1 bg-gradient-red uppercase tracking-wider text-xs">
                      <Link to="/contact">Inquire <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 uppercase tracking-wider text-xs border-foreground/20">
                      <Link to="/financing">Finance</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

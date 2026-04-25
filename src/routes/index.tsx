import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles, Wallet, Star, Car, BadgeCheck, FileSearch } from "lucide-react";
import heroPorsche from "@/assets/hero-porsche.jpg";
import suv from "@/assets/car-suv.jpg";
import sedan from "@/assets/car-sedan.jpg";
import truck from "@/assets/car-truck.jpg";
import accord from "@/assets/car-accord.jpg";
import tahoe from "@/assets/car-tahoe.jpg";
import coupe from "@/assets/car-coupe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prestige Rides — Drive Prestige. Pay Less. | Columbus, OH" },
      { name: "description", content: "Columbus's premier pre-owned dealership. Hand-picked inventory of cars, trucks & SUVs — 100% inspected, transparent pricing, extended warranty available on every vehicle." },
      { property: "og:title", content: "Prestige Rides — Drive Prestige. Pay Less." },
      { property: "og:description", content: "Hand-picked pre-owned cars, trucks & SUVs in Columbus, OH." },
    ],
  }),
  component: Index,
});

const bodyStyles = [
  { emoji: "🚙", label: "SUV" },
  { emoji: "🚗", label: "Sedan" },
  { emoji: "🛻", label: "Truck" },
  { emoji: "🚐", label: "Van" },
  { emoji: "🏎️", label: "Coupe" },
  { emoji: "🚘", label: "Hatchback" },
];

const arrivals = [
  { img: suv, name: "2021 BMW X5", trim: "xDrive40i", price: "$42,995", miles: "38,200", stk: "PR2401", justIn: true },
  { img: sedan, name: "2022 Mercedes-Benz C300", trim: "4MATIC", price: "$38,500", miles: "24,500", stk: "PR2402", justIn: true },
  { img: accord, name: "2020 Toyota Camry", trim: "SE", price: "$22,995", miles: "41,800", stk: "PR2403" },
  { img: truck, name: "2021 Ford F-150", trim: "XLT SuperCrew", price: "$39,500", miles: "35,600", stk: "PR2404", justIn: true },
  { img: coupe, name: "2022 Honda Accord", trim: "Sport", price: "$28,900", miles: "19,200", stk: "PR2405" },
  { img: tahoe, name: "2019 Chevrolet Tahoe", trim: "LT", price: "$35,500", miles: "52,300", stk: "PR2406" },
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPorsche} alt="Premium vehicle at Prestige Rides" className="h-full w-full object-cover" width={1920} height={832} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl w-full px-4 md:px-8 py-24">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-6 border border-primary/40 px-4 py-1.5 rounded-full">Prestige Rides · Columbus, Ohio</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
              <span className="text-gradient-silver">Drive Prestige.</span><br />
              <span className="text-gradient-red">Pay Less.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
              Columbus's premier pre-owned dealership. Hand-picked inventory, 100% inspected, transparent pricing — and extended warranty available on every vehicle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-red shadow-red hover:scale-[1.02] transition-smooth h-14 px-8 text-base uppercase tracking-wider font-semibold">
                <Link to="/inventory">Browse Inventory <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base uppercase tracking-wider font-semibold border-foreground/30 hover:bg-foreground/5">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-primary" />Inspected Vehicles</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Trusted Since Day 1</span>
              <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" />Service Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body style shop */}
      <section className="py-20 border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Browse By Type</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Shop By Body Style</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {bodyStyles.map((b) => (
              <Link key={b.label} to="/inventory" className="group flex flex-col items-center justify-center p-6 rounded-lg border border-border/60 bg-background hover:border-primary/60 hover:shadow-red transition-smooth">
                <span className="text-4xl mb-2 transition-smooth group-hover:scale-110">{b.emoji}</span>
                <span className="text-sm font-semibold uppercase tracking-wider">{b.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "100+", l: "Vehicles Sold" },
            { v: "5★", l: "Customer Rating" },
            { v: "Extended", l: "Warranty Available" },
            { v: "100%", l: "Inspected Vehicles" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl md:text-4xl font-bold text-gradient-red">{s.v}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest arrivals */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Our Selection</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3">Latest Arrivals</h2>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:text-primary uppercase tracking-wider">
              <Link to="/inventory">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {arrivals.map((v) => (
              <article key={v.stk} className="group rounded-lg overflow-hidden border border-border/60 bg-card transition-smooth hover:border-primary/60 hover:shadow-red">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={v.img} alt={v.name} className="h-full w-full object-cover transition-smooth group-hover:scale-105" loading="lazy" width={1280} height={832} />
                  {v.justIn && <span className="absolute top-4 left-4 bg-gradient-red px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded">Just In</span>}
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold text-gradient-red mb-1">{v.price}</div>
                  <h3 className="text-lg font-bold">{v.name}</h3>
                  <p className="text-sm text-muted-foreground">{v.trim}</p>
                  <div className="mt-3 text-xs text-muted-foreground border-t border-border/60 pt-3 flex justify-between">
                    <span>{v.miles} mi · Auto · Gas</span>
                    <span>STK# {v.stk}</span>
                  </div>
                  <Button asChild className="w-full mt-4 bg-gradient-red uppercase tracking-wider text-xs">
                    <Link to="/contact">Inquire <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PR Difference */}
      <section className="py-24 bg-gradient-dark border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Why PR Auto Group</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">The PR Difference</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: BadgeCheck, t: "Quality Inspected", d: "Every vehicle undergoes a thorough multi-point inspection before hitting our lot." },
              { i: Wallet, t: "Transparent Pricing", d: "No hidden fees, no surprises. The price you see is the price you pay." },
              { i: FileSearch, t: "Clean History", d: "We provide full vehicle history reports so you can buy with confidence." },
              { i: Sparkles, t: "Personal Service", d: "Our team is dedicated to finding the right vehicle for your lifestyle and budget." },
            ].map((f) => (
              <div key={f.t} className="p-7 rounded-lg border border-border/60 bg-card/50 hover:border-primary/40 transition-smooth">
                <div className="h-12 w-12 rounded-lg bg-gradient-red flex items-center justify-center mb-5 shadow-red">
                  <f.i className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{f.t}</h3>
                <p className="text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-dark p-12 md:p-16 text-center shadow-elegant">
            <div className="absolute inset-0 bg-gradient-red opacity-10" />
            <div className="relative">
              <Star className="mx-auto h-10 w-10 text-primary mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Find Your Ride?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">Apply for financing online or inquire about a specific vehicle. Our team responds within the hour.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-red shadow-red h-14 px-8 uppercase tracking-wider font-semibold">
                  <Link to="/financing"><Wallet className="mr-2 h-5 w-5" />Credit Application</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 uppercase tracking-wider font-semibold border-foreground/30">
                  <Link to="/contact"><Car className="mr-2 h-5 w-5" />Vehicle Inquiry</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

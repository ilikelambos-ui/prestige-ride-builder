import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles, Wallet, Star, Car } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import suv from "@/assets/car-suv.jpg";
import sedan from "@/assets/car-sedan.jpg";
import coupe from "@/assets/car-coupe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prestige Rides — Luxury Pre-Owned Vehicles | Columbus, OH 43229" },
      { name: "description", content: "Hand-picked luxury vehicles, easy financing, and white-glove service at PR Auto Group's Prestige Rides in Columbus, Ohio." },
      { property: "og:title", content: "Prestige Rides — Ride Prestige" },
      { property: "og:description", content: "Premium pre-owned luxury vehicles in Columbus, OH 43229." },
    ],
  }),
  component: Index,
});

const featured = [
  { img: suv, name: "Luxury SUV Collection", tag: "SUV" },
  { img: sedan, name: "Executive Sedans", tag: "Sedan" },
  { img: coupe, name: "Performance Coupes", tag: "Coupe" },
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCar} alt="Luxury car at Prestige Rides" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl w-full px-4 md:px-8 py-24">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-6 border border-primary/40 px-4 py-1.5 rounded-full">PR Auto Group · Columbus, OH 43229</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
              <span className="text-gradient-silver">Ride</span><br />
              <span className="text-gradient-red">Prestige.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
              Hand-picked luxury and performance vehicles. Transparent pricing. Effortless financing. Welcome to a new standard.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-red shadow-red hover:scale-[1.02] transition-smooth h-14 px-8 text-base uppercase tracking-wider font-semibold">
                <Link to="/inventory">View Inventory <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base uppercase tracking-wider font-semibold border-foreground/30 hover:bg-foreground/5">
                <Link to="/financing">Get Pre-Approved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "500+", l: "Vehicles Sold" },
            { v: "4.9★", l: "Google Rating" },
            { v: "100%", l: "Financing Approval" },
            { v: "10+ yrs", l: "Trusted Service" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl md:text-4xl font-bold text-gradient-red">{s.v}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Collection</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3">Featured Inventory</h2>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:text-primary uppercase tracking-wider">
              <Link to="/inventory">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((c) => (
              <Link to="/inventory" key={c.name} className="group relative overflow-hidden rounded-lg bg-card border border-border/60 transition-smooth hover:border-primary/60 hover:shadow-red">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.name} className="h-full w-full object-cover transition-smooth group-hover:scale-105" loading="lazy" width={1280} height={832} />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-primary">{c.tag}</span>
                    <h3 className="text-xl font-bold mt-1">{c.name}</h3>
                  </div>
                  <ArrowRight className="text-primary transition-smooth group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 bg-gradient-dark border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">The Prestige Difference</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Why Choose Prestige Rides</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { i: ShieldCheck, t: "Certified Quality", d: "Every vehicle is rigorously inspected and reconditioned to our prestige standard." },
              { i: Wallet, t: "Easy Financing", d: "Good credit, bad credit, no credit — our finance team works with all major lenders." },
              { i: Sparkles, t: "White-Glove Service", d: "Concierge-level buying experience from your first visit through delivery." },
            ].map((f) => (
              <div key={f.t} className="p-8 rounded-lg border border-border/60 bg-card/50 hover:border-primary/40 transition-smooth">
                <div className="h-14 w-14 rounded-lg bg-gradient-red flex items-center justify-center mb-6 shadow-red">
                  <f.i className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{f.t}</h3>
                <p className="text-muted-foreground">{f.d}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Drive Prestige?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">Apply for financing in minutes or inquire about a specific vehicle. Our team responds within the hour.</p>
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

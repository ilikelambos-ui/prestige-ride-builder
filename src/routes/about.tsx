import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Target } from "lucide-react";
import hero from "@/assets/hero-car.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PR Auto Group — Prestige Rides" },
      { name: "description", content: "PR Auto Group's Prestige Rides is Columbus' premier destination for luxury pre-owned vehicles. Family-owned, customer-obsessed." },
      { property: "og:title", content: "About — Prestige Rides" },
      { property: "og:description", content: "Family-owned dealership in Columbus, OH 43229." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="relative py-24 border-b border-border/60 overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Showroom" className="h-full w-full object-cover opacity-20" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 md:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">About Us</span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4">Built on Trust.<br /><span className="text-gradient-red">Driven by Passion.</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            PR Auto Group is a family-owned dealership serving Columbus and beyond. We hand-pick every vehicle in our inventory and treat every customer like family.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Our Story</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">A new standard for luxury car buying.</h2>
            <p className="text-muted-foreground mb-4">We started Prestige Rides because we were tired of how impersonal car buying had become. No more pushy salespeople. No more hidden fees. No more waiting hours to be seen.</p>
            <p className="text-muted-foreground mb-4">Just exceptional vehicles, transparent pricing, and a team that treats you with the respect you deserve. From your first visit to driving off our lot, every detail is designed around you.</p>
            <p className="text-muted-foreground">Whether it's your first luxury vehicle or your tenth, we're here to make the experience unforgettable.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { i: Award, t: "Award-Winning", d: "Top-rated dealer in Columbus" },
              { i: Heart, t: "Customer First", d: "4.9★ Google rating" },
              { i: Users, t: "Family Owned", d: "Local to Columbus, OH 43229" },
              { i: Target, t: "Hand-Picked", d: "Every vehicle vetted" },
            ].map((v) => (
              <div key={v.t} className="rounded-lg border border-border/60 bg-card p-6">
                <v.i className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-bold">{v.t}</h4>
                <p className="text-sm text-muted-foreground mt-1">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-dark border-y border-border/60">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Come See the Showroom</h2>
          <p className="text-muted-foreground mb-8">Located at 2300 E Dublin Granville Rd, Columbus, OH 43229</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-red shadow-red h-14 px-8 uppercase tracking-wider">
              <Link to="/inventory">Browse Inventory</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 uppercase tracking-wider border-foreground/30">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

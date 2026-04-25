import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ShieldCheck, BadgeCheck, Wrench, FileSearch, Phone, ClipboardList, Sparkles } from "lucide-react";

export const Route = createFileRoute("/warranty")({
  head: () => ({
    meta: [
      { title: "Warranty & Service — Buy with Confidence | Prestige Rides Columbus" },
      { name: "description", content: "Every Prestige Rides vehicle is multi-point inspected, comes with a clean Carfax, and qualifies for extended warranty coverage. Learn how we protect your purchase." },
      { property: "og:title", content: "Warranty & Service — Prestige Rides" },
      { property: "og:description", content: "Inspected vehicles. Extended warranty available. Buy with confidence." },
    ],
  }),
  component: Warranty,
});

const inspectionPoints = [
  "Engine performance & fluids",
  "Transmission & drivetrain",
  "Brakes, rotors & calipers",
  "Suspension & steering",
  "Tires & alignment",
  "Battery & charging system",
  "All electrical systems",
  "HVAC operation",
  "Interior & exterior condition",
  "Road test verification",
];

function Warranty() {
  return (
    <Layout>
      <section className="border-b border-border/60 bg-gradient-dark py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Peace of Mind</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3">Warranty & Service</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Every vehicle on our lot is inspected, documented, and backed by warranty options that protect your investment long after you drive off.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-3 gap-6">
          {[
            { i: BadgeCheck, t: "Multi-Point Inspection", d: "Every vehicle passes a comprehensive inspection before listing — no exceptions." },
            { i: FileSearch, t: "Clean Carfax Provided", d: "Full vehicle history report delivered with every purchase, free of charge." },
            { i: ShieldCheck, t: "Extended Warranty Options", d: "Choose from powertrain, bumper-to-bumper, and exclusionary plans up to 7 years." },
          ].map((c) => (
            <div key={c.t} className="rounded-lg border border-border/60 bg-card p-7 hover:border-primary/40 transition-smooth">
              <div className="h-12 w-12 rounded-lg bg-gradient-red flex items-center justify-center mb-5 shadow-red">
                <c.i className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{c.t}</h3>
              <p className="text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-dark border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">What We Check</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Our Inspection Process</h2>
            <p className="text-muted-foreground mb-8">Before any vehicle hits our showroom, our certified technicians complete a thorough multi-point inspection covering every major system.</p>
            <Button asChild className="bg-gradient-red shadow-red h-12 px-8 uppercase tracking-wider">
              <Link to="/inventory">View Inspected Inventory</Link>
            </Button>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 rounded-lg border border-border/60 bg-card p-6">
            {inspectionPoints.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm">
                <ClipboardList className="h-4 w-4 text-primary mt-0.5 shrink-0" />{p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Coverage Plans</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Extended Warranty Options</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Powertrain", d: "Engine, transmission, drive axle. Best value coverage for the most expensive repairs.", terms: "Up to 5 yr / 60k mi" },
              { t: "Bumper-to-Bumper", d: "Comprehensive coverage on most mechanical and electrical components.", terms: "Up to 4 yr / 50k mi", featured: true },
              { t: "Exclusionary", d: "Premium coverage — everything is covered except a short list of exclusions.", terms: "Up to 7 yr / 100k mi" },
            ].map((p) => (
              <div key={p.t} className={`rounded-lg p-7 ${p.featured ? "border-2 border-primary bg-card shadow-red" : "border border-border/60 bg-card"}`}>
                {p.featured && <span className="inline-block text-[10px] uppercase tracking-widest bg-gradient-red px-2 py-0.5 rounded mb-3">Most Popular</span>}
                <Wrench className="h-7 w-7 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">{p.t}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.d}</p>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">{p.terms}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">Coverage details vary by vehicle and provider. Ask your sales advisor for full plan terms.</p>
        </div>
      </section>

      <section className="py-20 bg-gradient-dark border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <Sparkles className="mx-auto h-10 w-10 text-primary mb-4" />
          <h2 className="text-4xl font-bold mb-4">Questions About Coverage?</h2>
          <p className="text-muted-foreground mb-8">Our team will walk you through every option and help you choose the right plan for your vehicle and budget.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-red shadow-red h-14 px-8 uppercase tracking-wider"><Link to="/contact">Get In Touch</Link></Button>
            <a href="tel:+16142597761" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-md border border-foreground/30 uppercase tracking-wider font-semibold hover:bg-foreground/5 transition-smooth">
              <Phone className="h-5 w-5" />(614) 259-7761
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

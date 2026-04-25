import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, DollarSign, Send, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/trade-in")({
  head: () => ({
    meta: [
      { title: "Trade-In Valuation — Get an Instant Offer | Prestige Rides Columbus" },
      { name: "description", content: "Get a no-obligation trade-in offer for your current vehicle from Prestige Rides in Columbus, OH. Quick response, fair value, no pressure." },
      { property: "og:title", content: "Trade-In Valuation — Prestige Rides" },
      { property: "og:description", content: "Get a fast, no-obligation trade-in offer in Columbus, OH." },
    ],
  }),
  component: TradeIn,
});

function TradeIn() {
  const [done, setDone] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    toast.success("Trade-in request received — we'll send your offer shortly.");
  };

  return (
    <Layout>
      <section className="border-b border-border/60 bg-gradient-dark py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Trade or Sell</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3">Trade-In Valuation</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Tell us about your vehicle and get a competitive, no-obligation offer — whether you're buying from us or just selling.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {done ? (
              <div className="rounded-lg border border-primary/40 bg-card p-12 text-center shadow-red">
                <CheckCircle2 className="mx-auto h-14 w-14 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-2">Request Received</h2>
                <p className="text-muted-foreground">Our team will review your vehicle details and email your offer within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-lg border border-border/60 bg-card p-8 md:p-10 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Your Vehicle</h2>
                  <p className="text-sm text-muted-foreground">Provide the basics so we can value your trade.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Year" name="year" type="number" required />
                  <Field label="Make" name="make" required placeholder="Toyota" />
                  <Field label="Model" name="model" required placeholder="Camry" />
                  <Field label="Trim" name="trim" placeholder="SE" />
                  <Field label="Mileage" name="miles" type="number" required />
                  <Field label="VIN (optional)" name="vin" />
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">Condition <span className="text-primary">*</span></Label>
                  <Select required>
                    <SelectTrigger className="mt-1.5 h-11 bg-background border-border/60"><SelectValue placeholder="Select condition" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent — like new</SelectItem>
                      <SelectItem value="good">Good — minor wear</SelectItem>
                      <SelectItem value="fair">Fair — visible wear or repairs</SelectItem>
                      <SelectItem value="poor">Poor — needs work</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-xs uppercase tracking-wider text-muted-foreground">Notes (accidents, modifications, etc.)</Label>
                  <Textarea id="notes" name="notes" rows={4} className="mt-1.5 bg-background border-border/60" placeholder="Any history we should know about..." />
                </div>

                <div className="border-t border-border/60 pt-6">
                  <h2 className="text-2xl font-bold mb-1">Your Contact Info</h2>
                  <p className="text-sm text-muted-foreground mb-4">So we can send your offer.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Full Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" required />
                    <Field label="Vehicle You Want (optional)" name="interested" placeholder="STK# or model" />
                  </div>
                </div>

                <Button type="submit" className="w-full h-14 bg-gradient-red shadow-red uppercase tracking-wider text-base font-semibold">
                  <Send className="mr-2 h-4 w-4" />Get My Offer
                </Button>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <Perk icon={DollarSign} title="Top-Dollar Offer" body="We'll match or beat any written offer from a competing dealer." />
            <Perk icon={Clock} title="Fast Response" body="Most offers go out within one business day." />
            <Perk icon={ShieldCheck} title="No Obligation" body="Take the offer or walk — no pressure, no fees." />
            <Perk icon={Sparkles} title="Trade & Save" body="Apply your trade value to lower your next payment." />
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <Label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}{required && <span className="text-primary"> *</span>}</Label>
      <Input id={name} name={name} type={type} required={required} placeholder={placeholder} className="mt-1.5 h-11 bg-background border-border/60" />
    </div>
  );
}

function Perk({ icon: Icon, title, body }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-card p-6">
      <Icon className="h-6 w-6 text-primary mb-3" />
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

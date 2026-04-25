import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Vehicle Inquiry — Prestige Rides Columbus OH" },
      { name: "description", content: "Visit Prestige Rides at 2300 E Dublin Granville Rd, Columbus OH. Inquire about a specific vehicle or schedule a test drive." },
      { property: "og:title", content: "Contact — Prestige Rides" },
      { property: "og:description", content: "Visit, call, or send a vehicle inquiry." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Inquiry sent — we'll be in touch soon.");
  };
  return (
    <Layout>
      <section className="border-b border-border/60 bg-gradient-dark py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3">Vehicle Inquiry</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Ask about a specific vehicle, schedule a test drive, or just stop by the showroom.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-lg border border-primary/40 bg-card p-12 text-center shadow-red">
                <CheckCircle2 className="mx-auto h-14 w-14 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-2">Message Sent</h2>
                <p className="text-muted-foreground">We'll respond within the hour during business hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-lg border border-border/60 bg-card p-8 md:p-10 space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Vehicle of Interest" name="vehicle" />
                </div>
                <div>
                  <Label htmlFor="msg" className="text-xs uppercase tracking-wider text-muted-foreground">Message <span className="text-primary">*</span></Label>
                  <Textarea id="msg" name="msg" rows={6} required className="mt-1.5 bg-background border-border/60" placeholder="Tell us about the vehicle you're interested in or any questions you have..." />
                </div>
                <Button type="submit" className="w-full h-14 bg-gradient-red shadow-red uppercase tracking-wider text-base font-semibold">
                  <Send className="mr-2 h-4 w-4" />Send Inquiry
                </Button>
              </form>
            )}
          </div>
          <aside className="space-y-4">
            <InfoCard icon={MapPin} title="Showroom" lines={["2300 E Dublin Granville Rd", "Columbus, OH"]} />
            <InfoCard icon={Phone} title="Call or Text" lines={["(614) 555-0199"]} />
            <InfoCard icon={Mail} title="Email" lines={["sales@prestigerides.com"]} />
            <InfoCard icon={Clock} title="Hours" lines={["Mon–Sat: 9am–8pm", "Sun: 11am–5pm"]} />
          </aside>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="rounded-lg overflow-hidden border border-border/60 aspect-[16/8]">
            <iframe
              title="Prestige Rides location"
              src="https://www.google.com/maps?q=2300+E+Dublin+Granville+Rd,+Columbus,+OH&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}{required && <span className="text-primary"> *</span>}</Label>
      <Input id={name} name={name} type={type} required={required} className="mt-1.5 h-11 bg-background border-border/60" />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="rounded-lg border border-border/60 bg-card p-6">
      <Icon className="h-6 w-6 text-primary mb-3" />
      <h4 className="font-bold mb-1">{title}</h4>
      {lines.map(l => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
    </div>
  );
}

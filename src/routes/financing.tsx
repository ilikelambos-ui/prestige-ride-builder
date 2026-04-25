import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/financing")({
  head: () => ({
    meta: [
      { title: "Credit Application — Prestige Rides Financing" },
      { name: "description", content: "Apply for auto financing online. All credit types welcome. Fast, secure approval at Prestige Rides in Columbus, OH 43229." },
      { property: "og:title", content: "Credit Application — Prestige Rides" },
      { property: "og:description", content: "Fast, secure auto financing — all credit welcome." },
    ],
  }),
  component: Financing,
});

function Financing() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Application received — we'll be in touch within the hour.");
  };
  return (
    <Layout>
      <section className="border-b border-border/60 bg-gradient-dark py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Financing</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3">Credit Application</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">All credit types welcome. Secure online application — get pre-approved in minutes.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-lg border border-primary/40 bg-card p-12 text-center shadow-red">
                <CheckCircle2 className="mx-auto h-14 w-14 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-2">Application Submitted</h2>
                <p className="text-muted-foreground">Our finance team will reach out within the hour during business hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-lg border border-border/60 bg-card p-8 md:p-10 space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-primary mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="First Name" name="firstName" required />
                    <Field label="Last Name" name="lastName" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" required />
                    <Field label="Date of Birth" name="dob" type="date" required />
                    <Field label="SSN (last 4)" name="ssn" maxLength={4} required />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-primary mb-4">Address</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2"><Field label="Street Address" name="address" required /></div>
                    <Field label="City" name="city" required />
                    <Field label="State" name="state" required />
                    <Field label="Zip Code" name="zip" required />
                    <Field label="Years at Address" name="yearsAddress" type="number" required />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-primary mb-4">Employment & Income</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Employer" name="employer" required />
                    <Field label="Job Title" name="jobTitle" required />
                    <Field label="Monthly Gross Income" name="income" type="number" required />
                    <Field label="Years Employed" name="yearsEmployed" type="number" required />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-primary mb-4">Vehicle of Interest</h3>
                  <Field label="Year / Make / Model (optional)" name="vehicle" />
                </div>
                <Button type="submit" className="w-full h-14 bg-gradient-red shadow-red uppercase tracking-wider text-base font-semibold">
                  Submit Application
                </Button>
                <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-2">
                  <Lock className="h-3 w-3" /> Your information is encrypted and never shared.
                </p>
              </form>
            )}
          </div>
          <aside className="space-y-6">
            <div className="rounded-lg border border-border/60 bg-card p-6">
              <ShieldCheck className="h-8 w-8 text-primary mb-3" />
              <h4 className="font-bold mb-2">All Credit Welcome</h4>
              <p className="text-sm text-muted-foreground">Good, bad, or no credit — we work with 20+ lenders to find your best rate.</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-card p-6">
              <h4 className="font-bold mb-3">What You'll Need</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Valid driver's license","Proof of income","Proof of residence","Trade-in title (if applicable)"].map(i => (
                  <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, maxLength }: { label: string; name: string; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <div>
      <Label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}{required && <span className="text-primary"> *</span>}</Label>
      <Input id={name} name={name} type={type} required={required} maxLength={maxLength} className="mt-1.5 h-11 bg-background border-border/60" />
    </div>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { getVehicleByStk } from "@/data/vehicles";
import { ArrowLeft, BadgeCheck, Calendar, Gauge, Fuel, Cog, Palette, Phone, MessageSquare, Wallet, ShieldCheck, FileSearch, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/inventory/$stk")({
  loader: ({ params }) => {
    const vehicle = getVehicleByStk(params.stk);
    if (!vehicle) throw notFound();
    return { vehicle };
  },
  head: ({ loaderData }) => {
    const v = loaderData?.vehicle;
    if (!v) return { meta: [{ title: "Vehicle Not Found — Prestige Rides" }] };
    return {
      meta: [
        { title: `${v.name} ${v.trim} — ${v.price} | Prestige Rides Columbus` },
        { name: "description", content: `${v.year} ${v.name.split(" ").slice(1).join(" ")} ${v.trim} for sale at Prestige Rides. ${v.miles} miles, ${v.exterior}. ${v.description}` },
        { property: "og:title", content: `${v.name} ${v.trim} — ${v.price}` },
        { property: "og:description", content: v.description },
        { property: "og:image", content: v.img },
        { name: "twitter:image", content: v.img },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-3">Vehicle Not Found</h1>
        <p className="text-muted-foreground mb-6">This vehicle may have been sold. Browse our current inventory.</p>
        <Button asChild className="bg-gradient-red"><Link to="/inventory">Back to Inventory</Link></Button>
      </div>
    </Layout>
  ),
  component: VehicleDetail,
});

function VehicleDetail() {
  const { vehicle: v } = Route.useLoaderData();
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 md:px-8 pt-8">
        <nav className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/inventory" className="hover:text-primary">Inventory</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{v.name}</span>
        </nav>
      </div>

      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-lg overflow-hidden border border-border/60 relative">
            <img src={v.img} alt={`${v.name} ${v.trim}`} className="w-full aspect-[16/10] object-cover" />
            {v.justIn && <span className="absolute top-4 left-4 bg-gradient-red px-3 py-1.5 text-xs uppercase tracking-widest font-semibold rounded">Just In</span>}
            <span className="absolute top-4 right-4 bg-background/85 backdrop-blur px-3 py-1.5 text-xs uppercase tracking-widest font-semibold rounded">{v.type}</span>
          </div>

          <div className="rounded-lg border border-border/60 bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Vehicle Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{v.description}</p>
          </div>

          <div className="rounded-lg border border-border/60 bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Specifications</h2>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              <Spec icon={Calendar} label="Year" value={String(v.year)} />
              <Spec icon={Gauge} label="Mileage" value={`${v.miles} mi`} />
              <Spec icon={Cog} label="Engine" value={v.engine} />
              <Spec icon={Cog} label="Transmission" value={v.transmission} />
              <Spec icon={Cog} label="Drivetrain" value={v.drivetrain} />
              <Spec icon={Fuel} label="Fuel / MPG" value={`${v.fuel} · ${v.mpg}`} />
              <Spec icon={Palette} label="Exterior" value={v.exterior} />
              <Spec icon={Palette} label="Interior" value={v.interior} />
              <Spec icon={BadgeCheck} label="VIN" value={v.vin} />
              <Spec icon={BadgeCheck} label="Stock #" value={v.stk} />
            </dl>
          </div>

          <div className="rounded-lg border border-border/60 bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Features & Equipment</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {v.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <BadgeCheck className="h-4 w-4 text-primary shrink-0" />{f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 self-start space-y-4">
          <div className="rounded-lg border border-border/60 bg-card p-6 shadow-elegant">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{v.year} · {v.type}</span>
            <h1 className="text-3xl font-bold mt-1 leading-tight">{v.name}</h1>
            <p className="text-sm text-muted-foreground">{v.trim}</p>
            <div className="text-4xl font-bold text-gradient-red mt-4">{v.price}</div>
            <p className="text-xs text-muted-foreground mt-1">+ tax, title & doc fee</p>

            <div className="mt-6 space-y-2">
              <Button asChild className="w-full h-12 bg-gradient-red shadow-red uppercase tracking-wider">
                <Link to="/contact">Schedule Test Drive</Link>
              </Button>
              <Button asChild variant="outline" className="w-full h-12 uppercase tracking-wider border-foreground/20">
                <Link to="/financing"><Wallet className="mr-2 h-4 w-4" />Apply for Financing</Link>
              </Button>
              <a href="tel:+16142597761" className="flex items-center justify-center gap-2 w-full h-12 rounded-md border border-border/60 hover:border-primary/60 transition-smooth text-sm font-semibold uppercase tracking-wider">
                <Phone className="h-4 w-4 text-primary" />Call (614) 259-7761
              </a>
              <a href="sms:+16142597761" className="flex items-center justify-center gap-2 w-full h-12 rounded-md border border-border/60 hover:border-primary/60 transition-smooth text-sm font-semibold uppercase tracking-wider">
                <MessageSquare className="h-4 w-4 text-primary" />Text Us About This Car
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 text-center border-t border-border/60 pt-4">
              <div><BadgeCheck className="h-5 w-5 text-primary mx-auto mb-1" /><span className="text-[10px] uppercase tracking-widest text-muted-foreground">Inspected</span></div>
              <div><ShieldCheck className="h-5 w-5 text-primary mx-auto mb-1" /><span className="text-[10px] uppercase tracking-widest text-muted-foreground">Warranty Avail.</span></div>
              <div><FileSearch className="h-5 w-5 text-primary mx-auto mb-1" /><span className="text-[10px] uppercase tracking-widest text-muted-foreground">Carfax</span></div>
            </div>
          </div>

          <Button asChild variant="ghost" className="w-full text-muted-foreground hover:text-primary">
            <Link to="/inventory"><ArrowLeft className="mr-2 h-4 w-4" />Back to Inventory</Link>
          </Button>
        </aside>
      </section>
    </Layout>
  );
}

function Spec({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <Icon className="h-4 w-4 text-primary mt-1 shrink-0" />
      <div>
        <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</dt>
        <dd className="text-sm font-semibold">{value}</dd>
      </div>
    </div>
  );
}

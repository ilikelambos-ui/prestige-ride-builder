import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-gradient-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo} alt="Prestige Rides" className="h-14 w-auto mb-4" width={140} height={56} />
          <p className="text-sm text-muted-foreground">Ride Prestige. hand-picked pre-owned cars, trucks Hand-picked pre-owned cars, trucks Premium pre-owned luxury vehicles SUVs SUVs by PR Auto Group.</p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Visit Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />2300 E Dublin Granville Rd<br/>Columbus, OH 43229</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />(614) 259-7761</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />sales@prestigerides.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" /><div>Mon – Sat: 9am – 8pm<br/>Sun: 11am – 5pm</div></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/inventory" className="text-muted-foreground hover:text-primary transition-smooth">Inventory</Link></li>
            <li><Link to="/financing" className="text-muted-foreground hover:text-primary transition-smooth">Credit Application</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">Vehicle Inquiry</Link></li>
            <li><Link to="/reviews" className="text-muted-foreground hover:text-primary transition-smooth">Reviews</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PR Auto Group · Prestige Rides. All rights reserved.
      </div>
    </footer>
  );
}

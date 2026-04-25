import { Link } from "@tanstack/react-router";
import { Phone, Wallet, MessageSquare } from "lucide-react";

export function MobileCtaBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-xl shadow-elegant">
      <div className="grid grid-cols-3 gap-px bg-border/60">
        <a href="tel:+16142597761" className="flex flex-col items-center justify-center gap-1 py-2.5 bg-background hover:bg-card transition-smooth">
          <Phone className="h-5 w-5 text-primary" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
        </a>
        <a href="sms:+16142597761" className="flex flex-col items-center justify-center gap-1 py-2.5 bg-background hover:bg-card transition-smooth">
          <MessageSquare className="h-5 w-5 text-primary" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Text</span>
        </a>
        <Link to="/financing" className="flex flex-col items-center justify-center gap-1 py-2.5 bg-gradient-red transition-smooth">
          <Wallet className="h-5 w-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Apply</span>
        </Link>
      </div>
    </div>
  );
}

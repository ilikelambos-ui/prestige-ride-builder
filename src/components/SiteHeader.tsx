import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLang } from "@/i18n/LanguageContext";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/inventory", label: t("nav.inventory") },
    { to: "/financing", label: t("nav.financing") },
    { to: "/trade-in", label: t("nav.tradeIn") },
    { to: "/warranty", label: t("nav.warranty") },
    { to: "/about", label: t("nav.about") },
    { to: "/reviews", label: t("nav.reviews") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Prestige Rides logo" className="h-12 w-auto" width={120} height={48} />
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium uppercase tracking-wider text-foreground/80 transition-smooth hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 xl:flex">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-smooth"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />{lang === "en" ? "ES" : "EN"}
          </button>
          <a href="tel:+16142597761" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-smooth">
            <Phone className="h-4 w-4" /> (614) 259-7761
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="xl:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-border/60 bg-background">
          <nav className="flex flex-col px-4 py-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-sm font-medium uppercase tracking-wider hover:text-primary">
                {n.label}
              </Link>
            ))}
            <button
              onClick={() => { setLang(lang === "en" ? "es" : "en"); setOpen(false); }}
              className="flex items-center gap-2 py-3 text-sm font-medium uppercase tracking-wider text-foreground/80 hover:text-primary"
            >
              <Globe className="h-4 w-4" />{lang === "en" ? "Español" : "English"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

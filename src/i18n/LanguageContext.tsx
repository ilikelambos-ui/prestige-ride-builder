import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "en" | "es";

type Dict = Record<string, { en: string; es: string }>;

const dict: Dict = {
  // Nav
  "nav.home": { en: "Home", es: "Inicio" },
  "nav.inventory": { en: "Inventory", es: "Inventario" },
  "nav.financing": { en: "Financing", es: "Financiamiento" },
  "nav.tradeIn": { en: "Trade-In", es: "Intercambio" },
  "nav.warranty": { en: "Warranty", es: "Garantía" },
  "nav.about": { en: "About", es: "Nosotros" },
  "nav.reviews": { en: "Reviews", es: "Reseñas" },
  "nav.contact": { en: "Contact", es: "Contacto" },

  // Hero
  "hero.eyebrow": { en: "Prestige Rides · Columbus, Ohio", es: "Prestige Rides · Columbus, Ohio" },
  "hero.titleA": { en: "Drive Prestige.", es: "Conduce con Prestigio." },
  "hero.titleB": { en: "Pay Less.", es: "Paga Menos." },
  "hero.body": {
    en: "Columbus's premier pre-owned dealership. Hand-picked inventory, 100% inspected, transparent pricing — and extended warranty available on every vehicle.",
    es: "El concesionario de autos usados líder en Columbus. Inventario seleccionado, 100% inspeccionado, precios transparentes — y garantía extendida disponible en cada vehículo.",
  },
  "hero.browse": { en: "Browse Inventory", es: "Ver Inventario" },
  "hero.contact": { en: "Contact Us", es: "Contáctanos" },
  "hero.b1": { en: "Inspected Vehicles", es: "Vehículos Inspeccionados" },
  "hero.b2": { en: "Trusted Since Day 1", es: "Confiable desde el Primer Día" },
  "hero.b3": { en: "Service Guarantee", es: "Garantía de Servicio" },

  // Common
  "cta.apply": { en: "Apply", es: "Aplicar" },
  "cta.call": { en: "Call", es: "Llamar" },
  "cta.text": { en: "Text", es: "Mensaje" },
};

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: keyof typeof dict) => dict[key]?.[lang] ?? key;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

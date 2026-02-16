import { Check, X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const content = {
  nl: {
    label: "Waarom anders",
    headline: "Traditioneel vs. OneTime",
    rows: [
      { label: "Doorlooptijd", old: "8–12 weken", new: "18 dagen gemiddeld" },
      { label: "Kosten", old: "25–30% jaarsalaris", new: "Vaste prijs" },
      { label: "Garantie", old: "Geen of beperkt", new: "6 maanden garantie" },
      { label: "Transparantie", old: "Black box", new: "Realtime updates" },
      { label: "Talent pool", old: "Eenmalige lijst", new: "Blijvend toegankelijk" },
    ],
    colOld: "Traditioneel",
    colNew: "OneTime",
  },
  en: {
    label: "Why different",
    headline: "Traditional vs. OneTime",
    rows: [
      { label: "Lead time", old: "8–12 weeks", new: "18 days average" },
      { label: "Cost", old: "25–30% annual salary", new: "Fixed fee" },
      { label: "Guarantee", old: "None or limited", new: "6-month guarantee" },
      { label: "Transparency", old: "Black box", new: "Real-time updates" },
      { label: "Talent pool", old: "One-time list", new: "Ongoing access" },
    ],
    colOld: "Traditional",
    colNew: "OneTime",
  },
  de: {
    label: "Warum anders",
    headline: "Traditionell vs. OneTime",
    rows: [
      { label: "Laufzeit", old: "8–12 Wochen", new: "18 Tage im Durchschnitt" },
      { label: "Kosten", old: "25–30% Jahresgehalt", new: "Festpreis" },
      { label: "Garantie", old: "Keine oder begrenzt", new: "6 Monate Garantie" },
      { label: "Transparenz", old: "Black Box", new: "Echtzeit-Updates" },
      { label: "Talentpool", old: "Einmalige Liste", new: "Dauerhaft zugänglich" },
    ],
    colOld: "Traditionell",
    colNew: "OneTime",
  },
};

interface ComparisonSectionProps {
  lang?: "nl" | "en" | "de";
}

export function ComparisonSection({ lang = "nl" }: ComparisonSectionProps) {
  const t = content[lang];

  return (
    <section className="bg-muted/40 py-24 md:py-32">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {t.label}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">
            {t.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mx-auto mt-14 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-border bg-muted/60">
              <div className="p-5" />
              <div className="border-l border-border p-5 text-center">
                <span className="text-sm font-bold text-muted-foreground">{t.colOld}</span>
              </div>
              <div className="border-l border-accent/20 bg-accent/[0.06] p-5 text-center">
                <span className="text-sm font-bold text-accent">{t.colNew}</span>
              </div>
            </div>

            {/* Rows */}
            {t.rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 ${i < t.rows.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="flex items-center p-5">
                  <span className="text-sm font-semibold text-foreground">{row.label}</span>
                </div>
                <div className="flex items-center justify-center gap-2 border-l border-border p-5">
                  <X className="h-4 w-4 shrink-0 text-destructive/60" />
                  <span className="text-sm text-muted-foreground">{row.old}</span>
                </div>
                <div className="flex items-center justify-center gap-2 border-l border-accent/20 bg-accent/[0.03] p-5">
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm font-semibold text-foreground">{row.new}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

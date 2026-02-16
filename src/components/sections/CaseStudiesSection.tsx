import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const cases = [
  { client: "Arvoo", industry: "High-tech", challenge: "Zoektocht naar een technisch directeur met visie op R&D en groei.", result: "Kandidaat geplaatst binnen 3 weken, succesvol in rol na 1+ jaar.", metric: "3 weken" },
  { client: "BGH Accountants", industry: "Accountancy", challenge: "Managing Partner positie met nadruk op klantrelaties en teamleiderschap.", result: "Shortlist van 4 kandidaten, plaatsing binnen 18 dagen.", metric: "18 dagen" },
  { client: "Thales", industry: "Defence / Tech", challenge: "Senior leadership positie in een complexe, internationale organisatie.", result: "Succesvolle match op zowel competenties als culturele fit.", metric: "Top match" },
];

export function CaseStudiesSection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Resultaten</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-[2.5rem] leading-tight">Bewezen bij toonaangevende organisaties</h2>
          <p className="mt-5 text-lg text-primary-foreground/55">Een selectie van succesvolle plaatsingen.</p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {cases.map((c) => (
            <StaggerItem key={c.client} variant="fade-up">
              <div className="group h-full rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.04] p-8 transition-all duration-300 hover:border-primary-foreground/15 hover:bg-primary-foreground/[0.07]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent">{c.industry}</span>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">{c.metric}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{c.client}</h3>
                <div className="mt-4 space-y-3 border-t border-primary-foreground/8 pt-4">
                  <p className="text-sm leading-relaxed text-primary-foreground/45">
                    <span className="font-semibold text-primary-foreground/65">Uitdaging:</span> {c.challenge}
                  </p>
                  <p className="text-sm leading-relaxed text-primary-foreground/45">
                    <span className="font-semibold text-accent">Resultaat:</span> {c.result}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal variant="fade-in" delay={0.3} className="mt-12 text-center">
          <Link to="/nl/opdrachtgevers" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
            Alle referenties bekijken <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

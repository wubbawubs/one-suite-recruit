import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const cases = [
  { client: "MAS Aviation", industry: "Luchtvaart", challenge: "Behoefte aan een ervaren VP Operations binnen 6 weken.", result: "Kandidaat geplaatst in 18 dagen, nog steeds actief na 2 jaar.", metric: "18 dagen" },
  { client: "AFAS Software", industry: "Tech / SaaS", challenge: "Zoektocht naar een CTO die innovatie en schaalbaarheid combineert.", result: "3 topkandidaten gepresenteerd, plaatsing binnen 4 weken.", metric: "4 weken" },
  { client: "FinancePro Group", industry: "Finance", challenge: "CFO-positie voor een snelgroeiende fintech met complexe compliance-eisen.", result: "Succesvolle plaatsing met 98% match-score op competenties.", metric: "98% match" },
];

export function CaseStudiesSection() {
  return (
    <section className="bg-primary py-24 text-primary-foreground md:py-32">
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

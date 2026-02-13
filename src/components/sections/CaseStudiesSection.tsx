import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    client: "MAS Aviation",
    industry: "Luchtvaart",
    challenge: "Behoefte aan een ervaren VP Operations binnen 6 weken.",
    result: "Kandidaat geplaatst in 18 dagen — nog steeds actief na 2 jaar.",
  },
  {
    client: "AFAS Software",
    industry: "Tech/SaaS",
    challenge: "Zoektocht naar een CTO die innovatie en schaalbaarheid combineert.",
    result: "3 topkandidaten gepresenteerd, plaatsing binnen 4 weken.",
  },
  {
    client: "FinancePro Group",
    industry: "Finance",
    challenge: "CFO-positie voor een snelgroeiende fintech met complexe compliance-eisen.",
    result: "Succesvolle plaatsing met 98% match-score op competenties.",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Bewezen resultaten
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/60">
            Een selectie van succesvolle plaatsingen bij toonaangevende organisaties.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.client}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {c.industry}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {c.client}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/50">
                <strong className="text-primary-foreground/70">Uitdaging:</strong> {c.challenge}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/50">
                <strong className="text-accent">Resultaat:</strong> {c.result}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/nl/referenties"
            className="inline-flex items-center text-sm font-medium text-accent hover:underline"
          >
            Alle referenties bekijken <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
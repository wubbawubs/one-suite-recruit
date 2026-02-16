import { Building2, UserX, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const content = {
  nl: {
    label: "Het probleem",
    headline: "De meeste bedrijven verspillen maanden aan de verkeerde aanpak",
    cards: [
      {
        icon: Building2,
        title: "Traditionele searchbureaus",
        pain: "12+ weken doorlooptijd, retainer fees van €30.000+, en een black-box proces waar u niets van ziet.",
      },
      {
        icon: UserX,
        title: "Interne HR-afdeling",
        pain: "Geen netwerk voor C-level talent, geen tijd voor een gedegen search, en onvoldoende assessmentexpertise.",
      },
      {
        icon: Globe,
        title: "Jobboards & LinkedIn",
        pain: "Verkeerd publiek. De beste executives zitten niet op Indeed. Passief posten levert geen senior leiders op.",
      },
    ],
    closing: "Er is een betere manier.",
    cta: "Ontdek hoe",
    ctaHref: "/nl/diensten",
  },
  en: {
    label: "The problem",
    headline: "Most companies waste months on the wrong approach",
    cards: [
      {
        icon: Building2,
        title: "Traditional search firms",
        pain: "12+ weeks lead time, €30,000+ retainer fees, and a black-box process you never see inside.",
      },
      {
        icon: UserX,
        title: "Internal HR department",
        pain: "No network for C-level talent, no time for a thorough search, and insufficient assessment expertise.",
      },
      {
        icon: Globe,
        title: "Job boards & LinkedIn",
        pain: "Wrong audience. The best executives aren't on Indeed. And passive posting doesn't attract senior leaders.",
      },
    ],
    closing: "There's a better way.",
    cta: "Find out how",
    ctaHref: "/en/services",
  },
  de: {
    label: "Das Problem",
    headline: "Die meisten Unternehmen verschwenden Monate mit dem falschen Ansatz",
    cards: [
      {
        icon: Building2,
        title: "Traditionelle Personalberatungen",
        pain: "12+ Wochen Laufzeit, Retainer-Gebühren von €30.000+, und ein intransparenter Prozess.",
      },
      {
        icon: UserX,
        title: "Interne HR-Abteilung",
        pain: "Kein Netzwerk für C-Level-Talente, keine Zeit für eine gründliche Suche, unzureichende Assessment-Expertise.",
      },
      {
        icon: Globe,
        title: "Jobportale & LinkedIn",
        pain: "Falsche Zielgruppe. Die besten Führungskräfte sind nicht auf Indeed. Passives Posting bringt keine Senior Leader.",
      },
    ],
    closing: "Es gibt einen besseren Weg.",
    cta: "Erfahren Sie wie",
    ctaHref: "/de/leistungen",
  },
};

interface ProblemSectionProps {
  lang?: "nl" | "en" | "de";
}

export function ProblemSection({ lang = "nl" }: ProblemSectionProps) {
  const t = content[lang];

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-destructive">
            {t.label}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">
            {t.headline}
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {t.cards.map((card) => (
            <StaggerItem key={card.title} variant="fade-up">
              <div className="group flex h-full flex-col rounded-2xl border border-destructive/15 bg-destructive/[0.03] p-8 transition-all duration-300 hover:border-destructive/25 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {card.pain}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3} className="mt-14 text-center">
          <p className="text-2xl font-bold text-foreground md:text-3xl font-display">
            {t.closing}
          </p>
          <div className="mt-6">
            <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all duration-300">
              <Link to={t.ctaHref}>
                {t.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

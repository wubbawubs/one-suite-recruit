import { CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import sfeerZoekopdracht from "@/assets/sfeer-zoekopdracht.jpg";

const differentiators = [
  {
    title: "Exclusief netwerk",
    description: "Toegang tot een zorgvuldig opgebouwd netwerk van senior executives die niet actief zoeken.",
  },
  {
    title: "Bewezen assessmentmethode",
    description: "Gestructureerde selectie op basis van competenties, cultuurfit en leiderschapspotentieel.",
  },
  {
    title: "Vaste prijs, geen verrassingen",
    description: "Transparante tarieven zonder verborgen kosten. U weet vooraf exact wat uw investering is.",
  },
  {
    title: "Aftercare & garantie",
    description: "6 maanden nazorg en garantie op elke plaatsing. Wij staan voor duurzame matches.",
  },
  {
    title: "Persoonlijke partner",
    description: "Eén dedicated consultant die uw organisatie, cultuur en ambities door en door kent.",
  },
];

export function WhySection() {
  return (
    <section className="bg-muted/60 py-24 md:py-32">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-20">
          <ScrollReveal variant="slide-left" className="lg:col-span-2 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Waarom OneTime
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">
              Niet zomaar een recruitment&shy;bureau
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Wij zijn uw strategische partner in het vinden van leiderschap dat het verschil maakt.
            </p>
            <div className="mt-8 h-1 w-16 rounded-full bg-accent/30" />
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img src={sfeerZoekopdracht} alt="OneTime Recruit team in gesprek" className="h-auto w-full object-cover" />
            </div>
          </ScrollReveal>

          <StaggerContainer className="space-y-4 lg:col-span-3" stagger={0.08}>
            {differentiators.map((d) => (
              <StaggerItem key={d.title} variant="fade-up">
                <div className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent/25 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-card-foreground font-sans">
                      {d.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {d.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

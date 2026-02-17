import { CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import sfeerZoekopdracht from "@/assets/sfeer-zoekopdracht.jpg";

const differentiators = [
  {
    title: "Kandidaten die u nergens anders vindt",
    description: "Ons netwerk bestaat uit 7.500+ senior executives die niet op jobboards zitten. Wij benaderen ze persoonlijk.",
  },
  {
    title: "Geen onderbuikgevoel, maar data",
    description: "Gestructureerd assessment op competenties, leiderschapsstijl en cultuurfit. Elke kandidaat objectief beoordeeld.",
  },
  {
    title: "Vaste prijs, geen percentages",
    description: "U betaalt een vast bedrag, geen 25-30% van het jaarsalaris. Vooraf helder, achteraf geen verrassingen.",
  },
  {
    title: "6 maanden garantie op elke plaatsing",
    description: "Past het niet? Dan vinden wij kosteloos een vervanger. Wij geloven in onze matches.",
  },
  {
    title: "Eén partner die uw organisatie écht kent",
    description: "Geen wisselende consultants. Eén dedicated partner die uw cultuur, team en ambities door en door begrijpt.",
  },
];

export function WhySection() {
  return (
    <section className="bg-muted/60 py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-20">
          <ScrollReveal variant="slide-left" className="lg:col-span-2 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Waarom One Time
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">
              Niet zomaar een recruitment&shy;bureau
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Wij zijn uw strategische partner in het vinden van leiderschap dat het verschil maakt.
            </p>
            <div className="mt-8 h-1 w-16 rounded-full bg-accent/30" />
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img src={sfeerZoekopdracht} alt="One Time Recruit team in gesprek" className="h-auto w-full object-cover" />
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

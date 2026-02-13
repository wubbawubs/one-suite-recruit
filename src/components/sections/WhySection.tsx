import { CheckCircle } from "lucide-react";

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
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Waarom OneTime
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Niet zomaar een recruitmentbureau
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Wij zijn uw strategische partner in het vinden van leiderschap dat het verschil maakt.
            </p>
          </div>

          <div className="space-y-5">
            {differentiators.map((d) => (
              <div key={d.title} className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/30">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-[15px] font-semibold text-card-foreground font-sans">
                    {d.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
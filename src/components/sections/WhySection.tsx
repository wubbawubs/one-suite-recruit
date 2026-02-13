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
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Waarom OneTime Recruit
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Wij zijn niet zomaar een recruitmentbureau. Wij zijn uw strategische partner in het vinden van leiderschap dat het verschil maakt.
            </p>
          </div>

          <div className="space-y-6">
            {differentiators.map((d) => (
              <div key={d.title} className="flex gap-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-sans text-base font-semibold text-foreground">
                    {d.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
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
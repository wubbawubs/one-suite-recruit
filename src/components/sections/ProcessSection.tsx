const steps = [
  {
    number: "01",
    title: "Intake & Briefing",
    description: "Diepgaand gesprek over uw organisatie, cultuur, team en de ideale kandidaat.",
  },
  {
    number: "02",
    title: "Search & Sourcing",
    description: "Actieve benadering via ons exclusieve netwerk, LinkedIn, en gerichte multi-channel sourcing.",
  },
  {
    number: "03",
    title: "Shortlist & Assessment",
    description: "Gestructureerde selectie met competentie-assessment en cultuurfit-analyse.",
  },
  {
    number: "04",
    title: "Presentatie",
    description: "Uitgebreide kandidaatprofielen met onze aanbeveling en onderbouwing.",
  },
  {
    number: "05",
    title: "Selectie & Plaatsing",
    description: "Begeleiding bij gesprekken, onderhandelingen en een soepele onboarding.",
  },
  {
    number: "06",
    title: "Aftercare",
    description: "6 maanden nazorg om een succesvolle integratie te waarborgen.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Hoe we werken
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Een bewezen proces van intake tot aftercare — zodat u zeker weet dat u het juiste leiderschap vindt.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30"
            >
              <span className="font-display text-4xl font-bold text-accent/20">
                {step.number}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
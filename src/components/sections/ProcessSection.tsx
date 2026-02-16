import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const steps = [
  { number: "01", title: "Intake & Briefing", description: "Diepgaand gesprek over uw organisatie, cultuur, team en de ideale kandidaat." },
  { number: "02", title: "Search & Sourcing", description: "Actieve benadering via ons exclusieve netwerk, LinkedIn, en gerichte multi-channel sourcing." },
  { number: "03", title: "Shortlist & Assessment", description: "Gestructureerde selectie met competentie-assessment en cultuurfit-analyse." },
  { number: "04", title: "Presentatie", description: "Uitgebreide kandidaatprofielen met onze aanbeveling en onderbouwing." },
  { number: "05", title: "Selectie & Plaatsing", description: "Begeleiding bij gesprekken, onderhandelingen en een soepele onboarding." },
  { number: "06", title: "Aftercare", description: "6 maanden nazorg om een succesvolle integratie te waarborgen." },
];

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Ons proces</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Hoe we werken</h2>
          <p className="mt-5 text-lg text-muted-foreground">Een bewezen proces van intake tot aftercare.</p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {steps.map((step) => (
            <StaggerItem key={step.number} variant="scale-in">
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5">
                <div className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                <span className="font-display text-[3.5rem] font-bold leading-none text-accent/10 transition-colors group-hover:text-accent/20">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-card-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

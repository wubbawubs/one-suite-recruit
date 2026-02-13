import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

export function TrustBar() {
  const metrics = [
    { value: "100+", label: "Talentpools per industrie" },
    { value: "7.500+", label: "Beschikbaar top talent" },
    { value: "100+", label: "Maandelijkse vacatures" },
    { value: "98%", label: "Klanttevredenheid" },
  ];

  const clients = ["Arvoo", "BGH Accountants", "OOvB Accountants", "Energiebehoud", "Thales"];

  return (
    <section className="border-b border-border/50 bg-card py-16">
      <div className="container">
        <StaggerContainer className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4" stagger={0.08}>
          {metrics.map((m, i) => (
            <StaggerItem key={m.label} variant="fade-up">
              <div className="relative text-center">
                {i > 0 && (
                  <div className="absolute -left-3 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-border md:block" />
                )}
                <p className="font-display text-4xl font-bold text-foreground md:text-[2.75rem]">
                  {m.value}
                </p>
                <p className="mt-2 text-[13px] font-medium text-muted-foreground">{m.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal variant="fade-in" delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 border-t border-border/50 pt-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/50">
              Vertrouwd door
            </p>
            {clients.map((name) => (
              <span
                key={name}
                className="text-base font-extrabold uppercase tracking-[0.15em] text-muted-foreground/25 transition-colors hover:text-muted-foreground/50"
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

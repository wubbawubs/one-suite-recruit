export function TrustBar() {
  const metrics = [
    { value: "100+", label: "Talentpools per industrie" },
    { value: "7.500+", label: "Beschikbaar top talent" },
    { value: "100+", label: "Maandelijkse vacatures" },
    { value: "98%", label: "Klanttevredenheid" },
  ];

  const clients = ["AFAS", "MAS Aviation", "KLM", "Schiphol", "TechNova"];

  return (
    <section className="border-b border-border/60 py-14 md:py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-4">
          {metrics.map((m, i) => (
            <div key={m.label} className="relative text-center">
              {i > 0 && (
                <div className="absolute -left-2 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-border md:block" />
              )}
              <p className="font-display text-3xl font-bold text-foreground md:text-4xl">
                {m.value}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-border/60 pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            Vertrouwd door
          </p>
          {clients.map((name) => (
            <span
              key={name}
              className="text-base font-semibold text-muted-foreground/35 transition-colors hover:text-muted-foreground/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
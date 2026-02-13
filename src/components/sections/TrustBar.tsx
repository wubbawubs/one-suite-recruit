export function TrustBar() {
  const clients = ["AFAS", "MAS Aviation", "KLM", "Schiphol", "TechNova", "FinancePro"];
  const metrics = [
    { value: "7.500+", label: "Specialisten" },
    { value: "150+", label: "Plaatsingen" },
    { value: "98%", label: "Klanttevredenheid" },
    { value: "14", label: "Dagen gem. doorlooptijd" },
  ];

  return (
    <section className="border-b border-border bg-secondary/50 py-12">
      <div className="container">
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-3xl font-bold text-foreground md:text-4xl">
                {m.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Client logos placeholder */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-border pt-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Vertrouwd door
          </p>
          {clients.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
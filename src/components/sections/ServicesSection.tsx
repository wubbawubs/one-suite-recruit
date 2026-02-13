import { Search, Users, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description:
      "Wij vinden de juiste C-level en senior executives voor uw organisatie. Met een exclusief netwerk en bewezen assessmentmethode.",
    href: "/nl/diensten/executive-search",
  },
  {
    icon: Users,
    title: "Leadership Advisory",
    description:
      "Strategisch advies over leiderschap, teamsamenstelling en organisatieontwikkeling op het hoogste niveau.",
    href: "/nl/diensten/leiderschap",
  },
  {
    icon: Settings,
    title: "Recruitment Operating Model",
    description:
      "Wij bouwen en optimaliseren uw interne recruitmentprocessen. Van employer branding tot selectiemethodologie.",
    href: "/nl/diensten",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Wat wij voor u doen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Drie kerngebieden waarin we excelleren — allemaal gericht op het vinden en behouden van uitzonderlijk talent.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-card-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Meer informatie <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
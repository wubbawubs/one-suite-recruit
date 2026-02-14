import { Search, Users, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import sfeerWerving from "@/assets/sfeer-werving.jpg";
import sfeerSelectie from "@/assets/sfeer-selectie.jpg";
import sfeerAbonnement from "@/assets/sfeer-abonnement.jpg";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description:
      "Wij vinden de juiste C-level en senior executives voor uw organisatie. Met een exclusief netwerk en bewezen assessmentmethode.",
    href: "/nl/diensten",
    highlight: true,
    image: sfeerWerving,
    imagePosition: "center 35%",
  },
  {
    icon: Users,
    title: "Leadership Advisory",
    description:
      "Strategisch advies over leiderschap, teamsamenstelling en organisatieontwikkeling op het hoogste niveau.",
    href: "/nl/diensten",
    image: sfeerSelectie,
  },
  {
    icon: Settings,
    title: "Recruitment Operating Model",
    description:
      "Wij bouwen en optimaliseren uw interne recruitmentprocessen. Van employer branding tot selectiemethodologie.",
    href: "/nl/diensten",
    image: sfeerAbonnement,
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Onze expertise
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">
            Wat wij voor u doen
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Drie kerngebieden waarin we excelleren, allemaal gericht op het vinden en behouden van uitzonderlijk talent.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {services.map((s) => (
            <StaggerItem key={s.title} variant="fade-up">
              <Link
                to={s.href}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 ${
                  s.highlight
                    ? "border-accent/20 bg-accent/[0.03]"
                    : "border-border bg-card"
                } hover:border-accent/30`}
              >
                {s.highlight && (
                  <span className="absolute top-3 right-6 z-10 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                    Populair
                  </span>
                )}
                {s.image && (
                  <div className="h-48 overflow-hidden">
                    <img src={s.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: s.imagePosition || 'center 20%' }} />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-card-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent transition-all group-hover:gap-2">
                    Meer informatie <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

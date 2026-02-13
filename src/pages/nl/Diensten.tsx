import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Search, Users, Settings, Target, BarChart3, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description: "Wij vinden de juiste C-level en senior executives voor uw organisatie. Via ons exclusieve netwerk en bewezen assessmentmethode identificeren wij leiders die écht het verschil maken.",
    features: ["C-suite & VP-level plaatsingen", "Competentie-based assessment", "Cultuurfit-analyse", "18 dagen gemiddelde doorlooptijd"],
    href: "/nl/diensten/executive-search",
    highlight: true,
  },
  {
    icon: Users,
    title: "Leadership Advisory",
    description: "Strategisch advies over leiderschap, teamsamenstelling en organisatieontwikkeling op het hoogste niveau. Wij helpen uw leiderschapsteam toekomstbestendig te maken.",
    features: ["Leiderschapsevaluaties", "Succesplanning", "Team-effectiviteitsanalyse", "Board advisory"],
    href: "/nl/diensten/leiderschap",
  },
  {
    icon: Settings,
    title: "Recruitment Operating Model",
    description: "Wij bouwen en optimaliseren uw interne recruitmentprocessen. Van employer branding tot selectiemethodologie — zodat u structureel beter werft.",
    features: ["Proces-audit & optimalisatie", "Employer branding strategie", "ATS implementatie", "Recruiter training"],
    href: "/nl/diensten",
  },
  {
    icon: Target,
    title: "Interim Management",
    description: "Direct beschikbare interim executives voor kritische posities. Bewezen leiders die binnen dagen kunnen starten en direct impact maken.",
    features: ["Snelle beschikbaarheid", "Ervaren executives", "Flexibele contractvormen", "Naadloze overdracht"],
    href: "/nl/diensten",
  },
  {
    icon: BarChart3,
    title: "Talent Mapping",
    description: "Strategische inzichten in de talentmarkt. Wij brengen de beschikbaarheid en kwaliteit van talent in uw sector in kaart.",
    features: ["Marktanalyse per sector", "Concurrentie-benchmarking", "Salarisinzichten", "Beschikbaarheidsrapportage"],
    href: "/nl/diensten",
  },
  {
    icon: Briefcase,
    title: "Onboarding Support",
    description: "Begeleiding van nieuwe leiders tijdens hun eerste 100 dagen. Zodat uw investering in talent zich direct vertaalt naar resultaat.",
    features: ["100-dagen programma", "Stakeholder alignment", "Quick wins identificatie", "Performance monitoring"],
    href: "/nl/diensten",
  },
];

const NLDiensten = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Onze diensten</span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Strategische oplossingen voor <span className="text-accent">uitzonderlijk talent</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/55">
                Van executive search tot volledige recruitmentoptimalisatie — wij leveren op elk niveau.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 md:py-32">
          <div className="container">
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
              {services.map((s) => (
                <StaggerItem key={s.title} variant="fade-up">
                  <div className={`group relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 ${
                    s.highlight ? "border-accent/20 bg-accent/[0.03]" : "border-border bg-card"
                  } hover:border-accent/30`}>
                    {s.highlight && (
                      <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                        Meest gevraagd
                      </span>
                    )}
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold text-card-foreground">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.description}</p>
                    <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-accent py-20 md:py-24">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">
                Welke dienst past bij uw organisatie?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">
                Plan een vrijblijvend adviesgesprek en ontdek hoe wij u kunnen helpen.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Link to="/nl/contact">
                    Plan een gesprek <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NLDiensten;

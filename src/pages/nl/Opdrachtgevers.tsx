import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Clock, Users, Star, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const benefits = [
  { icon: Shield, title: "Garantie op elke plaatsing", description: "6 maanden volledige garantie. Valt de kandidaat uit? Wij zoeken kosteloos een vervanger." },
  { icon: Clock, title: "Gemiddeld 18 dagen", description: "Van intake tot shortlist in recordtijd — zonder concessies aan kwaliteit." },
  { icon: Star, title: "98% klanttevredenheid", description: "Onze klanten waarderen ons met een 9,4 gemiddeld. Relaties voor de lange termijn." },
  { icon: Zap, title: "Vaste prijs, geen verrassingen", description: "Transparant tarief vooraf. Geen verborgen kosten, geen percentages op jaarsalaris." },
];

const process = [
  { step: "01", title: "Vrijblijvend kennismaken", description: "We bespreken uw wensen, cultuur en het profiel van de ideale kandidaat." },
  { step: "02", title: "Gerichte search", description: "Ons team benadert actief geschikte kandidaten uit ons netwerk van 7.500+ specialisten." },
  { step: "03", title: "Shortlist presentatie", description: "U ontvangt 3-5 zorgvuldig geselecteerde kandidaten met uitgebreide profielen." },
  { step: "04", title: "Begeleiding & plaatsing", description: "Wij begeleiden het volledige traject van gesprekken tot onboarding en aftercare." },
];

const testimonials = [
  { quote: "OneTime leverde binnen twee weken drie uitstekende CTO-kandidaten. De kwaliteit van de shortlist was indrukwekkend.", author: "HR Director", company: "TechNova" },
  { quote: "Eindelijk een bureau dat écht begrijpt wat wij zoeken. De culturele fit was bij elke kandidaat raak.", author: "COO", company: "Royal Schiphol" },
  { quote: "De transparante prijsstructuur en persoonlijke aanpak maken OneTime onze vaste partner voor executive plaatsingen.", author: "CHRO", company: "KLM Group" },
];

const packages = [
  {
    name: "Search",
    description: "Eenmalige executive search opdracht",
    features: ["Dedicated consultant", "Shortlist van 3-5 kandidaten", "Competentie-assessment", "6 maanden garantie", "Aftercare programma"],
    cta: "Offerte aanvragen",
    popular: false,
  },
  {
    name: "Partnership",
    description: "Doorlopende samenwerking voor meerdere posities",
    features: ["Alles van Search", "Prioritaire behandeling", "Volumekorting", "Kwartaal talent reviews", "Strategisch advies", "Dedicated accountmanager"],
    cta: "Plan een gesprek",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Volledig recruitment operating model",
    features: ["Alles van Partnership", "Recruitment proces audit", "Employer branding support", "ATS implementatie", "Recruiter training", "Maandelijkse rapportage"],
    cta: "Neem contact op",
    popular: false,
  },
];

const NLOpdrachtgevers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Voor opdrachtgevers</span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Vind het <span className="text-accent">leiderschap</span> dat uw organisatie nodig heeft
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/55">
                Geen massa-CV's, maar zorgvuldig geselecteerde executives die passen bij uw cultuur, ambities en groeifase.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all duration-300">
                  <Link to="/nl/contact">Vrijblijvend gesprek plannen</Link>
                </Button>
                <Button asChild size="lg" className="h-13 rounded-full border-2 border-accent/60 bg-transparent px-10 text-[15px] font-semibold text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300">
                  <Link to="/nl/diensten">Bekijk onze diensten</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Waarom OneTime</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Wat u van ons mag verwachten</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {benefits.map((b) => (
                <StaggerItem key={b.title} variant="fade-up">
                  <div className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <b.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Process */}
        <section className="bg-muted/60 py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Hoe het werkt</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">In 4 stappen naar de juiste match</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {process.map((p) => (
                <StaggerItem key={p.step} variant="scale-in">
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/25 hover:shadow-lg">
                    <div className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                    <span className="font-display text-[3rem] font-bold leading-none text-accent/10 group-hover:text-accent/20 transition-colors">{p.step}</span>
                    <h3 className="mt-2 font-display text-lg font-bold text-card-foreground">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Packages */}
        <section className="py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Samenwerkingsvormen</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Kies de samenwerking die bij u past</h2>
              <p className="mt-5 text-lg text-muted-foreground">Van eenmalige opdracht tot strategisch partnership.</p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3" stagger={0.12}>
              {packages.map((pkg) => (
                <StaggerItem key={pkg.name} variant="fade-up">
                  <div className={`relative flex h-full flex-col rounded-2xl border p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pkg.popular ? "border-accent/30 bg-accent/[0.03]" : "border-border bg-card"}`}>
                    {pkg.popular && (
                      <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">Aanbevolen</span>
                    )}
                    <h3 className="font-display text-2xl font-bold text-card-foreground">{pkg.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">Op aanvraag</p>
                    <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                    <ul className="mt-8 flex-1 space-y-3">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="lg" className={`mt-8 h-12 w-full rounded-full text-[14px] font-semibold transition-all duration-300 ${pkg.popular ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90" : "border-2 border-border bg-transparent text-foreground hover:border-accent/30 hover:text-accent"}`}>
                      <Link to="/nl/contact">{pkg.cta}</Link>
                    </Button>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-primary py-24 text-primary-foreground md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Klantervaring</span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-[2.5rem] leading-tight">Wat onze opdrachtgevers zeggen</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.12}>
              {testimonials.map((t) => (
                <StaggerItem key={t.company} variant="fade-up">
                  <div className="flex h-full flex-col rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.04] p-8">
                    <p className="flex-1 text-[15px] italic leading-relaxed text-primary-foreground/65">"{t.quote}"</p>
                    <div className="mt-6 border-t border-primary-foreground/8 pt-5">
                      <p className="text-sm font-bold">{t.author}</p>
                      <p className="mt-0.5 text-xs text-accent">{t.company}</p>
                    </div>
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Klaar om te beginnen?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Plan een vrijblijvend kennismakingsgesprek en ontdek hoe wij uw organisatie versterken.</p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Link to="/nl/contact">Plan een gesprek <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

export default NLOpdrachtgevers;

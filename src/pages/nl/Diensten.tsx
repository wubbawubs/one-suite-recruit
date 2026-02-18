import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Search, Users, Target, BarChart3, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAlternates, nlBreadcrumbs } from "@/lib/seo";

const services = [
  {
    icon: Users,
    title: "Werving & Selectie",
    description: "Het vinden van de juiste professionals voor uw organisatie. Gericht, snel en met oog voor culturele fit en langetermijnmatch.",
    features: ["Mid- tot senior-level plaatsingen", "Shortlist binnen 18 dagen", "Culturele fit-analyse", "Vast tarief, geen verrassingen"],
    href: "/nl/werving-en-selectie",
  },
  {
    icon: Search,
    title: "Executive Search",
    description: "Wij vinden de juiste C-level en senior executives voor uw organisatie. Via ons exclusieve netwerk en bewezen assessmentmethodiek.",
    features: ["C-suite & VP-level plaatsingen", "Competentiegericht assessment", "Exclusief netwerk van 7.500+ executives", "Shortlist binnen 18 dagen"],
    href: "/nl/diensten/executive-search",
    highlight: true,
  },
  {
    icon: Target,
    title: "Interim Search",
    description: "Direct beschikbare interim-professionals voor kritieke posities. Bewezen leiders die binnen dagen starten en direct impact maken.",
    features: ["Snelle beschikbaarheid", "Ervaren professionals", "Flexibele contractvormen", "Naadloze overdracht"],
    href: "/nl/interim-management",
  },
  {
    icon: BarChart3,
    title: "Assessment & Selectie",
    description: "Objectieve evaluatie van kandidaten en leiders. Van competentiegerichte assessments tot culturele fit-analyses en leiderschapsevaluaties.",
    features: ["STAR-interviews", "Culturele fit-analyse", "Competentie-assessments", "Leiderschapsevaluaties"],
    href: "/nl/diensten/assessment-selectie",
  },
  {
    icon: Briefcase,
    title: "Leadership Advisory",
    description: "Strategisch advies over leiderschap, teamsamenstelling en organisatieontwikkeling op het hoogste niveau.",
    features: ["Successieplanning", "Team-effectiviteitsanalyse", "Board advisory", "Organisatieontwikkeling"],
    href: "/nl/diensten/leadership-advisory",
  },
];

const NLDiensten = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Diensten — One Time Recruit"
        description="Van executive search tot interim management en talent mapping. Ontdek onze strategische recruitmentdiensten voor middelgrote en grote organisaties."
        locale="nl_NL"
        alternates={getAlternates("diensten", ["nl", "de", "en"])}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          provider: { "@type": "Organization", name: "One Time Recruit" },
          serviceType: "Executive Search",
          areaServed: [{ "@type": "Country", name: "Netherlands" }, { "@type": "Country", name: "Germany" }],
          description: "Strategische executive search en recruitmentdiensten voor middelgrote en grote organisaties.",
        }}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={nlBreadcrumbs.diensten} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Onze diensten</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Traditioneel recruitment <span className="text-accent">kost meer dan u denkt</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/55">
                Verborgen kosten, maandenlange doorlooptijden en nul transparantie. Wij doen het anders — vast tarief, shortlist in 18 dagen, en u houdt de controle.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
              {services.map((s) => (
                <StaggerItem key={s.title} variant="fade-up">
                  <div className={`group relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 ${s.highlight ? "border-accent/20 bg-accent/[0.03]" : "border-border bg-card"} hover:border-accent/30`}>
                    {s.highlight && <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">Populair</span>}
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent"><s.icon className="h-6 w-6" /></div>
                    <h3 className="mt-6 font-display text-xl font-bold text-card-foreground">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.description}</p>
                    <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link to={s.href} className="mt-6 inline-flex items-center text-sm font-semibold text-accent transition-all group-hover:gap-2">
                      Meer informatie <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="border-y border-border/50 bg-muted/40 py-14">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              {[
                { value: "500+", label: "Succesvolle plaatsingen" },
                { value: "18", label: "Dagen Ø doorlooptijd" },
                { value: "98%", label: "Klanttevredenheid" },
                { value: "7.500+", label: "Specialisten in netwerk" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{m.value}</p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-accent py-14 md:py-20">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Welke dienst past bij uw organisatie?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Plan een vrijblijvend adviesgesprek en ontdek hoe wij u kunnen helpen.</p>
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

export default NLDiensten;

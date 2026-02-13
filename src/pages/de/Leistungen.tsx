import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Search, Users, Settings, Target, BarChart3, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAlternates } from "@/lib/seo";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description: "Wir finden die richtigen C-Level- und Senior-Führungskräfte für Ihr Unternehmen. Über unser exklusives Netzwerk und bewährte Assessment-Methoden identifizieren wir Führungspersönlichkeiten, die wirklich den Unterschied machen.",
    features: ["C-Suite & VP-Level Besetzungen", "Kompetenzbasiertes Assessment", "Kulturpassungs-Analyse", "18 Tage durchschnittliche Laufzeit"],
    href: "/de/leistungen",
    highlight: true,
  },
  {
    icon: Users,
    title: "Leadership Advisory",
    description: "Strategische Beratung zu Führung, Teamzusammensetzung und Organisationsentwicklung auf höchster Ebene. Wir machen Ihr Führungsteam zukunftsfähig.",
    features: ["Führungsevaluierungen", "Nachfolgeplanung", "Team-Effektivitätsanalyse", "Board Advisory"],
    href: "/de/kontakt",
  },
  {
    icon: Settings,
    title: "Recruitment Operating Model",
    description: "Wir bauen und optimieren Ihre internen Rekrutierungsprozesse. Von Employer Branding bis Auswahlmethodik, damit Sie strukturell besser einstellen.",
    features: ["Prozess-Audit & Optimierung", "Employer Branding Strategie", "ATS Implementierung", "Recruiter Training"],
    href: "/de/leistungen",
  },
  {
    icon: Target,
    title: "Interim Management",
    description: "Sofort verfügbare Interim-Führungskräfte für kritische Positionen. Bewährte Leader, die innerhalb von Tagen starten und direkt Wirkung erzielen.",
    features: ["Schnelle Verfügbarkeit", "Erfahrene Führungskräfte", "Flexible Vertragsformen", "Nahtlose Übergabe"],
    href: "/de/leistungen",
  },
  {
    icon: BarChart3,
    title: "Talent Mapping",
    description: "Strategische Einblicke in den Talentmarkt. Wir kartieren die Verfügbarkeit und Qualität von Talenten in Ihrer Branche.",
    features: ["Marktanalyse pro Sektor", "Wettbewerbs-Benchmarking", "Gehaltseinblicke", "Verfügbarkeitsberichte"],
    href: "/de/leistungen",
  },
  {
    icon: Briefcase,
    title: "Onboarding Support",
    description: "Begleitung neuer Führungskräfte während ihrer ersten 100 Tage. Damit sich Ihre Investition in Talent sofort in Ergebnissen zeigt.",
    features: ["100-Tage-Programm", "Stakeholder Alignment", "Quick Wins Identifikation", "Performance Monitoring"],
    href: "/de/leistungen",
  },
];

const DELeistungen = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Leistungen — OneTime Recruit"
        description="Von Executive Search bis Interim Management und Talent Mapping. Entdecken Sie unsere strategischen Rekrutierungsleistungen für Unternehmen."
        locale="de_DE"
        alternates={getAlternates("diensten", ["nl", "de"])}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          provider: { "@type": "Organization", name: "OneTime Recruit" },
          serviceType: "Executive Search",
          areaServed: [{ "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Netherlands" }],
          description: "Strategische Executive Search und Rekrutierungsleistungen für Unternehmen.",
        }}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/de" }, { label: "Leistungen" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Unsere Leistungen</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Strategische Lösungen für <span className="text-accent">außergewöhnliche Talente</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/55">
                Von Executive Search bis vollständiger Rekrutierungsoptimierung — wir liefern auf jedem Niveau.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
              {services.map((s) => (
                <StaggerItem key={s.title} variant="fade-up">
                  <div className={`group relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 ${s.highlight ? "border-accent/20 bg-accent/[0.03]" : "border-border bg-card"} hover:border-accent/30`}>
                    {s.highlight && <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">Am meisten gefragt</span>}
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
                      Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                { value: "500+", label: "Erfolgreiche Besetzungen" },
                { value: "18", label: "Tage Ø Laufzeit" },
                { value: "98%", label: "Kundenzufriedenheit" },
                { value: "7.500+", label: "Spezialisten im Netzwerk" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{m.value}</p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-accent py-20 md:py-24">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Welche Leistung passt zu Ihrem Unternehmen?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Vereinbaren Sie ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir Ihnen helfen können.</p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Link to="/de/kontakt">Gespräch vereinbaren <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

export default DELeistungen;

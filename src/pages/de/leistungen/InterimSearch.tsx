import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Clock, Shield, BarChart3, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const deliverables = [
  { icon: Zap, title: "Schnelle Verfügbarkeit", description: "Bewährte Interim-Fachkräfte, die innerhalb von Tagen starten und sofort Wirkung erzielen." },
  { icon: Users, title: "Erfahrene Professionals", description: "Manager und Führungskräfte mit nachgewiesener Erfolgsbilanz in vergleichbaren Rollen und Branchen." },
  { icon: Target, title: "Flexible Vertragsformen", description: "Von kurzfristigen Einsätzen bis zu langfristigen Mandaten — passend zu Ihrem Bedarf." },
  { icon: Shield, title: "Nahtlose Übergabe", description: "Strukturierte Übergangsplanung für eine reibungslose Übergabe an den permanenten Nachfolger." },
  { icon: BarChart3, title: "Wöchentliche Berichte", description: "Transparente Updates über Fortschritt und Wirkung des Interim-Einsatzes." },
  { icon: Award, title: "Ergebnisorientiert", description: "Klare KPIs und messbare Ergebnisse für jeden Interim-Auftrag." },
];

const scenarios = [
  "Plötzlicher Führungsausfall",
  "Überbrückung bis zur permanenten Besetzung",
  "Transformations- oder Change-Projekte",
  "Post-Merger-Integration",
  "Neue Markterschließung",
  "Turnaround oder Restrukturierung",
];

const faqs = [
  { q: "Wie schnell ist ein Interim Manager verfügbar?", a: "In der Regel innerhalb von 3-5 Werktagen. Unser Netzwerk umfasst sofort verfügbare Interim-Führungskräfte in allen wichtigen Funktionsbereichen." },
  { q: "Für welche Positionen eignet sich Interim Management?", a: "CEO, CFO, CTO, COO, Projektleiter, Change Manager und alle anderen Senior-Führungspositionen, die kurzfristig besetzt werden müssen." },
  { q: "Wie lange dauert ein typischer Interim-Einsatz?", a: "Üblicherweise 3-12 Monate, abhängig von der Aufgabenstellung. Wir bieten flexible Verlängerungsmöglichkeiten." },
  { q: "Was kostet Interim Management?", a: "Wir arbeiten mit transparenten Tagessätzen oder Festpreisen. Keine versteckten Gebühren oder Vermittlungsprovisionen." },
];

export default function DEInterimSearch() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Interim Search — Sofort verfügbare Führungskräfte | One Time Recruit"
        description="Bewährte Interim-Führungskräfte für kritische Positionen. Verfügbar innerhalb von Tagen, ergebnisorientiert, flexible Vertragsformen."
        locale="de_DE"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Interim Search",
          provider: { "@type": "Organization", name: "One Time Recruit" },
          serviceType: "Interim Management",
          areaServed: [{ "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Netherlands" }],
        }}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/de" }, { label: "Leistungen", href: "/de/leistungen" }, { label: "Interim Search" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Interim Search</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Sofort verfügbare <span className="text-accent">Führungskräfte</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Bewährte Interim-Professionals für kritische Positionen. Erfahrene Führungskräfte, die innerhalb von Tagen starten und sofort Wirkung erzielen.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg hover:bg-accent/90">
                  <Link to="/de/kontakt">Gespräch vereinbaren <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-13 rounded-full border-2 border-primary-foreground/30 px-8 text-[15px] font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/de/leistungen">Alle Leistungen</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Was Sie erhalten</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Erfahrene Interim-Führungskräfte</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {deliverables.map((d) => (
                <StaggerItem key={d.title} variant="fade-up">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"><d.icon className="h-5 w-5" /></div>
                    <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">{d.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="border-y border-border/50 bg-muted/30 py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-3xl">
              <div className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-8 md:p-10">
                <h3 className="font-display text-xl font-bold text-foreground">Wann setzen Sie Interim Management ein?</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {scenarios.map((s) => (
                    <div key={s} className="flex items-start gap-2.5">
                      <Zap className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">Häufig gestellte Fragen</h2>
            </ScrollReveal>
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6">
                    <AccordionTrigger className="text-left font-display text-base font-semibold text-card-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-accent py-14 md:py-20">
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Dringender Bedarf an Führung?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Kontaktieren Sie uns für sofort verfügbare Interim-Fachkräfte.</p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90">
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
}

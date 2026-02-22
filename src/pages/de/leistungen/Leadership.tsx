import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, BarChart3, Briefcase, Award, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const services = [
  { icon: Users, title: "Nachfolgeplanung", description: "Systematische Identifikation und Entwicklung zukünftiger Führungskräfte für kritische Schlüsselpositionen." },
  { icon: BarChart3, title: "Team-Effektivitätsanalyse", description: "Bewertung der Teamdynamik, Stärken und Entwicklungsbereiche für optimale Zusammenarbeit auf Führungsebene." },
  { icon: Building2, title: "Board Advisory", description: "Strategische Beratung zur Zusammensetzung von Vorstand und Aufsichtsrat für optimale Governance." },
  { icon: Target, title: "Organisationsentwicklung", description: "Begleitung bei Transformationsprozessen, Kulturwandel und strategischer Neuausrichtung." },
  { icon: Briefcase, title: "Führungsentwicklung", description: "Individuelle Entwicklungsprogramme für aktuelle und zukünftige Führungskräfte." },
  { icon: Award, title: "Executive Coaching", description: "Persönliches Coaching für Führungskräfte in Übergangs- oder Wachstumsphasen." },
];

const faqs = [
  { q: "Was umfasst Leadership Advisory?", a: "Strategische Beratung zu Führung, Teamzusammensetzung und Organisationsentwicklung auf höchster Ebene. Von Nachfolgeplanung bis Board Advisory." },
  { q: "Für wen eignet sich Leadership Advisory?", a: "Für Unternehmen in Wachstums-, Transformations- oder Übergangsphasen, die ihre Führungsebene zukunftssicher aufstellen möchten." },
  { q: "Wie unterscheidet sich das von Executive Search?", a: "Leadership Advisory fokussiert auf strategische Beratung und Entwicklung bestehender und zukünftiger Führungsstrukturen. Executive Search konzentriert sich auf die Besetzung konkreter Positionen." },
  { q: "Wie lange dauert ein typisches Beratungsmandat?", a: "Von einzelnen Workshops (1-2 Tage) bis hin zu langfristigen Begleitungen (6-12 Monate) für umfassende Transformationsprogramme." },
];

export default function DELeadership() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Leadership Advisory — Strategische Führungsberatung | One Time Recruit"
        description="Strategische Beratung zu Führung, Teamzusammensetzung und Organisationsentwicklung. Nachfolgeplanung, Board Advisory und Führungsentwicklung."
        locale="de_DE"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Leadership Advisory",
          provider: { "@type": "Organization", name: "One Time Recruit" },
          serviceType: "Leadership Advisory",
          areaServed: [{ "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Netherlands" }],
        }}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/de" }, { label: "Leistungen", href: "/de/leistungen" }, { label: "Leadership" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Leadership Advisory</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Zukunftssichere <span className="text-accent">Führung aufbauen</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Strategische Beratung zu Führung, Teamzusammensetzung und Organisationsentwicklung auf höchster Ebene.
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Ons aanbod</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Strategische Leadership-Dienste</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {services.map((d) => (
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

        <section className="border-t border-border/50 py-16 md:py-24">
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Ihre Führungsebene zukunftssicher machen?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Lassen Sie uns über Ihre strategischen Herausforderungen sprechen.</p>
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

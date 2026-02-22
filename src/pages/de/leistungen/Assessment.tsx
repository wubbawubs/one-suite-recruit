import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Shield, BarChart3, Search, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const methods = [
  { icon: Search, title: "STAR-Interviews", description: "Strukturierte kompetenzbasierte Interviews auf Basis der STAR-Methode für objektive Bewertung von Führungsqualitäten." },
  { icon: Target, title: "Kulturpassungs-Analyse", description: "Tiefgehende Analyse von Werten, Führungsstil und Organisationskultur für eine nachhaltige Passung." },
  { icon: BarChart3, title: "Führungspotenzial", description: "Evaluation von Wachstumspotenzial, Anpassungsfähigkeit und strategischem Denkvermögen." },
  { icon: Shield, title: "Referenzchecks", description: "Gründliche Referenzprüfungen bei relevanten Stakeholdern zur Verifizierung von Leistung und Führungsimpact." },
  { icon: Users, title: "Team-Dynamik", description: "Analyse der Teamdynamik und Bewertung, wie der Kandidat das bestehende Team ergänzt und stärkt." },
  { icon: Award, title: "360°-Feedback", description: "Umfassende Bewertung aus verschiedenen Perspektiven für ein vollständiges Bild des Kandidaten." },
];

const faqs = [
  { q: "Wann sollten Sie ein Assessment einsetzen?", a: "Bei Einstellungsentscheidungen für Schlüsselpositionen, Beförderungsentscheidungen, Führungsentwicklung, Nachfolgeplanung und Team-Effektivitätsanalysen." },
  { q: "Wie lange dauert ein Assessment?", a: "Ein Standard-Assessment umfasst 2-3 Stunden pro Kandidat. Umfassendere Assessments können einen ganzen Tag dauern." },
  { q: "Für welche Ebenen eignet sich Assessment?", a: "Von Mid-Level-Management bis C-Level — wir passen unsere Assessment-Methodik an die spezifische Führungsebene und Rolle an." },
  { q: "Wie objektiv ist das Assessment?", a: "Durch standardisierte Methoden (STAR), multiple Datenpunkte und erfahrene Assessoren gewährleisten wir höchstmögliche Objektivität und Reliabilität." },
];

export default function DEAssessment() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Assessment & Selektion — Objektive Kandidatenbewertung | One Time Recruit"
        description="Objektive Bewertung von Kandidaten und Führungskräften. STAR-Interviews, Kulturpassungs-Analyse, Kompetenz-Assessments und Führungsevaluierungen."
        locale="de_DE"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Assessment & Selektion",
          provider: { "@type": "Organization", name: "One Time Recruit" },
          serviceType: "Assessment",
          areaServed: [{ "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Netherlands" }],
        }}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/de" }, { label: "Leistungen", href: "/de/leistungen" }, { label: "Assessment" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Assessment</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Objektive Bewertung <span className="text-accent">für die richtige Entscheidung</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Von kompetenzbasierten Assessments bis hin zu Kulturpassungs-Analysen und Führungsevaluierungen — datengestützt und objektiv.
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Unsere Methodik</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Bewährte Assessment-Methoden</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {methods.map((d) => (
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Objektivität in Ihrer Personalentscheidung?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Erfahren Sie mehr über unsere Assessment-Methodik.</p>
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

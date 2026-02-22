import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Target, Clock, Shield, BarChart3, Search, Briefcase, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const deliverables = [
  { icon: Users, title: "Dedizierter Talent Pool", description: "Eine exklusive Shortlist von C-Level- und Senior-Kandidaten, maßgeschneidert für Ihre Position." },
  { icon: BarChart3, title: "Executive Assessment", description: "Kompetenzbasierte Bewertung mit STAR-Methodik, Kulturpassungs-Analyse und Führungspotenzial-Evaluation." },
  { icon: Clock, title: "Schnelle Shortlist", description: "Durchschnittlich 18 Arbeitstage von der Aufnahme bis zur Shortlist mit Top-Kandidaten." },
  { icon: Shield, title: "Garantieregelung", description: "Platzierungsgarantie mit kostenlosem Neustart bei Nichtpassung." },
  { icon: Target, title: "Wöchentliche Berichte", description: "Transparente Updates über Fortschritt, Pipeline und Marktintelligenz." },
  { icon: Award, title: "Onboarding-Support", description: "100-Tage-Begleitung nach der Platzierung für einen erfolgreichen Start." },
];

const personas = [
  { title: "CEO / Geschäftsführer", description: "Strategische Führung für Wachstum, Transformation oder Turnaround." },
  { title: "CFO / Finanzvorstand", description: "Finanzielle Führung für Governance, M&A und Skalierung." },
  { title: "CTO / CIO", description: "Technologische Führung für digitale Transformation und Innovation." },
  { title: "CHRO / Personalvorstand", description: "People-Leadership für Organisationsentwicklung und Kulturwandel." },
  { title: "COO / Betriebsleiter", description: "Operative Führung für Effizienz und Prozessoptimierung." },
  { title: "VP / Head-of Rollen", description: "Senior Management für spezifische Business Units oder funktionale Bereiche." },
];

const processSteps = [
  { step: "01", title: "Aufnahme & Profildefinition", duration: "Tag 1-2", description: "Tiefgehendes Gespräch über Organisation, Kultur, Herausforderungen und das ideale Führungsprofil." },
  { step: "02", title: "Marktanalyse & Sourcing", duration: "Tag 3-8", description: "Proaktive Suche über unser exklusives Netzwerk von 7.500+ Executives und diskrete Direktansprache." },
  { step: "03", title: "Assessment & Shortlist", duration: "Tag 9-14", description: "STAR-Interviews, Kompetenz-Assessments und Kulturpassungs-Analyse. Shortlist von 3-5 Kandidaten." },
  { step: "04", title: "Präsentation & Auswahl", duration: "Tag 15-18", description: "Ausführliche Kandidatenprofile mit Empfehlung und Begleitung des Interviewprozesses." },
  { step: "05", title: "Platzierung & Onboarding", duration: "Nach Auswahl", description: "Vertragsbegleitung und 100-Tage-Onboardingprogramm für nachhaltigen Erfolg." },
];

const faqs = [
  { q: "Was ist Executive Search?", a: "Executive Search ist eine spezialisierte Form der Personalsuche, bei der proaktiv nach Senior-Führungskräften (C-Level, Geschäftsführung, VP) gesucht wird. Anders als bei traditionellem Recruiting werden die besten Kandidaten direkt angesprochen — auch wenn sie nicht aktiv suchen." },
  { q: "Was unterscheidet Executive Search von einem Headhunter?", a: "Ein Headhunter arbeitet oft reaktiv und auf Provisionsbasis. Executive Search ist ein strategischer, methodischer Prozess mit umfassendem Assessment, exklusiver Suche und Garantieregelung. Wir arbeiten mit Festpreisen, keine versteckten Gebühren." },
  { q: "Was kostet Executive Search?", a: "Traditionelle Anbieter berechnen 25-35% des Jahresgehalts. Wir arbeiten mit transparenten Festpreisen — vorhersagbare Kosten unabhängig vom Gehaltsniveau." },
  { q: "Wie lange dauert ein Executive Search?", a: "Durchschnittlich 18 Arbeitstage bis zur Shortlist. Die Gesamtlaufzeit inklusive Auswahl beträgt in der Regel 4-8 Wochen." },
  { q: "Für welche Positionen eignet sich Executive Search?", a: "C-Level (CEO, CFO, CTO, CHRO, COO), Geschäftsführung, VP-Positionen, Board Members, Aufsichtsräte und Interim Executives." },
  { q: "Was wenn der platzierte Kandidat nicht passt?", a: "Wir bieten eine Garantieregelung. Bei Nichtpassung innerhalb der Garantieperiode starten wir kostenlos eine neue Suche. Unsere 12-Monats-Retention liegt bei 95%." },
];

export default function DEExecutiveSearch() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Executive Search Deutschland — C-Level & Führungskräfte | One Time Recruit"
        description="Spezialisierte Executive Search für C-Level, Geschäftsführung und VP-Positionen. Festpreise, Shortlist in 18 Tagen, exklusives Netzwerk von 7.500+ Executives."
        locale="de_DE"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Executive Search Deutschland",
          provider: { "@type": "Organization", name: "One Time Recruit" },
          serviceType: "Executive Search",
          areaServed: [{ "@type": "Country", name: "Germany" }, { "@type": "Country", name: "Netherlands" }],
        }}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/de" }, { label: "Leistungen", href: "/de/leistungen" }, { label: "Executive Search" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Executive Search</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Die richtige Führungskraft <span className="text-accent">für Ihr Unternehmen</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Spezialisierte Executive Search für C-Level, Geschäftsführung und VP-Positionen. Festpreis, Shortlist in 18 Tagen, dedizierter Talent Pool.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg hover:bg-accent/90">
                  <Link to="/de/kontakt">Gespräch vereinbaren <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-13 rounded-full border-2 border-primary-foreground/30 bg-transparent px-8 text-[15px] font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/de/leistungen">Alle Leistungen</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="border-b border-border/50 bg-muted/40 py-10">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              {[
                { value: "500+", label: "Executive Platzierungen" },
                { value: "18", label: "Tage bis Shortlist" },
                { value: "95%", label: "Retention nach 12 Monaten" },
                { value: "7.500+", label: "Executives im Netzwerk" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{m.value}</p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Was Sie erhalten</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Konkrete Deliverables</h2>
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
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Für wen</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Positionen die wir besetzen</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
              {personas.map((p) => (
                <StaggerItem key={p.title} variant="fade-up">
                  <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30">
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 text-accent" />
                      <h3 className="font-display text-base font-bold text-card-foreground">{p.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Unser Prozess</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Von der Aufnahme zur Shortlist in 18 Tagen</h2>
            </ScrollReveal>
            <div className="mx-auto mt-16 max-w-3xl space-y-0">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 0.1}>
                  <div className="relative flex gap-6 pb-12 last:pb-0">
                    {i < processSteps.length - 1 && <div className="absolute left-[23px] top-12 h-[calc(100%-24px)] w-px bg-border" />}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">{step.step}</div>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                        <span className="rounded-full bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground">{step.duration}</span>
                      </div>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Bereit für die richtige Führungskraft?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Vereinbaren Sie ein unverbindliches Beratungsgespräch.</p>
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

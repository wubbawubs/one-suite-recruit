import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Compass, Shield, Target, BarChart3, Lightbulb, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const deliverables = [
  { icon: Compass, title: "Succesplanning & opvolging", description: "Strategische planning voor leiderschapstransities. Identificeer opvolgers, ontwikkel potentieel en minimaliseer risico bij vertrek van sleutelposities." },
  { icon: BarChart3, title: "Team-effectiviteitsanalyse", description: "Diepgaande evaluatie van uw leiderschapsteam: complementariteit, blinde vlekken en ontwikkelpotentieel op basis van bewezen frameworks." },
  { icon: Shield, title: "Board advisory", description: "Strategisch advies aan raden van bestuur en commissarissen over governance, teamsamenstelling en organisatieontwikkeling." },
  { icon: Target, title: "Organisatieontwikkeling", description: "Advies bij herstructurering, fusies en schaalvergroting. Hoe bouwt u een leiderschapsstructuur die klaar is voor de volgende groeifase?" },
];

const services = [
  { title: "Leiderschapsassessment", description: "Objectieve evaluatie van huidige en toekomstige leiders op competenties, potentieel en cultuurfit.", href: "/nl/diensten/assessment-selectie", icon: CheckCircle },
  { title: "Executive coaching trajecten", description: "Gerichte ontwikkeltrajecten voor C-level en directieleden in transitie of groeifase.", icon: Users },
  { title: "Onboarding support", description: "100-dagen onboarding programma voor nieuwe executives om sneller impact te maken.", href: "/nl/onboarding-executives", icon: Lightbulb },
];

const triggers = [
  "Vertrek van een sleutel-bestuurder of directielid",
  "Fusie, overname of strategische heroriëntatie",
  "Snelle groei vereist schaalbaar leiderschapsmodel",
  "Leiderschapsteam functioneert niet optimaal",
  "Governance of compliance vraagstukken",
  "Nieuwe markt of business unit opzetten",
];

const faqs = [
  {
    q: "Wat is leadership advisory precies?",
    a: "Leadership advisory is strategisch advies over leiderschap, teamsamenstelling en organisatieontwikkeling op het hoogste niveau. Het gaat verder dan recruitment: wij helpen u structureel de juiste leiders op de juiste posities te krijgen — en te houden. Dit omvat succesplanning, team-effectiviteitsanalyses, board advisory en organisatie-herontwerp.",
  },
  {
    q: "Voor welke organisaties is leadership advisory relevant?",
    a: "Leadership advisory is relevant voor elke organisatie die groeit, transformeert of te maken heeft met leiderschapstransities. Van scale-ups die hun eerste managementteam opbouwen tot corporates die hun leiderschapsstructuur toekomstbestendig willen maken. Wij werken branche-onafhankelijk.",
  },
  {
    q: "Hoe verschilt dit van executive search?",
    a: "Executive search richt zich op het vinden en plaatsen van individuele leiders. Leadership advisory is breder: het gaat om de strategische samenstelling en ontwikkeling van uw totale leiderschapsteam. Vaak combineren organisaties beide diensten — eerst de strategie bepalen, dan de juiste leiders zoeken.",
  },
  {
    q: "Wat kost leadership advisory?",
    a: "Wij werken met transparante, vaste tarieven per traject. De investering hangt af van de scope: een succesplanning voor één positie is anders geprijsd dan een volledige team-effectiviteitsanalyse. In een vrijblijvend gesprek maken wij een maatwerkvoorstel.",
  },
  {
    q: "Hoe lang duurt een leadership advisory traject?",
    a: "Een focused traject (bijv. succesplanning voor één positie) duurt 2-4 weken. Een uitgebreide team-effectiviteitsanalyse of organisatie-herontwerp duurt 4-8 weken. Wij werken altijd met duidelijke milestones en wekelijkse updates.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leadership Advisory",
  provider: { "@type": "Organization", name: "One Time Recruit", url: "https://onetimerecruit.nl" },
  serviceType: "Leadership Advisory",
  areaServed: { "@type": "Country", name: "Netherlands" },
  description: "Strategisch advies over leiderschap, teamsamenstelling en organisatieontwikkeling. Succesplanning, board advisory en team-effectiviteitsanalyse.",
};

export default function LeadershipAdvisory() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Leadership Advisory | Strategisch Leiderschapsadvies | One Time Recruit"
        description="Strategisch advies over leiderschap, teamsamenstelling en organisatieontwikkeling. Succesplanning, board advisory en team-effectiviteitsanalyse met vaste tarieven."
        locale="nl_NL"
        jsonLd={[faqJsonLd, serviceJsonLd] as unknown as Record<string, unknown>}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/nl" }, { label: "Diensten", href: "/nl/diensten" }, { label: "Leadership Advisory" }]} />
      </div>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Leadership Advisory</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Bouw een leiderschapsteam dat <span className="text-accent">de toekomst aankan</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Strategisch advies over teamsamenstelling, succesplanning en organisatieontwikkeling. Zodat uw leiderschapsstructuur klaar is voor de volgende fase.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 transition-all duration-300">
                  <Link to="/nl/contact">Plan een adviesgesprek <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-13 rounded-full border-primary-foreground/20 px-8 text-[15px] font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/nl/diensten/c-level-recruitment">C-level recruitment</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Social proof */}
        <section className="border-b border-border/50 bg-muted/40 py-10">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              {[
                { value: "150+", label: "Advisory trajecten" },
                { value: "95%", label: "Klanttevredenheid" },
                { value: "50+", label: "Boardroom-evaluaties" },
                { value: "30+", label: "Sectoren bediend" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{m.value}</p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">Waarom leadership advisory onmisbaar is</h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>Organisaties investeren miljoenen in strategie, technologie en marktpositie — maar de kwaliteit van het leiderschapsteam bepaalt uiteindelijk of die investeringen renderen. Toch behandelen de meeste organisaties leiderschap als iets dat vanzelf gaat.</p>
                <p>Leadership advisory maakt leiderschap een strategisch thema. Van <Link to="/nl/onboarding-executives" className="font-medium text-accent hover:underline">onboarding van nieuwe executives</Link> tot het evalueren van uw huidige team, van succesplanning tot het ontwerpen van een leiderschapsstructuur die past bij uw groeifase.</p>
                <p>Bij One Time Recruit combineren wij diepgaande ervaring in <Link to="/nl/diensten/executive-search" className="font-medium text-accent hover:underline">executive search</Link> en <Link to="/nl/diensten/assessment-selectie" className="font-medium text-accent hover:underline">assessment</Link> met strategisch organisatieadvies. Geen theoretische modellen, maar pragmatisch advies dat leidt tot concrete beslissingen.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Deliverables */}
        <section className="border-y border-border/50 bg-muted/30 py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Wat u krijgt</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Leadership advisory diensten</h2>
              <p className="mt-4 text-muted-foreground">Strategisch advies dat leidt tot meetbare verbeteringen in uw leiderschapsteam.</p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2" stagger={0.08}>
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

        {/* Services grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Aanpak</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Hoe wij leadership advisory inzetten</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3" stagger={0.08}>
              {services.map((s) => (
                <StaggerItem key={s.title} variant="fade-up">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"><s.icon className="h-5 w-5" /></div>
                    <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.description}</p>
                    {s.href && (
                      <Link to={s.href} className="mt-auto pt-6 inline-flex items-center text-sm font-semibold text-accent">
                        Lees meer <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Triggers */}
        <section className="border-y border-border/50 bg-muted/30 py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-3xl">
              <div className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-8 md:p-10">
                <h2 className="font-display text-xl font-bold text-foreground">Wanneer schakelt u leadership advisory in?</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {triggers.map((trigger) => (
                    <div key={trigger} className="flex items-start gap-2.5">
                      <Zap className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{trigger}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Veelgestelde vragen</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">FAQ over leadership advisory</h2>
            </ScrollReveal>
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-accent/30">
                    <AccordionTrigger className="text-left font-display text-[15px] font-semibold text-card-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-accent py-20 md:py-24">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground">Klaar om uw leiderschapsteam te versterken?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Plan een vrijblijvend adviesgesprek en ontdek hoe wij uw leiderschapsstructuur toekomstbestendig kunnen maken.</p>
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
}

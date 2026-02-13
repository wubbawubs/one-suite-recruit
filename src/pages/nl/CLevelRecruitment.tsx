import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase, Crown, Shield, Award, CheckCircle, Target, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const roles = [
  { title: "CEO Recruitment", description: "Strategisch leiderschap voor groei, transformatie of turnaround.", href: "/nl/ceo-recruitment", icon: Crown },
  { title: "CFO Recruitment", description: "Financieel leiderschap voor governance, M&A en schaalvergroting.", href: "/nl/cfo-recruitment", icon: Briefcase },
  { title: "CTO / CIO Recruitment", description: "Technologisch leiderschap voor digitale transformatie en innovatie.", href: "/nl/cto-cio-recruitment", icon: Shield },
  { title: "CHRO Recruitment", description: "People-leiderschap voor organisatieontwikkeling en cultuurverandering.", href: "/nl/chro-recruitment", icon: Users },
  { title: "Board & Commissarissen", description: "Toezichthoudend leiderschap met governance-expertise.", href: "/nl/board-commissarissen-search", icon: Award },
];

const deliverables = [
  { icon: Target, title: "Executive profiling", description: "Diepgaande analyse van leiderschapscompetenties, drijfveren en strategische fit met uw organisatiecultuur." },
  { icon: BarChart3, title: "Marktinzicht per functie", description: "Salaris-benchmarks, beschikbaarheid en concurrentieanalyse voor uw specifieke C-level vacature." },
  { icon: Shield, title: "Confidential search", description: "Discrete benadering van passieve kandidaten — met maximale bescherming van uw strategische plannen." },
  { icon: CheckCircle, title: "Assessment & referenties", description: "STAR-interviews, cultuurfit-analyse en grondige referentiechecks bij relevante stakeholders." },
];

const triggers = [
  "Opvolgingsplanning voor vertrekkend bestuurslid",
  "Strategische transformatie of koerswijziging",
  "Snelle groei vereist nieuw leiderschapsniveau",
  "Post-fusie integratie van managementteams",
  "Turnaround of crisismanagement",
  "Nieuwe business unit of marktexpansie",
];

const faqs = [
  {
    q: "Wat maakt C-level recruitment anders dan reguliere werving?",
    a: "C-level recruitment vereist een fundamenteel andere aanpak dan reguliere werving. De kandidatenpool is kleiner, discretie is essentieel, en de impact van een verkeerde keuze is enorm. Bij OneTime Recruit combineren wij executive search methodiek met diepgaande assessment om bestuurders te vinden die niet alleen de juiste competenties hebben, maar ook passen bij uw organisatiecultuur en strategische ambities.",
  },
  {
    q: "Hoe lang duurt een C-level search traject?",
    a: "Een C-level search traject duurt gemiddeld 4-8 weken van intake tot shortlist. De complexiteit van de rol, de mate van confidentialiteit en de besluitvorming aan uw kant beïnvloeden de doorlooptijd. Wij hanteren een gestructureerd proces met wekelijkse updates, zodat u altijd weet waar het traject staat.",
  },
  {
    q: "Hoe waarborgen jullie discretie bij confidential search?",
    a: "Confidential search is een kerncompetentie van OneTime Recruit. Wij werken met NDA's, anonieme functieprofielen en persoonlijke, telefonische benadering van kandidaten. De identiteit van uw organisatie wordt pas onthuld na schriftelijke toestemming van alle betrokken partijen.",
  },
  {
    q: "Wat als de geplaatste bestuurder niet past?",
    a: "Wij bieden een garantieregeling op al onze C-level plaatsingen. Als de match binnen de garantieperiode niet blijkt te werken, starten wij kosteloos een nieuwe search. Ons retentiepercentage na 12 maanden is 95%, mede dankzij onze grondige assessmentmethode en 100-dagen onboarding support.",
  },
  {
    q: "Werken jullie ook voor scale-ups en MKB?",
    a: "Ja. C-level recruitment is relevant voor elke organisatie die groeit of transformeert. Of u nu een scale-up bent die haar eerste CFO zoekt of een enterprise organisatie die een nieuwe CEO nodig heeft — onze methodiek schaalt mee met uw behoefte. De investering is altijd transparant via vaste tarieven.",
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
  name: "C-level & Directie Recruitment",
  provider: { "@type": "Organization", name: "OneTime Recruit", url: "https://onetimerecruit.nl" },
  serviceType: "Executive Recruitment",
  areaServed: { "@type": "Country", name: "Netherlands" },
  description: "Gespecialiseerde recruitment voor C-level en directieposities in Nederland. CEO, CFO, CTO, CHRO en board search met bewezen assessment methodiek en vaste tarieven.",
};

export default function CLevelRecruitment() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="C-level & Directie Recruitment Nederland | OneTime Recruit"
        description="Gespecialiseerde recruitment voor C-level en directieposities. CEO, CFO, CTO, CHRO en board search met bewezen assessment methodiek en vaste tarieven."
        locale="nl_NL"
        jsonLd={[faqJsonLd, serviceJsonLd] as unknown as Record<string, unknown>}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/nl" }, { label: "Diensten", href: "/nl/diensten" }, { label: "C-level Recruitment" }]} />
      </div>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">C-level & Directie</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                De juiste <span className="text-accent">C-level leider</span> voor uw organisatie
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Van CEO tot CHRO — wij vinden bestuurders en directieleden die strategische impact maken. Met bewezen assessment, vaste tarieven en een gemiddelde doorlooptijd van 18 dagen.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 transition-all duration-300">
                  <Link to="/nl/contact">Plan een kennismaking <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-13 rounded-full border-primary-foreground/20 px-8 text-[15px] font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/nl/executive-search">Executive search methodiek</Link>
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
                { value: "200+", label: "C-level plaatsingen" },
                { value: "95%", label: "Retentie na 12 maanden" },
                { value: "18", label: "Dagen gem. doorlooptijd" },
                { value: "50+", label: "Sectoren bediend" },
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
        <section className="py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">Waarom C-level recruitment een specialisme is</h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>De keuze voor een nieuwe bestuurder of directielid is een van de meest impactvolle beslissingen die een organisatie neemt. Een verkeerde C-level hire kost gemiddeld 2,5x het jaarsalaris — en dat is exclusief de strategische schade, het moraalverlies en de vertraging in executie.</p>
                <p>C-level recruitment vraagt om een fundamenteel andere aanpak dan reguliere werving. De kandidatenpool is klein en exclusief. De beste leiders zijn zelden actief op zoek. Discretie is essentieel — zowel voor uw organisatie als voor de kandidaat. En de assessment moet verder gaan dan cv en competenties: het gaat om <Link to="/nl/culture-fit-vs-culture-add" className="font-medium text-accent hover:underline">cultuurfit</Link>, strategisch denkvermogen en de capaciteit om op het hoogste niveau impact te maken.</p>
                <p>Bij OneTime Recruit combineren wij de diepgang van boutique executive search met de snelheid en transparantie die moderne organisaties verwachten. Geen procentuele fees, geen verborgen kosten — <Link to="/nl/kosten-executive-search" className="font-medium text-accent hover:underline">vaste tarieven</Link> voor elke C-level search.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Deliverables */}
        <section className="border-y border-border/50 bg-muted/30 py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Wat u krijgt</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">C-level search deliverables</h2>
              <p className="mt-4 text-muted-foreground">Elke C-level search levert concrete, meetbare resultaten.</p>
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

        {/* Roles grid */}
        <section className="py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Specialisaties</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">C-level posities die wij invullen</h2>
              <p className="mt-4 text-muted-foreground">Klik op een rol voor diepgaande informatie over onze aanpak per functie.</p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {roles.map((role) => (
                <StaggerItem key={role.title} variant="fade-up">
                  <Link to={role.href} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"><role.icon className="h-5 w-5" /></div>
                    <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">{role.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{role.description}</p>
                    <span className="mt-auto pt-6 inline-flex items-center text-sm font-semibold text-accent">Lees meer <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Triggers */}
        <section className="border-y border-border/50 bg-muted/30 py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-3xl">
              <div className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-8 md:p-10">
                <h2 className="font-display text-xl font-bold text-foreground">Wanneer schakelt u C-level recruitment in?</h2>
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
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">FAQ over C-level recruitment</h2>
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground">Welke leider zoekt u?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Plan een vrijblijvend gesprek en bespreek uw C-level leiderschapsbehoefte.</p>
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
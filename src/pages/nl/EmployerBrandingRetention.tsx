import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Rocket, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const spokes = [
  { title: "Leadership Retention", description: "Mis-hires voorkomen en retentie verbeteren met bewezen strategieën voor executive talent.", href: "/nl/leadership-retention", icon: Heart },
  { title: "Onboarding Executives", description: "Het 90-dagen plan voor een succesvolle start — de kritieke fase na plaatsing.", href: "/nl/onboarding-executives", icon: Rocket },
  { title: "Employer Brand voor Senior Talent", description: "Uw werkgeverspropositie versterken voor topkandidaten die niet op jobboards zoeken.", href: "/nl/employer-brand-senior-talent", icon: Award },
  { title: "Compensation & Benefits Trends", description: "Actuele beloningstrends voor executives in Nederland — data die u nodig heeft.", href: "/nl/compensation-benefits-trends", icon: TrendingUp },
];

const challenges = [
  { title: "Toptalent trekt toptalent aan", description: "Sterke leiders kiezen voor organisaties met een sterke leiderschapscultuur. Uw employer brand bepaalt welk kaliber kandidaten u aantrekt." },
  { title: "De eerste 90 dagen zijn kritiek", description: "40% van extern aangetrokken executives vertrekt binnen 18 maanden. Een gestructureerd onboardingprogramma verlaagt dit risico drastisch." },
  { title: "Retentie begint bij selectie", description: "De beste retentiestrategie is een excellente selectieprocedure. Culture fit, leiderschapsstijl en waarden moeten matchen met uw organisatie." },
];

const faqs = [
  {
    q: "Waarom is employer branding belangrijk voor executive recruitment?",
    a: "De beste executives zijn zelden actief op zoek. Zij kiezen hun volgende stap op basis van reputatie, cultuur en strategische ambitie van de organisatie. Een sterk employer brand zorgt ervoor dat topkandidaten openstaan voor uw benadering — en dat zij ja zeggen wanneer u het juiste aanbod doet.",
  },
  {
    q: "Wat is de ROI van executive onboarding?",
    a: "Onderzoek toont aan dat gestructureerde onboarding de retentie van senior hires met 82% verbetert en de time-to-productivity met 70% verkort. Gezien de gemiddelde kosten van een mislukte C-level hire (2,5x jaarsalaris), is investering in onboarding een van de meest rendabele HR-investeringen.",
  },
  {
    q: "Hoe verbeteren jullie de retentie na plaatsing?",
    a: "Wij bieden 100-dagen onboarding support bij elke executive plaatsing. Dit omvat regelmatige check-ins met zowel de kandidaat als de opdrachtgever, coaching bij culturele integratie, en vroege signalering van potentiële issues. Ons retentiepercentage na 12 maanden is 95%.",
  },
  {
    q: "Wat zijn de actuele compensatie-trends voor executives in Nederland?",
    a: "Executive compensatie in Nederland verschuift naar meer variabele beloning, equity-participatie en wellbeing-benefits. Vaste salarissen stijgen 5-8% per jaar voor C-level posities, met significante variatie per sector. Lees onze actuele analyse voor gedetailleerde benchmarks per functie en sector.",
  },
  {
    q: "Hoe bouwen wij een sterker employer brand voor senior talent?",
    a: "Focus op drie pijlers: (1) authentiek leiderschap — laat uw huidige leiders zien, (2) strategisch narratief — communiceer uw ambitie en impact, en (3) candidate experience — behandel elke senior kandidaat als een stakeholder. Wij adviseren u over de concrete stappen.",
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
  name: "Employer Branding & Retention voor Senior Talent",
  provider: { "@type": "Organization", name: "OneTime Recruit", url: "https://onetimerecruit.nl" },
  serviceType: "Employer Branding Advisory",
  areaServed: { "@type": "Country", name: "Netherlands" },
  description: "Hoe u toptalent aantrekt én behoudt. Employer branding, executive onboarding, retentiestrategieën en compensatie-analyse voor senior leiders.",
};

export default function EmployerBrandingRetention() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Employer Branding & Retention voor Senior Talent | OneTime Recruit"
        description="Hoe u toptalent aantrekt én behoudt. Employer branding, executive onboarding, retentiestrategieën en compensatie-analyse voor senior leiders."
        locale="nl_NL"
        jsonLd={[faqJsonLd, serviceJsonLd] as unknown as Record<string, unknown>}
      />
      <Header />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/nl" }, { label: "Diensten", href: "/nl/diensten" }, { label: "Employer Branding & Retention" }]} /></div>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Aantrekken & Behouden</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Employer branding & <span className="text-accent">retention</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Toptalent aantrekken is stap één. Behouden is de echte uitdaging. Van employer brand tot onboarding — wij helpen u bij elke fase.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 transition-all duration-300">
                  <Link to="/nl/contact">Bespreek uw strategie <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
                { value: "95%", label: "Retentie na 12 maanden" },
                { value: "82%", label: "Verbetering door onboarding" },
                { value: "100", label: "Dagen onboarding support" },
                { value: "2.5x", label: "Kosten mis-hire voorkomen" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{m.value}</p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">Waarom retentie begint vóór de plaatsing</h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>40% van extern aangetrokken executives vertrekt binnen 18 maanden. De kosten? Gemiddeld 2,5x het jaarsalaris — exclusief de strategische schade, het moraalverlies en de vertraging in executie. De oplossing is niet beter zoeken, maar beter selecteren, beter onboarden en beter behouden.</p>
                <p>Bij OneTime Recruit begint retentie al bij de <Link to="/nl/assessment-selectie" className="font-medium text-accent hover:underline">assessment-fase</Link>. Onze <Link to="/nl/culture-fit-vs-culture-add" className="font-medium text-accent hover:underline">cultuurfit-analyse</Link> en <Link to="/nl/referentiechecks" className="font-medium text-accent hover:underline">referentiechecks</Link> voorspellen niet alleen of iemand de functie aankan, maar ook of de match duurzaam is. Na plaatsing bieden wij 100-dagen <Link to="/nl/onboarding-executives" className="font-medium text-accent hover:underline">onboarding support</Link> om de kritieke integratiefase te begeleiden.</p>
                <p>Daarnaast adviseren wij over <Link to="/nl/employer-brand-senior-talent" className="font-medium text-accent hover:underline">employer branding</Link> en <Link to="/nl/compensation-benefits-trends" className="font-medium text-accent hover:underline">compensatie-strategie</Link> zodat u niet alleen de juiste leiders aantrekt, maar hen ook op lange termijn aan uw organisatie bindt.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Challenges */}
        <section className="border-y border-border/50 bg-muted/30 py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">De uitdaging</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Drie inzichten over executive retentie</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3" stagger={0.08}>
              {challenges.map((c) => (
                <StaggerItem key={c.title} variant="fade-up">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30">
                    <h3 className="font-display text-lg font-bold text-card-foreground">{c.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{c.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Spoke links */}
        <section className="py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Verdieping</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Employer branding & retention strategieën</h2>
              <p className="mt-4 text-muted-foreground">Lees meer over elke strategie voor het aantrekken en behouden van senior talent.</p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2" stagger={0.08}>
              {spokes.map((item) => (
                <StaggerItem key={item.title} variant="fade-up">
                  <Link to={item.href} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"><item.icon className="h-5 w-5" /></div>
                    <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.description}</p>
                    <span className="mt-auto pt-6 inline-flex items-center text-sm font-semibold text-accent">Lees meer <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border/50 bg-muted/30 py-20 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Veelgestelde vragen</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">FAQ over employer branding & retention</h2>
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground">Uw employer brand versterken?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Plan een gesprek over uw talent strategie.</p>
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
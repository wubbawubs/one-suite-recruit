import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Search, Target, Shield, CheckCircle, Eye, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const spokes = [
  { title: "STAR Interview Guide", description: "De bewezen methode voor gestructureerde competentie-interviews die leiderschapskwaliteiten objectief meten.", href: "/nl/star-interview-guide", icon: Search },
  { title: "Assessment Inzetten", description: "Wanneer wel en niet: de juiste timing en context voor assessments in executive recruitment.", href: "/nl/assessment-inzetten", icon: BarChart3 },
  { title: "Referentiechecks", description: "Best practices voor waardevolle referentie-informatie die écht iets zegt over leiderschapsimpact.", href: "/nl/referentiechecks", icon: Shield },
  { title: "Culture Fit vs Culture Add", description: "Zoekt u aansluiting bij uw huidige cultuur of vernieuwing die uw organisatie verder brengt?", href: "/nl/culture-fit-vs-culture-add", icon: Target },
];

const methodSteps = [
  { icon: Eye, title: "Competentie-mapping", description: "Samen met u definiëren wij het leiderschapsprofiel: welke competenties, ervaring en persoonlijkheidseigenschappen zijn kritiek voor succes in deze specifieke rol?" },
  { icon: Search, title: "STAR-interviews", description: "Gestructureerde interviews op basis van de Situatie-Taak-Actie-Resultaat methode. Geen onderbuikgevoel, maar bewezen voorspellende validiteit voor leiderschapsprestaties." },
  { icon: Layers, title: "Multi-source assessment", description: "Combinatie van competentie-interviews, case studies, psychometrische tools en referentiechecks voor een 360°-beeld van elke kandidaat." },
  { icon: CheckCircle, title: "Cultuurfit-analyse", description: "Diepgaande analyse van waarden, leiderschapsstijl en organisatiecultuur. Wij beoordelen niet alleen of iemand past, maar ook of iemand vernieuwing brengt." },
];

const faqs = [
  {
    q: "Waarom is assessment belangrijk bij executive recruitment?",
    a: "Een verkeerde C-level hire kost gemiddeld 2,5x het jaarsalaris. Assessment vermindert dit risico door objectieve, gestructureerde evaluatie van leiderschapscompetenties, cultuurfit en groeipotentieel. Onderzoek toont aan dat gestructureerde interviews 2x zo voorspellend zijn als ongestructureerde gesprekken.",
  },
  {
    q: "Welke assessmentmethoden gebruiken jullie?",
    a: "Wij combineren STAR-interviews (competentie-based), cultuurfit-analyse, leiderschapspotentieel-evaluatie en grondige referentiechecks. Afhankelijk van de rol kunnen wij ook psychometrische tools, case studies en simulaties inzetten. De mix wordt afgestemd op uw specifieke vacature.",
  },
  {
    q: "Wat is het verschil tussen culture fit en culture add?",
    a: "Culture fit meet of een kandidaat past bij uw bestaande organisatiecultuur. Culture add evalueert of een kandidaat waardevolle nieuwe perspectieven en competenties toevoegt. Bij OneTime Recruit adviseren wij bewust over wanneer u fit zoekt (stabiliteit) en wanneer add (transformatie).",
  },
  {
    q: "Hoe waarborgen jullie objectiviteit in het assessmentproces?",
    a: "Door gestandaardiseerde criteria, gestructureerde interviewprotocollen en onafhankelijke evaluatie door minimaal twee senior consultants. Elke kandidaat wordt beoordeeld op dezelfde competentie-matrix, zodat vergelijking objectief en transparant is.",
  },
  {
    q: "Kunnen wij eigen assessmenttools integreren in het proces?",
    a: "Ja. Wij werken regelmatig samen met externe assessment-bureaus en kunnen uw bestaande tools (zoals Hogan, DISC of Management Drives) integreren in ons proces. De combinatie van onze executive search expertise met uw specifieke assessment-voorkeuren levert het beste resultaat.",
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
  name: "Assessment & Selectie voor Executive Recruitment",
  provider: { "@type": "Organization", name: "OneTime Recruit", url: "https://onetimerecruit.nl" },
  serviceType: "Executive Assessment",
  areaServed: { "@type": "Country", name: "Netherlands" },
  description: "Bewezen assessment- en selectiemethoden voor executive recruitment. STAR-interviews, cultuurfit-analyse, referentiechecks en leiderschapspotentieel-evaluatie.",
};

export default function AssessmentSelectie() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Assessment & Selectie voor Executive Recruitment | OneTime Recruit"
        description="Bewezen assessment- en selectiemethoden voor executive recruitment. STAR-interviews, cultuurfit-analyse, referentiechecks en leiderschapspotentieel-evaluatie."
        locale="nl_NL"
        jsonLd={[faqJsonLd, serviceJsonLd] as unknown as Record<string, unknown>}
      />
      <Header />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/nl" }, { label: "Diensten", href: "/nl/diensten" }, { label: "Assessment & Selectie" }]} /></div>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Kwaliteit & Methode</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Assessment & <span className="text-accent">selectie kwaliteit</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Bewezen methoden voor objectieve, voorspellende selectie van senior leiders. Van STAR-interviews tot cultuurfit-analyse — elke stap is gericht op het minimaliseren van mis-hires.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 transition-all duration-300">
                  <Link to="/nl/contact">Plan een kennismaking <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
                { value: "2x", label: "Meer voorspellend dan cv" },
                { value: "500+", label: "Assessments uitgevoerd" },
                { value: "4.8/5", label: "Klanttevredenheid" },
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
              <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">Waarom assessment het verschil maakt</h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>De meeste executive mis-hires ontstaan niet door een gebrek aan competenties, maar door een mismatch in cultuur, leiderschapsstijl of strategische visie. Traditionele selectie op basis van cv en ongestructureerde interviews voorspelt slechts 14% van de werkprestaties. Gestructureerde assessment verhoogt dit naar 26-36%.</p>
                <p>Bij OneTime Recruit is assessment geen bijproduct — het is de kern van ons <Link to="/nl/executive-search" className="font-medium text-accent hover:underline">executive search</Link> proces. Elke kandidaat doorloopt een gestandaardiseerd, multi-source assessment dat competenties, <Link to="/nl/culture-fit-vs-culture-add" className="font-medium text-accent hover:underline">cultuurfit</Link>, leiderschapspotentieel en referenties combineert tot één integraal beeld.</p>
                <p>Het resultaat: plaatsingen die niet alleen op papier kloppen, maar ook in de praktijk succesvol zijn. Ons retentiepercentage van 95% na 12 maanden bewijst dat kwaliteit voorkomt dat u opnieuw moet zoeken.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Method steps */}
        <section className="border-y border-border/50 bg-muted/30 py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Onze methode</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Het assessment proces in 4 stappen</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2" stagger={0.08}>
              {methodSteps.map((step) => (
                <StaggerItem key={step.title} variant="fade-up">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"><step.icon className="h-5 w-5" /></div>
                    <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{step.description}</p>
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
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Assessment & selectie methoden</h2>
              <p className="mt-4 text-muted-foreground">Lees meer over elke stap van ons assessment proces.</p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2" stagger={0.08}>
              {spokes.map((item) => (
                <StaggerItem key={item.title} variant="fade-up">
                  <Link to={item.href} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"><item.icon className="h-5 w-5" /></div>
                    <h2 className="mt-5 font-display text-lg font-bold text-card-foreground">{item.title}</h2>
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
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">FAQ over assessment & selectie</h2>
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground">Wilt u meer weten over onze methode?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Plan een gesprek en ontdek hoe wij assessment-kwaliteit waarborgen.</p>
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
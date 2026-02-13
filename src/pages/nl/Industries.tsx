import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Plane, Shield, Monitor, BarChart3, Truck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const industries = [
  { title: "Aviation", description: "Leadership voor airlines, MRO, airports en aviation services. Ervaring met EASA-regulering en safety-cultuur.", href: "/nl/aviation-recruitment", icon: Plane },
  { title: "Defence & High-Tech", description: "Security-cleared leiders voor defence, aerospace en high-tech organisaties met overheidscontracten.", href: "/nl/defence-hightech-recruitment", icon: Shield },
  { title: "SaaS / IT", description: "Tech executives voor scale-ups en enterprise software bedrijven in de Benelux en DACH-regio.", href: "/nl/saas-it-leadership", icon: Monitor },
  { title: "Finance, Risk & Compliance", description: "Leiders voor banken, verzekeraars, fintech en asset managers in een streng gereguleerde omgeving.", href: "/nl/finance-risk-compliance", icon: BarChart3 },
  { title: "Operations & Supply Chain", description: "COO's en supply chain directors voor productie, logistiek en internationale operaties.", href: "/nl/operations-supply-chain", icon: Truck },
];

const advantages = [
  "Diepgaand netwerk per sector — geen generalistische database",
  "Kennis van sectorspecifieke regelgeving en compliance-eisen",
  "Begrip van de cultuur en dynamiek binnen uw industrie",
  "Track record van succesvolle plaatsingen in uw sector",
];

const faqs = [
  {
    q: "Waarom is sectorkennis belangrijk bij executive search?",
    a: "Sectorkennis bepaalt of een search bureau de juiste kandidaten kan identificeren, benaderen en beoordelen. Een recruiter die de EASA-regulering in aviation niet begrijpt, zal de verkeerde kandidaten presenteren. Bij OneTime Recruit investeren wij continu in sectorkennis zodat wij de taal van uw industrie spreken — en de juiste vragen stellen.",
  },
  {
    q: "In welke sectoren zijn jullie gespecialiseerd?",
    a: "Onze kernspecialisaties zijn Aviation, Defence & High-Tech, SaaS/IT, Finance (Risk & Compliance) en Operations & Supply Chain. Daarnaast bedienen wij sectoren als energy, healthcare en professional services. Neem contact op om te bespreken of wij de juiste partner zijn voor uw sector.",
  },
  {
    q: "Werken jullie ook internationaal?",
    a: "Ja. Hoewel onze basis in Nederland ligt, voeren wij regelmatig executive searches uit in de DACH-regio (Duitsland, Oostenrijk, Zwitserland) en de Benelux. Voor internationale searches combineren wij ons Europese netwerk met lokale marktkennis.",
  },
  {
    q: "Hoe bouwen jullie sectorkennis op?",
    a: "Door actieve participatie in sectornetwerken, conferenties en vakliteratuur. Daarnaast voeren wij jaarlijks 100+ executive interviews per sector, waardoor wij markttrends, salarisbeweging en leiderschapsuitdagingen real-time in kaart hebben.",
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
  name: "Industry-Focused Executive Search",
  provider: { "@type": "Organization", name: "OneTime Recruit", url: "https://onetimerecruit.nl" },
  serviceType: "Executive Search per Sector",
  areaServed: { "@type": "Country", name: "Netherlands" },
  description: "Executive search expertise per sector: Aviation, Defence, SaaS/IT, Finance en Operations. Diepgaande sectorkennis gecombineerd met bewezen methodiek.",
};

export default function Industries() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Industries: Executive Search per Sector | OneTime Recruit"
        description="Executive search expertise per sector. Aviation, Defence, SaaS/IT, Finance en Operations — diepgaande sectorkennis gecombineerd met bewezen methodiek."
        locale="nl_NL"
        jsonLd={[faqJsonLd, serviceJsonLd] as unknown as Record<string, unknown>}
      />
      <Header />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/nl" }, { label: "Diensten", href: "/nl/diensten" }, { label: "Industries" }]} /></div>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Sectoren</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Executive search in <span className="text-accent">uw sector</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Diepgaande sectorkennis gecombineerd met bewezen executive search methodiek. Wij spreken de taal van uw industrie.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 transition-all duration-300">
                  <Link to="/nl/contact">Bespreek uw sector <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
                { value: "5", label: "Kernsectoren" },
                { value: "100+", label: "Executive interviews/jaar" },
                { value: "50+", label: "Organisaties bediend" },
                { value: "95%", label: "Retentie na 12 maanden" },
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
        <section className="py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">Waarom sectorkennis het verschil maakt</h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>Een executive search bureau dat uw sector niet begrijpt, kan niet de juiste kandidaten identificeren. Het verschil tussen een goede en een uitstekende <Link to="/nl/ceo-recruitment" className="font-medium text-accent hover:underline">CEO</Link> voor een luchtvaartmaatschappij ligt in kennis van EASA-regulering, safety-cultuur en de dynamiek van een gereguleerde industrie.</p>
                <p>Bij OneTime Recruit investeren wij structureel in sectorkennis. Onze consultants voeren jaarlijks 100+ executive interviews per sector, participeren in branchenetwerken en volgen sectorspecifieke ontwikkelingen op de voet. Dit vertaalt zich in een diepgaand netwerk, relevante marktinzichten en de capaciteit om <Link to="/nl/confidential-search" className="font-medium text-accent hover:underline">confidential searches</Link> uit te voeren in gereguleerde omgevingen.</p>
                <p>Het resultaat: kortere doorlooptijden, relevantere shortlists en kandidaten die niet alleen de juiste competenties hebben, maar ook de nuances van uw industrie begrijpen.</p>
              </div>
              <div className="mt-8 space-y-3">
                {advantages.map((adv) => (
                  <div key={adv} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">{adv}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Industry grid */}
        <section className="border-y border-border/50 bg-muted/30 py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Onze sectoren</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Executive search per industrie</h2>
              <p className="mt-4 text-muted-foreground">Klik op uw sector voor diepgaande informatie over onze ervaring en aanpak.</p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {industries.map((ind) => (
                <StaggerItem key={ind.title} variant="fade-up">
                  <Link to={ind.href} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"><ind.icon className="h-5 w-5" /></div>
                    <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">{ind.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{ind.description}</p>
                    <span className="mt-auto pt-6 inline-flex items-center text-sm font-semibold text-accent">Lees meer <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Veelgestelde vragen</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">FAQ over sectorspecialisatie</h2>
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground">Executive search in uw sector?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Plan een gesprek over uw specifieke leiderschapsbehoefte.</p>
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
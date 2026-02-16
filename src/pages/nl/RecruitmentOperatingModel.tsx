import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Repeat, FileText, BarChart3, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const spokes = [
  { title: "Talent Pool per Vacature", description: "Een dedicated pool van gekwalificeerde kandidaten die u behoudt — ook na plaatsing. Eenmalig zoeken, voortaan zelf invullen.", href: "/nl/talent-pool-per-vacature", icon: Users },
  { title: "Recruitment-as-a-Service", description: "Doorlopende executive recruitment capaciteit via een flexibel servicemodel. Geen verrassingen, wel resultaat.", href: "/nl/recruitment-as-a-service", icon: Repeat },
  { title: "Abonnement Recruitment", description: "Wanneer een abonnement werkt en wanneer niet — eerlijk advies gebaseerd op uw situatie.", href: "/nl/abonnement-recruitment", icon: FileText },
  { title: "Hiring Governance & Reporting", description: "Data-gedreven controle over uw recruitment proces met real-time dashboards en KPI-rapportage.", href: "/nl/hiring-governance-reporting", icon: BarChart3 },
];

const pillars = [
  { title: "Van ad-hoc naar structureel", description: "Stop met elke vacature opnieuw beginnen. Bouw een recruitment operating model dat schaalbaar is en voorspelbaar presteert." },
  { title: "Talent pools die u behoudt", description: "Elke search levert een dedicated talent pool op die u behoudt. Bij toekomstige vacatures heeft u direct toegang tot gekwalificeerde kandidaten." },
  { title: "Transparante governance", description: "Real-time inzicht in uw recruitment pipeline, doorlooptijden, kwaliteitsmetrics en kosten per hire via een centraal dashboard." },
];

const faqs = [
  {
    q: "Wat is een recruitment operating model?",
    a: "Een recruitment operating model is de structurele aanpak waarmee een organisatie haar wervingscapaciteit organiseert. In plaats van ad-hoc searches per vacature, bouwt u een herhaalbaar, schaalbaar systeem met vaste processen, talent pools, governance en rapportage. Dit verlaagt de kosten per hire en verhoogt de kwaliteit van plaatsingen.",
  },
  {
    q: "Wat is het verschil tussen RaaS en traditionele executive search?",
    a: "Bij traditionele executive search betaalt u per search een vast bedrag of percentage. Recruitment-as-a-Service (RaaS) biedt doorlopende recruitment capaciteit via een abonnementsmodel. Dit is voordeliger bij meerdere vacatures per jaar en geeft u permanente toegang tot ons netwerk, talent pools en assessmentcapaciteit.",
  },
  {
    q: "Voor welke organisaties is dit model geschikt?",
    a: "Het recruitment operating model is ideaal voor organisaties met 3+ executive vacatures per jaar, snelgroeiende scale-ups, en enterprise organisaties die hun recruitment willen professionaliseren. Ook voor organisaties in transformatie die in korte tijd meerdere leiderschapsposities moeten invullen.",
  },
  {
    q: "Hoe werkt de talent pool per vacature?",
    a: "Bij elke executive search stellen wij een pool samen van 15-25 gekwalificeerde kandidaten. Na plaatsing behoudt u toegang tot deze pool. Bij toekomstige vacatures voor vergelijkbare rollen kunt u direct uit de pool putten — zonder een nieuwe search te starten. Dit verlaagt uw doorlooptijd tot gemiddeld 5 dagen.",
  },
  {
    q: "Wat kost een recruitment operating model?",
    a: "De investering hangt af van de omvang: het aantal verwachte vacatures per jaar, de gewenste capaciteit en het niveau van governance. Wij werken met transparante, vaste tarieven — geen verborgen kosten of percentages. Neem contact op voor een offerte op maat.",
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
  name: "Recruitment Operating Model",
  provider: { "@type": "Organization", name: "OneTime Recruit", url: "https://onetimerecruit.nl" },
  serviceType: "Recruitment Process Outsourcing",
  areaServed: { "@type": "Country", name: "Netherlands" },
  description: "Van ad-hoc search naar structurele recruitment capaciteit. Talent pools, RaaS, abonnementen en hiring governance voor enterprise organisaties.",
};

export default function RecruitmentOperatingModel() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Recruitment Operating Model: De Nieuwe Standaard | OneTime Recruit"
        description="Van ad-hoc search naar structurele recruitment capaciteit. Talent pools, RaaS, abonnementen en hiring governance voor enterprise organisaties."
        locale="nl_NL"
        jsonLd={[faqJsonLd, serviceJsonLd] as unknown as Record<string, unknown>}
      />
      <Header />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/nl" }, { label: "Diensten", href: "/nl/diensten" }, { label: "Recruitment Operating Model" }]} /></div>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">De Nieuwe Standaard</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Het recruitment <span className="text-accent">operating model</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Van ad-hoc search naar structurele recruitment capaciteit. Eenmalig zoeken, voortaan zelf invullen — met talent pools, governance en transparante kosten.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 transition-all duration-300">
                  <Link to="/nl/contact">Ontdek uw model <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
                { value: "5 dagen", label: "Doorlooptijd uit talent pool" },
                { value: "40%", label: "Lagere kosten per hire" },
                { value: "15-25", label: "Kandidaten per talent pool" },
                { value: "100%", label: "Transparante rapportage" },
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
              <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">Waarom ad-hoc search niet meer werkt</h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>De meeste organisaties behandelen executive recruitment als een incident: er ontstaat een vacature, er wordt een bureau ingeschakeld, er volgt een zoektocht van weken tot maanden, en na plaatsing begint het proces opnieuw. Deze ad-hoc aanpak is duur, langzaam en onvoorspelbaar.</p>
                <p>Het recruitment operating model draait deze logica om. In plaats van elke keer opnieuw te beginnen, bouwt u een <Link to="/nl/talent-pool-per-vacature" className="font-medium text-accent hover:underline">dedicated talent pool</Link> die u behoudt. Bij toekomstige vacatures heeft u direct toegang tot gekwalificeerde kandidaten — zonder een nieuwe search. Gecombineerd met <Link to="/nl/hiring-governance-reporting" className="font-medium text-accent hover:underline">data-gedreven governance</Link> en <Link to="/nl/recruitment-as-a-service" className="font-medium text-accent hover:underline">flexibele service modellen</Link> creëert u een recruitment functie die schaalbaar, voorspelbaar en kostenefficiënt is.</p>
                <p>Het resultaat: 40% lagere kosten per hire, doorlooptijden van 5 dagen uit bestaande pools, en volledige transparantie over uw recruitment performance.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Pillars */}
        <section className="border-y border-border/50 bg-muted/30 py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">De drie pijlers</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Hoe het model werkt</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3" stagger={0.08}>
              {pillars.map((p) => (
                <StaggerItem key={p.title} variant="fade-up">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30">
                    <h3 className="font-display text-lg font-bold text-card-foreground">{p.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Spoke links */}
        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Verdieping</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">De bouwstenen van het model</h2>
              <p className="mt-4 text-muted-foreground">Lees meer over elk onderdeel van het recruitment operating model.</p>
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
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">FAQ over het recruitment operating model</h2>
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground">Ontdek de nieuwe standaard</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Plan een gesprek en ontdek welk model past bij uw organisatie.</p>
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
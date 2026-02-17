import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Target, Clock, Shield, BarChart3, Search, Briefcase, Award, Building2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAlternates, nlBreadcrumbs } from "@/lib/seo";

const deliverables = [
  { icon: Users, title: "Dedicated talent pool", description: "Een exclusieve shortlist van gekwalificeerde kandidaten, samengesteld specifiek voor uw vacature." },
  { icon: BarChart3, title: "Executive assessment", description: "Competentie-based evaluatie met STAR-methodiek, cultuurfit-analyse en leiderschapspotentieel." },
  { icon: Clock, title: "Snelle shortlist", description: "Gemiddeld 18 werkdagen van intake tot shortlist, zonder concessies aan kwaliteit." },
  { icon: Shield, title: "Garantieregeling", description: "Plaatsingsgarantie met kosteloze herstart als de match niet blijkt te werken." },
  { icon: Target, title: "Wekelijkse rapportage", description: "Transparante updates over voortgang, pipeline en marktinzichten gedurende het hele proces." },
  { icon: Award, title: "Onboarding support", description: "100-dagen begeleiding na plaatsing om een succesvolle start te waarborgen." },
];

const personas = [
  { title: "CEO / Managing Director", description: "Strategisch leiderschap voor groei, transformatie of turnaround." },
  { title: "CFO / Finance Director", description: "Financieel leiderschap voor governance, M&A en schaalvergroting." },
  { title: "CTO / CIO", description: "Technologisch leiderschap voor digitale transformatie en innovatie." },
  { title: "CHRO / HR Director", description: "People-leiderschap voor organisatieontwikkeling en cultuurverandering." },
  { title: "COO / Operations Director", description: "Operationeel leiderschap voor efficiency en procesoptimalisatie." },
  { title: "VP / Head-of rollen", description: "Senior management voor specifieke business units of functionele gebieden." },
];

const processSteps = [
  { step: "01", title: "Intake & profieldefinitie", duration: "Dag 1-2", description: "Diepgaand gesprek over organisatie, cultuur, uitdagingen en het ideale leiderschapsprofiel. Wij definiëren samen de must-haves en nice-to-haves." },
  { step: "02", title: "Marktverkenning & sourcing", duration: "Dag 3-8", description: "Proactieve search via ons netwerk van 7.500+ executives, gecombineerd met gerichte marktbenadering en discrete outreach." },
  { step: "03", title: "Assessment & shortlist", duration: "Dag 9-14", description: "Competentie-based interviews, STAR-assessments en cultuurfit-analyse. U ontvangt een shortlist van 3-5 gekwalificeerde kandidaten." },
  { step: "04", title: "Presentatie & selectie", duration: "Dag 15-18", description: "Uitgebreide kandidaatprofielen met onze aanbeveling. Wij begeleiden het interviewproces en faciliteren de besluitvorming." },
  { step: "05", title: "Plaatsing & onboarding", duration: "Na selectie", description: "Onderhandeling, contractbegeleiding en een 100-dagen onboardingprogramma voor een succesvolle start." },
];

const faqs = [
  {
    q: "Wat is executive search precies?",
    a: "Executive search is een gespecialiseerde vorm van werving waarbij proactief gezocht wordt naar senior leiders (C-level, directie, VP) via een exclusief netwerk. Anders dan traditionele recruitment wordt niet gewacht op sollicitanten, maar worden de beste kandidaten direct benaderd — ook als zij niet actief zoeken.",
  },
  {
    q: "Wat is het verschil tussen executive search en een headhunter?",
    a: "Een headhunter werkt vaak reactief en op commissiebasis per plaatsing. Executive search is een strategisch, methodisch proces met uitgebreide assessment, exclusieve search en garantieregeling. Bij One Time Recruit werken wij met een vast tarief of abonnement, geen verborgen kosten.",
  },
  {
    q: "Wat kost executive search?",
    a: "Traditionele executive search bureaus rekenen 25-35% van het jaarsalaris. One Time Recruit werkt met transparante vaste tarieven of een abonnementsmodel. Dit betekent voorspelbare kosten, ongeacht het salarisniveau van de kandidaat. Neem contact op voor een offerte op maat.",
  },
  {
    q: "Hoe lang duurt een executive search traject?",
    a: "Ons gemiddelde is 18 werkdagen van intake tot shortlist. De totale doorlooptijd inclusief selectie en plaatsing is doorgaans 4-8 weken, afhankelijk van de complexiteit van de rol en de besluitvorming aan uw kant.",
  },
  {
    q: "Voor welke functies is executive search geschikt?",
    a: "Executive search is ideaal voor C-level posities (CEO, CFO, CTO, CHRO, COO), directierollen, VP-functies en andere senior leiderschapsposities. Ook voor board members, commissarissen en interim executives bieden wij executive search.",
  },
  {
    q: "Wat als de geplaatste kandidaat niet past?",
    a: "Wij bieden een garantieregeling op al onze plaatsingen. Als de match binnen de garantieperiode niet blijkt te werken, starten wij kosteloos een nieuwe search. Ons retentiepercentage na 12 maanden is 95%, mede dankzij onze grondige assessmentmethode.",
  },
  {
    q: "Wat maakt One Time Recruit anders dan andere executive search bureaus?",
    a: "Drie dingen: (1) vaste tarieven in plaats van procentuele fees, (2) een dedicated talent pool per vacature die u behoudt, en (3) een shortlist binnen gemiddeld 18 dagen. Wij combineren boutique-aandacht met enterprise-grade delivery.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Executive Search Nederland",
  provider: {
    "@type": "Organization",
    name: "One Time Recruit",
    url: "https://onetimerecruit.nl",
  },
  serviceType: "Executive Search",
  areaServed: { "@type": "Country", name: "Netherlands" },
  description: "Gespecialiseerde executive search voor C-level, directie en VP-posities in Nederland. Vaste tarieven, shortlist binnen 18 dagen, dedicated talent pool per vacature.",
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    description: "Vast tarief of abonnementsmodel — geen procentuele fees",
  },
};

const combinedJsonLd = [faqJsonLd, serviceJsonLd];

const NLExecutiveSearch = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Executive Search Nederland — C-level & Directie | One Time Recruit"
        description="Gespecialiseerde executive search voor C-level, directie en VP-posities. Vaste tarieven, shortlist binnen 18 dagen, dedicated talent pool. Ontdek onze bewezen methodiek."
        locale="nl_NL"
        alternates={getAlternates("executive-search", ["nl"])}
        jsonLd={combinedJsonLd as unknown as Record<string, unknown>}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={nlBreadcrumbs["executive-search"]} />
      </div>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Executive Search</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                De juiste leider vinden voor <span className="text-accent">uw organisatie</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Gespecialiseerde executive search voor C-level, directie en VP-posities. 
                Vast tarief, shortlist binnen gemiddeld 18 dagen, een dedicated talent pool die u behoudt.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 transition-all duration-300">
                  <Link to="/nl/contact">
                    Plan een kennismaking <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-13 rounded-full border-primary-foreground/20 px-8 text-[15px] font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/nl/diensten">Bekijk alle diensten</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Social proof strip */}
        <section className="border-b border-border/50 bg-muted/40 py-10">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              {[
                { value: "500+", label: "Executive plaatsingen" },
                { value: "18", label: "Dagen tot shortlist" },
                { value: "95%", label: "Retentie na 12 maanden" },
                { value: "7.500+", label: "Executives in netwerk" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{m.value}</p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get — deliverables */}
        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Wat u krijgt</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">
                Concrete deliverables, geen vage beloftes
              </h2>
              <p className="mt-4 text-muted-foreground">
                Bij elke executive search ontvangt u een compleet pakket aan deliverables — van talent pool tot onboarding support.
              </p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {deliverables.map((d) => (
                <StaggerItem key={d.title} variant="fade-up">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <d.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">{d.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Who it's for — personas */}
        <section className="border-y border-border/50 bg-muted/30 py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Voor wie</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">
                Posities die wij invullen
              </h2>
              <p className="mt-4 text-muted-foreground">
                Van CEO tot VP-level — wij vinden leiders die écht het verschil maken voor uw organisatie.
              </p>
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

            {/* Triggers */}
            <ScrollReveal className="mx-auto mt-16 max-w-3xl">
              <div className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-8 md:p-10">
                <h3 className="font-display text-xl font-bold text-foreground">Wanneer schakelt u executive search in?</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Snelle groei en schaalvergroting",
                    "Strategische transformatie",
                    "Vervanging van key-leadership",
                    "Nieuwe markt of business unit",
                    "Post-fusie integratie",
                    "Turnaround of crisis",
                  ].map((trigger) => (
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

        {/* Process */}
        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Ons proces</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">
                Van intake tot shortlist in 18 dagen
              </h2>
              <p className="mt-4 text-muted-foreground">
                Een gestructureerd, transparant proces met wekelijkse rapportage en duidelijke mijlpalen.
              </p>
            </ScrollReveal>
            <div className="mx-auto mt-16 max-w-3xl space-y-0">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 0.1}>
                  <div className="relative flex gap-6 pb-12 last:pb-0">
                    {/* Timeline line */}
                    {i < processSteps.length - 1 && (
                      <div className="absolute left-[23px] top-12 h-[calc(100%-24px)] w-px bg-border" />
                    )}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      {step.step}
                    </div>
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

        {/* Assessment methodology */}
        <section className="border-y border-border/50 bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <ScrollReveal className="text-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Kwaliteit & Assessment</span>
                <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">
                  Bewezen assessmentmethodiek
                </h2>
              </ScrollReveal>
              <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2" stagger={0.1}>
                {[
                  { icon: Search, title: "STAR-interviews", description: "Gestructureerde competentie-interviews op basis van de STAR-methode (Situatie, Taak, Actie, Resultaat) voor objectieve evaluatie van leiderschapskwaliteiten." },
                  { icon: Target, title: "Cultuurfit-analyse", description: "Diepgaande analyse van waarden, leiderschapsstijl en organisatiecultuur om een duurzame match te garanderen — niet alleen op papier, maar in de praktijk." },
                  { icon: BarChart3, title: "Leiderschapspotentieel", description: "Evaluatie van groeipotentieel, adaptief vermogen en strategisch denkvermogen voor toekomstbestendige leiderschapsposities." },
                  { icon: Shield, title: "Referentiechecks", description: "Grondige referentiechecks bij relevante stakeholders, gericht op concrete prestaties en leiderschapsimpact in eerdere rollen." },
                ].map((item) => (
                  <StaggerItem key={item.title} variant="fade-up">
                    <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-card-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Industry proof */}
        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Sectoren</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">
                Executive search in uw sector
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ervaring in uiteenlopende sectoren, van tech tot finance en van aviation tot publieke sector.
              </p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
              {[
                { icon: Building2, name: "Technology & SaaS" },
                { icon: BarChart3, name: "Finance & Risk" },
                { icon: Zap, name: "Aviation & Defence" },
                { icon: Briefcase, name: "Professional Services" },
              ].map((sector) => (
                <StaggerItem key={sector.name} variant="fade-up">
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30">
                    <sector.icon className="h-5 w-5 text-accent" />
                    <span className="text-sm font-semibold text-card-foreground">{sector.name}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border/50 bg-muted/30 py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Veelgestelde vragen</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">
                Alles over executive search
              </h2>
            </ScrollReveal>
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-accent/30">
                    <AccordionTrigger className="text-left font-display text-[15px] font-semibold text-card-foreground hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Internal links / related resources */}
        <section className="py-16 md:py-20">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-3xl">
              <h3 className="font-display text-lg font-bold text-foreground">Gerelateerde onderwerpen</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Alle diensten bekijken", href: "/nl/diensten" },
                  { label: "Over One Time Recruit", href: "/nl/over-ons" },
                  { label: "Informatie voor opdrachtgevers", href: "/nl/opdrachtgevers" },
                  { label: "Neem contact op", href: "/nl/contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium text-card-foreground transition-all hover:border-accent/30 hover:shadow-sm"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-accent py-20 md:py-24">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">
                Klaar om de juiste leider te vinden?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">
                Plan een vrijblijvend kennismakingsgesprek en ontdek hoe onze executive search aanpak werkt.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Link to="/nl/contact">
                    Plan een gesprek <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NLExecutiveSearch;

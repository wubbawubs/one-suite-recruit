import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Search, Users, Settings, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { getAlternates } from "@/lib/seo";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description: "Wir finden die richtigen C-Level- und Senior-Führungskräfte für Ihr Unternehmen. Mit einem exklusiven Netzwerk und bewährter Assessment-Methode.",
    href: "/de/leistungen",
    highlight: true,
  },
  {
    icon: Users,
    title: "Leadership Advisory",
    description: "Strategische Beratung zu Führung, Teamzusammensetzung und Organisationsentwicklung auf höchster Ebene.",
    href: "/de/leistungen",
  },
  {
    icon: Settings,
    title: "Recruitment Operating Model",
    description: "Wir bauen und optimieren Ihre internen Rekrutierungsprozesse. Von Employer Branding bis Auswahlmethodik.",
    href: "/de/leistungen",
  },
];

const differentiators = [
  { title: "Exklusives Netzwerk", description: "Zugang zu einem sorgfältig aufgebauten Netzwerk von Senior-Führungskräften, die nicht aktiv suchen." },
  { title: "Bewährte Assessment-Methode", description: "Strukturierte Auswahl basierend auf Kompetenzen, Kulturpassung und Führungspotenzial." },
  { title: "Festpreis, keine Überraschungen", description: "Transparente Tarife ohne versteckte Kosten. Sie wissen im Voraus genau, was Ihre Investition ist." },
  { title: "Nachbetreuung & Garantie", description: "6 Monate Nachbetreuung und Garantie auf jede Vermittlung. Wir stehen für nachhaltige Besetzungen." },
  { title: "Persönlicher Partner", description: "Ein dedizierter Berater, der Ihr Unternehmen, Ihre Kultur und Ihre Ambitionen genau kennt." },
];

const steps = [
  { number: "01", title: "Aufnahme & Briefing", description: "Tiefgehendes Gespräch über Ihr Unternehmen, Kultur, Team und den idealen Kandidaten." },
  { number: "02", title: "Search & Sourcing", description: "Aktive Ansprache über unser exklusives Netzwerk, LinkedIn und gezielte Multi-Channel-Suche." },
  { number: "03", title: "Shortlist & Assessment", description: "Strukturierte Auswahl mit Kompetenz-Assessment und Kulturpassungs-Analyse." },
  { number: "04", title: "Präsentation", description: "Ausführliche Kandidatenprofile mit unserer Empfehlung und Begründung." },
  { number: "05", title: "Auswahl & Vermittlung", description: "Begleitung bei Gesprächen, Verhandlungen und einem reibungslosen Onboarding." },
  { number: "06", title: "Nachbetreuung", description: "6 Monate Nachbetreuung, um eine erfolgreiche Integration zu gewährleisten." },
];

const cases = [
  { client: "MAS Aviation", industry: "Luftfahrt", challenge: "Bedarf an einem erfahrenen VP Operations innerhalb von 6 Wochen.", result: "Kandidat in 18 Tagen vermittelt, nach 2 Jahren noch aktiv.", metric: "18 Tage" },
  { client: "AFAS Software", industry: "Tech / SaaS", challenge: "Suche nach einem CTO, der Innovation und Skalierbarkeit vereint.", result: "3 Top-Kandidaten präsentiert, Vermittlung innerhalb von 4 Wochen.", metric: "4 Wochen" },
  { client: "FinancePro Group", industry: "Finanzen", challenge: "CFO-Position für ein schnell wachsendes Fintech mit komplexen Compliance-Anforderungen.", result: "Erfolgreiche Vermittlung mit 98% Match-Score bei Kompetenzen.", metric: "98% Match" },
];

const articles = [
  { title: "Die Zukunft der Personalvermittlung in Deutschland", excerpt: "Wie sich verändernde Märkte und Technologie die Art und Weise, wie wir Führungskräfte finden, grundlegend verändern.", readTime: "5 Min.", category: "Trends" },
  { title: "5 Zeichen, dass Ihr Unternehmen neue C-Level-Führung braucht", excerpt: "Wann ist es Zeit, in neue Führung zu investieren? Diese Indikatoren helfen Ihnen bei der richtigen Entscheidung.", readTime: "4 Min.", category: "Führung" },
  { title: "Warum Kulturpassung wichtiger ist als der Lebenslauf", excerpt: "Forschung zeigt, dass kulturelle Übereinstimmung ein besserer Erfolgsindikator ist als Erfahrung allein.", readTime: "6 Min.", category: "Assessment" },
];

const clients = ["Arvoo", "BGH Accountants", "OOvB Accountants", "Energiebehoud", "Thales"];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OneTime Recruit",
  url: "https://onetimerecruit.nl",
  logo: "https://onetimerecruit.nl/logo.png",
  description: "OneTime Recruit ist Ihr Spezialist für Executive Search und Personalvermittlung von Führungskräften in Deutschland und den Niederlanden.",
  contactPoint: { "@type": "ContactPoint", telephone: "+31-6-17226186", contactType: "sales", availableLanguage: ["German", "Dutch", "English"] },
};

const DEHome = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="OneTime Recruit — Executive Search & Personalvermittlung"
        description="OneTime Recruit ist Ihr Spezialist für Executive Search. Wir finden C-Level- und Senior-Führungskräfte für Ihr Unternehmen."
        jsonLd={orgJsonLd}
        locale="de_DE"
        alternates={getAlternates("home", ["nl", "de"])}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32 xl:py-40">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
          <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-10 inline-flex items-center rounded-full border border-primary-foreground/12 bg-primary-foreground/5 px-6 py-2.5 backdrop-blur-sm"
              >
                <span className="text-sm font-medium text-primary-foreground/70">
                  ✦ Einmal suchen, danach selbst besetzen
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.75rem]"
              >
                Ihr Abonnement für
                <br />
                <span className="text-accent">unbegrenzten Zugang</span> zu Talenten
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-primary-foreground/55 md:text-lg italic"
              >
                Ein digitaler Talentpool pro Vakanz mit qualifizierten Kandidaten und aktuellen Informationen wie Verfügbarkeit.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
                  <Link to="/de/leistungen">Ich bin Auftraggeber</Link>
                </Button>
                <Button asChild size="lg" className="h-13 rounded-full border-2 border-accent/60 bg-transparent px-10 text-[15px] font-semibold text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300">
                  <Link to="/de/stellenangebote">Ich habe Talent</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-14 flex items-center justify-center gap-3"
              >
                <div className="h-px w-8 bg-primary-foreground/15" />
                <p className="text-sm text-primary-foreground/40">
                  <span className="font-bold text-primary-foreground/75">+7.500 Spezialisten</span>{" "}
                  bereit für Ihren Auftrag
                </p>
                <div className="h-px w-8 bg-primary-foreground/15" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="border-b border-border/50 bg-card py-16">
          <div className="container">
            <StaggerContainer className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4" stagger={0.08}>
              {[
                { value: "100+", label: "Talentpools pro Branche" },
                { value: "7.500+", label: "Verfügbare Top-Talente" },
                { value: "100+", label: "Monatliche Vakanzen" },
                { value: "98%", label: "Kundenzufriedenheit" },
              ].map((m, i) => (
                <StaggerItem key={m.label} variant="fade-up">
                  <div className="relative text-center">
                    {i > 0 && <div className="absolute -left-3 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-border md:block" />}
                    <p className="font-display text-4xl font-bold text-foreground md:text-[2.75rem]">{m.value}</p>
                    <p className="mt-2 text-[13px] font-medium text-muted-foreground">{m.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <ScrollReveal variant="fade-in" delay={0.2}>
              <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 border-t border-border/50 pt-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/50">Vertraut von</p>
                {clients.map((name) => (
                  <span key={name} className="text-base font-extrabold uppercase tracking-[0.15em] text-muted-foreground/25 transition-colors hover:text-muted-foreground/50">{name}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Unsere Expertise</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Was wir für Sie tun</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Drei Kernbereiche, in denen wir exzellieren — alle darauf ausgerichtet, außergewöhnliche Talente zu finden und zu binden.</p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.12}>
              {services.map((s) => (
                <StaggerItem key={s.title} variant="fade-up">
                  <Link to={s.href} className={`group relative flex h-full flex-col rounded-2xl border p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 ${s.highlight ? "border-accent/20 bg-accent/[0.03]" : "border-border bg-card"} hover:border-accent/30`}>
                    {s.highlight && <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">Beliebt</span>}
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent"><s.icon className="h-6 w-6" /></div>
                    <h3 className="mt-6 font-display text-xl font-bold text-card-foreground">{s.title}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">{s.description}</p>
                    <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent transition-all group-hover:gap-2">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Why OneTime */}
        <section className="bg-muted/60 py-24 md:py-32">
          <div className="container">
            <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-20">
              <ScrollReveal variant="slide-left" className="lg:col-span-2 lg:sticky lg:top-28">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Warum OneTime</span>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Nicht einfach eine Personalvermittlung</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Wir sind Ihr strategischer Partner bei der Suche nach Führungskräften, die den Unterschied machen.</p>
                <div className="mt-8 h-1 w-16 rounded-full bg-accent/30" />
              </ScrollReveal>
              <StaggerContainer className="space-y-4 lg:col-span-3" stagger={0.08}>
                {differentiators.map((d) => (
                  <StaggerItem key={d.title} variant="fade-up">
                    <div className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent/25 hover:shadow-md">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10"><CheckCircle className="h-5 w-5 text-accent" /></div>
                      <div>
                        <h3 className="text-[15px] font-bold text-card-foreground font-sans">{d.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Unser Prozess</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Wie wir arbeiten</h2>
              <p className="mt-5 text-lg text-muted-foreground">Ein bewährter Prozess von der Aufnahme bis zur Nachbetreuung.</p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {steps.map((step) => (
                <StaggerItem key={step.number} variant="scale-in">
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                    <span className="font-display text-[3.5rem] font-bold leading-none text-accent/10 transition-colors group-hover:text-accent/20">{step.number}</span>
                    <h3 className="mt-2 font-display text-lg font-bold text-card-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Case Studies */}
        <section className="bg-primary py-24 text-primary-foreground md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Ergebnisse</span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-[2.5rem] leading-tight">Bewährt bei führenden Unternehmen</h2>
              <p className="mt-5 text-lg text-primary-foreground/55">Eine Auswahl erfolgreicher Vermittlungen.</p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.12}>
              {cases.map((c) => (
                <StaggerItem key={c.client} variant="fade-up">
                  <div className="group h-full rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.04] p-8 transition-all duration-300 hover:border-primary-foreground/15 hover:bg-primary-foreground/[0.07]">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent">{c.industry}</span>
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">{c.metric}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold">{c.client}</h3>
                    <div className="mt-4 space-y-3 border-t border-primary-foreground/8 pt-4">
                      <p className="text-sm leading-relaxed text-primary-foreground/45"><span className="font-semibold text-primary-foreground/65">Herausforderung:</span> {c.challenge}</p>
                      <p className="text-sm leading-relaxed text-primary-foreground/45"><span className="font-semibold text-accent">Ergebnis:</span> {c.result}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Insights */}
        <section className="py-24 md:py-32">
          <div className="container">
            <ScrollReveal>
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Wissensbank</span>
                  <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Einblicke</h2>
                  <p className="mt-3 text-lg text-muted-foreground">Wissen und Perspektiven zu Führung und Executive Search.</p>
                </div>
                <span className="hidden items-center gap-2 text-sm font-semibold text-muted-foreground md:inline-flex">Bald weitere Artikel</span>
              </div>
            </ScrollReveal>
            <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
              {articles.map((a) => (
                <StaggerItem key={a.title} variant="fade-up">
                  <div className="group block rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5 cursor-default">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">{a.category}</span>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="h-3 w-3" />{a.readTime}</div>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold leading-snug text-card-foreground transition-colors group-hover:text-accent">{a.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-accent py-20 md:py-24">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Bereit, die richtigen Talente zu finden?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Vereinbaren Sie ein unverbindliches Gespräch und erfahren Sie, wie wir Ihr Unternehmen stärken können.</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Link to="/de/kontakt">Gespräch vereinbaren <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" className="h-13 rounded-full border-2 border-primary/30 bg-transparent px-10 text-[15px] font-semibold text-primary hover:bg-primary/10 transition-all duration-300">
                  <a href="tel:+31617226186"><Phone className="mr-2 h-4 w-4" />Direkt anrufen</a>
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

export default DEHome;

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award, TrendingUp, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAlternates } from "@/lib/seo";
import teamRobin from "@/assets/team-robin.jpeg";
import teamErik from "@/assets/team-erik.jpeg";
import teamJuliette from "@/assets/team-juliette.jpeg";
import teamLuuk from "@/assets/team-luuk.jpeg";
import teamAdriana from "@/assets/team-adriana.jpeg";
import teamRoland from "@/assets/team-roland.jpeg";

const values = [
  { icon: Target, title: "Ergebnisorientiert", description: "Wir messen unseren Erfolg an Ihrem Ergebnis. Jede Besetzung muss nachhaltig Wirkung zeigen." },
  { icon: Eye, title: "Transparent", description: "Feste Preise, ehrliche Kommunikation und vollständige Offenheit über unseren Prozess." },
  { icon: Heart, title: "Persönlich", description: "Ein dedizierter Berater, der Ihr Unternehmen durch und durch kennt." },
  { icon: Award, title: "Qualität", description: "Lieber drei ausgezeichnete Kandidaten als zwanzig mittelmäßige. Wir selektieren scharf." },
];

const milestones = [
  { year: "Q1 2025", title: "Den Schmerz gespürt", description: "Frustriert von teuren, langsamen und unpersönlichen Executive Search Agenturen. Es musste einen besseren Weg geben." },
  { year: "Q2 2025", title: "One Time Recruit", description: "Gestartet mit einer Mission: Executive Search mit Festpreisen, Schnelligkeit und totaler Transparenz." },
  { year: "Q3 2025", title: "Software & Skalierung", description: "Eigene Recruitment-Technologie entwickelt. Talent Pools pro Vakanz, nicht suchen, sondern matchen." },
  { year: "Q4 2025", title: "One Group gegründet", description: "Expansion zu einem Ökosystem: One Rooted, One Source und KlikKlaarSEO unter einem Dach." },
  { year: "Q1 2026", title: "Den Markt verändern", description: "Vom Disruptor zum neuen Standard. Festpreise, eigene Talent Pools und ein wachsendes Netzwerk von 7.500+ Spezialisten." },
];

const team = [
  { tag: "Creates", name: "Robin Dennie", role: "Gründer & CEO", bio: "25 Jahre Agentur-Erfahrung. Recruitment-Innovator, der verändert, wie Unternehmen einstellen.", photo: teamRobin, linkedin: "https://www.linkedin.com/in/robindennie024/" },
  { tag: "Advises", name: "Erik Dijkshoorn", role: "Managing Partner", bio: "Umfangreiche Erfahrung in mehreren C-Level-Rollen und General Management. Leadership Coach und strategischer Denker.", photo: teamErik, linkedin: "https://www.linkedin.com/in/erik-dijkshoorn-1a72aa17/" },
  { tag: "Directs", name: "Juliëtte Welten", role: "COO", bio: "Agenturbetrieb und BI-Spezialistin. Das finanzielle und operative Gewissen von One Time Recruit.", photo: teamJuliette, linkedin: "https://www.linkedin.com/in/juliette-welten-ab566061/" },
  { tag: "Builds", name: "Luuk Wubs", role: "CTO", bio: "Junger, engagierter Tech-Leader. Leidenschaftlich beim Aufbau skalierbarer Lösungen, die Recruitment verbessern.", photo: teamLuuk, linkedin: "https://www.linkedin.com/in/luuk-wubs-32a451252/" },
  { tag: "Leads", name: "Adriana Antkowiak", role: "Direktorin Deutschland", bio: "Leitet die Expansion auf dem deutschen Markt. Verbindet den niederländischen Recruitment-Ansatz mit dem deutschen Arbeitsmarkt.", photo: teamAdriana, linkedin: "https://www.linkedin.com/in/adrianna-antkowiak-180096235/" },
  { tag: "Inspires", name: "Roland Boegheim", role: "Partner", bio: "Einflussreicher HR-Leader mit jahrzehntelanger Erfahrung. Strategischer Partner, der Unternehmen hilft, das Beste aus ihren Menschen herauszuholen.", photo: teamRoland, linkedin: "https://www.linkedin.com/in/roland-nederstigt-b06978/" },
];

const DEUeberUns = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Über uns — One Time Recruit"
        description="Erfahren Sie mehr über One Time Recruit: unsere Mission, Werte, unser Team und der Weg vom Startup zum Marktführer in Executive Search."
        locale="de_DE"
        alternates={getAlternates("over-ons", ["nl", "de"])}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/de" }, { label: "Über uns" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Über uns</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Wir glauben an <span className="text-accent">Führung</span>, die den Unterschied macht
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/55">
                OneTime Recruit wurde aus der Überzeugung gegründet, dass Executive Search persönlicher, transparenter und effektiver sein kann.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <ScrollReveal variant="slide-left">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Unsere Mission</span>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Der neue Standard für Recruitment</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Wir verbinden Unternehmen mit außergewöhnlichen Führungskräften. Nicht durch Massen-Sourcing, sondern durch tiefgehendes Verständnis Ihres Unternehmens, Ihrer Kultur und Ihrer Ambitionen.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Unser Ansatz kombiniert das Beste aus Executive Search mit moderner Technologie und persönlicher Note. Das Ergebnis: nachhaltige Besetzungen, die Wirkung zeigen.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground md:text-4xl">98%</p>
                    <p className="mt-1 text-xs text-muted-foreground md:text-sm">Kundenzufriedenheit</p>
                  </div>
                  <div className="border-l border-border pl-4">
                    <p className="font-display text-2xl font-bold text-foreground md:text-4xl">7.500+</p>
                    <p className="mt-1 text-xs text-muted-foreground md:text-sm">Spezialisten</p>
                  </div>
                  <div className="border-l border-border pl-4">
                    <p className="font-display text-2xl font-bold text-foreground md:text-4xl">18</p>
                    <p className="mt-1 text-xs text-muted-foreground md:text-sm">Tage Ø</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="slide-right">
                <div className="rounded-2xl border border-border bg-muted/40 p-6 md:p-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10"><TrendingUp className="h-8 w-8 text-accent" /></div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground md:text-2xl">Teil von OneGroup</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    OneTime Recruit ist Teil von OneGroup, einem Ökosystem spezialisierter Recruitment- und HR-Labels. Zusammen bieten wir ein vollständiges Spektrum an Talent- und Organisationslösungen.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["OneTime Recruit", "One Rooted", "OneSource", "KlikKlaarSEO"].map((label) => (
                      <span key={label} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">{label}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted/60 py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Unsere Werte</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Wofür wir stehen</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {values.map((v) => (
                <StaggerItem key={v.title} variant="fade-up">
                  <div className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent"><v.icon className="h-6 w-6" /></div>
                    <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Unser Team</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Die Menschen hinter OneTime Recruit</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
                OneTime Recruit wurde nicht von Produktmanagern gebaut, die auf Recruitment-Probleme gewettet haben. Es wurde von Operatoren gebaut, die sie jahrelang erlebt haben.
              </p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
              {team.map((t) => (
                <StaggerItem key={t.name} variant="fade-up">
                  <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/25 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start justify-between">
                      {t.photo ? (
                        <img src={t.photo} alt={t.name} className="h-16 w-16 rounded-full object-cover ring-2 ring-border group-hover:ring-accent/30 transition-all" />
                      ) : (
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 ring-2 ring-border group-hover:ring-accent/30 transition-all">
                          <span className="font-display text-lg font-bold text-accent">{t.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                      )}
                      <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent" aria-label={`${t.name} auf LinkedIn`}>
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                    <span className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{t.tag}</span>
                    <h3 className="mt-1 font-display text-lg font-bold text-card-foreground">{t.name}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{t.role}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground/70">{t.bio}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Von Frustration zum neuen Standard</span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-[2.5rem] leading-tight">Wie alles begann</h2>
            </ScrollReveal>
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} variant="fade-up" delay={i * 0.1} className="h-full">
                  <div className="group relative h-full rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.04] p-6 transition-all duration-300 hover:border-primary-foreground/15 hover:bg-primary-foreground/[0.07]">
                    <span className="font-display text-3xl font-bold text-accent">{m.year}</span>
                    <h3 className="mt-2 text-sm font-bold">{m.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-primary-foreground/45">{m.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-accent py-14 md:py-20">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Bereit, Ihre nächste Führungskraft zu finden?</h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-accent-foreground/80">Vereinbaren Sie ein unverbindliches Gespräch und erfahren Sie, wie wir Ihr Unternehmen stärken.</p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Link to="/de/kontakt">Kontakt aufnehmen <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

export default DEUeberUns;

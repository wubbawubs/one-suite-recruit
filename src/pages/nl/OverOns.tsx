import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Award, TrendingUp, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAlternates, nlBreadcrumbs } from "@/lib/seo";
import teamRobin from "@/assets/team-robin.jpeg";
import teamErik from "@/assets/team-erik.jpeg";
import teamJuliette from "@/assets/team-juliette.jpeg";
import teamLuuk from "@/assets/team-luuk.jpeg";
import teamAdriana from "@/assets/team-adriana.jpeg";
import teamRoland from "@/assets/team-roland.jpeg";
import sfeerOverOns from "@/assets/sfeer-over-ons.jpg";

const values = [
  { icon: Target, title: "Resultaatgericht", description: "Wij meten ons succes aan uw resultaat. Elke plaatsing moet duurzaam impact maken." },
  { icon: Eye, title: "Transparant", description: "Vaste prijzen, eerlijke communicatie en volledige openheid over ons proces." },
  { icon: Heart, title: "Persoonlijk", description: "Eén dedicated consultant die uw organisatie door en door kent." },
  { icon: Award, title: "Kwaliteit", description: "Liever drie uitstekende kandidaten dan twintig middelmatige. Wij selecteren scherp." },
];

const milestones = [
  { year: "Q1 2025", title: "De pijn gevoeld", description: "Gefrustreerd door dure, trage en onpersoonlijke executive search bureaus. Er moest een betere manier zijn." },
  { year: "Q2 2025", title: "OneTime Recruit", description: "Gestart met een missie: executive search met vaste prijzen, snelheid en totale transparantie." },
  { year: "Q3 2025", title: "Software & schaal", description: "Eigen recruitment technologie ontwikkeld. Talent pools per vacature, niet zoeken, maar matchen." },
  { year: "Q4 2025", title: "OneGroup opgericht", description: "Uitbreiding naar een ecosysteem: One Rooted, OneSource en KlikKlaarSEO onder één dak." },
  { year: "Q1 2026", title: "De markt veranderen", description: "Van disruptor naar de nieuwe standaard. Vaste fees, eigen talent pools en een groeiend netwerk van 7.500+ specialisten." },
];

const team = [
  { tag: "Creates", name: "Robin Dennie", role: "Founder & CEO", bio: "25 jaar bureau-ervaring. Recruitment innovator die verandert hoe bedrijven werven.", photo: teamRobin, linkedin: "https://www.linkedin.com/in/robindennie024/" },
  { tag: "Advises", name: "Erik Dijkshoorn", role: "Managing Partner", bio: "Uitgebreide ervaring in meerdere C-level rollen en algemeen management. Leadership coach en strategisch denker.", photo: teamErik, linkedin: "https://www.linkedin.com/in/erik-dijkshoorn-1a72aa17/" },
  { tag: "Directs", name: "Juliëtte Welten", role: "COO", bio: "Bureau manager en BI specialist. Het financiële en operationele geweten van OneTime Recruit.", photo: teamJuliette, linkedin: "https://www.linkedin.com/in/juliette-welten-ab566061/" },
  { tag: "Builds", name: "Luuk Wubs", role: "CTO", bio: "Jonge, gedreven tech leider. Gepassioneerd over het bouwen van schaalbare oplossingen die recruitment beter maken.", photo: teamLuuk, linkedin: "https://www.linkedin.com/in/luuk-wubs-32a451252/" },
  { tag: "Leads", name: "Adriana Antkowiak", role: "Director Germany", bio: "Leidt de Duitse marktexpansie. Bouwt bruggen tussen de Nederlandse aanpak en de Duitse arbeidsmarkt.", photo: teamAdriana, linkedin: "https://www.linkedin.com/in/adrianna-antkowiak-180096235/" },
  { tag: "Inspires", name: "Roland Boegheim", role: "Partner", bio: "Impactvol HR-leider met decennia ervaring. Strategisch partner die organisaties helpt het beste uit hun mensen te halen.", photo: teamRoland, linkedin: "https://www.linkedin.com/in/roland-nederstigt-b06978/" },
];

const NLOverOns = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Over Ons, OneTime Recruit"
        description="Leer meer over OneTime Recruit: onze missie, waarden, team en de reis van startup tot marktleider in executive search."
        locale="nl_NL"
        alternates={getAlternates("over-ons", ["nl"])}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={nlBreadcrumbs["over-ons"]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Over ons</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Wij geloven in <span className="text-accent">leiderschap</span> dat het verschil maakt
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/55">
                OneTime Recruit is opgericht vanuit de overtuiging dat executive search persoonlijker, transparanter en effectiever kan.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <ScrollReveal variant="slide-left">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Onze missie</span>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">
                  De nieuwe standaard voor recruitment
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Wij verbinden organisaties met uitzonderlijke leiders. Niet via massa-sourcing, maar door diepgaand begrip van uw organisatie, cultuur en ambities.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Onze aanpak combineert het beste van executive search met moderne technologie en een persoonlijke touch. Het resultaat: duurzame plaatsingen die impact maken.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground md:text-4xl">98%</p>
                    <p className="mt-1 text-xs text-muted-foreground md:text-sm">Klanttevredenheid</p>
                  </div>
                  <div className="border-l border-border pl-4">
                    <p className="font-display text-2xl font-bold text-foreground md:text-4xl">7.500+</p>
                    <p className="mt-1 text-xs text-muted-foreground md:text-sm">Specialisten</p>
                  </div>
                  <div className="border-l border-border pl-4">
                    <p className="font-display text-2xl font-bold text-foreground md:text-4xl">18</p>
                    <p className="mt-1 text-xs text-muted-foreground md:text-sm">Dagen gem.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slide-right" className="space-y-6">
                <div className="overflow-hidden rounded-2xl">
                  <img src={sfeerOverOns} alt="OneTime Recruit team" className="h-auto w-full object-cover" />
                </div>
                <div className="rounded-2xl border border-border bg-muted/40 p-6 md:p-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground md:text-2xl">Onderdeel van OneGroup</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    OneTime Recruit maakt deel uit van OneGroup, een ecosysteem van gespecialiseerde recruitment- en HR-labels. 
                    Samen bieden we een compleet spectrum aan talent- en organisatieoplossingen.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["OneTime Recruit", "One Rooted", "OneSource", "KlikKlaarSEO"].map((label) => (
                      <span key={label} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
                        {label}
                      </span>
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Onze waarden</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Waar wij voor staan</h2>
            </ScrollReveal>

            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {values.map((v) => (
                <StaggerItem key={v.title} variant="fade-up">
                  <div className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <v.icon className="h-6 w-6" />
                    </div>
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Ons team</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">De mensen achter OneTime Recruit</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
                OneTime Recruit is niet gebouwd door productmanagers die gokten op recruitmentproblemen. Het is gebouwd door operators die ze jarenlang hebben geleefd.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
              {team.map((t) => (
                <StaggerItem key={t.name} variant="fade-up">
                  <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/25 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start justify-between">
                      {t.photo ? (
                        <img
                          src={t.photo}
                          alt={t.name}
                          className="h-16 w-16 rounded-full object-cover ring-2 ring-border group-hover:ring-accent/30 transition-all"
                        />
                      ) : (
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 ring-2 ring-border group-hover:ring-accent/30 transition-all">
                          <span className="font-display text-lg font-bold text-accent">{t.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                      )}
                      <a
                        href={t.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                        aria-label={`${t.name} op LinkedIn`}
                      >
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Van frustratie naar de nieuwe standaard</span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-[2.5rem] leading-tight">Hoe het begon</h2>
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">
                Klaar om uw volgende leider te vinden?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-accent-foreground/80">
                Plan een vrijblijvend gesprek en ontdek hoe wij uw organisatie versterken.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Link to="/nl/contact">
                    Neem contact op <ArrowRight className="ml-2 h-4 w-4" />
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

export default NLOverOns;

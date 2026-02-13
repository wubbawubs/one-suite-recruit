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

const values = [
  { icon: Target, title: "Results-Driven", description: "We measure our success by your results. Every placement must deliver lasting impact." },
  { icon: Eye, title: "Transparent", description: "Fixed prices, honest communication and complete openness about our process." },
  { icon: Heart, title: "Personal", description: "One dedicated consultant who truly knows your organisation inside and out." },
  { icon: Award, title: "Quality", description: "We'd rather present three excellent candidates than twenty mediocre ones. We select sharply." },
];

const milestones = [
  { year: "Q1 2025", title: "Felt the pain", description: "Frustrated by expensive, slow and impersonal executive search agencies. There had to be a better way." },
  { year: "Q2 2025", title: "OneTime Recruit", description: "Launched with a mission: executive search with fixed pricing, speed and total transparency." },
  { year: "Q3 2025", title: "Software & scale", description: "Developed proprietary recruitment technology. Talent pools per vacancy — not searching, but matching." },
  { year: "Q4 2025", title: "OneGroup founded", description: "Expanded into an ecosystem: OneRooted, OneSource and KlikKlaarSEO under one roof." },
  { year: "Q1 2026", title: "Changing the market", description: "From disruptor to the new standard. Fixed fees, proprietary talent pools and a growing network of 7,500+ specialists." },
];

const team = [
  { tag: "Creates", name: "Robin Dennie", role: "Founder & CEO", bio: "25 years of agency experience. Recruitment innovator changing how companies hire.", photo: teamRobin, linkedin: "https://www.linkedin.com/in/robindennie024/" },
  { tag: "Advises", name: "Erik Dijkshoorn", role: "Strategic Advisor", bio: "Extensive experience in multiple C-level roles. Leadership coach and strategic thinker.", photo: teamErik, linkedin: "https://www.linkedin.com/in/erik-dijkshoorn-1a72aa17/" },
  { tag: "Directs", name: "Juliëtte Welten", role: "Operations Director", bio: "Agency management and BI specialist. The financial and operational conscience of OneTime Recruit.", photo: teamJuliette, linkedin: "https://www.linkedin.com/in/juliette-welten-ab566061/" },
  { tag: "Builds", name: "Luuk Wubs", role: "CTO", bio: "Young, driven tech leader. Passionate about building scalable solutions that make recruitment better.", photo: teamLuuk, linkedin: "https://www.linkedin.com/in/luuk-wubs-32a451252/" },
];

const ENAbout = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="About Us — OneTime Recruit"
        description="Learn more about OneTime Recruit: our mission, values, team and the journey from startup to market leader in executive search."
        locale="en_US"
        alternates={getAlternates("over-ons", ["nl", "de", "en"])}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "About" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">About us</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                We believe in <span className="text-accent">leadership</span> that makes the difference
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/55">
                OneTime Recruit was founded on the conviction that executive search can be more personal, transparent and effective.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <ScrollReveal variant="slide-left">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Mission</span>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">The new standard for recruitment</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  We connect organisations with exceptional leaders. Not through mass sourcing, but through deep understanding of your organisation, culture and ambitions.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Our approach combines the best of executive search with modern technology and a personal touch. The result: sustainable placements that make an impact.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground md:text-4xl">98%</p>
                    <p className="mt-1 text-xs text-muted-foreground md:text-sm">Client satisfaction</p>
                  </div>
                  <div className="border-l border-border pl-4">
                    <p className="font-display text-2xl font-bold text-foreground md:text-4xl">7,500+</p>
                    <p className="mt-1 text-xs text-muted-foreground md:text-sm">Specialists</p>
                  </div>
                  <div className="border-l border-border pl-4">
                    <p className="font-display text-2xl font-bold text-foreground md:text-4xl">18</p>
                    <p className="mt-1 text-xs text-muted-foreground md:text-sm">Days avg.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="slide-right">
                <div className="rounded-2xl border border-border bg-muted/40 p-6 md:p-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10"><TrendingUp className="h-8 w-8 text-accent" /></div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground md:text-2xl">Part of OneGroup</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    OneTime Recruit is part of OneGroup, an ecosystem of specialised recruitment and HR labels. Together, we offer a complete spectrum of talent and organisational solutions.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["OneTime Recruit", "OneRooted", "OneSource", "KlikKlaarSEO"].map((label) => (
                      <span key={label} className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">{label}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="bg-muted/60 py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Values</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">What we stand for</h2>
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

        <section className="py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Team</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">The people behind OneTime Recruit</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
                OneTime Recruit wasn't built by product managers who guessed at recruitment problems. It was built by operators who lived them for years.
              </p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {team.map((t) => (
                <StaggerItem key={t.name} variant="fade-up">
                  <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/25 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start justify-between">
                      <img src={t.photo} alt={t.name} className="h-16 w-16 rounded-full object-cover ring-2 ring-border group-hover:ring-accent/30 transition-all" />
                      <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent" aria-label={`${t.name} on LinkedIn`}>
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

        <section className="bg-primary py-24 text-primary-foreground md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">From frustration to the new standard</span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-[2.5rem] leading-tight">How it started</h2>
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

        <section className="relative overflow-hidden bg-accent py-20 md:py-24">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Want to learn more about us?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Get in touch and discover how we can strengthen your organisation.</p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Link to="/en/contact">Get in touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

export default ENAbout;

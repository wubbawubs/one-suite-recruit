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
    description: "We find the right C-level and senior leaders for your organisation. With an exclusive network and proven assessment methodology.",
    href: "/en/services",
    highlight: true,
  },
  {
    icon: Users,
    title: "Leadership Advisory",
    description: "Strategic advice on leadership, team composition and organisational development at the highest level.",
    href: "/en/services",
  },
  {
    icon: Settings,
    title: "Recruitment Operating Model",
    description: "We build and optimise your internal recruitment processes. From employer branding to selection methodology.",
    href: "/en/services",
  },
];

const differentiators = [
  { title: "Exclusive Network", description: "Access to a carefully curated network of senior leaders who are not actively looking." },
  { title: "Proven Assessment Method", description: "Structured selection based on competencies, cultural fit and leadership potential." },
  { title: "Fixed Fee, No Surprises", description: "Transparent pricing with no hidden costs. You know exactly what your investment is upfront." },
  { title: "Aftercare & Guarantee", description: "6 months of aftercare and a guarantee on every placement. We stand for sustainable hires." },
  { title: "Personal Partner", description: "A dedicated consultant who truly understands your company, culture and ambitions." },
];

const steps = [
  { number: "01", title: "Intake & Briefing", description: "In-depth conversation about your company, culture, team and the ideal candidate." },
  { number: "02", title: "Search & Sourcing", description: "Active outreach through our exclusive network, LinkedIn and targeted multi-channel search." },
  { number: "03", title: "Shortlist & Assessment", description: "Structured selection with competency assessment and cultural fit analysis." },
  { number: "04", title: "Presentation", description: "Detailed candidate profiles with our recommendation and rationale." },
  { number: "05", title: "Selection & Placement", description: "Guidance through interviews, negotiations and a smooth onboarding process." },
  { number: "06", title: "Aftercare", description: "6 months of aftercare to ensure a successful integration." },
];

const cases = [
  { client: "Arvoo", industry: "High-tech", challenge: "Search for a technical director with a vision for R&D and growth.", result: "Candidate placed within 3 weeks, successful in role after 1+ year.", metric: "3 weeks" },
  { client: "BGH Accountants", industry: "Accountancy", challenge: "Managing Partner position with emphasis on client relationships and team leadership.", result: "Shortlist of 4 candidates, placement within 18 days.", metric: "18 days" },
  { client: "Thales", industry: "Defence / Tech", challenge: "Senior leadership position in a complex, international organisation.", result: "Successful match on both competencies and cultural fit.", metric: "Top match" },
];

const articles = [
  { title: "The Future of Executive Recruitment", excerpt: "How changing markets and technology are fundamentally transforming the way we find leaders.", readTime: "5 min", category: "Trends" },
  { title: "5 Signs Your Organisation Needs New C-Level Leadership", excerpt: "When is it time to invest in new leadership? These indicators help you make the right decision.", readTime: "4 min", category: "Leadership" },
  { title: "Why Cultural Fit Matters More Than the CV", excerpt: "Research shows that cultural alignment is a better predictor of success than experience alone.", readTime: "6 min", category: "Assessment" },
];

const clients = ["Arvoo", "BGH Accountants", "OOvB Accountants", "Energiebehoud", "Thales"];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OneTime Recruit",
  url: "https://onetimerecruit.nl",
  logo: "https://onetimerecruit.nl/logo.png",
  description: "OneTime Recruit is your specialist in executive search and leadership recruitment in the Netherlands and Europe.",
  contactPoint: { "@type": "ContactPoint", telephone: "+31-6-17226186", contactType: "sales", availableLanguage: ["English", "Dutch", "German"] },
};

const ENHome = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="OneTime Recruit — Executive Search & Leadership"
        description="OneTime Recruit is your specialist in executive search. We find C-level and senior leaders for enterprise organisations."
        jsonLd={orgJsonLd}
        locale="en_US"
        alternates={getAlternates("home", ["nl", "de", "en"])}
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
                  ✦ Search once, hire yourself from then on
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.75rem]"
              >
                Your subscription for
                <br />
                <span className="text-accent">unlimited access</span> to talent
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-primary-foreground/55 md:text-lg italic"
              >
                A digital talent pool per vacancy with qualified candidates and up-to-date information such as availability.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
                  <Link to="/en/for-employers">I'm an employer</Link>
                </Button>
                <Button asChild size="lg" className="h-13 rounded-full border-2 border-accent/60 bg-transparent px-10 text-[15px] font-semibold text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300">
                  <Link to="/en/jobs">I have talent</Link>
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
                  <span className="font-bold text-primary-foreground/75">+7,500 specialists</span>{" "}
                  ready for your assignment
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
                { value: "100+", label: "Talent pools per industry" },
                { value: "7,500+", label: "Available top talent" },
                { value: "100+", label: "Monthly vacancies" },
                { value: "98%", label: "Client satisfaction" },
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
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/50">Trusted by</p>
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Expertise</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">What we do for you</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Three core areas where we excel — all designed to find and retain exceptional talent.</p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.12}>
              {services.map((s) => (
                <StaggerItem key={s.title} variant="fade-up">
                  <Link to={s.href} className={`group relative flex h-full flex-col rounded-2xl border p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 ${s.highlight ? "border-accent/20 bg-accent/[0.03]" : "border-border bg-card"} hover:border-accent/30`}>
                    {s.highlight && <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">Popular</span>}
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent"><s.icon className="h-6 w-6" /></div>
                    <h3 className="mt-6 font-display text-xl font-bold text-card-foreground">{s.title}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">{s.description}</p>
                    <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent transition-all group-hover:gap-2">Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
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
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Why OneTime</span>
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Not just another recruitment agency</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">We are your strategic partner in finding leaders who make the difference.</p>
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Process</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">How we work</h2>
              <p className="mt-5 text-lg text-muted-foreground">A proven process from intake to aftercare.</p>
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Results</span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-[2.5rem] leading-tight">Proven at leading organisations</h2>
              <p className="mt-5 text-lg text-primary-foreground/55">A selection of successful placements.</p>
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
                      <p className="text-sm leading-relaxed text-primary-foreground/45"><span className="font-semibold text-primary-foreground/65">Challenge:</span> {c.challenge}</p>
                      <p className="text-sm leading-relaxed text-primary-foreground/45"><span className="font-semibold text-accent">Result:</span> {c.result}</p>
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
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Knowledge Base</span>
                  <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Insights</h2>
                  <p className="mt-3 text-lg text-muted-foreground">Knowledge and perspectives on leadership and executive search.</p>
                </div>
                <span className="hidden items-center gap-2 text-sm font-semibold text-muted-foreground md:inline-flex">More articles coming soon</span>
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Ready to find the right talent?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Schedule a no-obligation conversation and discover how we can strengthen your organisation.</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Link to="/en/contact">Schedule a call <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" className="h-13 rounded-full border-2 border-primary/30 bg-transparent px-10 text-[15px] font-semibold text-primary hover:bg-primary/10 transition-all duration-300">
                  <a href="tel:+31617226186"><Phone className="mr-2 h-4 w-4" />Call directly</a>
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

export default ENHome;

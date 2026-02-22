import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Clock, Shield, BarChart3, Search, Briefcase, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const deliverables = [
  { icon: Users, title: "Dedicated Talent Pool", description: "An exclusive shortlist of C-level and senior candidates, tailored to your position." },
  { icon: BarChart3, title: "Executive Assessment", description: "Competency-based evaluation using STAR methodology, cultural fit analysis and leadership potential assessment." },
  { icon: Clock, title: "Fast Shortlist", description: "Average 18 working days from intake to shortlist with top candidates." },
  { icon: Shield, title: "Placement Guarantee", description: "Placement guarantee with a free restart if the match doesn't work out." },
  { icon: Target, title: "Weekly Reporting", description: "Transparent updates on progress, pipeline and market intelligence." },
  { icon: Award, title: "Onboarding Support", description: "100-day guidance after placement for a successful start." },
];

const personas = [
  { title: "CEO / Managing Director", description: "Strategic leadership for growth, transformation or turnaround." },
  { title: "CFO / Finance Director", description: "Financial leadership for governance, M&A and scaling." },
  { title: "CTO / CIO", description: "Technology leadership for digital transformation and innovation." },
  { title: "CHRO / HR Director", description: "People leadership for organisational development and culture change." },
  { title: "COO / Operations Director", description: "Operational leadership for efficiency and process optimisation." },
  { title: "VP / Head-of Roles", description: "Senior management for specific business units or functional areas." },
];

const processSteps = [
  { step: "01", title: "Intake & Profile Definition", duration: "Day 1-2", description: "In-depth discussion about your organisation, culture, challenges and the ideal leadership profile." },
  { step: "02", title: "Market Analysis & Sourcing", duration: "Day 3-8", description: "Proactive search through our exclusive network of 7,500+ executives and discrete direct outreach." },
  { step: "03", title: "Assessment & Shortlist", duration: "Day 9-14", description: "STAR interviews, competency assessments and cultural fit analysis. Shortlist of 3-5 candidates." },
  { step: "04", title: "Presentation & Selection", duration: "Day 15-18", description: "Detailed candidate profiles with our recommendation and interview process guidance." },
  { step: "05", title: "Placement & Onboarding", duration: "Post-selection", description: "Contract guidance and 100-day onboarding programme for sustainable success." },
];

const faqs = [
  { q: "What is executive search?", a: "Executive search is a specialised form of recruitment where senior leaders (C-level, directors, VPs) are proactively identified. Unlike traditional recruitment, the best candidates are approached directly — even if they aren't actively looking." },
  { q: "What's the difference between executive search and a headhunter?", a: "A headhunter often works reactively on a commission basis. Executive search is a strategic, methodical process with comprehensive assessment, exclusive search and placement guarantee. We work with fixed fees, no hidden charges." },
  { q: "What does executive search cost?", a: "Traditional providers charge 25-35% of annual salary. We work with transparent fixed fees — predictable costs regardless of salary level." },
  { q: "How long does an executive search take?", a: "Average 18 working days to shortlist. Total timeline including selection is typically 4-8 weeks." },
  { q: "What positions is executive search suitable for?", a: "C-level (CEO, CFO, CTO, CHRO, COO), directors, VP positions, board members, non-executive directors and interim executives." },
  { q: "What if the placed candidate doesn't fit?", a: "We offer a placement guarantee. If the match doesn't work within the guarantee period, we restart the search free of charge. Our 12-month retention is 95%." },
];

export default function ENExecutiveSearch() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Executive Search — C-Level & Senior Leadership | One Time Recruit"
        description="Specialised executive search for C-level, director and VP positions. Fixed fees, shortlist in 18 days, exclusive network of 7,500+ executives."
        locale="en_US"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Executive Search",
          provider: { "@type": "Organization", name: "One Time Recruit" },
          serviceType: "Executive Search",
          areaServed: [{ "@type": "Country", name: "Netherlands" }, { "@type": "Country", name: "Germany" }],
        }}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "Services", href: "/en/services" }, { label: "Executive Search" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Executive Search</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Finding the right leader <span className="text-accent">for your organisation</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Specialised executive search for C-level, director and VP positions. Fixed fee, shortlist in 18 days, dedicated talent pool.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg hover:bg-accent/90">
                  <Link to="/en/contact">Schedule a call <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-13 rounded-full border-2 border-primary-foreground/30 bg-transparent px-8 text-[15px] font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/en/services">All services</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="border-b border-border/50 bg-muted/40 py-10">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              {[
                { value: "500+", label: "Executive placements" },
                { value: "18", label: "Days to shortlist" },
                { value: "95%", label: "12-month retention" },
                { value: "7,500+", label: "Executives in network" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{m.value}</p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What you get</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Concrete deliverables</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {deliverables.map((d) => (
                <StaggerItem key={d.title} variant="fade-up">
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"><d.icon className="h-5 w-5" /></div>
                    <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">{d.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="border-y border-border/50 bg-muted/30 py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Who it's for</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Positions we fill</h2>
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
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our process</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">From intake to shortlist in 18 days</h2>
            </ScrollReveal>
            <div className="mx-auto mt-16 max-w-3xl space-y-0">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 0.1}>
                  <div className="relative flex gap-6 pb-12 last:pb-0">
                    {i < processSteps.length - 1 && <div className="absolute left-[23px] top-12 h-[calc(100%-24px)] w-px bg-border" />}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">{step.step}</div>
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

        <section className="border-t border-border/50 py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">Frequently asked questions</h2>
            </ScrollReveal>
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6">
                    <AccordionTrigger className="text-left font-display text-base font-semibold text-card-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-accent py-14 md:py-20">
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Ready to find the right leader?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Schedule a no-obligation consultation.</p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90">
                  <Link to="/en/contact">Schedule a call <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

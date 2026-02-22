import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Shield, BarChart3, Search, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const methods = [
  { icon: Search, title: "STAR Interviews", description: "Structured competency-based interviews using the STAR method for objective evaluation of leadership qualities." },
  { icon: Target, title: "Cultural Fit Analysis", description: "In-depth analysis of values, leadership style and organisational culture for a sustainable match." },
  { icon: BarChart3, title: "Leadership Potential", description: "Evaluation of growth potential, adaptability and strategic thinking for future-proof leadership positions." },
  { icon: Shield, title: "Reference Checks", description: "Thorough reference checks with relevant stakeholders to verify performance and leadership impact." },
  { icon: Users, title: "Team Dynamics", description: "Analysis of team dynamics and assessment of how the candidate complements and strengthens the existing team." },
  { icon: Award, title: "360° Feedback", description: "Comprehensive evaluation from multiple perspectives for a complete picture of the candidate." },
];

const faqs = [
  { q: "When should you use an assessment?", a: "For hiring decisions on key positions, promotion decisions, leadership development, succession planning and team effectiveness analyses." },
  { q: "How long does an assessment take?", a: "A standard assessment takes 2-3 hours per candidate. More comprehensive assessments can take a full day." },
  { q: "For which levels is assessment suitable?", a: "From mid-level management to C-level — we tailor our assessment methodology to the specific leadership level and role." },
  { q: "How objective is the assessment?", a: "Through standardised methods (STAR), multiple data points and experienced assessors, we ensure the highest possible objectivity and reliability." },
];

export default function ENAssessment() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Assessment — Objective Candidate Evaluation | One Time Recruit"
        description="Objective evaluation of candidates and leaders. STAR interviews, cultural fit analysis, competency assessments and leadership evaluations."
        locale="en_US"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Assessment",
          provider: { "@type": "Organization", name: "One Time Recruit" },
          serviceType: "Assessment",
          areaServed: [{ "@type": "Country", name: "Netherlands" }, { "@type": "Country", name: "Germany" }],
        }}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "Services", href: "/en/services" }, { label: "Assessment" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Assessment</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Objective evaluation <span className="text-accent">for the right decision</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                From competency-based assessments to cultural fit analyses and leadership evaluations — data-driven and objective.
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

        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our methodology</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Proven assessment methods</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {methods.map((d) => (
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Objectivity in your hiring decisions?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Learn more about our assessment methodology.</p>
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

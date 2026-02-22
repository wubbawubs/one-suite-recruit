import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Shield, BarChart3, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const deliverables = [
  { icon: Zap, title: "Rapid Availability", description: "Proven interim professionals who can start within days and make an immediate impact." },
  { icon: Users, title: "Experienced Professionals", description: "Managers and leaders with a proven track record in comparable roles and industries." },
  { icon: Target, title: "Flexible Contracts", description: "From short-term assignments to long-term mandates — tailored to your needs." },
  { icon: Shield, title: "Seamless Handover", description: "Structured transition planning for a smooth handover to the permanent successor." },
  { icon: BarChart3, title: "Weekly Reporting", description: "Transparent updates on progress and impact of the interim assignment." },
  { icon: Award, title: "Results-Oriented", description: "Clear KPIs and measurable outcomes for every interim assignment." },
];

const scenarios = [
  "Sudden leadership gap",
  "Bridge to permanent hire",
  "Transformation or change projects",
  "Post-merger integration",
  "New market entry",
  "Turnaround or restructuring",
];

const faqs = [
  { q: "How quickly is an interim manager available?", a: "Typically within 3-5 working days. Our network includes immediately available interim leaders across all key functional areas." },
  { q: "What positions does interim management cover?", a: "CEO, CFO, CTO, COO, project leaders, change managers and all other senior leadership positions that need to be filled at short notice." },
  { q: "How long does a typical interim assignment last?", a: "Usually 3-12 months, depending on the brief. We offer flexible extension options." },
  { q: "What does interim management cost?", a: "We work with transparent day rates or fixed fees. No hidden charges or placement commissions." },
];

export default function ENInterimSearch() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Interim Search — Immediately Available Leaders | One Time Recruit"
        description="Proven interim professionals for critical positions. Available within days, results-oriented, flexible contract forms."
        locale="en_US"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Interim Search",
          provider: { "@type": "Organization", name: "One Time Recruit" },
          serviceType: "Interim Management",
          areaServed: [{ "@type": "Country", name: "Netherlands" }, { "@type": "Country", name: "Germany" }],
        }}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "Services", href: "/en/services" }, { label: "Interim Search" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Interim Search</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Immediately available <span className="text-accent">leaders</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Proven interim professionals for critical positions. Experienced leaders who can start within days and make an immediate impact.
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What you get</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">Experienced interim leaders</h2>
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
            <ScrollReveal className="mx-auto max-w-3xl">
              <div className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-8 md:p-10">
                <h3 className="font-display text-xl font-bold text-foreground">When to use interim management</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {scenarios.map((s) => (
                    <div key={s} className="flex items-start gap-2.5">
                      <Zap className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 md:py-24">
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Urgent need for leadership?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Contact us for immediately available interim professionals.</p>
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

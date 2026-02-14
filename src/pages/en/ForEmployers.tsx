import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Clock, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAlternates } from "@/lib/seo";

const benefits = [
  { icon: Shield, title: "Guarantee on every placement", description: "6 months full guarantee. If the candidate doesn't work out, we find a replacement at no cost." },
  { icon: Clock, title: "Average 18 days", description: "From intake to shortlist in record time, without compromising on quality." },
  { icon: Star, title: "98% client satisfaction", description: "Our clients rate us 9.4 on average. Relationships for the long term." },
  { icon: Zap, title: "Fixed fee, no surprises", description: "Transparent pricing upfront. No hidden costs, no percentages of annual salary." },
];

const process = [
  { step: "01", title: "No-obligation introduction", description: "We discuss your requirements, culture and the ideal candidate profile." },
  { step: "02", title: "Targeted search", description: "Our team actively approaches suitable candidates from our network of 7,500+ specialists." },
  { step: "03", title: "Shortlist presentation", description: "You receive 3-5 carefully selected candidates with detailed profiles." },
  { step: "04", title: "Guidance & placement", description: "We guide the entire process from interviews to onboarding and aftercare." },
];

const testimonials = [
  { quote: "OneTime immediately understood the type of leadership we needed. The shortlist quality was exceptional.", author: "Board of Directors", company: "Arvoo" },
  { quote: "Fast communication, personal approach and candidates that truly fit our culture. Outstanding experience.", author: "Managing Partner", company: "BGH Accountants" },
  { quote: "The transparent process and keen eye for cultural fit make OneTime our go-to recruitment partner.", author: "HR Manager", company: "OOvB Accountants" },
  { quote: "From intake to placement everything ran smoothly. The candidate has been performing excellently for over a year.", author: "Director", company: "Energiebehoud" },
  { quote: "OneTime combines speed with quality. Within three weeks we had the right candidate in for an interview.", author: "HR Director", company: "Thales" },
];

const packages = [
  {
    name: "Search",
    description: "One-off executive search assignment",
    features: ["Dedicated consultant", "Shortlist of 3-5 candidates", "Competency assessment", "6 months guarantee", "Aftercare programme"],
    cta: "Request a quote",
    popular: false,
  },
  {
    name: "Partnership",
    description: "Ongoing collaboration for multiple positions",
    features: ["Everything in Search", "Priority treatment", "Volume discount", "Quarterly talent reviews", "Strategic advice", "Dedicated account manager"],
    cta: "Schedule a call",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Complete recruitment operating model",
    features: ["Everything in Partnership", "Recruitment process audit", "Employer branding support", "ATS implementation", "Recruiter training", "Monthly reporting"],
    cta: "Get in touch",
    popular: false,
  },
];

const ENForEmployers = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="For Employers — OneTime Recruit"
        description="Discover why 98% of our clients are satisfied. Fixed fee, 18-day turnaround and 6 months guarantee on every placement."
        locale="en_US"
        alternates={getAlternates("opdrachtgevers", ["nl", "de", "en"])}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "For Employers" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">For Employers</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Find the <span className="text-accent">leadership</span> your organisation needs
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/55">
                No mass CVs, but carefully selected executives who fit your culture, ambitions and growth phase.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 transition-all duration-300">
                  <Link to="/en/contact">Schedule a no-obligation call</Link>
                </Button>
                <Button asChild size="lg" className="h-13 rounded-full border-2 border-accent/60 bg-transparent px-10 text-[15px] font-semibold text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300">
                  <Link to="/en/services">View our services</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Why OneTime</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">What you can expect from us</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {benefits.map((b) => (
                <StaggerItem key={b.title} variant="fade-up">
                  <div className="h-full rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-accent/25 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent"><b.icon className="h-6 w-6" /></div>
                    <h3 className="mt-5 font-display text-lg font-bold text-card-foreground">{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="bg-muted/60 py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">How it works</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">The right match in 4 steps</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {process.map((p) => (
                <StaggerItem key={p.step} variant="scale-in">
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/25 hover:shadow-lg">
                    <div className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                    <span className="font-display text-[3rem] font-bold leading-none text-accent/10 group-hover:text-accent/20 transition-colors">{p.step}</span>
                    <h3 className="mt-2 font-display text-lg font-bold text-card-foreground">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Collaboration models</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">Choose the collaboration that suits you</h2>
              <p className="mt-5 text-lg text-muted-foreground">From one-off assignment to strategic partnership.</p>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3" stagger={0.12}>
              {packages.map((pkg) => (
                <StaggerItem key={pkg.name} variant="fade-up">
                  <div className={`relative flex h-full flex-col rounded-2xl border p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pkg.popular ? "border-accent/30 bg-accent/[0.03]" : "border-border bg-card"}`}>
                    {pkg.popular && <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">Recommended</span>}
                    <h3 className="font-display text-2xl font-bold text-card-foreground">{pkg.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">On request</p>
                    <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                    <ul className="mt-8 flex-1 space-y-3">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{f}
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="lg" className={`mt-8 h-12 w-full rounded-full text-[14px] font-semibold transition-all duration-300 ${pkg.popular ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90" : "border-2 border-border bg-transparent text-foreground hover:border-accent/30 hover:text-accent"}`}>
                      <Link to="/en/contact">{pkg.cta}</Link>
                    </Button>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="bg-primary py-24 text-primary-foreground md:py-32">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Client experience</span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-[2.5rem] leading-tight">What our clients say</h2>
            </ScrollReveal>
            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
              {testimonials.map((t) => (
                <StaggerItem key={t.company} variant="fade-up">
                  <div className="flex h-full flex-col rounded-2xl border border-primary-foreground/8 bg-primary-foreground/[0.04] p-8">
                    <p className="flex-1 text-[15px] italic leading-relaxed text-primary-foreground/65">"{t.quote}"</p>
                    <div className="mt-6 border-t border-primary-foreground/8 pt-5">
                      <p className="text-sm font-bold">{t.author}</p>
                      <p className="mt-0.5 text-xs text-accent">{t.company}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="relative overflow-hidden bg-accent py-20 md:py-24">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Ready to get started?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Schedule a no-obligation introduction and discover how we can strengthen your organisation.</p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
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
};

export default ENForEmployers;

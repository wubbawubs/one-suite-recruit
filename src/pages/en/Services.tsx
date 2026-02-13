import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Search, Users, Settings, Target, BarChart3, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAlternates } from "@/lib/seo";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description: "We find the right C-level and senior executives for your organisation. Through our exclusive network and proven assessment methodology, we identify leaders who truly make the difference.",
    features: ["C-suite & VP-level placements", "Competency-based assessment", "Cultural fit analysis", "18-day average turnaround"],
    href: "/en/services",
    highlight: true,
  },
  {
    icon: Users,
    title: "Leadership Advisory",
    description: "Strategic advice on leadership, team composition and organisational development at the highest level. We help future-proof your leadership team.",
    features: ["Leadership evaluations", "Succession planning", "Team effectiveness analysis", "Board advisory"],
    href: "/en/contact",
  },
  {
    icon: Settings,
    title: "Recruitment Operating Model",
    description: "We build and optimise your internal recruitment processes. From employer branding to selection methodology, so you structurally hire better.",
    features: ["Process audit & optimisation", "Employer branding strategy", "ATS implementation", "Recruiter training"],
    href: "/en/services",
  },
  {
    icon: Target,
    title: "Interim Management",
    description: "Immediately available interim executives for critical positions. Proven leaders who can start within days and make an immediate impact.",
    features: ["Rapid availability", "Experienced executives", "Flexible contract forms", "Seamless handover"],
    href: "/en/services",
  },
  {
    icon: BarChart3,
    title: "Talent Mapping",
    description: "Strategic insights into the talent market. We map the availability and quality of talent in your sector.",
    features: ["Market analysis per sector", "Competitive benchmarking", "Salary insights", "Availability reporting"],
    href: "/en/services",
  },
  {
    icon: Briefcase,
    title: "Onboarding Support",
    description: "Guidance for new leaders during their first 100 days. So your investment in talent immediately translates into results.",
    features: ["100-day programme", "Stakeholder alignment", "Quick wins identification", "Performance monitoring"],
    href: "/en/services",
  },
];

const ENServices = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Services — OneTime Recruit"
        description="From executive search to interim management and talent mapping. Discover our strategic recruitment services for enterprise organisations."
        locale="en_US"
        alternates={getAlternates("diensten", ["nl", "de", "en"])}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          provider: { "@type": "Organization", name: "OneTime Recruit" },
          serviceType: "Executive Search",
          areaServed: [{ "@type": "Country", name: "Netherlands" }, { "@type": "Country", name: "Germany" }],
          description: "Strategic executive search and recruitment services for enterprise organisations.",
        }}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/en" }, { label: "Services" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Services</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Strategic solutions for <span className="text-accent">exceptional talent</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/55">
                From executive search to complete recruitment optimisation — we deliver at every level.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
              {services.map((s) => (
                <StaggerItem key={s.title} variant="fade-up">
                  <div className={`group relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 ${s.highlight ? "border-accent/20 bg-accent/[0.03]" : "border-border bg-card"} hover:border-accent/30`}>
                    {s.highlight && <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">Most requested</span>}
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent"><s.icon className="h-6 w-6" /></div>
                    <h3 className="mt-6 font-display text-xl font-bold text-card-foreground">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.description}</p>
                    <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link to={s.href} className="mt-6 inline-flex items-center text-sm font-semibold text-accent transition-all group-hover:gap-2">
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="border-y border-border/50 bg-muted/40 py-14">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              {[
                { value: "500+", label: "Successful placements" },
                { value: "18", label: "Days avg. turnaround" },
                { value: "98%", label: "Client satisfaction" },
                { value: "7,500+", label: "Specialists in network" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{m.value}</p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-accent py-20 md:py-24">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">Which service suits your organisation?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Schedule a no-obligation consultation and discover how we can help.</p>
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

export default ENServices;

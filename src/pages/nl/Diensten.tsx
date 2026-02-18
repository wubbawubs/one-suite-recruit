import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Search, Users, Target, BarChart3, Briefcase, ArrowRight, Crown, Settings, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAlternates, nlBreadcrumbs } from "@/lib/seo";

const serviceGroups = [
  {
    label: "Werving & Selectie",
    description: "Het vinden van de juiste professionals — van mid-level tot directie.",
    icon: Users,
    hubHref: "/nl/werving-en-selectie",
    items: [
      { label: "Executive Search", href: "/nl/diensten/executive-search" },
      { label: "C-Level Recruitment", href: "/nl/diensten/c-level-recruitment" },
      { label: "Interim Search", href: "/nl/interim-management" },
      { label: "Werving & Selectie", href: "/nl/werving-en-selectie" },
      { label: "Headhunter Nederland", href: "/nl/headhunter-nederland" },
      { label: "Directie Werving", href: "/nl/directie-werving" },
      { label: "Confidential Search", href: "/nl/confidential-search" },
    ],
  },
  {
    label: "Assessment & Selectie",
    description: "Objectieve evaluatie van kandidaten en leiders via bewezen methoden.",
    icon: BarChart3,
    hubHref: "/nl/diensten/assessment-selectie",
    items: [
      { label: "Assessment & Selectie", href: "/nl/diensten/assessment-selectie" },
      { label: "STAR Interview Guide", href: "/nl/star-interview-guide" },
      { label: "Assessment Inzetten", href: "/nl/assessment-inzetten" },
      { label: "Referentiechecks", href: "/nl/referentiechecks" },
      { label: "Culture Fit vs Culture Add", href: "/nl/culture-fit-vs-culture-add" },
    ],
  },
  {
    label: "Leadership Advisory",
    description: "Strategisch advies over leiderschap, teamsamenstelling en organisatieontwikkeling.",
    icon: Briefcase,
    hubHref: "/nl/diensten/leadership-advisory",
    items: [
      { label: "Leadership Advisory", href: "/nl/diensten/leadership-advisory" },
      { label: "Leadership Retention", href: "/nl/leadership-retention" },
      { label: "Onboarding Executives", href: "/nl/onboarding-executives" },
      { label: "Employer Brand & Senior Talent", href: "/nl/employer-brand-senior-talent" },
      { label: "Compensation & Benefits Trends", href: "/nl/compensation-benefits-trends" },
    ],
  },
  {
    label: "Recruitment Operating Model",
    description: "Uw recruitmentproces structureel verbeteren en schaalbaar maken.",
    icon: Settings,
    hubHref: "/nl/diensten/recruitment-operating-model",
    items: [
      { label: "Recruitment Operating Model", href: "/nl/diensten/recruitment-operating-model" },
      { label: "Talent Pool per Vacature", href: "/nl/talent-pool-per-vacature" },
      { label: "Recruitment as a Service", href: "/nl/recruitment-as-a-service" },
      { label: "Abonnement Recruitment", href: "/nl/abonnement-recruitment" },
      { label: "Hiring Governance & Reporting", href: "/nl/hiring-governance-reporting" },
      { label: "Talent Acquisition Strategy", href: "/nl/talent-acquisition-strategy" },
    ],
  },
  {
    label: "Industries",
    description: "Executive search expertise per sector — van high-tech tot finance.",
    icon: ShieldCheck,
    hubHref: "/nl/industries",
    items: [
      { label: "Alle 30+ sectoren bekijken", href: "/nl/industries" },
    ],
  },
  {
    label: "Functies",
    description: "Rolprofielen, interviewvragen en salarisbenchmarks per C-level functie.",
    icon: Crown,
    hubHref: "/nl/functies",
    items: [
      { label: "Alle 20+ functies bekijken", href: "/nl/functies" },
    ],
  },
];

const NLDiensten = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Alle Diensten | One Time Recruit"
        description="Overzicht van alle diensten van One Time Recruit. Van executive search tot assessment, van leadership advisory tot recruitment operating model."
        locale="nl_NL"
        alternates={getAlternates("diensten", ["nl"])}
        jsonLd={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Alle Diensten", provider: { "@type": "Organization", name: "One Time Recruit" } }}
      />
      <Header />
      <div className="container"><Breadcrumbs items={nlBreadcrumbs.diensten} /></div>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Alle diensten</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Ontdek welke dienst <span className="text-accent">bij u past</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Van executive search tot assessment, van leadership advisory tot recruitment operating model. Altijd transparant, altijd vaste prijs.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 transition-all duration-300">
                  <Link to="/nl/contact">Plan een gesprek <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Grouped services — Klikklaar style */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="space-y-16">
              {serviceGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <ScrollReveal key={group.label}>
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">{group.label}</h2>
                      </div>
                      <p className="text-sm text-muted-foreground ml-[52px]">{group.description}</p>
                      <Link to={group.hubHref} className="ml-[52px] mt-1 inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                        Lees meer over {group.label.toLowerCase()} <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-accent/30 hover:shadow-sm"
                        >
                          <div>
                            <span className="text-sm font-semibold text-card-foreground">{item.label}</span>
                            <p className="text-xs text-muted-foreground">{group.label}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent transition-all group-hover:translate-x-0.5" />
                        </Link>
                      ))}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-accent py-20 md:py-24">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground">Welke dienst past bij uw organisatie?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Plan een vrijblijvend adviesgesprek en ontdek hoe wij u kunnen helpen.</p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Link to="/nl/contact">Plan een gesprek <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

export default NLDiensten;

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Plane, Shield, Monitor, BarChart3, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const industries = [
  { title: "Aviation", description: "Leadership voor airlines, MRO, airports en aviation services.", href: "/nl/aviation-recruitment", icon: Plane },
  { title: "Defence & High-Tech", description: "Security-cleared leiders voor defence en high-tech organisaties.", href: "/nl/defence-hightech-recruitment", icon: Shield },
  { title: "SaaS / IT", description: "Tech executives voor scale-ups en enterprise software bedrijven.", href: "/nl/saas-it-leadership", icon: Monitor },
  { title: "Finance, Risk & Compliance", description: "Leiders voor banken, verzekeraars, fintech en asset managers.", href: "/nl/finance-risk-compliance", icon: BarChart3 },
  { title: "Operations & Supply Chain", description: "COO's en supply chain directors voor productie en logistiek.", href: "/nl/operations-supply-chain", icon: Truck },
];

export default function Industries() {
  return (
    <div className="min-h-screen">
      <PageMeta title="Industries: Executive Search per Sector | OneTime Recruit" description="Executive search expertise per sector. Aviation, Defence, SaaS/IT, Finance en Operations — wij kennen uw markt." locale="nl_NL" />
      <Header />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/nl" }, { label: "Industries" }]} /></div>
      <main>
        <section className="relative overflow-hidden bg-primary py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Sectoren</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl">Executive search in <span className="text-accent">uw sector</span></h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">Diepgaande sectorkennis gecombineerd met bewezen executive search methodiek.</p>
            </ScrollReveal>
          </div>
        </section>
        <section className="py-24 md:py-32">
          <div className="container">
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {industries.map((ind) => (
                <StaggerItem key={ind.title} variant="fade-up">
                  <Link to={ind.href} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"><ind.icon className="h-5 w-5" /></div>
                    <h2 className="mt-5 font-display text-lg font-bold text-card-foreground">{ind.title}</h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{ind.description}</p>
                    <span className="mt-auto pt-6 inline-flex items-center text-sm font-semibold text-accent">Lees meer <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
        <section className="relative overflow-hidden bg-accent py-20"><div className="container relative z-10 text-center"><ScrollReveal variant="scale-in"><h2 className="font-display text-3xl font-bold text-accent-foreground">Executive search in uw sector?</h2><p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Plan een gesprek over uw specifieke leiderschapsbehoefte.</p><div className="mt-10"><Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90"><Link to="/nl/contact">Plan een gesprek <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></ScrollReveal></div></section>
      </main>
      <Footer />
    </div>
  );
}

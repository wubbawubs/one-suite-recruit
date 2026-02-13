import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Repeat, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const items = [
  { title: "Talent Pool per Vacature", description: "Een dedicated pool die u behoudt, ook na plaatsing.", href: "/nl/talent-pool-per-vacature", icon: Users },
  { title: "Recruitment-as-a-Service", description: "Doorlopende executive recruitment capaciteit via abonnement.", href: "/nl/recruitment-as-a-service", icon: Repeat },
  { title: "Abonnement Recruitment", description: "Wanneer het werkt en wanneer niet — eerlijk advies.", href: "/nl/abonnement-recruitment", icon: FileText },
  { title: "Hiring Governance & Reporting", description: "Data-gedreven controle over uw recruitment proces.", href: "/nl/hiring-governance-reporting", icon: BarChart3 },
];

export default function RecruitmentOperatingModel() {
  return (
    <div className="min-h-screen">
      <PageMeta title="Recruitment Operating Model: De Nieuwe Standaard | OneTime Recruit" description="Het recruitment operating model van OneTime Recruit. Talent pools, RaaS, abonnementen en hiring governance voor enterprise organisaties." locale="nl_NL" />
      <Header />
      <div className="container"><Breadcrumbs items={[{ label: "Home", href: "/nl" }, { label: "Recruitment Operating Model" }]} /></div>
      <main>
        <section className="relative overflow-hidden bg-primary py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">De Nieuwe Standaard</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl">Het recruitment <span className="text-accent">operating model</span></h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">Van ad-hoc search naar structurele recruitment capaciteit. Eenmalig zoeken, voortaan zelf invullen.</p>
            </ScrollReveal>
          </div>
        </section>
        <section className="py-24 md:py-32">
          <div className="container">
            <StaggerContainer className="grid gap-8 md:grid-cols-2" stagger={0.08}>
              {items.map((item) => (
                <StaggerItem key={item.title} variant="fade-up">
                  <Link to={item.href} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"><item.icon className="h-5 w-5" /></div>
                    <h2 className="mt-5 font-display text-lg font-bold text-card-foreground">{item.title}</h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.description}</p>
                    <span className="mt-auto pt-6 inline-flex items-center text-sm font-semibold text-accent">Lees meer <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
        <section className="relative overflow-hidden bg-accent py-20"><div className="container relative z-10 text-center"><ScrollReveal variant="scale-in"><h2 className="font-display text-3xl font-bold text-accent-foreground">Ontdek de nieuwe standaard</h2><p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Plan een gesprek en ontdek welk model past bij uw organisatie.</p><div className="mt-10"><Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90"><Link to="/nl/contact">Plan een gesprek <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></ScrollReveal></div></section>
      </main>
      <Footer />
    </div>
  );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase, Crown, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const roles = [
  { title: "CEO Recruitment", description: "Strategisch leiderschap voor groei, transformatie of turnaround.", href: "/nl/ceo-recruitment", icon: Crown },
  { title: "CFO Recruitment", description: "Financieel leiderschap voor governance, M&A en schaalvergroting.", href: "/nl/cfo-recruitment", icon: Briefcase },
  { title: "CTO/CIO Recruitment", description: "Technologisch leiderschap voor digitale transformatie en innovatie.", href: "/nl/cto-cio-recruitment", icon: Shield },
  { title: "CHRO Recruitment", description: "People-leiderschap voor organisatieontwikkeling en cultuurverandering.", href: "/nl/chro-recruitment", icon: Users },
  { title: "Board & Commissarissen", description: "Toezichthoudend leiderschap met governance-expertise.", href: "/nl/board-commissarissen-search", icon: Award },
];

export default function CLevelRecruitment() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="C-level & Directie Recruitment Nederland | OneTime Recruit"
        description="Gespecialiseerde recruitment voor C-level en directieposities. CEO, CFO, CTO, CHRO en board search met bewezen assessment methodiek."
        locale="nl_NL"
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/nl" }, { label: "C-level Recruitment" }]} />
      </div>
      <main>
        <section className="relative overflow-hidden bg-primary py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">C-level & Directie</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl">
                De juiste <span className="text-accent">C-level leider</span> voor uw organisatie
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Van CEO tot CHRO — wij vinden bestuurders en directieleden die strategische impact maken.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {roles.map((role) => (
                <StaggerItem key={role.title} variant="fade-up">
                  <Link to={role.href} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <role.icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 font-display text-lg font-bold text-card-foreground">{role.title}</h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{role.description}</p>
                    <span className="mt-auto pt-6 inline-flex items-center text-sm font-semibold text-accent">
                      Lees meer <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="relative overflow-hidden bg-accent py-20">
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground">Welke leider zoekt u?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">Plan een vrijblijvend gesprek en bespreek uw leiderschapsbehoefte.</p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90">
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
}

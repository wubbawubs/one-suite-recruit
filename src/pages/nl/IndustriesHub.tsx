import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import industries, { industryClusters, getIndustriesByCluster } from "@/data/industries";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Industries — Executive Search per Sector",
  description: "Overzicht van alle sectoren waarin One Time Recruit executive search uitvoert.",
  provider: { "@type": "Organization", name: "One Time Recruit", url: "https://onetimerecruit.nl" },
};

export default function IndustriesHub() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Industries: Executive Search per Sector | One Time Recruit"
        description="Overzicht van alle sectoren waarin One Time Recruit executive search uitvoert. Van high-tech tot finance, van aviation tot retail."
        locale="nl_NL"
        jsonLd={faqJsonLd}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", href: "/nl" }, { label: "Diensten", href: "/nl/diensten" }, { label: "Industries" }]} />
      </div>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-20 md:py-28 lg:py-36">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Alle sectoren</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
                Executive search in <span className="text-accent">uw sector</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                Van high-tech tot finance, van aviation tot retail. Ontdek onze sectorexpertise en vind de juiste leider voor uw organisatie.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 transition-all duration-300">
                  <Link to="/nl/contact">Plan een gesprek <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border/50 bg-muted/40 py-10">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              {[
                { value: `${industries.length}+`, label: "Sectoren" },
                { value: "100+", label: "Executive interviews/jaar" },
                { value: "50+", label: "Organisaties bediend" },
                { value: "95%", label: "Retentie na 12 maanden" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{m.value}</p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cluster sections — Klikklaar-style grouped layout */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="space-y-16">
              {industryClusters.map((cluster) => {
                const clusterIndustries = getIndustriesByCluster(cluster.id);
                if (clusterIndustries.length === 0) return null;
                return (
                  <ScrollReveal key={cluster.id}>
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          {(() => { const Icon = clusterIndustries[0].icon; return <Icon className="h-5 w-5" />; })()}
                        </div>
                        <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">{cluster.label}</h2>
                      </div>
                      <p className="text-sm text-muted-foreground ml-[52px]">{cluster.description}</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {clusterIndustries.map((ind) => (
                        <Link
                          key={ind.slug}
                          to={`/nl/industries/${ind.slug}`}
                          className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-accent/30 hover:shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            {(() => { const Icon = ind.icon; return <Icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />; })()}
                            <div>
                              <span className="text-sm font-semibold text-card-foreground">{ind.title}</span>
                              <p className="text-xs text-muted-foreground line-clamp-1">{ind.description}</p>
                            </div>
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
              <h2 className="font-display text-3xl font-bold text-accent-foreground">Uw sector niet gevonden?</h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">
                Neem contact op — wij beoordelen graag of wij de juiste partner zijn voor uw sector.
              </p>
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
}

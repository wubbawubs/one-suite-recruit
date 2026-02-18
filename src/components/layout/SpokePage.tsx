import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { calculateScore } from "@/lib/seo-scorecard";
import React from "react";

/** Parse [text](/url) markdown links in a string into React elements */
function parseInlineLinks(text: string): React.ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <Link key={i} to={match[2]} className="font-medium text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
          {match[1]}
        </Link>
      );
    }
    return part;
  });
}

interface FAQ {
  q: string;
  a: string;
}

interface ContentSection {
  title: string;
  content: string;
  items?: string[];
}

interface RelatedLink {
  label: string;
  href: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

/** Evidence module — case snippets, benchmarks, sector insights */
export interface EvidenceItem {
  icon?: "case" | "benchmark" | "insight";
  title: string;
  value?: string;
  description: string;
}

/** Page type determines index-ready threshold */
export type SpokePageType = "pillar" | "hub" | "spoke" | "functie" | "industry" | "cross";

/** SERP-fit module — intent bullets + comparison + checklist */
export interface SerpFitModule {
  /** "Wat mensen echt willen weten" — 3-5 intent bullets */
  intentBullets?: string[];
  /** "Onze aanpak vs. standaard bureau" — comparison points */
  comparison?: { label: string; standard: string; otr: string }[];
  /** "Decision criteria checklist" — for featured snippets */
  checklist?: string[];
}

/** Role-specific snapshot (for functiepagina's) */
export interface RoleSnapshot {
  responsibilities: string[];
  scope: string;
  reportingLines: string;
}

/** Hiring signals & risks (for functiepagina's) */
export interface HiringSignals {
  signals: string[];
  risks: string[];
}

export interface SpokePageData {
  metaTitle: string;
  metaDescription: string;
  breadcrumbs: BreadcrumbItem[];
  heroLabel: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  sections: ContentSection[];
  faqs: FAQ[];
  pillarLink: { label: string; href: string };
  relatedLinks: RelatedLink[];
  ctaTitle?: string;
  ctaDescription?: string;
  /** Evidence module — shows case snippets, benchmarks, sector insights */
  evidence?: EvidenceItem[];
  /** If true, force noindex (overrides auto-check) */
  noindex?: boolean;
  /** Page type — determines index-ready threshold (default: "spoke") */
  pageType?: SpokePageType;
  /** SERP-fit module — intent matching for #1 rankings */
  serpFit?: SerpFitModule;
  /** Role snapshot (functiepagina's only) */
  roleSnapshot?: RoleSnapshot;
  /** Hiring signals & risks (functiepagina's only) */
  hiringSignals?: HiringSignals;
}

const evidenceIcons = {
  case: CheckCircle,
  benchmark: BarChart3,
  insight: TrendingUp,
};

const isDev = import.meta.env.DEV;

export function SpokePage({ data }: { data: SpokePageData }) {
  const scorecard = calculateScore(data);

  const faqJsonLd = data.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  } : undefined;

  return (
    <div className="min-h-screen">
      <PageMeta
        title={data.metaTitle}
        description={data.metaDescription}
        locale="nl_NL"
        jsonLd={faqJsonLd as unknown as Record<string, unknown>}
        noindex={!scorecard.indexReady}
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={data.breadcrumbs} />
      </div>

      {/* DEV-only: SEO Scorecard v2 overlay */}
      {isDev && (
        <div className="fixed bottom-4 right-4 z-50 w-96 max-h-[80vh] overflow-y-auto rounded-xl border border-border bg-card p-4 shadow-xl text-xs">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="font-bold text-card-foreground">SEO Score v2</span>
              <span className="ml-2 rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">{scorecard.pageType}</span>
            </div>
            <span className={`font-display text-2xl font-bold ${scorecard.indexReady ? "text-green-600" : "text-red-500"}`}>
              {scorecard.total}/100
            </span>
          </div>
          <div className={`mb-2 rounded px-2 py-1 text-center font-semibold ${scorecard.indexReady ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {scorecard.indexReady ? "✓ INDEX-READY" : `✗ NOINDEX (drempel: ${scorecard.threshold})`}
          </div>
          {Object.entries(scorecard.categories).map(([key, cat]) => {
            const labels: Record<string, string> = {
              uniqueIntro: "1. Unieke Intro",
              proofClaims: "2. Bewijs & Claims",
              evidence: "3. Evidence Module",
              faqQuality: "4. FAQ Kwaliteit",
              internalLinks: "5. Interne Links",
              serpFit: "6. SERP-fit",
              structuredData: "7. Structured Data",
              contentDepth: "8. Content Diepte",
            };
            return (
              <div key={key} className="mt-2">
                <div className="flex justify-between font-semibold text-muted-foreground">
                  <span>{labels[key] || key}</span>
                  <span className={cat.score >= cat.max * 0.7 ? "text-green-600" : cat.score >= cat.max * 0.4 ? "text-yellow-600" : "text-red-500"}>{cat.score}/{cat.max}</span>
                </div>
                {cat.details.map((d: string, i: number) => (
                  <p key={i} className="text-muted-foreground/70 pl-2">{d}</p>
                ))}
              </div>
            );
          })}
        </div>
      )}

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(150_35%_15%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
          <div className="container relative z-10">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{data.heroLabel}</span>
              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-primary-foreground md:text-5xl">
                {data.heroTitle} <span className="text-accent">{data.heroHighlight}</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/60">
                {data.heroDescription}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Back to pillar */}
        <div className="container py-6">
          <Link to={data.pillarLink.href} className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80">
            <ArrowLeft className="h-4 w-4" />
            {data.pillarLink.label}
          </Link>
        </div>

        {/* Evidence module */}
        {data.evidence && data.evidence.length > 0 && (
          <section className="border-y border-border/50 bg-muted/20 py-12 md:py-16">
            <div className="container">
              <ScrollReveal className="mx-auto max-w-4xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Bewezen resultaten</span>
                <h2 className="mt-3 font-display text-xl font-bold text-foreground md:text-2xl">Cijfers & inzichten</h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {data.evidence.map((item, i) => {
                    const IconComp = evidenceIcons[item.icon || "insight"];
                    return (
                      <div key={i} className="rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                            <IconComp className="h-4 w-4 text-accent" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.title}</p>
                            {item.value && (
                              <p className="mt-1 font-display text-2xl font-bold text-foreground">{item.value}</p>
                            )}
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Content sections */}
        {data.sections.map((section, i) => (
          <section key={i} className={`py-16 md:py-20 ${i % 2 === 1 ? "bg-muted/30" : ""}`}>
            <div className="container">
              <ScrollReveal className="mx-auto max-w-3xl">
                <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">{section.title}</h2>
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                  {section.content.split("\n\n").map((p, j) => (
                    <p key={j}>{parseInlineLinks(p)}</p>
                  ))}
                </div>
                {section.items && section.items.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {parseInlineLinks(item)}
                      </li>
                    ))}
                  </ul>
                )}
              </ScrollReveal>
            </div>
          </section>
        ))}

        {/* FAQ */}
        {data.faqs.length > 0 && (
          <section className="border-t border-border/50 bg-muted/30 py-20 md:py-24">
            <div className="container">
              <ScrollReveal className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Veelgestelde vragen</span>
                <h2 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">FAQ</h2>
              </ScrollReveal>
              <div className="mx-auto mt-12 max-w-3xl">
                <Accordion type="single" collapsible className="space-y-3">
                  {data.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-accent/30">
                      <AccordionTrigger className="text-left font-display text-[15px] font-semibold text-card-foreground hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}

        {/* Related links */}
        <section className="py-16 md:py-20">
          <div className="container">
            <ScrollReveal className="mx-auto max-w-3xl">
              <h3 className="font-display text-lg font-bold text-foreground">Gerelateerde artikelen</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {data.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium text-card-foreground transition-all hover:border-accent/30 hover:shadow-sm"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-accent py-20 md:py-24">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
          <div className="container relative z-10 text-center">
            <ScrollReveal variant="scale-in">
              <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">
                {data.ctaTitle || "Klaar om de volgende stap te zetten?"}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">
                {data.ctaDescription || "Plan een vrijblijvend gesprek en ontdek hoe wij u kunnen helpen."}
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
                  <Link to="/nl/contact">
                    Plan een gesprek <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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

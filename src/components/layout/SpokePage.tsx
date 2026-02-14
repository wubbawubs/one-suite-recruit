import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/components/PageMeta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
}

export function SpokePage({ data }: { data: SpokePageData }) {
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
      />
      <Header />
      <div className="container">
        <Breadcrumbs items={data.breadcrumbs} />
      </div>

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

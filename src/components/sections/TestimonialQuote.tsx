import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Quote } from "lucide-react";

interface TestimonialQuoteProps {
  quote: string;
  author: string;
  company: string;
  variant?: "light" | "dark" | "muted";
}

export function TestimonialQuote({ quote, author, company, variant = "muted" }: TestimonialQuoteProps) {
  const styles = {
    light: "bg-card border-border",
    dark: "bg-muted border-border/50",
    muted: "bg-muted/60 border-border/50",
  };

  const textStyles = {
    light: { quote: "text-foreground", author: "text-foreground", company: "text-accent" },
    dark: { quote: "text-primary", author: "text-primary", company: "text-accent" },
    muted: { quote: "text-foreground", author: "text-foreground", company: "text-accent" },
  };

  return (
    <section className={`border-y ${styles[variant]} py-12 md:py-16`}>
      <div className="container">
        <ScrollReveal variant="fade-in">
          <div className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto h-8 w-8 text-accent/30" />
            <blockquote className={`mt-5 font-display text-xl font-semibold leading-relaxed md:text-2xl ${textStyles[variant].quote}`}>
              "{quote}"
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-accent/20" />
              <p className="text-sm">
                <span className={`font-semibold ${textStyles[variant].author}`}>{author}</span>
                <span className={`mx-1.5 ${textStyles[variant].author} opacity-30`}>|</span>
                <span className={`font-medium ${textStyles[variant].company}`}>{company}</span>
              </p>
              <div className="h-px w-8 bg-accent/20" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

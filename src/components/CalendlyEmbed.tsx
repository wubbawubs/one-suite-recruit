import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Calendar } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/robin-dennie-onetimerecruit/teams";

interface CalendlyEmbedProps {
  /** Section heading */
  title?: string;
  /** Subtitle text */
  subtitle?: string;
}

export function CalendlyEmbed({
  title = "Plan een gesprek",
  subtitle = "Kies een moment dat u schikt voor een vrijblijvend kennismakingsgesprek.",
}: CalendlyEmbedProps) {
  return (
    <section id="calendly" className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Calendar className="h-6 w-6" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold text-foreground md:text-[2.5rem] leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=5BA882`}
              title="Calendly Scheduling"
              className="h-[700px] w-full border-0"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

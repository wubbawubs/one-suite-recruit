import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-accent py-20 md:py-24">
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />

      <div className="container relative z-10 text-center">
        <ScrollReveal variant="scale-in">
          <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-[2.5rem] leading-tight">
            Klaar om het juiste talent te vinden?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-accent-foreground/80">
            Plan een vrijblijvend gesprek en ontdek hoe wij uw organisatie kunnen versterken.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-13 rounded-full bg-primary px-10 text-[15px] font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300">
              <Link to="/nl/contact#calendly">
                Plan een gesprek
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="h-13 rounded-full border-2 border-primary/30 bg-transparent px-10 text-[15px] font-semibold text-primary hover:bg-primary/10 transition-all duration-300">
              <a href="tel:+31617226186">
                <Phone className="mr-2 h-4 w-4" />
                Bel direct
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

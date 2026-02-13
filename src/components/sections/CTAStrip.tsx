import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTAStrip() {
  return (
    <section className="bg-accent py-16 md:py-20">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-bold text-accent-foreground md:text-4xl">
          Klaar om het juiste leiderschap te vinden?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-accent-foreground/80">
          Plan een vrijblijvend gesprek en ontdek hoe wij uw organisatie kunnen versterken.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
            <Link to="/nl/contact">
              Plan een gesprek
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
            <a href="tel:+31612345678">
              <Phone className="mr-2 h-4 w-4" />
              Bel direct
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32 lg:py-40">
      {/* Dark overlay with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Toggle tabs like the current site */}
          <div className="mb-8 inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5">
            <span className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-2.5 text-sm font-medium text-primary-foreground">
              Eenmalig een zoekopdracht
            </span>
            <span className="px-5 py-2.5 text-sm text-primary-foreground/60">
              Dezelfde vacature voortaan in eigen beheer invullen
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Het abonnement voor
            <br />
            onbeperkt toegang tot talent
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl" style={{ fontStyle: 'italic' }}>
            Een digitale talentpool per vacature met geschikte kandidaten en up-to-date informatie zoals beschikbaarheid.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-accent px-8 text-accent-foreground shadow-lg hover:bg-accent/90">
              <Link to="/nl/diensten">
                Ik ben opdrachtgever
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-accent text-accent bg-transparent hover:bg-accent/10 px-8">
              <Link to="/nl/vacatures">
                Ik heb talent
              </Link>
            </Button>
          </div>

          {/* Proof metric */}
          <p className="mt-10 text-sm text-primary-foreground/60">
            <span className="font-bold text-primary-foreground">+7500 Specialisten</span>{" "}
            klaar voor jouw opdracht
          </p>
        </div>
      </div>
    </section>
  );
}
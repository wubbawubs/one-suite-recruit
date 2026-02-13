import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-28 md:py-36 lg:py-44">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Toggle tabs */}
          <div className="mb-10 inline-flex items-center rounded-full border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-sm">
            <span className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-6 py-2.5 text-sm font-medium text-primary-foreground">
              Eenmalig een zoekopdracht
            </span>
            <span className="px-6 py-2.5 text-sm text-primary-foreground/50 cursor-pointer hover:text-primary-foreground/70 transition-colors">
              Dezelfde vacature voortaan in eigen beheer invullen
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] text-primary-foreground md:text-5xl lg:text-[3.5rem]">
            Het abonnement voor
            <br />
            onbeperkt toegang tot talent
          </h1>

          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-primary-foreground/60 md:text-lg italic">
            Een digitale talentpool per vacature met geschikte kandidaten en up-to-date informatie zoals beschikbaarheid.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full bg-accent px-8 text-[15px] font-semibold text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25 transition-all">
              <Link to="/nl/diensten">
                Ik ben opdrachtgever
              </Link>
            </Button>
            <Button asChild size="lg" className="h-12 rounded-full border-2 border-accent bg-transparent px-8 text-[15px] font-semibold text-accent hover:bg-accent/10 transition-all">
              <Link to="/nl/vacatures">
                Ik heb talent
              </Link>
            </Button>
          </div>

          <p className="mt-12 text-sm text-primary-foreground/45">
            <span className="font-bold text-primary-foreground/80">+7500 Specialisten</span>{" "}
            klaar voor jouw opdracht
          </p>
        </div>
      </div>
    </section>
  );
}
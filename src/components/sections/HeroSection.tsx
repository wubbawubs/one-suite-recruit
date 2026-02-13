import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-[hsl(150_35%_15%)]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-10 inline-flex items-center rounded-full border border-primary-foreground/12 bg-primary-foreground/5 backdrop-blur-sm"
          >
            <span className="rounded-full border border-primary-foreground/20 bg-primary-foreground/8 px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm">
              Eenmalig een zoekopdracht
            </span>
            <span className="px-6 py-2.5 text-sm text-primary-foreground/40 cursor-pointer hover:text-primary-foreground/60 transition-colors">
              Voortaan in eigen beheer invullen
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-4xl font-bold leading-[1.08] text-primary-foreground md:text-5xl lg:text-[3.75rem]"
          >
            Het abonnement voor
            <br />
            <span className="text-accent">onbeperkt toegang</span> tot talent
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-primary-foreground/55 md:text-lg italic"
          >
            Een digitale talentpool per vacature met geschikte kandidaten en up-to-date informatie zoals beschikbaarheid.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="h-13 rounded-full bg-accent px-10 text-[15px] font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
              <Link to="/nl/diensten">Ik ben opdrachtgever</Link>
            </Button>
            <Button asChild size="lg" className="h-13 rounded-full border-2 border-accent/60 bg-transparent px-10 text-[15px] font-semibold text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300">
              <Link to="/nl/vacatures">Ik heb talent</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 flex items-center justify-center gap-3"
          >
            <div className="h-px w-8 bg-primary-foreground/15" />
            <p className="text-sm text-primary-foreground/40">
              <span className="font-bold text-primary-foreground/75">+7.500 Specialisten</span>{" "}
              klaar voor jouw opdracht
            </p>
            <div className="h-px w-8 bg-primary-foreground/15" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

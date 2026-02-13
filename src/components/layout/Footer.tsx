import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const footerNav = [
  {
    title: "Diensten",
    links: [
      { label: "Executive Search", href: "/nl/diensten/executive-search" },
      { label: "Leiderschap & Directie", href: "/nl/diensten/leiderschap" },
      { label: "Alle diensten", href: "/nl/diensten" },
    ],
  },
  {
    title: "Bedrijf",
    links: [
      { label: "Over ons", href: "/nl/over-ons" },
      { label: "Hoe we werken", href: "/nl/hoe-we-werken" },
      { label: "Referenties", href: "/nl/referenties" },
      { label: "Vacatures", href: "/nl/vacatures" },
    ],
  },
  {
    title: "OneGroup",
    links: [
      { label: "OneTime Recruit", href: "/nl" },
      { label: "OneRooted", href: "#" },
      { label: "OneSource", href: "#" },
      { label: "Click Larasio", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                <span className="text-lg font-bold text-accent-foreground">O</span>
              </div>
              <span className="font-display text-xl font-bold">
                ONE-TIME <span className="font-normal">Recruit</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              DE nieuwe standaard voor Executive Search. Wij vinden het juiste leiderschap voor uw organisatie.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 transition-colors hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:info@onetimerecruit.nl" className="text-primary-foreground/60 transition-colors hover:text-accent">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+31612345678" className="text-primary-foreground/60 transition-colors hover:text-accent">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((group) => (
            <div key={group.title}>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} OneTime Recruit — Onderdeel van OneGroup
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70">
              Privacybeleid
            </Link>
            <Link to="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
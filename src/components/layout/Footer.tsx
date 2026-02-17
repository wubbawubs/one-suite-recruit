import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";
import logo from "@/assets/onetime-logo.webp";

const footerNav = [
  {
    title: "Diensten",
    links: [
      { label: "Executive Search", href: "/nl/executive-search" },
      { label: "C-level Recruitment", href: "/nl/c-level-recruitment" },
      { label: "Industries", href: "/nl/industries" },
      { label: "Alle diensten", href: "/nl/diensten" },
    ],
  },
  {
    title: "Kennis",
    links: [
      { label: "Assessment & Selectie", href: "/nl/assessment-selectie" },
      { label: "Recruitment Model", href: "/nl/recruitment-operating-model" },
      { label: "Employer Branding", href: "/nl/employer-branding-retention" },
      { label: "Kosten Executive Search", href: "/nl/kosten-executive-search" },
    ],
  },
  {
    title: "Bedrijf",
    links: [
      { label: "Over ons", href: "/nl/over-ons" },
      { label: "Opdrachtgevers", href: "/nl/opdrachtgevers" },
      { label: "Vacatures", href: "/nl/vacatures" },
      { label: "Contact", href: "/nl/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/5 bg-primary text-primary-foreground">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
               <img src={logo} alt="One Time Recruit" className="h-12 w-12" />
              <span className="text-xl font-bold font-sans">
                ONE TIME <span className="font-normal">Recruit</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/55">
              DE nieuwe standaard voor recruitment. Wij vinden het juiste talent voor uw organisatie.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://www.linkedin.com/company/onetimerecruit/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary-foreground/15 p-2.5 text-primary-foreground/50 transition-colors hover:border-accent hover:text-accent">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:info@onetimerecruit.nl" className="rounded-full border border-primary-foreground/15 p-2.5 text-primary-foreground/50 transition-colors hover:border-accent hover:text-accent">
                <Mail className="h-4 w-4" />
              </a>
              <a href="tel:+31617226186" className="rounded-full border border-primary-foreground/15 p-2.5 text-primary-foreground/50 transition-colors hover:border-accent hover:text-accent">
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/35 font-sans">
                {group.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/55 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/8 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} One Time Recruit, Onderdeel van One Group
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/55">
              Privacybeleid
            </Link>
            <Link to="#" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/55">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

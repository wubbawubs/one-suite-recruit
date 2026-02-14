import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/onetime-logo.webp";
import sfeerWerving from "@/assets/sfeer-werving.jpg";
import sfeerSelectie from "@/assets/sfeer-selectie.jpg";
import sfeerAbonnement from "@/assets/sfeer-abonnement.jpg";
import sfeerEigenBeheer from "@/assets/sfeer-eigen-beheer.jpg";
import sfeerZoekopdracht from "@/assets/sfeer-zoekopdracht.jpg";
import sfeerOverOns from "@/assets/sfeer-over-ons.jpg";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string; image?: string }[];
}

const navConfigs: Record<string, { items: NavItem[]; ctaLabel: string; ctaHref: string }> = {
  nl: {
    items: [
      { label: "Home", href: "/nl" },
      {
        label: "Diensten",
        href: "/nl/diensten",
        children: [
          { label: "Executive Search", href: "/nl/executive-search", description: "Onze bewezen search methodiek", image: sfeerWerving },
          { label: "C-level & Directie", href: "/nl/c-level-recruitment", description: "CEO, CFO, CTO, CHRO recruitment", image: sfeerSelectie },
          { label: "Industries", href: "/nl/industries", description: "Sectorspecialisatie per industrie", image: sfeerAbonnement },
          { label: "Assessment & Selectie", href: "/nl/assessment-selectie", description: "STAR-interviews & cultuurfit", image: sfeerEigenBeheer },
          { label: "Recruitment Model", href: "/nl/recruitment-operating-model", description: "Talent pools & RaaS", image: sfeerZoekopdracht },
          { label: "Employer Branding", href: "/nl/employer-branding-retention", description: "Aantrekken & behouden", image: sfeerOverOns },
        ],
      },
      { label: "Vacatures", href: "/nl/vacatures" },
      { label: "Opdrachtgevers", href: "/nl/opdrachtgevers" },
      { label: "Over ons", href: "/nl/over-ons" },
      { label: "Contact", href: "/nl/contact" },
    ],
    ctaLabel: "Direct contact?",
    ctaHref: "/nl/contact",
  },
  de: {
    items: [
      { label: "Home", href: "/de" },
      { label: "Leistungen", href: "/de/leistungen" },
      { label: "Stellenangebote", href: "/de/stellenangebote" },
      { label: "Für Arbeitgeber", href: "/de/fuer-arbeitgeber" },
      { label: "Über uns", href: "/de/ueber-uns" },
      { label: "Kontakt", href: "/de/kontakt" },
    ],
    ctaLabel: "Kontakt aufnehmen",
    ctaHref: "/de/kontakt",
  },
  en: {
    items: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Jobs", href: "/en/jobs" },
      { label: "For Employers", href: "/en/for-employers" },
      { label: "About", href: "/en/about" },
      { label: "Contact", href: "/en/contact" },
    ],
    ctaLabel: "Get in touch",
    ctaHref: "/en/contact",
  },
};

const languages = [
  { code: "nl", label: "NL", href: "/nl" },
  { code: "de", label: "DE", href: "/de" },
  { code: "en", label: "EN", href: "/en" },
];

function getLocaleFromPath(pathname: string): string {
  const match = pathname.match(/^\/(nl|de|en)/);
  return match ? match[1] : "nl";
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const config = navConfigs[locale] || navConfigs.nl;
  const navItems = config.items;

  // Close dropdown on route change
  useEffect(() => {
    setDesktopDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDesktopDropdown(null), 150);
  };

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-secondary py-1.5 text-center">
        <p className="text-xs font-medium tracking-wide text-secondary-foreground">
          {locale === "de" ? (
            <>✦ Einmal suchen, danach selbst besetzen, <Link to="/de/fuer-arbeitgeber" className="underline hover:text-accent transition-colors">erfahren Sie wie</Link></>
          ) : locale === "en" ? (
            <>✦ Search once, hire yourself from then on, <Link to="/en/for-employers" className="underline hover:text-accent transition-colors">discover how</Link></>
          ) : (
            <>✦ Eenmalig zoeken, voortaan zelf invullen, <Link to="/nl/opdrachtgevers" className="underline hover:text-accent transition-colors">ontdek hoe</Link></>
          )}
        </p>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link to={`/${locale}`} className="flex items-center gap-3">
            <img src={logo} alt="OneTime Recruit" className="h-11 w-11" />
            <span className="text-lg font-bold tracking-tight text-foreground font-sans">
              ONE-TIME <span className="font-normal">Recruit</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={item.children ? handleMouseLeave : undefined}
                ref={desktopDropdown === item.label ? dropdownRef : undefined}
              >
                <Link
                  to={item.href}
                  className={`inline-flex items-center gap-1 px-4 py-2 text-[14px] font-medium transition-colors hover:text-foreground ${
                    location.pathname === item.href || (item.children && location.pathname.startsWith(item.href.replace("/diensten", "")))
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className={`h-3.5 w-3.5 transition-transform ${desktopDropdown === item.label ? "rotate-180" : ""}`} />}
                </Link>

                {/* Dropdown */}
                {item.children && desktopDropdown === item.label && (
                  <div className="absolute left-1/2 top-full z-50 w-[520px] -translate-x-1/2 pt-2">
                    <div className="rounded-xl border border-border bg-background p-3 shadow-xl">
                      <div className="grid grid-cols-2 gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-muted"
                          >
                            {child.image && (
                              <div className="h-10 w-14 shrink-0 overflow-hidden rounded-md">
                                <img src={child.image} alt="" className="h-full w-full object-cover" />
                              </div>
                            )}
                            <div>
                              <span className="block text-sm font-semibold text-foreground">{child.label}</span>
                              {child.description && (
                                <span className="mt-0.5 block text-xs text-muted-foreground">{child.description}</span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-0.5 rounded-full border border-border px-1 py-0.5 md:flex">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  to={lang.href}
                  className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                    location.pathname.startsWith(`/${lang.code}`)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang.label}
                </Link>
              ))}
            </div>

            <Button asChild className="hidden rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90 md:inline-flex">
              <Link to={config.ctaHref}>{config.ctaLabel}</Link>
            </Button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="container flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                          location.pathname.startsWith("/nl/diensten") || location.pathname.startsWith("/nl/executive")
                            ? "bg-accent/10 text-accent"
                            : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l border-border pl-4">
                          <Link
                            to={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
                          >
                            Alles bekijken
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => setMobileOpen(false)}
                              className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                                location.pathname === child.href ? "font-medium text-accent" : "text-muted-foreground hover:bg-muted"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        location.pathname === item.href
                          ? "bg-accent/10 text-accent"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-3 flex items-center gap-2 border-t border-border pt-4">
                <Globe className="h-4 w-4 text-muted-foreground" />
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    to={lang.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                      location.pathname.startsWith(`/${lang.code}`)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {lang.label}
                  </Link>
                ))}
              </div>
              <Button asChild className="mt-3 rounded-full bg-primary text-primary-foreground">
                <Link to={config.ctaHref} onClick={() => setMobileOpen(false)}>
                  {config.ctaLabel}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
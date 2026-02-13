import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/nl" },
  { label: "Diensten", href: "/nl/diensten" },
  { label: "Vacatures", href: "/nl/vacatures" },
  { label: "Opdrachtgevers", href: "/nl/opdrachtgevers" },
  { label: "Over ons", href: "/nl/over-ons" },
  { label: "Contact", href: "/nl/contact" },
];

const languages = [
  { code: "nl", label: "NL", href: "/nl" },
  { code: "de", label: "DE", href: "/de" },
  { code: "en", label: "EN", href: "/en" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/nl" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">O</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            ONE-TIME <span className="font-normal">Recruit</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === item.href
                  ? "text-accent"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="hidden items-center gap-1 rounded-full border border-border px-1 py-0.5 md:flex">
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

          <Button asChild className="hidden bg-accent text-accent-foreground hover:bg-accent/90 md:inline-flex">
            <Link to="/nl/contact">Plan een gesprek</Link>
          </Button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "bg-secondary text-accent"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
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
            <Button asChild className="mt-2 bg-accent text-accent-foreground">
              <Link to="/nl/contact" onClick={() => setMobileOpen(false)}>
                Plan een gesprek
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
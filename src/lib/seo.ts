/**
 * SEO utilities for multilingual hreflang alternates and breadcrumb generation.
 */

interface HreflangAlternate {
  lang: string;
  path: string;
}

/**
 * Page mapping for hreflang alternates.
 * Maps NL page keys to their equivalents in DE and EN.
 * Add entries here as new language pages are created.
 */
const pageAlternatesMap: Record<string, Record<string, string>> = {
  home: { nl: "/nl", de: "/de", en: "/en" },
  diensten: { nl: "/nl/diensten", de: "/de/leistungen", en: "/en/services" },
  contact: { nl: "/nl/contact", de: "/de/kontakt", en: "/en/contact" },
  "over-ons": { nl: "/nl/over-ons", de: "/de/ueber-uns", en: "/en/about" },
  vacatures: { nl: "/nl/vacatures", de: "/de/stellenangebote", en: "/en/jobs" },
  opdrachtgevers: { nl: "/nl/opdrachtgevers", de: "/de/fuer-arbeitgeber", en: "/en/for-employers" },
  "executive-search": { nl: "/nl/executive-search", de: "/de/executive-search", en: "/en/executive-search" },
};

/**
 * Get hreflang alternates for a given page key.
 * Only returns alternates for languages that have actual pages.
 */
export function getAlternates(pageKey: string, availableLanguages: string[] = ["nl"]): HreflangAlternate[] {
  const map = pageAlternatesMap[pageKey];
  if (!map) return [];

  return availableLanguages
    .filter((lang) => map[lang])
    .map((lang) => ({ lang, path: map[lang] }));
}

/**
 * Get the current locale string for og:locale based on language prefix.
 */
export function getLocale(lang: string): string {
  const locales: Record<string, string> = {
    nl: "nl_NL",
    de: "de_DE",
    en: "en_US",
  };
  return locales[lang] || "nl_NL";
}

/**
 * Breadcrumb helpers per NL page.
 */
export const nlBreadcrumbs = {
  home: [{ label: "Home" }],
  diensten: [
    { label: "Home", href: "/nl" },
    { label: "Diensten" },
  ],
  contact: [
    { label: "Home", href: "/nl" },
    { label: "Contact" },
  ],
  "over-ons": [
    { label: "Home", href: "/nl" },
    { label: "Over ons" },
  ],
  vacatures: [
    { label: "Home", href: "/nl" },
    { label: "Vacatures" },
  ],
  opdrachtgevers: [
    { label: "Home", href: "/nl" },
    { label: "Opdrachtgevers" },
  ],
  "executive-search": [
    { label: "Home", href: "/nl" },
    { label: "Diensten", href: "/nl/diensten" },
    { label: "Executive Search" },
  ],
};

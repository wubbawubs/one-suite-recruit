import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface HreflangAlternate {
  lang: string;
  path: string;
}

interface PageMetaProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
  canonical?: string;
  /** Current page locale for og:locale, defaults to "nl_NL" */
  locale?: string;
  /** Hreflang alternates for multilingual SEO */
  alternates?: HreflangAlternate[];
}

const BASE_URL = "https://onetimerecruit.nl";
const DEFAULT_OG_IMAGE = "https://lovable.dev/opengraph-image-p98pqg.png";

/** Maps lang codes to og:locale format */
const localeMap: Record<string, string> = {
  nl: "nl_NL",
  de: "de_DE",
  en: "en_US",
};

export const PageMeta = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  jsonLd,
  canonical,
  locale = "nl_NL",
  alternates,
}: PageMetaProps) => {
  const { pathname } = useLocation();
  const fullCanonical = canonical || `${BASE_URL}${pathname}`;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const finalOgImage = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard meta
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", finalOgTitle);
    setMeta("property", "og:description", finalOgDescription);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", finalOgImage);
    setMeta("property", "og:url", fullCanonical);
    setMeta("property", "og:site_name", "OneTime Recruit");
    setMeta("property", "og:locale", locale);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", finalOgTitle);
    setMeta("name", "twitter:description", finalOgDescription);
    setMeta("name", "twitter:image", finalOgImage);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fullCanonical);

    // Hreflang alternate links
    // Remove existing hreflang links first
    document.querySelectorAll('link[data-hreflang]').forEach((el) => el.remove());

    if (alternates && alternates.length > 0) {
      alternates.forEach(({ lang, path }) => {
        const hrefLink = document.createElement("link");
        hrefLink.setAttribute("rel", "alternate");
        hrefLink.setAttribute("hreflang", lang);
        hrefLink.setAttribute("href", `${BASE_URL}${path}`);
        hrefLink.setAttribute("data-hreflang", "true");
        document.head.appendChild(hrefLink);
      });

      // Add x-default (points to NL as primary)
      const defaultAlt = alternates.find((a) => a.lang === "nl") || alternates[0];
      if (defaultAlt) {
        const xDefault = document.createElement("link");
        xDefault.setAttribute("rel", "alternate");
        xDefault.setAttribute("hreflang", "x-default");
        xDefault.setAttribute("href", `${BASE_URL}${defaultAlt.path}`);
        xDefault.setAttribute("data-hreflang", "true");
        document.head.appendChild(xDefault);
      }
    }

    // JSON-LD
    const scriptId = "page-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }

    return () => {
      // Cleanup JSON-LD and hreflang on unmount
      const s = document.getElementById(scriptId);
      if (s) s.remove();
      document.querySelectorAll('link[data-hreflang]').forEach((el) => el.remove());
    };
  }, [title, description, finalOgTitle, finalOgDescription, finalOgImage, ogType, fullCanonical, locale, alternates, jsonLd]);

  return null;
};

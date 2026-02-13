import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageMetaProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
  canonical?: string;
}

const BASE_URL = "https://onetimerecruit.nl";
const DEFAULT_OG_IMAGE = "https://lovable.dev/opengraph-image-p98pqg.png";

export const PageMeta = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  jsonLd,
  canonical,
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
    setMeta("property", "og:locale", "nl_NL");

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
      // Cleanup JSON-LD on unmount
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [title, description, finalOgTitle, finalOgDescription, finalOgImage, ogType, fullCanonical, jsonLd]);

  return null;
};

/**
 * Index-Ready Scorecard — v4 SEO Governance
 *
 * Every URL gets a score out of 100. Only pages scoring ≥80 are indexed.
 * Below 80 → noindex (still live, still internally linked, but hidden from Google).
 *
 * Categories:
 *   A. Unique Value       (40 pts) — proof, insights, unique examples
 *   B. Intent & Depth     (25 pts) — word count, intent match, SERP parity
 *   C. Internal Linking   (20 pts) — hub links, siblings, upward links
 *   D. Technical SEO      (15 pts) — canonical, schema, crawlability
 */

import type { SpokePageData } from "@/components/layout/SpokePage";

// ─── SCORE BREAKDOWN ───

export interface ScoreBreakdown {
  /** Total score 0-100 */
  total: number;
  /** Whether the page meets the index-ready threshold (≥80) */
  indexReady: boolean;
  /** Category scores */
  categories: {
    uniqueValue: { score: number; max: 40; details: string[] };
    intentDepth: { score: number; max: 25; details: string[] };
    internalLinking: { score: number; max: 20; details: string[] };
    technicalSeo: { score: number; max: 15; details: string[] };
  };
}

const INDEX_READY_THRESHOLD = 80;

/**
 * Calculate the Index-Ready Scorecard for a SpokePageData page.
 */
export function calculateScore(data: SpokePageData): ScoreBreakdown {
  const uniqueValue = scoreUniqueValue(data);
  const intentDepth = scoreIntentDepth(data);
  const internalLinking = scoreInternalLinking(data);
  const technicalSeo = scoreTechnicalSeo(data);

  const total = uniqueValue.score + intentDepth.score + internalLinking.score + technicalSeo.score;

  return {
    total,
    indexReady: total >= INDEX_READY_THRESHOLD && !data.noindex,
    categories: {
      uniqueValue: { ...uniqueValue, max: 40 },
      intentDepth: { ...intentDepth, max: 25 },
      internalLinking: { ...internalLinking, max: 20 },
      technicalSeo: { ...technicalSeo, max: 15 },
    },
  };
}

// ─── A. UNIQUE VALUE (40 pts) ───

function scoreUniqueValue(data: SpokePageData): { score: number; details: string[] } {
  let score = 0;
  const details: string[] = [];

  // (15) Proof module — evidence items present
  if (data.evidence && data.evidence.length > 0) {
    const proofScore = Math.min(15, data.evidence.length * 5);
    score += proofScore;
    details.push(`✓ Proof module: ${data.evidence.length} evidence items (${proofScore}/15)`);
  } else {
    details.push("✗ Geen proof/evidence module gevonden (0/15)");
  }

  // (15) Unique insights — sections with substantial unique content
  const insightSections = data.sections.filter(s => {
    const words = s.content.split(/\s+/).length;
    return words >= 40 && s.items && s.items.length >= 2;
  });
  const insightScore = Math.min(15, insightSections.length * 5);
  score += insightScore;
  if (insightScore >= 10) {
    details.push(`✓ ${insightSections.length} secties met unieke inzichten (${insightScore}/15)`);
  } else {
    details.push(`△ Slechts ${insightSections.length} secties met voldoende diepgang (${insightScore}/15)`);
  }

  // (10) Unique examples — sections with items/lists showing concrete examples
  const exampleItems = data.sections.reduce((sum, s) => sum + (s.items?.length || 0), 0);
  const exampleScore = Math.min(10, Math.floor(exampleItems / 2) * 2);
  score += exampleScore;
  details.push(`${exampleScore >= 6 ? "✓" : "△"} ${exampleItems} concrete voorbeelden/items (${exampleScore}/10)`);

  return { score, details };
}

// ─── B. INTENT & DEPTH (25 pts) ───

function scoreIntentDepth(data: SpokePageData): { score: number; details: string[] } {
  let score = 0;
  const details: string[] = [];

  // (10) Word count across all sections
  const totalWords = data.sections.reduce((sum, s) => {
    return sum + s.content.split(/\s+/).length + (s.items?.join(" ").split(/\s+/).length || 0);
  }, 0);

  if (totalWords >= 800) {
    score += 10;
    details.push(`✓ ${totalWords} woorden content (10/10)`);
  } else if (totalWords >= 400) {
    score += 6;
    details.push(`△ ${totalWords} woorden — streef naar 800+ (6/10)`);
  } else if (totalWords >= 200) {
    score += 3;
    details.push(`✗ ${totalWords} woorden — te mager voor indexatie (3/10)`);
  } else {
    details.push(`✗ ${totalWords} woorden — thin content (0/10)`);
  }

  // (10) Intent match — has hero description, clear sections, CTA
  let intentScore = 0;
  if (data.heroDescription && data.heroDescription.length > 30) intentScore += 3;
  if (data.sections.length >= 3) intentScore += 4;
  if (data.ctaTitle) intentScore += 3;
  score += intentScore;
  details.push(`${intentScore >= 7 ? "✓" : "△"} Intent match: hero + secties + CTA (${intentScore}/10)`);

  // (5) SERP parity — has FAQ section (matches competitor structure)
  if (data.faqs.length >= 6) {
    score += 5;
    details.push("✓ 6+ FAQs — SERP-parity met concurrenten (5/5)");
  } else if (data.faqs.length >= 3) {
    score += 3;
    details.push(`△ ${data.faqs.length} FAQs — streef naar 6+ (3/5)`);
  } else {
    details.push(`✗ ${data.faqs.length} FAQs — te weinig voor SERP-competitie (0/5)`);
  }

  return { score, details };
}

// ─── C. INTERNAL LINKING (20 pts) ───

function scoreInternalLinking(data: SpokePageData): { score: number; details: string[] } {
  let score = 0;
  const details: string[] = [];

  // (10) Hub link — pillar link present
  if (data.pillarLink && data.pillarLink.href) {
    score += 10;
    details.push("✓ Hub/pillar link aanwezig (10/10)");
  } else {
    details.push("✗ Geen hub/pillar link (0/10)");
  }

  // (5) Sibling links (related pages in same cluster)
  const siblingCount = data.relatedLinks.length;
  if (siblingCount >= 5) {
    score += 5;
    details.push(`✓ ${siblingCount} gerelateerde links (5/5)`);
  } else if (siblingCount >= 3) {
    score += 3;
    details.push(`△ ${siblingCount} gerelateerde links — streef naar 5+ (3/5)`);
  } else {
    details.push(`✗ ${siblingCount} gerelateerde links — te weinig (0/5)`);
  }

  // (5) In-body contextual links (markdown links in section content)
  const inBodyLinks = data.sections.reduce((sum, s) => {
    const linkMatches = s.content.match(/\[[^\]]+\]\([^)]+\)/g);
    const itemLinks = s.items?.reduce((iSum, item) => {
      const m = item.match(/\[[^\]]+\]\([^)]+\)/g);
      return iSum + (m?.length || 0);
    }, 0) || 0;
    return sum + (linkMatches?.length || 0) + itemLinks;
  }, 0);

  if (inBodyLinks >= 5) {
    score += 5;
    details.push(`✓ ${inBodyLinks} in-body contextlinks (5/5)`);
  } else if (inBodyLinks >= 2) {
    score += 3;
    details.push(`△ ${inBodyLinks} in-body contextlinks — streef naar 5+ (3/5)`);
  } else {
    details.push(`✗ ${inBodyLinks} in-body contextlinks (0/5)`);
  }

  return { score, details };
}

// ─── D. TECHNICAL SEO (15 pts) ───

function scoreTechnicalSeo(data: SpokePageData): { score: number; details: string[] } {
  let score = 0;
  const details: string[] = [];

  // (5) Canonical — meta title and description present and within limits
  const titleOk = data.metaTitle.length > 10 && data.metaTitle.length <= 60;
  const descOk = data.metaDescription.length > 30 && data.metaDescription.length <= 160;
  if (titleOk && descOk) {
    score += 5;
    details.push("✓ Title + description binnen limieten (5/5)");
  } else {
    const issues: string[] = [];
    if (!titleOk) issues.push(`title ${data.metaTitle.length} chars`);
    if (!descOk) issues.push(`description ${data.metaDescription.length} chars`);
    score += 2;
    details.push(`△ Meta issues: ${issues.join(", ")} (2/5)`);
  }

  // (5) Schema — FAQPage JSON-LD (checked via faqs presence + breadcrumbs)
  if (data.faqs.length >= 3 && data.breadcrumbs.length >= 2) {
    score += 5;
    details.push("✓ FAQPage schema + breadcrumbs aanwezig (5/5)");
  } else {
    const schemaScore = (data.faqs.length >= 3 ? 3 : 0) + (data.breadcrumbs.length >= 2 ? 2 : 0);
    score += schemaScore;
    details.push(`△ Schema incompleet (${schemaScore}/5)`);
  }

  // (5) Crawlability — not forced noindex, has breadcrumbs for navigation
  if (!data.noindex && data.breadcrumbs.length >= 3) {
    score += 5;
    details.push("✓ Crawlbaar: breadcrumbs + geen forced noindex (5/5)");
  } else if (data.noindex) {
    details.push("✗ Forced noindex door data flag (0/5)");
  } else {
    score += 3;
    details.push("△ Breadcrumbs te kort voor goede crawlability (3/5)");
  }

  return { score, details };
}

// ─── PAGE STATUS ───

export type PageStatus =
  | "draft"          // Not public
  | "live-noindex"   // Browsable, not for Google
  | "index-ready"    // In sitemap + indexable
  | "canonicalized"  // Exists but points to another URL
  | "retired";       // 301 or removed

export function getPageStatus(data: SpokePageData): PageStatus {
  if (data.noindex) return "live-noindex";
  const { indexReady } = calculateScore(data);
  return indexReady ? "index-ready" : "live-noindex";
}

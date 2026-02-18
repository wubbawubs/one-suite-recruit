/**
 * Index-Ready Scorecard — v5 SEO Governance
 *
 * Proof & differentiation-based scoring (not word-counting).
 * 8 categories × 100 pts total. Thresholds vary by page type.
 *
 * Categories:
 *   1. Unique intro + intent match      (10 pts)
 *   2. Proof / "Waarom wij"             (10 pts)
 *   3. Evidence module (unique per slug) (20 pts)
 *   4. FAQ quality                       (10 pts)
 *   5. Internal links (out + in-body)    (10 pts)
 *   6. SERP-fit module                   (10 pts)
 *   7. Structured data                   (10 pts)
 *   8. Content depth & differentiation   (20 pts)
 */

import type { SpokePageData, SpokePageType } from "@/components/layout/SpokePage";

// ─── THRESHOLDS PER PAGE TYPE ───

const INDEX_THRESHOLDS: Record<SpokePageType, number> = {
  pillar: 90,
  hub: 85,
  spoke: 80,
  functie: 80,
  industry: 80,
  cross: 85,
};

// ─── SCORE BREAKDOWN ───

export interface CategoryScore {
  score: number;
  max: number;
  details: string[];
}

export interface ScoreBreakdown {
  total: number;
  indexReady: boolean;
  threshold: number;
  pageType: SpokePageType;
  categories: {
    uniqueIntro: CategoryScore;
    proofClaims: CategoryScore;
    evidence: CategoryScore;
    faqQuality: CategoryScore;
    internalLinks: CategoryScore;
    serpFit: CategoryScore;
    structuredData: CategoryScore;
    contentDepth: CategoryScore;
  };
}

export function calculateScore(data: SpokePageData): ScoreBreakdown {
  const pageType = data.pageType || "spoke";
  const threshold = INDEX_THRESHOLDS[pageType];

  const uniqueIntro = scoreUniqueIntro(data);
  const proofClaims = scoreProofClaims(data);
  const evidence = scoreEvidence(data);
  const faqQuality = scoreFaqQuality(data);
  const internalLinks = scoreInternalLinks(data);
  const serpFit = scoreSerpFit(data);
  const structuredData = scoreStructuredData(data);
  const contentDepth = scoreContentDepth(data);

  const total =
    uniqueIntro.score + proofClaims.score + evidence.score +
    faqQuality.score + internalLinks.score + serpFit.score +
    structuredData.score + contentDepth.score;

  return {
    total,
    indexReady: total >= threshold && !data.noindex,
    threshold,
    pageType,
    categories: {
      uniqueIntro,
      proofClaims,
      evidence,
      faqQuality,
      internalLinks,
      serpFit,
      structuredData,
      contentDepth,
    },
  };
}

// ─── 1. UNIQUE INTRO + INTENT MATCH (10 pts) ───

function scoreUniqueIntro(data: SpokePageData): CategoryScore {
  let score = 0;
  const details: string[] = [];
  const max = 10;

  // Hero description length & quality (5 pts)
  const descLen = data.heroDescription?.length || 0;
  if (descLen >= 120) {
    score += 5;
    details.push(`✓ Hero intro ${descLen} chars — specifiek en uitgebreid (5/5)`);
  } else if (descLen >= 60) {
    score += 3;
    details.push(`△ Hero intro ${descLen} chars — streef naar 120+ (3/5)`);
  } else {
    details.push(`✗ Hero intro te kort: ${descLen} chars (0/5)`);
  }

  // Clear section structure matching intent (5 pts)
  const hasClearStructure = data.sections.length >= 3 && data.heroTitle.length > 10;
  if (hasClearStructure && data.ctaTitle) {
    score += 5;
    details.push("✓ Duidelijke structuur: hero + secties + CTA (5/5)");
  } else if (hasClearStructure) {
    score += 3;
    details.push("△ Structuur OK maar CTA-titel ontbreekt (3/5)");
  } else {
    details.push("✗ Onvoldoende structuur voor intent match (0/5)");
  }

  return { score, max, details };
}

// ─── 2. PROOF / "WAAROM WIJ" (10 pts) ───

function scoreProofClaims(data: SpokePageData): CategoryScore {
  let score = 0;
  const details: string[] = [];
  const max = 10;

  // Sections with substantial unique content (items + text)
  const proofSections = data.sections.filter(s => {
    const words = s.content.split(/\s+/).length;
    return words >= 40 && (s.items?.length || 0) >= 2;
  });

  if (proofSections.length >= 3) {
    score += 7;
    details.push(`✓ ${proofSections.length} secties met unieke claims/bewijs (7/7)`);
  } else if (proofSections.length >= 2) {
    score += 5;
    details.push(`△ ${proofSections.length} secties met claims — streef naar 3+ (5/7)`);
  } else {
    score += 2;
    details.push(`✗ Slechts ${proofSections.length} sectie(s) met voldoende bewijs (2/7)`);
  }

  // Role snapshot or hiring signals present (3 pts bonus for functie pages)
  if (data.roleSnapshot || data.hiringSignals) {
    score += 3;
    details.push("✓ Rol-specifiek bewijs (snapshot/signals) aanwezig (3/3)");
  } else if (data.pageType === "functie") {
    details.push("✗ Geen Role Snapshot of Hiring Signals — cruciaal voor functiepagina's (0/3)");
  } else {
    score += 3; // Non-functie pages get these points automatically
    details.push("✓ N.v.t. voor dit paginatype (3/3)");
  }

  return { score, max, details };
}

// ─── 3. EVIDENCE MODULE (20 pts) ───

function scoreEvidence(data: SpokePageData): CategoryScore {
  let score = 0;
  const details: string[] = [];
  const max = 20;

  if (!data.evidence || data.evidence.length === 0) {
    details.push("✗ Geen evidence module — cruciaal voor indexatie (0/20)");
    return { score, max, details };
  }

  const count = data.evidence.length;

  // Quantity (10 pts)
  if (count >= 3) {
    score += 10;
    details.push(`✓ ${count} evidence items — sterk bewijs (10/10)`);
  } else if (count >= 2) {
    score += 6;
    details.push(`△ ${count} evidence items — streef naar 3+ (6/10)`);
  } else {
    score += 3;
    details.push(`△ ${count} evidence item — minimaal (3/10)`);
  }

  // Quality — has values/metrics (5 pts)
  const withValues = data.evidence.filter(e => e.value).length;
  if (withValues >= 2) {
    score += 5;
    details.push(`✓ ${withValues} items met concrete metrics (5/5)`);
  } else if (withValues >= 1) {
    score += 3;
    details.push(`△ ${withValues} item met metric — voeg meer toe (3/5)`);
  } else {
    details.push("✗ Geen items met concrete metrics/cijfers (0/5)");
  }

  // Variety — different icon types (5 pts)
  const iconTypes = new Set(data.evidence.map(e => e.icon || "insight"));
  if (iconTypes.size >= 3) {
    score += 5;
    details.push("✓ Diverse evidence types (case + benchmark + insight) (5/5)");
  } else if (iconTypes.size >= 2) {
    score += 3;
    details.push(`△ ${iconTypes.size} evidence types — voeg variatie toe (3/5)`);
  } else {
    score += 1;
    details.push("✗ Slechts 1 type evidence — te eenzijdig (1/5)");
  }

  return { score, max, details };
}

// ─── 4. FAQ QUALITY (10 pts) ───

function scoreFaqQuality(data: SpokePageData): CategoryScore {
  let score = 0;
  const details: string[] = [];
  const max = 10;

  const faqCount = data.faqs.length;

  // Quantity (5 pts)
  if (faqCount >= 8) {
    score += 5;
    details.push(`✓ ${faqCount} FAQs — uitgebreid (5/5)`);
  } else if (faqCount >= 6) {
    score += 4;
    details.push(`✓ ${faqCount} FAQs — SERP-parity (4/5)`);
  } else if (faqCount >= 3) {
    score += 2;
    details.push(`△ ${faqCount} FAQs — streef naar 6+ (2/5)`);
  } else {
    details.push(`✗ ${faqCount} FAQs — te weinig (0/5)`);
  }

  // Answer depth (5 pts) — average answer length
  if (faqCount > 0) {
    const avgLen = data.faqs.reduce((sum, f) => sum + f.a.length, 0) / faqCount;
    if (avgLen >= 120) {
      score += 5;
      details.push(`✓ Gemiddeld ${Math.round(avgLen)} chars per antwoord — diepgaand (5/5)`);
    } else if (avgLen >= 60) {
      score += 3;
      details.push(`△ Gemiddeld ${Math.round(avgLen)} chars — maak antwoorden uitgebreider (3/5)`);
    } else {
      score += 1;
      details.push(`✗ Gemiddeld ${Math.round(avgLen)} chars — te kort voor SERP (1/5)`);
    }
  } else {
    details.push("✗ Geen FAQs — geen antwoorddiepte te meten (0/5)");
  }

  return { score, max, details };
}

// ─── 5. INTERNAL LINKS (10 pts) ───

function scoreInternalLinks(data: SpokePageData): CategoryScore {
  let score = 0;
  const details: string[] = [];
  const max = 10;

  // Outgoing structured links: pillar + related (4 pts)
  const outgoing = (data.pillarLink?.href ? 1 : 0) + data.relatedLinks.length;
  if (outgoing >= 8) {
    score += 4;
    details.push(`✓ ${outgoing} uitgaande gestructureerde links (4/4)`);
  } else if (outgoing >= 5) {
    score += 3;
    details.push(`△ ${outgoing} uitgaande links — streef naar 8+ (3/4)`);
  } else {
    score += 1;
    details.push(`✗ ${outgoing} uitgaande links — te weinig (1/4)`);
  }

  // In-body contextual links (6 pts)
  const inBodyLinks = data.sections.reduce((sum, s) => {
    const linkMatches = s.content.match(/\[[^\]]+\]\([^)]+\)/g);
    const itemLinks = s.items?.reduce((iSum, item) => {
      const m = item.match(/\[[^\]]+\]\([^)]+\)/g);
      return iSum + (m?.length || 0);
    }, 0) || 0;
    return sum + (linkMatches?.length || 0) + itemLinks;
  }, 0);

  if (inBodyLinks >= 8) {
    score += 6;
    details.push(`✓ ${inBodyLinks} in-body contextlinks — uitstekend (6/6)`);
  } else if (inBodyLinks >= 5) {
    score += 4;
    details.push(`△ ${inBodyLinks} in-body contextlinks — streef naar 8+ (4/6)`);
  } else if (inBodyLinks >= 2) {
    score += 2;
    details.push(`✗ ${inBodyLinks} in-body contextlinks — te weinig (2/6)`);
  } else {
    details.push(`✗ ${inBodyLinks} in-body contextlinks — vrijwel geen (0/6)`);
  }

  return { score, max, details };
}

// ─── 6. SERP-FIT MODULE (10 pts) ───

function scoreSerpFit(data: SpokePageData): CategoryScore {
  let score = 0;
  const details: string[] = [];
  const max = 10;

  if (!data.serpFit) {
    details.push("✗ Geen SERP-fit module — mist kans op #1 + featured snippets (0/10)");
    return { score, max, details };
  }

  // Intent bullets (4 pts)
  const bullets = data.serpFit.intentBullets?.length || 0;
  if (bullets >= 3) {
    score += 4;
    details.push(`✓ ${bullets} intent bullets — goede SERP-dekking (4/4)`);
  } else if (bullets >= 1) {
    score += 2;
    details.push(`△ ${bullets} intent bullets — voeg meer toe (2/4)`);
  } else {
    details.push("✗ Geen intent bullets (0/4)");
  }

  // Comparison (3 pts)
  const compPoints = data.serpFit.comparison?.length || 0;
  if (compPoints >= 3) {
    score += 3;
    details.push(`✓ ${compPoints} vergelijkingspunten — differentiërend (3/3)`);
  } else if (compPoints >= 1) {
    score += 1;
    details.push(`△ ${compPoints} vergelijkingspunten — breid uit (1/3)`);
  } else {
    details.push("✗ Geen vergelijkingsmodule (0/3)");
  }

  // Checklist (3 pts)
  const checkItems = data.serpFit.checklist?.length || 0;
  if (checkItems >= 5) {
    score += 3;
    details.push(`✓ ${checkItems} checklist-items — featured snippet kans (3/3)`);
  } else if (checkItems >= 3) {
    score += 2;
    details.push(`△ ${checkItems} checklist-items (2/3)`);
  } else {
    details.push("✗ Geen/te weinig checklist-items (0/3)");
  }

  return { score, max, details };
}

// ─── 7. STRUCTURED DATA (10 pts) ───

function scoreStructuredData(data: SpokePageData): CategoryScore {
  let score = 0;
  const details: string[] = [];
  const max = 10;

  // Meta title + description (4 pts)
  const titleOk = data.metaTitle.length > 10 && data.metaTitle.length <= 60;
  const descOk = data.metaDescription.length > 30 && data.metaDescription.length <= 160;
  if (titleOk && descOk) {
    score += 4;
    details.push("✓ Title + description binnen limieten (4/4)");
  } else {
    const issues: string[] = [];
    if (!titleOk) issues.push(`title ${data.metaTitle.length} chars`);
    if (!descOk) issues.push(`description ${data.metaDescription.length} chars`);
    score += 2;
    details.push(`△ Meta issues: ${issues.join(", ")} (2/4)`);
  }

  // FAQPage JSON-LD (3 pts)
  if (data.faqs.length >= 3) {
    score += 3;
    details.push("✓ FAQPage schema mogelijk (3/3)");
  } else {
    details.push(`✗ Te weinig FAQs voor schema (${data.faqs.length}) (0/3)`);
  }

  // Breadcrumbs (3 pts)
  if (data.breadcrumbs.length >= 3) {
    score += 3;
    details.push("✓ Breadcrumbs ≥3 niveaus — goede navigatie (3/3)");
  } else if (data.breadcrumbs.length >= 2) {
    score += 2;
    details.push("△ Breadcrumbs kort — voeg niveaus toe (2/3)");
  } else {
    details.push("✗ Onvoldoende breadcrumbs (0/3)");
  }

  return { score, max, details };
}

// ─── 8. CONTENT DEPTH & DIFFERENTIATION (20 pts) ───

function scoreContentDepth(data: SpokePageData): CategoryScore {
  let score = 0;
  const details: string[] = [];
  const max = 20;

  // Total word count (8 pts)
  const totalWords = data.sections.reduce((sum, s) => {
    return sum + s.content.split(/\s+/).length + (s.items?.join(" ").split(/\s+/).length || 0);
  }, 0);

  if (totalWords >= 800) {
    score += 8;
    details.push(`✓ ${totalWords} woorden — voldoende diepgang (8/8)`);
  } else if (totalWords >= 500) {
    score += 5;
    details.push(`△ ${totalWords} woorden — streef naar 800+ (5/8)`);
  } else if (totalWords >= 250) {
    score += 3;
    details.push(`✗ ${totalWords} woorden — te mager (3/8)`);
  } else {
    details.push(`✗ ${totalWords} woorden — thin content (0/8)`);
  }

  // Concrete examples/items (6 pts)
  const exampleItems = data.sections.reduce((sum, s) => sum + (s.items?.length || 0), 0);
  if (exampleItems >= 12) {
    score += 6;
    details.push(`✓ ${exampleItems} concrete items/voorbeelden (6/6)`);
  } else if (exampleItems >= 8) {
    score += 4;
    details.push(`△ ${exampleItems} items — streef naar 12+ (4/6)`);
  } else if (exampleItems >= 4) {
    score += 2;
    details.push(`✗ ${exampleItems} items — te weinig differentiatie (2/6)`);
  } else {
    details.push(`✗ ${exampleItems} items — nauwelijks concrete voorbeelden (0/6)`);
  }

  // Section count & variety (6 pts)
  if (data.sections.length >= 5) {
    score += 6;
    details.push(`✓ ${data.sections.length} secties — uitgebreide pagina (6/6)`);
  } else if (data.sections.length >= 3) {
    score += 4;
    details.push(`△ ${data.sections.length} secties — voeg meer toe (4/6)`);
  } else {
    score += 1;
    details.push(`✗ ${data.sections.length} secties — te weinig diepgang (1/6)`);
  }

  return { score, max, details };
}

// ─── PAGE STATUS ───

export type PageStatus =
  | "draft"
  | "live-noindex"
  | "index-ready"
  | "canonicalized"
  | "retired";

export function getPageStatus(data: SpokePageData): PageStatus {
  if (data.noindex) return "live-noindex";
  const { indexReady } = calculateScore(data);
  return indexReady ? "index-ready" : "live-noindex";
}

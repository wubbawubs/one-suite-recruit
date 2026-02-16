

# Upgrade OTR to Activate, Not Just Inform

## The Core Problem

The current OTR site **describes** what you do but doesn't **challenge** the visitor or create urgency. Every section follows the same pattern: label, title, description, cards. It reads like a brochure. OneRooted works because it:

1. **Opens with confrontation** -- names the problem before the solution
2. **Draws a clear line** -- old way vs. new way (comparison)
3. **Segments the audience** -- "this is for you if..."
4. **Stacks CTAs** -- not just one at the bottom, but throughout the page

## What Changes (All 3 Languages: NL, EN, DE)

### 1. Homepage Hero -- From Feature to Confrontation

**Current:** "Het abonnement voor onbeperkt toegang tot talent" (descriptive, product-focused)

**New approach:** Lead with the pain, then reveal the solution.

- Tagline badge: "De nieuwe standaard in executive recruitment"
- Headline: "Uw volgende leider zit niet op een jobboard" (NL) / "Your next leader isn't on a job board" (EN) / "Ihre nachste Fuhrungskraft ist nicht auf einem Jobportal" (DE)
- Subline: Short, punchy line about why traditional search is slow, expensive, and opaque
- Keep the two CTA buttons but make copy sharper

### 2. New Section: "The Problem" (After TrustBar, Before Services)

A new confrontation section (like OneRooted's "Hiring isn't broken. Your tools are.") with three pain-point cards:

- **Traditional search firms:** 12+ weeks, retainer fees, no transparency
- **Internal HR:** Lacks network for senior/C-level, no time
- **Job boards:** Wrong audience for executive talent

Closing line: "Er is een betere manier." / "There's a better way." leading into Services.

**New component:** `src/components/sections/ProblemSection.tsx`

### 3. Services Section -- Add "The OTR Way" Comparison

After the 3 service cards, add a compact comparison strip:

| | Traditional | OneTime |
|---|---|---|
| Doorlooptijd | 8-12 weken | 18 dagen |
| Kosten | 25-30% jaarsalaris | Vaste prijs |
| Garantie | Geen of beperkt | 6 maanden |
| Transparantie | Black box | Realtime updates |

**New component:** `src/components/sections/ComparisonSection.tsx`

### 4. Homepage WhySection -- Sharper Copy

Rewrite the 5 differentiators from philosophical ("Exclusief netwerk") to benefit-driven and confrontational:
- "Exclusief netwerk" becomes "Kandidaten die u nergens anders vindt"
- "Bewezen assessmentmethode" becomes "Geen onderbuikgevoel, maar data"
- etc.

### 5. CTA Strips -- More of Them, Sharper Copy

- Add a mid-page CTA between ProblemSection and Services: "Benieuwd of het ook voor u werkt?"
- Sharpen bottom CTA from "Klaar om het juiste talent te vinden?" to "Stop met zoeken. Start met vinden."

### 6. Diensten/Services Pages -- Add Problem Context

Add a short "why this matters" intro paragraph in the hero that names the pain before listing services. Currently it jumps straight to "Strategische oplossingen voor uitzonderlijk talent" which is generic.

### 7. EN and DE Homepage Parity

The EN and DE homepages are single-file pages (all sections inline). Apply the same structural changes:
- New problem section
- Comparison strip
- Sharper hero copy
- Mid-page CTA
- Rewritten differentiators

## Files to Create
- `src/components/sections/ProblemSection.tsx` -- Reusable, accepts language prop
- `src/components/sections/ComparisonSection.tsx` -- Reusable, accepts language prop

## Files to Edit
- `src/components/sections/HeroSection.tsx` -- New confrontational copy
- `src/components/sections/ServicesSection.tsx` -- Add comparison after cards
- `src/components/sections/WhySection.tsx` -- Sharper differentiator copy
- `src/components/sections/CTAStrip.tsx` -- Stronger CTA copy
- `src/pages/nl/Index.tsx` -- Add ProblemSection + ComparisonSection
- `src/pages/en/Index.tsx` -- Inline equivalents of all changes
- `src/pages/de/Index.tsx` -- Inline equivalents of all changes
- `src/pages/nl/Diensten.tsx` -- Problem context in hero
- `src/pages/en/Services.tsx` -- Problem context in hero
- `src/pages/de/Leistungen.tsx` -- Problem context in hero

## Technical Details

- No new dependencies needed
- Reuses existing `ScrollReveal`, `StaggerContainer`, `StaggerItem`, `Button` components
- Comparison table uses simple Tailwind grid (no table component needed)
- ProblemSection uses existing card + icon patterns with Lucide icons (X, AlertTriangle, etc.)
- All animations follow existing framer-motion / scroll-reveal patterns
- Fully responsive using existing breakpoint patterns


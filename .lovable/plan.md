

# NL SEO Dominantie Plan: #1 in Recruitment Nederland

## Huidige situatie

Het cluster bevat nu:
- **1 sterke pillar**: `/nl/executive-search` (429 regels, FAQ, JSON-LD, social proof)
- **4 dunne pillars**: C-level, Industries, Assessment, Recruitment Model, Employer Branding (alleen kaart-grids, geen echte content)
- **27 spokes**: goed geschreven via SpokePage template
- **Technische SEO basis**: PageMeta, breadcrumbs, canonical, hreflang

## Wat ontbreekt om #1 te worden

### Probleem 1: Dunne pillar pages
De 4 hub-pagina's (C-level, Industries, Assessment, Recruitment Model, Employer Branding) zijn puur kaart-grids zonder inhoud. Google beschouwt dit als "thin content" en zal deze nooit hoog ranken.

### Probleem 2: Geen interne crosslinks
Spoke-pagina's linken alleen terug naar hun eigen pillar en 3-4 gerelateerde spokes. Er zijn geen contextual in-body links tussen clusters (bijv. CEO Recruitment linkt niet naar Assessment Inzetten).

### Probleem 3: Ontbrekende structured data
- Geen `BreadcrumbList` JSON-LD (alleen visuele breadcrumbs)
- Pillar pages missen `Service` of `WebPage` schema
- Geen `sitemap.xml`

### Probleem 4: Header navigatie verbergt content
De header toont alleen 6 links. De 5 pillar pages en 27 spokes zijn onvindbaar vanuit de navigatie (alleen via footer).

### Probleem 5: Ontbrekende zoektermen
Belangrijke Nederlandse recruitment-zoekopdrachten zonder dedicated pagina:
- "werving en selectie" (hoog volume)
- "interim management"  
- "headhunter nederland"
- "talent acquisition"
- "directie werving"

---

## Implementatieplan (5 stappen)

### Stap 1: Pillar pages upgraden naar autoriteits-pagina's

De 4 dunne hubs omschrijven naar volwaardige pillar pages (zoals `/nl/executive-search`):

Per pagina toevoegen:
- Intro-tekst (300-500 woorden) met target keyword
- Social proof strip (metrics)
- "Wat u krijgt" sectie
- Proces-uitleg
- In-body contextual links naar alle spokes
- FAQ sectie met FAQPage JSON-LD
- Service JSON-LD schema

Pagina's: `CLevelRecruitment.tsx`, `AssessmentSelectie.tsx`, `Industries.tsx`, `RecruitmentOperatingModel.tsx`, `EmployerBrandingRetention.tsx`

### Stap 2: BreadcrumbList JSON-LD toevoegen

De `Breadcrumbs` component uitbreiden zodat die automatisch `BreadcrumbList` structured data genereert. Dit verbetert rich snippets in Google voor alle 35+ pagina's in een keer.

### Stap 3: Cross-cluster interne links

In elke spoke page de `relatedLinks` updaten zodat ze NIET alleen binnen hun eigen cluster linken, maar ook naar relevante spokes in andere clusters:

Voorbeelden:
- CEO Recruitment -> Assessment Inzetten, Onboarding Executives, Confidential Search
- Aviation Recruitment -> C-level Recruitment, Talent Pool per Vacature
- Kosten Executive Search -> Abonnement Recruitment, Recruitment as a Service

### Stap 4: Mega-menu in header navigatie

De header `Diensten` link vervangen door een dropdown/mega-menu dat alle pillar pages toont:
- Executive Search
- C-level & Directie
- Industries
- Assessment & Selectie  
- Recruitment Model
- Employer Branding

Dit geeft Google crawl-paden naar alle content en verbetert de interne PageRank-distributie.

### Stap 5: Ontbrekende high-volume spokes toevoegen

5 nieuwe spoke-pagina's voor zoektermen met hoog zoekvolume:
- `/nl/werving-en-selectie` (pillar: Executive Search)
- `/nl/headhunter-nederland` (pillar: Executive Search)
- `/nl/interim-management` (pillar: C-level Recruitment)
- `/nl/directie-werving` (pillar: C-level Recruitment)
- `/nl/talent-acquisition-strategy` (pillar: Recruitment Model)

---

## Technische details

### Stap 1 - Pillar upgrade structuur
Elke pillar wordt herschreven naar het bewezen format van `ExecutiveSearch.tsx`:
- Hero met keyword in H1
- Metrics strip
- Content secties met H2-kopjes (keyword-variaties)
- Spoke-links als grid met beschrijving
- FAQ Accordion met FAQPage JSON-LD
- CTA sectie

### Stap 2 - BreadcrumbList JSON-LD
De `Breadcrumbs.tsx` component wordt uitgebreid met een `<script type="application/ld+json">` tag die automatisch de `BreadcrumbList` schema genereert op basis van de `items` prop.

### Stap 3 - Cross-cluster links
Aanpassing van `relatedLinks` arrays in ~20 spoke bestanden zodat elke spoke 2 interne-cluster links + 2 cross-cluster links bevat.

### Stap 4 - Mega-menu
De `Header.tsx` `navConfigs` wordt uitgebreid met een `children` array voor de "Diensten" item, gerenderd als een dropdown panel.

### Stap 5 - Nieuwe spokes
5 nieuwe bestanden via het bestaande `SpokePage` template patroon, elk ~80-100 regels met volledige SEO-content.

### Geschatte omvang
- ~10 bestanden aanpassen (5 pillars, header, breadcrumbs, App.tsx, footer, seo.ts)
- ~5 nieuwe bestanden (spokes)
- ~15 spoke bestanden minor updates (relatedLinks)


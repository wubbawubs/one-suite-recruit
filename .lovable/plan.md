

# Verbeterplan: Alle NL pagina's naar Enterprise-niveau

## Gevonden verbeterpunten

### 1. Globale consistentieproblemen
- **Broken links**: Footer en secties verwijzen naar routes die niet bestaan (`/nl/diensten/executive-search`, `/nl/diensten/leiderschap`, `/nl/hoe-we-werken`, `/nl/referenties`, `/nl/inzichten`). Dit geeft 404's.
- **Header "Direct contact?" knop**: Op mobiel zit er geen telefoonnummer of directe actie — de knop linkt naar contact, maar een "Bel nu" optie zou effectiever zijn.
- **Announcement bar tekst**: "DE nieuwe standaard" leest onnatuurlijk. Beter: een wisselende of actie-gerichte tekst.

### 2. Homepage (`/nl`)
- **Hero toggle tabs** zijn niet functioneel — de "Voortaan in eigen beheer invullen" tab doet niets. Dit moet ofwel werken (met andere content) of verwijderd worden.
- **TrustBar client namen** zijn platte tekst zonder logo's — voelt leeg. Beter: grijze "logo-stijl" tekst met meer visueel gewicht of echte logo placeholders.
- **InsightsSection artikelen** linken naar `#` — dead links. Moeten ofwel naar echte content gaan of de sectie weglaten tot er content is.
- **CaseStudiesSection "Alle referenties bekijken"** linkt naar `/nl/referenties` die niet bestaat.

### 3. Diensten (`/nl/diensten`)
- **Service cards missen een CTA-knop** — ze linken naar niet-bestaande subroutes. Beter: allemaal naar `/nl/contact` linken of de `href` verwijderen en een "Meer info" modal of anchor toevoegen.
- **Geen social proof of cijfers** op deze pagina — voelt minder overtuigend dan de homepage.

### 4. Vacatures (`/nl/vacatures`)
- **Filter UX**: De industrie-filters scrollen horizontaal maar er is geen visuele indicatie dat er meer filters zijn (geen scroll-indicator).
- **Alle vacature-links gaan naar `/nl/contact`** — beter zou zijn een vacature-detail page of een modal met meer informatie.
- **Geen "level" filter** terwijl de data het wel heeft (C-level, VP, Director).

### 5. Over Ons (`/nl/over-ons`)
- **Team sectie gebruikt placeholder data** met generieke namen — dit valt op bij enterprise klanten. Moet ofwel echte data bevatten of de sectie tijdelijk verbergen.
- **Team avatars** zijn alleen een Users icon in een cirkel — voelt goedkoop. Beter: initialen-avatar of een placeholder foto stijl.
- **Timeline "Van startup tot marktleider"** — bold claim die bewezen moet worden. De 5-kolom grid is op mobiel te krap.

### 6. Contact (`/nl/contact`)
- **Formulier is niet gekoppeld** — stuurt niets, alleen een `setTimeout` simulatie. Dit moet duidelijk vermeld worden of gekoppeld aan een backend.
- **LinkedIn link** gaat naar `https://linkedin.com` generiek — moet naar het echte bedrijfsprofiel.

### 7. Opdrachtgevers (`/nl/opdrachtgevers`)
- **Packages sectie heeft geen prijzen** — "Search", "Partnership", "Enterprise" zonder indicatie van kosten voelt onaf. Beter: "Vanaf X" of "Op aanvraag" toevoegen.
- **Testimonials** gebruiken weer dezelfde bedrijfsnamen (AFAS, MAS Aviation) als de case studies — voelt als herhaling.

---

## Voorgesteld verbeterplan

### Fase 1: Broken links en functionaliteit fixen
- Alle dode links in Footer, InsightsSection, CaseStudiesSection, en ServicesSection updaten naar bestaande routes (bijv. `/nl/diensten` in plaats van `/nl/diensten/executive-search`).
- Hero toggle: ofwel werkend maken met twee content-varianten, ofwel vervangen door een simpelere hero zonder tabs.

### Fase 2: Content en UX verfijning
- **Vacatures**: Level-filter toevoegen naast industrie, scroll-indicator voor filters op mobiel.
- **Over Ons**: Team sectie vervangen door een "Ons team" tekst-blok zonder nep-namen, of initialen-avatars gebruiken.
- **Opdrachtgevers**: "Op aanvraag" prijslabel toevoegen aan packages.
- **Contact**: Duidelijke "simulatie" melding verwijderen en formulier klaar maken voor backend-koppeling.

### Fase 3: Visuele polish
- TrustBar: Client namen groter en met meer letter-spacing voor een "logo wall" effect.
- Alle pagina hero's: subtiele variatie toevoegen (niet allemaal exact dezelfde gradient + dot pattern).
- Footer: "Opdrachtgevers" link toevoegen aan navigatie.
- Mobiele spacing optimaliseren op timeline en filter secties.

---

## Technische details

### Bestanden die aangepast worden:

| Bestand | Wijzigingen |
|---|---|
| `src/components/layout/Footer.tsx` | Broken links fixen, "Opdrachtgevers" link toevoegen |
| `src/components/sections/HeroSection.tsx` | Toggle tabs functioneel maken of vereenvoudigen |
| `src/components/sections/ServicesSection.tsx` | Links updaten naar bestaande routes |
| `src/components/sections/CaseStudiesSection.tsx` | "Alle referenties" link fixen |
| `src/components/sections/InsightsSection.tsx` | Artikel links fixen of sectie aanpassen |
| `src/pages/nl/Vacatures.tsx` | Level-filter toevoegen, mobiel scroll-indicator |
| `src/pages/nl/OverOns.tsx` | Team sectie verbeteren, timeline mobiel fixen |
| `src/pages/nl/Opdrachtgevers.tsx` | Prijslabels toevoegen aan packages |
| `src/pages/nl/Contact.tsx` | LinkedIn link updaten |
| `src/pages/nl/Diensten.tsx` | Service card links fixen, social proof toevoegen |


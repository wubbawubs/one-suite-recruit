

## Plan: Opdrachtgevers alignen en foto's fixen

### 1. Testimonials updaten met echte klanten

De testimonials op `/nl/opdrachtgevers` en `/en/for-employers` gebruiken nu "MAS Aviation", "AFAS Software" en "FinancePro Group". Deze moeten worden vervangen door de echte klanten die ook op de homepage TrustBar staan:

**Nieuwe testimonials (5 stuks i.p.v. 3):**
- Arvoo
- BGH Accountants
- OOvB Accountants
- Energiebehoud
- Thales

Optioneel MAS Aviation als 6e toevoegen.

**Bestanden:**
- `src/pages/nl/Opdrachtgevers.tsx` - testimonials array updaten
- `src/pages/en/ForEmployers.tsx` - testimonials array updaten

### 2. Case Studies op homepage alignen

De `CaseStudiesSection.tsx` gebruikt ook "MAS Aviation", "AFAS Software" en "FinancePro Group". Deze updaten naar dezelfde echte klanten voor consistentie.

**Bestand:** `src/components/sections/CaseStudiesSection.tsx`

### 3. Foto's op Diensten pagina fixen

Uit de screenshots is te zien dat de foto's op de service cards niet goed gecropped worden (te veel ingezoomd, verkeerd uitgesneden). Fix:

- `object-position: center` toevoegen zodat de foto's beter gecentreerd zijn
- Image hoogte aanpassen voor betere verhouding (bijv. `h-48` naar `h-44` of `aspect-ratio` gebruiken)
- Consistent maken tussen `Diensten.tsx` en `ServicesSection.tsx`

**Bestanden:**
- `src/pages/nl/Diensten.tsx`
- `src/components/sections/ServicesSection.tsx`

### Technische details

Alle wijzigingen zijn puur data-updates (testimonial/case study arrays) en kleine CSS tweaks (object-position). Geen nieuwe dependencies of structurele wijzigingen nodig.


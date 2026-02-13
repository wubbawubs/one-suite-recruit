import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Compensation & Benefits Trends NL: Executive Beloning | OneTime Recruit",
  metaDescription: "Actuele trends in executive compensation en benefits in Nederland. Salaristrendsdata, variabele beloning en secundaire arbeidsvoorwaarden voor C-level.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Employer Branding & Retention", href: "/nl/employer-branding-retention" },
    { label: "Compensation & Benefits Trends" },
  ],
  heroLabel: "Employer Branding",
  heroTitle: "Compensation & benefits:",
  heroHighlight: "trends in Nederland",
  heroDescription: "Een actueel overzicht van executive beloning, variabele componenten en markttrends in de Nederlandse markt.",
  sections: [
    {
      title: "Executive compensation in Nederland",
      content: "De beloningsstructuur voor executives in Nederland wijkt af van internationale standaarden. De Nederlandse markt kenmerkt zich door een relatief bescheiden basissalaris vergeleken met de VS en UK, maar met aantrekkelijke secundaire voorwaarden en een sterke work-life balance.\n\nDe verwachte trend voor 2025-2026 is een stijging van 5-8% in executive basissalarissen, gedreven door arbeidskrapte en inflatie. Variabele beloning wint aan belang, vooral in de tech en private equity-backed sector.",
    },
    {
      title: "Salarisbandbreedte per functieniveau",
      content: "Indicatieve salarisranges voor executive posities in Nederland (bruto jaarsalaris excl. variabel):",
      items: [
        "CEO / Managing Director — €180.000-€400.000+ (afhankelijk van organisatieomvang)",
        "CFO / CTO / COO — €150.000-€300.000+",
        "CHRO / CCO / CRO — €130.000-€250.000+",
        "VP / Director level — €120.000-€200.000",
        "Board / commissaris — dagvergoeding €500-€2.000 per vergadering",
      ],
    },
    {
      title: "Variabele beloningscomponenten",
      content: "Naast het basissalaris bestaan executive beloningspakketten uit diverse variabele componenten:",
      items: [
        "Short-term incentive (STI) — jaarlijkse bonus, doorgaans 20-40% van het basissalaris",
        "Long-term incentive (LTI) — aandelenopties, SAR's, phantom shares of restricted stock",
        "Sign-on bonus — eenmalig bij aanvang, ter compensatie van opgebouwde rechten bij vorige werkgever",
        "Retentiebonus — aan specifieke periode gebonden bonus om vertrek te voorkomen",
        "Winstdeling — percentage van de bedrijfswinst, vooral bij eigenaar-geleide bedrijven",
      ],
    },
    {
      title: "Trends en ontwikkelingen",
      content: "De belangrijkste trends in executive beloning voor 2025-2026:",
      items: [
        "ESG-linked beloning — variabele beloning gekoppeld aan duurzaamheidsdoelen",
        "Pay transparency — nieuwe EU-regelgeving vereist meer openheid over beloning",
        "Total reward focus — verschuiving van puur salaris naar holistische waardepropositie",
        "Equity-componenten — steeds meer bedrijven bieden equity aan, ook buiten de tech-sector",
        "Wellbeing benefits — executive coaching, sabbaticals, health programs als onderscheidend element",
        "Clawback clausules — terugvorderingsbepalingen bij wanprestatie of frauduleus handelen",
      ],
    },
  ],
  faqs: [
    { q: "Hoe bepaal ik het juiste salarispakket voor een executive?", a: "Wij adviseren een combinatie van marktbenchmarking, interne pay equity analyse en een assessment van de totale waardepropositie (salaris + variabel + secundaire voorwaarden + culturele factoren)." },
    { q: "Moet ik altijd matchen met het huidige salaris van een kandidaat?", a: "Niet noodzakelijk. Een overtuigend totaalpakket (inclusief impact, autonomie en groeiperspectief) kan een lager basissalaris compenseren. Omgekeerd is een hoog salaris geen garantie voor acceptatie." },
    { q: "Hoe verhoudt Nederland zich tot andere Europese markten?", a: "Nederlandse executive salarissen liggen onder het niveau van UK en Zwitserland, maar boven de meeste andere Europese markten. De totale waardepropositie (inclusief work-life balance en pensioen) is echter internationaal competitief." },
  ],
  pillarLink: { label: "Terug naar Employer Branding & Retention", href: "/nl/employer-branding-retention" },
  relatedLinks: [
    { label: "Leadership retention", href: "/nl/leadership-retention" },
    { label: "Employer brand voor senior talent", href: "/nl/employer-brand-senior-talent" },
    { label: "CFO recruitment", href: "/nl/cfo-recruitment" },
    { label: "Hiring governance & reporting", href: "/nl/hiring-governance-reporting" },
  ],
};

export default function CompensationBenefitsTrends() {
  return <SpokePage data={data} />;
}

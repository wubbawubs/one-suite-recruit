import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Finance, Risk & Compliance Leadership | OneTime Recruit",
  metaDescription: "Executive search voor finance, risk en compliance leiders. Van CFO tot Chief Risk Officer: hoe u de juiste leider vindt in de financiële sector.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Industries", href: "/nl/industries" },
    { label: "Finance, Risk & Compliance" },
  ],
  heroLabel: "Industries",
  heroTitle: "Finance, risk &",
  heroHighlight: "compliance leadership",
  heroDescription: "De financiële sector vereist leiders met diepgaande kennis van regulering, risicomanagement en governance.",
  sections: [
    {
      title: "Leadership in een gereguleerde sector",
      content: "De financiële sector is een van de zwaarst gereguleerde sectoren ter wereld. Leiders in finance, risk en compliance moeten opereren binnen een complex web van regelgeving (DNB, AFM, EBA, ECB) terwijl zij tegelijkertijd waarde creëren en innoveren.\n\nDeze balans tussen compliance en commercie maakt leadership recruitment in de financiële sector tot een specialisme.",
    },
    {
      title: "Posities die wij invullen",
      content: "Wij werven senior leiders voor financiële instellingen en fintech bedrijven:",
      items: [
        "CEO / COO — banken, verzekeraars, asset managers, fintech",
        "CFO / Finance Director — financial management, treasury, investor relations",
        "Chief Risk Officer (CRO) — enterprise risk management, credit risk, market risk",
        "Chief Compliance Officer (CCO) — regulatory compliance, AML/KYC, financial crime",
        "CISO — cybersecurity in de financiële sector",
        "VP/Director Audit — internal audit, SOX compliance, assurance",
      ],
    },
    {
      title: "DNB en AFM toetsing",
      content: "Een bijzonder aspect van leadership recruitment in de financiële sector is de fit & proper toetsing door DNB en/of AFM. Bestuurders en commissarissen van financiële instellingen moeten vooraf worden getoetst op geschiktheid en betrouwbaarheid.\n\nDit proces voegt 4-8 weken toe aan de doorlooptijd en stelt aanvullende eisen aan kandidaten. Ons searchteam houdt hier vanaf het begin rekening mee en screent kandidaten proactief op toetsingsrisico's.",
    },
    {
      title: "Trends in financial leadership",
      content: "De financiële sector kent een aantal trends die het leiderschapsprofiel beïnvloeden:",
      items: [
        "Digitale transformatie — open banking, API-economie, cloud migratie",
        "ESG & duurzaamheid — SFDR, taxonomie, klimaatrisico-rapportage",
        "Fintech convergentie — samenwerking of concurrentie met fintech players",
        "Regulatory intensivering — Basel IV, DORA, MiCA (crypto-regulering)",
        "Talent-concurrentie — financiële sector verliest talent aan tech-bedrijven",
      ],
    },
  ],
  faqs: [
    { q: "Hoe lang duurt recruitment inclusief DNB-toetsing?", a: "Het search-proces zelf duurt 4-8 weken. De DNB fit & proper toetsing voegt daar 4-8 weken aan toe. Totale doorlooptijd: 8-16 weken. Wij adviseren om vroegtijdig te starten." },
    { q: "Werft u ook voor fintech bedrijven?", a: "Ja. De grens tussen traditionele financiële instellingen en fintech vervaagt. Wij werven voor beide segmenten en begrijpen de culturele verschillen." },
    { q: "Heeft OneTime Recruit ervaring met DNB-toetsingen?", a: "Ja. Wij screenen kandidaten proactief op potentiële toetsingsrisico's en begeleiden het proces om vertragingen te minimaliseren." },
  ],
  pillarLink: { label: "Terug naar Industries", href: "/nl/industries" },
  relatedLinks: [
    { label: "CFO recruitment", href: "/nl/cfo-recruitment" },
    { label: "Operations & supply chain", href: "/nl/operations-supply-chain" },
    { label: "Board & commissarissen search", href: "/nl/board-commissarissen-search" },
    { label: "Referentiechecks", href: "/nl/referentiechecks" },
  ],
};

export default function FinanceRiskCompliance() {
  return <SpokePage data={data} />;
}

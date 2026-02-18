import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Board & Commissarissen Search | OneTime Recruit",
  metaDescription: "Board search en commissarissen werving: hoe u de juiste toezichthouders en non-executive directors vindt. Governance, diversiteit en assessment.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "C-level Recruitment", href: "/nl/diensten/c-level-recruitment" },
    { label: "Board & Commissarissen Search" },
  ],
  heroLabel: "C-level Recruitment",
  heroTitle: "Board &",
  heroHighlight: "commissarissen search",
  heroDescription: "Het samenstellen van een effectieve Raad van Commissarissen of Board of Directors vereist een unieke aanpak.",
  sections: [
    {
      title: "Waarom board search anders is",
      content: "Het werven van commissarissen en non-executive directors verschilt fundamenteel van executive recruitment. Board members hebben een toezichthoudende en adviserende rol — zij besturen niet, maar bewaken de koers.\n\nDit vereist een ander profiel: onafhankelijkheid, breed strategisch overzicht, governance-ervaring en het vermogen om kritisch-constructief te zijn zonder de operationele dagelijkse leiding over te nemen.",
    },
    {
      title: "Samenstelling en diversiteit",
      content: "Een effectieve board is divers samengesteld. De Nederlandse Corporate Governance Code en recente wetgeving stellen steeds hogere eisen aan diversiteit:",
      items: [
        "Genderdiversiteit — streefcijfers en in sommige gevallen quota voor man-vrouwverhouding",
        "Competentiediversiteit — mix van financiële, juridische, technologische en sectorexpertise",
        "Achtergrondverspreiding — internationale ervaring, ondernemerschap, publieke sector",
        "Onafhankelijkheid — voldoende leden zonder directe band met de organisatie",
        "Generatiediversiteit — mix van ervaren bestuurders en frisse perspectieven",
      ],
    },
    {
      title: "Het search proces voor board posities",
      content: "Board search vereist een delicate aanpak. Potentiële commissarissen zijn doorgaans zeer senior professionals die niet actief zoeken. De benadering moet op het juiste niveau plaatsvinden — vaak als [confidential search](/nl/confidential-search):\n\nWe beginnen met een grondige analyse van de huidige board samenstelling en identificeren de gaps. Vervolgens stellen we een longlist samen op basis van governance-ervaring, sectorkennis en de specifieke behoeften van de organisatie.\n\nKandidaten worden beoordeeld op hun toezichthoudende kwaliteiten, onafhankelijkheid en vermogen om waarde toe te voegen aan de board dynamiek. Uitgebreide [referentiechecks](/nl/referentiechecks) zijn standaard bij elke board search.",
    },
    {
      title: "Governance en compliance",
      content: "Bij board search moet rekening worden gehouden met governance-vereisten:",
      items: [
        "Nederlandse Corporate Governance Code — onafhankelijkheidseisen en benoemingstermijnen",
        "Wet bestuur en toezicht rechtspersonen (WBTR) — aansprakelijkheid en taakverdeling",
        "Sectorspecifieke regelgeving — DNB-toetsing voor financiële sector, AFM-eisen",
        "Fit & proper toetsing — bij gereguleerde sectoren",
        "Nevenfuncties en belangenverstrengeling — screening op potentiële conflicten",
      ],
    },
  ],
  faqs: [
    { q: "Hoeveel commissarissen heeft een organisatie nodig?", a: "Dit hangt af van de omvang en complexiteit. Wettelijk is er geen minimum, maar doorgaans bestaat een RvC uit 3-5 leden. Grotere organisaties hebben soms 7-9 commissarissen met diverse commissies." },
    { q: "Hoe lang duurt board search?", a: "Board search duurt gemiddeld 6-10 weken, mede omdat kandidaten vaak langere opzegtermijnen en meer due diligence vereisen." },
    { q: "Wat kost commissarissen werving?", a: "Bij OneTime Recruit werken wij met vaste tarieven voor board search, vergelijkbaar met onze executive search tarieven." },
  ],
  pillarLink: { label: "Terug naar C-level Recruitment", href: "/nl/diensten/c-level-recruitment" },
  relatedLinks: [
    { label: "CEO recruitment", href: "/nl/ceo-recruitment" },
    { label: "Confidential search", href: "/nl/confidential-search" },
    { label: "Referentiechecks", href: "/nl/referentiechecks" },
    { label: "Finance, risk & compliance", href: "/nl/finance-risk-compliance" },
  ],
};

export default function BoardCommissarissenSearch() {
  return <SpokePage data={data} />;
}

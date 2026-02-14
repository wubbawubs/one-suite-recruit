import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Hiring Governance & Reporting voor Enterprise | OneTime Recruit",
  metaDescription: "Hiring governance en reporting voor enterprise organisaties. Hoe u controle houdt over uw recruitment proces met data-gedreven inzichten.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Recruitment Operating Model", href: "/nl/recruitment-operating-model" },
    { label: "Hiring Governance & Reporting" },
  ],
  heroLabel: "Recruitment Model",
  heroTitle: "Hiring governance &",
  heroHighlight: "reporting",
  heroDescription: "Data-gedreven controle over uw executive recruitment. Van KPI's tot board-level reporting.",
  sections: [
    {
      title: "Wat is hiring governance?",
      content: "Hiring governance is het framework van processen, rollen en verantwoordelijkheden dat ervoor zorgt dat uw organisatie consistent, compliant en effectief werft. Bij enterprise organisaties is hiring governance essentieel om kwaliteit te waarborgen bij hoge volumes en complexe stakeholderstructuren.\n\nGoede hiring governance voorkomt ad-hoc beslissingen, reduceert bias en zorgt ervoor dat elke hiring decision traceerbaar en verdedigbaar is.",
    },
    {
      title: "Key KPI's voor executive recruitment",
      content: "De volgende KPI's bieden een compleet beeld van uw executive recruitment effectiviteit:",
      items: [
        "Time-to-fill — gemiddelde doorlooptijd van vacature tot plaatsing",
        "Time-to-productivity — hoe snel is de nieuwe leider effectief?",
        "Quality of hire — retentie na 12 maanden, performance ratings, 360-feedback",
        "Source effectiveness — welke kanalen leveren de beste kandidaten?",
        "Cost per hire — totale [kosten](/nl/kosten-executive-search) inclusief search fees, [assessment](/nl/assessment-inzetten) en [onboarding](/nl/onboarding-executives)",
        "Offer acceptance rate — percentage kandidaten dat het aanbod accepteert",
        "Hiring manager satisfaction — tevredenheid van de interne opdrachtgever",
      ],
    },
    {
      title: "Governance framework opzetten",
      content: "Een effectief hiring governance framework bevat de volgende elementen:",
      items: [
        "Gedefinieerde rollen — wie initieert, wie beslist, wie keurt goed?",
        "Standaard proces — elke search doorloopt dezelfde stappen",
        "Gestandaardiseerde assessment — vergelijkbare criteria voor vergelijkbare rollen",
        "Compliance checks — diversiteit, privacy (AVG), arbeidsrecht",
        "Escalatieprotocol — wat gebeurt er als de search vastloopt?",
        "Documentation — elk gesprek, elke beslissing wordt vastgelegd",
      ],
    },
    {
      title: "Board-level reporting",
      content: "Voor board-level reporting over executive recruitment adviseren wij een kwartaalrapportage die de volgende elementen bevat:\n\nEen overzicht van alle executive plaatsingen in het kwartaal, inclusief doorlooptijd en kosten. Een benchmark tegen de markt. Een analyse van de talent pipeline en aankomende behoeften. En een risico-assessment van kritieke posities die moeilijk te vullen zijn.\n\nDeze rapportage positioneert recruitment als strategisch onderwerp op board-niveau, niet als operationeel proces.",
    },
  ],
  faqs: [
    { q: "Hoe begin ik met hiring governance?", a: "Start met het documenteren van uw huidige proces, het identificeren van bottlenecks en het definiëren van KPI's. Wij helpen u bij het opzetten van een governance framework dat past bij uw organisatieomvang." },
    { q: "Is hiring governance alleen voor grote organisaties?", a: "Nee. Elke organisatie die meer dan 3-4 executive posities per jaar invult, profiteert van een gestructureerd governance framework. De complexiteit schaalt mee met de organisatieomvang." },
    { q: "Hoe meet ik quality of hire?", a: "De meest betrouwbare indicatoren zijn retentie na 12 maanden, performance ratings na 6 en 12 maanden, en 360-graden feedback na het eerste jaar." },
  ],
  pillarLink: { label: "Terug naar Recruitment Operating Model", href: "/nl/recruitment-operating-model" },
  relatedLinks: [
    { label: "Recruitment-as-a-service", href: "/nl/recruitment-as-a-service" },
    { label: "Talent pool per vacature", href: "/nl/talent-pool-per-vacature" },
    { label: "Assessment inzetten", href: "/nl/assessment-inzetten" },
    { label: "Compensation & benefits trends", href: "/nl/compensation-benefits-trends" },
  ],
};

export default function HiringGovernanceReporting() {
  return <SpokePage data={data} />;
}

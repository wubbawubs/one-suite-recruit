import { SpokePage } from "@/components/layout/SpokePage";

const data = {
  metaTitle: "Talent Acquisition Strategy voor Executive Recruitment | OneTime Recruit",
  metaDescription: "Bouw een schaalbare talent acquisition strategy voor executive en senior management posities. Van ad-hoc search naar structurele recruitment capaciteit.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Recruitment Operating Model", href: "/nl/diensten/recruitment-operating-model" },
    { label: "Talent Acquisition Strategy" },
  ],
  heroLabel: "Strategie & Planning",
  heroTitle: "Talent acquisition strategy voor",
  heroHighlight: "executive recruitment",
  heroDescription: "Stop met ad-hoc searches. Bouw een talent acquisition strategy die uw leiderschapsbehoefte structureel invult — met talent pools, governance en voorspelbare resultaten.",
  sections: [
    {
      title: "Waarom een talent acquisition strategy?",
      content: "De meeste organisaties hebben een recruitment strategie voor operationele functies, maar behandelen executive recruitment als een incident. Het gevolg: langzame [doorlooptijden](/nl/hoe-lang-duurt-executive-search), inconsistente kwaliteit en onvoorspelbare [kosten](/nl/kosten-executive-search).\n\nEen talent acquisition strategy voor executive posities verandert dit fundamenteel. In plaats van reactief te reageren op vacatures, bouwt u proactief aan een pipeline van toekomstige leiders. Met dedicated [talent pools](/nl/talent-pool-per-vacature), gestructureerde [assessment](/nl/assessment-inzetten) en data-gedreven [governance](/nl/hiring-governance-reporting).",
      items: [
        "Proactieve opvolgingsplanning voor kritieke posities",
        "Dedicated talent pools per functiegroep",
        "Gestandaardiseerde assessment en selectie criteria",
        "Data-gedreven hiring governance en rapportage",
        "Schaalbare recruitment capaciteit via RaaS",
      ],
    },
    {
      title: "De vier pijlers van executive talent acquisition",
      content: "Een effectieve talent acquisition strategy voor executive posities rust op vier pijlers: (1) Talent Intelligence — real-time inzicht in de markt, beschikbaarheid en beloningstrends. (2) Pipeline Management — proactieve opbouw van talent pools voor toekomstige vacatures. (3) Assessment Excellence — gestandaardiseerde selectiemethoden die voorspellen wie succesvol zal zijn. (4) Hiring Governance — data-gedreven controle over doorlooptijden, kosten en kwaliteit.\n\nOneTime Recruit helpt u bij het ontwerpen en implementeren van elk van deze pijlers, afgestemd op uw specifieke organisatiecontext en groeiambitie.",
    },
    {
      title: "Van strategie naar uitvoering",
      content: "Een talent acquisition strategy is pas waardevol als deze wordt uitgevoerd. Wij bieden drie implementatiemodellen: (1) Project-based — wij ontwerpen de strategie en begeleiden de implementatie. (2) Recruitment-as-a-Service — doorlopende executive recruitment capaciteit via abonnement. (3) Talent Pool — dedicated pools per vacature die u behoudt en zelf kunt activeren.\n\nElk model is transparant geprijsd met vaste tarieven en levert meetbare resultaten op.",
    },
  ],
  faqs: [
    { q: "Wat is het verschil tussen talent acquisition en recruitment?", a: "Recruitment is het invullen van vacatures. Talent acquisition is de strategische aanpak om structureel de juiste mensen aan te trekken, te selecteren en te behouden. Het omvat employer branding, pipeline management, assessment en governance." },
    { q: "Voor welke organisaties is een talent acquisition strategy relevant?", a: "Voor elke organisatie met 3+ executive vacatures per jaar, organisaties in snelle groei of transformatie, en enterprise organisaties die hun executive recruitment willen professionaliseren." },
    { q: "Hoe lang duurt het om een strategy te implementeren?", a: "Het ontwerp duurt 2-4 weken. De implementatie hangt af van de scope: een basismodel is operationeel binnen 6 weken, een volledig operating model binnen 3 maanden." },
  ],
  pillarLink: { label: "Terug naar Recruitment Operating Model", href: "/nl/diensten/recruitment-operating-model" },
  relatedLinks: [
    { label: "Talent Pool per Vacature", href: "/nl/talent-pool-per-vacature" },
    { label: "Recruitment-as-a-Service", href: "/nl/recruitment-as-a-service" },
    { label: "Hiring Governance & Reporting", href: "/nl/hiring-governance-reporting" },
    { label: "Employer Brand voor Senior Talent", href: "/nl/employer-brand-senior-talent" },
  ],
  ctaTitle: "Uw talent acquisition strategie bespreken?",
  ctaDescription: "Plan een gesprek en ontdek welk model past bij uw organisatie.",
};

export default function TalentAcquisitionStrategy() {
  return <SpokePage data={data} />;
}
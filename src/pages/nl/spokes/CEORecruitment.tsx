import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "CEO Recruitment: Wanneer & Hoe een CEO Werven | OneTime Recruit",
  metaDescription: "CEO recruitment: wanneer, hoe en waarom executive search inzetten voor uw nieuwe CEO. Inclusief assessment criteria, valkuilen en best practices.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "C-level Recruitment", href: "/nl/c-level-recruitment" },
    { label: "CEO Recruitment" },
  ],
  heroLabel: "C-level Recruitment",
  heroTitle: "CEO recruitment:",
  heroHighlight: "wanneer & hoe",
  heroDescription: "Het vinden van de juiste CEO is de meest impactvolle beslissing voor uw organisatie. Zo pakt u het aan.",
  sections: [
    {
      title: "Waarom CEO recruitment anders is",
      content: "Het werven van een CEO verschilt fundamenteel van elke andere leiderschapspositie. De CEO bepaalt de strategische richting, cultuur en uiteindelijk het succes van de hele organisatie. Een verkeerde keuze heeft verstrekkende gevolgen — niet alleen financieel, maar ook voor medewerkersbehoud, stakeholdervertrouwen en marktpositie.\n\nDaarom vereist CEO recruitment een uitzonderlijk grondige aanpak: diepgaande stakeholderanalyse, board-level alignment, en een assessment dat verder gaat dan competenties alleen.",
    },
    {
      title: "Wanneer is CEO search nodig?",
      content: "De meest voorkomende triggers voor CEO recruitment zijn:",
      items: [
        "Pensionering of vertrek van de huidige CEO",
        "Strategische koerswijziging die ander leiderschap vereist",
        "Snelle groei waarvoor een schaalbaar leiderschapsprofiel nodig is",
        "Turnaround of crisis management",
        "Post-fusie integratie",
        "Overgang van founder-led naar professioneel management",
      ],
    },
    {
      title: "Assessment criteria voor CEO's",
      content: "Bij het beoordelen van CEO-kandidaten kijken wij verder dan het cv. De volgende dimensies zijn cruciaal:",
      items: [
        "Strategisch denkvermogen — vermogen om langetermijnvisie te ontwikkelen en te communiceren",
        "Stakeholder management — board, aandeelhouders, medewerkers, klanten",
        "Track record — meetbare resultaten in vergelijkbare contexten",
        "Cultuurleiderschap — vermogen om cultuur te bouwen of te transformeren",
        "Crisis management — gedrag onder druk en onzekerheid",
        "Adaptief vermogen — flexibiliteit in een snel veranderende markt",
      ],
    },
    {
      title: "Valkuilen bij CEO recruitment",
      content: "De meest voorkomende fouten bij het werven van een CEO zijn:",
      items: [
        "Te veel focus op branche-ervaring ten koste van leiderschapskwaliteiten",
        "Onvoldoende alignment binnen de board over het gewenste profiel",
        "Onderschatting van cultuurfit — een briljante strateeg kan falen in de verkeerde cultuur",
        "Te snel beslissen onder druk van een vacuüm aan de top",
        "Onvoldoende referentiechecks bij eerdere board members",
      ],
    },
    {
      title: "Het CEO search proces bij OneTime Recruit",
      content: "Ons CEO search proces is specifiek ontworpen voor de complexiteit van deze rol:\n\nWe beginnen met uitgebreide board consultatie om consensus te bereiken over het gewenste profiel. Vervolgens voeren wij een brede marktverkenning uit, inclusief internationale kandidaten indien gewenst. Elke kandidaat doorloopt een meervoudig assessment met STAR-interviews, psychometrische evaluatie en uitgebreide referentiechecks.\n\nNa plaatsing bieden wij een 100-dagen onboardingprogramma om een succesvolle start te waarborgen.",
    },
  ],
  faqs: [
    { q: "Hoe lang duurt een CEO search?", a: "Een CEO search duurt doorgaans 6-10 weken, afhankelijk van de complexiteit en of het een confidential search betreft. De shortlist is gemiddeld na 3-4 weken beschikbaar." },
    { q: "Moet de nieuwe CEO altijd extern geworven worden?", a: "Niet noodzakelijk. Een goede CEO search omvat ook evaluatie van interne kandidaten. Soms is de beste kandidaat al binnen de organisatie, maar is externe benchmarking nodig om dit te valideren." },
    { q: "Wat kost CEO recruitment?", a: "Traditioneel rekenen bureaus 30-35% van het jaarsalaris. Bij OneTime Recruit werken wij met vaste tarieven, ongeacht het salarisniveau." },
  ],
  pillarLink: { label: "Terug naar C-level Recruitment", href: "/nl/c-level-recruitment" },
  relatedLinks: [
    { label: "CFO recruitment", href: "/nl/cfo-recruitment" },
    { label: "Board & commissarissen search", href: "/nl/board-commissarissen-search" },
    { label: "Assessment inzetten", href: "/nl/assessment-inzetten" },
    { label: "Onboarding executives", href: "/nl/onboarding-executives" },
  ],
};

export default function CEORecruitment() {
  return <SpokePage data={data} />;
}

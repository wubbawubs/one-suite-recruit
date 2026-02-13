import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Leadership Retention: Mis-Hires Voorkomen | OneTime Recruit",
  metaDescription: "Hoe u executive mis-hires voorkomt en leadership retention verbetert. Concrete strategieën voor duurzame leiderschapsplaatsingen.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Employer Branding & Retention", href: "/nl/employer-branding-retention" },
    { label: "Leadership Retention" },
  ],
  heroLabel: "Employer Branding",
  heroTitle: "Leadership retention:",
  heroHighlight: "mis-hires voorkomen",
  heroDescription: "De kosten van een executive mis-hire zijn 3-5x het jaarsalaris. Zo voorkomt u ze.",
  sections: [
    {
      title: "De werkelijke kosten van een mis-hire",
      content: "Een mis-hire op directieniveau is een van de duurste fouten die een organisatie kan maken. Onderzoek toont aan dat de totale kosten van een executive mis-hire 3-5x het jaarsalaris bedragen. Bij een jaarsalaris van €200.000 loopt dit op tot €600.000-€1.000.000.\n\nDeze kosten omvatten niet alleen salaris en search fees, maar ook productiviteitsverlies, impact op teammoraal, verloren klanten en de kosten van een nieuwe search.",
    },
    {
      title: "Waarom executives falen",
      content: "De meest voorkomende redenen voor het falen van executive plaatsingen zijn:",
      items: [
        "Culturele mismatch — de leider past niet bij de organisatiecultuur of teamdynamiek",
        "Onduidelijke verwachtingen — het mandaat en de verantwoordelijkheden zijn niet helder gedefinieerd",
        "Onvoldoende onboarding — de leider wordt niet adequaat geïntroduceerd en ondersteund",
        "Politieke dynamiek — de leider kan niet navigeren in de interne stakeholder-structuur",
        "Verkeerde fase-match — een scale-up leider in een corporate omgeving of vice versa",
      ],
    },
    {
      title: "Preventiestrategieën",
      content: "Het voorkomen van mis-hires begint al vóór de plaatsing:",
      items: [
        "Grondige intake — investeer tijd in het begrijpen van de organisatie, het team en de uitdagingen",
        "Cultuurfit-assessment — evalueer niet alleen competenties maar ook waarden en leiderschapsstijl",
        "Realistische jobpreview — wees eerlijk over de uitdagingen en context van de rol",
        "Referentiechecks op cultureel gedrag — niet alleen prestaties, maar ook hoe de kandidaat omgaat met tegenslag",
        "Structured onboarding — een 100-dagen plan met duidelijke mijlpalen",
        "Early warning systeem — regelmatige check-ins in de eerste 6 maanden",
      ],
    },
    {
      title: "Het belang van retentie na plaatsing",
      content: "Retentie is geen passief proces. Na de plaatsing zijn de eerste 100 dagen cruciaal. In deze periode wordt bepaald of de nieuwe leider succesvol integreert of begint te worstelen.\n\nBij OneTime Recruit bieden wij 100-dagen onboarding support als standaard onderdeel van onze dienstverlening. Dit omvat regelmatige check-ins met zowel de geplaatste kandidaat als de opdrachtgever, vroegtijdige signalering van mogelijke problemen, en coaching waar nodig.\n\nOns retentiepercentage na 12 maanden is 95% — mede dankzij deze proactieve aanpak.",
    },
  ],
  faqs: [
    { q: "Wat is een acceptabel retentiepercentage voor executive plaatsingen?", a: "De marktstandaard ligt rond 80-85% retentie na 12 maanden. Bij OneTime Recruit behalen wij 95%, mede dankzij onze grondige assessment en onboarding support." },
    { q: "Biedt OneTime Recruit een garantie bij mis-hires?", a: "Ja, wij bieden een garantieregeling op al onze plaatsingen. Als de match binnen de garantieperiode niet werkt, starten wij kosteloos een nieuwe search." },
    { q: "Hoeveel kost een executive mis-hire echt?", a: "Onderzoek schat de totale kosten op 3-5x het jaarsalaris. Dit omvat directe kosten (salaris, search fees) en indirecte kosten (productiviteitsverlies, teamimpact, klantenverlies)." },
  ],
  pillarLink: { label: "Terug naar Employer Branding & Retention", href: "/nl/employer-branding-retention" },
  relatedLinks: [
    { label: "Onboarding executives", href: "/nl/onboarding-executives" },
    { label: "Culture fit vs culture add", href: "/nl/culture-fit-vs-culture-add" },
    { label: "Assessment inzetten", href: "/nl/assessment-inzetten" },
    { label: "Executive search pillar", href: "/nl/executive-search" },
  ],
};

export default function LeadershipRetention() {
  return <SpokePage data={data} />;
}

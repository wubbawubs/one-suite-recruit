import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Abonnement Recruitment: Wanneer Het Werkt (en Wanneer Niet) | OneTime Recruit",
  metaDescription: "Werkt abonnement-based recruitment? Ontdek de voor- en nadelen, wanneer het slim is en wanneer traditionele search beter past.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Recruitment Operating Model", href: "/nl/diensten/recruitment-operating-model" },
    { label: "Abonnement Recruitment" },
  ],
  heroLabel: "Recruitment Model",
  heroTitle: "Abonnement recruitment:",
  heroHighlight: "wanneer het werkt (en wanneer niet)",
  heroDescription: "Een eerlijke analyse van het abonnementsmodel in recruitment. Geen sales talk, maar feiten.",
  sections: [
    {
      title: "Het abonnementsmodel uitgelegd",
      content: "Bij abonnement-based recruitment betaalt u een vast maandbedrag voor doorlopende recruitment capaciteit, in plaats van per plaatsing. Dit model wint aan populariteit omdat het voorspelbaarheid en continuïteit biedt.\n\nHet is de recruitment-versie van wat in de softwarewereld 'SaaS' heet: u abonneert zich op een dienst in plaats van per gebruik te betalen.",
    },
    {
      title: "Wanneer werkt het wél",
      content: "Het abonnementsmodel is het meest effectief in deze situaties:",
      items: [
        "Meerdere plaatsingen per jaar — bij 3+ posities is het significant goedkoper dan per-placement",
        "Voorspelbare hiring needs — u weet dat er structureel senior posities invullen worden",
        "Behoefte aan proactieve talent pooling — u wilt niet wachten tot de vacature urgent is",
        "Strategische workforce planning — u wilt recruitment integreren in uw HR-strategie",
        "Kostentransparantie — u wilt voorspelbare, budgeteerbare recruitmentkosten",
      ],
    },
    {
      title: "Wanneer werkt het niet",
      content: "Het abonnementsmodel is niet altijd de beste keuze:",
      items: [
        "Incidentele hiring — bij 1-2 plaatsingen per jaar is per-placement vaak efficiënter",
        "Onvoorspelbaar volume — als u niet weet of en wanneer u gaat werven",
        "Zeer specifieke eenmalige search — een unieke board search of confidential search is beter als losse opdracht",
        "Budget-beperkingen — het vaste maandbedrag vergt een doorlopende investering",
      ],
    },
    {
      title: "De business case voor abonnement recruitment",
      content: "Laten we het doorrekenen met een concreet voorbeeld:\n\nTraditioneel model: 4 plaatsingen per jaar × €40.000 [per-placement fee](/nl/kosten-executive-search) = €160.000 per jaar.\n\nAbonnementsmodel: vast maandbedrag dat significant lager ligt dan het totaal van losse opdrachten. Bovendien krijgt u doorlopende [talent pooling](/nl/talent-pool-per-vacature), marktinzichten en strategisch advies als onderdeel van het abonnement.\n\nDe besparing is doorgaans 20-40% ten opzichte van traditionele per-placement fees. Dit past binnen een bredere [talent acquisition strategy](/nl/talent-acquisition-strategy).",
    },
  ],
  faqs: [
    { q: "Wat als ik in een maand geen vacatures heb?", a: "Bij een abonnementsmodel werkt het team ook zonder actieve vacature aan uw talent pipeline, marktonderzoek en employer branding. De waarde zit in de continuïteit, niet alleen in de plaatsingen." },
    { q: "Kan ik het abonnement pauzeren?", a: "Wij bieden flexibele contractvormen. Bespreek uw specifieke behoeften met ons team voor een op maat gemaakte oplossing." },
    { q: "Hoeveel bespaar ik met een abonnement?", a: "Gemiddeld 20-40% ten opzichte van traditionele per-placement fees, afhankelijk van het volume en de complexiteit van de posities." },
  ],
  pillarLink: { label: "Terug naar Recruitment Operating Model", href: "/nl/diensten/recruitment-operating-model" },
  relatedLinks: [
    { label: "Recruitment-as-a-service", href: "/nl/recruitment-as-a-service" },
    { label: "Talent pool per vacature", href: "/nl/talent-pool-per-vacature" },
    { label: "Kosten executive search", href: "/nl/kosten-executive-search" },
    { label: "Talent acquisition strategy", href: "/nl/talent-acquisition-strategy" },
  ],
};

export default function AbonnementRecruitment() {
  return <SpokePage data={data} />;
}

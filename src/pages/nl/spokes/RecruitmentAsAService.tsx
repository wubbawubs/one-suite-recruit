import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Recruitment-as-a-Service voor Executives | OneTime Recruit",
  metaDescription: "Recruitment-as-a-service (RaaS) voor executives: hoe een abonnementsmodel uw executive recruitment structureel verbetert en goedkoper maakt.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Recruitment Operating Model", href: "/nl/recruitment-operating-model" },
    { label: "Recruitment-as-a-Service" },
  ],
  heroLabel: "Recruitment Model",
  heroTitle: "Recruitment-as-a-service",
  heroHighlight: "voor executives",
  heroDescription: "Van ad-hoc search naar structurele recruitment capaciteit. Ontdek hoe RaaS werkt op executive niveau.",
  sections: [
    {
      title: "Wat is Recruitment-as-a-Service?",
      content: "Recruitment-as-a-Service (RaaS) is een model waarbij uw organisatie doorlopend toegang heeft tot professionele recruitment capaciteit via een [abonnement](/nl/abonnement-recruitment). In plaats van per vacature een bureau in te schakelen, heeft u een dedicated team dat continu werkt aan uw [talent pipeline](/nl/talent-pool-per-vacature).\n\nBij OneTime Recruit bieden wij RaaS specifiek voor executive en senior posities. U betaalt een vast maandbedrag en krijgt toegang tot search, [assessment](/nl/assessment-inzetten), talent pooling en strategisch advies.",
    },
    {
      title: "Hoe verschilt RaaS van traditionele search?",
      content: "De verschillen zijn significant:",
      items: [
        "Kostenmodel — vast maandbedrag versus per-placement fees",
        "Continuïteit — doorlopende samenwerking versus ad-hoc opdrachten",
        "Proactiviteit — continu talent in kaart brengen versus reactief zoeken bij vacature",
        "Kennisopbouw — het team kent uw organisatie diepgaand versus steeds opnieuw opbouwen",
        "Flexibiliteit — op- en afschalen naar behoefte versus vaste opdrachten",
      ],
    },
    {
      title: "Voor wie is RaaS geschikt?",
      content: "RaaS is het meest effectief voor organisaties die structureel senior talent werven:",
      items: [
        "Organisaties met 3+ executive/senior plaatsingen per jaar",
        "Snelgroeiende bedrijven die continu leiderschapscapaciteit nodig hebben",
        "Organisaties die hun recruitment willen professionaliseren",
        "Bedrijven die voorspelbare recruitmentkosten willen",
        "Organisaties die strategische workforce planning integreren",
      ],
    },
    {
      title: "Wat is inbegrepen bij OneTime Recruit RaaS?",
      content: "Ons RaaS-abonnement omvat het volledige spectrum van executive recruitment:",
      items: [
        "Executive search — proactieve identificatie en benadering van kandidaten",
        "Assessment & selectie — STAR-interviews, cultuurfit-analyse, referentiechecks",
        "Talent pool management — opbouw en onderhoud van uw executive talent pools",
        "Marktinzichten — kwartaalrapportages over talent beschikbaarheid en salaristrendss",
        "Strategisch advies — sparring over organisatie-inrichting en leiderschapsontwikkeling",
        "Onboarding support — 100-dagen begeleiding bij elke plaatsing",
      ],
    },
  ],
  faqs: [
    { q: "Wat kost Recruitment-as-a-Service?", a: "De kosten hangen af van het verwachte volume en de complexiteit van de posities. Neem contact op voor een offerte op maat. In de meeste gevallen is RaaS significant goedkoper dan per-placement fees bij 3+ plaatsingen per jaar." },
    { q: "Hoe lang duurt een RaaS-contract?", a: "Ons standaard RaaS-abonnement loopt per jaar met maandelijkse facturatie. We bieden ook kortere pilotperiodes aan voor organisaties die het model willen testen." },
    { q: "Kan ik RaaS combineren met losse search-opdrachten?", a: "Ja. Sommige klanten gebruiken RaaS voor hun reguliere executive search en schakelen ons aanvullend in voor specifieke, complexe opdrachten zoals board search of confidential search." },
  ],
  pillarLink: { label: "Terug naar Recruitment Operating Model", href: "/nl/recruitment-operating-model" },
  relatedLinks: [
    { label: "Abonnement recruitment", href: "/nl/abonnement-recruitment" },
    { label: "Talent pool per vacature", href: "/nl/talent-pool-per-vacature" },
    { label: "Kosten executive search", href: "/nl/kosten-executive-search" },
    { label: "Employer brand voor senior talent", href: "/nl/employer-brand-senior-talent" },
  ],
};

export default function RecruitmentAsAService() {
  return <SpokePage data={data} />;
}

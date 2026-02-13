import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Operations & Supply Chain Leadership | OneTime Recruit",
  metaDescription: "Executive search voor operations en supply chain leiders. COO, VP Operations en supply chain directors vinden voor uw organisatie.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Industries", href: "/nl/industries" },
    { label: "Operations & Supply Chain" },
  ],
  heroLabel: "Industries",
  heroTitle: "Operations &",
  heroHighlight: "supply chain leadership",
  heroDescription: "Operationeel leiderschap is de ruggengraat van elke organisatie. Zo vindt u de COO of supply chain director die uw operatie transformeert.",
  sections: [
    {
      title: "De strategische rol van operations leadership",
      content: "Operations en supply chain leiderschap heeft een enorme transformatie doorgemaakt. Waar de COO traditioneel een operationeel uitvoerder was, is de moderne operations leider een strategische partner die direct bijdraagt aan winstgevendheid, klanttevredenheid en concurrentiekracht.\n\nDe recente supply chain verstoringen, ESG-vereisten en digitalisering hebben het profiel van de operations leider fundamenteel veranderd.",
    },
    {
      title: "Posities die wij invullen",
      content: "Wij werven senior leiders voor operations en supply chain functies:",
      items: [
        "COO / Chief Operating Officer — overall operationeel leiderschap",
        "VP Supply Chain — end-to-end supply chain management",
        "VP Manufacturing / Production — productie-optimalisatie, lean, six sigma",
        "VP Logistics / Distribution — warehousing, transport, last-mile",
        "VP Procurement / CPO — strategische inkoop, supplier management",
        "VP Quality — kwaliteitsmanagement, certificeringen, process excellence",
      ],
    },
    {
      title: "Competenties voor modern operations leiderschap",
      content: "De moderne operations leider combineert traditionele operational excellence met nieuwe competenties:",
      items: [
        "Digitale transformatie — Industry 4.0, IoT, predictive analytics",
        "Supply chain resilience — risicobeheersing, diversificatie, nearshoring",
        "Duurzaamheid — circulaire supply chains, Scope 3 reductie, ESG reporting",
        "Data-driven operations — real-time dashboards, process mining, AI/ML toepassingen",
        "Change management — lean transformatie, cultuurverandering, cross-functioneel leiderschap",
      ],
    },
    {
      title: "Sector-specifieke operations uitdagingen",
      content: "Operations leiderschap verschilt sterk per sector:\n\nIn manufacturing draait het om productie-efficiëntie, kwaliteit en veiligheid. In retail en e-commerce om supply chain snelheid, last-mile delivery en omnichannel operations. In healthcare om patiëntveiligheid, compliance en capaciteitsmanagement. En in tech om schaalbare operations die meegroeien met de business.\n\nWij passen onze search aan op de specifieke uitdagingen van uw sector.",
    },
  ],
  faqs: [
    { q: "Wat is het verschil tussen een COO en een VP Operations?", a: "De COO is doorgaans een board-level positie met brede operationele verantwoordelijkheid. Een VP Operations richt zich op een specifiek operationeel domein (productie, logistiek, supply chain). In kleinere organisaties worden deze rollen soms gecombineerd." },
    { q: "Is supply chain ervaring cruciaal voor een COO?", a: "Niet altijd. Afhankelijk van de organisatie kan de COO breder verantwoordelijk zijn dan alleen supply chain. In productie- en logistieke bedrijven is supply chain expertise wel essentieel." },
    { q: "Hoe schaars zijn operations leiders?", a: "Zeer schaars, vooral leiders die traditionele operational excellence combineren met digitale transformatie-ervaring. Dit maakt executive search de aangewezen methode." },
  ],
  pillarLink: { label: "Terug naar Industries", href: "/nl/industries" },
  relatedLinks: [
    { label: "Aviation recruitment", href: "/nl/aviation-recruitment" },
    { label: "Finance & risk compliance", href: "/nl/finance-risk-compliance" },
    { label: "Interim management", href: "/nl/interim-management" },
    { label: "Talent pool per vacature", href: "/nl/talent-pool-per-vacature" },
  ],
};

export default function OperationsSupplyChain() {
  return <SpokePage data={data} />;
}

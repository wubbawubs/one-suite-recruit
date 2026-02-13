import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "CHRO Recruitment: HR Leadership voor Transformatie | OneTime Recruit",
  metaDescription: "CHRO recruitment: hoe u de juiste HR leider vindt voor organisatietransformatie. Assessment criteria, trends en best practices.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "C-level Recruitment", href: "/nl/c-level-recruitment" },
    { label: "CHRO Recruitment" },
  ],
  heroLabel: "C-level Recruitment",
  heroTitle: "CHRO recruitment:",
  heroHighlight: "HR leadership voor transformatie",
  heroDescription: "De CHRO is de architect van organisatiecultuur en talent strategie. Zo vindt u de juiste people-leider.",
  sections: [
    {
      title: "De strategische rol van de moderne CHRO",
      content: "De Chief Human Resources Officer is geëvolueerd van een operationele HR-manager naar een strategische board-level leider. De moderne CHRO is verantwoordelijk voor talent strategie, organisatieontwikkeling, cultuurverandering en employee experience.\n\nIn tijden van arbeidskrapte, remote werk en generatieverschuivingen is de CHRO belangrijker dan ooit. Organisaties die investeren in sterk people-leiderschap presteren aantoonbaar beter op retentie, productiviteit en innovatie.",
    },
    {
      title: "Wanneer een CHRO zoeken?",
      content: "Een CHRO search is relevant in de volgende situaties:",
      items: [
        "Snelle groei — van 100 naar 500+ medewerkers vereist professionalisering van HR",
        "Cultuurverandering — fusie, overname of strategische heroriëntatie",
        "Talent crisis — hoog verloop, moeilijk werven, engagement-problemen",
        "Digitale transformatie — de people-kant van organisatieverandering",
        "Board-level HR — de organisatie wil HR een strategische stem geven",
      ],
    },
    {
      title: "Assessment criteria voor CHRO's",
      content: "Bij CHRO recruitment evalueren wij op de volgende dimensies:",
      items: [
        "Strategisch partnering — vermogen om als gelijkwaardig board-lid te opereren",
        "Organisatieontwikkeling — ervaring met structuurverandering en cultuurprogramma's",
        "Talent management — track record in opbouwen van talent pipelines en succession planning",
        "Data & analytics — gebruik van people analytics voor evidence-based HR",
        "Change management — ervaring met grootschalige verandertrajecten",
        "Employer branding — vermogen om de organisatie als aantrekkelijke werkgever te positioneren",
      ],
    },
    {
      title: "CHRO trends in Nederland",
      content: "De Nederlandse HR-markt kent een aantal belangrijke trends die het CHRO-profiel beïnvloeden:\n\nDe hybride werkplek vereist een CHRO die balanceert tussen flexibiliteit en verbinding. De krappe arbeidsmarkt vraagt om innovatieve retentie- en wervingsstrategieën. En de toenemende focus op ESG en diversiteit maakt de CHRO een sleutelspeler in duurzaam organisatiebeleid.\n\nDe beste CHRO-kandidaten combineren deze hedendaagse uitdagingen met een stevig fundament in klassiek HR-vakmanschap.",
    },
  ],
  faqs: [
    { q: "Wat is het verschil tussen een CHRO en een HR Director?", a: "Een CHRO opereert op board-level en is verantwoordelijk voor de strategische people-agenda. Een HR Director stuurt het HR-team aan en implementeert het HR-beleid. In kleinere organisaties worden deze rollen soms gecombineerd." },
    { q: "Moet een CHRO HR-achtergrond hebben?", a: "Doorgaans wel, maar steeds vaker komen CHRO's uit aangrenzende disciplines zoals organisatieadvies, change management of zelfs operationeel management. De sleutel is strategisch vermogen en people-focus." },
    { q: "Hoe lang duurt CHRO recruitment?", a: "Gemiddeld 4-8 weken. De shortlist is bij OneTime Recruit doorgaans na 18 werkdagen gereed." },
  ],
  pillarLink: { label: "Terug naar C-level Recruitment", href: "/nl/c-level-recruitment" },
  relatedLinks: [
    { label: "CEO recruitment", href: "/nl/ceo-recruitment" },
    { label: "Board & commissarissen search", href: "/nl/board-commissarissen-search" },
    { label: "Leadership retention", href: "/nl/leadership-retention" },
    { label: "Culture fit vs culture add", href: "/nl/culture-fit-vs-culture-add" },
  ],
};

export default function CHRORecruitment() {
  return <SpokePage data={data} />;
}

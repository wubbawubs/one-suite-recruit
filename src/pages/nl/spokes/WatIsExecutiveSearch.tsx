import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Wat is Executive Search? Definitie, Proces & Methode | OneTime Recruit",
  metaDescription: "Wat is executive search precies? Leer alles over de definitie, het proces, de methode en wanneer u executive search inzet voor uw organisatie.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Executive Search", href: "/nl/executive-search" },
    { label: "Wat is Executive Search?" },
  ],
  heroLabel: "Executive Search",
  heroTitle: "Wat is executive search?",
  heroHighlight: "Definitie & proces",
  heroDescription: "Een diepgaande uitleg over executive search: wat het is, hoe het werkt, en waarom het verschilt van traditionele werving.",
  sections: [
    {
      title: "Definitie van executive search",
      content: "Executive search is een gespecialiseerde vorm van werving en selectie die zich richt op het identificeren, benaderen en plaatsen van senior leiders en bestuurders. Anders dan traditionele recruitment — waarbij vacatures worden gepubliceerd en gewacht wordt op sollicitanten — is executive search een proactief, doelgericht proces.\n\nDe term 'executive search' verwijst naar het actief zoeken naar executives: C-level bestuurders, directieleden, VP's en andere senior leiderschapsposities. Het wordt ook wel 'retained search' genoemd, omdat de opdrachtgever een exclusieve overeenkomst aangaat met het searchbureau.",
    },
    {
      title: "Hoe werkt het executive search proces?",
      content: "Een professioneel executive search traject doorloopt vijf duidelijke fasen. Elk stap is ontworpen om de kwaliteit van de uiteindelijke match te maximaliseren.",
      items: [
        "Intake & profieldefinitie — Diepgaand begrip van de organisatie, cultuur en de specifieke eisen van de rol",
        "Marktverkenning & sourcing — Proactieve identificatie van potentiële kandidaten via netwerk, research en discrete outreach",
        "Assessment & evaluatie — Competentie-based interviews, leiderschapsevaluaties en cultuurfit-analyse",
        "Shortlist & presentatie — Presentatie van 3-5 gekwalificeerde kandidaten met uitgebreide profielrapporten",
        "Selectie, plaatsing & onboarding — Begeleiding bij de selectie, contractonderhandeling en eerste 100 dagen",
      ],
    },
    {
      title: "Wanneer executive search inzetten?",
      content: "Executive search is de juiste keuze wanneer u op zoek bent naar leiders die strategische impact hebben op uw organisatie. Het is bijzonder effectief in de volgende situaties:",
      items: [
        "C-level en directieposities waar discretie essentieel is",
        "Rollen waarvoor passieve kandidaten (niet actief zoekend) benaderd moeten worden",
        "Strategische transformaties waarbij specifiek leiderschapsprofiel vereist is",
        "Schaarse profielen in nichesectoren zoals aviation, defence of deep tech",
        "Vertrouwelijke vervangingen waarbij de huidige functiehouder nog in positie is",
      ],
    },
    {
      title: "De meerwaarde van executive search",
      content: "In tegenstelling tot volume-recruitment richt executive search zich op kwaliteit boven kwantiteit. Een gespecialiseerd searchbureau zoals OneTime Recruit biedt:\n\nToegang tot passieve kandidaten die niet vindbaar zijn via vacaturesites of LinkedIn. Diepgaande assessment op basis van bewezen methodieken zoals STAR-interviews. Een dedicated talent pool die u behoudt, ook na de plaatsing. En transparante vaste tarieven in plaats van onvoorspelbare procentuele fees.",
    },
  ],
  faqs: [
    { q: "Wat is het verschil tussen executive search en recruitment?", a: "Recruitment is doorgaans reactief: vacatures publiceren en wachten op sollicitanten. Executive search is proactief: gericht zoeken naar specifieke kandidaten, ook als zij niet actief op zoek zijn. Executive search richt zich op senior en strategische posities." },
    { q: "Is executive search alleen voor grote bedrijven?", a: "Nee. Executive search is waardevol voor elke organisatie die een strategische leiderschapspositie wil invullen. Ook scale-ups en middelgrote bedrijven maken steeds vaker gebruik van executive search, vooral bij groei of transformatie." },
    { q: "Hoe lang duurt een executive search traject?", a: "Bij OneTime Recruit is de gemiddelde doorlooptijd 18 werkdagen van intake tot shortlist. De totale plaatsingstijd inclusief selectie is doorgaans 4-8 weken." },
  ],
  pillarLink: { label: "Terug naar Executive Search", href: "/nl/executive-search" },
  relatedLinks: [
    { label: "Executive search vs headhunter", href: "/nl/executive-search-vs-headhunter" },
    { label: "Kosten executive search", href: "/nl/kosten-executive-search" },
    { label: "CEO Recruitment", href: "/nl/ceo-recruitment" },
    { label: "Assessment inzetten", href: "/nl/assessment-inzetten" },
  ],
};

export default function WatIsExecutiveSearch() {
  return <SpokePage data={data} />;
}

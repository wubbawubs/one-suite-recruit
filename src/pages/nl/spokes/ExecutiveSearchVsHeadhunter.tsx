import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Executive Search vs Headhunter vs Werving & Selectie | OneTime Recruit",
  metaDescription: "Wat is het verschil tussen executive search, een headhunter en werving & selectie? Vergelijk kosten, methode en resultaten in deze complete gids.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Executive Search", href: "/nl/executive-search" },
    { label: "Executive Search vs Headhunter" },
  ],
  heroLabel: "Vergelijking",
  heroTitle: "Executive search vs headhunter",
  heroHighlight: "vs werving & selectie",
  heroDescription: "Drie veelgebruikte termen, drie verschillende aanpakken. Ontdek welke methode het best past bij uw situatie.",
  sections: [
    {
      title: "De drie methoden vergeleken",
      content: "In de recruitmentwereld worden de termen 'executive search', 'headhunter' en 'werving & selectie' vaak door elkaar gebruikt. Toch zijn er wezenlijke verschillen in aanpak, kosten en resultaat.\n\nExecutive search is een gestructureerd, methodisch proces voor senior leiderschapsposities. Een headhunter werkt vaak individueel en reactiever. Werving & selectie is de breedste categorie en richt zich op het vullen van vacatures op alle niveaus.",
    },
    {
      title: "Executive search: strategisch en exclusief",
      content: "Executive search kenmerkt zich door een exclusieve, retained opdracht. Het bureau werkt uitsluitend voor de opdrachtgever en zet een volledig researchteam in.",
      items: [
        "Exclusieve opdracht — het bureau werkt niet tegelijkertijd voor concurrenten",
        "Proactieve marktbenadering — ook passieve kandidaten worden benaderd",
        "Uitgebreide assessment — STAR-interviews, cultuurfit-analyse, referentiechecks",
        "Garantieregeling — kosteloze herstart als de match niet werkt",
        "Vast tarief of abonnement — geen onvoorspelbare procentuele fees",
      ],
    },
    {
      title: "Headhunting: snel en gericht",
      content: "Een headhunter opereert vaak solo of in een klein team. De focus ligt op snelheid en netwerk. Headhunters werken doorgaans op basis van 'no cure, no pay' of een percentage van het jaarsalaris.\n\nHet voordeel: snelheid en flexibiliteit. Het nadeel: minder diepgaande assessment, geen exclusiviteit, en het risico van 'kandidaat-recycling' — dezelfde kandidaten worden aan meerdere opdrachtgevers gepresenteerd.",
    },
    {
      title: "Werving & selectie: breed en volume-gericht",
      content: "Werving & selectie bureaus richten zich op het invullen van vacatures op alle niveaus, van medior tot senior. De aanpak is doorgaans reactiever: vacatures worden gepubliceerd, kandidaten solliciteren, en het bureau maakt een voorselectie.\n\nDit werkt uitstekend voor operationele rollen en mid-management. Voor strategische leiderschapsposities mist deze aanpak echter de diepgang en het netwerk dat executive search biedt.",
    },
    {
      title: "Wanneer kiest u voor executive search?",
      content: "Kies voor executive search wanneer het gaat om posities die strategische impact hebben op uw organisatie:",
      items: [
        "C-level, directie of VP-posities",
        "Rollen waarbij discretie essentieel is",
        "Schaarste in de markt — passieve kandidaten moeten actief benaderd worden",
        "Complexe profielen die diepgaande assessment vereisen",
        "Wanneer een mismatch onacceptabele kosten met zich meebrengt",
      ],
    },
  ],
  faqs: [
    { q: "Is een headhunter hetzelfde als executive search?", a: "Nee. Een headhunter werkt vaak op basis van no cure, no pay en presenteert kandidaten aan meerdere partijen tegelijk. Executive search is een exclusieve, methodische opdracht met diepgaande assessment en garantie." },
    { q: "Wat kost executive search vergeleken met een headhunter?", a: "Traditionele headhunters rekenen 20-30% van het jaarsalaris. Executive search bureaus hanteren vergelijkbare of hogere tarieven, maar OneTime Recruit werkt met vaste tarieven of een abonnementsmodel — ongeacht het salarisniveau." },
    { q: "Kan ik werving & selectie gebruiken voor directieposities?", a: "Dat kan, maar het is minder effectief. Voor directieposities is proactieve marktbenadering cruciaal, omdat de beste kandidaten niet actief solliciteren. Executive search biedt de diepgang en het netwerk die nodig zijn." },
  ],
  pillarLink: { label: "Terug naar Executive Search", href: "/nl/executive-search" },
  relatedLinks: [
    { label: "Wat is executive search?", href: "/nl/wat-is-executive-search" },
    { label: "Kosten executive search", href: "/nl/kosten-executive-search" },
    { label: "Hoe lang duurt executive search?", href: "/nl/hoe-lang-duurt-executive-search" },
    { label: "Confidential search", href: "/nl/confidential-search" },
  ],
};

export default function ExecutiveSearchVsHeadhunter() {
  return <SpokePage data={data} />;
}

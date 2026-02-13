import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Kosten Executive Search: Retained vs Fixed Fee vs Abonnement | OneTime Recruit",
  metaDescription: "Wat kost executive search in Nederland? Vergelijk retained fee, vaste prijs en abonnementsmodellen. Transparante uitleg zonder verborgen kosten.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Executive Search", href: "/nl/executive-search" },
    { label: "Kosten Executive Search" },
  ],
  heroLabel: "Kosten & tarieven",
  heroTitle: "Wat kost",
  heroHighlight: "executive search?",
  heroDescription: "Een transparant overzicht van de drie veelgebruikte tariefmodellen: retained fee, vaste prijs en abonnement.",
  sections: [
    {
      title: "De drie tariefmodellen",
      content: "In de executive search markt bestaan drie dominante tariefmodellen. Elk model heeft voor- en nadelen, afhankelijk van uw situatie, volume en budgetvoorkeur.",
    },
    {
      title: "1. Retained fee (procentueel)",
      content: "Het traditionele model in executive search. Het bureau ontvangt een percentage van het bruto jaarsalaris van de geplaatste kandidaat, doorgaans 25-35%. De betaling verloopt in drie termijnen: bij start, bij shortlist en bij plaatsing.\n\nVoordeel: het bureau is financieel gecommitteerd aan het traject. Nadeel: de kosten zijn onvoorspelbaar en stijgen mee met het salarisniveau. Bij een jaarsalaris van €200.000 betaalt u al snel €50.000-€70.000.",
    },
    {
      title: "2. Vaste prijs (fixed fee)",
      content: "Bij een fixed fee model betaalt u een vooraf afgesproken vast bedrag, ongeacht het salarisniveau van de kandidaat. Dit biedt maximale transparantie en voorspelbaarheid.\n\nOneTime Recruit werkt standaard met vaste tarieven. U weet vooraf exact wat de investering is, zonder verrassingen achteraf. Dit maakt executive search ook toegankelijk voor organisaties die normaal gesproken de procentuele fees te hoog vinden.",
    },
    {
      title: "3. Abonnementsmodel (recruitment-as-a-service)",
      content: "Het nieuwste model: een maandelijks abonnement dat toegang geeft tot executive search capaciteit. Ideaal voor organisaties die meerdere posities per jaar invullen.\n\nBij een abonnement betaalt u een vast maandbedrag en kunt u doorlopend gebruikmaken van search, assessment en talent pool services. De kosten per plaatsing dalen significant bij hogere volumes.",
      items: [
        "Vast maandbedrag — voorspelbare recruitmentkosten",
        "Onbeperkt gebruik van talent pool en assessment",
        "Lagere kosten per plaatsing bij meerdere posities",
        "Flexibele op- en afschaling",
      ],
    },
    {
      title: "Verborgen kosten bij executive search",
      content: "Let bij het vergelijken van bureaus op verborgen kosten die niet altijd in de offerte staan:",
      items: [
        "Research fees of opstartkosten bovenop het tarief",
        "Reiskosten en onkostenvergoedingen",
        "Kosten voor assessment tools of psychologische tests",
        "Uitgebreide background checks (vaak apart gefactureerd)",
        "Kosten bij voortijdige beëindiging van het contract",
      ],
    },
  ],
  faqs: [
    { q: "Wat kost executive search gemiddeld in Nederland?", a: "Traditionele bureaus rekenen 25-35% van het jaarsalaris. Bij een salaris van €150.000 is dat €37.500-€52.500. OneTime Recruit werkt met vaste tarieven die doorgaans significant lager liggen." },
    { q: "Is een vast tarief goedkoper dan een procentuele fee?", a: "In de meeste gevallen wel, vooral bij hogere salarissen. Bij een vast tarief betaalt u hetzelfde bedrag ongeacht of het jaarsalaris €120.000 of €250.000 is." },
    { q: "Wat is de ROI van executive search?", a: "De kosten van een mis-hire op directieniveau worden geschat op 3-5x het jaarsalaris. Een goede executive search investering voorkomt deze kosten en levert strategische waarde op." },
    { q: "Zijn er verborgen kosten bij OneTime Recruit?", a: "Nee. Ons vaste tarief is all-inclusive: research, assessment, kandidaatbenadering, referentiechecks en onboarding support zijn inbegrepen." },
  ],
  pillarLink: { label: "Terug naar Executive Search", href: "/nl/executive-search" },
  relatedLinks: [
    { label: "Wat is executive search?", href: "/nl/wat-is-executive-search" },
    { label: "Hoe lang duurt executive search?", href: "/nl/hoe-lang-duurt-executive-search" },
    { label: "Abonnement recruitment", href: "/nl/abonnement-recruitment" },
    { label: "Recruitment-as-a-service", href: "/nl/recruitment-as-a-service" },
  ],
};

export default function KostenExecutiveSearch() {
  return <SpokePage data={data} />;
}

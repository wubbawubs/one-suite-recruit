import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Referentiechecks: Best Practices voor Senior Hiring | OneTime Recruit",
  metaDescription: "Referentiechecks bij executive search: best practices, valkuilen en effectieve vragen. Hoe u waardevolle informatie krijgt van referenten.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Assessment & Selectie", href: "/nl/assessment-selectie" },
    { label: "Referentiechecks" },
  ],
  heroLabel: "Assessment & Selectie",
  heroTitle: "Referentiechecks:",
  heroHighlight: "best practices",
  heroDescription: "Referentiechecks zijn een van de meest onderschatte stappen in het selectieproces. Zo haalt u er maximale waarde uit.",
  sections: [
    {
      title: "Waarom referentiechecks cruciaal zijn",
      content: "Referentiechecks bieden informatie die geen enkel interview of assessment kan leveren: de ervaring van mensen die daadwerkelijk met de kandidaat hebben gewerkt. Bij senior posities zijn referentiechecks extra belangrijk omdat de impact van een mis-hire exponentieel groter is.\n\nToch worden referentiechecks vaak als formaliteit afgehandeld — een gemiste kans. Met de juiste aanpak leveren ze cruciale inzichten op over leiderschapsstijl, prestaties en potentiële valkuilen.",
    },
    {
      title: "Wie als referent benaderen?",
      content: "De keuze van referenten bepaalt de kwaliteit van de informatie:",
      items: [
        "Voormalige leidinggevende — inzicht in prestaties, werkethiek en groeipotentieel",
        "Directe rapporteerder — perspectief op leiderschapsstijl en people management",
        "Peer / gelijkwaardige collega — inzicht in samenwerking en horizontale relaties",
        "Board member / commissaris — bij C-level posities: governance en strategisch vermogen",
        "Externe stakeholder (klant/leverancier) — professioneel optreden en reputatie",
      ],
    },
    {
      title: "Effectieve referentievragen",
      content: "Vermijd gesloten vragen. Gebruik open vragen die concrete informatie opleveren:",
      items: [
        "'Wat zijn de drie grootste bijdragen die [naam] heeft geleverd in uw organisatie?'",
        "'In welk type omgeving presteert [naam] het best? En waar minder?'",
        "'Hoe zou u de leiderschapsstijl van [naam] omschrijven?'",
        "'Als u [naam] opnieuw zou aannemen, voor welke rol zou dat zijn?'",
        "'Wat zou u willen dat [naam] anders had gedaan?'",
        "'Hoe ging [naam] om met tegenslag of conflict?'",
      ],
    },
    {
      title: "Veelgemaakte fouten",
      content: "De meest voorkomende fouten bij referentiechecks zijn:",
      items: [
        "Alleen door de kandidaat aangedragen referenten benaderen — deze zijn per definitie positief",
        "Te laat in het proces — referentiechecks achteraf zijn een formaliteit, niet een selectiemiddel",
        "Alleen feitelijke bevestiging vragen (functietitel, periode) zonder inhoudelijke verdieping",
        "Geen cross-referencing — als meerdere referenten hetzelfde patroon benoemen, is dat significant",
        "De referentiecheck delegeren aan een junior medewerker zonder interviewing-ervaring",
      ],
    },
  ],
  faqs: [
    { q: "Hoeveel referenten zijn voldoende?", a: "Wij adviseren minimaal 3-4 referenten voor senior posities, idealiter uit verschillende hoeken: leidinggevende, peer, rapporteerder en externe stakeholder." },
    { q: "Mag ik referenten benaderen zonder toestemming van de kandidaat?", a: "In principe niet. Informeer de kandidaat altijd vooraf welke referenten u wilt benaderen. Bij confidential search worden referentiechecks uitgesteld tot een later stadium." },
    { q: "Wat als een referent negatief is?", a: "Eén negatieve referentie is een signaal, geen oordeel. Kijk naar patronen: als meerdere referenten hetzelfde punt benoemen, is dat een belangrijk datapunt in uw besluitvorming." },
  ],
  pillarLink: { label: "Terug naar Assessment & Selectie", href: "/nl/assessment-selectie" },
  relatedLinks: [
    { label: "STAR interview guide", href: "/nl/star-interview-guide" },
    { label: "Assessment inzetten", href: "/nl/assessment-inzetten" },
    { label: "Confidential search", href: "/nl/confidential-search" },
    { label: "Leadership retention", href: "/nl/leadership-retention" },
  ],
};

export default function Referentiechecks() {
  return <SpokePage data={data} />;
}

import { SpokePage } from "@/components/layout/SpokePage";

const data = {
  metaTitle: "Werving en Selectie voor Executive Posities | OneTime Recruit",
  metaDescription: "Werving en selectie voor executive en senior management posities. Ontdek hoe OneTime Recruit de juiste leiders vindt met bewezen methodiek en vaste tarieven.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Executive Search", href: "/nl/diensten/executive-search" },
    { label: "Werving en Selectie" },
  ],
  heroLabel: "Executive Werving",
  heroTitle: "Werving en selectie voor",
  heroHighlight: "senior leiders",
  heroDescription: "Professionele werving en selectie van executive talent. Van intake tot plaatsing met bewezen assessment, vaste tarieven en een dedicated talent pool.",
  sections: [
    {
      title: "Wat is executive werving en selectie?",
      content: "Werving en selectie op executive niveau verschilt fundamenteel van reguliere recruitment. Het gaat niet om het plaatsen van vacatures en wachten op sollicitaties — het gaat om het proactief identificeren, benaderen en beoordelen van leiders die het verschil maken.\n\nBij OneTime Recruit combineren wij de snelheid van modern recruitment met de diepgang van [executive search](/nl/wat-is-executive-search). Onze consultants hebben gemiddeld 15+ jaar ervaring in het vinden van [C-level](/nl/diensten/c-level-recruitment), [directie](/nl/directie-werving) en VP-posities in Nederland.",
      items: [
        "Proactieve search in ons netwerk van 7.500+ executives",
        "Gestructureerde STAR-interviews voor objectieve beoordeling",
        "Cultuurfit-analyse en leiderschapspotentieel-evaluatie",
        "Gemiddeld 18 werkdagen van intake tot shortlist",
      ],
    },
    {
      title: "Werving en selectie vs. executive search: wat is het verschil?",
      content: "Traditionele werving en selectie richt zich vaak op het matchen van cv's met vacatures. Executive search gaat verder: het is een strategisch proces waarbij passieve kandidaten — leiders die niet actief zoeken — worden geïdentificeerd en benaderd.\n\nOneTime Recruit biedt het beste van beide werelden: de toegankelijkheid en snelheid van werving en selectie, gecombineerd met de methodiek en het netwerk van executive search. Met vaste tarieven in plaats van procentuele fees.",
    },
    {
      title: "Ons werving en selectie proces",
      content: "Ons proces is ontworpen voor snelheid zonder concessies aan kwaliteit. Elke stap is gestandaardiseerd, meetbaar en transparant.",
      items: [
        "Dag 1-2: Diepgaande intake en profieldefinitie",
        "Dag 3-8: Marktverkenning, sourcing en discrete outreach",
        "Dag 9-14: Assessment, STAR-interviews en cultuurfit-analyse",
        "Dag 15-18: Shortlist presentatie met gedetailleerde kandidaatprofielen",
        "Na selectie: Onderhandeling, contract en 100-dagen onboarding",
      ],
    },
  ],
  faqs: [
    { q: "Wat kost werving en selectie bij OneTime Recruit?", a: "Wij werken met transparante vaste tarieven, ongeacht het salarisniveau van de kandidaat. Geen procentuele fees of verborgen kosten. Neem contact op voor een offerte op maat." },
    { q: "Voor welke functies is jullie werving en selectie geschikt?", a: "Wij specialiseren in C-level, directie, VP en senior management posities. Zowel vaste aanstellingen als interim opdrachten in alle sectoren." },
    { q: "Hoe snel kunnen jullie een shortlist leveren?", a: "Gemiddeld 18 werkdagen van intake tot shortlist. Bij urgente vacatures kunnen wij het proces versnellen tot 10 werkdagen." },
  ],
  pillarLink: { label: "Terug naar Executive Search", href: "/nl/diensten/executive-search" },
  relatedLinks: [
    { label: "Executive Search vs. Headhunter", href: "/nl/executive-search-vs-headhunter" },
    { label: "Kosten Executive Search", href: "/nl/kosten-executive-search" },
    { label: "Headhunter Nederland", href: "/nl/headhunter-nederland" },
    { label: "Talent Pool per Vacature", href: "/nl/talent-pool-per-vacature" },
  ],
  ctaTitle: "Op zoek naar een senior leider?",
  ctaDescription: "Plan een vrijblijvend gesprek over uw werving- en selectiebehoefte.",
};

export default function WervingEnSelectie() {
  return <SpokePage data={data} />;
}
import { SpokePage } from "@/components/layout/SpokePage";

const data = {
  metaTitle: "Directie Werving: Recruitment voor Directieposities | OneTime Recruit",
  metaDescription: "Directie werving en recruitment voor managing directors, directeuren en senior management. Bewezen methodiek, vaste tarieven, gemiddeld 18 dagen doorlooptijd.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "C-level Recruitment", href: "/nl/c-level-recruitment" },
    { label: "Directie Werving" },
  ],
  heroLabel: "Directie Recruitment",
  heroTitle: "Directie werving voor",
  heroHighlight: "strategische impact",
  heroDescription: "Het vinden van de juiste directeur is een van de meest impactvolle beslissingen voor uw organisatie. Wij maken het meetbaar, voorspelbaar en transparant.",
  sections: [
    {
      title: "Wat maakt directie werving anders?",
      content: "Directie werving verschilt fundamenteel van reguliere recruitment. De kandidatenpool is klein en exclusief. De impact van een verkeerde keuze is enorm — niet alleen financieel, maar ook op moraal, strategie en executiesnelheid.\n\nBij OneTime Recruit behandelen wij elke directie search als een strategisch project. Wij beginnen met een diepgaand begrip van uw organisatie: de cultuur, de uitdagingen, de ambitie en het leiderschapsprofiel dat hierbij past. Pas dan starten wij de search.",
      items: [
        "Managing Directors en Algemeen Directeuren",
        "Operationeel Directeuren en COO's",
        "Commercieel Directeuren en Sales Directors",
        "Financieel Directeuren en Finance Directors",
        "HR Directeuren en People Directors",
        "Divisie- en Business Unit Directors",
      ],
    },
    {
      title: "Ons directie werving proces",
      content: "Ons proces is ontworpen voor de specifieke eisen van directie werving: discretie, snelheid en grondigheid. Elke stap is gestandaardiseerd maar flexibel genoeg om aan te passen aan uw specifieke situatie.\n\nWij werken met vaste tarieven — geen procentuele fees op basis van het salaris. Dit elimineert de perverse prikkel om het hoogste salaris te adviseren en zorgt voor volledige alignment tussen ons advies en uw belang.",
    },
    {
      title: "Directie werving in specifieke sectoren",
      content: "Sectorkennis maakt het verschil bij directie werving. Een directeur in de luchtvaart opereert in een fundamenteel andere context dan een directeur in SaaS. Wij specialiseren in Aviation, Defence & High-Tech, SaaS/IT, Finance en Operations — en begrijpen de specifieke leiderschapsuitdagingen in elke sector.\n\nDit vertaalt zich in relevantere shortlists, betere matches en hogere retentie na plaatsing.",
    },
  ],
  faqs: [
    { q: "Wat kost directie werving?", a: "Wij werken met transparante vaste tarieven, ongeacht het salarisniveau van de directeur. Neem contact op voor een offerte op maat." },
    { q: "Hoe lang duurt directie werving gemiddeld?", a: "Gemiddeld 18 werkdagen van intake tot shortlist. De totale doorlooptijd inclusief selectie en plaatsing is doorgaans 4-8 weken." },
    { q: "Bieden jullie ook interim directieleden?", a: "Ja. Wij kunnen parallel aan een permanente search een interim directeur presenteren die direct start. Beide trajecten onder één aanspreekpunt." },
  ],
  pillarLink: { label: "Terug naar C-level Recruitment", href: "/nl/c-level-recruitment" },
  relatedLinks: [
    { label: "CEO Recruitment", href: "/nl/ceo-recruitment" },
    { label: "Interim Management", href: "/nl/interim-management" },
    { label: "Assessment Inzetten", href: "/nl/assessment-inzetten" },
    { label: "Industries", href: "/nl/industries" },
  ],
  ctaTitle: "Op zoek naar een directielid?",
  ctaDescription: "Plan een vrijblijvend gesprek over uw directie wervingsbehoefte.",
};

export default function DirectieWerving() {
  return <SpokePage data={data} />;
}
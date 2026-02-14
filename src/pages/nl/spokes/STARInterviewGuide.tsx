import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "STAR Interview Guide voor Hiring Managers | OneTime Recruit",
  metaDescription: "De complete STAR interview guide voor hiring managers. Leer hoe u gestructureerde competentie-interviews afneemt voor betere hiring decisions.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Assessment & Selectie", href: "/nl/assessment-selectie" },
    { label: "STAR Interview Guide" },
  ],
  heroLabel: "Assessment & Selectie",
  heroTitle: "STAR interview guide",
  heroHighlight: "voor hiring managers",
  heroDescription: "De bewezen methode voor gestructureerde competentie-interviews. Verhoog de voorspellende waarde van uw sollicitatiegesprekken.",
  sections: [
    {
      title: "Wat is de STAR-methode?",
      content: "STAR staat voor Situatie, Taak, Actie en Resultaat. Het is een gestructureerde interviewmethode die kandidaten vraagt om concrete voorbeelden te geven uit hun werkervaring. Het is een essentieel onderdeel van elk [assessment](/nl/assessment-inzetten) traject.\n\nDoor te focussen op specifieke situaties uit het verleden, voorspelt de STAR-methode toekomstig gedrag beter dan traditionele sollicitatiegesprekken. Onderzoek toont aan dat gestructureerde interviews 2x zo voorspellend zijn als ongestructureerde gesprekken. In combinatie met [referentiechecks](/nl/referentiechecks) levert dit de hoogste voorspellende waarde op.",
    },
    {
      title: "De vier elementen uitgelegd",
      content: "Elk element van de STAR-methode levert specifieke informatie op:",
      items: [
        "Situatie — Wat was de context? Beschrijf de achtergrond en omstandigheden",
        "Taak — Wat was uw specifieke verantwoordelijkheid of opdracht in die situatie?",
        "Actie — Wat heeft u concreet gedaan? Welke stappen heeft u ondernomen?",
        "Resultaat — Wat was het meetbare resultaat? Wat heeft u bereikt of geleerd?",
      ],
    },
    {
      title: "Voorbeeldvragen per competentie",
      content: "Hier volgen effectieve STAR-vragen per leiderschapscompetentie:",
      items: [
        "Strategisch denken: 'Beschrijf een situatie waarin u de strategische koers van uw organisatie heeft bijgestuurd.'",
        "Change management: 'Geef een voorbeeld van een grootschalige verandering die u heeft geleid. Wat was het resultaat?'",
        "Stakeholder management: 'Vertel over een situatie waarin u tegenstrijdige belangen moest managen.'",
        "Crisis management: 'Beschrijf een kritieke situatie waarin u onder grote druk moest handelen.'",
        "Team building: 'Geef een voorbeeld van hoe u een onderpresterend team heeft getransformeerd.'",
      ],
    },
    {
      title: "Tips voor effectieve STAR-interviews",
      content: "Om het maximale uit STAR-interviews te halen, zijn de volgende tips essentieel:",
      items: [
        "Doorvragen is cruciaal — als de kandidaat vaag blijft, vraag om specifieke details",
        "Focus op 'ik' niet 'wij' — wat heeft de kandidaat zelf gedaan?",
        "Gebruik dezelfde vragen voor alle kandidaten — dit maakt vergelijking mogelijk",
        "Noteer antwoorden gestructureerd — gebruik een scorecard per competentie",
        "Vermijd hypothetische vragen — 'Wat zou u doen als...' levert minder betrouwbare antwoorden",
        "Plan minimaal 60 minuten per STAR-interview voor voldoende diepgang",
      ],
    },
    {
      title: "Veelgemaakte fouten",
      content: "De meest voorkomende fouten bij STAR-interviews zijn:",
      items: [
        "Te snel tevreden zijn met oppervlakkige antwoorden",
        "De kandidaat hypothetisch laten antwoorden in plaats van concreet",
        "Onvoldoende doorvragen op het Resultaat-element",
        "Geen scorecard gebruiken, waardoor vergelijking onmogelijk wordt",
        "Het interview te kort plannen waardoor er geen tijd is voor verdieping",
      ],
    },
  ],
  faqs: [
    { q: "Is de STAR-methode geschikt voor alle functies?", a: "Ja, maar de methode is het meest waardevol voor senior posities waar leiderschap, strategisch denken en complexe besluitvorming cruciaal zijn." },
    { q: "Hoeveel STAR-vragen moet ik stellen per interview?", a: "Voor een 60-minuten interview zijn 4-6 diepgaande STAR-vragen optimaal. Kwaliteit gaat boven kwantiteit." },
    { q: "Kan een kandidaat zich voorbereiden op STAR-vragen?", a: "Ja, en dat is positief. Een goed voorbereide kandidaat geeft concretere antwoorden. De kracht van STAR zit in het doorvragen naar specifieke details die niet 'verzonnen' kunnen worden." },
  ],
  pillarLink: { label: "Terug naar Assessment & Selectie", href: "/nl/assessment-selectie" },
  relatedLinks: [
    { label: "Assessment inzetten", href: "/nl/assessment-inzetten" },
    { label: "Referentiechecks", href: "/nl/referentiechecks" },
    { label: "CEO recruitment", href: "/nl/ceo-recruitment" },
    { label: "Onboarding executives", href: "/nl/onboarding-executives" },
  ],
};

export default function STARInterviewGuide() {
  return <SpokePage data={data} />;
}

import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Onboarding Executives: Het 90-Dagen Plan | OneTime Recruit",
  metaDescription: "Executive onboarding: het 90-dagen plan voor een succesvolle start. Hoe u nieuwe leiders effectief integreert en versnelt.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Employer Branding & Retention", href: "/nl/employer-branding-retention" },
    { label: "Onboarding Executives" },
  ],
  heroLabel: "Employer Branding",
  heroTitle: "Onboarding executives:",
  heroHighlight: "het 90-dagen plan",
  heroDescription: "De eerste 90 dagen bepalen het succes van een nieuwe leider. Een gestructureerd onboardingplan is essentieel.",
  sections: [
    {
      title: "Waarom executive onboarding anders is",
      content: "De onboarding van een executive verschilt fundamenteel van het inwerken van een medewerker. Een nieuwe leider moet niet alleen de organisatie leren kennen, maar ook vertrouwen opbouwen, stakeholders alignen en snel impact tonen — alles tegelijk.\n\n40% van executives die binnen 18 maanden falen, wijst gebrekkige onboarding aan als belangrijkste oorzaak. Dit is een van de belangrijkste oorzaken van slechte [leadership retention](/nl/leadership-retention). Een gestructureerd 90-dagen plan reduceert dit risico drastisch.",
    },
    {
      title: "Fase 1: Dag 1-30 — Observeren & begrijpen",
      content: "De eerste maand draait om luisteren, leren en relaties bouwen:",
      items: [
        "Stakeholder mapping — wie zijn de key spelers en wat zijn hun verwachtingen?",
        "Cultuur absorberen — hoe werkt de organisatie écht, voorbij de officiële structuur?",
        "Quick wins identificeren — welke problemen kunt u snel oplossen voor early credibility?",
        "Team assessment — wat is de kwaliteit en dynamiek van uw directe team?",
        "Business deep dive — financials, strategie, marktpositie, concurrentie",
      ],
    },
    {
      title: "Fase 2: Dag 31-60 — Plannen & alignen",
      content: "De tweede maand is voor strategievorming en alignment:",
      items: [
        "100-dagen plan communiceren — deel uw visie en prioriteiten met stakeholders",
        "Team alignment — bespreek rolverdeling, verwachtingen en werkafspraken",
        "Board/directie updates — rapporteer eerste bevindingen en plannen",
        "Procesoptimalisaties — implementeer de quick wins uit fase 1",
        "Netwerk uitbreiden — externe stakeholders, klanten, partners ontmoeten",
      ],
    },
    {
      title: "Fase 3: Dag 61-90 — Executeren & accelereren",
      content: "De derde maand draait om het leveren van resultaten:",
      items: [
        "Strategische initiatieven lanceren — start met de belangrijkste veranderprojecten",
        "Team-aanpassingen — eventueel personele wijzigingen doorvoeren",
        "KPI's vaststellen — meetbare doelen voor de komende 6-12 maanden",
        "Feedback loops — formeel en informeel feedback verzamelen en verwerken",
        "Coaching — eventueel een executive coach inschakelen voor reflectie en versnelling",
      ],
    },
    {
      title: "De rol van de organisatie",
      content: "Succesvolle executive onboarding is een gedeelde verantwoordelijkheid. De organisatie speelt een cruciale rol:\n\nZorg voor een duidelijk mandaat en verwachtingsmanagement vooraf. Wijs een buddy of mentor aan op gelijk niveau. Plan introductiegesprekken met alle key stakeholders. En geef de nieuwe leider de ruimte om te leren — net als bij de [cultuurfit-evaluatie](/nl/culture-fit-vs-culture-add) vooraf, is ook de culturele integratie achteraf cruciaal.\n\nBij OneTime Recruit begeleiden wij zowel de executive als de organisatie gedurende de onboardingperiode.",
    },
  ],
  faqs: [
    { q: "Moet een executive coach ingeschakeld worden bij onboarding?", a: "Het is niet verplicht maar sterk aanbevolen, vooral bij complexe contexten (turnaround, post-fusie, cultuurverandering). Een coach biedt een vertrouwelijk klankbord en versnelt de integratie." },
    { q: "Hoe meet je het succes van executive onboarding?", a: "Na 90 dagen: stakeholder feedback, eerste quick wins gerealiseerd. Na 6 maanden: team engagement, KPI-voortgang. Na 12 maanden: retentie, performance ratings, 360-feedback." },
    { q: "Wat als de nieuwe executive niet integreert?", a: "Vroegtijdige signalering is cruciaal. Bij OneTime Recruit bieden wij regelmatige check-ins tijdens de onboardingperiode om problemen vroegtijdig te identificeren en adresseren." },
  ],
  pillarLink: { label: "Terug naar Employer Branding & Retention", href: "/nl/employer-branding-retention" },
  relatedLinks: [
    { label: "Leadership retention", href: "/nl/leadership-retention" },
    { label: "Culture fit vs culture add", href: "/nl/culture-fit-vs-culture-add" },
    { label: "STAR interview guide", href: "/nl/star-interview-guide" },
    { label: "Interim management", href: "/nl/interim-management" },
  ],
};

export default function OnboardingExecutives() {
  return <SpokePage data={data} />;
}

import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Culture Fit vs Culture Add: Enterprise Perspectief | OneTime Recruit",
  metaDescription: "Culture fit vs culture add: wanneer kiest u voor aansluiting en wanneer voor vernieuwing? Een enterprise perspectief op culturele match in recruitment.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Assessment & Selectie", href: "/nl/assessment-selectie" },
    { label: "Culture Fit vs Culture Add" },
  ],
  heroLabel: "Assessment & Selectie",
  heroTitle: "Culture fit vs",
  heroHighlight: "culture add",
  heroDescription: "Zoekt u iemand die past in uw cultuur, of iemand die uw cultuur verrijkt? Het juiste antwoord hangt af van uw situatie.",
  sections: [
    {
      title: "Wat is culture fit?",
      content: "Culture fit verwijst naar de mate waarin een kandidaat aansluit bij de bestaande waarden, normen en werkwijzen van een organisatie. Een goede culture fit betekent dat de kandidaat snel productief is en soepel integreert in het team.\n\nHet risico van te sterke focus op culture fit is homogeniteit: teams die op elkaar lijken missen diversiteit van perspectief, wat kan leiden tot groupthink en verminderde innovatie.",
    },
    {
      title: "Wat is culture add?",
      content: "Culture add draait de vraag om: wat brengt deze kandidaat toe aan onze cultuur? In plaats van te zoeken naar iemand die past, zoekt u naar iemand die uw cultuur verrijkt en aanvult.\n\nCulture add is bijzonder waardevol bij organisaties die willen groeien, innoveren of transformeren. Een nieuwe leider die een ander perspectief brengt kan precies de katalysator zijn die uw organisatie nodig heeft.",
    },
    {
      title: "Wanneer culture fit, wanneer culture add?",
      content: "De keuze hangt af van uw organisatiecontext:",
      items: [
        "Culture fit — Stabiele organisatie met bewezen cultuur die behouden moet worden. Denk aan opvolging van een succesvolle leider.",
        "Culture add — Organisatie in transformatie, groei of crisis. Denk aan digitale transformatie, post-fusie integratie of turnaround.",
        "Combinatie — De kernwaarden moeten matchen (fit), maar de werkstijl en perspectief mogen vernieuwend zijn (add).",
      ],
    },
    {
      title: "Hoe evalueer je culturele match?",
      content: "Het beoordelen van culturele match — of het nu fit of add is — vereist een gestructureerde aanpak. Gebruik daarbij altijd [STAR-interviews](/nl/star-interview-guide) en [referentiechecks](/nl/referentiechecks):",
      items: [
        "Definieer uw kernwaarden expliciet — wat is niet onderhandelbaar?",
        "Gebruik gestructureerde interviewvragen over waarden en werkstijl",
        "Laat de kandidaat spreken met diverse teamleden, niet alleen de hiring manager",
        "Vraag naar concrete voorbeelden van hoe de kandidaat met cultuurverschillen is omgegaan",
        "Gebruik referentiechecks om cultureel gedrag te valideren",
        "Betrek de kandidaat bij een realistische preview van de werkomgeving",
      ],
    },
    {
      title: "Het enterprise perspectief",
      content: "In enterprise organisaties speelt culturele match op meerdere niveaus: de organisatiecultuur, de subcultuur van de business unit, het team en de relatie met key stakeholders.\n\nEen leider die excellent past bij de organisatiecultuur kan falen als de subcultuur van het team fundamenteel anders is. Daarom is het essentieel om culturele match op alle niveaus te evalueren. Een gedegen [onboardingprogramma](/nl/onboarding-executives) helpt hierbij enorm.",
    },
  ],
  faqs: [
    { q: "Is culture fit discriminerend?", a: "Het kan zijn als 'culture fit' wordt gebruikt als excuus om kandidaten uit te sluiten die 'anders' zijn. Daarom is het belangrijk om culture fit te definiëren in termen van waarden en werkstijl, niet in termen van achtergrond of persoonlijkheid." },
    { q: "Hoe meet je culture add?", a: "Door expliciet te definiëren welke perspectieven, vaardigheden of ervaringen uw team mist. Culture add is geen vaag concept — het is een gerichte zoektocht naar specifieke aanvullende kwaliteiten." },
    { q: "Kan een nieuwe leider de cultuur veranderen?", a: "Ja, maar alleen met mandaat, ondersteuning en geduld. Een culture-add leider zonder board-support en veranderruimte zal frustratie ervaren en mogelijk snel vertrekken." },
  ],
  pillarLink: { label: "Terug naar Assessment & Selectie", href: "/nl/assessment-selectie" },
  relatedLinks: [
    { label: "STAR interview guide", href: "/nl/star-interview-guide" },
    { label: "Assessment inzetten", href: "/nl/assessment-inzetten" },
    { label: "CHRO recruitment", href: "/nl/chro-recruitment" },
    { label: "Onboarding executives", href: "/nl/onboarding-executives" },
  ],
};

export default function CultureFitVsCultureAdd() {
  return <SpokePage data={data} />;
}

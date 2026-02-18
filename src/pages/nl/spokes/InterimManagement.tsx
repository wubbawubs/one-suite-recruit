import { SpokePage } from "@/components/layout/SpokePage";

const data = {
  metaTitle: "Interim Management: Senior Interim Executives | OneTime Recruit",
  metaDescription: "Interim management voor C-level en directieposities. Snel de juiste interim executive vinden voor transformatie, turnaround of overbrugging.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "C-level Recruitment", href: "/nl/diensten/c-level-recruitment" },
    { label: "Interim Management" },
  ],
  heroLabel: "Interim Leadership",
  heroTitle: "Interim management voor",
  heroHighlight: "directe impact",
  heroDescription: "Wanneer uw organisatie niet kan wachten op een permanente search. Ervaren interim executives die direct starten en resultaat leveren.",
  sections: [
    {
      title: "Wanneer kiest u voor interim management?",
      content: "Interim management is de juiste keuze wanneer uw organisatie direct leiderschap nodig heeft. Of het nu gaat om een onverwacht vertrek, een strategische transformatie, een crisis of een overbruggingsperiode — een ervaren interim executive brengt direct de competenties en ervaring die nodig zijn.\n\nHet verschil met reguliere interim-bureaus? Wij selecteren interim executives met dezelfde grondige [assessment-methodiek](/nl/assessment-inzetten) als bij permanente plaatsingen. [STAR-interviews](/nl/star-interview-guide), [cultuurfit-analyse](/nl/culture-fit-vs-culture-add) en [referentiechecks](/nl/referentiechecks) zijn standaard — ook voor interim opdrachten.",
      items: [
        "Onverwacht vertrek van een bestuurslid of directielid",
        "Strategische transformatie of reorganisatie",
        "Turnaround of crisismanagement",
        "Overbrugging tijdens een permanente search",
        "Specifiek project met een duidelijk mandaat",
      ],
    },
    {
      title: "Hoe vinden wij de juiste interim executive?",
      content: "Snelheid is essentieel bij interim management, maar niet ten koste van kwaliteit. Ons netwerk van 7.500+ executives bevat een significant aantal ervaren interim managers die binnen 1-2 weken beschikbaar zijn.\n\nWij matchen op drie dimensies: (1) functionele expertise — de juiste competenties voor het mandaat, (2) sectorervaring — begrip van uw industrie en marktdynamiek, en (3) leiderschapsstijl — de capaciteit om snel impact te maken in uw specifieke organisatiecultuur.",
    },
    {
      title: "Interim management vs. executive search",
      content: "Interim management en executive search zijn complementair. Interim biedt directe capaciteit voor een afgebakende periode. Executive search vindt de permanente leider voor de lange termijn. Veel organisaties combineren beide: een interim executive start direct, terwijl wij parallel de permanente search uitvoeren.\n\nBij OneTime Recruit kunt u beide trajecten combineren onder één aanspreekpunt, met transparante vaste tarieven voor beide diensten.",
    },
  ],
  faqs: [
    { q: "Hoe snel kan een interim executive starten?", a: "Gemiddeld binnen 1-2 weken na intake. Voor urgente situaties kunnen wij binnen 5 werkdagen een geschikte interim executive presenteren." },
    { q: "Wat kost interim management?", a: "Wij werken met transparante dagtarieven die vooraf worden afgesproken. Geen verborgen kosten of management fees bovenop het tarief van de interim executive." },
    { q: "Hoe lang duurt een interim opdracht gemiddeld?", a: "De gemiddelde interim opdracht op executive niveau duurt 6-12 maanden, afhankelijk van het mandaat. Kortere opdrachten (3 maanden) en langere trajecten (12-18 maanden) komen ook voor." },
  ],
  pillarLink: { label: "Terug naar C-level Recruitment", href: "/nl/diensten/c-level-recruitment" },
  relatedLinks: [
    { label: "CEO Recruitment", href: "/nl/ceo-recruitment" },
    { label: "CFO Recruitment", href: "/nl/cfo-recruitment" },
    { label: "Directie Werving", href: "/nl/directie-werving" },
    { label: "Onboarding Executives", href: "/nl/onboarding-executives" },
  ],
  ctaTitle: "Direct een interim executive nodig?",
  ctaDescription: "Neem contact op en wij presenteren binnen een week geschikte kandidaten.",
};

export default function InterimManagement() {
  return <SpokePage data={data} />;
}
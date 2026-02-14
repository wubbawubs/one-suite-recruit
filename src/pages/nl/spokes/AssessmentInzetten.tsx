import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Assessment Inzetten: Wanneer Wel en Niet | OneTime Recruit",
  metaDescription: "Wanneer zet u een assessment in bij recruitment? Ontdek de voor- en nadelen, de juiste timing en welke assessmenttypen het meest effectief zijn.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Assessment & Selectie", href: "/nl/assessment-selectie" },
    { label: "Assessment Inzetten" },
  ],
  heroLabel: "Assessment & Selectie",
  heroTitle: "Assessment inzetten:",
  heroHighlight: "wanneer wel en niet",
  heroDescription: "Assessments zijn krachtige tools, maar niet altijd de juiste keuze. Leer wanneer ze waarde toevoegen.",
  sections: [
    {
      title: "Typen assessments",
      content: "Er zijn verschillende assessmenttypen die elk een ander aspect van de kandidaat evalueren:",
      items: [
        "Persoonlijkheidsassessment — inzicht in werkstijl, drijfveren en gedragspatronen",
        "Cognitief assessment — intellectueel vermogen, analytisch denken en leervermogen",
        "Competentie-assessment — evaluatie van specifieke vaardigheden en competenties",
        "Simulatie / business case — observatie van gedrag in een gesimuleerde werksituatie",
        "360-graden feedback — verzameling van feedback van collega's, leidinggevenden en ondergeschikten",
      ],
    },
    {
      title: "Wanneer wél een assessment",
      content: "Een assessment voegt de meeste waarde toe in de volgende situaties:",
      items: [
        "Strategische posities — [CEO](/nl/ceo-recruitment), [CFO](/nl/cfo-recruitment), [CTO](/nl/cto-cio-recruitment) en andere [C-level rollen](/nl/c-level-recruitment)",
        "Hoge kosten bij mismatch — posities waar een verkeerde keuze zeer kostbaar is",
        "Meerdere gelijkwaardige kandidaten — wanneer de shortlist sterk is",
        "Cultuur-gevoelige rollen — posities waar fit met de organisatiecultuur cruciaal is",
        "Interne promotie — objectieve validatie van readiness voor een hogere rol",
      ],
    },
    {
      title: "Wanneer niet (of minder) assessen",
      content: "Er zijn situaties waarin een assessment minder zinvol of zelfs contraproductief is:",
      items: [
        "Schaarse markt — topkandidaten haken af bij te veel drempels in het proces",
        "Tijdsdruk — als snelheid essentieel is, kan een assessment vertragend werken",
        "Junior posities — de investering staat niet in verhouding tot het risico",
        "Duidelijke topkandidaat — als alle signalen (interview, referenties, track record) positief zijn",
        "Privacy-bewuste kandidaten — sommige senior executives weigeren psychometrische tests",
      ],
    },
    {
      title: "Best practices voor assessment",
      content: "Om assessments effectief in te zetten, zijn de volgende richtlijnen belangrijk:\n\nGebruik gevalideerde instrumenten met bewezen voorspellende waarde. Communiceer het doel en de rol van het assessment transparant naar kandidaten. Bespreek resultaten altijd in combinatie met andere datapunten ([STAR-interviews](/nl/star-interview-guide), [referenties](/nl/referentiechecks), track record). En gebruik assessments nooit als enig selectiecriterium — ze zijn een aanvulling op het proces, geen vervanging.",
    },
  ],
  faqs: [
    { q: "Hoe betrouwbaar zijn assessments?", a: "Gevalideerde psychometrische assessments hebben een voorspellende waarde van 0.3-0.5 (op een schaal van 0-1). Ter vergelijking: ongestructureerde interviews scoren 0.1-0.2. De combinatie van assessment en gestructureerd interview is het meest voorspellend." },
    { q: "Wat kost een assessment?", a: "De kosten variëren van €500 voor een eenvoudig online assessment tot €3.000-€5.000 voor een volledig assessment center. Bij OneTime Recruit is assessment inbegrepen in ons vaste tarief." },
    { q: "Mag een kandidaat een assessment weigeren?", a: "Ja. Het is raadzaam om het assessment als optioneel maar sterk aanbevolen te positioneren. Transparante communicatie over het doel verkleint de kans op weigeringen." },
  ],
  pillarLink: { label: "Terug naar Assessment & Selectie", href: "/nl/assessment-selectie" },
  relatedLinks: [
    { label: "STAR interview guide", href: "/nl/star-interview-guide" },
    { label: "Referentiechecks", href: "/nl/referentiechecks" },
    { label: "CEO recruitment", href: "/nl/ceo-recruitment" },
    { label: "Hiring governance & reporting", href: "/nl/hiring-governance-reporting" },
  ],
};

export default function AssessmentInzetten() {
  return <SpokePage data={data} />;
}

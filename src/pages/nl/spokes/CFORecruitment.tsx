import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "CFO Recruitment: Assessment & Valkuilen | OneTime Recruit",
  metaDescription: "CFO recruitment: hoe u de juiste financieel leider vindt. Assessment criteria, veelgemaakte fouten en best practices voor CFO search.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "C-level Recruitment", href: "/nl/c-level-recruitment" },
    { label: "CFO Recruitment" },
  ],
  heroLabel: "C-level Recruitment",
  heroTitle: "CFO recruitment:",
  heroHighlight: "assessment & valkuilen",
  heroDescription: "De moderne CFO is meer dan een financieel expert. Zo vindt u de juiste financieel leider voor uw organisatie.",
  sections: [
    {
      title: "De veranderende rol van de CFO",
      content: "De rol van de CFO is de afgelopen jaren fundamenteel veranderd. Waar de CFO traditioneel verantwoordelijk was voor financiële rapportage en compliance, is de moderne CFO een strategische sparringpartner van de CEO.\n\nDe CFO van vandaag combineert financiële expertise met strategisch inzicht, data-gedreven besluitvorming en stakeholder management. Bij M&A-trajecten, schaalvergroting en digitale transformatie speelt de CFO een sleutelrol.",
    },
    {
      title: "Assessment criteria voor CFO's",
      content: "Bij CFO recruitment evalueren wij kandidaten op de volgende dimensies:",
      items: [
        "Financiële expertise — governance, compliance, audit, treasury",
        "Strategische bijdrage — business partnering, M&A-ervaring, waardecreatie",
        "Stakeholder management — board, investeerders, banken, auditors",
        "Digitale vaardigheid — ERP-systemen, BI-tools, data-analyse",
        "Leiderschapsstijl — teamontwikkeling, culture building, change management",
        "Sectorkennis — relevante ervaring in vergelijkbare organisaties en markten",
      ],
    },
    {
      title: "Veelgemaakte fouten bij CFO search",
      content: "De meest voorkomende valkuilen bij het werven van een CFO zijn:",
      items: [
        "Focus op technische vaardigheden zonder aandacht voor strategische bijdrage",
        "Onderschatting van de culturele fit — een Controller-type past niet in een entrepreneurial omgeving",
        "Te weinig aandacht voor de relatie CEO-CFO: deze tandem moet complementair zijn",
        "Verwarring tussen de rol van CFO en Financial Controller",
        "Onvoldoende referentiechecks bij eerdere auditors en board members",
      ],
    },
    {
      title: "CFO profielen per organisatiefase",
      content: "Het ideale CFO-profiel verschilt per organisatiefase. Een start-up of scale-up heeft een ander type CFO nodig dan een gevestigde enterprise:",
      items: [
        "Scale-up fase — Hands-on CFO die systemen opzet, funding rondhaalt en kan multitasken",
        "Groeifase — Strategische CFO die schaalbare processen implementeert en investeerders managet",
        "Mature fase — Governance-CFO die compliance waarborgt, M&A begeleidt en waarde optimaliseert",
        "Turnaround — Crisis-CFO met ervaring in herstructurering, cashflow management en stakeholdercommunicatie",
      ],
    },
  ],
  faqs: [
    { q: "Wat is het verschil tussen een CFO en een Financial Controller?", a: "Een Financial Controller richt zich op operationele financiën: boekhouding, rapportage, budgettering. Een CFO opereert op strategisch niveau: business partnering, M&A, investeerdersrelaties en financiële strategie." },
    { q: "Hoe lang duurt CFO recruitment?", a: "Gemiddeld 4-8 weken. Bij OneTime Recruit is de shortlist doorgaans na 18 werkdagen gereed." },
    { q: "Moet een CFO branche-ervaring hebben?", a: "Het is wenselijk maar niet altijd noodzakelijk. Financiële expertise en strategisch vermogen zijn vaak belangrijker dan specifieke sectorkennis. Dit hangt af van de complexiteit van uw sector." },
  ],
  pillarLink: { label: "Terug naar C-level Recruitment", href: "/nl/c-level-recruitment" },
  relatedLinks: [
    { label: "CEO recruitment", href: "/nl/ceo-recruitment" },
    { label: "CTO/CIO recruitment", href: "/nl/cto-cio-recruitment" },
    { label: "Finance, risk & compliance", href: "/nl/finance-risk-compliance" },
    { label: "Compensation & benefits trends", href: "/nl/compensation-benefits-trends" },
  ],
};

export default function CFORecruitment() {
  return <SpokePage data={data} />;
}

import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Defence & High-Tech Hiring: Leadership Recruitment | OneTime Recruit",
  metaDescription: "Executive search voor defence en high-tech sectoren. Security clearance, technisch leiderschap en complexe stakeholder-omgevingen.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Industries", href: "/nl/industries" },
    { label: "Defence & High-Tech" },
  ],
  heroLabel: "Industries",
  heroTitle: "Defence & high-tech:",
  heroHighlight: "leadership hiring",
  heroDescription: "Leiders vinden in de meest gevoelige sectoren vereist specialistische kennis en discrete netwerken.",
  sections: [
    {
      title: "De unieke uitdaging van defence recruitment",
      content: "Recruitment in de defence en high-tech sector kent uitdagingen die in geen enkele andere sector voorkomen. Security clearance vereisten beperken de kandidaat-pool drastisch. De cultuurverschillen tussen publieke en private sector zijn groot. En de concurrentie om technisch leiderschap met de bredere [tech-markt](/nl/saas-it-leadership) is hevig.\n\nDaarom is gespecialiseerde [executive search](/nl/wat-is-executive-search) essentieel in deze sector. Vaak zijn deze trajecten ook [confidential](/nl/confidential-search) van aard.",
    },
    {
      title: "Posities die wij invullen",
      content: "Wij werven senior leiders voor defence, aerospace en high-tech organisaties:",
      items: [
        "CEO / Managing Director — defence contractors, system integrators",
        "CTO / VP R&D — technologisch leiderschap voor complexe programma's",
        "VP Operations / Program Director — programma-management voor grootschalige projecten",
        "VP Business Development — overheidscontracten, tenders, partnerships",
        "CISO / VP Security — cybersecurity en information security leiderschap",
        "VP Engineering — systems engineering, software development, hardware",
      ],
    },
    {
      title: "Security clearance en screening",
      content: "Een bijzonder aspect van defence recruitment is de vereiste voor security clearance. Dit beperkt de kandidaat-pool significant en voegt complexiteit toe aan het proces:\n\nKandidaten moeten veiligheidsmachtigingen hebben of bereid zijn deze aan te vragen. Het aanvraagproces kan weken tot maanden duren. En niet elke kandidaat komt in aanmerking op basis van achtergrond of nationaliteit.\n\nOns searchteam houdt hier vanaf de eerste fase rekening mee om verrassingen te voorkomen.",
    },
    {
      title: "Technisch leiderschap in high-tech",
      content: "High-tech defence organisaties zoeken leiders die technische diepgang combineren met managementvermogen:",
      items: [
        "Ervaring met complexe systemen — radar, sensoren, command & control, cybersecurity",
        "Programma-management — PRINCE2, Agile in een gereguleerde omgeving",
        "Stakeholder management — defensie-organisaties, overheden, NATO, EU",
        "Export control — kennis van ITAR, EAR en andere exportregelgeving",
        "IP-management — bescherming van intellectueel eigendom in gevoelige sectoren",
      ],
    },
  ],
  faqs: [
    { q: "Werft OneTime Recruit voor overheidsorganisaties?", a: "Ja, wij werven zowel voor private defence contractors als voor overheidsorganisaties en semi-publieke instellingen in de defence en veiligheidssector." },
    { q: "Hoe gaat u om met vertrouwelijke defence vacatures?", a: "Wij hebben uitgebreide ervaring met confidential search in de defence sector. Alle communicatie verloopt via beveiligde kanalen en onze consultants zijn gewend aan het werken met gevoelige informatie." },
    { q: "Heeft OneTime Recruit ervaring in de Nederlandse defensie-industrie?", a: "Ja, wij hebben een netwerk opgebouwd in de Nederlandse en Europese defence industrie, van system integrators tot gespecialiseerde high-tech bedrijven." },
  ],
  pillarLink: { label: "Terug naar Industries", href: "/nl/industries" },
  relatedLinks: [
    { label: "Aviation recruitment", href: "/nl/aviation-recruitment" },
    { label: "SaaS/IT leadership", href: "/nl/saas-it-leadership" },
    { label: "Confidential search", href: "/nl/confidential-search" },
    { label: "CTO/CIO recruitment", href: "/nl/cto-cio-recruitment" },
  ],
};

export default function DefenceHightechRecruitment() {
  return <SpokePage data={data} />;
}

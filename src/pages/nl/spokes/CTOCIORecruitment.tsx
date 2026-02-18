import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "CTO/CIO Recruitment: Tech Leadership Evaluatie | OneTime Recruit",
  metaDescription: "CTO en CIO recruitment: hoe u de juiste tech leider vindt. Evaluatiecriteria voor technologisch leiderschap, innovatie en digitale transformatie.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "C-level Recruitment", href: "/nl/diensten/c-level-recruitment" },
    { label: "CTO/CIO Recruitment" },
  ],
  heroLabel: "C-level Recruitment",
  heroTitle: "CTO/CIO recruitment:",
  heroHighlight: "tech leadership evaluatie",
  heroDescription: "Technologisch leiderschap is cruciaal voor digitale transformatie. Zo selecteert u de juiste CTO of CIO.",
  sections: [
    {
      title: "CTO vs CIO: wat is het verschil?",
      content: "Hoewel de termen vaak door elkaar worden gebruikt, hebben de CTO en CIO fundamenteel verschillende rollen:\n\nDe CTO (Chief Technology Officer) richt zich op technologie als product en innovatiedriver. De CTO bepaalt de technische strategie, leidt R&D en zorgt dat de technologie-stack toekomstbestendig is.\n\nDe CIO (Chief Information Officer) richt zich op technologie als enabler van de business. De CIO beheert IT-infrastructuur, cybersecurity, data governance en de digitale werkplek.\n\nSommige organisaties combineren beide rollen in één functie, andere hebben beide posities naast elkaar.",
    },
    {
      title: "Evaluatiecriteria voor tech leiders",
      content: "Bij het beoordelen van CTO/CIO-kandidaten evalueren wij op vijf dimensies:",
      items: [
        "Technische diepgang — kan de kandidaat geloofwaardig leiding geven aan engineering teams?",
        "Strategisch vermogen — kan de kandidaat technologie vertalen naar businesswaarde?",
        "Innovatie-track record — heeft de kandidaat bewezen vernieuwing gerealiseerd?",
        "Stakeholder communicatie — kan de kandidaat technologie uitleggen aan de board?",
        "Team building — kan de kandidaat toptalent aantrekken en behouden in een competitieve markt?",
      ],
    },
    {
      title: "De unieke uitdaging van tech recruitment",
      content: "Tech leadership recruitment kent specifieke uitdagingen die het proces complexer maken dan andere C-level posities:\n\nDe markt is extreem competitief: goede tech leiders worden voortdurend benaderd. De technologische veroudering is snel: ervaring van 5 jaar geleden kan irrelevant zijn. En de [cultuurkloof](/nl/culture-fit-vs-culture-add) tussen tech-gedreven en business-gedreven organisaties is vaak groter dan verwacht.\n\nDaarom is het essentieel om een searchbureau in te schakelen dat de [SaaS/IT-markt](/nl/saas-it-leadership) begrijpt en de juiste netwerken heeft.",
    },
    {
      title: "CTO/CIO profiel per organisatietype",
      content: "Het ideale profiel hangt sterk af van het type organisatie:",
      items: [
        "SaaS / tech-bedrijf — Product-CTO met hands-on engineering ervaring en scale-up track record",
        "Enterprise / corporate — Governance-CIO met ervaring in compliance, cybersecurity en vendor management",
        "Scale-up — Full-stack CTO die zowel codeert als strategie bepaalt en een team kan opbouwen",
        "Digitale transformatie — Change-CIO die legacy moderniseert en de organisatie meeneemt",
      ],
    },
  ],
  faqs: [
    { q: "Moet een CTO kunnen coderen?", a: "Dat hangt af van de organisatiefase. In een start-up of scale-up is hands-on technische ervaring essentieel. In een enterprise is strategisch en organisatorisch vermogen vaak belangrijker dan dagelijkse code-bijdragen." },
    { q: "Hoe voorkom je een mismatch bij tech leadership?", a: "Door grondig te analyseren of de kandidaat past bij uw organisatiefase, cultuur en technologische ambities. Een product-CTO uit een scale-up past niet automatisch in een corporate governance-omgeving." },
    { q: "Wat is het salarisniveau voor CTO/CIO in Nederland?", a: "Afhankelijk van organisatieomvang en sector varieert het tussen €120.000 en €300.000+ inclusief variabele beloning. Bij OneTime Recruit werken wij met vaste tarieven, ongeacht het salarisniveau." },
  ],
  pillarLink: { label: "Terug naar C-level Recruitment", href: "/nl/diensten/c-level-recruitment" },
  relatedLinks: [
    { label: "CEO recruitment", href: "/nl/ceo-recruitment" },
    { label: "CFO recruitment", href: "/nl/cfo-recruitment" },
    { label: "SaaS/IT leadership", href: "/nl/saas-it-leadership" },
    { label: "Defence & high-tech recruitment", href: "/nl/defence-hightech-recruitment" },
  ],
};

export default function CTOCIORecruitment() {
  return <SpokePage data={data} />;
}

import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "SaaS/IT Leadership Hiring: Tech Executives Vinden | OneTime Recruit",
  metaDescription: "Executive search voor SaaS en IT-bedrijven. Hoe u tech leiders vindt die kunnen schalen, innoveren en teams bouwen.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Industries", href: "/nl/industries" },
    { label: "SaaS/IT Leadership" },
  ],
  heroLabel: "Industries",
  heroTitle: "SaaS/IT leadership:",
  heroHighlight: "tech executives vinden",
  heroDescription: "In de SaaS/IT-sector is tech leiderschap de differentiator. Zo vindt u de executives die uw groei versnellen.",
  sections: [
    {
      title: "De SaaS/IT leadership challenge",
      content: "De SaaS en IT-sector groeit explosief en de vraag naar senior tech leiders overtreft het aanbod. Bedrijven concurreren niet alleen met elkaar maar ook met Big Tech, scale-ups en remote-first organisaties voor dezelfde schaarse profielen.\n\nDit maakt SaaS/IT leadership recruitment tot een van de meest competitieve segmenten in executive search. Succes vereist diepgaande kennis van de sector, snel handelen en een overtuigend verhaal voor kandidaten.",
    },
    {
      title: "Typische posities in SaaS/IT",
      content: "De leadership structuur in SaaS-bedrijven verschilt van traditionele organisaties:",
      items: [
        "CEO / Managing Director — groei-ervaring, funding, product-market fit",
        "CTO / VP Engineering — technische architectuur, engineering cultuur, talent retentie",
        "CPO / VP Product — product strategie, roadmap, customer-driven development",
        "CRO / VP Sales — SaaS sales, recurring revenue, customer success",
        "CMO / VP Marketing — growth marketing, product-led growth, demand generation",
        "VP Customer Success — churn reduction, NRR, customer health scoring",
      ],
    },
    {
      title: "Wat maakt tech leadership anders?",
      content: "Tech leiders opereren in een unieke context die specifieke competenties vereist:",
      items: [
        "Snelheid — product cycles van weken, niet jaren",
        "Remote-first — leiding geven aan distributed teams",
        "Data-driven — beslissingen op basis van metrics, niet intuïtie",
        "Talent-competitie — concurreren met FAANG voor dezelfde engineers",
        "Investor management — board dynamics bij venture-backed bedrijven",
        "Scale challenges — processen die werken bij 50 FTE, falen bij 200",
      ],
    },
    {
      title: "Assessment voor tech executives",
      content: "Bij het beoordelen van SaaS/IT executives evalueren wij op sector-specifieke dimensies:\n\nScalability — heeft de kandidaat bewezen ervaring met het schalen van teams en producten? Technical credibility — kan de kandidaat geloofwaardig leiding geven aan engineers? Metrics-fluency — begrijpt de kandidaat SaaS KPI's (MRR, NRR, CAC/LTV, churn)? Fundraising — bij venture-backed bedrijven: ervaring met funding rondes en investor relations.",
    },
  ],
  faqs: [
    { q: "Hoe concurreert OneTime Recruit met tech-gespecialiseerde recruiters?", a: "Wij combineren executive search expertise met SaaS/IT marktkennis. Onze focus op senior posities (niet mid-level developers) onderscheidt ons van volume tech recruiters." },
    { q: "Werft u ook remote tech executives?", a: "Ja. In de SaaS/IT sector is remote en hybrid werken de norm. Wij zoeken kandidaten ongeacht locatie, mits de organisatie remote leiderschap ondersteunt." },
    { q: "Hoe snel moeten we handelen bij tech executives?", a: "Snel. Goede tech executives zijn gemiddeld binnen 10 dagen van de markt. Wij adviseren een doorlooptijd van maximaal 3 weken van shortlist tot aanbod." },
  ],
  pillarLink: { label: "Terug naar Industries", href: "/nl/industries" },
  relatedLinks: [
    { label: "CTO/CIO recruitment", href: "/nl/cto-cio-recruitment" },
    { label: "Finance & risk compliance", href: "/nl/finance-risk-compliance" },
    { label: "Employer brand voor senior talent", href: "/nl/employer-brand-senior-talent" },
    { label: "Compensation & benefits trends", href: "/nl/compensation-benefits-trends" },
  ],
};

export default function SaaSITLeadership() {
  return <SpokePage data={data} />;
}

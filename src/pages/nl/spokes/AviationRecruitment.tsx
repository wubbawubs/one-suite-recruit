import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Aviation Recruitment: Leadership voor de Luchtvaartsector | OneTime Recruit",
  metaDescription: "Executive search voor de luchtvaartsector. Hoe u senior leiders vindt voor airlines, MRO, airports en aviation services.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Industries", href: "/nl/industries" },
    { label: "Aviation Recruitment" },
  ],
  heroLabel: "Industries",
  heroTitle: "Aviation recruitment:",
  heroHighlight: "leadership voor de luchtvaart",
  heroDescription: "De luchtvaartsector vereist leiders met unieke competenties. Van safety-first cultuur tot operationele complexiteit.",
  sections: [
    {
      title: "Waarom aviation recruitment uniek is",
      content: "De luchtvaartsector kent unieke uitdagingen die het recruitmentproces complexer maken dan in andere sectoren. Leiders in aviation moeten opereren in een sterk gereguleerde omgeving, omgaan met 24/7 [operaties](/nl/operations-supply-chain) en balanceren tussen veiligheid, efficiëntie en klanttevredenheid.\n\nDaarnaast is de talentpool relatief klein: aviation-specifieke ervaring is schaars en wordt sterk gewaardeerd. Dit maakt [executive search](/nl/wat-is-executive-search) in de luchtvaart een specialisme.",
    },
    {
      title: "Posities die wij invullen",
      content: "In de luchtvaartsector vullen wij posities in op alle niveaus van senior leiderschap:",
      items: [
        "CEO / Managing Director — airline, MRO, ground handling",
        "COO / VP Operations — operationeel leiderschap, flight operations, crew management",
        "VP Safety & Compliance — safety management, EASA compliance, regulatory affairs",
        "VP Commercial / Revenue Management — commercial strategy, route planning, partnerships",
        "VP Engineering & Maintenance — MRO leadership, fleet management, technical operations",
        "CFO / VP Finance — airline finance, leasing, treasury",
      ],
    },
    {
      title: "Specifieke competenties voor aviation leiders",
      content: "Bij het evalueren van kandidaten voor aviation posities letten wij op sector-specifieke competenties:",
      items: [
        "Safety-first mindset — veiligheid als niet-onderhandelbare prioriteit",
        "Regulatory awareness — kennis van EASA, ICAO en nationale regelgeving",
        "Operationele complexiteit — ervaring met 24/7 operaties en crisismanagement",
        "Stakeholder management — luchtvaartautoriteiten, vakbonden, partners",
        "Verandervermogen — de sector is in constante transformatie (duurzaamheid, digitalisering)",
      ],
    },
    {
      title: "OneTime Recruit in aviation",
      content: "OneTime Recruit heeft diepgaande ervaring in de luchtvaartsector. We werken samen met airlines, MRO-bedrijven, airports en aviation services organisaties. Onze ervaring omvat plaatsingen bij onder andere MAS Aviation en andere toonaangevende spelers in de sector.\n\nOns netwerk in aviation is opgebouwd over jaren en omvat executives in heel Europa en het Midden-Oosten.",
    },
  ],
  faqs: [
    { q: "Werft OneTime Recruit ook piloten of cabin crew?", a: "Nee, wij richten ons exclusief op senior leiderschapsposities in aviation: C-level, VP en directie. Voor operationele posities verwijzen wij naar gespecialiseerde aviation recruiters." },
    { q: "Is internationale ervaring vereist voor aviation leiders?", a: "Doorgaans wel. De luchtvaartsector is per definitie internationaal. Kandidaten met ervaring in meerdere markten en culturen zijn sterk gewild." },
    { q: "Hoe snel kan een aviation executive geplaatst worden?", a: "De gemiddelde doorlooptijd is 4-8 weken, vergelijkbaar met andere executive search trajecten. De shortlist is doorgaans na 18 werkdagen beschikbaar." },
  ],
  pillarLink: { label: "Terug naar Industries", href: "/nl/industries" },
  relatedLinks: [
    { label: "Defence & high-tech recruitment", href: "/nl/defence-hightech-recruitment" },
    { label: "Operations & supply chain", href: "/nl/operations-supply-chain" },
    { label: "CEO recruitment", href: "/nl/ceo-recruitment" },
    { label: "Talent pool per vacature", href: "/nl/talent-pool-per-vacature" },
  ],
};

export default function AviationRecruitment() {
  return <SpokePage data={data} />;
}

import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Talent Pool per Vacature: Wat Is Het & Hoe Werkt Het? | OneTime Recruit",
  metaDescription: "Wat is een dedicated talent pool per vacature? Ontdek hoe deze aanpak recruitment efficiënter, goedkoper en effectiever maakt.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Recruitment Operating Model", href: "/nl/diensten/recruitment-operating-model" },
    { label: "Talent Pool per Vacature" },
  ],
  heroLabel: "Recruitment Model",
  heroTitle: "Talent pool per vacature:",
  heroHighlight: "wat is het & hoe werkt het?",
  heroDescription: "Een dedicated talent pool per vacature is de kern van onze aanpak. U behoudt de pool, ook na de plaatsing.",
  sections: [
    {
      title: "Wat is een talent pool per vacature?",
      content: "Een talent pool per vacature is een exclusieve verzameling van gekwalificeerde kandidaten die specifiek voor uw openstaande positie zijn geïdentificeerd en geëvalueerd. Anders dan een generieke database is deze pool op maat samengesteld op basis van uw specifieke eisen.\n\nBij OneTime Recruit behoudt u de talent pool na de plaatsing. Dit betekent dat u bij toekomstige vacatures direct toegang heeft tot reeds gescreende kandidaten — zonder opnieuw het volledige search-proces te doorlopen.",
    },
    {
      title: "Hoe wordt een talent pool opgebouwd?",
      content: "Het opbouwen van een kwalitatieve talent pool doorloopt drie fasen:",
      items: [
        "Identificatie — proactieve marktverkenning om potentiële kandidaten in kaart te brengen",
        "Screening — eerste evaluatie op basis van profiel, ervaring en beschikbaarheid",
        "Kwalificatie — diepgaande [assessment](/nl/assessment-inzetten), [STAR-interviews](/nl/star-interview-guide) en [cultuurfit-analyse](/nl/culture-fit-vs-culture-add)",
      ],
    },
    {
      title: "De voordelen voor uw organisatie",
      content: "Een dedicated talent pool biedt concrete voordelen ten opzichte van traditionele recruitment:",
      items: [
        "Snellere time-to-hire — bij herhaalde vacatures heeft u direct toegang tot gekwalificeerde kandidaten",
        "Lagere kosten — geen herhaalde search-fees voor vergelijkbare posities",
        "Betere kwaliteit — kandidaten zijn al grondig geëvalueerd",
        "Marktinzicht — u krijgt een actueel beeld van het beschikbare talent in uw sector",
        "Eigenaarschap — de pool is van u, niet van het bureau",
      ],
    },
    {
      title: "Verschil met traditionele databases",
      content: "Een talent pool per vacature verschilt wezenlijk van de grote databases die traditionele recruitmentbureaus hanteren:\n\nTraditionale databases bevatten duizenden profielen die niet specifiek gescreend zijn voor uw vacature. Een dedicated talent pool bevat 15-30 zorgvuldig geïdentificeerde en geëvalueerde kandidaten die exact passen bij uw specifieke profiel. Dit past uitstekend binnen een [recruitment-as-a-service](/nl/recruitment-as-a-service) model.\n\nDe kwaliteit per kandidaat is significant hoger, en de informatie is actueel en relevant — geen verouderde cv's van drie jaar oud.",
    },
  ],
  faqs: [
    { q: "Hoeveel kandidaten zitten er in een talent pool?", a: "Een typische talent pool per vacature bevat 15-30 geïdentificeerde kandidaten, waarvan 3-5 op shortlist komen na uitgebreide assessment." },
    { q: "Wat gebeurt er met de talent pool na plaatsing?", a: "U behoudt de volledige talent pool. Bij toekomstige vacatures kunt u direct putten uit deze reeds gescreende kandidaten, wat de doorlooptijd en kosten significant verlaagt." },
    { q: "Hoe lang blijft een talent pool actueel?", a: "Wij adviseren om de pool jaarlijks te actualiseren. Kandidaten die na 12 maanden nog relevant zijn, worden opnieuw benaderd voor een statusupdate." },
  ],
  pillarLink: { label: "Terug naar Recruitment Operating Model", href: "/nl/diensten/recruitment-operating-model" },
  relatedLinks: [
    { label: "Recruitment-as-a-service", href: "/nl/recruitment-as-a-service" },
    { label: "Abonnement recruitment", href: "/nl/abonnement-recruitment" },
    { label: "Kosten executive search", href: "/nl/kosten-executive-search" },
    { label: "Werving en selectie", href: "/nl/werving-en-selectie" },
  ],
};

export default function TalentPoolPerVacature() {
  return <SpokePage data={data} />;
}

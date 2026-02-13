import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Employer Brand voor Senior Talent | OneTime Recruit",
  metaDescription: "Hoe u uw employer brand positioneert voor senior en executive talent. Concrete strategieën die topkandidaten aantrekken.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Employer Branding & Retention", href: "/nl/employer-branding-retention" },
    { label: "Employer Brand voor Senior Talent" },
  ],
  heroLabel: "Employer Branding",
  heroTitle: "Employer brand voor",
  heroHighlight: "senior talent",
  heroDescription: "Topkandidaten kiezen hun werkgever net zo zorgvuldig als u uw leiders selecteert. Is uw employer brand overtuigend genoeg?",
  sections: [
    {
      title: "Waarom employer branding voor executives anders is",
      content: "Traditionele employer branding richt zich op volume-werving: vacaturemarketing, social media campagnes, campus recruitment. Voor executive talent werkt dit niet.\n\nSenior leiders worden niet bereikt via vacaturesites. Zij worden benaderd via netwerken, referrals en executive search. Hun besluitvorming is gebaseerd op strategie, cultuur, autonomie en impact — niet op ping-pongtafels en flexibele werktijden.",
    },
    {
      title: "Wat executive talent zoekt in een werkgever",
      content: "Uit onze ervaring met duizenden executive gesprekken weten wij wat topkandidaten motiveert:",
      items: [
        "Impact — de mogelijkheid om écht verschil te maken",
        "Autonomie — vrijheid om strategie te bepalen en te executeren",
        "Cultuur — een professionele, ambitieuze organisatiecultuur",
        "Board kwaliteit — de kwaliteit van medeleiders en toezichthouders",
        "Groeiambitie — een organisatie met een duidelijke groeistrategie",
        "Stabiliteit — financiële gezondheid en langetermijnperspectief",
      ],
    },
    {
      title: "Concrete strategieën voor executive employer branding",
      content: "Zo positioneert u uw organisatie als aantrekkelijke werkgever voor senior talent:",
      items: [
        "CEO/board zichtbaarheid — uw leiders moeten zichtbaar zijn in de markt (thought leadership, media)",
        "Resultaat-verhalen — publiceer concrete resultaten die uw executives hebben behaald",
        "Cultuurverhaal — een authentiek, eerlijk verhaal over hoe het écht is om bij u te werken",
        "Alumni-netwerk — onderhoud relaties met vertrokken executives als ambassadeurs",
        "Confidentieel track record — deel (geanonimiseerde) succesverhalen met kandidaten in het searchproces",
      ],
    },
    {
      title: "Executive EVP: Employee Value Proposition voor leiders",
      content: "Uw Employee Value Proposition (EVP) voor executives verschilt van uw algemene EVP. Een executive EVP beantwoordt de volgende vragen:\n\nWat is het strategische mandaat? Hoeveel autonomie biedt de rol? Wat is de kwaliteit van de board en het MT? Hoe wordt succes gemeten en beloond? Wat zijn de groeimogelijkheden (binnen de organisatie of in uw netwerk)?\n\nEen overtuigend executive EVP is het verschil tussen een kandidaat die uw aanbod overweegt en een die het afwijst voor de concurrent.",
    },
  ],
  faqs: [
    { q: "Moet ik investeren in employer branding voor executive recruitment?", a: "Ja, maar op een andere manier dan voor volume-werving. Voor executives draait het om reputatie, leiderschap-zichtbaarheid en een overtuigend strategisch verhaal — niet om carrièrepagina's en social media campagnes." },
    { q: "Hoe belangrijk is salary branding voor executives?", a: "Belangrijk, maar niet allesbepalend. Executives beslissen primair op basis van impact, autonomie en cultuur. Het compensatiepakket moet marktconform zijn, maar is zelden de doorslaggevende factor." },
    { q: "Kan OneTime Recruit helpen bij executive employer branding?", a: "Ja. Als onderdeel van onze dienstverlening adviseren wij u over hoe u zich het best positioneert richting de kandidatenmarkt. Dit is een integraal onderdeel van elke search-opdracht." },
  ],
  pillarLink: { label: "Terug naar Employer Branding & Retention", href: "/nl/employer-branding-retention" },
  relatedLinks: [
    { label: "Leadership retention", href: "/nl/leadership-retention" },
    { label: "Compensation & benefits trends", href: "/nl/compensation-benefits-trends" },
    { label: "Onboarding executives", href: "/nl/onboarding-executives" },
    { label: "Executive search pillar", href: "/nl/executive-search" },
  ],
};

export default function EmployerBrandSeniorTalent() {
  return <SpokePage data={data} />;
}

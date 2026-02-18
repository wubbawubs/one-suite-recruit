/**
 * Industry × Service cross-page generator.
 * Produces unique SpokePageData for each industry + service combination.
 * ~150 pages from 30 industries × 5 services.
 */
import type { SpokePageData } from "@/components/layout/SpokePage";
import { getIndustryBySlug, type IndustryData } from "./industries";

export interface ServiceDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  /** Used for meta descriptions and content generation */
  verb: string;
  pillarHref: string;
}

export const serviceDefinitions: ServiceDefinition[] = [
  {
    slug: "executive-search",
    title: "Executive Search",
    shortTitle: "Executive Search",
    verb: "executive search",
    pillarHref: "/nl/diensten/executive-search",
  },
  {
    slug: "c-level-recruitment",
    title: "C-Level Recruitment",
    shortTitle: "C-Level Recruitment",
    verb: "C-level recruitment",
    pillarHref: "/nl/diensten/c-level-recruitment",
  },
  {
    slug: "assessment-selectie",
    title: "Assessment & Selectie",
    shortTitle: "Assessment",
    verb: "assessment en selectie",
    pillarHref: "/nl/diensten/assessment-selectie",
  },
  {
    slug: "leadership-advisory",
    title: "Leadership Advisory",
    shortTitle: "Leadership Advisory",
    verb: "leadership advisory",
    pillarHref: "/nl/diensten/leadership-advisory",
  },
  {
    slug: "recruitment-operating-model",
    title: "Recruitment Operating Model",
    shortTitle: "Recruitment Model",
    verb: "recruitment operating model",
    pillarHref: "/nl/diensten/recruitment-operating-model",
  },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return serviceDefinitions.find((s) => s.slug === slug);
}

/**
 * Generate a unique SpokePageData for an Industry × Service cross-page.
 */
export function generateIndustryServicePage(
  industry: IndustryData,
  service: ServiceDefinition
): SpokePageData {
  const indTitle = industry.title;
  const svcTitle = service.title;
  const svcShort = service.shortTitle;
  const indSlug = industry.slug;
  const svcSlug = service.slug;

  // Build unique content per service type
  const sections = getSections(industry, service);
  const faqs = getFaqs(industry, service);

  return {
    metaTitle: `${svcTitle} in ${indTitle} | One Time Recruit`,
    metaDescription: `${svcTitle} voor de ${indTitle.toLowerCase()} sector. One Time Recruit biedt gespecialiseerde ${service.verb} voor ${indTitle.toLowerCase()} organisaties in de Benelux en DACH.`,
    breadcrumbs: [
      { label: "Home", href: "/nl" },
      { label: "Industries", href: "/nl/industries" },
      { label: indTitle, href: `/nl/industries/${indSlug}` },
      { label: svcShort },
    ],
    heroLabel: `${indTitle} × ${svcShort}`,
    heroTitle: `${svcTitle} in ${indTitle.toLowerCase()}:`,
    heroHighlight: getHighlight(service),
    heroDescription: `Gespecialiseerde ${service.verb} voor de ${indTitle.toLowerCase()} sector. Wij combineren diepgaande sectorkennis met een bewezen searchmethodiek.`,
    sections,
    faqs,
    pillarLink: { label: `Terug naar ${indTitle}`, href: `/nl/industries/${indSlug}` },
    relatedLinks: getRelatedLinks(industry, service),
    ctaTitle: `${svcTitle} voor uw ${indTitle.toLowerCase()} organisatie?`,
    ctaDescription: `Plan een vrijblijvend gesprek en ontdek hoe wij u kunnen helpen met ${service.verb} in de ${indTitle.toLowerCase()} sector.`,
  };
}

function getHighlight(service: ServiceDefinition): string {
  switch (service.slug) {
    case "executive-search": return "de juiste leider vinden";
    case "c-level-recruitment": return "boardroom-talent";
    case "assessment-selectie": return "objectief selecteren";
    case "leadership-advisory": return "strategisch advies";
    case "recruitment-operating-model": return "schaalbaar werven";
    default: return "gespecialiseerd";
  }
}

function getSections(industry: IndustryData, service: ServiceDefinition): SpokePageData["sections"] {
  const ind = industry.title;
  const indLower = ind.toLowerCase();

  switch (service.slug) {
    case "executive-search":
      return [
        {
          title: `Waarom executive search in ${indLower}?`,
          content: `De ${indLower} sector kent unieke uitdagingen als het gaat om het aantrekken van senior leiderschap. Kandidaten met de juiste combinatie van sectorkennis, leiderschapservaring en culturele fit zijn schaars.\n\n[Executive search](/nl/diensten/executive-search) biedt een systematische, vertrouwelijke aanpak om deze schaarse profielen te identificeren en te benaderen — ook wanneer zij niet actief zoeken.`,
        },
        {
          title: `Sectorspecifieke uitdagingen in ${indLower}`,
          content: `${ind} organisaties staan voor specifieke leiderschapsuitdagingen:`,
          items: [
            `Technologische disruptie — ${indLower} wordt getransformeerd door digitalisering en AI, wat een nieuw type leider vereist`,
            `Talent schaarste — ervaren executives met ${indLower} expertise zijn bijzonder gewild`,
            `Regulatoire complexiteit — steeds strengere wet- en regelgeving vereist leiders die compliance begrijpen`,
            `Internationale concurrentie — ${indLower} opereert in een global context, wat internationale ervaring essentieel maakt`,
          ],
        },
        {
          title: `Profielen die wij plaatsen in ${indLower}`,
          content: `One Time Recruit heeft ruime ervaring met executive plaatsingen in de ${indLower} sector:`,
          items: [
            `CEO / Managing Director — eindverantwoordelijk leiderschap`,
            `CFO — financieel leiderschap en strategische planning`,
            `COO / VP Operations — operationeel leiderschap en schaling`,
            `CTO / VP Engineering — technologische visie en innovatie`,
            `Commercial Director / VP Sales — omzetgroei en marktuitbreiding`,
          ],
        },
        {
          title: `Onze aanpak voor ${indLower}`,
          content: `Elke executive search in de ${indLower} sector begint met een grondige analyse van uw organisatie, marktpositie en leiderschapsbehoefte. Wij combineren dit met een uitgebreid netwerk van executives in de ${indLower} sector.\n\nOnze aanpak is transparant, met een vast tarief en een shortlist binnen 18 werkdagen. Lees meer over [onze executive search methodiek](/nl/wat-is-executive-search).`,
        },
      ];

    case "c-level-recruitment":
      return [
        {
          title: `C-level recruitment in ${indLower}`,
          content: `Het vinden van C-level talent voor de ${indLower} sector vereist een gespecialiseerde aanpak. Boardroom-posities in ${indLower} vragen om een unieke combinatie van strategisch denkvermogen, sectorkennis en bewezen leiderschapskwaliteiten.\n\nOne Time Recruit is gespecialiseerd in [C-level recruitment](/nl/diensten/c-level-recruitment) en heeft een bewezen track record in de ${indLower} sector.`,
        },
        {
          title: `De uitdaging van boardroom-talent in ${indLower}`,
          content: `C-level posities in ${indLower} kennen specifieke uitdagingen:`,
          items: [
            `Beperkte talentpool — het aantal kandidaten met relevant ${indLower} C-level ervaring is klein`,
            `Hoge stakes — een verkeerde C-level hire kost gemiddeld 2,5× het jaarsalaris`,
            `Vertrouwelijkheid — veel C-level searches vereisen een discreet proces`,
            `Board alignment — de kandidaat moet niet alleen competent zijn, maar ook passen bij de governance-structuur`,
          ],
        },
        {
          title: `Typische C-level posities in ${indLower}`,
          content: `Wij plaatsen regelmatig de volgende C-level functies in de ${indLower} sector:`,
          items: [
            `[CEO](/nl/functies/ceo-chief-executive-officer) — overall bedrijfsleiderschap en visie`,
            `[CFO](/nl/functies/cfo-chief-financial-officer) — financiële strategie en governance`,
            `[COO](/nl/functies/coo-chief-operating-officer) — operationele excellentie`,
            `[CTO](/nl/functies/cto-chief-technology-officer) — technologische transformatie`,
            `Board members en commissarissen — onafhankelijk toezicht`,
          ],
        },
        {
          title: `Onze C-level search in ${indLower}`,
          content: `Onze aanpak voor C-level recruitment in ${indLower} combineert uitgebreide marktmapping met diepgaande [assessments](/nl/diensten/assessment-selectie). Elke kandidaat wordt niet alleen beoordeeld op competenties en ervaring, maar ook op leiderschapsstijl en culturele fit.\n\nWij werken met een vast tarief en bieden een garantie van 6 maanden.`,
        },
      ];

    case "assessment-selectie":
      return [
        {
          title: `Assessment & selectie in ${indLower}`,
          content: `Objectieve beoordeling van kandidaten en leiders in de ${indLower} sector vraagt om specifieke kennis van de sector. Standaard assessments missen vaak de nuance die nodig is om de juiste match te bepalen.\n\nOne Time Recruit biedt [gespecialiseerde assessments](/nl/diensten/assessment-selectie) die sectorspecifieke competenties meewegen.`,
        },
        {
          title: `Waarom sectorspecifiek assessment belangrijk is`,
          content: `Assessment in de ${indLower} sector verschilt van generieke assessments:`,
          items: [
            `Sectorkennis — ${indLower} leiders moeten branchespecifieke uitdagingen begrijpen en navigeren`,
            `Technische competenties — veel ${indLower} posities vereisen specifieke technische of domeinkennis`,
            `Culturele fit — de bedrijfscultuur in ${indLower} verschilt significant van andere sectoren`,
            `Regulatoire awareness — leiders moeten sectorspecifieke compliance-eisen begrijpen`,
          ],
        },
        {
          title: `Onze assessment-methoden voor ${indLower}`,
          content: `Wij zetten de volgende methoden in voor ${indLower} assessments:`,
          items: [
            `[STAR-interviews](/nl/star-interview-guide) — gedragsgericht interviewen met ${indLower} casussen`,
            `Competentie-assessments — sectorspecifieke competentiemodellen`,
            `[Referentiechecks](/nl/referentiechecks) — diepgaande referentiegesprekken met sector-relevante contacten`,
            `[Culture fit analyse](/nl/culture-fit-vs-culture-add) — aansluiting bij de specifieke ${indLower} cultuur`,
          ],
        },
        {
          title: `Resultaten van onze assessments`,
          content: `Onze assessments in de ${indLower} sector leveren objectieve, bruikbare inzichten op. U ontvangt een gedetailleerd rapport met sterkte-zwakte analyse, ontwikkelpunten en een concreet advies — allemaal in de context van uw ${indLower} organisatie.`,
        },
      ];

    case "leadership-advisory":
      return [
        {
          title: `Leadership advisory voor ${indLower}`,
          content: `De ${indLower} sector ondergaat continue verandering. Dit vraagt om leiders die niet alleen de huidige uitdagingen aankunnen, maar ook de organisatie voorbereiden op de toekomst.\n\nOnze [leadership advisory](/nl/diensten/leadership-advisory) diensten helpen ${indLower} organisaties bij het versterken van hun leiderschapsteam.`,
        },
        {
          title: `Leiderschapsuitdagingen in ${indLower}`,
          content: `${ind} organisaties staan voor specifieke leiderschapsuitdagingen:`,
          items: [
            `Successieplanning — het waarborgen van continuïteit bij leiderschapstransities`,
            `Team-effectiviteit — het bouwen van complementaire executive teams`,
            `Transformatie-leiderschap — het navigeren van verandering en innovatie`,
            `[Retentie van key talent](/nl/leadership-retention) — het behouden van uw beste leiders in een competitieve markt`,
          ],
        },
        {
          title: `Onze advisory-diensten voor ${indLower}`,
          content: `Wij bieden de volgende advisory-diensten specifiek voor ${indLower}:`,
          items: [
            `Board- en executive team assessment — evaluatie van uw huidige leiderschapsteam`,
            `Successieplanning — proactieve planning voor kritieke posities`,
            `[Onboarding executives](/nl/onboarding-executives) — begeleiding van nieuwe leiders in de ${indLower} context`,
            `[Employer branding](/nl/employer-brand-senior-talent) — positionering als werkgever voor senior talent`,
            `[Compensation benchmarking](/nl/compensation-benefits-trends) — marktconforme beloning voor ${indLower} executives`,
          ],
        },
        {
          title: `Resultaten`,
          content: `Onze leadership advisory levert concrete, meetbare resultaten op. Van hogere retentie van key talent tot snellere onboarding van nieuwe executives — wij helpen ${indLower} organisaties hun leiderschap te versterken.`,
        },
      ];

    case "recruitment-operating-model":
      return [
        {
          title: `Recruitment operating model voor ${indLower}`,
          content: `Veel ${indLower} organisaties worstelen met hun recruitmentproces. Te afhankelijk van externe bureaus, geen gestructureerde pijplijn, en onvoldoende data om beslissingen op te baseren.\n\nOns [recruitment operating model](/nl/diensten/recruitment-operating-model) helpt ${indLower} organisaties hun recruitment structureel te verbeteren.`,
        },
        {
          title: `Waarom ${indLower} organisaties hun recruitment moeten professionaliseren`,
          content: `De ${indLower} sector heeft specifieke recruitment-uitdagingen:`,
          items: [
            `Schaars talent — ${indLower} professionals zijn gewild, wat een proactieve benadering vereist`,
            `Hoge kosten — afhankelijkheid van externe bureaus resulteert in hoge costs-per-hire`,
            `Lange doorlooptijden — vacatures staan te lang open, wat productiviteit kost`,
            `Gebrek aan data — beslissingen worden genomen op gevoel in plaats van op data`,
          ],
        },
        {
          title: `Ons model voor ${indLower}`,
          content: `Wij bieden een pragmatisch model dat past bij ${indLower} organisaties:`,
          items: [
            `[Talent pool opbouw](/nl/talent-pool-per-vacature) — proactief opbouwen van een pool met ${indLower} professionals`,
            `[Recruitment as a Service](/nl/recruitment-as-a-service) — flexibel inschakelen van onze capaciteit`,
            `[Abonnement recruitment](/nl/abonnement-recruitment) — voorspelbare kosten, onbeperkte capaciteit`,
            `[Hiring governance](/nl/hiring-governance-reporting) — data-driven recruitment met transparante rapportage`,
            `[Talent acquisition strategy](/nl/talent-acquisition-strategy) — een strategie op maat voor uw ${indLower} organisatie`,
          ],
        },
        {
          title: `Impact voor ${indLower} organisaties`,
          content: `Onze klanten in de ${indLower} sector zien gemiddeld 40% lagere kosten per hire, 50% snellere doorlooptijden en significant hogere kwaliteit van hires. Dit alles door een structurele aanpak in plaats van ad-hoc recruitment.`,
        },
      ];

    default:
      return [];
  }
}

function getFaqs(industry: IndustryData, service: ServiceDefinition): SpokePageData["faqs"] {
  const ind = industry.title;
  const indLower = ind.toLowerCase();
  const svc = service.title;

  return [
    {
      q: `Wat maakt ${svc.toLowerCase()} in de ${indLower} sector anders?`,
      a: `De ${indLower} sector kent unieke uitdagingen qua regelgeving, marktdynamiek en talent-beschikbaarheid. Onze aanpak houdt rekening met deze specifieke context, zodat u kandidaten krijgt die niet alleen competent zijn maar ook de sector begrijpen.`,
    },
    {
      q: `Wat kost ${svc.toLowerCase()} voor ${indLower}?`,
      a: `Wij werken met een vast, transparant tarief — ongeacht senioriteitsniveau of sectorspecialisme. Neem contact op voor een offerte op maat.`,
    },
    {
      q: `Hoe snel kunnen jullie starten met een ${svc.toLowerCase()} opdracht in ${indLower}?`,
      a: `Wij kunnen doorgaans binnen 48 uur starten na akkoord. Een shortlist ontvangt u gemiddeld binnen 18 werkdagen.`,
    },
  ];
}

function getRelatedLinks(industry: IndustryData, service: ServiceDefinition): SpokePageData["relatedLinks"] {
  const links: SpokePageData["relatedLinks"] = [];
  
  // Link to the service pillar
  links.push({ label: service.title, href: service.pillarHref });
  
  // Link to the industry page
  links.push({ label: industry.title, href: `/nl/industries/${industry.slug}` });
  
  // Link to other services for same industry (max 2)
  const otherServices = serviceDefinitions.filter(s => s.slug !== service.slug).slice(0, 2);
  for (const os of otherServices) {
    links.push({
      label: `${os.shortTitle} in ${industry.title.toLowerCase()}`,
      href: `/nl/industries/${industry.slug}/${os.slug}`,
    });
  }

  return links;
}

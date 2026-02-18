import type { SpokePageData } from "@/components/layout/SpokePage";
import {
  Cpu, Monitor, Cloud, ShieldCheck, Rocket, Anchor, Zap, Leaf, Sprout, HardHat,
  Building2, Truck, TrainFront, Package, Factory, FlaskConical, UtensilsCrossed, Wheat,
  ShoppingBag, Globe, Box, Landmark, Building, Shield, Coins, Calculator, Briefcase, Scale, Users,
  Plane
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface IndustryMeta {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  cluster: string;
  primaryKeyword: string;
}

export interface IndustryData extends IndustryMeta {
  pageData: SpokePageData;
}

// Cluster groupings for the hub page
export const industryClusters = [
  { id: "tech", label: "Technology & Digital", description: "Executive search voor tech, SaaS, cybersecurity en IT-leiderschap." },
  { id: "defence", label: "Defence, Aerospace & Maritime", description: "Leiders voor defence, aerospace, luchtvaart en maritieme sector." },
  { id: "energy", label: "Energie & Duurzaamheid", description: "Executive search voor energie, renewables en cleantech." },
  { id: "built", label: "Bouw, Vastgoed & Infra", description: "Leiderschap voor bouw, vastgoed en infrastructuurprojecten." },
  { id: "logistics", label: "Logistiek, Transport & Supply Chain", description: "COO's en supply chain directors voor logistieke organisaties." },
  { id: "manufacturing", label: "Productie & Industrie", description: "Leiders voor maakindustrie, chemie en food & beverage." },
  { id: "consumer", label: "Retail & Consumer", description: "Executive search voor retail, e-commerce en consumentenmerken." },
  { id: "finance", label: "Financiële Dienstverlening", description: "Leiders voor banken, verzekeringen, fintech en accountancy." },
  { id: "services", label: "Professionele Dienstverlening", description: "Executive search voor consultancy, legal en HR services." },
];

const industries: IndustryData[] = [
  // ─── TECH ───
  {
    slug: "high-tech",
    title: "High-Tech",
    description: "Leiders voor high-tech bedrijven in semiconductors, embedded systems en deep-tech.",
    icon: Cpu,
    cluster: "tech",
    primaryKeyword: "executive search high-tech",
    pageData: {
      metaTitle: "Executive Recruitment in High-Tech | One Time Recruit",
      metaDescription: "Executive search voor de high-tech sector. Leiders voor semiconductors, embedded systems, R&D en deep-tech organisaties in de Benelux en DACH.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "High-Tech" }],
      heroLabel: "Industries",
      heroTitle: "High-tech recruitment:",
      heroHighlight: "leiders voor deep-tech",
      heroDescription: "De high-tech sector vereist leiders die innovatie sturen, R&D-teams aansturen en complexe technologie naar de markt brengen.",
      sections: [
        { title: "De uitdaging van high-tech leiderschap", content: "High-tech organisaties opereren op het snijvlak van wetenschap en commercie. Leiders moeten zowel diepgaande technische kennis hebben als het vermogen om strategische keuzes te maken in een snel veranderende markt.\n\nDe concurrentie om top-talent is intens. Silicon Valley, Eindhoven, München — high-tech clusters wereldwijd strijden om dezelfde schaarse profielen. Dit maakt [executive search](/nl/diensten/executive-search) in high-tech een specialisme dat sectorkennis en een sterk netwerk vereist." },
        { title: "Trends in high-tech hiring", content: "Drie trends domineren het leiderschapslandschap in high-tech:", items: ["Chip-soevereiniteit — Europa investeert fors in eigen halfgeleidercapaciteit, wat de vraag naar technisch leiderschap sterk vergroot", "AI-integratie — elke high-tech organisatie zoekt leiders die AI kunnen integreren in productontwikkeling en operations", "Duurzaamheid — energiezuinige technologie en circulaire productie vereisen een nieuw type leider"] },
        { title: "Profielen die wij plaatsen", content: "In de high-tech sector plaatsen wij regelmatig:", items: ["CTO / VP Engineering — technische visie en R&D-leiderschap", "VP Operations / COO — schaalbare productie en supply chain", "VP Product — productmanagement en roadmap-strategie", "GM / Managing Director — P&L-verantwoordelijkheid voor business units", "VP Sales / Commercial Director — B2B-verkoop in technische markten"] },
        { title: "Onze aanpak in high-tech", content: "One Time Recruit combineert diepgaande kennis van de high-tech sector met een bewezen [searchmethodiek](/nl/wat-is-executive-search). Ons netwerk omvat executives bij toonaangevende spelers in de Benelux, DACH en daarbuiten.\n\nElke search begint met een grondige analyse van uw technologie, marktpositie en leiderschapsbehoefte. Zo presenteren wij kandidaten die niet alleen de juiste competenties hebben, maar ook passen bij uw innovatiecultuur." },
      ],
      faqs: [
        { q: "Werven jullie ook voor startups in deep-tech?", a: "Ja. Wij werken met zowel gevestigde high-tech bedrijven als venture-backed startups die hun eerste C-level team opbouwen." },
        { q: "Hoe vinden jullie kandidaten in zo'n krappe markt?", a: "Door ons uitgebreide netwerk in high-tech clusters (Eindhoven, Delft, München, Zürich) en gerichte mapping van relevante organisaties. Wij benaderen kandidaten die niet actief zoeken." },
        { q: "Wat is de gemiddelde doorlooptijd?", a: "4-8 weken, met een shortlist na gemiddeld 18 werkdagen." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "SaaS / IT recruitment", href: "/nl/industries/saas" },
        { label: "Cybersecurity recruitment", href: "/nl/industries/cybersecurity" },
        { label: "Defence & security", href: "/nl/industries/defence-en-security" },
        { label: "CTO / CIO recruitment", href: "/nl/cto-cio-recruitment" },
      ],
    },
  },
  {
    slug: "it-en-software",
    title: "IT & Software",
    description: "Executive search voor IT-dienstverleners, software houses en digitale transformatiebedrijven.",
    icon: Monitor,
    cluster: "tech",
    primaryKeyword: "executive search it & software",
    pageData: {
      metaTitle: "Executive Recruitment in IT & Software | One Time Recruit",
      metaDescription: "Executive search voor IT & software. Leiders voor IT-dienstverleners, software houses en digitale transformatie in de Benelux.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "IT & Software" }],
      heroLabel: "Industries", heroTitle: "IT & software recruitment:", heroHighlight: "digitaal leiderschap", heroDescription: "De IT & software sector groeit explosief. Vind leiders die digitale transformatie sturen en schaalbare organisaties bouwen.",
      sections: [
        { title: "IT-leiderschap in een veranderende markt", content: "De IT-sector transformeert continu. Cloud, AI, cybersecurity en data-driven besluitvorming vereisen leiders die technologie begrijpen én strategisch kunnen denken.\n\nOf het nu gaat om een groeiende software house of een enterprise IT-dienstverlener — het vinden van de juiste [C-level](/nl/diensten/c-level-recruitment) leider bepaalt het succes van uw organisatie." },
        { title: "Hiring trends in IT & software", content: "Drie ontwikkelingen die het recruitment-landschap bepalen:", items: ["Platform-economie — steeds meer bedrijven bouwen platforms, wat vraagt om product-led leiderschap", "Talent-schaarste — de war for IT-talent dwingt organisaties tot creatieve employer branding", "Managed services groei — IT-dienstverleners schalen op, wat vraagt om operationeel leiderschap"] },
        { title: "Profielen die wij plaatsen", content: "Typische posities die wij invullen:", items: ["CTO — technische strategie en architectuur", "VP Engineering — development teams en delivery", "Chief Product Officer — productvisie en -roadmap", "Managing Director — P&L voor IT-bedrijven", "VP Sales — enterprise sales en channel partnerships"] },
        { title: "Onze IT & software expertise", content: "One Time Recruit heeft ruime ervaring in de IT-sector. Van scale-ups die hun eerste CTO zoeken tot enterprise organisaties die een Managing Director nodig hebben — wij kennen de markt en hebben het netwerk." },
      ],
      faqs: [
        { q: "Werken jullie ook voor IT-afdelingen van niet-tech bedrijven?", a: "Ja, wij plaatsen ook CIO's en IT-directeuren bij organisaties buiten de tech-sector die digitale transformatie doorvoeren." },
        { q: "Wat onderscheidt IT-recruitment van general recruitment?", a: "IT-leiders vereisen een unieke combinatie van technische diepgang en bedrijfsstrategisch inzicht. Dit vereist een recruiter die de technologie begrijpt." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "SaaS recruitment", href: "/nl/industries/saas" },
        { label: "Cybersecurity recruitment", href: "/nl/industries/cybersecurity" },
        { label: "High-tech recruitment", href: "/nl/industries/high-tech" },
        { label: "CTO / CIO recruitment", href: "/nl/cto-cio-recruitment" },
      ],
    },
  },
  {
    slug: "saas",
    title: "SaaS",
    description: "Leiders voor SaaS scale-ups en enterprise software bedrijven.",
    icon: Cloud,
    cluster: "tech",
    primaryKeyword: "executive search saas",
    pageData: {
      metaTitle: "Executive Recruitment in SaaS | One Time Recruit",
      metaDescription: "Executive search voor SaaS bedrijven. Leiders voor scale-ups en enterprise software in de Benelux en DACH-regio.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "SaaS" }],
      heroLabel: "Industries", heroTitle: "SaaS recruitment:", heroHighlight: "schaalbaar leiderschap", heroDescription: "SaaS bedrijven groeien snel en vereisen leiders die schaalbare organisaties kunnen bouwen.",
      sections: [
        { title: "De unieke dynamiek van SaaS", content: "SaaS bedrijven opereren in een hyper-competitieve markt waar product-market fit, customer retention en ARR-groei de kernmetrics zijn. Dit vereist leiders met ervaring in subscription-modellen, product-led growth en data-driven besluitvorming.\n\nOf het nu gaat om een Series A scale-up of een mature SaaS-organisatie die internationaal expandeert — de juiste leider maakt het verschil tussen lineaire en exponentiële groei." },
        { title: "SaaS hiring trends", content: "De SaaS-markt wordt gekenmerkt door:", items: ["PLG vs. sales-led — de keuze tussen product-led growth en enterprise sales bepaalt welk type leider u nodig heeft", "AI-native producten — SaaS bedrijven integreren AI als kernfunctionaliteit", "Europese expansie — Amerikaanse SaaS-bedrijven openen EMEA-kantoren, wat vraagt om lokaal leiderschap"] },
        { title: "Profielen die wij plaatsen", content: "In SaaS plaatsen wij onder andere:", items: ["CEO / Managing Director — P&L en boardroom leiderschap", "CTO — productarchitectuur en engineering", "VP Sales / CRO — revenue growth en go-to-market", "VP Customer Success — retentie en expansie", "CFO — SaaS-metrics, fundraising en investor relations"] },
        { title: "One Time Recruit in SaaS", content: "Wij begrijpen de SaaS-dynamiek: van burn rate tot NRR, van PLG tot enterprise sales. Ons netwerk in de Europese SaaS-scene stelt ons in staat om kandidaten te identificeren die aantoonbaar SaaS-organisaties hebben geschaald." },
      ],
      faqs: [
        { q: "Werken jullie ook met pre-revenue SaaS startups?", a: "Wij werken primair met SaaS bedrijven vanaf Series A, waar de eerste C-level hires cruciale groei-beslissingen zijn." },
        { q: "Begrijpen jullie SaaS-metrics?", a: "Absoluut. ARR, NRR, CAC/LTV, magic number — wij beoordelen kandidaten op hun vermogen om deze metrics te sturen." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "IT & software recruitment", href: "/nl/industries/it-en-software" },
        { label: "High-tech recruitment", href: "/nl/industries/high-tech" },
        { label: "CEO recruitment", href: "/nl/ceo-recruitment" },
        { label: "Executive search voor scale-ups", href: "/nl/diensten/executive-search" },
      ],
    },
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "CISO's en security-leiders voor organisaties die digitale weerbaarheid prioriteren.",
    icon: ShieldCheck,
    cluster: "tech",
    primaryKeyword: "executive search cybersecurity",
    pageData: {
      metaTitle: "Executive Recruitment in Cybersecurity | One Time Recruit",
      metaDescription: "Executive search voor cybersecurity. CISO's en security-leiders voor organisaties die digitale weerbaarheid serieus nemen.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Cybersecurity" }],
      heroLabel: "Industries", heroTitle: "Cybersecurity recruitment:", heroHighlight: "digitale weerbaarheid", heroDescription: "Cybersecurity is boardroom-prioriteit. Vind leiders die uw organisatie beschermen tegen de toenemende dreigingen.",
      sections: [
        { title: "Cybersecurity leiderschap is schaars", content: "De wereldwijde tekort aan cybersecurity professionals wordt geschat op 3,5 miljoen. Op C-level is dit tekort nog acuter. CISO's met bewezen ervaring in enterprise-omgevingen zijn bijzonder gewild.\n\nDit maakt [executive search](/nl/diensten/executive-search) in cybersecurity een specialisme: u heeft een partner nodig die het security-landschap begrijpt en toegang heeft tot een netwerk van senior security professionals." },
        { title: "Trends in cybersecurity leiderschap", content: "Het cybersecurity-landschap evolueert snel:", items: ["CISO naar boardroom — de CISO wordt steeds vaker een board-level positie met directe rapportage aan de CEO", "AI-gedreven threats — nieuwe dreigingen vereisen leiders die AI zowel defensief als offensief kunnen inzetten", "Regulering — NIS2, DORA en andere frameworks dwingen organisaties tot professioneel security-leiderschap"] },
        { title: "Profielen die wij plaatsen", content: "In cybersecurity plaatsen wij:", items: ["CISO — chief information security officer", "VP Security Operations — SOC en incident response leiderschap", "Head of GRC — governance, risk en compliance", "Security Architect (senior) — enterprise security architectuur", "VP Cyber bij consultancies — security practice leiderschap"] },
        { title: "Onze cybersecurity expertise", content: "One Time Recruit heeft een specialistisch netwerk in de cybersecurity-sector. Wij begrijpen het verschil tussen een security manager en een strategisch CISO, en weten welke competenties nodig zijn voor uw specifieke dreigingslandschap." },
      ],
      faqs: [
        { q: "Hoe vinden jullie CISO's die niet actief zoeken?", a: "Via ons netwerk en gerichte mapping van relevante organisaties. De meeste senior security professionals zijn passieve kandidaten." },
        { q: "Werken jullie ook voor cybersecurity-bedrijven?", a: "Ja, wij plaatsen ook leiders bij cybersecurity-vendors, MSSP's en security consultancies." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "IT & software", href: "/nl/industries/it-en-software" },
        { label: "Defence & security", href: "/nl/industries/defence-en-security" },
        { label: "High-tech", href: "/nl/industries/high-tech" },
        { label: "CTO / CIO recruitment", href: "/nl/cto-cio-recruitment" },
      ],
    },
  },
  // ─── DEFENCE / AEROSPACE / MARITIME ───
  {
    slug: "defence-en-security",
    title: "Defence & Security",
    description: "Security-cleared leiders voor defence-organisaties en overheidsgerelateerde bedrijven.",
    icon: Shield,
    cluster: "defence",
    primaryKeyword: "executive search defence & security",
    pageData: {
      metaTitle: "Executive Recruitment in Defence & Security | One Time Recruit",
      metaDescription: "Executive search voor defence en security. Leiders voor defensiebedrijven, overheidscontractors en veiligheidsdiensten.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Defence & Security" }],
      heroLabel: "Industries", heroTitle: "Defence & security:", heroHighlight: "leiderschap onder druk", heroDescription: "De defence-sector vereist leiders met security clearance, strategisch inzicht en ervaring in complexe overheidsomgevingen.",
      sections: [
        { title: "De complexiteit van defence recruitment", content: "Defence recruitment is fundamenteel anders dan civiele executive search. Security clearances, overheidscontracten, ITAR/EAR-regelgeving en de unieke cultuur van defence-organisaties vereisen een gespecialiseerde aanpak.\n\nOne Time Recruit heeft ervaring in het navigeren van deze complexiteit en beschikt over een netwerk van [senior leiders](/nl/diensten/c-level-recruitment) in de defence-sector." },
        { title: "Trends in defence leiderschap", content: "De defence-sector ondergaat significante veranderingen:", items: ["Defensie-investeringen — Europese landen verhogen defensiebudgetten, wat de vraag naar leiderschap sterk vergroot", "Dual-use technologie — de grens tussen civiele en militaire technologie vervaagt", "Digitalisering — cyber warfare, AI en autonomous systems vereisen tech-savvy leiders"] },
        { title: "Profielen die wij plaatsen", content: "In defence & security plaatsen wij:", items: ["CEO / Managing Director — defence contractors en system integrators", "VP Engineering — wapensystemen, C4ISR, electronic warfare", "BD Director — overheidscontracten en international sales", "VP Operations — productie en supply chain voor defence", "CISO / VP Cyber — cyber defence en security operations"] },
        { title: "One Time Recruit in defence", content: "Wij begrijpen de unieke dynamiek van de defence-sector. Ons netwerk omvat executives bij prime contractors, mid-tier defence bedrijven en dual-use tech organisaties in Nederland en Europa." },
      ],
      faqs: [
        { q: "Hoe gaan jullie om met security clearances?", a: "Wij identificeren kandidaten die reeds over relevante clearances beschikken of in aanmerking komen. Dit bespreken wij in een vroeg stadium." },
        { q: "Werken jullie ook voor overheidsorganisaties?", a: "Ja, wij werken met zowel private defence-bedrijven als overheidsorganisaties en semi-publieke instellingen." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Aerospace", href: "/nl/industries/aerospace" },
        { label: "High-tech", href: "/nl/industries/high-tech" },
        { label: "Cybersecurity", href: "/nl/industries/cybersecurity" },
        { label: "Confidential search", href: "/nl/confidential-search" },
      ],
    },
  },
  {
    slug: "aerospace",
    title: "Aerospace",
    description: "Executive search voor ruimtevaart, vliegtuigbouw en aerospace-toeleveranciers.",
    icon: Rocket,
    cluster: "defence",
    primaryKeyword: "executive search aerospace",
    pageData: {
      metaTitle: "Executive Recruitment in Aerospace | One Time Recruit",
      metaDescription: "Executive search voor de aerospace-sector. Leiders voor vliegtuigbouw, ruimtevaart en aerospace-toeleveranciers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Aerospace" }],
      heroLabel: "Industries", heroTitle: "Aerospace recruitment:", heroHighlight: "sky is not the limit", heroDescription: "De aerospace-industrie vereist leiders met engineering-diepgang en ervaring in gereguleerde productieomgevingen.",
      sections: [
        { title: "Aerospace leiderschap", content: "De aerospace-sector is een van de meest veeleisende industrieën ter wereld. Leiders moeten balanceren tussen veiligheid, innovatie, complexe supply chains en strikte certificeringseisen.\n\nOf het nu gaat om vliegtuigbouw (OEM), MRO, space of tier-1 toeleveranciers — de juiste leider bepaalt het succes van langdurige programma's." },
        { title: "Trends in aerospace", content: "De sector transformeert:", items: ["Sustainable aviation — elektrisch vliegen, SAF en waterstof vereisen nieuw leiderschap", "New Space — commerciële ruimtevaart creëert nieuwe leiderschapsbehoefte", "Supply chain resilience — post-COVID herstel dwingt tot herontwerp van supply chains"] },
        { title: "Profielen die wij plaatsen", content: "Typische posities:", items: ["VP Engineering / CTO — programma-leiderschap en R&D", "VP Operations — productie, kwaliteit en supply chain", "CEO / MD — business unit of dochteronderneming", "VP Sales / BD — airline customers en overheidscontracten", "VP Quality & Compliance — AS9100, EASA Part 21/145"] },
        { title: "One Time Recruit in aerospace", content: "Ons netwerk in aerospace omvat executives bij OEM's, tier-1 suppliers, MRO-organisaties en space-bedrijven in Europa. Wij begrijpen de certificeringseisen en de unieke cultuur van deze sector." },
      ],
      faqs: [
        { q: "Werven jullie ook voor de space-sector?", a: "Ja. New Space is een groeiend segment waarin wij leiders plaatsen voor commerciële ruimtevaartbedrijven en satellietoperators." },
        { q: "Is aerospace-ervaring verplicht voor kandidaten?", a: "Voor de meeste posities wel. De certificeringseisen en safety-cultuur maken sectorervaring essentieel." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Defence & security", href: "/nl/industries/defence-en-security" },
        { label: "Aviation", href: "/nl/industries/aviation" },
        { label: "High-tech", href: "/nl/industries/high-tech" },
        { label: "Operations & supply chain", href: "/nl/industries/supply-chain" },
      ],
    },
  },
  {
    slug: "aviation",
    title: "Aviation",
    description: "Leadership voor airlines, MRO, airports en aviation services.",
    icon: Plane,
    cluster: "defence",
    primaryKeyword: "executive search aviation",
    pageData: {
      metaTitle: "Aviation Recruitment: Leadership voor de Luchtvaartsector | One Time Recruit",
      metaDescription: "Executive search voor de luchtvaartsector. Leiders voor airlines, MRO, airports en aviation services.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Aviation" }],
      heroLabel: "Industries", heroTitle: "Aviation recruitment:", heroHighlight: "leadership voor de luchtvaart", heroDescription: "De luchtvaartsector vereist leiders met unieke competenties. Van safety-first cultuur tot operationele complexiteit.",
      sections: [
        { title: "Waarom aviation recruitment uniek is", content: "De luchtvaartsector kent unieke uitdagingen. Leiders moeten opereren in een sterk gereguleerde omgeving, omgaan met 24/7 operaties en balanceren tussen veiligheid, efficiëntie en klanttevredenheid.\n\nDe talentpool is relatief klein: aviation-specifieke ervaring is schaars en sterk gewaardeerd. Dit maakt [executive search](/nl/diensten/executive-search) in de luchtvaart een specialisme." },
        { title: "Posities die wij invullen", content: "In aviation vullen wij posities in op alle niveaus van senior leiderschap:", items: ["CEO / Managing Director — airline, MRO, ground handling", "COO / VP Operations — flight operations, crew management", "VP Safety & Compliance — EASA compliance, regulatory affairs", "VP Commercial — revenue management, route planning", "VP Engineering & Maintenance — MRO, fleet management"] },
        { title: "Specifieke aviation competenties", content: "Bij het evalueren van aviation-kandidaten letten wij op:", items: ["Safety-first mindset", "Regulatory awareness (EASA, ICAO)", "Operationele complexiteit (24/7 operaties)", "Stakeholder management (autoriteiten, vakbonden)", "Verandervermogen (duurzaamheid, digitalisering)"] },
        { title: "One Time Recruit in aviation", content: "We werken samen met airlines, MRO-bedrijven, airports en aviation services organisaties. Ons netwerk omvat executives in heel Europa en het Midden-Oosten." },
      ],
      faqs: [
        { q: "Werft One Time Recruit ook piloten of cabin crew?", a: "Nee, wij richten ons exclusief op senior leiderschapsposities: C-level, VP en directie." },
        { q: "Hoe snel kan een aviation executive geplaatst worden?", a: "4-8 weken, met een shortlist na gemiddeld 18 werkdagen." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Aerospace", href: "/nl/industries/aerospace" },
        { label: "Defence & security", href: "/nl/industries/defence-en-security" },
        { label: "Operations & supply chain", href: "/nl/industries/supply-chain" },
        { label: "CEO recruitment", href: "/nl/ceo-recruitment" },
      ],
    },
  },
  {
    slug: "maritime",
    title: "Maritime",
    description: "Executive search voor scheepvaart, havens, offshore en maritieme dienstverlening.",
    icon: Anchor,
    cluster: "defence",
    primaryKeyword: "executive search maritime",
    pageData: {
      metaTitle: "Executive Recruitment in Maritime | One Time Recruit",
      metaDescription: "Executive search voor de maritieme sector. Leiders voor scheepvaart, havens, offshore en maritieme dienstverlening.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Maritime" }],
      heroLabel: "Industries", heroTitle: "Maritime recruitment:", heroHighlight: "leiderschap op het water", heroDescription: "De maritieme sector vereist leiders met operationele ervaring, internationale oriëntatie en kennis van maritieme regelgeving.",
      sections: [
        { title: "Maritime leiderschap", content: "Nederland heeft een trotse maritieme traditie. Van Rotterdam als grootste haven van Europa tot een sterke positie in dredging, offshore en scheepsbouw — de sector vereist leiders die internationaal opereren.\n\nDe energietransitie, digitalisering en geopolitieke verschuivingen maken het leiderschapslandschap complexer dan ooit." },
        { title: "Trends", content: "Drie trends in maritime leiderschap:", items: ["Energietransitie — offshore wind, LNG en waterstof creëren nieuwe leiderschapsbehoefte", "Digitalisering — smart shipping, port automation en predictive maintenance", "ESG — decarbonisatie en duurzame scheepvaart worden boardroom-thema's"] },
        { title: "Profielen", content: "Typische maritime plaatsingen:", items: ["CEO / MD — rederijen, havenbedrijven, offshore contractors", "COO — operationeel leiderschap en fleet management", "VP Commercial — international shipping, contract management", "CTO — maritime technology en innovatie", "VP HSE — health, safety, environment in offshore"] },
        { title: "One Time Recruit in maritime", content: "Ons netwerk omvat executives in de Rotterdamse haven, offshore-sector en internationale scheepvaart. Wij begrijpen de maritieme cultuur en regelgeving." },
      ],
      faqs: [
        { q: "Werken jullie ook voor offshore wind?", a: "Ja, offshore wind is een groeiend segment waarin wij leiders plaatsen." },
        { q: "Is maritieme ervaring vereist?", a: "Voor operationele posities meestal wel. Voor finance of HR functies kan cross-sector ervaring waardevol zijn." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Logistiek", href: "/nl/industries/logistiek" },
        { label: "Energie & utilities", href: "/nl/industries/energie-en-utilities" },
        { label: "Transport", href: "/nl/industries/transport" },
        { label: "Operations & supply chain", href: "/nl/industries/supply-chain" },
      ],
    },
  },
  // ─── ENERGY ───
  {
    slug: "energie-en-utilities",
    title: "Energie & Utilities",
    description: "Leiders voor energiebedrijven, nutsbedrijven en de energietransitie.",
    icon: Zap,
    cluster: "energy",
    primaryKeyword: "executive search energie & utilities",
    pageData: {
      metaTitle: "Executive Recruitment in Energie & Utilities | One Time Recruit",
      metaDescription: "Executive search voor energie en utilities. Leiders voor energiebedrijven, nutsbedrijven en de energietransitie.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Energie & Utilities" }],
      heroLabel: "Industries", heroTitle: "Energie & utilities:", heroHighlight: "de energietransitie leiden", heroDescription: "De energiesector transformeert. Vind leiders die de transitie van fossiel naar duurzaam succesvol navigeren.",
      sections: [
        { title: "Energie in transitie", content: "De energiesector maakt een historische transformatie door. Van fossiele brandstoffen naar hernieuwbare energie, van gecentraliseerde productie naar decentrale systemen. Dit vereist een nieuw type leider.\n\nLeiders in energie moeten zowel de legacy-business managen als de toekomst bouwen. Dit is een zeldzame combinatie van competenties." },
        { title: "Trends", content: "Bepalende trends:", items: ["Energietransitie — renewables, waterstof en energy storage", "Regulatory complexity — Europese energieregelgeving wordt steeds complexer", "Digitalisering — smart grids, energy trading platforms en data-driven operations"] },
        { title: "Profielen", content: "In energie & utilities plaatsen wij:", items: ["CEO / MD — energiebedrijven en nutsbedrijven", "CTO — energy technology en innovatie", "VP Operations — productie, distributie en netbeheer", "VP Strategy — energietransitie en portfoliomanagement", "CFO — regulated finance en project finance"] },
        { title: "One Time Recruit in energie", content: "Wij hebben ervaring met de complexiteit van gereguleerde energiemarkten en begrijpen de spanning tussen legacy en innovatie die deze sector kenmerkt." },
      ],
      faqs: [
        { q: "Werken jullie ook voor startups in energie?", a: "Ja, met name in cleantech en renewable energy werken wij met innovatieve startups en scale-ups." },
        { q: "Begrijpen jullie de regulering?", a: "Ja. Energieregulering, toezichthouders (ACM) en marktstructuren zijn onderdeel van ons assessmentproces." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Renewable energy", href: "/nl/industries/renewable-energy" },
        { label: "Cleantech", href: "/nl/industries/cleantech" },
        { label: "Chemie", href: "/nl/industries/chemie" },
        { label: "Operations & supply chain", href: "/nl/industries/supply-chain" },
      ],
    },
  },
  {
    slug: "renewable-energy",
    title: "Renewable Energy",
    description: "Executive search voor wind, solar, waterstof en energy storage.",
    icon: Leaf,
    cluster: "energy",
    primaryKeyword: "executive search renewable energy",
    pageData: {
      metaTitle: "Executive Recruitment in Renewable Energy | One Time Recruit",
      metaDescription: "Executive search voor renewable energy. Leiders voor wind, solar, waterstof en energy storage bedrijven.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Renewable Energy" }],
      heroLabel: "Industries", heroTitle: "Renewable energy:", heroHighlight: "duurzaam leiderschap", heroDescription: "De renewable energy sector groeit explosief. Vind leiders die de duurzame toekomst vormgeven.",
      sections: [
        { title: "De groei van renewables", content: "Renewable energy is de snelst groeiende energiesector ter wereld. Wind, solar, waterstof en battery storage creëren een enorme vraag naar leiderschap.\n\nDe uitdaging: veel organisaties groeien sneller dan hun management kan bijhouden. De juiste leiders schalen niet alleen de technologie, maar ook de organisatie." },
        { title: "Trends", content: "Drie trends:", items: ["Waterstof — groene waterstof creëert een geheel nieuwe industrie", "Offshore wind — schaalvergroting van projecten vereist ervaren leiders", "Energy storage — battery technology en grid-scale storage worden cruciaal"] },
        { title: "Profielen", content: "Posities die wij invullen:", items: ["CEO / MD — renewable energy developers en operators", "VP Development — project development en permitting", "CTO — technology en engineering", "VP Finance — project finance en green bonds", "VP Operations — asset management en O&M"] },
        { title: "Onze aanpak", content: "One Time Recruit combineert kennis van de energiesector met ervaring in het plaatsen van leiders bij snelgroeiende organisaties. Wij begrijpen zowel de technologie als de commerciële dynamiek van renewables." },
      ],
      faqs: [
        { q: "Hebben jullie ervaring in waterstof?", a: "Ja, waterstof is een groeiend segment. Wij plaatsen leiders bij zowel electrolyser-fabrikanten als hydrogen project developers." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Energie & utilities", href: "/nl/industries/energie-en-utilities" },
        { label: "Cleantech", href: "/nl/industries/cleantech" },
        { label: "Maritime (offshore wind)", href: "/nl/industries/maritime" },
      ],
    },
  },
  {
    slug: "cleantech",
    title: "Cleantech",
    description: "Leiders voor cleantech startups en scale-ups in circulaire economie en duurzaamheid.",
    icon: Sprout,
    cluster: "energy",
    primaryKeyword: "executive search cleantech",
    pageData: {
      metaTitle: "Executive Recruitment in Cleantech | One Time Recruit",
      metaDescription: "Executive search voor cleantech. Leiders voor circulaire economie, duurzaamheid en milieu-innovatie.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Cleantech" }],
      heroLabel: "Industries", heroTitle: "Cleantech recruitment:", heroHighlight: "circulair leiderschap", heroDescription: "Cleantech vereist leiders die duurzame innovatie kunnen schalen naar commercieel succes.",
      sections: [
        { title: "Cleantech: van niche naar mainstream", content: "Cleantech is uitgegroeid van een niche tot een van de meest dynamische sectoren. Van circular economy tot carbon capture, van water technology tot sustainable materials — de sector vereist leiders die technologie, commercie en impact combineren." },
        { title: "Trends", content: "Bepalende ontwikkelingen:", items: ["Circulaire economie — steeds meer bedrijven omarmen circulaire businessmodellen", "Carbon markets — carbon credits en EU ETS creëren nieuwe business opportunities", "Impact investing — ESG-gedreven investeerders zoeken leiders met impact-track record"] },
        { title: "Profielen", content: "Posities die wij invullen:", items: ["CEO / MD — cleantech bedrijven en scale-ups", "CTO — sustainable technology en product development", "VP Business Development — commercialisatie en partnerships", "VP Operations — schaalbare productie", "CFO — green finance en impact reporting"] },
        { title: "Onze cleantech expertise", content: "Wij begrijpen de unieke uitdagingen van cleantech: de lange ontwikkeltijd, complexe regulering en de noodzaak om impact én rendement te leveren." },
      ],
      faqs: [
        { q: "Wat is het verschil tussen cleantech en renewable energy?", a: "Renewable energy is een subsegment van cleantech. Cleantech omvat ook water, waste, circular economy, carbon capture en sustainable materials." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Renewable energy", href: "/nl/industries/renewable-energy" },
        { label: "Energie & utilities", href: "/nl/industries/energie-en-utilities" },
        { label: "Chemie", href: "/nl/industries/chemie" },
      ],
    },
  },
  // ─── BUILT ENVIRONMENT ───
  {
    slug: "bouw-en-infra",
    title: "Bouw & Infra",
    description: "Executive search voor bouwbedrijven, infra-aannemers en projectontwikkelaars.",
    icon: HardHat,
    cluster: "built",
    primaryKeyword: "executive search bouw & infra",
    pageData: {
      metaTitle: "Executive Recruitment in Bouw & Infra | One Time Recruit",
      metaDescription: "Executive search voor bouw en infra. Leiders voor bouwbedrijven, aannemers en projectontwikkelaars in Nederland.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Bouw & Infra" }],
      heroLabel: "Industries", heroTitle: "Bouw & infra:", heroHighlight: "bouwend leiderschap", heroDescription: "De bouw- en infrasector vereist leiders die grote projecten aansturen, teams motiveren en veiligheid waarborgen.",
      sections: [
        { title: "Leiderschap in bouw & infra", content: "De bouwsector staat voor enorme uitdagingen: woningtekort, stikstofcrisis, verduurzaming en digitalisering. Dit vereist leiders die niet alleen projecten kunnen sturen, maar ook de transformatie van de sector vormgeven." },
        { title: "Trends", content: "Drie trends:", items: ["Industrieel bouwen — modulair en fabrieksmatig bouwen vereist ander leiderschap", "Digitalisering — BIM, digital twins en data-driven constructie", "Duurzaamheid — circulair bouwen, energieneutrale gebouwen en BREEAM"] },
        { title: "Profielen", content: "Typische plaatsingen:", items: ["CEO / MD — bouwbedrijven en installatietechniek", "COO — operationeel leiderschap en projectdirectie", "Directeur Vastgoedontwikkeling — projectontwikkeling", "VP Tenders — aanbestedingen en contractmanagement", "CTO / Directeur Innovatie — digitalisering en verduurzaming"] },
        { title: "Onze bouw-expertise", content: "Wij kennen de bouw- en infrasector en begrijpen de projectmatige cultuur, de aanbestedingsdynamiek en de uitdagingen van een krappe arbeidsmarkt." },
      ],
      faqs: [
        { q: "Werken jullie ook voor installatiebedrijven?", a: "Ja, installatietechniek is een groeiend segment, met name door de energietransitie." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Vastgoed", href: "/nl/industries/vastgoed" },
        { label: "Operations & supply chain", href: "/nl/industries/supply-chain" },
        { label: "Energie & utilities", href: "/nl/industries/energie-en-utilities" },
      ],
    },
  },
  {
    slug: "vastgoed",
    title: "Vastgoed",
    description: "Executive search voor vastgoedbeleggers, ontwikkelaars en property managers.",
    icon: Building2,
    cluster: "built",
    primaryKeyword: "executive search vastgoed",
    pageData: {
      metaTitle: "Executive Recruitment in Vastgoed | One Time Recruit",
      metaDescription: "Executive search voor vastgoed. Leiders voor vastgoedbeleggers, projectontwikkelaars en property management.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Vastgoed" }],
      heroLabel: "Industries", heroTitle: "Vastgoed recruitment:", heroHighlight: "strategisch vastgoedleiderschap", heroDescription: "De vastgoedsector vereist leiders met financieel inzicht, marktkennis en strategische visie.",
      sections: [
        { title: "Vastgoed in beweging", content: "De vastgoedsector maakt turbulente tijden door. Rentestijgingen, ESG-eisen, woningtekort en veranderend consumentengedrag (hybride werken) vereisen leiders die navigeren in onzekerheid." },
        { title: "Trends", content: "Bepalende trends:", items: ["ESG & verduurzaming — Parijslabel en CRREM-paden dwingen tot actie", "Alternatieve assets — logistiek, healthcare en student housing groeien", "PropTech — technologie transformeert de sector"] },
        { title: "Profielen", content: "Posities die wij invullen:", items: ["CEO / MD — vastgoedfondsen en ontwikkelaars", "CIO — investment management en portfolio strategie", "Director Asset Management — waardecreatie en optimalisatie", "CFO — real estate finance en fund structuring", "Director Development — projectontwikkeling en gebiedsontwikkeling"] },
        { title: "Onze vastgoed-expertise", content: "Wij begrijpen de vastgoedmarkt, de beleggingscyclus en de dynamiek tussen ontwikkelaars, beleggers en operators." },
      ],
      faqs: [
        { q: "Werken jullie ook voor REIT's?", a: "Ja, wij plaatsen leiders bij beursgenoteerde en private vastgoedfondsen." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Bouw & infra", href: "/nl/industries/bouw-en-infra" },
        { label: "Financiële dienstverlening", href: "/nl/industries/financiele-dienstverlening" },
        { label: "CFO recruitment", href: "/nl/cfo-recruitment" },
      ],
    },
  },
  // ─── LOGISTICS ───
  {
    slug: "logistiek",
    title: "Logistiek",
    description: "Executive search voor logistiek dienstverleners, 3PL en warehousing.",
    icon: Truck,
    cluster: "logistics",
    primaryKeyword: "executive search logistiek",
    pageData: {
      metaTitle: "Executive Recruitment in Logistiek | One Time Recruit",
      metaDescription: "Executive search voor logistiek. Leiders voor 3PL, warehousing en logistiek dienstverleners.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Logistiek" }],
      heroLabel: "Industries", heroTitle: "Logistiek recruitment:", heroHighlight: "operationeel leiderschap", heroDescription: "De logistieke sector vereist leiders die operationele excellentie combineren met strategische visie.",
      sections: [
        { title: "Logistiek leiderschap", content: "Nederland is een logistieke hub van wereldklasse. Van Schiphol tot de Rotterdamse haven, van Venlo tot Tilburg — de logistieke sector vereist leiders die complexe operaties aansturen en tegelijkertijd innoveren." },
        { title: "Trends", content: "Drie trends:", items: ["Automatisering — warehousing robots, autonomous vehicles en drone delivery", "Last-mile innovatie — snellere, groenere last-mile oplossingen", "Duurzaamheid — zero-emission logistics en circulaire supply chains"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / MD — logistiek dienstverleners", "COO — operationeel leiderschap", "VP Supply Chain — end-to-end supply chain management", "CTO — logistics technology en automatisering", "VP Sales / Commercial — contract logistics en key accounts"] },
        { title: "Onze logistiek expertise", content: "Wij kennen de Nederlandse logistieke sector en begrijpen de operationele complexiteit en schaaluitdagingen." },
      ],
      faqs: [
        { q: "Werken jullie ook voor e-commerce fulfilment bedrijven?", a: "Ja, e-commerce fulfilment is een snel groeiend segment binnen logistiek." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Transport", href: "/nl/industries/transport" },
        { label: "Supply chain", href: "/nl/industries/supply-chain" },
        { label: "E-commerce", href: "/nl/industries/e-commerce" },
      ],
    },
  },
  {
    slug: "transport",
    title: "Transport",
    description: "Leiders voor transportbedrijven, OV en mobiliteitsorganisaties.",
    icon: TrainFront,
    cluster: "logistics",
    primaryKeyword: "executive search transport",
    pageData: {
      metaTitle: "Executive Recruitment in Transport | One Time Recruit",
      metaDescription: "Executive search voor transport. Leiders voor transportbedrijven, OV en mobiliteitsorganisaties.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Transport" }],
      heroLabel: "Industries", heroTitle: "Transport recruitment:", heroHighlight: "mobiliteit in transitie", heroDescription: "De transportsector transformeert. Van elektrificatie tot MaaS — vind leiders die de toekomst van mobiliteit vormgeven.",
      sections: [
        { title: "Transport leiderschap", content: "De transportsector ondergaat een fundamentele transformatie. Elektrificatie, autonome voertuigen, deelmobiliteit en Mobility-as-a-Service (MaaS) veranderen het speelveld volledig." },
        { title: "Trends", content: "Drie trends:", items: ["Elektrificatie — zero-emission voertuigen en laadinfrastructuur", "MaaS — geïntegreerde mobiliteitsplatforms", "Autonomie — zelfrijdende voertuigen en trucks"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / MD — transportbedrijven en OV-operators", "COO — vlootbeheer en operaties", "VP Strategy — mobiliteitsvisie en transformatie", "CTO — mobility technology en innovatie"] },
        { title: "Onze expertise", content: "Wij begrijpen de transportsector, van wegtransport tot OV en van automotive tot nieuwe mobiliteitsconcepten." },
      ],
      faqs: [
        { q: "Werken jullie ook voor automotive bedrijven?", a: "Ja, met name voor OEM's en tier-1 suppliers die de transitie naar elektrisch rijden maken." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Logistiek", href: "/nl/industries/logistiek" },
        { label: "Supply chain", href: "/nl/industries/supply-chain" },
        { label: "Aviation", href: "/nl/industries/aviation" },
      ],
    },
  },
  {
    slug: "supply-chain",
    title: "Supply Chain",
    description: "COO's en supply chain directors voor complexe, internationale supply chains.",
    icon: Package,
    cluster: "logistics",
    primaryKeyword: "executive search supply chain",
    pageData: {
      metaTitle: "Executive Recruitment in Supply Chain | One Time Recruit",
      metaDescription: "Executive search voor supply chain. COO's en supply chain directors voor productie, logistiek en internationale operaties.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Supply Chain" }],
      heroLabel: "Industries", heroTitle: "Supply chain recruitment:", heroHighlight: "end-to-end leiderschap", heroDescription: "Supply chain management is strategischer dan ooit. Vind leiders die resiliente, efficiënte ketens bouwen.",
      sections: [
        { title: "Supply chain als strategisch wapen", content: "COVID, geopolitiek en de energiecrisis hebben aangetoond dat supply chain management een boardroom-onderwerp is. De juiste supply chain leider creëert niet alleen efficiëntie, maar ook veerkracht en concurrentievoordeel." },
        { title: "Trends", content: "Drie trends:", items: ["Nearshoring — bedrijven heroverwegen hun sourcingstrategie", "Digitale supply chain — digital twins, AI-forecasting en control towers", "Circulaire supply chain — reverse logistics en cradle-to-cradle"] },
        { title: "Profielen", content: "Posities:", items: ["Chief Supply Chain Officer — end-to-end ketenregie", "VP Procurement — strategic sourcing en supplier management", "VP Operations — productie en manufacturing", "VP Logistics — warehousing, distributie en transport", "VP Planning — demand planning, S&OP en inventory management"] },
        { title: "Onze supply chain expertise", content: "Wij begrijpen de complexiteit van internationale supply chains en plaatsen leiders die zowel strategisch als operationeel sterk zijn." },
      ],
      faqs: [
        { q: "Plaatsen jullie ook interim supply chain leiders?", a: "Ja. Via onze [interim search](/nl/diensten) dienst plaatsen wij interim COO's en supply chain directors." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Logistiek", href: "/nl/industries/logistiek" },
        { label: "Productie & maakindustrie", href: "/nl/industries/productie-en-maakindustrie" },
        { label: "Transport", href: "/nl/industries/transport" },
        { label: "COO recruitment", href: "/nl/diensten/executive-search" },
      ],
    },
  },
  // ─── MANUFACTURING ───
  {
    slug: "productie-en-maakindustrie",
    title: "Productie & Maakindustrie",
    description: "Leiders voor productiebedrijven, maakindustrie en industriële organisaties.",
    icon: Factory,
    cluster: "manufacturing",
    primaryKeyword: "executive search productie & maakindustrie",
    pageData: {
      metaTitle: "Executive Recruitment in Productie & Maakindustrie | One Time Recruit",
      metaDescription: "Executive search voor productie en maakindustrie. Leiders voor productiebedrijven en industriële organisaties.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Productie & Maakindustrie" }],
      heroLabel: "Industries", heroTitle: "Maakindustrie:", heroHighlight: "productie-leiderschap", heroDescription: "De maakindustrie digitaliseert en verduurzaamt. Vind leiders die productie-excellentie combineren met innovatie.",
      sections: [
        { title: "Productie in transformatie", content: "De Nederlandse maakindustrie staat voor een dubbele transitie: digitalisering (Industry 4.0) en verduurzaming. Dit vereist leiders die operationele excellentie combineren met verandervermogen." },
        { title: "Trends", content: "Bepalende trends:", items: ["Industry 4.0 — IoT, robotisering en data-driven manufacturing", "Reshoring — terugkeer van productie naar Europa", "Duurzame productie — energieneutrale fabrieken en circulaire processen"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / MD — productiebedrijven", "COO / VP Operations — operationeel leiderschap", "VP Manufacturing — plant management en continuous improvement", "CTO — productie-innovatie en automation", "VP Quality — kwaliteitsmanagement en certificering"] },
        { title: "Onze expertise", content: "Wij begrijpen de maakindustrie en plaatsen leiders die de transformatie van traditionele productie naar smart manufacturing aansturen." },
      ],
      faqs: [
        { q: "Werken jullie ook voor familiebedrijven in de maakindustrie?", a: "Ja, veel van onze klanten in de maakindustrie zijn familiebedrijven, wat een specifieke dynamiek met zich meebrengt." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Supply chain", href: "/nl/industries/supply-chain" },
        { label: "Chemie", href: "/nl/industries/chemie" },
        { label: "Food & beverage", href: "/nl/industries/food-en-beverage" },
      ],
    },
  },
  {
    slug: "chemie",
    title: "Chemie",
    description: "Executive search voor chemische industrie, specialties en basischemie.",
    icon: FlaskConical,
    cluster: "manufacturing",
    primaryKeyword: "executive search chemie",
    pageData: {
      metaTitle: "Executive Recruitment in Chemie | One Time Recruit",
      metaDescription: "Executive search voor de chemische industrie. Leiders voor specialty chemicals, basischemie en petrochemie.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Chemie" }],
      heroLabel: "Industries", heroTitle: "Chemie recruitment:", heroHighlight: "procesleiderschap", heroDescription: "De chemische industrie vereist leiders met technische diepgang, safety-bewustzijn en transformatievermogen.",
      sections: [
        { title: "Chemie: innovatie en transformatie", content: "De chemische industrie staat aan de basis van talloze waardeketens. Van basischemie tot specialty chemicals — de sector transformeert onder druk van duurzaamheid, circulaire economie en strengere regelgeving." },
        { title: "Trends", content: "Drie trends:", items: ["Circulaire chemie — chemische recycling en bio-based materials", "Decarbonisatie — groene waterstof en elektrificatie van processen", "Digitalisering — digital twins voor procesoptimalisatie"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / MD — chemische bedrijven en business units", "VP R&D — innovatie en productontwikkeling", "VP Operations — plant management en HSE", "VP Sales — key account management en distribution", "VP Supply Chain — procurement en logistics"] },
        { title: "Onze chemie-expertise", content: "Wij kennen de chemische industrie en begrijpen de complexiteit van REACH-regulering, safety-cultuur en de technische eisen aan leiderschap." },
      ],
      faqs: [
        { q: "Werken jullie ook voor petrochemie?", a: "Ja, petrochemie is een van onze subsegmenten, met name in de Rotterdam-Antwerpen corridor." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Productie & maakindustrie", href: "/nl/industries/productie-en-maakindustrie" },
        { label: "Energie & utilities", href: "/nl/industries/energie-en-utilities" },
        { label: "Cleantech", href: "/nl/industries/cleantech" },
      ],
    },
  },
  {
    slug: "food-en-beverage",
    title: "Food & Beverage",
    description: "Leiders voor voedingsmiddelenindustrie, drankenindustrie en FMCG-food.",
    icon: UtensilsCrossed,
    cluster: "manufacturing",
    primaryKeyword: "executive search food & beverage",
    pageData: {
      metaTitle: "Executive Recruitment in Food & Beverage | One Time Recruit",
      metaDescription: "Executive search voor food & beverage. Leiders voor voedingsmiddelenindustrie en FMCG-food organisaties.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Food & Beverage" }],
      heroLabel: "Industries", heroTitle: "Food & beverage:", heroHighlight: "smaakvolle leiders", heroDescription: "De voedingsindustrie vereist leiders die innovatie, voedselveiligheid en duurzaamheid combineren.",
      sections: [
        { title: "F&B leiderschap", content: "De food & beverage sector is een van de grootste industrieën ter wereld. Nederlandse bedrijven spelen een toonaangevende rol, van Unilever tot FrieslandCampina. De sector vereist leiders die consumententrends begrijpen en complexe supply chains aansturen." },
        { title: "Trends", content: "Trends:", items: ["Plant-based — de eiwittransitie creëert nieuwe leiders", "Voedselveiligheid — strengere regelgeving en consumentenbewustzijn", "Duurzame verpakkingen — circular packaging wordt de norm"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / MD — food bedrijven en business units", "VP Operations — productie en supply chain", "VP R&D — productinnovatie en food science", "VP Marketing — brand management en consumer insights", "VP Quality — voedselveiligheid en certificeringen"] },
        { title: "Onze F&B expertise", content: "Wij begrijpen de food & beverage sector en hebben een netwerk van executives bij toonaangevende food-bedrijven in de Benelux." },
      ],
      faqs: [
        { q: "Werken jullie ook voor horeca-ketens?", a: "Wij richten ons op de food manufacturing en FMCG-food kant, niet op individuele horecabedrijven." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Agri & horticulture", href: "/nl/industries/agri-en-horticulture" },
        { label: "Retail", href: "/nl/industries/retail" },
        { label: "Supply chain", href: "/nl/industries/supply-chain" },
      ],
    },
  },
  {
    slug: "agri-en-horticulture",
    title: "Agri & Horticulture",
    description: "Executive search voor landbouw, tuinbouw en agri-food bedrijven.",
    icon: Wheat,
    cluster: "manufacturing",
    primaryKeyword: "executive search agri & horticulture",
    pageData: {
      metaTitle: "Executive Recruitment in Agri & Horticulture | One Time Recruit",
      metaDescription: "Executive search voor agri en horticulture. Leiders voor landbouw, tuinbouw en agri-food organisaties.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Agri & Horticulture" }],
      heroLabel: "Industries", heroTitle: "Agri & horticulture:", heroHighlight: "van bodem tot boardroom", heroDescription: "De agri-food sector staat voor enorme transities. Vind leiders die duurzame innovatie combineren met commercieel succes.",
      sections: [
        { title: "Agri-leiderschap in transitie", content: "De Nederlandse agri- en tuinbouwsector is wereldwijd toonaangevend. Van Wageningen tot de Westlandse kassen — innovatie en export zijn de drijvende krachten. Maar de sector staat voor grote uitdagingen: stikstof, biodiversiteit en de eiwittransitie." },
        { title: "Trends", content: "Trends:", items: ["Precision agriculture — data-driven landbouw en smart farming", "Eiwittransitie — van dierlijk naar plantaardig eiwit", "Vertical farming — indoor farming en controlled environment agriculture"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / MD — agri-food bedrijven en coöperaties", "VP R&D — agri-tech innovatie en breeding", "VP Operations — productie en supply chain", "VP International — export en internationale expansie"] },
        { title: "Onze expertise", content: "Wij kennen de Nederlandse agri-food sector en begrijpen de unieke dynamiek van coöperaties, familiebedrijven en innovatieve startups." },
      ],
      faqs: [
        { q: "Werken jullie ook voor agri-tech startups?", a: "Ja, agri-tech is een groeiend segment. Van precision agriculture tot alternative proteins — wij plaatsen leiders bij innovatieve bedrijven." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Food & beverage", href: "/nl/industries/food-en-beverage" },
        { label: "Cleantech", href: "/nl/industries/cleantech" },
        { label: "Supply chain", href: "/nl/industries/supply-chain" },
      ],
    },
  },
  // ─── CONSUMER ───
  {
    slug: "retail",
    title: "Retail",
    description: "Executive search voor retailbedrijven, winkelketens en omnichannel organisaties.",
    icon: ShoppingBag,
    cluster: "consumer",
    primaryKeyword: "executive search retail",
    pageData: {
      metaTitle: "Executive Recruitment in Retail | One Time Recruit",
      metaDescription: "Executive search voor retail. Leiders voor winkelketens, omnichannel retail en consumer brands.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Retail" }],
      heroLabel: "Industries", heroTitle: "Retail recruitment:", heroHighlight: "omnichannel leiderschap", heroDescription: "De retail sector transformeert. Vind leiders die fysieke en digitale winkelervaringen naadloos verbinden.",
      sections: [
        { title: "Retail in transformatie", content: "De retail sector maakt een van de grootste transformaties in haar geschiedenis door. E-commerce, omnichannel, personalisatie en duurzaamheid veranderen het speelveld volledig. Leiders moeten zowel de fysieke als digitale wereld begrijpen." },
        { title: "Trends", content: "Trends:", items: ["Omnichannel — naadloze integratie van online en offline", "Retailtainment — de winkel als experience center", "Sustainability — duurzame supply chains en transparantie"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / MD — retailketens en brands", "Chief Digital Officer — e-commerce en digital transformation", "VP Operations — store operations en supply chain", "VP Merchandising — category management en buying", "VP Marketing — brand, CRM en customer experience"] },
        { title: "Onze retail expertise", content: "Wij begrijpen de retailsector en de spanning tussen margin pressure, customer experience en digitale transformatie." },
      ],
      faqs: [
        { q: "Werken jullie ook voor luxury retail?", a: "Ja, luxury retail is een subsegment waar we ervaring hebben met het plaatsen van leiders die premium brand management begrijpen." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "E-commerce", href: "/nl/industries/e-commerce" },
        { label: "Consumentengoederen", href: "/nl/industries/consumentengoederen" },
        { label: "Food & beverage", href: "/nl/industries/food-en-beverage" },
      ],
    },
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    description: "Leiders voor e-commerce bedrijven, marketplaces en D2C brands.",
    icon: Globe,
    cluster: "consumer",
    primaryKeyword: "executive search e-commerce",
    pageData: {
      metaTitle: "Executive Recruitment in E-commerce | One Time Recruit",
      metaDescription: "Executive search voor e-commerce. Leiders voor online retailers, marketplaces en direct-to-consumer brands.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "E-commerce" }],
      heroLabel: "Industries", heroTitle: "E-commerce recruitment:", heroHighlight: "digitaal leiderschap", heroDescription: "E-commerce groeit door. Vind leiders die schaalbare digitale businesses bouwen.",
      sections: [
        { title: "E-commerce leiderschap", content: "E-commerce is volwassen geworden. Van pure players tot omnichannel retailers — de sector vereist leiders die technology, marketing, logistics en finance combineren tot een schaalbaar business model." },
        { title: "Trends", content: "Trends:", items: ["Social commerce — TikTok Shop en Instagram Shopping veranderen het koopgedrag", "AI-personalisatie — AI-gedreven product recommendations en pricing", "Sustainability — groene logistiek en circulaire returns"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / MD — e-commerce bedrijven", "CTO — platform development en scalability", "VP Marketing — performance marketing en growth", "VP Operations — fulfilment en customer service", "CFO — e-commerce finance en unit economics"] },
        { title: "Onze e-commerce expertise", content: "Wij begrijpen de e-commerce dynamiek: van CAC/LTV tot conversion rate optimization, van marketplace management tot D2C strategie." },
      ],
      faqs: [
        { q: "Werken jullie ook voor marketplace platforms?", a: "Ja, wij plaatsen leiders bij zowel e-commerce retailers als marketplace operators." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Retail", href: "/nl/industries/retail" },
        { label: "SaaS", href: "/nl/industries/saas" },
        { label: "Logistiek", href: "/nl/industries/logistiek" },
      ],
    },
  },
  {
    slug: "consumentengoederen",
    title: "Consumentengoederen",
    description: "Executive search voor FMCG, consumer brands en lifestyle bedrijven.",
    icon: Box,
    cluster: "consumer",
    primaryKeyword: "executive search consumentengoederen",
    pageData: {
      metaTitle: "Executive Recruitment in Consumentengoederen | One Time Recruit",
      metaDescription: "Executive search voor consumentengoederen. Leiders voor FMCG, consumer brands en lifestyle bedrijven.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Consumentengoederen" }],
      heroLabel: "Industries", heroTitle: "Consumentengoederen:", heroHighlight: "merkleiderschap", heroDescription: "De FMCG-sector vereist leiders die sterke merken bouwen en consumentengedrag begrijpen.",
      sections: [
        { title: "FMCG leiderschap", content: "De consumentengoederensector is een van de meest competitieve industrieën. Snelle innovatiecycli, sterke merken en complexe supply chains vereisen leiders die zowel creatief als analytisch zijn." },
        { title: "Trends", content: "Trends:", items: ["D2C — direct-to-consumer channels groeien", "Sustainability — duurzame verpakkingen en supply chains", "Health & wellness — consumentenvraag naar gezondere producten"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / MD — consumer brands en business units", "CMO — marketing, brand en innovation", "VP Sales — trade marketing en retailpartnerships", "VP Supply Chain — end-to-end supply chain management", "VP R&D — productinnovatie en consumer insights"] },
        { title: "Onze expertise", content: "Wij kennen de FMCG-sector en hebben een netwerk van executives bij toonaangevende merken en innovatieve challengers." },
      ],
      faqs: [
        { q: "Werken jullie ook voor startups in FMCG?", a: "Ja, met name voor consumer brands die van startup-fase doorgroeien en hun eerste C-level team opbouwen." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Retail", href: "/nl/industries/retail" },
        { label: "Food & beverage", href: "/nl/industries/food-en-beverage" },
        { label: "E-commerce", href: "/nl/industries/e-commerce" },
      ],
    },
  },
  // ─── FINANCE ───
  {
    slug: "financiele-dienstverlening",
    title: "Financiële Dienstverlening",
    description: "Executive search voor de financiële sector: banken, verzekeraars, asset managers.",
    icon: Landmark,
    cluster: "finance",
    primaryKeyword: "executive search financiële dienstverlening",
    pageData: {
      metaTitle: "Executive Recruitment in Financiële Dienstverlening | One Time Recruit",
      metaDescription: "Executive search voor financiële dienstverlening. Leiders voor banken, verzekeraars, fintech en asset managers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Financiële Dienstverlening" }],
      heroLabel: "Industries", heroTitle: "Financiële dienstverlening:", heroHighlight: "gereguleerd leiderschap", heroDescription: "De financiële sector vereist leiders die navigeren in een zwaar gereguleerde omgeving.",
      sections: [
        { title: "Finance leiderschap", content: "De financiële sector opereert in een van de meest gereguleerde omgevingen ter wereld. DNB, AFM, ECB — toezichthouders stellen hoge eisen aan bestuurders en commissarissen. Dit maakt [executive search](/nl/diensten/executive-search) in finance bijzonder specialistisch." },
        { title: "Trends", content: "Trends:", items: ["Regulatory pressure — steeds strengere compliance-eisen", "Digitalisering — neobanks en digital insurance challengen traditionele spelers", "ESG — duurzaam beleggen en climate risk management"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / Bestuurder — banken en verzekeraars", "CRO — chief risk officer", "CCO — chief compliance officer", "CFO — finance en treasury", "CIO — asset management en portfolio strategy"] },
        { title: "Onze finance expertise", content: "Wij begrijpen de toetsingsprocessen van DNB/ECB, de compliance-eisen en de cultuur van financiële instellingen." },
      ],
      faqs: [
        { q: "Begrijpen jullie het DNB-toetsingsproces?", a: "Ja. Wij screenen kandidaten op de criteria die DNB hanteert voor fit & proper toetsing, wat de kans op afwijzing minimaliseert." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Banken", href: "/nl/industries/banken" },
        { label: "Verzekeringen", href: "/nl/industries/verzekeringen" },
        { label: "FinTech", href: "/nl/industries/fintech" },
        { label: "CFO recruitment", href: "/nl/cfo-recruitment" },
      ],
    },
  },
  {
    slug: "banken",
    title: "Banken",
    description: "Executive search voor banken, vermogensbeheerders en financieringsspecialisten.",
    icon: Building,
    cluster: "finance",
    primaryKeyword: "executive search banken",
    pageData: {
      metaTitle: "Executive Recruitment in Banken | One Time Recruit",
      metaDescription: "Executive search voor banken. Leiders voor retail banking, corporate banking en private banking.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Banken" }],
      heroLabel: "Industries", heroTitle: "Banking recruitment:", heroHighlight: "bankleiderschap", heroDescription: "De bankensector transformeert. Vind leiders die digitalisering sturen en tegelijkertijd compliance waarborgen.",
      sections: [
        { title: "Banking in transitie", content: "Nederlandse banken staan voor fundamentele veranderingen. Neobanks, open banking en veranderende klantverwachtingen dwingen tot digitale transformatie, terwijl de regulatory burden toeneemt." },
        { title: "Trends", content: "Trends:", items: ["Digital banking — mobiele banking en API-ecosystemen", "Open banking — PSD2 en data-gedreven innovatie", "Risk & compliance — witwasbestrijding en sanctiescreening"] },
        { title: "Profielen", content: "Posities:", items: ["Bestuurder / CEO — banken en bankingdivisies", "CRO — risk management en regulatory relations", "CTO / CDO — digital transformation en technology", "CCO — compliance en AML"] },
        { title: "Onze banking expertise", content: "Wij begrijpen de complexe governance van banken en werken met zowel systeembanken als niche-spelers." },
      ],
      faqs: [
        { q: "Hoe gaan jullie om met DNB-toetsing?", a: "Wij screenen kandidaten proactief op DNB fit & proper criteria om verrassingen in het toetsingsproces te voorkomen." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Financiële dienstverlening", href: "/nl/industries/financiele-dienstverlening" },
        { label: "FinTech", href: "/nl/industries/fintech" },
        { label: "Verzekeringen", href: "/nl/industries/verzekeringen" },
      ],
    },
  },
  {
    slug: "verzekeringen",
    title: "Verzekeringen",
    description: "Leiders voor verzekeraars, pensioenfondsen en actuariële organisaties.",
    icon: Shield,
    cluster: "finance",
    primaryKeyword: "executive search verzekeringen",
    pageData: {
      metaTitle: "Executive Recruitment in Verzekeringen | One Time Recruit",
      metaDescription: "Executive search voor verzekeringen. Leiders voor verzekeraars, pensioenfondsen en insurtech.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Verzekeringen" }],
      heroLabel: "Industries", heroTitle: "Verzekeringen:", heroHighlight: "risk-aware leiderschap", heroDescription: "De verzekeringssector vereist leiders die risk management, innovatie en klantbeleving combineren.",
      sections: [
        { title: "Verzekeringsleiderschap", content: "De verzekeringssector transformeert door digitalisering, veranderende risico's (klimaat, cyber) en nieuwe toezichtseisen (Solvency II). Leiders moeten innoveren binnen strikte regulatory frameworks." },
        { title: "Trends", content: "Trends:", items: ["InsurTech — digitale disruptie van de verzekeringsketen", "Climate risk — nieuwe risicotypes en herprijzing", "Customer centricity — van product naar klantbeleving"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / Bestuurder — verzekeraars en pensioenfondsen", "Chief Actuary — actuarieel leiderschap", "CRO — risk management", "CDO — digitale transformatie", "VP Claims — claims management en fraud prevention"] },
        { title: "Onze expertise", content: "Wij kennen de verzekeringssector en begrijpen de spanning tussen innovatie en regulering die deze sector kenmerkt." },
      ],
      faqs: [
        { q: "Werken jullie ook voor pensioenfondsen?", a: "Ja, wij plaatsen bestuurders en directieleden bij pensioenfondsen en pensioenuitvoerders." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Financiële dienstverlening", href: "/nl/industries/financiele-dienstverlening" },
        { label: "Banken", href: "/nl/industries/banken" },
        { label: "FinTech", href: "/nl/industries/fintech" },
      ],
    },
  },
  {
    slug: "fintech",
    title: "FinTech",
    description: "Executive search voor fintech scale-ups, payment providers en wealthtech.",
    icon: Coins,
    cluster: "finance",
    primaryKeyword: "executive search fintech",
    pageData: {
      metaTitle: "Executive Recruitment in FinTech | One Time Recruit",
      metaDescription: "Executive search voor fintech. Leiders voor payment providers, neobanks, wealthtech en insurtech.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "FinTech" }],
      heroLabel: "Industries", heroTitle: "FinTech recruitment:", heroHighlight: "de toekomst van finance", heroDescription: "FinTech combineert technologie en finance. Vind leiders die schaalbare financiële producten bouwen.",
      sections: [
        { title: "FinTech leiderschap", content: "FinTech is een van de meest dynamische sectoren. Van payments tot lending, van wealthtech tot insurtech — fintechs disrupten traditionele financiële dienstverlening. Dit vereist leiders die zowel technology als financial services begrijpen." },
        { title: "Trends", content: "Trends:", items: ["Embedded finance — financial services ingebed in niet-financiële platforms", "Regulatory catch-up — toezichthouders reguleren fintech steeds strenger", "AI in finance — AI-gedreven credit scoring, fraud detection en advies"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / MD — fintech scale-ups", "CTO — fintech platform development", "VP Product — financial product management", "CCO — regulatory compliance voor fintechs", "VP Growth — scaling en market expansion"] },
        { title: "Onze fintech expertise", content: "Wij begrijpen de fintech-dynamiek: van venture-backed scale-ups tot corporate innovation labs. Ons netwerk omvat fintech executives in de Benelux en Europa." },
      ],
      faqs: [
        { q: "Begrijpen jullie de fintech-regulering?", a: "Ja. PSD2, EMI-licenties, DORA — wij beoordelen kandidaten op regulatory awareness en compliance-ervaring." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "SaaS", href: "/nl/industries/saas" },
        { label: "Financiële dienstverlening", href: "/nl/industries/financiele-dienstverlening" },
        { label: "Banken", href: "/nl/industries/banken" },
      ],
    },
  },
  // ─── SERVICES ───
  {
    slug: "accountancy",
    title: "Accountancy",
    description: "Executive search voor accountantskantoren, audit en advisory firms.",
    icon: Calculator,
    cluster: "services",
    primaryKeyword: "executive search accountancy",
    pageData: {
      metaTitle: "Executive Recruitment in Accountancy | One Time Recruit",
      metaDescription: "Executive search voor accountancy. Leiders voor accountantskantoren, audit en advisory organisaties.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Accountancy" }],
      heroLabel: "Industries", heroTitle: "Accountancy recruitment:", heroHighlight: "partnership-leiderschap", heroDescription: "De accountancysector vereist leiders die kwaliteit, innovatie en talentmanagement combineren.",
      sections: [
        { title: "Accountancy in verandering", content: "De accountancysector transformeert. Strengere audit-eisen, digitalisering, talentschaarste en de splitsing van audit en advies veranderen het leiderschapslandschap fundamenteel." },
        { title: "Trends", content: "Trends:", items: ["Digitalisering — AI-audit en data analytics transformeren het vak", "Talent war — de sector kampt met een structureel tekort aan professionals", "ESG assurance — duurzaamheidsverslaggeving wordt verplicht"] },
        { title: "Profielen", content: "Posities:", items: ["Managing Partner — leiderschap van het kantoor", "Head of Audit — audit practice leiderschap", "Head of Advisory — advisory en consulting", "CFO — finance en operations van het kantoor", "Chief People Officer — talent management en retention"] },
        { title: "Onze expertise", content: "Wij begrijpen de partnership-dynamiek van accountantskantoren en de unieke uitdagingen van het vinden van leiders in een krappe markt." },
      ],
      faqs: [
        { q: "Werken jullie ook voor middelgrote kantoren?", a: "Ja, wij werken met zowel Big 4 als middelgrote en boutique accountantskantoren." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Consultancy", href: "/nl/industries/consultancy" },
        { label: "Legal", href: "/nl/industries/legal" },
        { label: "Financiële dienstverlening", href: "/nl/industries/financiele-dienstverlening" },
      ],
    },
  },
  {
    slug: "consultancy",
    title: "Consultancy",
    description: "Executive search voor management consultancy, strategy firms en IT-consultancies.",
    icon: Briefcase,
    cluster: "services",
    primaryKeyword: "executive search consultancy",
    pageData: {
      metaTitle: "Executive Recruitment in Consultancy | One Time Recruit",
      metaDescription: "Executive search voor consultancy. Leiders voor management consultancy, strategy firms en IT-consultancies.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Consultancy" }],
      heroLabel: "Industries", heroTitle: "Consultancy recruitment:", heroHighlight: "adviserend leiderschap", heroDescription: "De consultancysector vereist leiders die client relationships bouwen, teams inspireren en practices laten groeien.",
      sections: [
        { title: "Consultancy leiderschap", content: "De consultancysector draait om talent en client relationships. Leiders moeten niet alleen inhoudelijk sterk zijn, maar ook commercieel succesvol en in staat om teams te ontwikkelen." },
        { title: "Trends", content: "Trends:", items: ["AI & automation — AI verandert het delivery model van consultancy", "Specialisatie — generalist consulting maakt plaats voor deep expertise", "Talent retention — de war for talent is in consultancy het felst"] },
        { title: "Profielen", content: "Posities:", items: ["Managing Partner — leiderschap van het bureau", "Practice Lead — sector- of functionele practice", "VP Client Development — business development en key accounts", "MD / Country Lead — lokaal leiderschap in de Benelux"] },
        { title: "Onze expertise", content: "Wij begrijpen de consultancy-cultuur, de partnership-dynamiek en de uitdaging van het vinden van commercieel sterke senior consultants." },
      ],
      faqs: [
        { q: "Werken jullie ook voor boutique consultancies?", a: "Ja, van McKinsey-achtige strategie-bureaus tot gespecialiseerde boutiques — wij kennen het hele spectrum." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Accountancy", href: "/nl/industries/accountancy" },
        { label: "Legal", href: "/nl/industries/legal" },
        { label: "HR services", href: "/nl/industries/hr-services" },
      ],
    },
  },
  {
    slug: "legal",
    title: "Legal",
    description: "Executive search voor advocatenkantoren, in-house legal en notariaten.",
    icon: Scale,
    cluster: "services",
    primaryKeyword: "executive search legal",
    pageData: {
      metaTitle: "Executive Recruitment in Legal | One Time Recruit",
      metaDescription: "Executive search voor legal. Leiders voor advocatenkantoren, in-house legal departments en notariaten.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "Legal" }],
      heroLabel: "Industries", heroTitle: "Legal recruitment:", heroHighlight: "juridisch leiderschap", heroDescription: "De juridische sector vereist leiders die juridische excellentie combineren met business acumen.",
      sections: [
        { title: "Legal leiderschap", content: "De juridische sector verandert. Digitalisering, new law firms, alternatieve fee structures en de groeiende rol van de General Counsel veranderen het leiderschapslandschap." },
        { title: "Trends", content: "Trends:", items: ["LegalTech — AI contract review en legal automation", "In-house groei — bedrijven bouwen sterkere in-house legal teams", "ESG & compliance — juridische impact van duurzaamheidsregulering"] },
        { title: "Profielen", content: "Posities:", items: ["Managing Partner — advocatenkantoor leiderschap", "General Counsel — in-house juridisch leiderschap", "Head of Compliance — regulatory compliance", "Practice Group Leader — sector- of vakgroep leiderschap"] },
        { title: "Onze expertise", content: "Wij begrijpen de partnership-dynamiek van advocatenkantoren en de toenemende strategische rol van in-house legal teams." },
      ],
      faqs: [
        { q: "Plaatsen jullie ook General Counsels?", a: "Ja, het plaatsen van General Counsels en Chief Legal Officers bij corporates is een van onze specialismen." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Consultancy", href: "/nl/industries/consultancy" },
        { label: "Accountancy", href: "/nl/industries/accountancy" },
        { label: "Financiële dienstverlening", href: "/nl/industries/financiele-dienstverlening" },
      ],
    },
  },
  {
    slug: "hr-services",
    title: "HR Services",
    description: "Executive search voor HR-dienstverleners, uitzendorganisaties en HR-tech.",
    icon: Users,
    cluster: "services",
    primaryKeyword: "executive search hr services",
    pageData: {
      metaTitle: "Executive Recruitment in HR Services | One Time Recruit",
      metaDescription: "Executive search voor HR services. Leiders voor uitzendorganisaties, HR-dienstverleners en HR-tech bedrijven.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Industries", href: "/nl/industries" }, { label: "HR Services" }],
      heroLabel: "Industries", heroTitle: "HR services recruitment:", heroHighlight: "people-business leiderschap", heroDescription: "De HR-dienstverlening vereist leiders die technologie, talent en klantrelaties combineren.",
      sections: [
        { title: "HR services leiderschap", content: "De HR-dienstverlening is een van de meest dynamische sectoren in Nederland. Van uitzendorganisaties tot HR-tech platforms, van executive search tot payrolling — de sector verandert snel door digitalisering en nieuwe arbeidsmarktdynamiek." },
        { title: "Trends", content: "Trends:", items: ["HR-tech — platforms voor recruitment, engagement en workforce management", "Total talent management — flexibel en vast talent onder één regie", "Workforce analytics — data-driven besluitvorming in HR"] },
        { title: "Profielen", content: "Posities:", items: ["CEO / MD — uitzendorganisaties en HR-dienstverleners", "CTO — HR-tech platform development", "VP Sales — enterprise sales en key accounts", "VP Operations — service delivery en operational excellence", "CHRO — HR leiderschap bij HR-dienstverleners"] },
        { title: "Onze expertise", content: "Wij opereren zelf in de recruitment-sector en begrijpen de dynamiek, concurrentie en uitdagingen van HR-dienstverlening van binnenuit." },
      ],
      faqs: [
        { q: "Is het niet vreemd dat een recruiter leiders plaatst bij andere recruiters?", a: "Integendeel — juist omdat wij de sector van binnenuit kennen, begrijpen wij welk type leider succesvol kan zijn in deze competitieve markt." },
      ],
      pillarLink: { label: "Alle industries", href: "/nl/industries" },
      relatedLinks: [
        { label: "Consultancy", href: "/nl/industries/consultancy" },
        { label: "SaaS", href: "/nl/industries/saas" },
        { label: "CHRO recruitment", href: "/nl/chro-recruitment" },
      ],
    },
  },
];

export default industries;

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find((ind) => ind.slug === slug);
}

export function getIndustriesByCluster(clusterId: string): IndustryData[] {
  return industries.filter((ind) => ind.cluster === clusterId);
}

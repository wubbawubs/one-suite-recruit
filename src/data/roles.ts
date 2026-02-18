import type { SpokePageData } from "@/components/layout/SpokePage";
import {
  Crown, Coins, Settings, Cpu, Monitor, Megaphone, Users, Package, Target,
  TrendingUp, ShieldCheck, Smartphone, Database, Scale, AlertTriangle,
  Briefcase, Globe, Building2, BarChart3, Factory
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface RoleMeta {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  cluster: string;
}

export interface RoleData extends RoleMeta {
  pageData: SpokePageData;
}

export const roleClusters = [
  { id: "c-suite", label: "C-Suite", description: "De hoogste leiderschapsposities: CEO, CFO, COO en andere Chief Officers." },
  { id: "digital", label: "Digital & Technology", description: "CTO, CIO, CISO en andere technologie-leiderschapsrollen." },
  { id: "commercial", label: "Commercial & Growth", description: "CMO, CRO, CPO en andere commerciële leiderschapsrollen." },
  { id: "governance", label: "Governance, Risk & Compliance", description: "Chief Compliance Officer, Chief Risk Officer en gerelateerde functies." },
  { id: "directors", label: "Directie & General Management", description: "Managing Director, Country Manager, General Manager en Business Unit Directors." },
];

const roles: RoleData[] = [
  // ─── C-SUITE ───
  {
    slug: "ceo-chief-executive-officer", title: "CEO (Chief Executive Officer)", shortTitle: "CEO", description: "De hoogste leidinggevende, verantwoordelijk voor strategie, visie en bedrijfsresultaten.", icon: Crown, cluster: "c-suite",
    pageData: {
      metaTitle: "CEO Recruitment via Executive Search | One Time Recruit",
      metaDescription: "Executive search voor CEO's. Rolprofiel, interviewvragen, succes-KPI's en salarisbenchmark voor Chief Executive Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "CEO" }],
      heroLabel: "Functies", heroTitle: "CEO recruitment:", heroHighlight: "de juiste nummer één", heroDescription: "De CEO bepaalt de koers van uw organisatie. Vind een leider met de juiste visie, ervaring en culturele fit.",
      sections: [
        { title: "Rolprofiel: CEO", content: "De Chief Executive Officer (CEO) is de hoogste leidinggevende van een organisatie. De CEO draagt eindverantwoordelijkheid voor de strategische richting, financiële prestaties, organisatiecultuur en stakeholder management.\n\nEen succesvolle CEO combineert visionair leiderschap met operationeel inzicht en de capaciteit om een executive team te bouwen dat resultaten levert." },
        { title: "Verantwoordelijkheden", content: "De kernverantwoordelijkheden van een CEO omvatten:", items: ["Bepalen en uitvoeren van de bedrijfsstrategie", "Aansturen van het executive team en de organisatiecultuur", "Vertegenwoordigen van de organisatie richting aandeelhouders, board en externe stakeholders", "Waarborgen van financiële gezondheid en groei", "Risicomanagement en corporate governance"] },
        { title: "Interviewvragen voor CEO-kandidaten", content: "Bij het interviewen van CEO-kandidaten adviseren wij de volgende vragen:", items: ["Hoe heeft u in het verleden een strategische heroriëntatie geleid?", "Beschrijf hoe u een executive team heeft opgebouwd of getransformeerd.", "Hoe balanceert u korte-termijn financiële druk met lange-termijn waardecreatie?", "Hoe gaat u om met stakeholder management bij tegenstrijdige belangen?", "Wat is uw benadering van organisatiecultuur en hoe meet u die?"] },
        { title: "Succes-KPI's en salarisbenchmark", content: "Typische succes-KPI's voor een CEO zijn:\n\n• Omzetgroei en EBITDA-ontwikkeling\n• Aandeelhouderswaarde en TSR\n• Medewerkerstevredenheid en retentie van key talent\n• Strategische mijlpalen en transformatie-doelen\n• ESG-doelstellingen\n\nSalarisbenchmark Nederland: €180.000 – €450.000+ base salary, afhankelijk van organisatieomvang, sector en bonus/LTIP-structuur." },
      ],
      faqs: [
        { q: "Hoe lang duurt het om een CEO te vinden?", a: "Een CEO-search duurt gemiddeld 6-10 weken, inclusief een uitgebreid assessment- en referentieproces." },
        { q: "Wat maakt een goede CEO?", a: "Visionair denkvermogen, de capaciteit om talent aan te trekken en te behouden, financieel inzicht en de veerkracht om in onzekerheid te navigeren." },
        { q: "Is sectorervaring vereist voor een CEO?", a: "Niet altijd. Cross-sector CEO's kunnen frisse perspectieven brengen, mits zij snel de sectorspecifieke dynamiek begrijpen." },
      ],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [
        { label: "CFO recruitment", href: "/nl/functies/cfo-chief-financial-officer" },
        { label: "COO recruitment", href: "/nl/functies/coo-chief-operating-officer" },
        { label: "Board & commissarissen", href: "/nl/board-commissarissen-search" },
        { label: "Executive search", href: "/nl/diensten/executive-search" },
      ],
    },
  },
  {
    slug: "cfo-chief-financial-officer", title: "CFO (Chief Financial Officer)", shortTitle: "CFO", description: "Financieel leiderschap, treasury, investor relations en financial planning.", icon: Coins, cluster: "c-suite",
    pageData: {
      metaTitle: "CFO Recruitment via Executive Search | One Time Recruit",
      metaDescription: "Executive search voor CFO's. Rolprofiel, interviewvragen en salarisbenchmark voor Chief Financial Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "CFO" }],
      heroLabel: "Functies", heroTitle: "CFO recruitment:", heroHighlight: "financieel leiderschap", heroDescription: "De CFO is de financiële architect van uw organisatie. Van treasury tot M&A, van investor relations tot financial planning.",
      sections: [
        { title: "Rolprofiel: CFO", content: "De Chief Financial Officer is verantwoordelijk voor de financiële strategie, rapportage, compliance en waardecreatie van de organisatie. De moderne CFO is meer dan een financial controller — het is een strategische partner van de CEO." },
        { title: "Verantwoordelijkheden", content: "De kernverantwoordelijkheden van een CFO:", items: ["Financiële strategie en planning", "Treasury, cash management en financiering", "M&A, due diligence en deal-structurering", "Investor relations en capital markets", "Financial reporting, compliance en audit", "ERP-systemen en financiële digitalisering"] },
        { title: "Interviewvragen", content: "Aanbevolen interviewvragen:", items: ["Beschrijf een complex M&A-traject dat u heeft geleid.", "Hoe heeft u de financiële functie gedigitaliseerd of getransformeerd?", "Hoe balanceert u cash preservation met groeïnvesteringen?", "Wat is uw ervaring met investor relations en kapitaalmarkten?", "Hoe zorgt u voor een cultuur van financial discipline in de organisatie?"] },
        { title: "Succes-KPI's en salarisbenchmark", content: "KPI's: cash conversion cycle, ROIC, forecast accuracy, working capital efficiency, audit uitkomsten.\n\nSalarisbenchmark Nederland: €150.000 – €350.000+ base salary, afhankelijk van organisatieomvang en complexiteit." },
      ],
      faqs: [
        { q: "Wat is het verschil tussen een CFO en een Finance Director?", a: "Een CFO opereert op strategisch niveau als lid van het executive team, terwijl een Finance Director vaak meer operationeel en rapporterend is." },
        { q: "Is Big 4-ervaring nodig voor een CFO?", a: "Big 4-ervaring is een plus maar geen vereiste. Cruciale factoren zijn strategisch vermogen en ervaring als business partner." },
      ],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [
        { label: "CEO recruitment", href: "/nl/functies/ceo-chief-executive-officer" },
        { label: "Finance Director", href: "/nl/functies/finance-director" },
        { label: "Chief Risk Officer", href: "/nl/functies/chief-risk-officer" },
        { label: "Executive search", href: "/nl/diensten/executive-search" },
      ],
    },
  },
  {
    slug: "coo-chief-operating-officer", title: "COO (Chief Operating Officer)", shortTitle: "COO", description: "Operationeel leiderschap, procesoptimalisatie en schaalbare organisaties.", icon: Settings, cluster: "c-suite",
    pageData: {
      metaTitle: "COO Recruitment via Executive Search | One Time Recruit",
      metaDescription: "Executive search voor COO's. Rolprofiel, verantwoordelijkheden en salarisbenchmark voor Chief Operating Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "COO" }],
      heroLabel: "Functies", heroTitle: "COO recruitment:", heroHighlight: "operationeel leiderschap", heroDescription: "De COO vertaalt strategie naar uitvoering en bouwt schaalbare operaties.",
      sections: [
        { title: "Rolprofiel: COO", content: "De Chief Operating Officer is verantwoordelijk voor de dagelijkse operaties en zorgt dat de organisatie efficiënt en effectief functioneert. De COO is de executie-partner van de CEO." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Dagelijkse operationele aansturing", "Procesoptimalisatie en continuous improvement", "Supply chain en productie management", "Operationele schaling bij groei", "Cross-functionele samenwerking en alignment"] },
        { title: "Interviewvragen", content: "Aanbevolen vragen:", items: ["Hoe heeft u operationele schaling gerealiseerd bij snelle groei?", "Beschrijf een transformatieproject dat u heeft geleid.", "Hoe meet u operationele excellentie?", "Hoe balanceert u efficiency met innovatie?", "Wat is uw aanpak bij cross-functionele alignment?"] },
        { title: "Succes-KPI's en salarisbenchmark", content: "KPI's: operational efficiency ratio, delivery performance, customer satisfaction, time-to-market, employee productivity.\n\nSalarisbenchmark: €140.000 – €300.000+ base salary." },
      ],
      faqs: [
        { q: "Heeft elke organisatie een COO nodig?", a: "Niet altijd. Een COO is met name waardevol bij operationeel complexe organisaties of wanneer de CEO meer ruimte nodig heeft voor externe activiteiten." },
      ],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [
        { label: "CEO recruitment", href: "/nl/functies/ceo-chief-executive-officer" },
        { label: "Operations Director", href: "/nl/functies/operations-director" },
        { label: "Supply chain", href: "/nl/industries/supply-chain" },
      ],
    },
  },
  // ─── DIGITAL & TECHNOLOGY ───
  {
    slug: "cto-chief-technology-officer", title: "CTO (Chief Technology Officer)", shortTitle: "CTO", description: "Technische visie, R&D-strategie en engineering-leiderschap.", icon: Cpu, cluster: "digital",
    pageData: {
      metaTitle: "CTO Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor CTO's. Rolprofiel en salarisbenchmark voor Chief Technology Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "CTO" }],
      heroLabel: "Functies", heroTitle: "CTO recruitment:", heroHighlight: "technische visie", heroDescription: "De CTO bepaalt de technologische richting en bouwt engineering teams die innovatie leveren.",
      sections: [
        { title: "Rolprofiel: CTO", content: "De CTO is verantwoordelijk voor de technologische strategie, architectuur, R&D en engineering organisatie. De rol varieert sterk per organisatie — van hands-on tech lead bij startups tot strategisch technologie-leider bij enterprises." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Technologische strategie en roadmap", "Engineering team leiderschap en scaling", "Platform architectuur en technische schuld management", "Build vs. buy beslissingen", "Security, compliance en data governance"] },
        { title: "Interviewvragen", content: "Aanbevolen vragen:", items: ["Hoe maakt u de afweging tussen technische schuld en snelheid?", "Beschrijf hoe u een engineering organisatie heeft geschaald.", "Hoe vertaalt u business requirements naar technische architectuur?", "Wat is uw ervaring met AI/ML-integratie in productie?", "Hoe waarborgt u security en compliance?"] },
        { title: "Salarisbenchmark", content: "KPI's: system uptime, deployment frequency, engineering velocity, security incidents.\n\nSalarisbenchmark: €130.000 – €280.000+ base salary, met significante equity bij scale-ups." },
      ],
      faqs: [{ q: "Wat is het verschil tussen CTO en CIO?", a: "De CTO richt zich op productgeoriënteerde technologie en R&D, de CIO op interne IT-infrastructuur en bedrijfssystemen." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CIO", href: "/nl/functies/cio-chief-information-officer" }, { label: "CDO", href: "/nl/functies/cdo-chief-digital-officer" }, { label: "IT & Software", href: "/nl/industries/it-en-software" }],
    },
  },
  {
    slug: "cio-chief-information-officer", title: "CIO (Chief Information Officer)", shortTitle: "CIO", description: "IT-strategie, digitale transformatie en enterprise systems.", icon: Monitor, cluster: "digital",
    pageData: {
      metaTitle: "CIO Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor CIO's. Rolprofiel en salarisbenchmark voor Chief Information Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "CIO" }],
      heroLabel: "Functies", heroTitle: "CIO recruitment:", heroHighlight: "digitale transformatie", heroDescription: "De CIO leidt de digitale transformatie en zorgt dat IT de business ondersteunt en versnelt.",
      sections: [
        { title: "Rolprofiel: CIO", content: "De CIO is verantwoordelijk voor de IT-strategie, enterprise architectuur, digitale transformatie en cybersecurity van de organisatie." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["IT-strategie en digitale roadmap", "Enterprise systems en ERP", "Cybersecurity en data governance", "IT-budget en vendor management", "Digitale transformatie-programma's"] },
        { title: "Interviewvragen", content: "Vragen:", items: ["Beschrijf een digitale transformatie die u succesvol heeft geleid.", "Hoe prioriteert u IT-investeringen met beperkt budget?", "Hoe gaat u om met legacy systems?", "Wat is uw aanpak bij cybersecurity governance?"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €130.000 – €260.000+ base salary." },
      ],
      faqs: [{ q: "Wordt de CIO-rol minder relevant?", a: "Nee, de CIO-rol evolueert. Met toenemende digitalisering en cyberdreigingen is de CIO strategischer dan ooit." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CTO", href: "/nl/functies/cto-chief-technology-officer" }, { label: "CISO", href: "/nl/functies/ciso-chief-information-security-officer" }, { label: "CDO", href: "/nl/functies/cdo-chief-digital-officer" }],
    },
  },
  {
    slug: "ciso-chief-information-security-officer", title: "CISO (Chief Information Security Officer)", shortTitle: "CISO", description: "Cybersecurity strategie, risk management en security operations.", icon: ShieldCheck, cluster: "digital",
    pageData: {
      metaTitle: "CISO Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor CISO's. Rolprofiel en salarisbenchmark voor Chief Information Security Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "CISO" }],
      heroLabel: "Functies", heroTitle: "CISO recruitment:", heroHighlight: "cybersecurity leiderschap", heroDescription: "De CISO beschermt uw organisatie tegen cyberdreigingen en bouwt een security-cultuur.",
      sections: [
        { title: "Rolprofiel: CISO", content: "De CISO is verantwoordelijk voor de cybersecurity strategie, risk management, compliance en incident response. Door toenemende dreigingen en regulering (NIS2, DORA) wordt de CISO steeds vaker een boardroom-positie." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Cybersecurity strategie en beleid", "Security operations center (SOC)", "Incident response en crisis management", "Compliance (NIS2, DORA, ISO 27001)", "Security awareness en cultuur"] },
        { title: "Interviewvragen", content: "Vragen:", items: ["Beschrijf hoe u een security-incident heeft gemanaged.", "Hoe bouwt u een security-cultuur in de organisatie?", "Hoe communiceert u security-risico's naar het board?", "Wat is uw ervaring met NIS2 en DORA compliance?"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €130.000 – €250.000+ base salary. Sterke vraag, beperkt aanbod." },
      ],
      faqs: [{ q: "Is technische achtergrond vereist voor een CISO?", a: "Een technische basis is belangrijk, maar de moderne CISO moet vooral strategisch en communicatief sterk zijn." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CIO", href: "/nl/functies/cio-chief-information-officer" }, { label: "Cybersecurity sector", href: "/nl/industries/cybersecurity" }, { label: "CTO", href: "/nl/functies/cto-chief-technology-officer" }],
    },
  },
  {
    slug: "cdo-chief-digital-officer", title: "CDO (Chief Digital Officer)", shortTitle: "CDO", description: "Digitale strategie, innovatie en business model transformatie.", icon: Smartphone, cluster: "digital",
    pageData: {
      metaTitle: "CDO Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor CDO's. Rolprofiel voor Chief Digital Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "CDO" }],
      heroLabel: "Functies", heroTitle: "CDO recruitment:", heroHighlight: "digitale innovatie", heroDescription: "De CDO leidt digitale transformatie en innovatie in traditionele organisaties.",
      sections: [
        { title: "Rolprofiel: CDO", content: "De CDO is verantwoordelijk voor de digitale strategie en transformatie van de organisatie. Deze relatief nieuwe C-level rol overbrugt de kloof tussen technologie en business." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Digitale strategie en transformatie", "Digital business model innovation", "Data-driven besluitvorming", "Digital customer experience", "Change management en digitale cultuur"] },
        { title: "Interviewvragen", content: "Vragen:", items: ["Hoe heeft u een digitale transformatie geleid in een traditionele organisatie?", "Hoe meet u digitale maturiteit?", "Wat is uw ervaring met data-driven decision making?"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €120.000 – €240.000+ base salary." },
      ],
      faqs: [{ q: "Wat is het verschil tussen CDO en CTO?", a: "De CDO focust op business model transformatie via digitaal, de CTO op de technologie en engineering zelf." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CTO", href: "/nl/functies/cto-chief-technology-officer" }, { label: "CIO", href: "/nl/functies/cio-chief-information-officer" }, { label: "SaaS", href: "/nl/industries/saas" }],
    },
  },
  {
    slug: "chief-data-officer", title: "Chief Data Officer", shortTitle: "Chief Data Officer", description: "Datastrategie, analytics, AI en data governance.", icon: Database, cluster: "digital",
    pageData: {
      metaTitle: "Chief Data Officer Recruitment | One Time Recruit", metaDescription: "Executive search voor Chief Data Officers. Rolprofiel en salarisbenchmark.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "Chief Data Officer" }],
      heroLabel: "Functies", heroTitle: "Chief Data Officer:", heroHighlight: "data als strategisch asset", heroDescription: "De Chief Data Officer maakt data tot een strategisch wapen voor uw organisatie.",
      sections: [
        { title: "Rolprofiel", content: "De Chief Data Officer is verantwoordelijk voor datastrategie, data governance, analytics en de integratie van AI/ML in bedrijfsprocessen." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Datastrategie en data governance", "AI/ML strategie en implementatie", "Data quality en master data management", "Analytics en business intelligence", "Privacy en compliance (AVG/GDPR)"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €120.000 – €230.000+ base salary." },
      ],
      faqs: [{ q: "Is de Chief Data Officer een nieuwe rol?", a: "Relatief ja. Door de explosie van data en AI wordt deze rol steeds crucialer." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CTO", href: "/nl/functies/cto-chief-technology-officer" }, { label: "CDO", href: "/nl/functies/cdo-chief-digital-officer" }, { label: "CISO", href: "/nl/functies/ciso-chief-information-security-officer" }],
    },
  },
  // ─── COMMERCIAL & GROWTH ───
  {
    slug: "cmo-chief-marketing-officer", title: "CMO (Chief Marketing Officer)", shortTitle: "CMO", description: "Merkstrategie, marketing, growth en klantbeleving.", icon: Megaphone, cluster: "commercial",
    pageData: {
      metaTitle: "CMO Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor CMO's. Rolprofiel en salarisbenchmark voor Chief Marketing Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "CMO" }],
      heroLabel: "Functies", heroTitle: "CMO recruitment:", heroHighlight: "merkleiderschap", heroDescription: "De CMO bouwt merken, drijft groei en creëert klantbeleving.",
      sections: [
        { title: "Rolprofiel: CMO", content: "De CMO is verantwoordelijk voor de marketing strategie, merkopbouw, customer experience en revenue groei via marketing channels." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Merkstrategie en positionering", "Demand generation en pipeline", "Customer experience en loyalty", "Marketing technology (MarTech)", "Data-driven marketing en analytics"] },
        { title: "Interviewvragen", content: "Vragen:", items: ["Hoe meet u de ROI van marketing?", "Beschrijf een rebranding of repositionering die u heeft geleid.", "Hoe integreert u online en offline marketing?"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €120.000 – €250.000+ base salary." },
      ],
      faqs: [{ q: "Wordt de CMO-rol vervangen door de CRO?", a: "Nee, maar de rollen evolueren. De CMO focust steeds meer op brand en customer experience, de CRO op revenue." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CRO", href: "/nl/functies/cro-chief-revenue-officer" }, { label: "CPO", href: "/nl/functies/cpo-chief-product-officer" }, { label: "Retail", href: "/nl/industries/retail" }],
    },
  },
  {
    slug: "chro-chief-hr-officer", title: "CHRO (Chief HR Officer)", shortTitle: "CHRO", description: "People strategy, talent management, organisatieontwikkeling.", icon: Users, cluster: "commercial",
    pageData: {
      metaTitle: "CHRO Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor CHRO's. Rolprofiel voor Chief HR Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "CHRO" }],
      heroLabel: "Functies", heroTitle: "CHRO recruitment:", heroHighlight: "people leiderschap", heroDescription: "De CHRO bouwt de organisatie van de toekomst via talent, cultuur en ontwikkeling.",
      sections: [
        { title: "Rolprofiel: CHRO", content: "De CHRO is verantwoordelijk voor de people strategy, talent acquisition en management, organisatieontwikkeling, compensation en employee experience." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["People strategy en workforce planning", "Talent acquisition en employer branding", "Organisatieontwikkeling en change management", "Compensation & benefits", "Employee experience en engagement"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €120.000 – €240.000+ base salary." },
      ],
      faqs: [{ q: "Wat is het verschil tussen CHRO en HR Director?", a: "De CHRO is een strategische C-level positie, de HR Director is vaak meer operationeel gericht." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CEO", href: "/nl/functies/ceo-chief-executive-officer" }, { label: "HR services", href: "/nl/industries/hr-services" }],
    },
  },
  {
    slug: "cpo-chief-product-officer", title: "CPO (Chief Product Officer)", shortTitle: "CPO", description: "Productvisie, roadmap en product-led growth.", icon: Package, cluster: "commercial",
    pageData: {
      metaTitle: "CPO Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor CPO's. Rolprofiel voor Chief Product Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "CPO" }],
      heroLabel: "Functies", heroTitle: "CPO recruitment:", heroHighlight: "productvisie", heroDescription: "De CPO bepaalt wat u bouwt en waarom — de brug tussen klant, technologie en business.",
      sections: [
        { title: "Rolprofiel: CPO", content: "De CPO is verantwoordelijk voor de productvisie, roadmap, product-market fit en de vertaling van klantbehoeften naar succesvolle producten." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Productvisie en strategie", "Roadmap prioritering", "Product-market fit en user research", "Product-led growth", "Cross-functionele afstemming (engineering, sales, marketing)"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €120.000 – €250.000+ base salary, vaak met equity bij tech-bedrijven." },
      ],
      faqs: [{ q: "Is een CPO hetzelfde als een VP Product?", a: "De CPO is de C-level versie met bredere strategische scope. Een VP Product rapporteert doorgaans aan de CPO of CEO." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CTO", href: "/nl/functies/cto-chief-technology-officer" }, { label: "CRO", href: "/nl/functies/cro-chief-revenue-officer" }, { label: "SaaS", href: "/nl/industries/saas" }],
    },
  },
  {
    slug: "cso-chief-strategy-officer", title: "CSO (Chief Strategy Officer)", shortTitle: "CSO", description: "Corporate strategy, M&A en strategische transformatie.", icon: Target, cluster: "commercial",
    pageData: {
      metaTitle: "CSO Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor CSO's. Rolprofiel voor Chief Strategy Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "CSO" }],
      heroLabel: "Functies", heroTitle: "CSO recruitment:", heroHighlight: "strategisch leiderschap", heroDescription: "De CSO bepaalt de strategische richting en identificeert groeikansen voor uw organisatie.",
      sections: [
        { title: "Rolprofiel: CSO", content: "De CSO is verantwoordelijk voor de corporate strategy, strategische planning, M&A, partnerships en de identificatie van groei-opportunities." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Corporate strategy ontwikkeling", "M&A strategie en execution", "Strategische partnerships en allianties", "Markt- en concurrentieanalyse", "Portfolio management en capital allocation"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €130.000 – €260.000+ base salary." },
      ],
      faqs: [{ q: "Heeft elke organisatie een CSO nodig?", a: "Niet altijd. Bij kleinere organisaties combineert de CEO deze rol vaak met het algemene leiderschap." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CEO", href: "/nl/functies/ceo-chief-executive-officer" }, { label: "CFO", href: "/nl/functies/cfo-chief-financial-officer" }],
    },
  },
  {
    slug: "cro-chief-revenue-officer", title: "CRO (Chief Revenue Officer)", shortTitle: "CRO", description: "Revenue strategie, sales, marketing alignment en groei.", icon: TrendingUp, cluster: "commercial",
    pageData: {
      metaTitle: "CRO Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor CRO's. Rolprofiel voor Chief Revenue Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "CRO" }],
      heroLabel: "Functies", heroTitle: "CRO recruitment:", heroHighlight: "revenue groei", heroDescription: "De CRO is verantwoordelijk voor de gehele revenue engine — van marketing tot sales tot customer success.",
      sections: [
        { title: "Rolprofiel: CRO", content: "De CRO combineert sales, marketing en customer success onder één leider om de gehele revenue lifecycle te optimaliseren. Deze rol is met name populair bij SaaS en B2B-bedrijven." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Revenue strategie en forecasting", "Sales organisatie en go-to-market", "Marketing en demand generation alignment", "Customer success en retentie", "Pricing en revenue model optimalisatie"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €130.000 – €280.000+ base salary, vaak met significante variabele beloning." },
      ],
      faqs: [{ q: "Wanneer heeft u een CRO nodig vs. een VP Sales?", a: "Een CRO is relevant wanneer u sales, marketing en customer success wilt integreren onder één revenue-strategie." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CMO", href: "/nl/functies/cmo-chief-marketing-officer" }, { label: "CPO", href: "/nl/functies/cpo-chief-product-officer" }, { label: "SaaS", href: "/nl/industries/saas" }],
    },
  },
  // ─── GOVERNANCE ───
  {
    slug: "chief-compliance-officer", title: "Chief Compliance Officer", shortTitle: "CCO", description: "Compliance, regelgeving en corporate governance.", icon: Scale, cluster: "governance",
    pageData: {
      metaTitle: "Chief Compliance Officer Recruitment | One Time Recruit", metaDescription: "Executive search voor Chief Compliance Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "Chief Compliance Officer" }],
      heroLabel: "Functies", heroTitle: "CCO recruitment:", heroHighlight: "compliance leiderschap", heroDescription: "De CCO waarborgt dat uw organisatie voldoet aan alle regelgeving en interne normen.",
      sections: [
        { title: "Rolprofiel", content: "De Chief Compliance Officer is verantwoordelijk voor het compliance-framework, regulatory relations en de naleving van wet- en regelgeving." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Compliance framework en beleid", "Regulatory monitoring en relations", "AML/KYC (in finance)", "Ethics en integrity programma's", "Compliance training en awareness"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €120.000 – €230.000+ base salary, hoger in zwaar gereguleerde sectoren." },
      ],
      faqs: [{ q: "In welke sectoren is een CCO verplicht?", a: "In de financiële sector is een CCO doorgaans verplicht. In andere sectoren groeit de vraag door toenemende regulering." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "Chief Risk Officer", href: "/nl/functies/chief-risk-officer" }, { label: "Financiële dienstverlening", href: "/nl/industries/financiele-dienstverlening" }],
    },
  },
  {
    slug: "chief-risk-officer", title: "Chief Risk Officer", shortTitle: "CRO (Risk)", description: "Enterprise risk management, operational risk en risk governance.", icon: AlertTriangle, cluster: "governance",
    pageData: {
      metaTitle: "Chief Risk Officer Recruitment | One Time Recruit", metaDescription: "Executive search voor Chief Risk Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "Chief Risk Officer" }],
      heroLabel: "Functies", heroTitle: "CRO recruitment:", heroHighlight: "risk management", heroDescription: "De Chief Risk Officer beschermt uw organisatie door risico's proactief te identificeren en te beheersen.",
      sections: [
        { title: "Rolprofiel", content: "De CRO is verantwoordelijk voor enterprise risk management, het risico-framework en de risk appetite van de organisatie." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Enterprise risk framework", "Operational, financial en strategic risk", "Risk appetite en limits", "Stress testing en scenario analyse", "Risk reporting aan board en toezichthouders"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €130.000 – €260.000+ base salary." },
      ],
      faqs: [{ q: "Is een CRO alleen relevant in finance?", a: "Nee. Steeds meer niet-financiële organisaties benoemen een CRO, met name in sectoren met significante operationele of cyber-risico's." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "Chief Compliance Officer", href: "/nl/functies/chief-compliance-officer" }, { label: "CFO", href: "/nl/functies/cfo-chief-financial-officer" }, { label: "Banken", href: "/nl/industries/banken" }],
    },
  },
  // ─── DIRECTORS ───
  {
    slug: "managing-director", title: "Managing Director", shortTitle: "Managing Director", description: "Algemeen directeur met P&L-verantwoordelijkheid.", icon: Briefcase, cluster: "directors",
    pageData: {
      metaTitle: "Managing Director Recruitment | One Time Recruit", metaDescription: "Executive search voor Managing Directors. Rolprofiel en salarisbenchmark.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "Managing Director" }],
      heroLabel: "Functies", heroTitle: "Managing Director:", heroHighlight: "P&L leiderschap", heroDescription: "De Managing Director draagt eindverantwoordelijkheid voor de business unit of het bedrijf.",
      sections: [
        { title: "Rolprofiel", content: "De Managing Director (MD) is de hoogste operationele leider van een bedrijf of business unit, met volledige P&L-verantwoordelijkheid." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["P&L-verantwoordelijkheid", "Strategie-uitvoering en operations", "Team leiderschap en organisatieontwikkeling", "Klantrelaties en business development", "Rapportage aan board of groepsdirectie"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €130.000 – €300.000+ base salary, sterk afhankelijk van organisatieomvang." },
      ],
      faqs: [{ q: "Wat is het verschil tussen MD en CEO?", a: "In Nederland worden de termen soms door elkaar gebruikt. Een MD rapporteert doorgaans aan een groepsdirectie, een CEO aan het board." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CEO", href: "/nl/functies/ceo-chief-executive-officer" }, { label: "General Manager", href: "/nl/functies/general-manager" }, { label: "Country Manager", href: "/nl/functies/country-manager" }],
    },
  },
  {
    slug: "country-manager", title: "Country Manager", shortTitle: "Country Manager", description: "Lokaal leiderschap voor internationale organisaties.", icon: Globe, cluster: "directors",
    pageData: {
      metaTitle: "Country Manager Recruitment | One Time Recruit", metaDescription: "Executive search voor Country Managers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "Country Manager" }],
      heroLabel: "Functies", heroTitle: "Country Manager:", heroHighlight: "lokaal leiderschap", heroDescription: "De Country Manager vertegenwoordigt de internationale organisatie in de lokale markt.",
      sections: [
        { title: "Rolprofiel", content: "De Country Manager is verantwoordelijk voor alle activiteiten van een internationale organisatie in een specifiek land. Een mini-CEO met lokale P&L-verantwoordelijkheid." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Lokale P&L en business development", "Team opbouw en management", "Lokale marktkennis en relaties", "Alignment met groepsstrategie", "Regulatory en compliance in lokale markt"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €110.000 – €220.000+ base salary." },
      ],
      faqs: [{ q: "Moet een Country Manager lokaal zijn?", a: "Niet per se, maar lokale marktkennis en taalvaardigheid zijn grote voordelen." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "Managing Director", href: "/nl/functies/managing-director" }, { label: "General Manager", href: "/nl/functies/general-manager" }],
    },
  },
  {
    slug: "general-manager", title: "General Manager", shortTitle: "General Manager", description: "Integrale leiding over een business unit of divisie.", icon: Building2, cluster: "directors",
    pageData: {
      metaTitle: "General Manager Recruitment | One Time Recruit", metaDescription: "Executive search voor General Managers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "General Manager" }],
      heroLabel: "Functies", heroTitle: "General Manager:", heroHighlight: "integraal leiderschap", heroDescription: "De General Manager leidt een business unit of divisie met end-to-end verantwoordelijkheid.",
      sections: [
        { title: "Rolprofiel", content: "De General Manager (GM) draagt integrale verantwoordelijkheid voor een business unit, productlijn of divisie. De GM combineert strategisch denken met operationeel leiderschap." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["P&L-verantwoordelijkheid voor de business unit", "Strategie-ontwikkeling en -uitvoering", "Cross-functioneel teamleiderschap", "Klantrelaties en marktpositionering", "Innovatie en groei-initiatieven"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €110.000 – €250.000+ base salary." },
      ],
      faqs: [{ q: "Wat is het verschil tussen een GM en een VP?", a: "Een GM heeft typisch P&L-verantwoordelijkheid, terwijl een VP een functionele afdeling leidt." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "Managing Director", href: "/nl/functies/managing-director" }, { label: "Business Unit Director", href: "/nl/functies/business-unit-director" }],
    },
  },
  {
    slug: "business-unit-director", title: "Business Unit Director", shortTitle: "BU Director", description: "Leiderschap over een specifieke business unit met P&L.", icon: BarChart3, cluster: "directors",
    pageData: {
      metaTitle: "Business Unit Director Recruitment | One Time Recruit", metaDescription: "Executive search voor Business Unit Directors.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "Business Unit Director" }],
      heroLabel: "Functies", heroTitle: "BU Director:", heroHighlight: "unit leiderschap", heroDescription: "De Business Unit Director leidt een specifieke divisie of productgroep.",
      sections: [
        { title: "Rolprofiel", content: "De Business Unit Director is verantwoordelijk voor een specifieke divisie, productgroep of marktsegment binnen een grotere organisatie." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["P&L voor de business unit", "Strategische richting en groeiplan", "Teamleiderschap en talent development", "Klant- en marktverantwoordelijkheid", "Cross-BU samenwerking en synergieën"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €110.000 – €230.000+ base salary." },
      ],
      faqs: [{ q: "Hoe verschilt een BU Director van een General Manager?", a: "De termen worden vaak door elkaar gebruikt. Een BU Director opereert typisch binnen een groter concern." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "General Manager", href: "/nl/functies/general-manager" }, { label: "Managing Director", href: "/nl/functies/managing-director" }],
    },
  },
  {
    slug: "operations-director", title: "Operations Director", shortTitle: "Operations Director", description: "Operationeel leiderschap, procesverbetering en schaling.", icon: Factory, cluster: "directors",
    pageData: {
      metaTitle: "Operations Director Recruitment | One Time Recruit", metaDescription: "Executive search voor Operations Directors.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "Operations Director" }],
      heroLabel: "Functies", heroTitle: "Operations Director:", heroHighlight: "operationele excellentie", heroDescription: "De Operations Director zorgt voor efficiënte, schaalbare en betrouwbare operaties.",
      sections: [
        { title: "Rolprofiel", content: "De Operations Director is verantwoordelijk voor de operationele uitvoering en continue verbetering. Het is de rechterhand van de COO of CEO op operationeel vlak." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Operationele planning en uitvoering", "Procesverbetering en lean management", "Resource management en capacity planning", "Kwaliteitsmanagement", "Operationele KPI's en rapportage"] },
        { title: "Salarisbenchmark", content: "Salarisbenchmark: €100.000 – €200.000+ base salary." },
      ],
      faqs: [{ q: "Wat is het verschil met een COO?", a: "De Operations Director is doorgaans meer hands-on en rapporteert aan de COO of CEO, terwijl de COO een C-level positie is." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "COO", href: "/nl/functies/coo-chief-operating-officer" }, { label: "Supply chain", href: "/nl/industries/supply-chain" }, { label: "Productie", href: "/nl/industries/productie-en-maakindustrie" }],
    },
  },
];

export default roles;

export function getRoleBySlug(slug: string): RoleData | undefined {
  return roles.find((r) => r.slug === slug);
}

export function getRolesByCluster(clusterId: string): RoleData[] {
  return roles.filter((r) => r.cluster === clusterId);
}

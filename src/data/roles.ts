import type { SpokePageData } from "@/components/layout/SpokePage";
import {
  Crown, Coins, Settings, Cpu, Monitor, Megaphone, Users, Package, Target,
  TrendingUp, ShieldCheck, Smartphone, Database, Scale, AlertTriangle,
  Briefcase, Globe, Building2, BarChart3, Factory, Landmark, Gavel,
  ShoppingCart, Wrench, Code, Presentation, CircuitBoard
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
      metaDescription: "Executive search voor CEO's. Rolprofiel, hiring signals, assessment scorecard, interviewvragen en salarisbenchmark voor Chief Executive Officers.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "CEO" }],
      heroLabel: "Functies", heroTitle: "CEO recruitment:", heroHighlight: "de juiste nummer één", heroDescription: "De CEO bepaalt de koers van uw organisatie. Vind een leider met de juiste visie, ervaring en culturele fit via een gestructureerd executive search proces dat bewezen resultaten levert.",
      pageType: "functie" as const,
      roleSnapshot: {
        responsibilities: [
          "Bepalen en uitvoeren van de bedrijfsstrategie en langetermijnvisie",
          "Aansturen van het executive team (CFO, COO, CHRO, CTO, CMO)",
          "Vertegenwoordigen van de organisatie richting aandeelhouders, board en stakeholders",
          "Waarborgen van financiële gezondheid, groei en waardecreatie",
          "Vormgeven van organisatiecultuur en talent-strategie op het hoogste niveau",
        ],
        scope: "Eindverantwoordelijk voor alle bedrijfsactiviteiten, typisch bij organisaties van €20M–€5B+ omzet",
        reportingLines: "Rapporteert aan de Raad van Commissarissen / Board of Directors",
      },
      hiringSignals: {
        signals: [
          "Founder wil of moet de operationele leiding overdragen aan een professionele CEO",
          "Organisatie groeit voorbij de span of control van het huidige leiderschap",
          "Board of investeerders eisen een nieuwe strategische richting",
          "Post-merger integratie vereist een leider die twee culturen kan verbinden",
          "Huidige CEO kondigt vertrek aan met < 6 maanden transitietijd",
        ],
        risks: [
          "Culture clash: CEO uit corporate omgeving faalt in ondernemende cultuur (of omgekeerd)",
          "Strategisch ongeduld: te snel willen transformeren zonder draagvlak bij het MT",
          "Board-misalignment: CEO en aandeelhouders hebben verschillende tijdshorizonten",
          "Stakeholder-management: onderschatting van de politieke dimensie van het leiderschap",
          "Onboarding-falen: geen gestructureerd [100-dagen plan](/nl/onboarding-executives) leidt tot vroeg verlies van momentum",
        ],
      },
      evidence: [
        { icon: "case", title: "CEO voor Series C SaaS-platform", value: "2x ARR in 18 mnd", description: "Geplaatste CEO realiseerde een verdubbeling van €15M naar €32M ARR en opende 2 nieuwe Europese markten." },
        { icon: "case", title: "CEO voor PE-portfoliobedrijf", value: "€4M EBITDA-plan", description: "CEO presenteerde binnen 90 dagen een transformatieplan en realiseerde 70% van de €4M EBITDA-verbetering in jaar 1." },
        { icon: "benchmark", title: "Kosten mis-hire", value: "2,5x jaarsalaris", description: "Een mis-hire op CEO-niveau kost gemiddeld 2,5x het jaarsalaris aan directe en indirecte kosten (Harvard Business Review)." },
        { icon: "insight", title: "PE onboarding impact", description: "PE-portfolio bedrijven met een gestructureerd 100-dagen onboarding-programma behalen 40% hogere EBITDA-groei in jaar 1 (McKinsey)." },
      ],
      serpFit: {
        intentBullets: [
          "Wat kost een CEO executive search? — Gemiddeld 25-33% van het bruto jaarsalaris, inclusief assessment en garantie",
          "Hoe lang duurt het om een CEO te vinden? — 6-10 weken bij een gestructureerd search-proces",
          "Wat is het verschil tussen een headhunter en executive search? — [Lees de vergelijking](/nl/executive-search-vs-headhunter)",
          "Hoe voorkom je een mis-hire op CEO-niveau? — Via [assessment](/nl/diensten/assessment-selectie), referentiechecks en gestructureerde onboarding",
          "Welk salaris biedt een CEO in Nederland? — €180K–€450K+ base, afhankelijk van omvang en LTIP-structuur",
        ],
        comparison: [
          { label: "Kandidatenpool", standard: "Bestaand netwerk van de headhunter", otr: "Systematische marktmapping + 120+ profielen gescreend" },
          { label: "Assessment", standard: "CV-screening + 1-2 gesprekken", otr: "[STAR-interviews](/nl/star-interview-guide) + scorecard + referentiechecks" },
          { label: "Garantie", standard: "3 maanden (of geen)", otr: "6 maanden garantie op elke plaatsing" },
          { label: "Onboarding", standard: "Niet inbegrepen", otr: "100-dagen [onboarding-programma](/nl/onboarding-executives) inbegrepen" },
        ],
        checklist: [
          "Strategische visie en track record van waardecreatie",
          "P&L-ervaring op vergelijkbare schaal en complexiteit",
          "Bewezen vermogen om een executive team te bouwen en te leiden",
          "Stakeholder management: board, investeerders, OR, klanten",
          "Cultuurfit: past de leiderschapsstijl bij uw organisatiefase?",
          "Transformatievermogen: kan de kandidaat verandering doorvoeren?",
          "Sectorkennis vs. cross-sector perspectief: wat heeft u nodig?",
          "Internationale ervaring (indien relevant voor uw markt)",
        ],
      },
      sections: [
        { title: "Rolprofiel: CEO", content: "De Chief Executive Officer (CEO) is de hoogste leidinggevende van een organisatie. De CEO draagt eindverantwoordelijkheid voor de strategische richting, financiële prestaties, organisatiecultuur en stakeholder management.\n\nEen succesvolle CEO combineert visionair leiderschap met operationeel inzicht en de capaciteit om een [executive team](/nl/diensten/leadership-advisory) te bouwen dat resultaten levert. In de huidige markt zien wij een verschuiving van de 'steady-state CEO' naar de 'transformatie-CEO' — een leider die niet alleen beheert, maar actief waarde creëert." },
        { title: "Wanneer heeft u een nieuwe CEO nodig?", content: "Het vinden van de juiste CEO begint met het herkennen van de signalen dat uw organisatie klaar is voor nieuw leiderschap. Uit onze ervaring met 100+ CEO-plaatsingen blijkt dat organisaties vaak te laat beginnen met zoeken.\n\nDe vijf meest voorkomende triggers zijn een founder-transitie, snelle groei voorbij de huidige span of control, strategische heroriëntatie door board of investeerders, post-merger integratie, en een aangekondigd vertrek van de huidige CEO. In elk scenario is snelheid essentieel — het [executive search proces](/nl/hoe-lang-duurt-executive-search) moet starten zodra de behoefte duidelijk is.", items: ["Founder-transitie: van oprichter naar professionele CEO — cruciaal bij Series B+ of pre-IPO", "Groei-pijn: de organisatie is complexer geworden dan het huidige leiderschap aankan", "Board-mandaat: investeerders of commissarissen eisen een nieuwe koers", "Post-merger: twee culturen en organisaties moeten samensmelten onder één leider", "Vertrek: opvolging plannen vóórdat de huidige CEO vertrekt"] },
        { title: "Assessment scorecard voor CEO-kandidaten", content: "Bij [executive assessment](/nl/diensten/assessment-selectie) van CEO-kandidaten hanteren wij een scorecard met zes dimensies die elk gewogen worden naar de specifieke context van uw organisatie. Deze scorecard is ontwikkeld op basis van wetenschappelijk onderzoek en onze eigen plaatsingsdata.\n\nElke dimensie wordt beoordeeld via [STAR-interviews](/nl/star-interview-guide), case studies en diepgaande [referentiechecks](/nl/referentiechecks). Het resultaat is een objectief, vergelijkbaar profiel van elke finalist.", items: ["Strategisch denken & visie — vermogen om een langetermijnkoers uit te zetten en bij te sturen", "P&L ownership & financieel inzicht — bewezen ervaring met waardecreatie op vergelijkbare schaal", "Stakeholder management — effectief navigeren tussen board, MT, OR en externe partijen", "Transformatie- & change-vermogen — track record van succesvolle organisatieverandering", "Cultuurleiderschap & talent development — bouwen van high-performing teams", "Sector- en marktkennis — diepgaand begrip van de relevante industrie of cross-sector transferability"] },
        { title: "Ons CEO search-proces", content: "Onze [executive search methodiek](/nl/wat-is-executive-search) voor CEO-posities is ontworpen om binnen 6-10 weken een shortlist van 3-5 uitzonderlijke kandidaten te presenteren. Het proces combineert systematische marktmapping met diepgaand assessment.\n\nElke search begint met een intake waarin we de strategische context, organisatiecultuur en ideaal profiel definiëren. Vervolgens mappen we de markt — niet alleen het voor de hand liggende netwerk, maar ook [vertrouwelijke profielen](/nl/confidential-search) die niet actief zoeken. De [kosten van executive search](/nl/kosten-executive-search) zijn transparant: een vast tarief met garantie.", items: ["Strategische intake: profiel, cultuur en context in 1 intensieve sessie", "Marktmapping: 120+ profielen geïdentificeerd, 30-40 benaderd, 8-12 in diepte-interview", "Shortlist: 3-5 kandidaten met uitgebreid dossier en scorecard-profiel", "Assessment: [STAR-interviews](/nl/star-interview-guide), case study en [referentiechecks](/nl/referentiechecks)", "Onboarding: 100-dagen programma voor [succesvolle integratie](/nl/onboarding-executives)"] },
        { title: "Salarisbenchmark & compensatie", content: "De compensatie van een CEO in Nederland varieert sterk op basis van organisatieomvang, sector, eigendomsstructuur (beursgenoteerd, PE-backed, familiebedrijf) en groeifase.\n\nDe totale beloning omvat typisch base salary, short-term incentive (STI/bonus), long-term incentive (LTIP, equity of phantom shares), pensioen en secundaire voorwaarden. Bij PE-backed bedrijven speelt sweet equity een steeds grotere rol — dit aligneert de CEO met de [waardecreatie-horizon](/nl/compensation-benefits-trends) van het fonds.", items: ["Base salary: €180.000–€450.000+ (corporate) of €120.000–€250.000 (scale-up met equity)", "STI/Bonus: 30-50% van base salary bij target achievement", "LTIP: equity, stock options, phantom shares of co-invest mogelijkheden", "Pensioen: beschikbare premieregeling, typisch 20-25% van pensioengrondslag", "Overig: onkostenvergoeding, bestuurdersaansprakelijkheidsverzekering, opzegtermijn 6-12 maanden"] },
      ],
      faqs: [
        { q: "Hoe lang duurt het om een CEO te vinden via executive search?", a: "Een CEO-search duurt gemiddeld 6-10 weken, inclusief een uitgebreid assessment- en referentieproces. De doorlooptijd hangt af van de complexiteit van het profiel, de sector en of de search vertrouwelijk is. Wij adviseren altijd om minimaal 3 maanden vóór de gewenste startdatum te beginnen." },
        { q: "Wat kost het om een CEO te recruiten?", a: "De kosten van CEO executive search bedragen gemiddeld 25-33% van het bruto jaarsalaris. Bij One Time Recruit werken we met een vast tarief inclusief assessment, referentiechecks en een garantie van 6 maanden. Lees meer over de kosten op onze pagina over executive search kosten." },
        { q: "Wat maakt een goede CEO?", a: "Uit onze plaatsingsdata blijkt dat succesvolle CEO's zes dimensies combineren: strategische visie, P&L-ervaring, stakeholder management, transformatievermogen, cultuurleiderschap en sector- of marktkennis. De weging verschilt per organisatiefase — een scale-up CEO heeft andere kwaliteiten nodig dan een corporate CEO." },
        { q: "Is sectorervaring vereist voor een CEO?", a: "Niet altijd. Cross-sector CEO's kunnen frisse perspectieven brengen, mits zij snel de sectorspecifieke dynamiek begrijpen. Uit onze ervaring slagen cross-sector hires vooral wanneer de organisatie behoefte heeft aan transformatie of een nieuw perspectief." },
        { q: "Hoe voorkom je een mis-hire op CEO-niveau?", a: "Een mis-hire op CEO-niveau kost gemiddeld 2,5x het jaarsalaris. Wij reduceren dit risico door een combinatie van gestructureerd assessment (STAR-interviews, scorecard, case study), diepgaande referentiechecks en een 100-dagen onboarding-programma. De garantie van 6 maanden biedt extra zekerheid." },
        { q: "Wat is het verschil tussen een CEO en een Managing Director?", a: "In Nederland worden de termen soms door elkaar gebruikt. Een CEO rapporteert typisch aan de Raad van Commissarissen en is eindverantwoordelijk. Een Managing Director rapporteert vaak aan een groepsdirectie of moedermaatschappij en heeft een beperkter mandaat." },
        { q: "Wanneer moet een founder een externe CEO aantrekken?", a: "De meest voorkomende triggers zijn: de organisatie groeit voorbij de operationele span of control van de founder, investeerders eisen professionalisering (vaak bij Series B+), of de founder wil zich focussen op product/technologie. Een succesvolle founder-CEO transitie vereist een zorgvuldig onboarding-proces." },
        { q: "Hoe werkt het assessment van CEO-kandidaten?", a: "Ons CEO-assessment omvat STAR-gebaseerde diepte-interviews, een organisatie-specifieke case study, psychometrische analyse (optioneel), en uitgebreide referentiechecks bij voormalige bestuurders, commissarissen en directe rapportlijnen. U ontvangt een gedetailleerd rapport met scorecard en aanbevelingen." },
        { q: "Wat is de garantie op een CEO-plaatsing?", a: "Wij bieden standaard 6 maanden garantie op elke CEO-plaatsing. Als de geplaatste kandidaat binnen deze periode vertrekt of niet functioneert, starten wij kosteloos een nieuwe search. Dit is langer dan de marktstandaard van 3 maanden." },
        { q: "Kan executive search ook vertrouwelijk?", a: "Ja, vertrouwelijke CEO-search is een van onze specialisaties. Dit is relevant wanneer de huidige CEO nog in functie is, bij gevoelige board-situaties, of wanneer de markt niet mag weten dat u een CEO zoekt. Lees meer op onze pagina over confidential search." },
      ],
      ctaTitle: "Op zoek naar uw volgende CEO?",
      ctaDescription: "Plan een vrijblijvend gesprek en ontdek hoe onze executive search methodiek de juiste CEO voor uw organisatie vindt — binnen 6-10 weken.",
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [
        { label: "CFO recruitment", href: "/nl/functies/cfo-chief-financial-officer" },
        { label: "COO recruitment", href: "/nl/functies/coo-chief-operating-officer" },
        { label: "Board & commissarissen", href: "/nl/board-commissarissen-search" },
        { label: "Executive search", href: "/nl/diensten/executive-search" },
        { label: "Kosten executive search", href: "/nl/kosten-executive-search" },
        { label: "Assessment & selectie", href: "/nl/diensten/assessment-selectie" },
        { label: "Leadership advisory", href: "/nl/diensten/leadership-advisory" },
        { label: "Onboarding executives", href: "/nl/onboarding-executives" },
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
  // ─── DIRECTORS (continued) ───
  {
    slug: "finance-director", title: "Finance Director", shortTitle: "Finance Director", description: "Financieel management, reporting en business partnering.", icon: Coins, cluster: "directors",
    pageData: {
      metaTitle: "Finance Director Recruitment | One Time Recruit", metaDescription: "Executive search voor Finance Directors. Rolprofiel, interviewvragen en salarisbenchmark.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "Finance Director" }],
      heroLabel: "Functies", heroTitle: "Finance Director:", heroHighlight: "financieel fundament", heroDescription: "De Finance Director waarborgt financiële gezondheid en levert strategisch inzicht aan het managementteam.",
      sections: [
        { title: "Rolprofiel: Finance Director", content: "De Finance Director is verantwoordelijk voor de volledige financiële functie van de organisatie. Anders dan de CFO, die strategisch op board-niveau opereert, is de Finance Director vaak meer hands-on betrokken bij de dagelijkse financiële operatie.\n\nDe ideale Finance Director combineert technische financiële expertise met het vermogen om als business partner te fungeren voor het managementteam." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden van de Finance Director:", items: ["Financiële rapportage, budgettering en forecasting", "Management van het finance-team (controllers, accountants, treasury)", "Business partnering — financiële inzichten vertalen naar strategische beslissingen", "Audit, compliance en interne controle", "Cash management en werkkapitaaloptimalisatie", "ERP-implementatie en financiële digitalisering"] },
        { title: "Interviewvragen", content: "Aanbevolen interviewvragen voor Finance Director-kandidaten:", items: ["Hoe heeft u de financiële rapportage verbeterd of geautomatiseerd?", "Beschrijf een situatie waarin uw financiële analyse een strategische beslissing heeft beïnvloed.", "Hoe balanceert u de rol van financieel bewaker met die van business partner?", "Wat is uw ervaring met ERP-migraties of financiële transformatieprojecten?", "Hoe bouwt u een high-performing finance team?"] },
        { title: "Succes-KPI's en salarisbenchmark", content: "KPI's: forecast accuracy, days to close, working capital ratio, cost-to-revenue ratio, audit resultaten.\n\nSalarisbenchmark Nederland: €100.000 – €180.000 base salary, afhankelijk van organisatieomvang en complexiteit." },
      ],
      faqs: [
        { q: "Wat is het verschil tussen een Finance Director en een CFO?", a: "De CFO is een C-level strategische positie met board-verantwoordelijkheid. De Finance Director is meer operationeel en rapporteert doorgaans aan de CFO of CEO." },
        { q: "Is RA/RC-registratie vereist?", a: "Niet altijd verplicht, maar in de praktijk wel sterk gewaardeerd. Steeds meer organisaties zoeken Finance Directors met een combinatie van RA en MBA." },
      ],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CFO", href: "/nl/functies/cfo-chief-financial-officer" }, { label: "CEO", href: "/nl/functies/ceo-chief-executive-officer" }, { label: "Accountancy sector", href: "/nl/industries/accountancy" }],
    },
  },
  {
    slug: "hr-director", title: "HR Director", shortTitle: "HR Director", description: "HR-strategie, talent management en organisatieontwikkeling.", icon: Users, cluster: "directors",
    pageData: {
      metaTitle: "HR Director Recruitment | One Time Recruit", metaDescription: "Executive search voor HR Directors. Rolprofiel, verantwoordelijkheden en salarisbenchmark.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "HR Director" }],
      heroLabel: "Functies", heroTitle: "HR Director:", heroHighlight: "people strategie", heroDescription: "De HR Director bouwt de organisatie van morgen via talent, cultuur en organisatieontwikkeling.",
      sections: [
        { title: "Rolprofiel: HR Director", content: "De HR Director is verantwoordelijk voor de HR-strategie en de volledige employee lifecycle. In de huidige arbeidsmarkt is de HR Director een cruciale strategische partner die direct bijdraagt aan bedrijfsresultaten via talent acquisition, retentie en organisatieontwikkeling.\n\nDe rol verschilt van de CHRO door een meer operationele focus en directe aansturing van het HR-team." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["HR-strategie en workforce planning", "Talent acquisition en [employer branding](/nl/employer-brand-senior-talent)", "Performance management en talentontwikkeling", "Compensation & benefits en job grading", "Organisatieontwikkeling en change management", "HR-systemen (HRIS) en people analytics"] },
        { title: "Interviewvragen", content: "Aanbevolen vragen:", items: ["Hoe heeft u employer branding ingezet om schaars talent aan te trekken?", "Beschrijf een organisatieverandering die u heeft begeleid.", "Hoe meet u de effectiviteit van HR-initiatieven?", "Wat is uw visie op de toekomst van werk (hybride, AI, skills-based)?", "Hoe bouwt u een data-driven HR-functie?"] },
        { title: "Salarisbenchmark", content: "KPI's: employee engagement score, time-to-fill, voluntary turnover rate, eNPS, diversity metrics.\n\nSalarisbenchmark: €100.000 – €170.000 base salary." },
      ],
      faqs: [
        { q: "Wat is het verschil met een CHRO?", a: "De CHRO is een C-level boardroom-positie. De HR Director is meer operationeel en rapporteert aan de CHRO, CEO of Managing Director." },
        { q: "Is HR-certificering vereist?", a: "Niet verplicht, maar SHRM, CIPD of vergelijkbare certificeringen worden gewaardeerd." },
      ],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CHRO", href: "/nl/functies/chro-chief-hr-officer" }, { label: "HR Services sector", href: "/nl/industries/hr-services" }, { label: "Leadership retention", href: "/nl/leadership-retention" }],
    },
  },
  {
    slug: "vp-sales", title: "VP Sales", shortTitle: "VP Sales", description: "Sales strategie, team leiderschap en revenue groei.", icon: TrendingUp, cluster: "commercial",
    pageData: {
      metaTitle: "VP Sales Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor VP Sales. Rolprofiel, interviewvragen en salarisbenchmark.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "VP Sales" }],
      heroLabel: "Functies", heroTitle: "VP Sales:", heroHighlight: "revenue engine", heroDescription: "De VP Sales bouwt en leidt het salesteam dat de omzetdoelstellingen realiseert.",
      sections: [
        { title: "Rolprofiel: VP Sales", content: "De VP Sales is verantwoordelijk voor de volledige sales-organisatie en -strategie. Van het bouwen van het salesteam tot het ontwerpen van de go-to-market strategie — de VP Sales is de drijvende kracht achter omzetgroei.\n\nIn B2B en SaaS-omgevingen wordt de VP Sales steeds meer beoordeeld op metrics als pipeline velocity, win rate en sales efficiency naast pure omzetcijfers." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Sales strategie en go-to-market planning", "Team building, coaching en performance management", "Pipeline management en revenue forecasting", "Key account management en enterprise sales", "Sales operations, enablement en tooling", "Samenwerking met marketing (demand generation) en customer success"] },
        { title: "Interviewvragen", content: "Aanbevolen vragen:", items: ["Hoe heeft u een sales-organisatie opgebouwd of geschaald?", "Beschrijf uw aanpak voor het opzetten van een sales playbook.", "Hoe gaat u om met een underperformend salesteam?", "Wat is uw ervaring met enterprise sales cycles van 6+ maanden?", "Hoe balanceert u new business met account expansion?"] },
        { title: "Salarisbenchmark", content: "KPI's: ARR/omzetgroei, pipeline coverage, win rate, average deal size, sales cycle length, quota attainment.\n\nSalarisbenchmark: €120.000 – €200.000 base salary + significante variabele beloning (OTE €180.000 – €350.000+)." },
      ],
      faqs: [
        { q: "Wanneer heb ik een VP Sales nodig vs. een Sales Director?", a: "Een VP Sales opereert op strategisch niveau en rapporteert aan de CEO/CRO. Een Sales Director is meer tactisch en hands-on in het dagelijkse saleswerk." },
        { q: "Is sectorervaring cruciaal?", a: "Het hangt af van de complexiteit van uw product. Bij enterprise B2B en SaaS is domeinkennis vaak essentieel voor geloofwaardigheid." },
      ],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CRO", href: "/nl/functies/cro-chief-revenue-officer" }, { label: "CMO", href: "/nl/functies/cmo-chief-marketing-officer" }, { label: "SaaS sector", href: "/nl/industries/saas" }],
    },
  },
  {
    slug: "vp-marketing", title: "VP Marketing", shortTitle: "VP Marketing", description: "Marketing strategie, brand building en demand generation.", icon: Megaphone, cluster: "commercial",
    pageData: {
      metaTitle: "VP Marketing Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor VP Marketing. Rolprofiel en salarisbenchmark.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "VP Marketing" }],
      heroLabel: "Functies", heroTitle: "VP Marketing:", heroHighlight: "merk & groei", heroDescription: "De VP Marketing bouwt het merk, genereert demand en vertaalt marketing naar meetbare bedrijfsresultaten.",
      sections: [
        { title: "Rolprofiel: VP Marketing", content: "De VP Marketing leidt de marketingfunctie en is verantwoordelijk voor merkstrategie, demand generation, content en marketing operations. In moderne organisaties is de VP Marketing een data-driven leider die marketing direct koppelt aan pipeline en omzet.\n\nDe rol is met name cruciaal bij B2B-bedrijven en SaaS-organisaties waar marketing steeds vaker wordt afgerekend op pipeline contribution." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Brand strategy en positionering", "Demand generation en lead nurturing", "Content strategy en thought leadership", "Marketing operations en MarTech stack", "Analytics, attribution en ROI-rapportage", "Alignment met sales (smarketing)"] },
        { title: "Interviewvragen", content: "Vragen:", items: ["Hoe meet u de ROI van marketing en hoe rapporteert u aan de board?", "Beschrijf een succesvolle demand generation campagne die u heeft opgezet.", "Hoe bouwt u een MarTech stack op?", "Wat is uw visie op AI in marketing?"] },
        { title: "Salarisbenchmark", content: "KPI's: MQL/SQL volume, pipeline contribution, CAC, brand awareness, website traffic growth.\n\nSalarisbenchmark: €110.000 – €180.000 base salary." },
      ],
      faqs: [{ q: "Wat is het verschil met een CMO?", a: "De CMO is een C-level boardroom-positie met bredere strategische scope. De VP Marketing is meer executie-gericht en rapporteert aan de CMO of CEO." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CMO", href: "/nl/functies/cmo-chief-marketing-officer" }, { label: "VP Sales", href: "/nl/functies/vp-sales" }, { label: "E-commerce sector", href: "/nl/industries/e-commerce" }],
    },
  },
  {
    slug: "vp-engineering", title: "VP Engineering", shortTitle: "VP Engineering", description: "Engineering leiderschap, team schaling en delivery excellence.", icon: Code, cluster: "digital",
    pageData: {
      metaTitle: "VP Engineering Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor VP Engineering. Rolprofiel, interviewvragen en salarisbenchmark.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "VP Engineering" }],
      heroLabel: "Functies", heroTitle: "VP Engineering:", heroHighlight: "engineering excellence", heroDescription: "De VP Engineering bouwt en leidt het engineering-team dat uw product realiseert.",
      sections: [
        { title: "Rolprofiel: VP Engineering", content: "De VP Engineering is verantwoordelijk voor het engineering-team, de development-processen en de delivery van het product. Terwijl de CTO zich richt op technologische visie en architectuur, focust de VP Engineering op people management, teamschaling en execution.\n\nDit is een cruciale rol bij scale-ups die groeien van 10 naar 100+ engineers — het verschil tussen chaos en excellentie." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Engineering team management en schaling", "Agile/Scrum processen en delivery cadence", "Technische kwaliteit, code reviews en engineering standards", "Recruitment en retentie van engineers", "Samenwerking met product (roadmap delivery)", "Engineering culture en developer experience"] },
        { title: "Interviewvragen", content: "Vragen:", items: ["Hoe heeft u een engineering-organisatie geschaald van X naar Y engineers?", "Hoe balanceert u technische schuld met feature delivery?", "Beschrijf hoe u engineering-productiviteit meet.", "Hoe gaat u om met underperformance in het team?", "Wat is uw aanpak voor remote/hybrid engineering teams?"] },
        { title: "Salarisbenchmark", content: "KPI's: deployment frequency, lead time, engineering velocity, MTTR, developer satisfaction.\n\nSalarisbenchmark: €120.000 – €220.000 base salary, vaak met equity bij scale-ups." },
      ],
      faqs: [
        { q: "Wat is het verschil met een CTO?", a: "De CTO focust op technologische strategie en architectuur. De VP Engineering focust op het team, processen en delivery. Bij grotere organisaties zijn het twee aparte rollen." },
        { q: "Is hands-on coding ervaring vereist?", a: "Een sterke technische achtergrond is essentieel voor geloofwaardigheid. De VP Engineering hoeft niet dagelijks te coderen, maar moet technische discussies op architectuurniveau kunnen voeren." },
      ],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CTO", href: "/nl/functies/cto-chief-technology-officer" }, { label: "VP Product", href: "/nl/functies/vp-product" }, { label: "IT & Software", href: "/nl/industries/it-en-software" }],
    },
  },
  {
    slug: "vp-product", title: "VP Product", shortTitle: "VP Product", description: "Productmanagement, roadmap en product-market fit.", icon: Package, cluster: "commercial",
    pageData: {
      metaTitle: "VP Product Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor VP Product. Rolprofiel en salarisbenchmark.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "VP Product" }],
      heroLabel: "Functies", heroTitle: "VP Product:", heroHighlight: "product leiderschap", heroDescription: "De VP Product bepaalt wat er gebouwd wordt, waarom, en zorgt dat het product waarde levert voor klanten en business.",
      sections: [
        { title: "Rolprofiel: VP Product", content: "De VP Product leidt het productmanagement-team en is verantwoordelijk voor de productstrategie, roadmap-prioritering en het waarborgen van product-market fit. In SaaS en tech-bedrijven is dit een van de meest impactvolle rollen.\n\nDe VP Product opereert op het snijvlak van klant, business en technologie — en moet alle drie domeinen begrijpen om de juiste trade-offs te maken." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Productstrategie en -visie", "Roadmap-prioritering (impact vs. effort)", "User research en klantvalidatie", "Cross-functionele samenwerking (engineering, sales, marketing)", "Product analytics en KPI-management", "Product team building en mentoring"] },
        { title: "Interviewvragen", content: "Vragen:", items: ["Hoe prioriteert u features wanneer alles urgent lijkt?", "Beschrijf hoe u product-market fit heeft gevonden of verbeterd.", "Hoe gaat u om met conflicterende input van sales, engineering en klanten?", "Wat is uw aanpak voor product discovery?"] },
        { title: "Salarisbenchmark", content: "KPI's: feature adoption rate, NPS, time-to-value, retention/churn impact, revenue per feature.\n\nSalarisbenchmark: €110.000 – €200.000 base salary, vaak met equity." },
      ],
      faqs: [{ q: "Wat is het verschil met een CPO?", a: "De CPO is de C-level versie met bredere strategische scope en board-verantwoordelijkheid. De VP Product is meer executie-gericht." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CPO", href: "/nl/functies/cpo-chief-product-officer" }, { label: "VP Engineering", href: "/nl/functies/vp-engineering" }, { label: "SaaS sector", href: "/nl/industries/saas" }],
    },
  },
  {
    slug: "vp-operations", title: "VP Operations", shortTitle: "VP Operations", description: "Operationeel leiderschap, procesoptimalisatie en schaalbare organisaties.", icon: Settings, cluster: "directors",
    pageData: {
      metaTitle: "VP Operations Recruitment via Executive Search | One Time Recruit", metaDescription: "Executive search voor VP Operations. Rolprofiel en salarisbenchmark.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "VP Operations" }],
      heroLabel: "Functies", heroTitle: "VP Operations:", heroHighlight: "operationele schaling", heroDescription: "De VP Operations bouwt schaalbare operaties en zorgt dat de organisatie efficiënt groeit.",
      sections: [
        { title: "Rolprofiel: VP Operations", content: "De VP Operations is verantwoordelijk voor het ontwerpen, optimaliseren en schalen van bedrijfsoperaties. Deze rol is cruciaal bij snelgroeiende organisaties waar processen moeten meegroeien met de business.\n\nDe VP Operations combineert strategisch denken met hands-on execution — van supply chain tot customer operations, van quality management tot continuous improvement." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Operationele strategie en procesoptimalisatie", "Supply chain management en leveranciersbeheer", "Kwaliteitsmanagement en compliance", "Capacity planning en resource allocation", "Lean/Six Sigma en continuous improvement", "Cross-functionele samenwerking en operationele KPI's"] },
        { title: "Interviewvragen", content: "Vragen:", items: ["Hoe heeft u operaties geschaald bij snelle groei?", "Beschrijf een procesverbetering die u heeft geïmplementeerd en het meetbare resultaat.", "Hoe balanceert u kosten, kwaliteit en snelheid?", "Wat is uw ervaring met lean of Six Sigma methodologieën?"] },
        { title: "Salarisbenchmark", content: "KPI's: operational efficiency, OTD (on-time delivery), cost reduction, quality metrics, customer satisfaction.\n\nSalarisbenchmark: €110.000 – €190.000 base salary." },
      ],
      faqs: [{ q: "Wat is het verschil met een COO?", a: "De COO is een C-level boardroom-positie. De VP Operations is meer executie-gericht en rapporteert aan de COO of CEO." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "COO", href: "/nl/functies/coo-chief-operating-officer" }, { label: "Operations Director", href: "/nl/functies/operations-director" }, { label: "Supply chain sector", href: "/nl/industries/supply-chain" }],
    },
  },
  {
    slug: "head-of-legal", title: "Head of Legal", shortTitle: "Head of Legal", description: "Juridische strategie, compliance en contractmanagement.", icon: Gavel, cluster: "governance",
    pageData: {
      metaTitle: "Head of Legal Recruitment | One Time Recruit", metaDescription: "Executive search voor Head of Legal. Rolprofiel, verantwoordelijkheden en salarisbenchmark.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "Head of Legal" }],
      heroLabel: "Functies", heroTitle: "Head of Legal:", heroHighlight: "juridisch leiderschap", heroDescription: "De Head of Legal beschermt de organisatie en maakt complexe transacties mogelijk.",
      sections: [
        { title: "Rolprofiel: Head of Legal", content: "De Head of Legal (of General Counsel) is verantwoordelijk voor alle juridische aangelegenheden van de organisatie. Van contractmanagement tot M&A-ondersteuning, van compliance tot intellectual property — de Head of Legal is zowel beschermer als enabler.\n\nIn een wereld van toenemende regulering (AVG, AI Act, ESG-wetgeving) wordt deze rol steeds strategischer." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Juridische strategie en risk management", "Contractmanagement en commercial law", "M&A due diligence en deal-structurering", "Compliance (AVG, sectorspecifieke regelgeving)", "Intellectual property en data governance", "Aansturen van extern juridisch counsel", "Corporate governance en board support"] },
        { title: "Interviewvragen", content: "Vragen:", items: ["Hoe balanceert u juridische risico's met commerciële snelheid?", "Beschrijf een complex M&A- of compliance-traject dat u heeft geleid.", "Hoe maakt u juridisch advies toegankelijk voor niet-juristen?", "Wat is uw ervaring met AI-gerelateerde regulering?"] },
        { title: "Salarisbenchmark", content: "KPI's: contract turnaround time, compliance score, litigation costs, legal spend management.\n\nSalarisbenchmark: €110.000 – €200.000 base salary, hoger bij internationale organisaties." },
      ],
      faqs: [
        { q: "Moet een Head of Legal advocaat zijn?", a: "Een juridische achtergrond is essentieel. De meeste Head of Legals zijn advocaat of bedrijfsjurist met relevante praktijkervaring." },
        { q: "In welke sectoren is deze rol het meest kritisch?", a: "In zwaar gereguleerde sectoren (finance, pharma, tech) en bij M&A-intensieve organisaties is de Head of Legal een cruciale strategische functie." },
      ],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "Chief Compliance Officer", href: "/nl/functies/chief-compliance-officer" }, { label: "Chief Risk Officer", href: "/nl/functies/chief-risk-officer" }, { label: "Legal sector", href: "/nl/industries/legal" }],
    },
  },
  {
    slug: "head-of-procurement", title: "Head of Procurement", shortTitle: "Head of Procurement", description: "Inkoopstrategie, leveranciersmanagement en cost optimization.", icon: ShoppingCart, cluster: "directors",
    pageData: {
      metaTitle: "Head of Procurement Recruitment | One Time Recruit", metaDescription: "Executive search voor Head of Procurement. Rolprofiel en salarisbenchmark.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "Head of Procurement" }],
      heroLabel: "Functies", heroTitle: "Head of Procurement:", heroHighlight: "strategisch inkopen", heroDescription: "De Head of Procurement transformeert inkoop van kostenpost naar strategische waardecreatie.",
      sections: [
        { title: "Rolprofiel: Head of Procurement", content: "De Head of Procurement (of CPO — Chief Procurement Officer) is verantwoordelijk voor de inkoopstrategie, leveranciersrelaties en cost optimization. In een wereld van supply chain disrupties, ESG-eisen en geopolitieke risico's is strategisch inkopen crucialer dan ooit.\n\nDe moderne procurement-leider gaat verder dan kostenreductie: supplier innovation, sustainability en risk management zijn kernverantwoordelijkheden." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["Inkoopstrategie en category management", "Leveranciersselectie, -beoordeling en -ontwikkeling", "Contract-onderhandelingen en TCO-optimalisatie", "Supply chain risk management en dual sourcing", "Sustainable procurement en ESG-compliance", "Procurement digitalisering (P2P, e-procurement)"] },
        { title: "Interviewvragen", content: "Vragen:", items: ["Hoe heeft u significante kostenbesparingen gerealiseerd zonder kwaliteitsverlies?", "Beschrijf hoe u leveranciersrisico's heeft gemanaged tijdens supply chain disrupties.", "Wat is uw aanpak voor sustainable procurement?", "Hoe digitaliseert u het inkoopproces?"] },
        { title: "Salarisbenchmark", content: "KPI's: cost savings %, supplier performance score, contract compliance, sustainable sourcing %.\n\nSalarisbenchmark: €100.000 – €170.000 base salary." },
      ],
      faqs: [{ q: "Is procurement-ervaring in mijn sector vereist?", a: "Sectorkennis is een plus, maar de beste procurement-leiders brengen best practices mee uit andere sectoren. Category-specifieke ervaring is belangrijker dan sectorervaring." }],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "VP Operations", href: "/nl/functies/vp-operations" }, { label: "COO", href: "/nl/functies/coo-chief-operating-officer" }, { label: "Supply chain sector", href: "/nl/industries/supply-chain" }, { label: "Productie sector", href: "/nl/industries/productie-en-maakindustrie" }],
    },
  },
  {
    slug: "head-of-it", title: "Head of IT", shortTitle: "Head of IT", description: "IT-management, infrastructuur en digitale dienstverlening.", icon: CircuitBoard, cluster: "digital",
    pageData: {
      metaTitle: "Head of IT Recruitment | One Time Recruit", metaDescription: "Executive search voor Head of IT. Rolprofiel, verantwoordelijkheden en salarisbenchmark.",
      breadcrumbs: [{ label: "Home", href: "/nl" }, { label: "Functies", href: "/nl/functies" }, { label: "Head of IT" }],
      heroLabel: "Functies", heroTitle: "Head of IT:", heroHighlight: "digitale ruggengraat", heroDescription: "De Head of IT zorgt dat de technologische infrastructuur de business ondersteunt en beschermt.",
      sections: [
        { title: "Rolprofiel: Head of IT", content: "De Head of IT is verantwoordelijk voor de IT-infrastructuur, applicaties, servicedesk en informatiebeveiliging van de organisatie. Anders dan de CIO, die strategisch op boardroom-niveau opereert, is de Head of IT meer hands-on betrokken bij de dagelijkse IT-operatie.\n\nMet toenemende cyberdreigingen, cloud-migraties en AI-integratie wordt deze rol steeds complexer en strategischer." },
        { title: "Verantwoordelijkheden", content: "Kernverantwoordelijkheden:", items: ["IT-infrastructuur en cloud management", "Applicatiebeheer en ERP/CRM-systemen", "Cybersecurity en informatiebeveiliging", "IT-servicedesk en end-user support", "IT-budget en vendor management", "Digitale transformatie-projecten en AI-integratie"] },
        { title: "Interviewvragen", content: "Vragen:", items: ["Hoe heeft u een cloud-migratie geleid?", "Beschrijf uw aanpak voor cybersecurity in een organisatie zonder dedicated CISO.", "Hoe prioriteert u IT-investeringen met beperkt budget?", "Wat is uw ervaring met het managen van IT-vendors en outsourcing?", "Hoe zorgt u voor adoption van nieuwe systemen?"] },
        { title: "Salarisbenchmark", content: "KPI's: system uptime, incident response time, user satisfaction score, security incidents, project on-time delivery.\n\nSalarisbenchmark: €90.000 – €150.000 base salary." },
      ],
      faqs: [
        { q: "Wat is het verschil met een CIO?", a: "De CIO is een C-level strategische positie. De Head of IT is meer operationeel en rapporteert aan de CIO, CFO of CEO." },
        { q: "Is technische achtergrond vereist?", a: "Ja, een sterke technische basis is essentieel. Maar de Head of IT moet ook people management en business partnering beheersen." },
      ],
      pillarLink: { label: "Alle functies", href: "/nl/functies" },
      relatedLinks: [{ label: "CIO", href: "/nl/functies/cio-chief-information-officer" }, { label: "CISO", href: "/nl/functies/ciso-chief-information-security-officer" }, { label: "IT & Software sector", href: "/nl/industries/it-en-software" }],
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

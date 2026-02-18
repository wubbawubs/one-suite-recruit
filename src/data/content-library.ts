/**
 * Content Library — Central data layer for SEO page assembly.
 *
 * Every cross-page, functiepagina, and industry page pulls unique content
 * from this library instead of using generic templates.
 *
 * Structure:
 *   1. Sector Dossiers — trends, KPIs, hiring challenges, compliance, buying committee
 *   2. Role Dossiers   — signals, scorecards, interview rubrics, comp ranges
 *   3. Mini-Cases       — tagged on sector × role × service
 *   4. Micro-Insights   — one-liner facts tagged for in-body injection
 *
 * Lookup helpers at the bottom for easy querying.
 */

// ─── TYPES ───

export interface SectorDossier {
  slug: string;
  /** Top 3-5 macro trends affecting executive hiring */
  trends: string[];
  /** Key performance indicators boards track */
  kpis: string[];
  /** Primary hiring challenges for leadership roles */
  hiringChallenges: string[];
  /** Regulatory / compliance landscape */
  compliance: string[];
  /** Who sits on the buying committee for exec search */
  buyingCommittee: string[];
  /** Typical employer brand strengths to leverage */
  employerBrandHooks: string[];
}

export interface RoleDossier {
  slug: string;
  /** 5 signals you need this role (now) */
  hiringSignals: string[];
  /** 5 failure risks / red flags */
  failureRisks: string[];
  /** Scorecard dimensions for assessment */
  scorecardDimensions: string[];
  /** STAR-based interview rubric topics */
  interviewRubric: string[];
  /** Compensation variables (no hard numbers) */
  compVariables: string[];
  /** Typical reporting line */
  reportsTo: string;
  /** Typical direct reports */
  directReports: string[];
}

export interface MiniCase {
  id: string;
  /** Tags for matching */
  sectors: string[];
  roles: string[];
  services: string[];
  /** Case title */
  title: string;
  /** Challenge (2-3 sentences) */
  challenge: string;
  /** Approach (2-3 sentences) */
  approach: string;
  /** Result (1-2 sentences with metric if possible) */
  result: string;
  /** Optional metric for evidence module */
  metric?: { label: string; value: string };
}

export interface MicroInsight {
  id: string;
  sectors: string[];
  roles: string[];
  services: string[];
  /** The insight text (1-2 sentences) */
  text: string;
  /** Source attribution (optional) */
  source?: string;
}

// ─── SECTOR DOSSIERS ───

export const sectorDossiers: SectorDossier[] = [
  {
    slug: "saas",
    trends: [
      "AI-native concurrenten dwingen bestaande SaaS-platforms tot snelle integratie van generative AI in hun productstack",
      "De 'Rule of 40' vervangt groei-tegen-elke-prijs als primaire board-metric, wat een ander type CEO vereist",
      "Vertical SaaS explodeert — branchespecifieke platforms vereisen leiders met domeinkennis naast tech-expertise",
      "Product-led growth (PLG) verschuift budgetten van sales naar product en engineering, wat de C-suite samenstelling verandert",
    ],
    kpis: ["ARR / MRR groei", "Net Revenue Retention (NRR)", "CAC/LTV ratio", "Magic Number", "Gross margin", "Rule of 40 score"],
    hiringChallenges: [
      "Stage-mismatch: een leider die past bij Series A is zelden geschikt voor Series D+",
      "Europese SaaS concurreert met US-bedrijven om hetzelfde talent, maar met lagere comp-packages",
      "Snelle pivot-cultuur vereist leiders die zowel strategie als executie beheersen",
      "Remote-first teams vragen om een ander leiderschapsprofiel dan kantoorgebonden organisaties",
    ],
    compliance: ["GDPR / data processing agreements", "SOC 2 Type II certificering", "ISO 27001", "AI Act (EU) voor AI-features"],
    buyingCommittee: ["CEO / Founder", "VP People / CHRO", "Board member / Lead investor", "Hiring manager (VP-level)"],
    employerBrandHooks: ["Equity/ESOP participatie", "Remote-first flexibiliteit", "Snelle carrière-groei in scale-up fase", "Impact op product dat duizenden bedrijven gebruiken"],
  },
  {
    slug: "banken",
    trends: [
      "Digitale transformatie dwingt traditionele banken om tech-leiders aan te trekken uit fintech en big tech",
      "ESG-regulering (CSRD, Taxonomie) creëert nieuwe C-level posities rond duurzaamheid en impact",
      "Open Banking en PSD3 verschuiven de concurrentiepositie richting platform-denken",
      "Consolidatie in de Europese banksector verhoogt de vraag naar integratie-leiders en post-merger executives",
    ],
    kpis: ["Cost-to-income ratio", "Return on Equity (ROE)", "NPL ratio", "CET1 capital ratio", "NPS / klanttevredenheid", "Digital adoption rate"],
    hiringChallenges: [
      "Strenge fit & proper toetsing (DNB/ECB) beperkt de kandidatenpool aanzienlijk",
      "Bancaire cultuur schrikt innovatieve leiders af — employer brand is een uitdaging",
      "Lange besluitvormingscycli (6-12 maanden) leiden tot kandidaat-verlies aan snellere sectoren",
      "Compensation gap: fintechs en consultancies bieden vaak hogere totaalpakketten",
    ],
    compliance: ["DNB fit & proper toetsing", "ECB governance requirements", "MiFID II", "AML/KYC regelgeving", "DORA (Digital Operational Resilience Act)"],
    buyingCommittee: ["CEO", "CHRO / Head of HR", "Raad van Commissarissen", "Compliance officer", "Externe toezichthouder (indirect)"],
    employerBrandHooks: ["Maatschappelijke impact en stabiliteit", "Internationale carrièrepaden", "Pensioenen en secundaire arbeidsvoorwaarden", "Werken aan nationale financiële infrastructuur"],
  },
  {
    slug: "high-tech",
    trends: [
      "European Chips Act (€43 mrd) creëert tientallen nieuwe executive posities in semiconductor-leiderschap",
      "AI-integratie in embedded systems vereist hybride profielen die zowel hardware als software begrijpen",
      "Geopolitieke spanningen (ITAR/EAR exportcontroles) maken compliance-awareness een C-level vereiste",
      "Convergentie van quantum computing en klassieke high-tech opent nieuw speelveld voor visionair leiderschap",
    ],
    kpis: ["R&D spend as % of revenue", "Time-to-market", "Yield rate (productie)", "Patent portfolio groei", "Engineering retention rate", "Design win ratio"],
    hiringChallenges: [
      "Eindhoven, München, Zürich en Silicon Valley strijden om dezelfde schaarse deep-tech profielen",
      "Technische geloofwaardigheid is non-negotiable — een MBA zonder tech-achtergrond wordt niet geaccepteerd",
      "Lange ontwikkelcycli (3-7 jaar) vereisen leiders met uitzonderlijk geduld én strategisch inzicht",
      "Dual-use regelgeving beperkt de internationale mobiliteit van kandidaten",
    ],
    compliance: ["ITAR / EAR exportcontroles", "CE-markering en productcertificering", "ISO 9001 / IATF 16949", "REACH / RoHS milieuregelgeving"],
    buyingCommittee: ["CEO / CTO", "VP Engineering", "HR Director", "Board of Directors"],
    employerBrandHooks: ["Werken aan cutting-edge technologie", "Brainport Eindhoven ecosystem", "Langetermijn R&D investeringen", "IP-creatie en patent-ownership"],
  },
  {
    slug: "farma",
    trends: [
      "Cell & gene therapy verschuift productie van small molecule naar biologics, wat een andere type COO vereist",
      "AI-driven drug discovery versnelt de pijplijn maar vereist leiders die data science en regulatoire zaken combineren",
      "Patent cliffs dwingen farma-bedrijven tot M&A en licensing, wat BD-leiders met deal-ervaring cruciaal maakt",
      "Real-world evidence (RWE) en value-based pricing veranderen de rol van de commercial leader fundamenteel",
    ],
    kpis: ["Pipeline value (NPV)", "Time to market approval", "R&D productivity ratio", "Market access success rate", "Patient reach / volume", "Regulatory approval rate"],
    hiringChallenges: [
      "Regulatoire kennis (EMA, FDA) is een harde eis die de pool drastisch verkleint",
      "Ethische reputatie-eisen sluiten kandidaten met controversiële track records uit",
      "Concurrentie met Big Pharma om dezelfde VP- en C-level profielen",
      "Relocatie naar niet-Randstad locaties (bijv. Leiden, Oss) is voor veel kandidaten een dealbreaker",
    ],
    compliance: ["EMA / FAGG registratie", "GMP (Good Manufacturing Practice)", "FDA compliance (bij US-markt)", "Clinical trial governance (ICH-GCP)", "Farmacovigilantie"],
    buyingCommittee: ["CEO / Managing Director", "Chief Medical Officer", "CHRO", "Head of Regulatory Affairs", "Board / Supervisory Board"],
    employerBrandHooks: ["Directe impact op patiëntlevens", "Internationale R&D-samenwerking", "Sterke secundaire voorwaarden", "Intellectueel uitdagend werk"],
  },
  {
    slug: "private-equity",
    trends: [
      "Waardecreatie verschuift van financial engineering naar operationele transformatie, wat hands-on portfolio-leiders vereist",
      "ESG due diligence wordt standaard bij elke deal, wat ESG-competente C-levels in portfolio-bedrijven vereist",
      "Buy-and-build strategieën creëren seriebehoeften aan integratie-leiders en country managers",
      "Hogere rente en strengere kredietvoorwaarden maken operationele efficiëntie belangrijker dan ooit",
    ],
    kpis: ["MOIC (Multiple on Invested Capital)", "IRR", "EBITDA-groei portfolio", "Holding period", "Cash conversion", "Exit multiples"],
    hiringChallenges: [
      "100-dagen druk: nieuwe CEO's moeten binnen 100 dagen een transformatieplan presenteren",
      "Korte investeringshorizon (3-5 jaar) trekt niet elke leiderschapsstijl aan",
      "Portfolio-bedrijven missen vaak een professionele HR-functie om executives te beoordelen",
      "Hoge verwachtingen van het investeringsteam creëren spanning met operationeel leiderschap",
    ],
    compliance: ["AIFMD", "Anti-witwas / UBO-registratie", "Sectorspecifieke compliance per portfolio-bedrijf", "ESG reporting (SFDR)"],
    buyingCommittee: ["Managing Partner / Deal Partner", "Operating Partner", "Portfolio company board", "HR advisor / talent partner"],
    employerBrandHooks: ["Significant equity upside (sweet equity / co-invest)", "Versnelde carrière door portfolio-brede exposure", "Directe board-interactie", "Ondernemende cultuur met middelen"],
  },
  {
    slug: "energie",
    trends: [
      "Energietransitie creëert massale vraag naar leiders die zowel fossiel als renewables begrijpen",
      "Waterstof-economie opent een geheel nieuwe waardeketen met bijbehorende executive posities",
      "Grid-modernisering en energy storage vereisen technisch leiderschap op het snijvlak van IT en OT",
      "Geopolitieke energieafhankelijkheid (Rusland, Midden-Oosten) maakt supply security een board-prioriteit",
    ],
    kpis: ["Installed capacity (MW/GW)", "LCOE (Levelized Cost of Energy)", "Carbon intensity (CO₂/MWh)", "SAIDI/SAIFI (leveringsbetrouwbaarheid)", "CAPEX efficiency", "Green revenue share"],
    hiringChallenges: [
      "Transitie-talent is schaars: weinig leiders combineren fossiele ervaring met renewables-visie",
      "Nutsbedrijven concurreren met tech-bedrijven en startups om dezelfde duurzaamheidsprofielen",
      "Publieke sector governance vertraagt besluitvorming en schrikt ondernemende kandidaten af",
      "Regionale binding (netbeheerders) beperkt de geografische zoekradius",
    ],
    compliance: ["Energiewet / Warmtewet", "EU ETS (Emission Trading System)", "CSRD duurzaamheidsrapportage", "Netcode en aansluitplicht", "Nucleaire veiligheid (indien van toepassing)"],
    buyingCommittee: ["CEO / Directievoorzitter", "COO / Directeur Operaties", "CHRO", "Raad van Commissarissen", "Aandeelhouder (overheid bij nutsbedrijven)"],
    employerBrandHooks: ["Bijdrage aan de energietransitie", "Langetermijn baanzekerheid", "Maatschappelijk relevant werk", "Grote infrastructurele projecten"],
  },
  {
    slug: "retail",
    trends: [
      "Omnichannel is baseline — de strijd gaat nu om unified commerce en real-time personalisatie",
      "Retail media networks worden de op twee na grootste advertentiemarkt, wat een nieuw type commercial leader vereist",
      "Supply chain resilience (nearshoring, multi-sourcing) is een permanente board-prioriteit geworden",
      "Duurzaamheid en circulaire businessmodellen worden differentiërend in plaats van optioneel",
    ],
    kpis: ["Like-for-like sales growth", "Gross margin", "Inventory turnover", "Online share of total revenue", "NPS / CSAT", "Employee retention (winkelvloer)"],
    hiringChallenges: [
      "Top retail talent wordt weggekaapt door D2C brands en tech-platforms",
      "Fysieke retail leiderschap combineert operationele complexiteit met klantbeleving — een zeldzaam profiel",
      "Snelle transformatiecycli vereisen change leaders, niet steady-state managers",
      "Internationale expansie vraagt om leiders met multi-market en multi-format ervaring",
    ],
    compliance: ["Consumentenbescherming (ACM)", "GDPR (klantdata, loyalty)", "Productaansprakelijkheid", "Arbeidstijdenwet (winkelpersoneel)", "ESG / CSRD rapportage"],
    buyingCommittee: ["CEO / Algemeen Directeur", "CCO / Commercial Director", "CHRO", "CFO", "Board / Aandeelhouders"],
    employerBrandHooks: ["Direct zichtbare impact op consument", "Snelle innovatiecycli", "Internationale exposure", "Combinatie van tech en fysieke retail"],
  },
  {
    slug: "cybersecurity",
    trends: [
      "NIS2-directive maakt cybersecurity een board-level verantwoordelijkheid voor alle essentiële bedrijven",
      "AI-powered threats vereisen CISO's die zowel offensieve als defensieve AI begrijpen",
      "Consolidatie in de cybersecurity-markt drijft M&A-activiteit en de vraag naar integratie-leiders",
      "Zero Trust Architecture wordt de standaard, wat organisatiebrede transformatie-leiders vereist",
    ],
    kpis: ["Mean Time to Detect (MTTD)", "Mean Time to Respond (MTTR)", "Security incident rate", "Compliance audit scores", "Phishing simulation success rate", "ARR (voor vendors)"],
    hiringChallenges: [
      "Wereldwijd tekort van 3,5+ miljoen cybersecurity-professionals maakt C-level hiring extreem competitief",
      "Technische diepgang + business acumen is een zeldzame combinatie bij CISO-profielen",
      "Snelle innovatie maakt ervaring van 3 jaar geleden al verouderd",
      "Vertrouwelijkheidsvereisten beperken referentiechecks en achtergrondonderzoek",
    ],
    compliance: ["NIS2 Directive", "ISO 27001 / SOC 2", "GDPR (data breach notification)", "DORA (financiële sector)", "Wet Beveiliging Netwerk- en Informatiesystemen"],
    buyingCommittee: ["CEO / CTO", "CISO (bij vervanging: interim of board)", "CIO", "General Counsel", "Board / Audit Committee"],
    employerBrandHooks: ["Frontlinie van digitale veiligheid", "Snelle technologische evolutie", "Hoge marktwaarde en compensation", "Maatschappelijke relevantie"],
  },
];

// ─── ROLE DOSSIERS ───

export const roleDossiers: RoleDossier[] = [
  {
    slug: "ceo-chief-executive-officer",
    hiringSignals: [
      "Founder wil of moet de operationele leiding overdragen aan een professionele CEO",
      "Organisatie groeit voorbij de span of control van het huidige leiderschap",
      "Board of investeerders eisen een nieuwe strategische richting",
      "Post-merger integratie vereist een leider die twee culturen kan verbinden",
      "Huidige CEO kondigt vertrek aan met < 6 maanden transitietijd",
    ],
    failureRisks: [
      "Culture clash: CEO uit corporate omgeving faalt in ondernemende cultuur (of omgekeerd)",
      "Strategisch ongeduld: te snel willen transformeren zonder draagvlak",
      "Board-misalignment: CEO en aandeelhouders/board hebben verschillende tijdshorizonten",
      "Stakeholder-management: onderschatting van de politieke dimensie van het leiderschap",
      "Onboarding-falen: geen gestructureerd 100-dagen plan leidt tot vroeg verlies van momentum",
    ],
    scorecardDimensions: ["Strategisch denken & visie", "P&L ownership & financieel inzicht", "Stakeholder management (board, MT, OR)", "Transformatie- en change-vermogen", "Cultuurleiderschap & talent development", "Sector- en marktkennis"],
    interviewRubric: ["Beschrijf een situatie waarin u een strategische koerswijziging heeft doorgevoerd tegen weerstand in", "Hoe heeft u een underperforming business unit getransformeerd?", "Geef een voorbeeld van een moeilijke board-relatie en hoe u die heeft gemanaged", "Wat is uw aanpak voor de eerste 100 dagen in een nieuwe CEO-rol?"],
    compVariables: ["Base salary", "Short-term incentive (STI / bonus)", "Long-term incentive (LTIP / equity / phantom shares)", "Pensioen en onkostenvergoeding", "Opzegtermijn en vertrekregeling"],
    reportsTo: "Raad van Commissarissen / Board of Directors",
    directReports: ["CFO", "COO", "CHRO", "CTO/CIO", "CMO/CCO", "General Counsel"],
  },
  {
    slug: "cfo-chief-financial-officer",
    hiringSignals: [
      "Voorbereiding op IPO, fundraising of strategische M&A vereist een CFO met transactie-ervaring",
      "Organisatie groeit voorbij €50M omzet en heeft professionelere financial governance nodig",
      "Huidige controller/FD kan de strategische sparringpartner-rol niet invullen",
      "Private equity-backed bedrijf heeft een CFO nodig die waardecreatie-rapportage beheerst",
      "Digitale transformatie van de finance-functie (ERP, BI, automation) vereist een change-minded CFO",
    ],
    failureRisks: [
      "Te operationeel: CFO blijft in de boekhouding hangen in plaats van strategisch te sturen",
      "Geen business partnering: finance wordt als 'politie' gezien in plaats van als partner",
      "Transactie-focus zonder operationele follow-through na M&A of fundraising",
      "Compliance-obsessie ten koste van commerciële slagkracht en snelheid",
      "Slechte relatie met CEO: CFO als ja-knikker of juist als constante rem",
    ],
    scorecardDimensions: ["Financial planning & analysis", "Capital allocation & treasury", "M&A en transactie-ervaring", "Investor relations & board reporting", "Team leadership & finance transformation", "Risk management & compliance"],
    interviewRubric: ["Beschrijf een complexe M&A-transactie die u heeft geleid — wat ging goed en wat zou u anders doen?", "Hoe heeft u de finance-functie getransformeerd van operationeel naar strategisch?", "Geef een voorbeeld van een cashflow-crisis en hoe u die heeft gemanaged", "Hoe balanceert u risicomanagement met commerciële snelheid?"],
    compVariables: ["Base salary", "STI (vaak 20-40% target)", "LTIP / equity participatie", "Pensioenregeling", "Sign-on bonus (bij PE-transities)"],
    reportsTo: "CEO / Raad van Bestuur",
    directReports: ["Financial Controller", "Head of FP&A", "Treasury Manager", "Head of Internal Audit", "Tax Director"],
  },
  {
    slug: "cto-chief-technology-officer",
    hiringSignals: [
      "Technische schuld blokkeert productinnovatie en time-to-market",
      "Platform-migratie (monolith naar microservices, cloud-native) vereist architecturaal leiderschap",
      "Engineering-organisatie groeit voorbij 50+ developers en mist structuur",
      "AI-integratie in het product vereist een CTO die ML/AI op productieniveau begrijpt",
      "Board/investors eisen een technology roadmap gekoppeld aan business outcomes",
    ],
    failureRisks: [
      "Ivory tower: CTO die code schrijft maar niet leidt",
      "Over-engineering: perfecte architectuur bouwen terwijl de markt wacht",
      "Geen business alignment: technologie-investeringen die niet vertalen naar klantwaarde",
      "Cultuurblindheid: Silicon Valley-stijl opleggen aan een Europese engineering-cultuur",
      "Security-nalatigheid: focus op features ten koste van security en compliance",
    ],
    scorecardDimensions: ["Technische visie & architectuur", "Engineering team leadership & scaling", "Product-technologie alignment", "Security & compliance awareness", "Vendor management & build-vs-buy", "Innovation pipeline management"],
    interviewRubric: ["Beschrijf een platform-migratie die u heeft geleid — hoe heeft u downtime/risico gemanaged?", "Hoe schaalt u een engineering-organisatie van 20 naar 200+ developers?", "Geef een voorbeeld van een technische beslissing die direct business impact had", "Hoe balanceert u technische schuld-reductie met feature delivery?"],
    compVariables: ["Base salary", "Equity / stock options (zwaarder gewogen dan bij andere C-rollen)", "STI gekoppeld aan product/tech KPIs", "Conference & development budget", "Remote work flexibiliteit"],
    reportsTo: "CEO",
    directReports: ["VP Engineering", "VP Product (soms)", "Head of Infrastructure / DevOps", "Head of Security / CISO", "Engineering Managers"],
  },
  {
    slug: "vp-sales",
    hiringSignals: [
      "Sales-target wordt structureel niet gehaald ondanks voldoende leads/pipeline",
      "Transitie van founder-led sales naar een professionele sales-organisatie",
      "Internationale expansie vereist een VP die nieuwe markten kan openen",
      "Shift van transactionele naar consultative/enterprise sales",
      "Sales en marketing zijn niet aligned — pipeline kwaliteit is laag",
    ],
    failureRisks: [
      "Heroïsche seller: VP die zelf deals sluit in plaats van het team te schalen",
      "Process-obsessie: meer tijd aan CRM-rapportage dan aan klantinteractie",
      "Verkeerde hire-strategie: enterprise reps aannemen voor een SMB-model of omgekeerd",
      "Geen samenwerking met marketing en product — silo-denken",
      "Korte-termijn focus: pipeline vullen voor dit kwartaal ten koste van strategische accounts",
    ],
    scorecardDimensions: ["Revenue growth track record", "Sales team building & coaching", "Sales process & methodology", "Forecasting accuracy", "Cross-functional collaboration", "Market & competitive intelligence"],
    interviewRubric: ["Hoe heeft u een underperforming sales team getransformeerd?", "Beschrijf uw aanpak voor het openen van een nieuwe markt of segment", "Geef een voorbeeld van een grote deal die u bijna verloor — wat deed u?", "Hoe zorgt u voor alignment tussen sales, marketing en product?"],
    compVariables: ["Base salary", "Variable / commission (vaak 40-60% OTE)", "Accelerators boven target", "Car allowance", "President's Club / incentive trips"],
    reportsTo: "CEO / CRO",
    directReports: ["Regional Sales Managers", "Account Executives", "Sales Development Reps (SDR team)", "Sales Operations / Enablement", "Key Account Managers"],
  },
  {
    slug: "hr-director",
    hiringSignals: [
      "Organisatie professionaliseert van informeel HR naar strategisch people management",
      "Hoog verloop in kritische functies vereist een retentie-strategie op directieniveau",
      "Post-merger integratie van twee culturen en HR-systemen",
      "Groei van 200+ naar 500+ medewerkers vereist schaalbare HR-processen",
      "Arbeidsmarkt-krapte dwingt tot een employer branding en talent acquisition strategie",
    ],
    failureRisks: [
      "Administratieve val: HR blijft hangen in payroll en contracten zonder strategische impact",
      "Geen data: beslissingen op gevoel in plaats van people analytics",
      "Over-harmonisatie: na M&A alles gelijktrekken zonder ruimte voor culturele nuances",
      "Compliance-focus zonder people experience — medewerkers voelen zich als nummers",
      "Geen boardroom-presence: HR wordt niet serieus genomen door het MT",
    ],
    scorecardDimensions: ["Strategic workforce planning", "Talent acquisition & employer brand", "People analytics & HR tech", "Organisational development & culture", "Labour relations & compliance", "Leadership development & succession"],
    interviewRubric: ["Hoe heeft u HR getransformeerd van operationeel naar strategisch?", "Beschrijf een organisatiebrede cultuurverandering die u heeft geleid", "Geef een voorbeeld van hoe people data een business-beslissing heeft beïnvloed", "Hoe managed u de spanning tussen kostenbesparing en talent-investering?"],
    compVariables: ["Base salary", "STI (15-25% target)", "Pensioenregeling", "Leaseauto", "Ontwikkelingsbudget"],
    reportsTo: "CEO / COO",
    directReports: ["HR Business Partners", "Head of Recruitment", "Head of L&D", "Compensation & Benefits Manager", "HR Operations / Shared Services"],
  },
  {
    slug: "head-of-legal",
    hiringSignals: [
      "Organisatie is te afhankelijk van extern juridisch advies (€200K+/jaar aan advocatenkosten)",
      "Regulatoire complexiteit neemt toe (NIS2, AI Act, CSRD) en vereist in-house expertise",
      "M&A-activiteit vereist juridische begeleiding die de business-strategie begrijpt",
      "IP-portfolio groeit en heeft dedicated juridisch management nodig",
      "Contracten-volume en -complexiteit overstijgt de capaciteit van de huidige organisatie",
    ],
    failureRisks: [
      "Risico-aversie: juridisch advies dat altijd 'nee' zegt en commerciële snelheid remt",
      "Isolatie: legal als eiland zonder begrip van de business-context",
      "Over-lawyering: elk contract wordt een juridisch kunstwerk dat 3 maanden duurt",
      "Compliance-theater: checklists afvinken zonder werkelijke risicoreductie",
      "Geen prioritering: alle juridische vragen krijgen dezelfde urgentie",
    ],
    scorecardDimensions: ["Commercial legal acumen", "Regulatory & compliance expertise", "Contract management efficiency", "M&A / transactional experience", "Team leadership & external counsel management", "Risk assessment & pragmatism"],
    interviewRubric: ["Beschrijf een situatie waarin uw juridisch advies direct bijdroeg aan een commercieel resultaat", "Hoe balanceert u juridische risico's met business-snelheid?", "Geef een voorbeeld van hoe u juridische kosten significant heeft gereduceerd", "Hoe managed u de relatie met externe advocatenkantoren?"],
    compVariables: ["Base salary", "STI (15-25%)", "Pensioenregeling", "Advocatenpas / beroepsvereniging", "Opleidingsbudget (PE-punten)"],
    reportsTo: "CEO / CFO",
    directReports: ["Legal Counsel(s)", "Compliance Officer", "Contract Manager", "Privacy Officer / DPO", "Paralegal(s)"],
  },
];

// ─── MINI-CASES ───

export const miniCases: MiniCase[] = [
  {
    id: "case-saas-ceo-series-c",
    sectors: ["saas"],
    roles: ["ceo-chief-executive-officer"],
    services: ["executive-search", "c-level-recruitment"],
    title: "CEO voor Series C SaaS-platform",
    challenge: "Een Amsterdams SaaS-platform met €15M ARR zocht een CEO om de founder op te volgen. De board wilde een leider die ervaring had met de transitie van €15M naar €50M+ ARR, inclusief internationale expansie en IPO-readiness.",
    approach: "We voerden een vertrouwelijke search in de Europese SaaS-community, met focus op leiders die aantoonbaar deze groeifase hadden doorgemaakt. Na screening van 120+ profielen en 8 diepte-interviews presenteerden we 3 finalisten.",
    result: "De geplaatste CEO realiseerde binnen 18 maanden een verdubbeling van de ARR naar €32M en opende 2 nieuwe Europese markten.",
    metric: { label: "ARR-groei", value: "2x in 18 mnd" },
  },
  {
    id: "case-bank-cfo-transformation",
    sectors: ["banken"],
    roles: ["cfo-chief-financial-officer"],
    services: ["executive-search", "assessment-selectie"],
    title: "CFO voor digitale transformatie bij middelgrote bank",
    challenge: "Een Nederlandse bank met €2 mrd AuM zocht een CFO die zowel de regulatoire complexiteit (DNB, ECB) beheerste als de digitale transformatie van de finance-functie kon leiden.",
    approach: "Combinatie van executive search in de financiële sector met diepgaand assessment op digitale transformatie-competenties. Kandidaten moesten de DNB fit & proper toetsing doorstaan.",
    result: "De geplaatste CFO implementeerde een nieuw core banking systeem en reduceerde de cost-to-income ratio met 8 procentpunt binnen 2 jaar.",
    metric: { label: "Cost-to-income", value: "-8pp in 2 jaar" },
  },
  {
    id: "case-hightech-cto-semiconductor",
    sectors: ["high-tech"],
    roles: ["cto-chief-technology-officer"],
    services: ["executive-search", "c-level-recruitment"],
    title: "CTO voor semiconductor scale-up in Brainport",
    challenge: "Een Eindhovense semiconductor-startup (Series B, 80 medewerkers) had een CTO nodig die de technologische roadmap kon vertalen naar productieschaal — van R&D naar high-volume manufacturing.",
    approach: "Onze search richtte zich op de Brainport-München-Zürich corridor. We screenden kandidaten op zowel technische architectuurkennis als operationeel vermogen om een cleanroom-productielijn op te zetten.",
    result: "De CTO bracht de eerste chip naar mass production binnen 14 maanden en bouwde het engineering team uit van 12 naar 45 engineers.",
    metric: { label: "Time-to-production", value: "14 maanden" },
  },
  {
    id: "case-pe-ceo-100-day",
    sectors: ["private-equity"],
    roles: ["ceo-chief-executive-officer"],
    services: ["executive-search", "leadership-advisory"],
    title: "CEO voor PE-portfoliobedrijf met 100-dagen mandaat",
    challenge: "Een mid-market PE-fonds had een CEO nodig voor een recent overgenomen industrieel bedrijf (€80M omzet). De kandidaat moest binnen 100 dagen een transformatieplan presenteren aan het investeringscomité.",
    approach: "Parallelle search en assessment: terwijl we de markt in kaart brachten, ontwikkelden we een 100-dagen onboarding-programma. Elke finalist kreeg een sector-specifieke case study als assessment-onderdeel.",
    result: "De CEO presenteerde binnen 90 dagen een EBITDA-verbeteringsplan van €4M en realiseerde 70% daarvan in het eerste jaar.",
    metric: { label: "EBITDA-verbetering", value: "€4M plan" },
  },
  {
    id: "case-farma-cmo-digital",
    sectors: ["farma"],
    roles: ["ceo-chief-executive-officer"],
    services: ["executive-search", "assessment-selectie"],
    title: "Managing Director voor biotech spin-off",
    challenge: "Een farmaceutisch bedrijf deed een spin-off van zijn biotech-divisie en had een MD nodig die zowel de wetenschap begreep als het bedrijf naar zelfstandige commercialisatie kon leiden.",
    approach: "We zochten op het snijvlak van wetenschappelijk leiderschap en ondernemerschap. Het assessment omvatte een deep-dive in de pijplijn, een commercialisatiestrategie-presentatie en uitgebreide referentiechecks bij voormalige boards.",
    result: "De MD sloot binnen 8 maanden een licensing deal ter waarde van €25M en bouwde het team uit van 15 naar 40 medewerkers.",
    metric: { label: "Licensing deal", value: "€25M" },
  },
  {
    id: "case-energie-coo-transitie",
    sectors: ["energie"],
    roles: ["ceo-chief-executive-officer"],
    services: ["executive-search", "leadership-advisory"],
    title: "COO voor energietransitie bij netbeheerder",
    challenge: "Een regionale netbeheerder moest zijn operatie transformeren voor de energietransitie: van gasinfrastructuur naar elektriciteitsnet-uitbreiding en laadinfrastructuur.",
    approach: "Gecombineerde executive search en leadership advisory. We evalueerden kandidaten op zowel operationele excellentie in utilities als verandervermogen in publieke organisaties.",
    result: "De COO verdubbelde de aansluittermijn-capaciteit en lanceerde een €200M investeringsprogramma voor grid-modernisering.",
    metric: { label: "Investering", value: "€200M programma" },
  },
  {
    id: "case-retail-cco-omnichannel",
    sectors: ["retail"],
    roles: ["vp-sales"],
    services: ["executive-search", "c-level-recruitment"],
    title: "Chief Commercial Officer voor omnichannel retailer",
    challenge: "Een Nederlandse retailketen (200+ winkels) zocht een CCO die de online en offline kanalen kon integreren en een retail media network kon opzetten als nieuwe revenue stream.",
    approach: "We zochten in de Europese retail- en D2C-markt naar leiders met bewezen omnichannel-transformatie-ervaring. Assessment richtte zich op data-driven decision making en team-building.",
    result: "De CCO lanceerde het retail media network binnen 6 maanden, goed voor €8M extra jaaromzet, en verhoogde de online share van 12% naar 28%.",
    metric: { label: "Online share", value: "12% → 28%" },
  },
  {
    id: "case-cyber-ciso-nis2",
    sectors: ["cybersecurity"],
    roles: ["head-of-it"],
    services: ["executive-search", "assessment-selectie"],
    title: "CISO voor NIS2-compliance bij financiële instelling",
    challenge: "Een verzekeraar moest vóór de NIS2-deadline een CISO aanstellen die zowel de technische security-architectuur als de governance en rapportage kon opzetten.",
    approach: "Vertrouwelijke search in de cybersecurity-community met focus op kandidaten die NIS2/DORA-implementatie-ervaring hadden. Assessment omvatte een incident response case study.",
    result: "De CISO haalde NIS2-compliance 3 maanden vóór de deadline en reduceerde de gemiddelde incident response time van 72 naar 4 uur.",
    metric: { label: "Response time", value: "72 → 4 uur" },
  },
];

// ─── MICRO-INSIGHTS ───

export const microInsights: MicroInsight[] = [
  { id: "mi-1", sectors: ["saas"], roles: [], services: ["executive-search"], text: "71% van SaaS-bedrijven die hun ARR verdubbelen, heeft in de 12 maanden daarvoor minimaal één C-level positie vervangen.", source: "SaaS Capital Survey 2025" },
  { id: "mi-2", sectors: ["banken"], roles: [], services: ["executive-search"], text: "De gemiddelde doorlooptijd van een executive search in de bancaire sector is 4-6 maanden, mede door DNB fit & proper toetsing.", source: "OTR Internal Data" },
  { id: "mi-3", sectors: ["high-tech"], roles: ["cto-chief-technology-officer"], services: [], text: "In Brainport Eindhoven zijn er gemiddeld 3,2 openstaande technische leiderschapsposities per beschikbare kandidaat.", source: "Brainport Development 2025" },
  { id: "mi-4", sectors: ["private-equity"], roles: ["ceo-chief-executive-officer"], services: [], text: "PE-portfolio bedrijven met een gestructureerd 100-dagen onboarding-programma behalen 40% hogere EBITDA-groei in jaar 1.", source: "McKinsey PE Practice" },
  { id: "mi-5", sectors: ["farma"], roles: [], services: ["c-level-recruitment"], text: "Slechts 12% van de farma-executives in Europa heeft ervaring met zowel small molecule als biologics — dit maakt hen extreem schaars.", source: "IQVIA Talent Report" },
  { id: "mi-6", sectors: [], roles: ["ceo-chief-executive-officer"], services: ["executive-search"], text: "Een mis-hire op CEO-niveau kost gemiddeld 2,5x het jaarsalaris aan directe en indirecte kosten.", source: "Harvard Business Review" },
  { id: "mi-7", sectors: [], roles: ["cfo-chief-financial-officer"], services: ["assessment-selectie"], text: "CFO's die een assessment doorlopen vóór plaatsing hebben een 35% lagere early attrition rate dan niet-geassesseerde hires.", source: "OTR Internal Data" },
  { id: "mi-8", sectors: ["energie"], roles: [], services: ["executive-search"], text: "De energiesector heeft de komende 5 jaar naar schatting 15.000 nieuwe leiderschapsposities te vullen door pensionering en transitie.", source: "Deloitte Energy Outlook 2025" },
  { id: "mi-9", sectors: ["cybersecurity"], roles: [], services: ["executive-search"], text: "Het wereldwijde tekort aan cybersecurity-professionals bedraagt 3,5 miljoen — op C-level is de schaarste nog acuter.", source: "ISC² Workforce Study 2025" },
  { id: "mi-10", sectors: ["retail"], roles: ["vp-sales"], services: [], text: "Retail media networks groeien met 25% per jaar en worden in 2027 de op twee na grootste advertentiemarkt ter wereld.", source: "eMarketer 2025" },
  { id: "mi-11", sectors: [], roles: ["hr-director"], services: ["leadership-advisory"], text: "Organisaties met een strategische HR-directeur op board-niveau hebben 2,3x hogere employee engagement scores.", source: "Gallup State of the Workplace" },
  { id: "mi-12", sectors: [], roles: ["head-of-legal"], services: ["executive-search"], text: "In-house legal teams besparen gemiddeld 40% op juridische kosten versus volledig extern advies, mits goed gestructureerd.", source: "ACC Chief Legal Officers Survey" },
  { id: "mi-13", sectors: ["saas"], roles: ["vp-sales"], services: ["executive-search"], text: "De gemiddelde tenure van een VP Sales bij een SaaS scale-up is 18 maanden — korter dan elke andere C-level rol.", source: "Bridge Group SaaS Report" },
  { id: "mi-14", sectors: [], roles: ["cto-chief-technology-officer"], services: ["assessment-selectie"], text: "65% van CTO-failures wordt veroorzaakt door soft skills (communicatie, stakeholder management), niet door technische incompetentie.", source: "Korn Ferry CTO Study" },
  { id: "mi-15", sectors: ["private-equity"], roles: ["cfo-chief-financial-officer"], services: ["c-level-recruitment"], text: "PE-backed CFO's die sweet equity ontvangen presteren gemiddeld 28% beter op cash conversion dan CFO's zonder equity-alignment.", source: "Heidrick & Struggles PE Report" },
];

// ─── LOOKUP HELPERS ───

/** Get sector dossier by slug */
export function getSectorDossier(slug: string): SectorDossier | undefined {
  return sectorDossiers.find(d => d.slug === slug);
}

/** Get role dossier by slug */
export function getRoleDossier(slug: string): RoleDossier | undefined {
  return roleDossiers.find(d => d.slug === slug);
}

/** Get mini-cases matching any of the given tags */
export function getCases(filters: { sectors?: string[]; roles?: string[]; services?: string[] }): MiniCase[] {
  return miniCases.filter(c => {
    const sectorMatch = !filters.sectors?.length || filters.sectors.some(s => c.sectors.includes(s));
    const roleMatch = !filters.roles?.length || filters.roles.some(r => c.roles.includes(r));
    const serviceMatch = !filters.services?.length || filters.services.some(s => c.services.includes(s));
    return sectorMatch && roleMatch && serviceMatch;
  });
}

/** Get micro-insights matching any of the given tags */
export function getInsights(filters: { sectors?: string[]; roles?: string[]; services?: string[] }): MicroInsight[] {
  return microInsights.filter(mi => {
    const sectorMatch = !filters.sectors?.length || filters.sectors.some(s => mi.sectors.includes(s));
    const roleMatch = !filters.roles?.length || filters.roles.some(r => mi.roles.includes(r));
    const serviceMatch = !filters.services?.length || filters.services.some(s => mi.services.includes(s));
    return sectorMatch || roleMatch || serviceMatch;
  });
}

/** Assemble evidence items from cases + insights for a given tag combination */
export function assembleEvidence(filters: { sectors?: string[]; roles?: string[]; services?: string[] }): { icon: "case" | "benchmark" | "insight"; title: string; value?: string; description: string }[] {
  const cases = getCases(filters);
  const insights = getInsights(filters);

  const evidence: { icon: "case" | "benchmark" | "insight"; title: string; value?: string; description: string }[] = [];

  // Add case evidence (max 2)
  cases.slice(0, 2).forEach(c => {
    evidence.push({
      icon: "case",
      title: c.title,
      value: c.metric?.value,
      description: c.result,
    });
  });

  // Add insight evidence (max 2)
  insights.slice(0, 2).forEach(mi => {
    evidence.push({
      icon: "insight",
      title: mi.source || "Marktinzicht",
      description: mi.text,
    });
  });

  return evidence;
}

/**
 * Industry × Service cross-page generator.
 * Produces unique SpokePageData for each industry + service combination.
 * ~150 pages from 30 industries × 5 services.
 *
 * Content is sector-specific: each industry has unique challenges, profiles,
 * and trends per service type — not just find-and-replace.
 */
import type { SpokePageData } from "@/components/layout/SpokePage";
import { getIndustryBySlug, type IndustryData } from "./industries";

export interface ServiceDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  verb: string;
  pillarHref: string;
}

export const serviceDefinitions: ServiceDefinition[] = [
  { slug: "executive-search", title: "Executive Search", shortTitle: "Executive Search", verb: "executive search", pillarHref: "/nl/diensten/executive-search" },
  { slug: "c-level-recruitment", title: "C-Level Recruitment", shortTitle: "C-Level Recruitment", verb: "C-level recruitment", pillarHref: "/nl/diensten/c-level-recruitment" },
  { slug: "assessment-selectie", title: "Assessment & Selectie", shortTitle: "Assessment", verb: "assessment en selectie", pillarHref: "/nl/diensten/assessment-selectie" },
  { slug: "leadership-advisory", title: "Leadership Advisory", shortTitle: "Leadership Advisory", verb: "leadership advisory", pillarHref: "/nl/diensten/leadership-advisory" },
  { slug: "recruitment-operating-model", title: "Recruitment Operating Model", shortTitle: "Recruitment Model", verb: "recruitment operating model", pillarHref: "/nl/diensten/recruitment-operating-model" },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return serviceDefinitions.find((s) => s.slug === slug);
}

// ─── SECTOR-SPECIFIC CONTENT ───
// Each industry has unique content blocks per service type.

interface SectorContent {
  challenges: string[];
  profiles: string[];
  trends: string;
  whyIntro: string;
  approach: string;
}

type ServiceContentMap = Record<string, SectorContent>;
type IndustryContentMap = Record<string, ServiceContentMap>;

/**
 * Sector-specific content for each industry × service combination.
 * This is the core differentiator — each combination gets unique,
 * hand-crafted content that reflects real sector dynamics.
 */
const industryServiceContent: IndustryContentMap = {
  // ─── HIGH-TECH ───
  "high-tech": {
    "executive-search": {
      whyIntro: "De high-tech sector opereert op het snijvlak van wetenschap en commercie. Leiders moeten zowel diepgaande technische kennis hebben als het vermogen om strategische keuzes te maken over semiconductor roadmaps, IP-bescherming en internationale R&D-samenwerking.\n\nDe concurrentie om top-talent is intens — Eindhoven, München, Zürich en Silicon Valley strijden om dezelfde schaarse profielen. Dit maakt [executive search](/nl/diensten/executive-search) in high-tech een specialisme dat domeinkennis en een exclusief netwerk vereist.",
      challenges: [
        "Semiconductor-strategie — Europa investeert €43 miljard in de European Chips Act, wat de vraag naar tech-leiderschap explosief doet groeien",
        "IP-bescherming — leiders moeten navigeren tussen open innovatie en bescherming van cruciale intellectuele eigendom",
        "Deep-tech talent drain — de beste onderzoekers worden weggekaapt door Big Tech, wat middelgrote high-tech bedrijven kwetsbaar maakt",
        "Dual-use regulering — steeds strengere exportcontroles (ITAR/EAR) vereisen leiders die compliance in hun DNA hebben",
      ],
      profiles: [
        "CTO / VP Engineering — technische visie, semiconductor roadmap en R&D-leiderschap",
        "VP Operations / COO — schaalbare cleanroom-productie en yield management",
        "GM / Managing Director — P&L voor business units in embedded systems of photonics",
        "VP Sales / Commercial Director — B2B-verkoop van hoogwaardige technische oplossingen",
        "VP Supply Chain — sourcing van critical components en geopolitiek risicomanagement",
      ],
      trends: "Drie trends bepalen executive search in high-tech: (1) de herlocalisatie van chipproductie naar Europa creëert tientallen nieuwe leiderschapsposities, (2) AI-integratie in embedded systems vereist een hybride profiel dat zowel hardware als software begrijpt, en (3) de convergentie van quantum computing en klassieke high-tech opent een geheel nieuw speelveld voor visionair leiderschap.",
      approach: "Ons netwerk in high-tech clusters (Brainport Eindhoven, Delft, München, Zürich) is opgebouwd over jaren. Wij begrijpen het verschil tussen een process engineer die leider wordt en een MBA die de technologie leert — en weten welk profiel past bij uw fase en ambitie.\n\nElke search begint met een technologische deep-dive: welke IP bezit u, waar wilt u naartoe, en welk type leider past bij die transitie? Lees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "C-level posities in high-tech vereisen een zeldzame combinatie: diepgaande technische geloofwaardigheid én strategisch bedrijfskundig vermogen. Een CEO die geen ASML-jaarverslag begrijpt, verliest het vertrouwen van ingenieurs. Een CTO zonder commercieel inzicht laat marktpotentieel liggen.\n\nOne Time Recruit is gespecialiseerd in [C-level recruitment](/nl/diensten/c-level-recruitment) voor high-tech en begrijpt deze dualiteit.",
      challenges: [
        "Technisch-commerciële dualiteit — boardroom-leden moeten zowel met R&D-teams als met investeerders kunnen sparren",
        "Lange ontwikkelcycli — high-tech producten hebben 3-7 jaar development, wat een CEO met geduld én visie vereist",
        "Scale-up naar enterprise — veel high-tech bedrijven groeien van niche-speler naar marktleider, wat een andere C-suite vraagt",
        "Internationale governance — multinationale boards met uiteenlopende culturele verwachtingen en compliance-eisen",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — visionair leiderschap voor deep-tech scale-ups en established players",
        "[CTO](/nl/functies/cto-chief-technology-officer) — chief architect van de technologische roadmap en IP-strategie",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — R&D-financiering, subsidie-optimalisatie (WBSO/RDA) en investor relations",
        "[COO](/nl/functies/coo-chief-operating-officer) — cleanroom operations, kwaliteitsmanagement en supply chain resilience",
        "Board members — onafhankelijke toezichthouders met high-tech domeinkennis",
      ],
      trends: "De high-tech boardroom verandert: AI-expertise wordt een vereiste voor elk bestuurslid, ESG-rapportage dwingt CFO's tot nieuwe meetmethoden, en geopolitieke spanningen maken supply chain resilience een board-level prioriteit. Wij zien ook een groeiende vraag naar cross-border C-level hires — leiders die zowel in Eindhoven als in Shenzhen effectief opereren.",
      approach: "Onze C-level search in high-tech combineert uitgebreide marktmapping met diepgaande [assessments](/nl/diensten/assessment-selectie). Elke kandidaat wordt beoordeeld op technische geloofwaardigheid, strategisch vermogen en culturele fit met uw engineering-gedreven cultuur.\n\nWij werken met een vast tarief en bieden een garantie van 6 maanden — ook voor de meest senior posities.",
    },
    "assessment-selectie": {
      whyIntro: "In high-tech kan een verkeerde leiderschapskeuze miljoenen kosten aan vertraagde productontwikkeling of verloren IP. Standaard assessments missen de technische diepgang om te beoordelen of een kandidaat écht begrijpt wat het betekent om een R&D-organisatie van 200+ ingenieurs aan te sturen.\n\nOne Time Recruit biedt [assessments](/nl/diensten/assessment-selectie) die specifiek zijn ontworpen voor high-tech leiderschap.",
      challenges: [
        "Technische validatie — kan de kandidaat technologie op architectuurniveau beoordelen, of is het oppervlakkige kennis?",
        "Innovatie vs. executie — sommige leiders zijn briljant in R&D maar falen in time-to-market, of omgekeerd",
        "Cultural fit in engineering — high-tech culturen zijn vaak meritocratisch; een hiërarchische leider kan destructief zijn",
        "IP-awareness — begrijpt de kandidaat de waarde en risico's van intellectueel eigendom?",
      ],
      profiles: [
        "CTO-assessment — technische visie, architectuurbeslissingen en engineering-cultuur",
        "VP Engineering — teamleiderschap, agile/hardware development en delivery-capaciteit",
        "GM/MD — ondernemerschap, P&L-begrip en klantgerichtheid in B2B-tech",
        "VP Sales — consultative selling in complexe, technische verkooptrajecten",
        "VP Operations — lean manufacturing, kwaliteitssystemen en supply chain management",
      ],
      trends: "Assessment in high-tech evolueert: (1) AI-competentie wordt standaard getoetst, ongeacht de functie, (2) psychometrische instrumenten worden gecombineerd met technische case studies, en (3) culture-add wordt belangrijker dan culture-fit naarmate organisaties diverser worden.",
      approach: "Ons assessment-proces voor high-tech leiders omvat een technische case study (afgestemd op uw domein), [STAR-interviews](/nl/star-interview-guide) met sector-relevante scenario's, en diepgaande [referentiechecks](/nl/referentiechecks) bij voormalige collega's en stakeholders.\n\nU ontvangt een rapport met concrete aanbevelingen — niet alleen over de kandidaat, maar ook over de onboarding-aanpak.",
    },
    "leadership-advisory": {
      whyIntro: "High-tech organisaties groeien vaak sneller dan hun leiderschap kan bijbenen. De CTO die briljant was in de startup-fase, is niet altijd de juiste leider voor een organisatie met 500+ medewerkers. Dit vraagt om strategisch [leadership advisory](/nl/diensten/leadership-advisory) dat de specifieke dynamiek van high-tech begrijpt.",
      challenges: [
        "Founder-to-CEO transitie — technische oprichters die moeten evolueren naar professioneel management",
        "R&D-team schaling — van 20 naar 200 ingenieurs vraagt om een fundamenteel ander leiderschapsmodel",
        "Successieplanning — het waarborgen van continuïteit in cruciale technische leiderschapsposities",
        "Board-effectiviteit — technische boards die strategischer moeten gaan opereren",
      ],
      profiles: [
        "Executive team assessment — evaluatie van de collectieve sterkte en gaps in uw C-suite",
        "Successieplanning — identificatie van interne opvolgers voor CTO, VP Engineering en GM-posities",
        "[Onboarding executives](/nl/onboarding-executives) — begeleiding van nieuwe leiders in de high-tech context",
        "[Compensation benchmarking](/nl/compensation-benefits-trends) — marktconforme beloning inclusief equity en LTIP",
        "Board advisory — samenstelling en effectiviteit van toezichthoudende organen",
      ],
      trends: "High-tech leadership advisory wordt steeds meer data-driven: organisational network analysis (ONA) brengt informele leiderschapsstructuren in kaart, en 360-graden feedback wordt gecombineerd met objectieve prestatie-data om development-plannen te formuleren.",
      approach: "Wij werken als strategisch sparringpartner voor high-tech CEO's en HR-directeuren. Onze advisory begint met een diepgaande analyse van uw leiderschapsteam en eindigt met concrete actieplannen — van [retentie-strategieën](/nl/leadership-retention) tot [employer branding](/nl/employer-brand-senior-talent) voor senior tech-talent.",
    },
    "recruitment-operating-model": {
      whyIntro: "High-tech organisaties besteden vaak €500K+ per jaar aan externe recruitmentbureaus — zonder structurele pijplijn of data-inzicht. In een sector waar talent de primaire bottleneck is, is dit onverantwoord.\n\nOns [recruitment operating model](/nl/diensten/recruitment-operating-model) helpt high-tech organisaties hun recruitment te transformeren van ad-hoc naar strategisch.",
      challenges: [
        "Engineering talent pipeline — proactief bouwen aan relaties met talent in Brainport, TU's en internationale tech-clusters",
        "Lange time-to-fill — high-tech vacatures staan gemiddeld 67 dagen open, wat innovatie vertraagt",
        "Hoge kosten — afhankelijkheid van gespecialiseerde bureaus resulteert in fees van €25-50K per hire",
        "Employer brand in tech — concurreren met ASML, Philips en Big Tech om hetzelfde talent",
      ],
      profiles: [
        "[Talent pool opbouw](/nl/talent-pool-per-vacature) — continue pijplijn van R&D-leiders en engineers",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded recruiters met high-tech domeinkennis",
        "[Abonnement recruitment](/nl/abonnement-recruitment) — voorspelbare kosten bij continue hiring-behoefte",
        "[Hiring governance](/nl/hiring-governance-reporting) — data-driven recruitment met scorecards en analytics",
        "[Talent acquisition strategy](/nl/talent-acquisition-strategy) — employer branding en campus recruitment voor R&D-talent",
      ],
      trends: "High-tech recruitment professionaliseert snel: AI-sourcing tools identificeren passive candidates, talent intelligence platforms brengen competitieve talentstromen in kaart, en programmatic job advertising bereikt niche-profielen effectiever dan traditionele kanalen.",
      approach: "Wij analyseren uw huidige recruitment-performance (cost-per-hire, time-to-fill, quality-of-hire) en ontwerpen een model dat past bij uw groeiambitie. Van een standalone talent acquisition team tot een hybrid model met interne en externe capaciteit — altijd data-driven en meetbaar.",
    },
  },

  // ─── SAAS ───
  "saas": {
    "executive-search": {
      whyIntro: "SaaS bedrijven opereren in een hyper-competitieve markt waar de juiste leider het verschil maakt tussen 2x en 10x ARR-groei. Het vinden van executives die subscription-modellen, product-led growth én enterprise sales begrijpen, vereist een gespecialiseerde [executive search](/nl/diensten/executive-search) partner.\n\nOne Time Recruit heeft een bewezen track record in de Europese SaaS-scene — van Series A scale-ups tot mature SaaS-platforms.",
      challenges: [
        "PLG vs. sales-led — de keuze tussen product-led growth en enterprise sales bepaalt fundamenteel welk type leider u nodig heeft",
        "Europese expansie — veel SaaS-bedrijven zoeken EMEA-leiders die lokale markten begrijpen én global denken",
        "AI-native concurrentie — bestaande SaaS-platforms moeten AI integreren of worden ingehaald door AI-first competitors",
        "Burn rate druk — venture-backed SaaS vereist leiders die efficient groeien, niet alleen snel",
      ],
      profiles: [
        "CEO / Managing Director — P&L, board management en strategische pivots bij veranderende marktdynamiek",
        "CRO (Chief Revenue Officer) — ARR-groei, sales playbook development en go-to-market strategie",
        "VP Product / CPO — product-market fit, roadmap-prioritering en user experience",
        "VP Customer Success — NRR-optimalisatie, churn-reductie en expansie-revenue",
        "VP Engineering — platform-schaalbaarheid, technische schuld management en DevOps",
      ],
      trends: "Drie trends definiëren executive search in SaaS: (1) de 'Rule of 40' vervangt groei-tegen-elke-prijs als board-metric, wat een ander type CEO vereist, (2) vertical SaaS explodeert — branchespecifieke platforms vereisen leiders met domeinkennis, en (3) AI-augmented SaaS creëert een nieuwe categorie Chief AI Officers.",
      approach: "Wij spreken de taal van SaaS: ARR, NRR, CAC/LTV, magic number, NDR. Elke kandidaat wordt beoordeeld op hun vermogen om deze metrics te sturen. Ons netwerk in de Europese SaaS-community — van Amsterdam tot Berlin tot Stockholm — geeft ons toegang tot leiders die niet op LinkedIn reageren.\n\nLees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "De C-suite van een SaaS-bedrijf is fundamenteel anders dan die van een traditioneel bedrijf. Een SaaS-CFO moet fundraising en SaaS-metrics begrijpen. Een CTO moet platform-architectuur en AI integreren. Een CRO moet subscription-modellen schalen.\n\nOne Time Recruit begrijpt deze nuances en vindt C-level talent dat aantoonbaar SaaS-organisaties heeft opgebouwd.",
      challenges: [
        "Stage-mismatch — een C-level die briljant was bij een Series B is niet altijd geschikt voor Series D+",
        "Founder-CEO transitie — investeerders die een professionele CEO willen terwijl de founder wil blijven",
        "Remote-first governance — C-suites die effectief moeten opereren in distributed teams",
        "Cultural alignment — behoud van startup-cultuur met enterprise-level governance",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — schaling van €5M naar €50M+ ARR, investor management en IPO-readiness",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — SaaS-metrics, fundraising (Series B-D), ESOP/warrants en audit-readiness",
        "[CTO](/nl/functies/cto-chief-technology-officer) — microservices architectuur, AI-integratie en engineering-schaling",
        "CRO — enterprise sales, channel partnerships en international go-to-market",
        "CPO — product strategy, UX-research en data-driven feature prioritering",
      ],
      trends: "SaaS C-level hiring verandert: (1) fractional C-level wordt geaccepteerd — interim CFO's en CRO's voor specifieke groeifasen, (2) board diversity is een must, niet een nice-to-have, en (3) EQ en change management skills worden even belangrijk als domeinkennis.",
      approach: "Onze C-level search in SaaS combineert referral-driven sourcing in de Europese SaaS-community met diepgaande [assessments](/nl/diensten/assessment-selectie). Wij valideren niet alleen track record, maar ook stage-fit: kan deze leider uw specifieke groeifase navigeren?",
    },
    "assessment-selectie": {
      whyIntro: "In SaaS is een verkeerde C-level hire niet alleen duur (gemiddeld €500K+ aan directe en indirecte kosten) — het kan uw hele growth-trajectory doen ontsporen. [Assessment](/nl/diensten/assessment-selectie) dat SaaS-specifieke competenties meet, is geen luxe maar een vereiste.",
      challenges: [
        "Growth-stage fit — een operator die past bij €2M ARR is niet dezelfde als die past bij €20M ARR",
        "Metrics-begrip — kan de kandidaat een SaaS-dashboard interpreteren en actie ondernemen?",
        "Product-sensitiviteit — begrijpt de leider product-led growth of denkt die puur in sales-led?",
        "Remote leadership — effectief leidinggeven aan distributed engineering en sales teams",
      ],
      profiles: [
        "CEO/MD-assessment — strategisch denken, board management en groeiscenario-analyse",
        "CRO-assessment — sales leadership, pipeline management en revenue forecasting",
        "CTO-assessment — architectuurbeslissingen, tech debt trade-offs en team scaling",
        "VP Customer Success — retentie-strategieën, upsell-capaciteit en operationele schaling",
        "VP People — scaling culture, employer branding en organisatiedesign",
      ],
      trends: "SaaS assessment evolueert naar real-time simulaties: kandidaten werken met echte dashboards, maken live prioriteringsbeslissingen en presenteren aan mock-boards. Dit voorspelt succesvol leiderschap beter dan traditionele interviews.",
      approach: "Ons SaaS-assessment omvat een metrics-case (gebaseerd op geanonimiseerde SaaS-data), [STAR-interviews](/nl/star-interview-guide) met groeiscenario's, en referentiegesprekken met voormalige investeerders, board-leden en directe reports. Het resultaat: een helder beeld of deze leider past bij uw specifieke ARR-fase.",
    },
    "leadership-advisory": {
      whyIntro: "SaaS-organisaties groeien vaak 50-100% per jaar. Dat betekent dat het leadershipteam van vorig jaar niet per se het team van volgend jaar is. [Leadership advisory](/nl/diensten/leadership-advisory) voor SaaS richt zich op het continu kalibreren van uw leiderschap aan uw groeifase.",
      challenges: [
        "Outgrowing leadership — executives die de organisatie niet meer bijbenen na snelle groei",
        "Founder fatigue — oprichters die worstelen met de transitie van builder naar manager",
        "Key person risk — kritieke afhankelijkheid van één of twee individuen",
        "Culture scaling — het behouden van startup-DNA in een groeiende organisatie",
      ],
      profiles: [
        "Executive team audit — evaluatie van uw C-suite tegen de vereisten van uw volgende groeifase",
        "Successieplanning — proactieve opvolgingsplanning voor CEO, CTO en CRO",
        "[Onboarding executives](/nl/onboarding-executives) — 90-dagenplan voor nieuwe SaaS-leiders",
        "[Compensation benchmarking](/nl/compensation-benefits-trends) — equity, ESOP en total compensation benchmarks voor SaaS",
        "Board advisory — effectieve interactie tussen management en investeerders",
      ],
      trends: "Leadership advisory in SaaS professionaliseert: executive coaching wordt gecombineerd met 360-graden feedback en harde business metrics (ARR per employee, engineering velocity). Boards eisen steeds vaker formele leiderschapsreviews als onderdeel van governance.",
      approach: "Wij begrijpen de cadans van SaaS-leiderschap: de druk van board meetings, fundraising cycles en quarterly reviews. Onze advisory is pragmatisch, actie-gericht en altijd gekoppeld aan uw business metrics.",
    },
    "recruitment-operating-model": {
      whyIntro: "SaaS-bedrijven in groeifase huren 30-100+ mensen per jaar. Zonder een professioneel recruitment operating model betaalt u te veel per hire, duurt het te lang, en mist u de beste kandidaten.\n\nOns [recruitment operating model](/nl/diensten/recruitment-operating-model) is specifiek ontworpen voor de dynamics van SaaS-growth.",
      challenges: [
        "Volume + kwaliteit — tegelijkertijd 10+ vacatures vullen zonder concessies aan kwaliteit",
        "Employer brand — concurreren met Adyen, Mollie en Messagebird om hetzelfde talent",
        "Engineering hiring — het vinden van senior engineers die willen bouwen aan uw platform",
        "International hiring — remote talent onboarden in meerdere tijdzones en jurisdicties",
      ],
      profiles: [
        "[Talent pool opbouw](/nl/talent-pool-per-vacature) — continue pipeline voor engineering, sales en customer success",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded recruiters die uw SaaS-cultuur begrijpen",
        "[Abonnement recruitment](/nl/abonnement-recruitment) — voorspelbare hiring-kosten bij continue groei",
        "[Hiring governance](/nl/hiring-governance-reporting) — structured hiring met scorecards en bias-reductie",
        "[Talent acquisition strategy](/nl/talent-acquisition-strategy) — employer branding voor tech talent in Amsterdam, Berlin, Lissabon",
      ],
      trends: "SaaS recruitment professionaliseert met AI: sourcing automation, predictive hiring analytics en automated reference checks. De beste SaaS-bedrijven behandelen recruitment als een product — met funnels, conversie-metrics en continuous improvement.",
      approach: "Wij bouwen recruitment-operaties die meeschalen met uw ARR. Van een lightweight hiring playbook voor Series A tot een volledig talent acquisition team voor Series C+ — altijd data-driven en meetbaar.",
    },
  },

  // ─── CYBERSECURITY ───
  "cybersecurity": {
    "executive-search": {
      whyIntro: "Het wereldwijde tekort aan cybersecurity professionals wordt geschat op 3,5 miljoen. Op C-level is dit tekort nog acuter: een CISO met bewezen enterprise-ervaring en NIS2-kennis is één van de meest gezochte profielen in Europa.\n\n[Executive search](/nl/diensten/executive-search) in cybersecurity is een ultraspecialistisch vakgebied — u heeft een partner nodig die het dreigingslandschap begrijpt en toegang heeft tot een netwerk dat 95% van de markt niet bereikt.",
      challenges: [
        "Extreme schaarste — er zijn meer CISO-vacatures dan gekwalificeerde kandidaten in heel Europa",
        "Salarisdruk — cybersecurity leiders commanderen een premium van 20-40% boven vergelijkbare IT-functies",
        "Security clearance — veel posities vereisen VGB of NATO-clearance, wat de pool verder verkleint",
        "Vendor vs. enterprise — een CISO bij een security-vendor opereert fundamenteel anders dan bij een enterprise",
      ],
      profiles: [
        "CISO — chief information security officer met enterprise of critical infrastructure ervaring",
        "VP Security Operations — SOC-leiderschap, incident response en threat intelligence",
        "Head of GRC — governance, risk en compliance (NIS2, DORA, ISO 27001)",
        "VP Cyber bij consultancies — practice building, team leadership en client advisory",
        "CTO bij security-vendors — product development, R&D en technologische innovatie",
      ],
      trends: "Drie trends in cybersecurity executive search: (1) de CISO rapporteert steeds vaker direct aan de CEO in plaats van de CIO, wat de positie strategischer maakt, (2) AI-security wordt een aparte discipline met eigen leiderschapsbehoefte, en (3) OT-security (operational technology) groeit explosief door de convergentie van IT en industriële systemen.",
      approach: "Ons cybersecurity-netwerk is opgebouwd via conferenties (Black Hat, RSA, One Conference), CIO/CISO-communities en directe relaties met security-leiders in de Benelux en DACH. Wij benaderen kandidaten die niet op vacatures reageren — de meeste senior security professionals zijn passieve kandidaten die alleen bewegen voor het juiste aanbod.",
    },
    "c-level-recruitment": {
      whyIntro: "De CISO is in vijf jaar geëvolueerd van een technische manager naar een boardroom-positie. NIS2, DORA en de explosie van ransomware hebben cybersecurity tot een board-level prioriteit gemaakt. Het vinden van een CISO of VP Security die zowel technisch als bestuurlijk effectief is, vereist gespecialiseerde [C-level recruitment](/nl/diensten/c-level-recruitment).",
      challenges: [
        "Technisch-bestuurlijke dualiteit — de CISO moet een board briefen over cyberrisico's én een SOC-team leiden",
        "Regulatory pressure — NIS2 maakt persoonlijke aansprakelijkheid van bestuurders voor cyberveiligheid realiteit",
        "Crisis leadership — kan deze leider effectief opereren tijdens een ransomware-aanval om 3 uur 's nachts?",
        "Budget negotiation — cybersecurity budgetten groeien, maar de CISO moet ROI aantonen aan de CFO",
      ],
      profiles: [
        "CISO — enterprise-level security leiderschap met board-presentatie ervaring",
        "VP Cyber Defense — hands-on security operations in complexe, multi-cloud omgevingen",
        "Chief Risk Officer — cyber risk integreren in enterprise risk management",
        "VP Product Security — security-by-design in software development lifecycle",
        "Board advisor cybersecurity — onafhankelijke expertise voor audit- en risicocommissies",
      ],
      trends: "De markt verschuift: (1) virtual CISO's worden geaccepteerd voor middelgrote organisaties, (2) cross-sector CISO-mobiliteit neemt toe — een bank-CISO die naar healthcare gaat, en (3) technical depth wordt weer belangrijker naast de strategische rol.",
      approach: "Onze C-level search voor cybersecurity gaat verder dan CV-screening. Wij valideren technische diepgang, crisis-ervaring en boardroom-effectiviteit via scenario-based [assessments](/nl/diensten/assessment-selectie) en referentiegesprekken met voormalige board-leden en directe reports.",
    },
    "assessment-selectie": {
      whyIntro: "Een verkeerde CISO-keuze kan letterlijk miljoenen kosten — niet alleen door een datalek, maar door verkeerde prioritering, onvoldoende compliance of gebrek aan geloofwaardigheid bij de board. [Assessment](/nl/diensten/assessment-selectie) van cybersecurity-leiders vereist een methode die zowel technische als bestuurlijke competenties meet.",
      challenges: [
        "Technische validatie — veel kandidaten claimen hands-on ervaring maar opereren al jaren alleen op managementniveau",
        "Incident response — heeft deze leider écht een groot incident gemanaged, of alleen oefeningen geleid?",
        "Compliance-kennis — NIS2, DORA, ISO 27001 — kent de kandidaat de letter én de geest van de wet?",
        "Team building — kan de kandidaat een security-team opbouwen in een markt met extreme schaarste?",
      ],
      profiles: [
        "CISO-assessment — technisch, strategisch en bestuurlijk, inclusief crisis-simulatie",
        "VP SecOps-assessment — operationele slagkracht en incident response capabilities",
        "GRC-leider assessment — compliance-kennis, framework-implementatie en audit-readiness",
        "Security architect (senior) — technische architectuurbeslissingen en risk assessment",
        "Practice leader assessment — business development en team scaling bij consultancies",
      ],
      trends: "Assessment in cybersecurity beweegt naar live-simulaties: tabletop exercises met realistic scenarios, purple team challenges en live-briefings aan een mock-board over een gesimuleerd datalek.",
      approach: "Ons cybersecurity-assessment omvat een incident response tabletop exercise, [STAR-interviews](/nl/star-interview-guide) met security-specifieke scenario's, en [referentiechecks](/nl/referentiechecks) bij voormalige CISO-peers en rapporterende managers. Wij toetsen niet alleen kennis, maar ook oordeelsvermogen onder druk.",
    },
    "leadership-advisory": {
      whyIntro: "Cybersecurity leiderschap is uitputtend: constante dreiging, 24/7 alertheid en hoge turnover in security teams. [Leadership advisory](/nl/diensten/leadership-advisory) voor cybersecurity richt zich op het duurzaam versterken van uw security-leiderschap en het reduceren van key person risk.",
      challenges: [
        "Burnout — CISO's hebben het hoogste burnout-percentage van alle C-level functies",
        "Successie — wie neemt het over als uw CISO vertrekt? Vaak is er geen plan",
        "Team retentie — security-analisten worden voortdurend weggelokt met 20-30% salarisverhogingen",
        "Board education — het bestuur begrijpt cyber niet goed genoeg om effectief toezicht te houden",
      ],
      profiles: [
        "CISO effectiveness review — functioneert uw CISO optimaal? Waar zitten de gaps?",
        "Successieplanning — interne opvolgers identificeren en ontwikkelen voor security-posities",
        "Board cyber readiness — workshops voor bestuurders over cyber governance",
        "[Retentie-strategieën](/nl/leadership-retention) — behoud van uw security-team in een oververhitte markt",
        "[Compensation benchmarking](/nl/compensation-benefits-trends) — marktconforme beloning voor security-professionals",
      ],
      trends: "Cybersecurity leadership advisory integreert steeds meer met enterprise risk management. Boards willen niet meer een losse CISO-review, maar een holistische beoordeling van cyber-leiderschap als onderdeel van hun risicostrategie.",
      approach: "Wij adviseren zowel CISO's zelf (coaching, ontwikkelplannen) als hun managers (CIO's, CEO's, boards) over het optimaal positioneren en ondersteunen van cybersecurity leiderschap. Pragmatisch, vertrouwelijk en gebaseerd op actuele marktinzichten.",
    },
    "recruitment-operating-model": {
      whyIntro: "Cybersecurity-organisaties — zowel vendors als enterprise security teams — staan voor een permanente wervingsuitdaging. De markt groeit 12% per jaar, maar het aanbod van gekwalificeerde professionals houdt geen gelijke tred.\n\nEen structureel [recruitment operating model](/nl/diensten/recruitment-operating-model) is essentieel om niet elke vacature als crisisproject te behandelen.",
      challenges: [
        "Permanente schaarste — er zijn simpelweg niet genoeg cybersecurity professionals in de markt",
        "Hoge salarissen — de kosten per hire liggen 30-50% hoger dan in vergelijkbare IT-functies",
        "Clearance-vereisten — VGB of NATO-clearance processen duren maanden en beperken de pool",
        "Retentie — de gemiddelde security professional wisselt elke 2,5 jaar van werkgever",
      ],
      profiles: [
        "[Talent pool opbouw](/nl/talent-pool-per-vacature) — continue pipeline van security-analisten, engineers en architects",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — dedicated recruiter met cybersecurity-netwerk",
        "[Abonnement recruitment](/nl/abonnement-recruitment) — voorspelbare kosten voor continue security-hiring",
        "[Hiring governance](/nl/hiring-governance-reporting) — structured hiring voor security-functies met clearance-tracking",
        "[Talent acquisition strategy](/nl/talent-acquisition-strategy) — employer branding specifiek voor de security-community",
      ],
      trends: "Cybersecurity recruitment innoveert: reskilling-programma's (IT-professionals omscholen naar security), apprenticeship-modellen, en community-based hiring via CTF-competities en open source bijdragen.",
      approach: "Wij bouwen security talent acquisition strategieën die verder gaan dan vacatures plaatsen. Van presence op security-conferenties tot partnerships met hogescholen en bootcamps — een structurele aanpak voor een structureel probleem.",
    },
  },

  // ─── RETAIL ───
  "retail": {
    "executive-search": {
      whyIntro: "Retail ondergaat de grootste transformatie in decennia. De convergentie van fysiek en digitaal, veranderende consumentenvoorkeuren en supply chain disruptie vereisen een nieuw type leider — iemand die zowel winkelervaring als data-gedreven besluitvorming beheerst.\n\n[Executive search](/nl/diensten/executive-search) in retail is het vinden van leiders die omnichannel denken én uitvoeren.",
      challenges: [
        "Omnichannel transformatie — de grens tussen fysiek en digitaal vervaagt, wat leiders met hybride ervaring vereist",
        "Margepressie — stijgende kosten en prijsconcurrentie eisen leiders die efficiency én groei kunnen combineren",
        "Consumentendata — privacy-regulering (GDPR) versus de behoefte aan personalisatie creëert spanning",
        "Duurzaamheid — consumenten eisen transparantie over supply chain en milieu-impact",
      ],
      profiles: [
        "CEO / Managing Director — omnichannel visie en organisatietransformatie",
        "Chief Digital Officer — e-commerce, data analytics en digital customer experience",
        "VP Supply Chain — last-mile delivery, warehouse automation en demand forecasting",
        "Commercial Director — category management, pricing strategy en marge-optimalisatie",
        "Head of E-commerce — online conversie, marketplace strategie en digital marketing",
      ],
      trends: "Retail executive search wordt gedomineerd door drie trends: (1) AI-powered personalisatie vereist leiders die data en tech begrijpen, (2) unified commerce vervangt multichannel — één platform voor alle touchpoints, en (3) experiential retail maakt de winkel tot merk-ervaringscentrum, wat een nieuw type store operations leider vereist.",
      approach: "Ons retail-netwerk omvat executives bij zowel traditional retailers als digital-first brands. Wij begrijpen de nuances: een CEO voor een winkelketen opereert fundamenteel anders dan een CEO voor een D2C-merk. Elke search wordt afgestemd op uw specifieke retail-model.",
    },
    "c-level-recruitment": {
      whyIntro: "De retail C-suite is in vijf jaar drastisch veranderd. Chief Digital Officers, Chief Customer Officers en Chief Sustainability Officers zijn standaard geworden. Het vinden van C-level talent dat zowel de traditionele retail begrijpt als de digitale toekomst kan bouwen, is een gespecialiseerde [C-level recruitment](/nl/diensten/c-level-recruitment) opgave.",
      challenges: [
        "Digitale transformatie-ervaring — niet elke retail-executive heeft succesvol een digitale transitie geleid",
        "Cross-sector talent — steeds meer retail C-levels komen uit tech of FMCG, wat culture-integratie vraagt",
        "ESG-druk — boards eisen duurzaamheids-KPI's, wat een nieuwe dimensie toevoegt aan C-level profielen",
        "Private equity — veel retail-ketens zijn PE-backed, wat een specifiek type CEO vereist",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — turnaround of groei-leiderschap voor retail-organisaties",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — working capital management, store economics en PE-rapportage",
        "CDO / Chief Digital Officer — digitale transformatie en e-commerce opschaling",
        "COO — supply chain, store operations en omnichannel fulfilment",
        "Chief Customer Officer — klantinzicht, loyaliteitsprogramma's en CX-strategie",
      ],
      trends: "De retail boardroom verandert: (1) data-literacy wordt een vereiste voor elk bestuurslid, (2) sustainability officers krijgen boardroom-invloed, en (3) private equity-partijen eisen steeds vaker value creation directors naast de traditionele CEO.",
      approach: "Onze C-level search in retail combineert sector-expertise met [assessments](/nl/diensten/assessment-selectie) die specifiek meten op omnichannel-visie, P&L-management en change leadership. Wij valideren of een kandidaat écht een transformatie kan leiden — niet alleen erover kan praten.",
    },
    "assessment-selectie": {
      whyIntro: "Retail is een people-business. De kwaliteit van uw leiderschap bepaalt direct de klantervaring, medewerkerstevredenheid en financiële resultaten. [Assessment](/nl/diensten/assessment-selectie) dat retail-specifieke competenties meet — van store operations tot e-commerce — is essentieel voor de juiste keuze.",
      challenges: [
        "Operationeel vs. strategisch — retail leiders moeten zowel in de winkel effectief zijn als in de boardroom",
        "Seizoensdruk — kan deze leider presteren onder de extreme druk van Black Friday en kerstperiode?",
        "Team management op schaal — leidinggeven aan 50+ winkels is fundamenteel anders dan aan een kantoor",
        "Customer-centricity — voelt deze leider écht wat klanten willen, of gaat het om dashboards?",
      ],
      profiles: [
        "CEO/MD-assessment — transformatie-vermogen, P&L-begrip en stakeholder management",
        "Commercial Director — category management, pricing en marge-optimalisatie",
        "Operations Director — store operations, supply chain en workforce management",
        "E-commerce Director — online conversie, UX en digital marketing",
        "HR Director — employer branding, retentie en talent development in retail",
      ],
      trends: "Retail assessment integreert steeds meer mystery shopping-achtige observatie: kandidaten worden geobserveerd in real-life retailomgevingen om te zien hoe ze reageren op operationele uitdagingen en klantinteracties.",
      approach: "Ons retail-assessment combineert [STAR-interviews](/nl/star-interview-guide) met casestudies over assortimentsoptimalisatie, omnichannel-strategie of store turnaround. We betrekken altijd frontline-perspectief in onze [referentiechecks](/nl/referentiechecks).",
    },
    "leadership-advisory": {
      whyIntro: "Retail organisaties staan onder permanente transformatiedruk. Het leiderschapsteam dat de winkelketen van gisteren runde, is niet per se het team dat de omnichannel-organisatie van morgen kan bouwen. [Leadership advisory](/nl/diensten/leadership-advisory) helpt retail-organisaties hun leiderschap proactief te kalibreren.",
      challenges: [
        "Digitale kloof — niet alle retail-leiders hebben de vaardigheden voor een data-driven organisatie",
        "Generatiewisseling — veel familiebedrijven in retail worstelen met opvolging",
        "Reorganisatie — winkelsluitingen en online-verschuiving vereisen empathisch en doortastend leiderschap",
        "Talentconcurrentie — retail verliest steeds meer senior talent aan tech en consulting",
      ],
      profiles: [
        "Executive team assessment — is uw leiderschapsteam klaar voor de omnichannel-toekomst?",
        "Successieplanning — opvolging voor CEO, Commercial Director en Operations Director",
        "[Onboarding](/nl/onboarding-executives) — nieuwe retail-leiders snel effectief maken",
        "[Employer branding](/nl/employer-brand-senior-talent) — retail positioneren als aantrekkelijke sector voor senior talent",
        "Board advisory — samenstelling en effectiviteit van retail-besturen",
      ],
      trends: "Retail leadership advisory richt zich steeds meer op 'future-proofing': welke competenties heeft uw leiderschap over 3 jaar nodig, en hoe ontwikkelt of werft u die nu al? Scenario-planning wordt een standaard-instrument.",
      approach: "Wij werken met retail CEO's en HR-directeuren aan concrete leiderschapsplannen. Geen abstracte modellen, maar actiegerichte roadmaps: wie ontwikkelen we, wie werven we, en hoe zorgen we dat we talent behouden?",
    },
    "recruitment-operating-model": {
      whyIntro: "Retail-organisaties met 50+ winkels huren honderden mensen per jaar — van management trainees tot store managers tot HQ-specialisten. Zonder een professioneel [recruitment operating model](/nl/diensten/recruitment-operating-model) zijn de kosten onbeheersbaar en de kwaliteit inconsistent.",
      challenges: [
        "Volume-recruitment — tientallen store managers per jaar werven met consistente kwaliteit",
        "Seizoens-pieken — Black Friday, kerst en zomerverkoop vereisen flexibele recruitmentcapaciteit",
        "Employer brand — retail kampt met een imago-probleem bij hoger opgeleiden",
        "Retentie — hoge turnover in retail maakt continue recruitment tot een structureel probleem",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — proactieve pijplijn van store managers en area managers",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded recruiter voor HQ- en managementposities",
        "[Abonnement](/nl/abonnement-recruitment) — voorspelbare kosten bij continue hiring-behoefte",
        "[Hiring governance](/nl/hiring-governance-reporting) — structured interviews en scorecards voor eerlijke, effectieve selectie",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding en campus recruitment voor retail-management",
      ],
      trends: "Retail recruitment automatiseert snel: AI-screening voor volume-vacatures, video-interviews voor initiële selectie, en programmatic advertising gericht op specifieke winkelregio's.",
      approach: "Wij ontwerpen recruitment-modellen die passen bij de unieke dynamics van retail: seizoensgevoeligheid, regionale spreiding en de mix van volume- en specialistische hiring. Altijd data-driven, altijd meetbaar.",
    },
  },

  // ─── FINANCIËLE DIENSTVERLENING ───
  "financiele-dienstverlening": {
    "executive-search": {
      whyIntro: "De financiële sector is één van de meest gereguleerde industries ter wereld. Leiders moeten niet alleen bedrijfsresultaten leveren, maar ook navigeren in een complex web van AFM, DNB, ECB en internationale compliance-eisen.\n\n[Executive search](/nl/diensten/executive-search) in financial services vereist een partner die de regelgeving begrijpt en een netwerk heeft dat verder reikt dan LinkedIn.",
      challenges: [
        "Fit & proper toetsing — kandidaten moeten goedgekeurd worden door DNB of AFM, wat het proces verlengt",
        "Regulatory expertise — Basel IV, Solvency II, DORA — leiders moeten compliance in hun DNA hebben",
        "Fintech disruptie — traditionele financiële instellingen concurreren met agile fintechs om hetzelfde talent",
        "ESG-integratie — duurzaam beleggen en ESG-rapportage creëren nieuwe leiderschapsfuncties",
      ],
      profiles: [
        "CEO / Bestuurder — leiderschap met DNB-goedkeuring en ervaring in gereguleerde omgevingen",
        "CFO — treasury, ALM, regulatory reporting en kapitaaloptimalisatie",
        "CRO (Chief Risk Officer) — enterprise risk management, model risk en stress testing",
        "CCO (Chief Compliance Officer) — AML/KYC, mededinging en conduct risk",
        "CIO / CTO — core banking transformatie, cloud migration en cybersecurity",
      ],
      trends: "Financial services executive search wordt gedomineerd door: (1) embedded finance vereist leiders die bank-as-a-service modellen begrijpen, (2) ESG-specialisten op boardroom-niveau worden standaard, en (3) de convergentie van banking en tech creëert hybride profielen die schaars zijn.",
      approach: "Ons netwerk in financial services omvat executives bij banken, verzekeraars, asset managers, fintechs en toezichthouders. Wij begrijpen het fit & proper proces en adviseren kandidaten hier proactief over. Lees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "C-level recruitment in financial services is het meest complexe speelveld in executive search. Fit & proper eisen, aansprakelijkheidsrisico's en de constante druk van toezichthouders maken elke boardroom-benoeming tot een strategische beslissing met juridische consequenties.",
      challenges: [
        "DNB/AFM-goedkeuring — kandidaten moeten het fit & proper screening proces doorlopen",
        "Aansprakelijkheid — bestuurders zijn persoonlijk aansprakelijk voor compliance-failures",
        "Talent-concurrentie — fintech en big tech bieden hogere salarissen zonder regulatory burden",
        "Diversiteit — toezichthouders verwachten diverse besturen, maar de pool is beperkt",
      ],
      profiles: [
        "Bestuurder / CEO — met ervaring in gereguleerde omgevingen en bewezen track record bij toezichthouders",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — IFRS, regulatory reporting en kapitaalmanagement",
        "CRO — risk appetite framework, model governance en stresstesten",
        "CCO — compliance framework, AML/KYC en regulatory engagement",
        "RvC / Non-executive director — onafhankelijk toezicht met financieel-technische expertise",
      ],
      trends: "De boardroom in financial services evolueert: (1) tech-expertise wordt een must voor elk bestuursslid, (2) sustainability officers krijgen bestuurszetels, en (3) DNB verscherpt de eisen voor geschiktheid, met name op het gebied van cybersecurity en duurzaamheid.",
      approach: "Onze C-level search in financial services houdt rekening met het fit & proper proces van begin tot eind. Wij screenen kandidaten vroegtijdig op mogelijke obstakels en begeleiden het hele goedkeuringsproces.",
    },
    "assessment-selectie": {
      whyIntro: "In een sector waar één verkeerde beslissing tot miljoenenboetes of reputatieschade kan leiden, is een grondig [assessment](/nl/diensten/assessment-selectie) van leiders geen luxe maar een compliance-vereiste. Toezichthouders verwachten dat financiële instellingen hun leiders systematisch evalueren.",
      challenges: [
        "Regulatory awareness — kan deze leider opereren binnen de grenzen van AFM/DNB-toezicht?",
        "Risk culture — bevordert deze leider een cultuur van prudent risicomanagement?",
        "Ethical judgment — hoe reageert deze leider op ethische dilemma's en belangenconflicten?",
        "Stress resilience — kan deze leider effectief opereren tijdens een crisis (bankrun, cyberincident)?",
      ],
      profiles: [
        "Bestuurder-assessment — geschiktheidstoetsing voorbereidend op DNB/AFM-screening",
        "CRO-assessment — risk appetite, modelvalidatie en stress-scenario analyse",
        "CCO-assessment — compliance-effectiviteit en toezicht-interactie",
        "Portfolio manager — beleggingsproces, risicobeheer en ESG-integratie",
        "IT Director — cybersecurity readiness en digitale transformatie-capaciteit",
      ],
      trends: "Assessment in financial services wordt steeds meer scenario-based: kandidaten worden geconfronteerd met realistische crisis-scenario's (bankrun, AML-incident, cyberattack) en beoordeeld op hun oordeelsvermogen en besluitvaardigheid.",
      approach: "Ons assessment voor financial services omvat compliance-scenario's, [STAR-interviews](/nl/star-interview-guide) gericht op regulatory ervaring, en [referentiechecks](/nl/referentiechecks) bij voormalige toezichthouders en compliance-collega's. Het resultaat is een rapport dat direct bruikbaar is voor uw fit & proper dossier.",
    },
    "leadership-advisory": {
      whyIntro: "Financial services staat voor een generatiewisseling in leiderschap: ervaren bankiers gaan met pensioen, terwijl fintech-talent niet altijd past in de cultuur van traditionele instellingen. [Leadership advisory](/nl/diensten/leadership-advisory) helpt financiële organisaties deze transitie proactief te managen.",
      challenges: [
        "Pensioengolf — een generatie ervaren bankiers en verzekeraars gaat met pensioen",
        "Fintech-integratie — hoe integreert u tech-talent in een compliance-zware cultuur?",
        "Toezichthouder-verwachtingen — DNB verwacht gedocumenteerde successieplanning",
        "Cultuurverandering — van risicomijdend naar innovatief, zonder compliance te compromitteren",
      ],
      profiles: [
        "Board effectiveness review — functioneert uw bestuur conform governance codes?",
        "Successieplanning — DNB-conforme opvolgingsplanning voor key function holders",
        "[Onboarding](/nl/onboarding-executives) — nieuwe bestuurders effectief maken in een gereguleerde context",
        "[Retentie](/nl/leadership-retention) — behoud van key talent in concurrentie met fintech",
        "Board composition — diversiteit, competentie-matrix en individuele effectiviteit",
      ],
      trends: "DNB en AFM verwachten steeds meer dat financiële instellingen formele leiderschapsreviews uitvoeren. Dit maakt leadership advisory van een nice-to-have tot een governance-vereiste.",
      approach: "Wij adviseren raden van bestuur en raden van commissarissen over samenstelling, effectiviteit en opvolging — altijd in de context van toezichthouder-verwachtingen en governance codes.",
    },
    "recruitment-operating-model": {
      whyIntro: "Grote financiële instellingen huren honderden professionals per jaar — van compliance-analisten tot actuarissen tot relationship managers. Zonder een professioneel [recruitment operating model](/nl/diensten/recruitment-operating-model) zijn de kosten per hire te hoog en de doorlooptijden te lang.",
      challenges: [
        "Compliance-hiring — elke medewerker moet gescreend worden op integriteit en regelgeving",
        "Volume + specialisme — tegelijkertijd 50+ vacatures vullen in compliance, risk, actuariaat en IT",
        "Employer brand — banken en verzekeraars concurreren met fintechs die 'cooler' zijn",
        "Contractor management — veel financiële instellingen zijn afhankelijk van externe krachten",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — continue pipeline van compliance, risk en finance professionals",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded recruiters met financial services kennis",
        "[Abonnement](/nl/abonnement-recruitment) — voorspelbare kosten bij continue hiring-behoefte",
        "[Hiring governance](/nl/hiring-governance-reporting) — screening-compliant recruitmentproces",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding voor financiële instellingen",
      ],
      trends: "Financial services recruitment professionaliseert: geautomatiseerde screening-tools, predictive analytics voor retentie, en AI-supported compliance checks versnellen het proces zonder kwaliteit te compromitteren.",
      approach: "Wij ontwerpen recruitment-modellen die rekening houden met de compliance-eisen van financial services. Van screening-protocollen tot audit-trails — uw recruitmentproces voldoet aan toezichthouder-verwachtingen.",
    },
  },

  // ─── DEFENCE & SECURITY ───
  "defence-en-security": {
    "executive-search": {
      whyIntro: "Defence recruitment is fundamenteel anders dan civiele executive search. Security clearances (VGB), overheidscontracten, ITAR/EAR-regelgeving en een cultuur van geheimhouding creëren een speelveld dat 90% van de recruitmentmarkt niet begrijpt.\n\nOne Time Recruit heeft de [executive search](/nl/diensten/executive-search) expertise én de netwerken om leiders te vinden die opereren op het snijvlak van technologie, veiligheid en overheidsrelaties.",
      challenges: [
        "Security clearance — VGB of NATO-clearance is vaak een harde eis, wat de kandidaatpool drastisch verkleint",
        "Geheimhouding — veel vacatures kunnen niet openbaar worden geadverteerd vanwege classificatie",
        "Government relations — leiders moeten effectief opereren in de interface tussen industrie en overheid",
        "Dual-use expertise — de grens tussen civiele en militaire technologie vervaagt, wat hybride profielen vereist",
      ],
      profiles: [
        "CEO / Managing Director — defence contractors, system integrators en dual-use tech bedrijven",
        "VP Engineering — wapensystemen, C4ISR, electronic warfare en cybersecurity",
        "BD Director — overheidsaanbestedingen, NATO-programma's en internationale defensie-sales",
        "VP Operations — productie, supply chain en kwaliteit voor defence-systemen",
        "CISO / VP Cyber — cyber defence, SOC-operaties en classified environments",
      ],
      trends: "Defence executive search groeit explosief: (1) Europese defensiebudgetten stijgen naar 2%+ van BBP, wat tientallen nieuwe leiderschapsposities creëert, (2) defence-tech startups trekken private capital aan en zoeken commerciële leiders, en (3) de convergentie van AI en defence creëert een nieuwe categorie 'AI-defence' leiders.",
      approach: "Ons defence-netwerk omvat executives bij prime contractors (Thales, Damen, TNO), mid-tier defence bedrijven en dual-use tech organisaties. Wij opereren discreet, begrijpen clearance-processen en hebben ervaring met de specifieke governance-eisen van de sector.",
    },
    "c-level-recruitment": {
      whyIntro: "De defence boardroom kent unieke uitdagingen: bestuurders moeten omgaan met overheidscontracten, ITAR-compliance en security clearances. Het vinden van C-level talent dat zowel de commerciële als de geopolitieke dimensie van defence begrijpt, vereist gespecialiseerde [C-level recruitment](/nl/diensten/c-level-recruitment).",
      challenges: [
        "Beperkte mobiliteit — defence-executives met clearance wisselen minder vaak van werkgever",
        "Overheid-industrie interface — C-levels moeten effectief opereren in politiek-bestuurlijke omgevingen",
        "International programmes — NAVO-programma's vereisen leiders met internationale ervaring",
        "Ethical sensitivity — defence vereist leiders met een sterk ethisch kompas en transparantie",
      ],
      profiles: [
        "CEO / MD — eindverantwoordelijkheid voor defence-contractors met overheidsrelaties",
        "CTO — R&D voor wapensystemen, C4ISR of cyber defence",
        "BD Director — langlopende overheidscontracten en internationale programma's",
        "VP Engineering — systems engineering en projectmanagement voor complexe programma's",
        "CFO — overheidscontract-financiën, subsidies en export-compliance",
      ],
      trends: "De defence boardroom verandert: (1) tech-achtergronden worden standaard naast militaire ervaring, (2) ESG wordt relevant — ook defence moet rapporteren over duurzaamheid, en (3) de groei van de sector trekt talent aan vanuit civiele tech, wat culture-integratie vereist.",
      approach: "Onze C-level search in defence gaat gepaard met maximale discretie. Wij begrijpen het clearance-landschap, opereren indien nodig op classified niveau en begeleiden kandidaten door het volledige benoemingsproces.",
    },
    "assessment-selectie": {
      whyIntro: "In defence zijn de stakes letterlijk een kwestie van nationale veiligheid. Een verkeerde leiderschapskeuze kan niet alleen commerciële schade veroorzaken, maar ook operationele risico's voor de krijgsmacht. [Assessment](/nl/diensten/assessment-selectie) van defence-leiders vereist een unieke methodiek.",
      challenges: [
        "Security mindset — heeft deze leider de discipline en discretie die defence vereist?",
        "Complexe projecten — kan deze leider multi-jaar, multi-partner programma's managen?",
        "Overheidsinteractie — effectief opereren in het aanbestedingslandschap en politieke context",
        "Crisis management — decision-making onder extreme druk en tijdsdruk",
      ],
      profiles: [
        "CEO/MD-assessment — leiderschap in gereguleerde, geclassificeerde omgevingen",
        "Programme Director — management van langlopende defence-programma's",
        "BD/Sales Director — overheidsrelaties, tender management en lobbying",
        "VP Engineering — systems engineering competenties en kwaliteitsmanagement",
        "CISO — cyber defence capabilities en classified information management",
      ],
      trends: "Defence assessment integreert steeds meer simulatie: tabletop exercises met geopolitieke scenario's, crisis management simulaties en stakeholder management oefeningen.",
      approach: "Ons defence-assessment omvat security-gerelateerde scenario's, [STAR-interviews](/nl/star-interview-guide) met focus op geheimhouding en complexe stakeholder-management, en [referentiechecks](/nl/referentiechecks) binnen het defence-netwerk. Wij opereren indien nodig op vertrouwelijke basis.",
    },
    "leadership-advisory": {
      whyIntro: "De defence-sector staat voor een historische groeiperiode. Europese defensiebudgetten groeien met tientallen procenten, maar het leiderschap om deze groei te managen is schaars. [Leadership advisory](/nl/diensten/leadership-advisory) helpt defence-organisaties hun leiderschapscapaciteit op te schalen.",
      challenges: [
        "Snelle groei — verdubbeling van personeel vereist nieuw leiderschap op elk niveau",
        "Militair-civiel — ex-militairen die de transitie maken naar commercieel leiderschap",
        "Key person risk — cruciale kennis en relaties bij enkelen geconcentreerd",
        "Internationale operaties — multi-country leiderschap voor NAVO-programma's",
      ],
      profiles: [
        "Leiderschapsaudit — is uw team klaar voor de groei die de sector eist?",
        "Successieplanning — opvolging voor programme directors en BD-leiders",
        "Military-to-civilian coaching — transitie-begeleiding voor ex-militaire leiders",
        "[Retentie](/nl/leadership-retention) — behoud van key talent in een groeiende markt",
        "Board advisory — governance en samenstelling van defence-besturen",
      ],
      trends: "Defence leadership advisory richt zich op snelle opschaling: hoe bouwt u in 2-3 jaar het leiderschapsteam dat hoort bij een organisatie die 2-3x groter is? Scenario-planning en war-gaming worden ingezet voor leiderschapsontwikkeling.",
      approach: "Wij adviseren defence-organisaties over de leiderschapstransitie die nodig is om de groei van de sector te benutten. Pragmatisch, vertrouwelijk en gebaseerd op diepgaande sectorkennis.",
    },
    "recruitment-operating-model": {
      whyIntro: "Defence-organisaties die van 200 naar 500 medewerkers groeien, hebben een ander recruitmentmodel nodig dan ad-hoc werving. [Recruitment operating model](/nl/diensten/recruitment-operating-model) voor defence houdt rekening met clearance-processen, geheimhouding en de beperkte talentpool.",
      challenges: [
        "Clearance-bottleneck — VGB-processen duren 3-6 maanden en kunnen niet versneld worden",
        "Beperkte talentpool — het aantal professionals met defence-ervaring én clearance is klein",
        "Geheimhouding — vacatures kunnen niet altijd openbaar worden gedeeld",
        "Concurrentie — alle defence-bedrijven groeien tegelijk en jagen op hetzelfde talent",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — proactieve pijplijn van cleared engineers en programme managers",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — dedicated recruiter met defence-netwerk en clearance-begrip",
        "[Abonnement](/nl/abonnement-recruitment) — continue recruitmentcapaciteit voor groeiende defence-bedrijven",
        "[Hiring governance](/nl/hiring-governance-reporting) — clearance-tracking en screening-compliant processen",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding in de defence-community",
      ],
      trends: "Defence recruitment innoveert: reskilling-programma's voor ex-militairen, partnerships met technische universiteiten, en community-events bij defence-beurzen en conferences.",
      approach: "Wij bouwen recruitment-operaties die rekening houden met de unieke constraints van defence: clearance-timelines, geheimhouding en beperkte advertentiemogelijkheden. Structureel, niet ad-hoc.",
    },
  },

  // ─── ENERGIE & UTILITIES ───
  "energie-en-utilities": {
    "executive-search": {
      whyIntro: "De energietransitie is de grootste industriële transformatie van onze tijd. Traditionele energiebedrijven zoeken leiders die fossiel naar groen kunnen navigeren, terwijl new energy bedrijven leiders nodig hebben die schaling begrijpen.\n\n[Executive search](/nl/diensten/executive-search) in energie vereist begrip van zowel de legacy-wereld als de transitie.",
      challenges: [
        "Energietransitie-leiderschap — leiders die zowel fossiel afbouwen als renewables opschalen",
        "Regulatoire complexiteit — energiemarkten zijn zwaar gereguleerd door ACM en EU-wetgeving",
        "Infrastructuur-investeringen — multi-miljard projecten vereisen leiders met investment-grade ervaring",
        "Netcongestie — de groeiende vraag naar elektriciteit en beperkte netcapaciteit creëert operationele uitdagingen",
      ],
      profiles: [
        "CEO / Bestuurder — strategische transitie van fossiel naar duurzaam, met toezichthouder-management",
        "CFO — project finance, groene obligaties en subsidie-optimalisatie (SDE++, IPCEI)",
        "COO — asset management, netbeheer en operationele veiligheid",
        "VP Renewables — wind, solar en waterstof project development",
        "VP Regulatory Affairs — navigeren van energiemarkt-regelgeving en stakeholder management",
      ],
      trends: "Energie executive search wordt gedreven door: (1) waterstof-economie creëert een geheel nieuwe leiderschapscategorie, (2) energieopslag (batterijen, thermal) wordt de volgende groeisector, en (3) grid modernisering vereist leiders die IT en OT combineren.",
      approach: "Ons energienetwerk omvat executives bij netbeheerders, energieproducenten, project developers en energy traders. Wij begrijpen de intersection van technologie, regulering en finance die deze sector definieert.",
    },
    "c-level-recruitment": {
      whyIntro: "De C-suite van energiebedrijven transformeert: Chief Sustainability Officers, Chief Hydrogen Officers en Chief Digital Officers zijn nieuwe vaste functies. Het vinden van boardroom-talent dat de energietransitie kan leiden, is een van de meest complexe [C-level recruitment](/nl/diensten/c-level-recruitment) opdrachten.",
      challenges: [
        "Transitie-competentie — kan deze bestuurder een organisatie van fossiel naar groen leiden?",
        "Publiek-private dynamiek — veel energiebedrijven zijn (semi-)publiek, wat governance complexer maakt",
        "Langetermijn-visie — energieprojecten hebben 20-30 jaar looptijd, wat visionair leiderschap vereist",
        "Stakeholder-complexiteit — overheden, toezichthouders, milieuorganisaties en communities",
      ],
      profiles: [
        "CEO / Bestuurder — transitie-leiderschap met stakeholder management op nationaal niveau",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — project finance, groene financiering en subsidie-expertise",
        "COO — operationeel leiderschap voor assets, netbeheer en veiligheid",
        "Chief Sustainability Officer — ESG-strategie en duurzaamheidsrapportage",
        "RvC / Non-executive — toezicht met energiesector-expertise",
      ],
      trends: "De energie-boardroom verandert: (1) gender-diversiteit wordt actief nagestreefd door toezichthouders, (2) digital natives worden gezocht voor boards om de IT/OT-convergentie te begeleiden, en (3) internationale ervaring wordt essentieel nu energiemarkten Europees integreren.",
      approach: "Onze C-level search in energie houdt rekening met de semi-publieke governance, stakeholder-complexiteit en langetermijn-oriëntatie die deze sector kenmerkt. Wij begeleiden het volledige benoemingsproces, inclusief stakeholder-consultatie.",
    },
    "assessment-selectie": {
      whyIntro: "Energiebedrijven opereren critical infrastructure. Een verkeerde leiderschapskeuze kan de leveringszekerheid van miljoenen huishoudens in gevaar brengen. [Assessment](/nl/diensten/assessment-selectie) van energie-leiders moet technische, strategische en maatschappelijke competenties wegen.",
      challenges: [
        "Veiligheidsmentaliteit — begrijpt deze leider de consequenties van operationele fouten in critical infrastructure?",
        "Transitie-vermogen — kan deze leider een organisatie transformeren zonder de huidige operatie te destabiliseren?",
        "Stakeholder-sensitiviteit — omgang met politiek, toezichthouders en publieke opinie",
        "Langetermijn-denken — energiebeslissingen met 20+ jaar impact vereisen een specifiek type oordeelsvermogen",
      ],
      profiles: [
        "Bestuurder-assessment — geschiktheid voor leiderschap in critical infrastructure",
        "COO-assessment — operationele veiligheid en asset management",
        "VP Renewables — project development capaciteiten en marktkennis",
        "CFO — project finance en regulatory reporting",
        "Directeur Netbeheer — technisch leiderschap en stakeholder management",
      ],
      trends: "Assessment in energie integreert steeds meer crisis-simulaties: storingsscenario's, cyberincidenten en stakeholder-crises vormen onderdeel van het assessmentproces.",
      approach: "Ons energie-assessment combineert technische case studies met stakeholder-simulaties en [STAR-interviews](/nl/star-interview-guide) gericht op veiligheid, transitie en regulatory ervaring.",
    },
    "leadership-advisory": {
      whyIntro: "De energietransitie vereist een andere type leider dan de afgelopen 50 jaar. [Leadership advisory](/nl/diensten/leadership-advisory) helpt energieorganisaties hun leiderschap te kalibreren voor een wereld van renewables, waterstof en decentralisatie.",
      challenges: [
        "Competentie-gap — het huidige leiderschapsteam mist mogelijk transitie-competenties",
        "Generatiewisseling — ervaren energieleiders gaan met pensioen zonder opvolgers",
        "Cultuurverandering — van engineering-gedreven naar commercieel-innovatief",
        "Stakeholder-druk — toenemende maatschappelijke verwachtingen van energiebedrijven",
      ],
      profiles: [
        "Board effectiveness — functioneert uw bestuur optimaal in de context van de energietransitie?",
        "Successieplanning — opvolging voor kritieke posities in transitie-gevoelige functies",
        "Leiderschapsontwikkeling — van fossil fuel expertise naar transitie-leiderschap",
        "[Retentie](/nl/leadership-retention) — behoud van schaars transitie-talent",
        "Board composition — expertise-matrix voor de energietransitie",
      ],
      trends: "Energie leadership advisory richt zich op 'dual leadership': het vermogen om tegelijkertijd een fossiele organisatie af te bouwen en een duurzame organisatie op te bouwen. Dit vereist een unieke combinatie van vaardigheden.",
      approach: "Wij werken met bestuurders en commissarissen van energiebedrijven aan concrete transitie-plannen voor hun leiderschap. Niet abstract, maar gekoppeld aan de specifieke uitdagingen van uw energietransitie.",
    },
    "recruitment-operating-model": {
      whyIntro: "De energietransitie creëert tienduizenden nieuwe banen in Nederland. Van installateurs tot projectmanagers tot C-level — energiebedrijven moeten hun recruitment fundamenteel opschalen.\n\n[Recruitment operating model](/nl/diensten/recruitment-operating-model) voor energie houdt rekening met de langetermijn-aard van projecten en de mix van technisch en commercieel talent.",
      challenges: [
        "Technisch talent — engineers voor renewables, grid en waterstof zijn bijzonder schaars",
        "Projectmatige hiring — grote projecten vereisen tijdelijke opschaling van teams",
        "Regio-gebondenheid — energieprojecten zijn locatie-specifiek, wat regionale recruitment vereist",
        "Concurrentie — elke energiebedrijf groeit en jaagt op dezelfde technische profielen",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — proactieve pipeline van energie-engineers en projectmanagers",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded recruiter met energiesector-kennis",
        "[Abonnement](/nl/abonnement-recruitment) — voorspelbare kosten bij projectmatige hiring-pieken",
        "[Hiring governance](/nl/hiring-governance-reporting) — veiligheidscertificering en screening-compliant processen",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding gericht op energietransitie-talent",
      ],
      trends: "Energie recruitment innoveert met reskilling: olie & gas professionals omscholen naar renewables, en partnerships met technische opleidingen om de pipeline te vergroten.",
      approach: "Wij ontwerpen recruitment-modellen die de project-cyclische aard van de energiesector respecteren: flexibel opschalen bij grote projecten, structureel bouwen aan een basispijplijn voor kritieke functies.",
    },
  },
};

// Fallback generic content for industries without sector-specific entries
function getGenericContent(industry: IndustryData, service: ServiceDefinition): SectorContent {
  const ind = industry.title;
  const indLower = ind.toLowerCase();

  const genericByService: Record<string, SectorContent> = {
    "executive-search": {
      whyIntro: `De ${indLower} sector kent unieke uitdagingen als het gaat om het aantrekken van senior leiderschap. Kandidaten met de juiste combinatie van ${indLower}-kennis, leiderschapservaring en culturele fit zijn schaars.\n\n[Executive search](/nl/diensten/executive-search) biedt een systematische, vertrouwelijke aanpak om deze profielen te identificeren — ook wanneer zij niet actief zoeken.`,
      challenges: [
        `Sectorspecifieke expertise — ${indLower} leiders moeten de branche-dynamiek diepgaand begrijpen`,
        `Talentschaarste — ervaren executives met ${indLower} achtergrond zijn bijzonder gewild`,
        `Transformatiedruk — ${indLower} transformeert door digitalisering, wat een nieuw type leider vereist`,
        `Internationale concurrentie — ${indLower} opereert steeds vaker in een globale context`,
      ],
      profiles: [
        "CEO / Managing Director — eindverantwoordelijk leiderschap met sectorkennis",
        "CFO — financieel leiderschap, planning en rapportage",
        "COO / VP Operations — operationeel leiderschap en procesoptimalisatie",
        "CTO / VP Engineering — technologische innovatie en digitale transformatie",
        "Commercial Director — omzetgroei, marktuitbreiding en klantstrategie",
      ],
      trends: `Executive search in ${indLower} wordt beïnvloed door drie macro-trends: digitale transformatie creëert nieuwe leiderschapsbehoeften, ESG-eisen veranderen de competentieprofielen, en de war for talent dwingt organisaties om creatiever te werven.`,
      approach: `Ons netwerk in de ${indLower} sector stelt ons in staat om kandidaten te identificeren die niet reageren op vacatures. Elke search begint met een grondige analyse van uw organisatie en leiderschapsbehoefte. Lees meer over [onze methodiek](/nl/wat-is-executive-search).`,
    },
    "c-level-recruitment": {
      whyIntro: `C-level posities in ${indLower} vereisen een combinatie van strategisch denkvermogen, sectorkennis en bewezen leiderschapskwaliteiten die maar weinig kandidaten bezitten.\n\nOne Time Recruit is gespecialiseerd in [C-level recruitment](/nl/diensten/c-level-recruitment) en heeft een bewezen track record in de ${indLower} sector.`,
      challenges: [
        `Beperkte talentpool — het aantal kandidaten met relevant ${indLower} C-level ervaring is klein`,
        `Hoge stakes — een verkeerde C-level hire kost gemiddeld 2,5× het jaarsalaris`,
        `Vertrouwelijkheid — veel C-level searches vereisen een discreet proces`,
        `Governance-eisen — de kandidaat moet passen bij de governance-structuur en bestuurssamenstelling`,
      ],
      profiles: [
        `[CEO](/nl/functies/ceo-chief-executive-officer) — overall bedrijfsleiderschap voor ${indLower} organisaties`,
        `[CFO](/nl/functies/cfo-chief-financial-officer) — financiële strategie en governance`,
        `[COO](/nl/functies/coo-chief-operating-officer) — operationele excellentie en schaling`,
        `[CTO](/nl/functies/cto-chief-technology-officer) — technologische transformatie`,
        "Board members — onafhankelijk toezicht met sectorkennis",
      ],
      trends: `De ${indLower} boardroom evolueert: digitale expertise wordt een vereiste, ESG-competenties worden gevraagd, en diversiteit in besturen wordt door stakeholders geëist.`,
      approach: `Onze C-level search in ${indLower} combineert uitgebreide marktmapping met diepgaande [assessments](/nl/diensten/assessment-selectie). Wij valideren niet alleen track record, maar ook culturele fit en leiderschapsstijl.`,
    },
    "assessment-selectie": {
      whyIntro: `Objectieve beoordeling van kandidaten en leiders in de ${indLower} sector vraagt om sectorspecifieke kennis. Standaard assessments missen de nuance die nodig is voor een goede match.\n\nOne Time Recruit biedt [gespecialiseerde assessments](/nl/diensten/assessment-selectie) die ${indLower}-specifieke competenties meewegen.`,
      challenges: [
        `Sectorkennis valideren — heeft deze kandidaat diepgaande ${indLower} expertise of oppervlakkige kennis?`,
        "Leiderschapsstijl — past de leiderschapsstijl bij de cultuur van uw organisatie?",
        "Potentieel vs. ervaring — soms is potentieel belangrijker dan directe sectorervaring",
        "Objectiviteit — voorkomen van bias in het selectieproces",
      ],
      profiles: [
        "CEO/MD-assessment — strategisch vermogen en leiderschapskwaliteiten",
        "Functioneel directeur — domein-expertise en managementkwaliteiten",
        "Commercieel leider — sales leadership en marktkennis",
        "Technisch leider — innovatievermogen en team management",
        "HR-directeur — people strategy en organisatieontwikkeling",
      ],
      trends: `Assessment in ${indLower} beweegt naar simulatie-gebaseerde methoden: casestudies, rollenspellen en scenario-analyses die realistische besluitvorming testen.`,
      approach: `Ons ${indLower}-assessment combineert [STAR-interviews](/nl/star-interview-guide) met sectorspecifieke casestudies en diepgaande [referentiechecks](/nl/referentiechecks).`,
    },
    "leadership-advisory": {
      whyIntro: `De ${indLower} sector transformeert. Dit vraagt om leiders die niet alleen de huidige uitdagingen aankunnen, maar de organisatie voorbereiden op de toekomst.\n\n[Leadership advisory](/nl/diensten/leadership-advisory) helpt ${indLower} organisaties hun leiderschapsteam proactief versterken.`,
      challenges: [
        "Transformatie-leiderschap — heeft uw team de competenties voor de toekomst?",
        "Successieplanning — wie neemt het over als key leaders vertrekken?",
        `Talent retentie — hoe behoudt u uw beste leiders in een competitieve ${indLower} markt?`,
        "Team-effectiviteit — werkt uw leiderschapsteam optimaal samen?",
      ],
      profiles: [
        "Executive team assessment — evaluatie van uw leiderschapsteam",
        "Successieplanning — opvolgingsplannen voor kritieke posities",
        "[Onboarding](/nl/onboarding-executives) — nieuwe leiders snel effectief maken",
        "[Retentie-strategieën](/nl/leadership-retention) — behoud van key talent",
        "[Compensation benchmarking](/nl/compensation-benefits-trends) — marktconforme beloning",
      ],
      trends: `Leadership advisory in ${indLower} richt zich steeds meer op 'future-proofing': welke leiderschapscompetenties zijn over 3-5 jaar nodig?`,
      approach: `Wij werken als strategisch sparringpartner met ${indLower} organisaties aan concrete leiderschapsplannen — pragmatisch, actiegericht en meetbaar.`,
    },
    "recruitment-operating-model": {
      whyIntro: `${ind} organisaties die structureel groeien, hebben een professioneel recruitmentmodel nodig. Ad-hoc werving is te duur, te traag en levert inconsistente kwaliteit.\n\n[Recruitment operating model](/nl/diensten/recruitment-operating-model) helpt ${indLower} organisaties hun recruitment te professionaliseren.`,
      challenges: [
        `Kosten per hire — afhankelijkheid van externe bureaus resulteert in hoge recruitmentkosten`,
        `Doorlooptijden — vacatures staan te lang open, wat productiviteit en moraal schaadt`,
        `Kwaliteitsconsistentie — zonder gestructureerd proces varieert de kwaliteit per hire`,
        `Employer brand — is uw ${indLower} organisatie zichtbaar genoeg voor het juiste talent?`,
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — proactief opbouwen van een kandidaatpijplijn",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — flexibel inschakelen van recruitmentcapaciteit",
        "[Abonnement](/nl/abonnement-recruitment) — voorspelbare kosten bij continue hiring",
        "[Hiring governance](/nl/hiring-governance-reporting) — data-driven recruitment met rapportage",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding en sourcing-strategie",
      ],
      trends: `Recruitment in ${indLower} professionaliseert met data: predictive analytics, AI-sourcing en geautomatiseerde screening versnellen het proces zonder kwaliteitsverlies.`,
      approach: `Wij ontwerpen recruitment-modellen die passen bij de specifieke dynamics van ${indLower}: groeitempo, talentschaarste en organisatiecultuur. Altijd data-driven en meetbaar.`,
    },
  };

  return genericByService[service.slug] || genericByService["executive-search"];
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

  // Get sector-specific or fallback content
  const sectorContent = industryServiceContent[indSlug]?.[service.slug]
    || getGenericContent(industry, service);

  const sections: SpokePageData["sections"] = [
    {
      title: service.slug === "executive-search"
        ? `Waarom executive search in ${indTitle.toLowerCase()}?`
        : service.slug === "c-level-recruitment"
        ? `C-level recruitment in ${indTitle.toLowerCase()}`
        : service.slug === "assessment-selectie"
        ? `Assessment & selectie in ${indTitle.toLowerCase()}`
        : service.slug === "leadership-advisory"
        ? `Leadership advisory voor ${indTitle.toLowerCase()}`
        : `Recruitment operating model voor ${indTitle.toLowerCase()}`,
      content: sectorContent.whyIntro,
    },
    {
      title: service.slug === "executive-search"
        ? `Sectorspecifieke uitdagingen in ${indTitle.toLowerCase()}`
        : service.slug === "c-level-recruitment"
        ? `De uitdaging van boardroom-talent in ${indTitle.toLowerCase()}`
        : service.slug === "assessment-selectie"
        ? `Waarom sectorspecifiek assessment belangrijk is`
        : service.slug === "leadership-advisory"
        ? `Leiderschapsuitdagingen in ${indTitle.toLowerCase()}`
        : `Waarom ${indTitle.toLowerCase()} organisaties hun recruitment moeten professionaliseren`,
      content: sectorContent.trends,
      items: sectorContent.challenges,
    },
    {
      title: service.slug === "recruitment-operating-model"
        ? `Ons model voor ${indTitle.toLowerCase()}`
        : `Profielen en focus in ${indTitle.toLowerCase()}`,
      content: service.slug === "recruitment-operating-model"
        ? `Wij bieden een pragmatisch model dat past bij ${indTitle.toLowerCase()} organisaties:`
        : `In de ${indTitle.toLowerCase()} sector focussen wij op:`,
      items: sectorContent.profiles,
    },
    {
      title: `Onze aanpak voor ${indTitle.toLowerCase()}`,
      content: sectorContent.approach,
    },
  ];

  const faqs: SpokePageData["faqs"] = [
    {
      q: `Wat maakt ${svcTitle.toLowerCase()} in de ${indTitle.toLowerCase()} sector anders?`,
      a: `De ${indTitle.toLowerCase()} sector kent unieke dynamiek qua regelgeving, talentbeschikbaarheid en marktomstandigheden. Onze aanpak is specifiek afgestemd op deze context, zodat u kandidaten krijgt die de sector écht begrijpen.`,
    },
    {
      q: `Wat kost ${svcTitle.toLowerCase()} voor ${indTitle.toLowerCase()}?`,
      a: `Wij werken met een vast, transparant tarief — ongeacht senioriteitsniveau of sectorspecialisme. Neem contact op voor een offerte op maat.`,
    },
    {
      q: `Hoe snel kunnen jullie starten met een ${svcTitle.toLowerCase()} opdracht in ${indTitle.toLowerCase()}?`,
      a: `Wij kunnen doorgaans binnen 48 uur starten na akkoord. Een shortlist ontvangt u gemiddeld binnen 18 werkdagen.`,
    },
  ];

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

function getRelatedLinks(industry: IndustryData, service: ServiceDefinition): SpokePageData["relatedLinks"] {
  const links: SpokePageData["relatedLinks"] = [];
  links.push({ label: service.title, href: service.pillarHref });
  links.push({ label: industry.title, href: `/nl/industries/${industry.slug}` });
  const otherServices = serviceDefinitions.filter(s => s.slug !== service.slug).slice(0, 2);
  for (const os of otherServices) {
    links.push({
      label: `${os.shortTitle} in ${industry.title.toLowerCase()}`,
      href: `/nl/industries/${industry.slug}/${os.slug}`,
    });
  }
  return links;
}

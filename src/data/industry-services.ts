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
  evidence?: { icon?: "case" | "benchmark" | "insight"; title: string; value?: string; description: string }[];
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

  // ─── AEROSPACE ───
  "aerospace": {
    "executive-search": {
      whyIntro: "De aerospace-sector wordt gedefinieerd door extreme certificeringseisen, lange ontwikkelcycli en een zero-defect mentaliteit. Leiders moeten zowel technische excellentie als programmamanagement op militair-civiel niveau beheersen.\n\nDe Europese aerospace-industrie (Airbus, Fokker/GKN, RNLAF-toeleveranciers) concurreert wereldwijd om een beperkte pool van gecertificeerde professionals. [Executive search](/nl/diensten/executive-search) in aerospace vereist domeinkennis en een netwerk dat verder reikt dan de gangbare kanalen.",
      challenges: [
        "AS9100/EN 9100 compliance — leiders moeten kwaliteitssystemen op luchtvaartniveau beheersen",
        "Supply chain resilience — single-source afhankelijkheden en titanium-schaarste dwingen tot strategische inkoop",
        "Defence-civiel kruisbestuiving — dual-use programma's vereisen leiders die in beide werelden navigeren",
        "Lange certificeringsprocessen — wijzigingen kosten jaren goedkeuring, wat geduld en procesmatig denken vereist",
      ],
      profiles: [
        "CEO / Managing Director — P&L voor OEM's, tier-1 toeleveranciers en MRO-organisaties",
        "VP Engineering — design authority, structural engineering en certification management",
        "VP Quality — AS9100, nadere-luchtwaardigheid en flight safety",
        "VP Supply Chain — sourcing van aerospace-grade materialen en long-lead-time items",
        "Programme Director — management van multi-jaar ontwikkelprogramma's (NRE, milestones, earned value)",
      ],
      trends: "Drie trends domineren aerospace executive search: (1) de Urban Air Mobility (eVTOL) markt creëert nieuwe leiderschapsposities bij startups, (2) sustainability-eisen dwingen OEM's tot Sustainable Aviation Fuels (SAF) en hydrogen roadmaps, en (3) de convergentie van space en aerospace opent nieuwe carrièrepaden.",
      approach: "Ons aerospace-netwerk strekt zich uit van Fokker-heritage bedrijven tot Airbus-toeleveranciers en MRO-organisaties in de Benelux en DACH-regio. Wij begrijpen het verschil tussen een programme manager uit automotive en één uit aerospace — certificering, traceability en configuration management zijn geen bijzaak.\n\nLees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "De aerospace-boardroom opereert in een unieke context: multi-jaar contracten met overheden, strenge exportregelgeving en een cultuur waarin veiligheid boven alles gaat. C-level talent moet zowel strategisch denken als operationeel hands-on zijn.\n\nOne Time Recruit begrijpt deze dualiteit en vindt [C-level talent](/nl/diensten/c-level-recruitment) dat past bij de aerospace-cultuur.",
      challenges: [
        "Exportcontroles — ITAR, EAR en EU dual-use regelgeving beperken de mobiliteit van kandidaten",
        "Government relations — boardroom-leden moeten effectief opereren in overheidscontexten",
        "Long-cycle besluitvorming — aerospace-investeringen hebben 10-20 jaar horizon",
        "Safety culture — de board moet veiligheid als kernwaarde uitdragen, niet als compliance-vinkje",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — leiderschap voor OEM's en tier-1 toeleveranciers",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — programme finance, NRE-contracten en government subsidies",
        "[CTO](/nl/functies/cto-chief-technology-officer) — technologische roadmap, R&D en certificeringsmanagement",
        "[COO](/nl/functies/coo-chief-operating-officer) — productie, kwaliteit en supply chain in gecertificeerde omgevingen",
        "Board members — onafhankelijk toezicht met aerospace domeinkennis",
      ],
      trends: "De aerospace-boardroom evolueert: sustainability officers krijgen boardroom-invloed, digital twins en AI-toepassingen vereisen tech-savvy bestuurders, en de groeiende defence-budgetten maken dual-use ervaring een boardroom-prioriteit.",
      approach: "Onze C-level search in aerospace houdt rekening met certificeringseisen, overheidsrelaties en de langetermijn-oriëntatie die deze sector kenmerkt. Wij valideren niet alleen leiderschapskwaliteiten maar ook technische geloofwaardigheid bij engineering-teams.",
    },
    "assessment-selectie": {
      whyIntro: "In aerospace is een leiderschapsfout niet alleen duur — het kan de luchtwaardigheid van producten in gevaar brengen. [Assessment](/nl/diensten/assessment-selectie) voor aerospace-leiders moet technische competentie, safety-mindset en programmamanagement-vaardigheden objectief meten.",
      challenges: [
        "Safety-first mentaliteit — heeft deze leider veiligheid als intrinsieke waarde of als compliance-last?",
        "Configuration management — begrijpt de kandidaat wat het betekent om in een gecertificeerde omgeving te werken?",
        "Multi-stakeholder management — overheden, certification authorities en OEM-klanten tegelijk bedienen",
        "Engineering-cultuur — aerospace is meritocratisch; een leider zonder technische geloofwaardigheid verliest respect",
      ],
      profiles: [
        "CEO/MD-assessment — strategisch vermogen en safety-cultuur",
        "VP Engineering — design authority en certification management",
        "Programme Director — earned value management en stakeholder-communicatie",
        "VP Quality — AS9100 beheersing en continuous improvement",
        "VP Supply Chain — aerospace-grade sourcing en leveranciersmanagement",
      ],
      trends: "Aerospace-assessment integreert steeds meer simulaties: kandidaten worden geconfronteerd met luchtvaartincident-scenario's, certification-dilemma's en programme-overschrijdingen om hun oordeelsvermogen onder druk te testen.",
      approach: "Ons assessment voor aerospace combineert technische case studies (airworthiness, programme reviews) met [STAR-interviews](/nl/star-interview-guide) gericht op safety-critical decision making en [referentiechecks](/nl/referentiechecks) bij voormalige stakeholders.",
    },
    "leadership-advisory": {
      whyIntro: "Aerospace-organisaties staan voor een generatiewisseling: ervaren engineers die leiding geven gaan met pensioen, terwijl de sector groeit. [Leadership advisory](/nl/diensten/leadership-advisory) helpt aerospace-organisaties hun leiderschapspipeline proactief op te bouwen.",
      challenges: [
        "Kennisbehoud — decennia aan certificeringskennis dreigt te verdwijnen met pensioenering",
        "Founder-to-professional — aerospace-toeleveranciers die professioneel management nodig hebben",
        "Dual-use transitie — civiele bedrijven die defence-markt betreden en vice versa",
        "Engineering-to-leadership — technische experts die de transitie naar management moeten maken",
      ],
      profiles: [
        "Successieplanning — opvolging voor VP Engineering, Programme Directors en CEO-posities",
        "Executive team assessment — is uw team klaar voor de groei die de sector biedt?",
        "[Onboarding](/nl/onboarding-executives) — nieuwe leiders effectief maken in een gecertificeerde omgeving",
        "[Retentie](/nl/leadership-retention) — behoud van key talent in een competitieve markt",
        "[Compensation benchmarking](/nl/compensation-benefits-trends) — marktconforme beloning voor aerospace-professionals",
      ],
      trends: "Aerospace leadership advisory richt zich op kennisoverdracht: hoe zorgt u dat 30 jaar certificeringsexpertise niet verloren gaat wanneer key engineers met pensioen gaan?",
      approach: "Wij adviseren aerospace-organisaties over leiderschapsontwikkeling met oog voor de unieke eisen van de sector: certification knowledge, safety culture en long-cycle programme management.",
    },
    "recruitment-operating-model": {
      whyIntro: "Aerospace-organisaties die groeien van 100 naar 500 medewerkers, hebben een recruitment-aanpak nodig die rekening houdt met certificeringseisen en beperkte talentvijvers.\n\n[Recruitment operating model](/nl/diensten/recruitment-operating-model) voor aerospace integreert kwalificatie-vereisten in het selectieproces.",
      challenges: [
        "Certified engineers — schaarste aan professionals met aerospace-kwalificaties",
        "Security clearance — voor defence-gerelateerde aerospace zijn VGB's noodzakelijk",
        "Niche-profielen — stress engineers, certification engineers en NDT-specialisten zijn uiterst schaars",
        "Lange onboarding — nieuwe medewerkers hebben maanden nodig om gecertificeerd te worden",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — proactieve pipeline van certified aerospace professionals",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded recruiter met aerospace-netwerk",
        "[Abonnement](/nl/abonnement-recruitment) — continue recruitmentcapaciteit voor groeiende aerospace-bedrijven",
        "[Hiring governance](/nl/hiring-governance-reporting) — kwalificatie-tracking en certificeringsvalidatie",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding op aerospace-beurzen en TU-campussen",
      ],
      trends: "Aerospace recruitment innoveert met cross-sector reskilling: automotive engineers worden omgeschoold naar aerospace, en partnerships met TU Delft en RNLAF creëren nieuwe talentstromen.",
      approach: "Wij ontwerpen recruitment-modellen die rekening houden met de certificeringscyclus: van intake tot kwalificatie, van proeftijd tot volledige inzetbaarheid. Data-driven en afgestemd op uw groeipad.",
    },
  },

  // ─── AVIATION ───
  "aviation": {
    "executive-search": {
      whyIntro: "De luchtvaart herstelt van de grootste crisis in haar geschiedenis en transformeert tegelijkertijd richting duurzaamheid. Airlines, luchthavens en MRO-organisaties zoeken leiders die zowel operationeel herstel als strategische transformatie aankunnen.\n\n[Executive search](/nl/diensten/executive-search) in aviation vereist begrip van EASA-regelgeving, netwerk-planning en de complexe stakeholder-dynamiek van de sector.",
      challenges: [
        "Post-COVID herstel — talentpijplijnen zijn leeggelopen, ervaren leiders hebben de sector verlaten",
        "Sustainability-druk — SAF-mandaten, CORSIA en vlootvernieuwing vereisen strategisch duurzaamheidsleiderschap",
        "Pilotentekort — niet alleen piloten, maar ook instructeurs en management zijn schaars",
        "Digitalisering — van predictive maintenance tot digitale passenger experience",
      ],
      profiles: [
        "CEO / COO airline — netwerk-planning, yield management en operationeel leiderschap",
        "CEO / Managing Director MRO — base maintenance, component repair en customer management",
        "Airport Director — capacity management, stakeholder relations en commercieel leiderschap",
        "VP Ground Operations — turnaround management, safety en efficiëntie",
        "VP Commercial / Revenue — pricing, distribution en ancillary revenue",
      ],
      trends: "Aviation executive search wordt gedreven door: (1) consolidatie in MRO creëert behoefte aan integratieleiders, (2) eVTOL en Advanced Air Mobility vereisen een nieuw type aviation-entrepreneur, en (3) de energietransitie maakt SAF-expertise een boardroom-competentie.",
      approach: "Ons aviation-netwerk omvat executives bij airlines, luchthavens, MRO-organisaties en aviation services in Europa. Wij begrijpen de EASA-context, de seizoensdynamiek en de operationele complexiteit die leiders in deze sector dagelijks ervaren.\n\nLees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "C-level posities in aviation zijn uiterst zichtbaar: een airline-CEO staat in de krant, een airport director opereert in een politiek-bestuurlijke arena. Het vinden van boardroom-talent dat operationele excellentie combineert met stakeholder-management vereist gespecialiseerde [C-level recruitment](/nl/diensten/c-level-recruitment).",
      challenges: [
        "Publieke zichtbaarheid — aviation C-levels opereren in de publieke schijnwerpers",
        "Regulatory engagement — EASA, ILT en ministeriële interactie zijn dagelijkse kost",
        "Seizoensdruk — operationele beslissingen onder piekdruk vereisen koelbloedigheid",
        "Arbeidsrelaties — sterke vakbonden en CAO-onderhandelingen zijn onderdeel van het CEO-profiel",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — airline, luchthaven of MRO leiderschap",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — vlootfinanciering, leasing en hedging",
        "[COO](/nl/functies/coo-chief-operating-officer) — OCC, turnaround en operationele veiligheid",
        "CCO — netwerk-planning, allianties en revenue management",
        "VP MRO / Engineering — technisch leiderschap en EASA Part 145/147 compliance",
      ],
      trends: "De aviation-boardroom verandert: duurzaamheid wordt een bestuursverantwoordelijkheid, digitalisering vereist tech-savvy bestuurders, en diversiteit op de vlucht én in de boardroom wordt steeds belangrijker.",
      approach: "Onze C-level search in aviation combineert diepgaande sectorkennis met uitgebreide stakeholder-consultatie. Wij begrijpen dat een airline-CEO anders opereert dan een luchthaven-directeur — en passen ons zoekprofiel hierop aan.",
    },
    "assessment-selectie": {
      whyIntro: "Aviation-leiderschap is safety-critical: een operationele fout kan honderden levens kosten. [Assessment](/nl/diensten/assessment-selectie) moet niet alleen managementkwaliteiten meten, maar ook de safety-first mindset die aviation vereist.",
      challenges: [
        "Safety decision-making — reageert deze leider correct onder extreme tijdsdruk?",
        "Regulatory awareness — begrijpt de kandidaat EASA Part 21/145/147 op management-niveau?",
        "Crisis management — hoe presteert deze leider tijdens een operationele crisis?",
        "Stakeholder-complexiteit — overheden, vakbonden, passagiers en media tegelijk bedienen",
      ],
      profiles: [
        "CEO-assessment — operationeel leiderschap en stakeholder management",
        "COO/VP Ops — operational control en safety management systems",
        "VP Engineering — technisch leiderschap in EASA-gecertificeerde omgevingen",
        "Airport Director — publiek-private governance en capaciteitsmanagement",
        "VP Commercial — revenue management en partner-relaties",
      ],
      trends: "Aviation-assessment integreert CRM-principes (Crew Resource Management) in leiderschapsevaluaties: teamwork, communication en decision-making onder druk worden systematisch getoetst.",
      approach: "Ons aviation-assessment combineert operationele scenario's (IROPS, safety events) met [STAR-interviews](/nl/star-interview-guide) en [referentiechecks](/nl/referentiechecks) bij stakeholders in de luchtvaartketen.",
    },
    "leadership-advisory": {
      whyIntro: "De luchtvaartsector staat voor een generatiewisseling én een duurzaamheidstransitie. [Leadership advisory](/nl/diensten/leadership-advisory) helpt aviation-organisaties hun leiderschapsteam voor te bereiden op een fundamenteel andere toekomst.",
      challenges: [
        "Talentuitstroom — COVID heeft een generatie ervaren aviation-professionals doen vertrekken",
        "Duurzaamheidstransitie — nieuwe competenties rondom SAF, vlootvernieuwing en ESG-rapportage",
        "Consolidatie — fusies en overnames vereisen integratieleiderschap",
        "Next-gen leiderschap — jongere leiders opleiden in een sector met vergrijzing",
      ],
      profiles: [
        "Successieplanning — opvolging voor CEO, COO en VP-posities",
        "Executive team assessment — is uw leiderschapsteam klaar voor de post-COVID groeifase?",
        "[Onboarding](/nl/onboarding-executives) — nieuwe leiders effectief maken in de aviation-context",
        "[Retentie](/nl/leadership-retention) — behoud van key talent in een competitieve markt",
        "Board advisory — governance en samenstelling van aviation-besturen",
      ],
      trends: "Aviation leadership advisory richt zich op 'future-readiness': welke competenties heeft uw team nodig voor SAF-transitie, eVTOL en digitale transformatie?",
      approach: "Wij werken met airline-CEO's, airport directors en MRO-leiders aan concrete leiderschapsplannen. Pragmatisch, sectorspecifiek en gericht op de transformatie die de sector doormaakt.",
    },
    "recruitment-operating-model": {
      whyIntro: "Aviation-organisaties hebben een recruitment-model nodig dat rekening houdt met seizoenspieken, licentie-eisen en de internationale mobiliteit van talent.\n\n[Recruitment operating model](/nl/diensten/recruitment-operating-model) voor aviation integreert certificeringsvereisten en piekbelasting in het wervingsproces.",
      challenges: [
        "Seizoens-recruitment — zomer en winter vereisten verschillende bemanning en staffing",
        "Licentie-eisen — piloten, engineers en dispatchers hebben specifieke licenties nodig",
        "Internationale talentpool — aviation-talent is mobiel en internationaal georiënteerd",
        "Concurrentie — airlines, MRO's en luchthavens concurreren om hetzelfde talent",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — proactieve pipeline van licensed aviation professionals",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded recruiter met aviation-netwerk",
        "[Abonnement](/nl/abonnement-recruitment) — voorspelbare kosten bij seizoensgebonden hiring",
        "[Hiring governance](/nl/hiring-governance-reporting) — licentie-validatie en screening-compliant processen",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding op aviation career events en beurzen",
      ],
      trends: "Aviation recruitment innoveert met internationale talenthubs, ab-initio programma's voor engineers en partnerships met luchtvaartopleidingen om de pipeline structureel te vergroten.",
      approach: "Wij ontwerpen recruitment-modellen die de seizoensdynamiek en certificeringseisen van aviation integreren. Van steady-state hiring tot peak-season opschaling — altijd meetbaar en compliant.",
    },
  },

  // ─── MARITIME ───
  "maritime": {
    "executive-search": {
      whyIntro: "De maritieme sector is de ruggengraat van de wereldhandel en transformeert onder druk van IMO-regelgeving, decarbonisatie en digitalisering. Leiders moeten navigeren tussen traditionele scheepvaart en de disruptie door autonome vaart en alternatieve brandstoffen.\n\n[Executive search](/nl/diensten/executive-search) in maritime vereist begrip van de unieke operationele, juridische en commerciële context van de sector.",
      challenges: [
        "Decarbonisatie — IMO 2030/2050 doelen vereisen leiders die de transitie naar methanol, ammoniak of waterstof aankunnen",
        "Autonome scheepvaart — MASS-technologie creëert nieuwe leiderschapsbehoeften",
        "Geopolitieke risico's — sancties, piraterij en havencongestie vereisen strategisch risk management",
        "Vergrijzing — de maritieme sector kent een ernstig opvolgingsprobleem op managementniveau",
      ],
      profiles: [
        "CEO / Managing Director — rederijen, maritieme dienstverleners en scheepsbouwers",
        "COO / Fleet Director — vlootmanagement, dry-docking en operationele efficiëntie",
        "Commercial Director — chartering, freight management en klantrelaties",
        "VP HSEQ — veiligheid, milieu en kwaliteit in maritieme operaties (ISM Code)",
        "CTO / VP Innovation — digitalisering, autonome vaart en green shipping",
      ],
      trends: "Maritime executive search wordt gedreven door: (1) de green shipping corridor-initiatieven creëren behoefte aan sustainability-leiders, (2) de Rotterdam-Singapore maritieme as vraagt om leiders met Azië-ervaring, en (3) private equity investeert massaal in maritieme assets, wat commercieel leiderschap vereist.",
      approach: "Ons maritiem netwerk strekt zich uit van Rotterdam tot Hamburg, van rederijen tot havenbedrijven en maritieme toeleveranciers. Wij begrijpen de ISM Code, SOLAS en de commerciële dynamiek van chartering en freight.\n\nLees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "De maritieme boardroom staat voor fundamentele keuzes: investeren in dual-fuel vloten, fuseren of specialiseren, en navigeren in een geopolitiek mijnenveld. [C-level recruitment](/nl/diensten/c-level-recruitment) in maritime vraagt om kandidaten die zowel de operationele als de strategische dimensie beheersen.",
      challenges: [
        "Vlootinvesteringen — besluiten over nieuwbouw vs. retrofit die tientallen miljoenen kosten",
        "Regulatory complexity — IMO, flag state en class society-eisen navigeren",
        "Family business governance — veel maritieme bedrijven zijn familiebedrijven in transitie naar professioneel management",
        "Internationaal leiderschap — de maritieme sector is per definitie internationaal",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — eindverantwoordelijkheid voor rederijen en maritieme groepen",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — scheepsfinanciering, asset management en tax planning",
        "[COO](/nl/functies/coo-chief-operating-officer) — vlootoperaties, OPEX-optimalisatie en safety",
        "CCO — chartering, commercial management en klantportfolio",
        "VP Technical — newbuilding, drydocking en fleet maintenance",
      ],
      trends: "De maritieme boardroom professionaliseert: family-owned rederijen benoemen externe bestuurders, ESG wordt een boardroom-verantwoordelijkheid, en de integratie van tech in maritieme operaties vereist digitale expertise op board-niveau.",
      approach: "Onze C-level search in maritime houdt rekening met de familiegebonden governance, internationale context en langetermijn-investeringshorizon die deze sector kenmerkt.",
    },
    "assessment-selectie": {
      whyIntro: "In de maritieme sector zijn de stakes hoog: operationele fouten kunnen milieu-rampen, mensenlevens en miljoenen aan schade veroorzaken. [Assessment](/nl/diensten/assessment-selectie) van maritieme leiders moet safety-mindset, crisis-management en commercieel inzicht objectief meten.",
      challenges: [
        "Safety-first cultuur — ISM Code compliance als intrinsieke waarde, niet als papieren exercitie",
        "Remote leiderschap — leidinggeven aan teams op zee vraagt om een specifiek leiderschapsprofiel",
        "Crisis management — piraterij, machinekamerbrand, olielek — hoe reageert deze leider?",
        "Commercieel oordeel — chartering-beslissingen die miljoenen waard zijn",
      ],
      profiles: [
        "CEO/MD-assessment — strategisch vermogen en stakeholder management in maritime",
        "Fleet Director — operationeel leiderschap en safety management",
        "Commercial Director — chartering expertise en markttiming",
        "VP HSEQ — veiligheids- en milieuleiderschap",
        "CTO — technische innovatie en vlootmodernisering",
      ],
      trends: "Maritime assessment beweegt naar simulatie-gebaseerde methoden: kandidaten worden geconfronteerd met scheepvaartincidenten, sanctie-dilemma's en vlootinvesteringsbeslissingen.",
      approach: "Ons maritime assessment combineert operationele scenario's met [STAR-interviews](/nl/star-interview-guide) en [referentiechecks](/nl/referentiechecks) bij stakeholders in de maritieme keten.",
    },
    "leadership-advisory": {
      whyIntro: "De maritieme sector transformeert sneller dan ooit. [Leadership advisory](/nl/diensten/leadership-advisory) helpt maritieme organisaties hun leiderschap voor te bereiden op de decarbonisatie-transitie en de digitalisering van de sector.",
      challenges: [
        "Generatiewisseling — kapiteinservaring verdwijnt met pensionering",
        "Family-to-professional — de transitie van familiemanagement naar professioneel bestuur",
        "Green transition skills — nieuwe competenties voor alternatieve brandstoffen en emissie-reductie",
        "Talent aantrekken — de maritieme sector concurreert met tech en energy om jong talent",
      ],
      profiles: [
        "Successieplanning — opvolging in familiebedrijven en professionele maritieme organisaties",
        "Board effectiveness — governance-verbetering voor maritieme boards",
        "[Onboarding](/nl/onboarding-executives) — nieuwe maritieme leiders effectief inwerken",
        "[Retentie](/nl/leadership-retention) — key talent behouden in een krappe markt",
        "Leadership development — van operationeel naar strategisch maritiem leiderschap",
      ],
      trends: "Maritime leadership advisory richt zich op de dubbele transitie: professionalisering van governance én voorbereiding op green shipping.",
      approach: "Wij adviseren rederijen, havens en maritieme dienstverleners over de leiderschapstransitie die nodig is om de IMO 2050-doelen te halen.",
    },
    "recruitment-operating-model": {
      whyIntro: "Maritieme organisaties die groeien — door vlootuitbreiding, acquisitie of diversificatie — hebben een professioneel wervingsmodel nodig dat rekening houdt met internationale mobiliteit en certificeringseisen.\n\n[Recruitment operating model](/nl/diensten/recruitment-operating-model) voor maritime integreert STCW-kwalificaties en internationale sourcing.",
      challenges: [
        "Internationale talentpool — maritiem talent is per definitie internationaal en mobiel",
        "Certificeringen — STCW, class-specifieke kwalificaties en flag state-eisen",
        "Shore vs. sea — de balans tussen walorganisatie en zeevarende bemanning",
        "Seizoensdynamiek — offshore-seizoenen en handelspatronen beïnvloeden hiring",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — pipeline van gecertificeerd maritiem management",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — dedicated maritime recruiter",
        "[Abonnement](/nl/abonnement-recruitment) — continue wervingscapaciteit voor groeiende vloten",
        "[Hiring governance](/nl/hiring-governance-reporting) — STCW-validatie en screening",
        "[Talent strategy](/nl/talent-acquisition-strategy) — maritieme employer branding en campus recruitment",
      ],
      trends: "Maritime recruitment internationaliseert: digitale platforms verbinden zeelieden wereldwijd, en maritieme academies worden strategische recruitment-partners.",
      approach: "Wij bouwen recruitment-operaties die de internationale, certificeringsgebonden realiteit van de maritieme sector respecteren.",
    },
  },

  // ─── BOUW & INFRA ───
  "bouw-en-infra": {
    "executive-search": {
      whyIntro: "De bouw- en infrasector staat voor een unieke paradox: enorme orderportefeuilles (woningbouwopgave, energietransitie, infrastructuurvernieuwing) maar een acuut tekort aan leiderschap dat complexe projecten kan managen.\n\n[Executive search](/nl/diensten/executive-search) in bouw & infra vereist begrip van de projectmatige cultuur, aanbestedingsprocessen en de arbeidsmarktkrapte die de sector definieert.",
      challenges: [
        "Stikstofcrisis en vergunningen — leiders moeten navigeren in een complex politiek-juridisch landschap",
        "Woningbouwopgave — 100.000 woningen per jaar bouwen vereist schaalbaar leiderschap",
        "Circulariteit — de transitie naar circulair bouwen vraagt om een ander type leider",
        "Personeelstekort — niet alleen vakmensen, maar ook projectdirecteuren en regiomanagers zijn schaars",
      ],
      profiles: [
        "CEO / Directeur — bouwbedrijven, infra-aannemers en projectontwikkelaars",
        "Directeur Projecten — management van portfolios van €100M+ aan bouwprojecten",
        "Directeur Tenders — aanbestedingsstrategie en proposalmanagement",
        "COO — operationele excellentie, veiligheid en productiviteit op de bouwplaats",
        "Directeur Duurzaamheid — ESG-strategie, circulair bouwen en BREEAM-certificering",
      ],
      trends: "Bouw & infra executive search wordt gedreven door: (1) modulair en industrieel bouwen vereist leiders met manufacturing-achtergrond, (2) BIM en digital twin technologie vraagt om digitaal leiderschap, en (3) de consolidatiegolf in de sector creëert behoefte aan integratieleiders.",
      approach: "Ons netwerk in bouw & infra omvat directieleden bij bouwers, ontwikkelaars, ingenieursbureaus en installatiebedrijven. Wij begrijpen het verschil tussen een projectdirecteur bij een bouwer en een bij een infra-aannemer.\n\nLees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "De boardroom van bouwbedrijven en infra-aannemers professionaliseert snel. Familiebedrijven benoemen externe bestuurders, beursgenoteerde bouwers zoeken diverse boards. [C-level recruitment](/nl/diensten/c-level-recruitment) in bouw & infra vereist begrip van de projectcultuur en aanbestedingsdynamiek.",
      challenges: [
        "Family business transitie — veel bouwbedrijven zijn in de 3e of 4e generatie en zoeken professioneel management",
        "Veiligheidsverantwoordelijkheid — bestuurders zijn persoonlijk aansprakelijk voor veiligheid op de bouwplaats",
        "Aanbestedingsrisico — grote infra-projecten kennen extreme financiële risico's",
        "Duurzaamheidsstrategie — ESG-rapportage en circulariteit worden boardroom-prioriteiten",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — leiderschap voor bouwers, ontwikkelaars en infra-bedrijven",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — projectfinanciering, cashflow-management en risico-beheersing",
        "[COO](/nl/functies/coo-chief-operating-officer) — productie, veiligheid en projectuitvoering",
        "Directeur Ontwikkeling — gebiedsontwikkeling, grondposities en business development",
        "Board/RvC — onafhankelijk toezicht met bouw-sectorkennis",
      ],
      trends: "De bouw-boardroom evolueert: tech-expertise wordt gevraagd voor BIM en prefab-innovatie, ESG wordt een bestuursverantwoordelijkheid, en internationalisering vereist cross-border ervaring.",
      approach: "Onze C-level search in bouw & infra houdt rekening met de projectcultuur, aanbestedingsrisico's en de vaak familiaire governance die deze sector kenmerkt.",
    },
    "assessment-selectie": {
      whyIntro: "In bouw & infra kan een verkeerde leiderschapskeuze leiden tot projectfalen, veiligheidsproblemen en miljoenenverliezen. [Assessment](/nl/diensten/assessment-selectie) voor bouw-leiders moet projectmanagement-competenties, veiligheidscultuur en commercieel inzicht objectief meten.",
      challenges: [
        "Veiligheidsmentaliteit — is veiligheid een kernwaarde of een kostenpost voor deze leider?",
        "Projectbeheersing — kan de kandidaat grote, complexe projecten financieel en operationeel managen?",
        "Stakeholder management — opdrachtgevers, onderaannemers, gemeenten en omwonenden",
        "People leadership — leidinggeven aan een diverse workforce van vaklieden tot engineers",
      ],
      profiles: [
        "CEO/directeur-assessment — ondernemerschap en strategisch vermogen",
        "Directeur Projecten — projectportfolio-management en risico-inschatting",
        "COO — operationele excellentie en veiligheidscultuur",
        "Directeur Tenders — aanbestedingskwaliteiten en commercieel inzicht",
        "Directeur HR — people strategy in een krappe arbeidsmarkt",
      ],
      trends: "Assessment in bouw beweegt naar scenario-gebaseerde evaluaties: projectcrises, veiligheidsincidenten en aanbestedingsdilemma's worden gesimuleerd om besluitvaardigheid te testen.",
      approach: "Ons bouw-assessment combineert projectmanagement-scenario's met [STAR-interviews](/nl/star-interview-guide) en [referentiechecks](/nl/referentiechecks) bij opdrachtgevers en onderaannemers.",
    },
    "leadership-advisory": {
      whyIntro: "Bouw & infra groeit explosief, maar het leiderschap groeit niet altijd mee. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bouwbedrijven en infra-aannemers hun management-capaciteit op te schalen voor de komende bouwgolf.",
      challenges: [
        "Schaalsprong — van regionaal naar nationaal opereren vereist ander leiderschap",
        "Professionalisering — familiebedrijven die de stap maken naar professioneel management",
        "Kennisoverdracht — ervaren projectleiders die met pensioen gaan",
        "Diversiteit — de bouw is de minst diverse sector van Nederland",
      ],
      profiles: [
        "Successieplanning — opvolging in familiebedrijven en professionele bouworganisaties",
        "Executive team assessment — is uw directie klaar voor de groeiambitie?",
        "[Onboarding](/nl/onboarding-executives) — nieuwe directieleden effectief inwerken",
        "[Retentie](/nl/leadership-retention) — behoud van projectdirecteuren en regiomanagers",
        "Board advisory — professionalisering van governance in bouwbedrijven",
      ],
      trends: "Bouw leadership advisory focust op 'next generation': hoe leiden we de volgende generatie bouwdirecteuren op in een sector die fundamenteel verandert?",
      approach: "Wij adviseren bouw- en infrabedrijven over leiderschapsontwikkeling met oog voor de projectcultuur, veiligheidsverantwoordelijkheid en groeiambitie.",
    },
    "recruitment-operating-model": {
      whyIntro: "Bouw- en infrabedrijven die honderden professionals per jaar aannemen — van projectleiders tot werkvoorbereiders tot calculators — hebben een professioneel wervingsmodel nodig.\n\n[Recruitment operating model](/nl/diensten/recruitment-operating-model) voor bouw & infra houdt rekening met seizoensdynamiek en regionale spreiding.",
      challenges: [
        "Extreme krapte — de bouw kent het grootste personeelstekort van alle sectoren",
        "Regionale spreiding — projecten zijn locatiegebonden, wat regionale recruitment vereist",
        "Seizoensdynamiek — bouwactiviteit piekt in voorjaar en zomer",
        "Opleidingsniveau — mix van MBO-vaklieden en HBO/WO-engineers",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — proactieve pipeline van projectleiders en engineers",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded bouw-recruiter",
        "[Abonnement](/nl/abonnement-recruitment) — continue capaciteit voor groeiende bouwbedrijven",
        "[Hiring governance](/nl/hiring-governance-reporting) — VCA-validatie en screening",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding op bouwopleidingen en vakbeurzen",
      ],
      trends: "Bouw-recruitment innoveert met zij-instroom: professionals uit andere sectoren omscholen naar de bouw, en partnerships met ROC's en technische opleidingen.",
      approach: "Wij ontwerpen recruitment-modellen die de seizoensdynamiek, regionale spreiding en kwalificatie-eisen van bouw & infra integreren.",
    },
  },

  // ─── VASTGOED ───
  "vastgoed": {
    "executive-search": {
      whyIntro: "De vastgoedmarkt transformeert: stijgende rente, ESG-eisen (SFDR, EU Taxonomy) en de woningcrisis creëren een nieuw speelveld. Vastgoedbeleggers, ontwikkelaars en property managers zoeken leiders die zowel financieel als maatschappelijk rendement kunnen leveren.\n\n[Executive search](/nl/diensten/executive-search) in vastgoed vereist begrip van investment management, gebiedsontwikkeling en de regulatoire context.",
      challenges: [
        "ESG-compliance — SFDR, EU Taxonomy en energielabel-eisen veranderen de investeringsstrategie fundamenteel",
        "Renteontwikkeling — stijgende rente dwingt tot herfinanciering en portfolio-herschikking",
        "Woningcrisis — overheidsingrijpen (regulering middenhuur) verandert het business model van woningbeleggers",
        "Digitalisering — PropTech transformeert property management en tenant experience",
      ],
      profiles: [
        "CEO / Fund Director — strategisch leiderschap voor vastgoedfondsen en beleggingsplatformen",
        "CIO (Chief Investment Officer) — acquisities, dispositions en portfolio-strategie",
        "COO / Director Asset Management — waardecreatie, CAPEX-planning en ESG-implementatie",
        "Director Development — gebiedsontwikkeling, vergunningen en stakeholder management",
        "CFO — fund accounting, financiering en investor relations",
      ],
      trends: "Vastgoed executive search wordt gedreven door: (1) de convergentie van real estate en infrastructure (data centers, logistics) creëert hybride profielen, (2) ESG wordt de primaire differentiator in fundraising, en (3) operational real estate (hotels, healthcare, student housing) vereist sector-specifiek leiderschap.",
      approach: "Ons vastgoednetwerk omvat executives bij institutionele beleggers, private equity real estate, projectontwikkelaars en property managers. Wij begrijpen het verschil tussen een fund manager en een asset manager — en weten welk profiel past bij uw strategie.\n\nLees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "De vastgoed-boardroom staat voor strategische keuzes: afbouwen van fossiele assets, investeren in logistiek en data centers, en navigeren in een gereguleerde woningmarkt. [C-level recruitment](/nl/diensten/c-level-recruitment) in vastgoed vereist begrip van investment management en governance.",
      challenges: [
        "Investor relations — bestuurders moeten pensioenfondsen en family offices overtuigen",
        "Regulatory complexity — AIFMD, SFDR en nationale wetgeving navigeren",
        "Portfolio-transitie — van kantoren naar logistiek, wonen en life sciences",
        "Governance — vastgoedfondsen kennen complexe governance-structuren",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — fund management en strategisch vastgoedleiderschap",
        "CIO — investment strategy en deal-making",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — fund finance, tax structuring en AIFMD-compliance",
        "Director Asset Management — waardecreatie en ESG-implementatie",
        "Board/Advisory Committee — onafhankelijk toezicht op vastgoedfondsen",
      ],
      trends: "De vastgoed-boardroom evolueert: ESG-expertise wordt een boardroom-vereiste, tech-achtergronden worden gezocht voor PropTech-integratie, en internationalisering vraagt om cross-border governance-ervaring.",
      approach: "Onze C-level search in vastgoed combineert financiële expertise met governance-begrip. Wij begrijpen de complexe eigendoms- en fondsstructuren die vastgoedorganisaties kenmerken.",
    },
    "assessment-selectie": {
      whyIntro: "In vastgoed kan een verkeerde investeringsbeslissing honderden miljoenen kosten. [Assessment](/nl/diensten/assessment-selectie) van vastgoedleiders moet financieel oordeel, ESG-bewustzijn en stakeholder-management objectief meten.",
      challenges: [
        "Investment judgment — kan deze leider kansen en risico's in vastgoedmarkten correct inschatten?",
        "ESG-integratie — begrijpt de kandidaat de financiële impact van ESG op vastgoedportefeuilles?",
        "Stakeholder management — gemeente, huurders, beleggers en bouwpartners tegelijk bedienen",
        "Marktcyclus-ervaring — heeft de kandidaat eerder een downturn meegemaakt en gemanaged?",
      ],
      profiles: [
        "Fund Director-assessment — investeringsstrategie en governance",
        "CIO-assessment — deal-making en portfolio-constructie",
        "Director Development — gebiedsontwikkeling en vergunningsmanagement",
        "Director Asset Management — waardecreatie en huurderrelaties",
        "CFO — fund accounting en regulatory compliance",
      ],
      trends: "Vastgoed-assessment integreert steeds meer data-driven elementen: kandidaten worden beoordeeld op hun vermogen om vastgoeddata te interpreteren en evidence-based beslissingen te nemen.",
      approach: "Ons vastgoed-assessment combineert investment case studies met [STAR-interviews](/nl/star-interview-guide) en [referentiechecks](/nl/referentiechecks) bij investeerders en development-partners.",
    },
    "leadership-advisory": {
      whyIntro: "De vastgoedsector staat voor een transformatie die ander leiderschap vereist. [Leadership advisory](/nl/diensten/leadership-advisory) helpt vastgoedorganisaties hun leiderschapsteam voor te bereiden op ESG-transitie, rentestijging en portfolio-heroriëntatie.",
      challenges: [
        "ESG-competentie gap — heeft uw leiderschapsteam de kennis voor SFDR en EU Taxonomy?",
        "Generatiewisseling — ervaren vastgoedprofessionals gaan met pensioen",
        "Cultuurverandering — van transactie-gedreven naar waardecreatie-georiënteerd",
        "Talent retentie — vastgoedprofessionals worden weggekaapt door private equity en tech",
      ],
      profiles: [
        "Executive team assessment — is uw leiderschapsteam klaar voor de nieuwe vastgoedcyclus?",
        "Successieplanning — opvolging voor fund directors en portfolio managers",
        "[Onboarding](/nl/onboarding-executives) — nieuwe leiders effectief inwerken in uw fondsstructuur",
        "[Retentie](/nl/leadership-retention) — behoud van investment professionals",
        "[Compensation benchmarking](/nl/compensation-benefits-trends) — carried interest en LTIP-structurering",
      ],
      trends: "Vastgoed leadership advisory focust op ESG-readiness: welke competenties heeft uw team nodig om SFDR Article 8 of 9 fondsen te managen?",
      approach: "Wij adviseren vastgoedorganisaties over leiderschapsontwikkeling in de context van ESG-transitie en marktcyclus-management.",
    },
    "recruitment-operating-model": {
      whyIntro: "Vastgoedorganisaties die groeien door acquisitie of fondsuitbreiding hebben een professioneel wervingsmodel nodig dat rekening houdt met de gespecialiseerde profielen die de sector vereist.\n\n[Recruitment operating model](/nl/diensten/recruitment-operating-model) voor vastgoed integreert financial en ESG-competenties in het selectieproces.",
      challenges: [
        "Niche-profielen — asset managers, fund controllers en development managers zijn schaars",
        "Concurrentie — private equity en investment banking trekken hetzelfde talent aan",
        "Specialisatie — residentieel, logistiek en kantoren vereisen verschillende expertise",
        "Internationale sourcing — vastgoedtalent is internationaal mobiel",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — proactieve pipeline van vastgoedprofessionals",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded vastgoed-recruiter",
        "[Abonnement](/nl/abonnement-recruitment) — voorspelbare kosten bij fondsuitbreiding",
        "[Hiring governance](/nl/hiring-governance-reporting) — competentie-validatie en screening",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding op vastgoedopleidingen en netwerken",
      ],
      trends: "Vastgoed recruitment professionaliseert: talent intelligence platforms brengen competitieve talentstromen in kaart, en gespecialiseerde vastgoedopleidingen worden directe recruitment-partners.",
      approach: "Wij ontwerpen recruitment-modellen die passen bij de gespecialiseerde aard van vastgoed: investeringscyclus, fondsstructuur en de mix van financieel en technisch talent.",
    },
  },

  // ─── LOGISTIEK ───
  "logistiek": {
    "executive-search": {
      whyIntro: "De logistieke sector is de slagader van de economie en transformeert door e-commerce, automatisering en sustainability-eisen. Van 3PL-reuzen tot last-mile startups — elk type logistiek bedrijf heeft ander leiderschap nodig.\n\n[Executive search](/nl/diensten/executive-search) in logistiek vereist begrip van warehousing, transport, technologie én de marges die de sector kenmerken.",
      challenges: [
        "E-commerce schaling — exponentiële groei vraagt om leiders die fulfillment-operaties kunnen schalen",
        "Automatisering — robotisering en WMS-implementaties vereisen techno-logistiek leiderschap",
        "Duurzaamheid — klanten eisen zero-emission logistics, wat de hele keten beïnvloedt",
        "Personeelstekort — van heftruckchauffeurs tot warehouse managers, de krapte is acuut",
      ],
      profiles: [
        "CEO / Managing Director — 3PL, fulfillment en logistiek dienstverleners",
        "COO — warehouse operations, transport en distributie",
        "CTO / VP Technology — WMS, TMS en automatisering (robotics, sorters, AGV's)",
        "Commercial Director — contract logistics, key account management en business development",
        "VP HR — people management in een sector met hoge turnover en diverse workforce",
      ],
      trends: "Logistiek executive search wordt gedreven door: (1) micro-fulfillment centers vereisen een nieuw type operationeel leiderschap, (2) cross-border e-commerce schept behoefte aan leiders met internationale customs-expertise, en (3) de opkomst van logistics-as-a-service creëert nieuwe businessmodellen die ander leiderschap vragen.",
      approach: "Ons logistiek netwerk omvat executives bij 3PL's, e-commerce fulfillment centers, transport-bedrijven en tech-logistiek scale-ups. Wij begrijpen de margedynamiek en operationele complexiteit die deze sector kenmerkt.\n\nLees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "De C-suite van logistieke organisaties evolueert snel: Chief Digital Officers, VP Sustainability en Chief Automation Officers zijn nieuwe vaste functies. [C-level recruitment](/nl/diensten/c-level-recruitment) in logistiek vereist begrip van de operationele en technologische transformatie.",
      challenges: [
        "Schaling — van regionaal naar Europees opereren vraagt om een andere C-suite",
        "Tech-transformatie — automatisering en digitalisering vereisen tech-savvy bestuurders",
        "Lage marges — C-levels moeten groeien én kosten beheersen in een commodity-markt",
        "PE-betrokkenheid — veel logistieke bedrijven zijn PE-owned, wat specifieke governance vereist",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — schaling en strategische transformatie",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — cashflow-management en PE-rapportage",
        "[COO](/nl/functies/coo-chief-operating-officer) — multi-site operationeel leiderschap",
        "CTO — warehouse management systems en automatisering",
        "CCO — contract logistics en key account management",
      ],
      trends: "De logistiek-boardroom professionaliseert: PE-investeerders eisen professionele governance, sustainability wordt een board-level verantwoordelijkheid, en de integratie van AI in logistiek vereist tech-expertise op C-level.",
      approach: "Onze C-level search in logistiek combineert operationele diepgang met governance-begrip. Wij begrijpen de PE-dynamiek en margedruk die logistieke C-levels dagelijks ervaren.",
    },
    "assessment-selectie": {
      whyIntro: "In logistiek is operationele excellentie het verschil tussen winst en verlies. [Assessment](/nl/diensten/assessment-selectie) van logistieke leiders moet operationeel vermogen, technologie-adoptie en people management objectief meten.",
      challenges: [
        "Operationele capaciteit — kan deze leider een warehouse met 500+ FTE aansturen?",
        "Tech-readiness — begrijpt de kandidaat WMS, TMS en automatisering op implementatie-niveau?",
        "People leadership — leidinggeven aan een diverse, multiculturele workforce",
        "Commercieel inzicht — kan de leider contracten sluiten die zowel klant als margin dienen?",
      ],
      profiles: [
        "CEO/MD-assessment — strategisch vermogen en operationeel leiderschap",
        "COO — multi-site management en procesoptimalisatie",
        "Commercial Director — contract logistics en klantstrategie",
        "CTO — technologie-adoptie en innovatie",
        "VP HR — workforce management en employer branding",
      ],
      trends: "Logistiek-assessment beweegt naar data-driven evaluatie: kandidaten worden getoetst op hun vermogen om operationele KPI's te interpreteren en data-based beslissingen te nemen.",
      approach: "Ons logistiek-assessment combineert operationele scenario's met [STAR-interviews](/nl/star-interview-guide) en [referentiechecks](/nl/referentiechecks) bij klanten en operationele stakeholders.",
    },
    "leadership-advisory": {
      whyIntro: "De logistieke sector groeit en automatiseert tegelijkertijd. Dit vraagt om leiders die zowel menselijk als technologisch kapitaal kunnen managen. [Leadership advisory](/nl/diensten/leadership-advisory) helpt logistieke organisaties hun leiderschapsteam toekomstbestendig te maken.",
      challenges: [
        "Automatisering vs. people — hoe leidt u een organisatie die steeds meer geautomatiseerd wordt?",
        "Schaalsprong — van familiebedrijf naar professionele 3PL-organisatie",
        "Generatiewisseling — oprichters die het stokje moeten overdragen",
        "Diversiteit — logistiek heeft een divers personeelsbestand maar weinig divers leiderschap",
      ],
      profiles: [
        "Successieplanning — opvolging voor oprichters en directieleden",
        "Executive team assessment — is uw team klaar voor schaling en automatisering?",
        "[Onboarding](/nl/onboarding-executives) — nieuwe leiders effectief maken in logistieke operaties",
        "[Retentie](/nl/leadership-retention) — behoud van operationeel talent",
        "Board advisory — governance voor PE-backed logistieke bedrijven",
      ],
      trends: "Logistiek leadership advisory richt zich op de mens-machine transitie: hoe ontwikkelt u leiders die effectief zijn in een steeds meer geautomatiseerde omgeving?",
      approach: "Wij adviseren logistieke organisaties over leiderschapsontwikkeling met oog voor automatisering, schaling en de PE-dynamiek die veel bedrijven in de sector kenmerkt.",
    },
    "recruitment-operating-model": {
      whyIntro: "Logistieke organisaties met meerdere warehouses en honderden medewerkers hebben een professioneel recruitmentmodel nodig.\n\n[Recruitment operating model](/nl/diensten/recruitment-operating-model) voor logistiek houdt rekening met volume-hiring, seizoenspieken en de multiculturele workforce.",
      challenges: [
        "Volume-recruitment — tientallen warehouse medewerkers per maand werven",
        "Seizoenspieken — Black Friday, kerst en zomer vereisen flexibele capaciteit",
        "Multiculturele workforce — werving in meerdere talen en culturen",
        "Retentie — hoge turnover in operationele functies maakt continue recruitment structureel",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — pipeline van warehouse managers en team leads",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded logistiek-recruiter",
        "[Abonnement](/nl/abonnement-recruitment) — voorspelbare kosten bij continue en seizoensgebonden hiring",
        "[Hiring governance](/nl/hiring-governance-reporting) — gestructureerde selectie voor operationele functies",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding gericht op logistiek talent",
      ],
      trends: "Logistiek recruitment automatiseert: AI-screening voor volume-vacatures, video-interviews voor operationele functies en programmatic advertising gericht op specifieke regio's.",
      approach: "Wij ontwerpen recruitment-modellen die de volume- en seizoensdynamiek van logistiek integreren. Van steady-state tot peak-season — schaalbaar en meetbaar.",
    },
  },

  // ─── TRANSPORT ───
  "transport": {
    "executive-search": {
      whyIntro: "De transportsector staat voor een dubbele transformatie: verduurzaming (elektrificatie, waterstof) en digitalisering (connected vehicles, MaaS). Van OV-bedrijven tot transportondernemingen — leiders moeten de sector door een fundamentele transitie leiden.\n\n[Executive search](/nl/diensten/executive-search) in transport vereist begrip van concessies, modal shift en de arbeidsmarktkrapte.",
      challenges: [
        "Elektrificatie — transitie naar zero-emission vloten vereist investeringsleiderschap en technische kennis",
        "Chauffeurstekort — het tekort aan vrachtwagenchauffeurs en buschauffeurs is structureel",
        "Mobility as a Service — de convergentie van OV, deelmobiliteit en private transport",
        "Concessiemanagement — OV-bedrijven opereren in een politiek-bestuurlijke context van aanbestedingen",
      ],
      profiles: [
        "CEO / Directeur — transportbedrijven, OV-organisaties en mobiliteitsplatforms",
        "COO — vlootmanagement, planning en operationele efficiëntie",
        "Directeur Concessies — aanbestedingen, overheidsrelaties en concessie-management",
        "CTO — connected vehicles, route-optimalisatie en MaaS-platforms",
        "Directeur HR — chauffeurs-werving, opleidingen en arbeidsvoorwaarden",
      ],
      trends: "Transport executive search wordt gedreven door: (1) zero-emission deadlines (2025-2030) creëren acute behoefte aan transitieleiders, (2) data-driven transport vereist tech-leiderschap, en (3) de consolidatie in de sector creëert grotere organisaties die professioneel management nodig hebben.",
      approach: "Ons transport-netwerk omvat executives bij transportbedrijven, OV-organisaties en mobility scale-ups. Wij begrijpen de concessiedynamiek, CAO-complexiteit en de operationele realiteit van de sector.\n\nLees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "De boardroom van transportorganisaties professionaliseert: van familiebedrijven die extern management zoeken tot OV-bedrijven die nieuwe bestuurders benoemen. [C-level recruitment](/nl/diensten/c-level-recruitment) in transport vereist begrip van de publiek-private dynamiek.",
      challenges: [
        "Publiek-private governance — OV-bedrijven opereren in een politiek-bestuurlijke context",
        "Transitie-leiderschap — de overstap naar zero-emission vereist visionair bestuur",
        "Arbeidsverhoudingen — sterke vakbonden en complexe CAO-onderhandelingen",
        "Familiebedrijf-governance — veel transportbedrijven zijn in transitie naar professioneel management",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — transportbedrijven en OV-organisaties",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — vlootfinanciering en concessie-financiën",
        "[COO](/nl/functies/coo-chief-operating-officer) — operationeel leiderschap en veiligheid",
        "Directeur Concessies — overheidsrelaties en aanbestedingsmanagement",
        "CTO — mobility technology en data-driven operaties",
      ],
      trends: "De transport-boardroom verandert: duurzaamheid wordt bestuursverantwoordelijkheid, tech-expertise wordt gevraagd, en diversiteit in besturen wordt steeds meer verwacht.",
      approach: "Onze C-level search in transport combineert governance-begrip met operationele kennis. Wij begrijpen de concessiedynamiek en arbeidsverhoudingen die transportorganisaties kenmerken.",
    },
    "assessment-selectie": {
      whyIntro: "Transport-leiders managen veiligheid van miljoenen passagiers en tonnen cargo. [Assessment](/nl/diensten/assessment-selectie) moet operationeel leiderschap, veiligheidscultuur en transitie-vermogen objectief meten.",
      challenges: [
        "Veiligheidsverantwoordelijkheid — is veiligheid een kernwaarde voor deze leider?",
        "Operationeel onder druk — kan de kandidaat presteren tijdens operationele verstoringen?",
        "Stakeholder management — opdrachtgevers, vakbonden, reizigers en overheden",
        "Transitie-vermogen — kan deze leider de organisatie door de zero-emission transitie leiden?",
      ],
      profiles: [
        "CEO/directeur-assessment — strategisch vermogen en publieke verantwoordelijkheid",
        "COO — operationeel leiderschap en crisismanagement",
        "Directeur HR — workforce management en arbeidsrelaties",
        "Directeur Concessies — aanbestedings- en relatie-competenties",
        "CTO — technologie-adoptie en innovatie",
      ],
      trends: "Transport-assessment integreert steeds meer crisis-simulaties: operationele verstoringen, stakeholder-crises en media-aandacht worden gesimuleerd.",
      approach: "Ons transport-assessment combineert operationele scenario's met [STAR-interviews](/nl/star-interview-guide) en [referentiechecks](/nl/referentiechecks) bij opdrachtgevers en stakeholders.",
    },
    "leadership-advisory": {
      whyIntro: "De transportsector staat voor een generatiewisseling én een technologische transitie. [Leadership advisory](/nl/diensten/leadership-advisory) helpt transportorganisaties hun leiderschap voor te bereiden op zero-emission en digitalisering.",
      challenges: [
        "Zero-emission transitie — welke leiderschapscompetenties zijn nodig voor elektrificatie?",
        "Vergrijzing — ervaren transportleiders gaan met pensioen",
        "Professionalisering — familiebedrijven die de stap naar professioneel management maken",
        "Talent aantrekken — transport is niet de meest sexy sector voor jong talent",
      ],
      profiles: [
        "Successieplanning — opvolging in familiebedrijven en OV-organisaties",
        "Executive team assessment — is uw leiderschapsteam klaar voor de transitie?",
        "[Onboarding](/nl/onboarding-executives) — nieuwe leiders inwerken in de transportcontext",
        "[Retentie](/nl/leadership-retention) — behoud van operationeel management",
        "Board advisory — governance-verbetering voor transportorganisaties",
      ],
      trends: "Transport leadership advisory focust op transitie-readiness: heeft uw leiderschapsteam de competenties voor zero-emission operaties?",
      approach: "Wij adviseren transportorganisaties over leiderschapsontwikkeling met oog voor de transitie naar duurzaam transport en de professionalisering van governance.",
    },
    "recruitment-operating-model": {
      whyIntro: "Transportorganisaties met honderden chauffeurs en operationeel personeel hebben een wervingsmodel nodig dat structureel chauffeurstekorten adresseert.\n\n[Recruitment operating model](/nl/diensten/recruitment-operating-model) voor transport integreert rijbewijs-eisen, CAO-complexiteit en employer branding.",
      challenges: [
        "Structureel chauffeurstekort — het tekort aan vrachtwagen- en buschauffeurs is chronisch",
        "Rijbewijs-eisen — Code 95, ADR en andere kwalificaties beperken de kandidaatpool",
        "Hoge turnover — chauffeurs wisselen frequent van werkgever",
        "Internationaal werven — Oost-Europese chauffeurs zijn een belangrijke talentbron",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — continue pipeline van chauffeurs en operationeel personeel",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded transport-recruiter",
        "[Abonnement](/nl/abonnement-recruitment) — voorspelbare kosten bij continue chauffeurs-werving",
        "[Hiring governance](/nl/hiring-governance-reporting) — rijbewijs-validatie en screening",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding gericht op chauffeurs en logistiek talent",
      ],
      trends: "Transport recruitment innoveert met zij-instroom programma's: mensen omscholen tot chauffeur, en partnerships met rijscholen en opleidingscentra.",
      approach: "Wij ontwerpen recruitment-modellen die het structurele chauffeurstekort adresseren: van employer branding tot zij-instroom tot internationale werving.",
    },
  },

  // ─── SUPPLY CHAIN ───
  "supply-chain": {
    "executive-search": {
      whyIntro: "Supply chain management is van backoffice-functie geëvolueerd tot boardroom-prioriteit. COVID, geopolitieke spanningen en de CSRD maken supply chain leiderschap strategischer dan ooit.\n\n[Executive search](/nl/diensten/executive-search) voor supply chain professionals vereist begrip van end-to-end ketens, digitale tools en risicomanagement.",
      challenges: [
        "Supply chain resilience — single-source afhankelijkheden en geopolitieke risico's (China+1 strategie)",
        "CSRD & due diligence — ketenverantwoordelijkheid voor ESG wordt wettelijk verplicht",
        "Digitalisering — control towers, digital twins en AI-driven planning transformeren de functie",
        "Talentschaarste — ervaren supply chain directors met strategische én operationele capaciteiten zijn schaars",
      ],
      profiles: [
        "Chief Supply Chain Officer (CSCO) — end-to-end ketenverantwoordelijkheid op boardroom-niveau",
        "VP Procurement — strategische inkoop, supplier management en cost reduction",
        "VP Logistics — warehousing, distributie en transportmanagement",
        "VP Planning — S&OP, demand planning en inventory optimization",
        "VP Supply Chain Transformation — digitalisering, automatisering en procesherontwerp",
      ],
      trends: "Supply chain executive search wordt gedreven door: (1) nearshoring en friend-shoring creëren nieuwe sourcing-leiders, (2) AI-powered planning tools vereisen data-savvy supply chain executives, en (3) Scope 3 emissie-rapportage maakt sustainability een kerncompetentie voor supply chain leiders.",
      approach: "Ons netwerk omvat supply chain executives bij industriële bedrijven, FMCG, retail en tech. Wij begrijpen het verschil tussen een tactische inkoper en een strategische supply chain leider.\n\nLees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "De Chief Supply Chain Officer (CSCO) is een van de snelst groeiende C-level functies. Boards beseffen dat supply chain het verschil maakt tussen winst en verlies, tussen leverbaar en out-of-stock. [C-level recruitment](/nl/diensten/c-level-recruitment) voor supply chain vereist begrip van deze strategische evolutie.",
      challenges: [
        "Boardroom-erkenning — supply chain wordt C-level maar de rol is nog niet overal gedefinieerd",
        "Cross-functioneel leiderschap — CSCO's moeten samenwerken met finance, sales en operations",
        "Technologie-transformatie — de CSCO moet digitale transformatie van de keten aansturen",
        "Risk management — supply chain risk is een bestuursverantwoordelijkheid geworden",
      ],
      profiles: [
        "CSCO — Chief Supply Chain Officer met end-to-end verantwoordelijkheid",
        "CPO (Chief Procurement Officer) — strategische inkoop en leveranciersmanagement",
        "[COO](/nl/functies/coo-chief-operating-officer) — operationeel leiderschap met supply chain focus",
        "VP Global Supply Chain — internationale ketencoördinatie",
        "VP Digital Supply Chain — technologie-transformatie en analytics",
      ],
      trends: "De supply chain C-suite evolueert: CSCO's krijgen steeds vaker een boardroom-zetel, ESG-verantwoordelijkheid voor de keten wordt formeel belegd, en AI-expertise wordt een must-have competentie.",
      approach: "Onze C-level search voor supply chain combineert strategisch inzicht met operationele diepgang. Wij valideren of kandidaten werkelijk end-to-end ketenverantwoordelijkheid aankunnen.",
    },
    "assessment-selectie": {
      whyIntro: "Supply chain leiders moeten dagelijks beslissingen nemen die miljoenen waard zijn: sourcing-keuzes, inventory-niveaus, logistieke netwerken. [Assessment](/nl/diensten/assessment-selectie) moet strategisch ketendenken, data-literacy en crisismanagement objectief meten.",
      challenges: [
        "End-to-end denken — kan deze leider de hele keten overzien, niet alleen hun functionele silo?",
        "Data-driven besluitvorming — begrijpt de kandidaat S&OP, demand sensing en predictive analytics?",
        "Crisis-management — hoe reageert deze leider op supply chain disruptions?",
        "Cross-functionele samenwerking — kan de kandidaat effectief samenwerken met sales, finance en operations?",
      ],
      profiles: [
        "CSCO-assessment — strategisch ketenvermogen en boardroom-readiness",
        "VP Procurement — onderhandelingskwaliteiten en supplier management",
        "VP Planning — analytisch vermogen en S&OP-leiderschap",
        "VP Logistics — operationeel leiderschap en netwerk-optimalisatie",
        "VP Transformation — verandermanagement en digitalisering",
      ],
      trends: "Supply chain assessment wordt steeds meer simulatie-gebaseerd: kandidaten worden geconfronteerd met real-time supply chain disruptions en moeten onder tijdsdruk beslissingen nemen.",
      approach: "Ons supply chain assessment combineert keten-scenario's met [STAR-interviews](/nl/star-interview-guide) en [referentiechecks](/nl/referentiechecks) bij interne stakeholders en externe partners.",
    },
    "leadership-advisory": {
      whyIntro: "Supply chain management evolueert van operationeel naar strategisch. [Leadership advisory](/nl/diensten/leadership-advisory) helpt organisaties hun supply chain leiderschap te upgraden naar het niveau dat de huidige complexiteit vereist.",
      challenges: [
        "Functie-evolutie — van tactische inkoop naar strategisch ketenmanagement",
        "Organisatie-ontwerp — hoe structureert u de supply chain organisatie voor maximale impact?",
        "Competentie-ontwikkeling — welke vaardigheden missen uw huidige supply chain leiders?",
        "Talent retentie — supply chain talent is schaars en wordt actief benaderd",
      ],
      profiles: [
        "Supply chain maturity assessment — waar staat uw organisatie en wat is het volgende niveau?",
        "Organisatieontwerp — optimale structuur voor uw supply chain functie",
        "Successieplanning — opvolging voor CSCO en VP-posities",
        "[Retentie](/nl/leadership-retention) — behoud van supply chain talent",
        "[Compensation benchmarking](/nl/compensation-benefits-trends) — marktconforme beloning voor supply chain leiders",
      ],
      trends: "Supply chain leadership advisory focust op 'function elevation': hoe tilt u de supply chain functie naar boardroom-niveau?",
      approach: "Wij adviseren organisaties over de strategische positionering en bemensing van hun supply chain functie — van organisatieontwerp tot talent development.",
    },
    "recruitment-operating-model": {
      whyIntro: "Organisaties met complexe supply chains hebben continu behoefte aan gespecialiseerd talent: planners, inkopers, logistiek managers en data-analisten.\n\n[Recruitment operating model](/nl/diensten/recruitment-operating-model) voor supply chain bouwt een structurele pipeline van schaars talent.",
      challenges: [
        "Specialistische profielen — S&OP planners, category managers en supply chain analisten zijn schaars",
        "Concurrentie — elke sector zoekt supply chain talent, van FMCG tot tech tot pharma",
        "Functie-evolutie — de profielen van gisteren passen niet bij de supply chain van morgen",
        "Data-vaardigheden — steeds meer supply chain functies vereisen analytische competenties",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — pipeline van supply chain professionals",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded supply chain recruiter",
        "[Abonnement](/nl/abonnement-recruitment) — continue recruitmentcapaciteit",
        "[Hiring governance](/nl/hiring-governance-reporting) — competentie-frameworks voor supply chain functies",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding op supply chain opleidingen en communities",
      ],
      trends: "Supply chain recruitment professionaliseert met skills-based hiring: competenties worden belangrijker dan functietitels, en assessments vervangen CV-screening.",
      approach: "Wij ontwerpen recruitment-modellen voor supply chain functies die rekening houden met de snelle evolutie van de functie en de cross-sector concurrentie om talent.",
    },
  },

  // ─── PRODUCTIE & MAAKINDUSTRIE ───
  "productie-en-maakindustrie": {
    "executive-search": {
      whyIntro: "De Nederlandse maakindustrie is wereldklasse maar staat onder druk: energiekosten, automatisering en de transitie naar Industry 4.0 vereisen een nieuw type leiderschap. Van metaalbewerking tot food processing tot high-end assemblage — elke subsector kent eigen uitdagingen.\n\n[Executive search](/nl/diensten/executive-search) in productie & maakindustrie vereist begrip van lean manufacturing, automatisering en de praktische realiteit van de werkvloer.",
      challenges: [
        "Industry 4.0 — smart factories, IoT en data-driven manufacturing vereisen technisch-strategisch leiderschap",
        "Energietransitie — stijgende energiekosten en CO₂-reductie-eisen beïnvloeden de hele productieketen",
        "Arbeidskrapte — vakmensen, productieleiders en engineers zijn bijzonder schaars",
        "Nearshoring — productie terughalen naar Europa creëert nieuwe leiderschapsbehoeften",
      ],
      profiles: [
        "CEO / Directeur — productiebedrijven, maakbedrijven en industriële groepen",
        "COO / Directeur Productie — lean manufacturing, OEE-optimalisatie en veiligheid",
        "CTO / VP Engineering — productinnovatie, procesengineering en automatisering",
        "VP Supply Chain — materiaalinkoop, planning en leveranciersmanagement",
        "VP HR — vakmanschap-ontwikkeling, instroom en arbeidsmarktbeleid",
      ],
      trends: "Productie executive search wordt gedreven door: (1) reshoring vanuit Azië creëert nieuwe fabrieken die leiderschap nodig hebben, (2) de convergentie van IT en OT (operational technology) vereist hybride profielen, en (3) circulaire productie wordt een concurrentievoordeel dat gespecialiseerd leiderschap vraagt.",
      approach: "Ons netwerk in de maakindustrie omvat directieleden bij productiebedrijven van 50 tot 5.000+ medewerkers. Wij begrijpen de werkvloer-realiteit, de lean-cultuur en de uitdaging van het vinden van leiders die zowel strategisch als hands-on zijn.\n\nLees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "De boardroom van productiebedrijven transformeert: van hands-on eigenaar-directeuren naar professionele besturen met tech- en sustainability-expertise. [C-level recruitment](/nl/diensten/c-level-recruitment) in de maakindustrie vereist begrip van de cultuurshift die hiermee gepaard gaat.",
      challenges: [
        "Eigenaar-directeur transitie — oprichters die het bedrijf overdragen en professioneel management zoeken",
        "PE-betrokkenheid — private equity investeert in maakbedrijven en zoekt value creation leiders",
        "Internationalisering — Nederlandse maakbedrijven groeien internationaal en zoeken global leaders",
        "Werkvloer-geloofwaardigheid — C-levels die geen verbinding hebben met de productie verliezen respect",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — operationeel en strategisch leiderschap voor maakbedrijven",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — working capital, CAPEX-planning en PE-rapportage",
        "[COO](/nl/functies/coo-chief-operating-officer) — productie-excellentie en schaling",
        "[CTO](/nl/functies/cto-chief-technology-officer) — Industry 4.0 en productinnovatie",
        "VP Sales — OEM-relaties en internationaal key account management",
      ],
      trends: "De maakindustrie-boardroom professionaliseert: PE-investeerders brengen professionele governance, sustainability wordt een board-verantwoordelijkheid, en de talent-war maakt employer branding een bestuursthema.",
      approach: "Onze C-level search in de maakindustrie combineert operationele kennis met governance-begrip. Wij begrijpen dat een CEO die nooit op een werkvloer heeft gestaan, het vertrouwen van vakmensen niet wint.",
    },
    "assessment-selectie": {
      whyIntro: "In productiebedrijven is leiderschap direct zichtbaar op de werkvloer. [Assessment](/nl/diensten/assessment-selectie) van productieleiders moet operationeel vermogen, lean-denken en people management in een fysieke omgeving objectief meten.",
      challenges: [
        "Lean-competentie — begrijpt deze leider lean manufacturing op implementatie-niveau?",
        "Veiligheidsmentaliteit — is veiligheid een kernwaarde of een kostenpost?",
        "Werkvloer-leiderschap — kan de kandidaat verbinding maken met operators en vakmensen?",
        "Verandermanagement — kan deze leider een productieorganisatie transformeren naar Industry 4.0?",
      ],
      profiles: [
        "CEO/directeur-assessment — ondernemerschap en strategisch productie-leiderschap",
        "COO/productiedirecteur — lean manufacturing en operationele excellentie",
        "CTO — innovatie en technologie-adoptie in productie",
        "VP Supply Chain — ketenmanagement en planning",
        "VP HR — vakmanschap-ontwikkeling en employer branding",
      ],
      trends: "Productie-assessment beweegt naar gemba-walks en werkvloer-observaties als onderdeel van de evaluatie: hoe gedraagt de kandidaat zich op de werkvloer?",
      approach: "Ons productie-assessment combineert operationele scenario's (OEE-problemen, kwaliteitscrises, veiligheidsincidenten) met [STAR-interviews](/nl/star-interview-guide) en [referentiechecks](/nl/referentiechecks) bij operators, engineers en klanten.",
    },
    "leadership-advisory": {
      whyIntro: "De maakindustrie staat voor een generatiewisseling én een technologische transformatie. [Leadership advisory](/nl/diensten/leadership-advisory) helpt productiebedrijven hun management-capaciteit op te schalen voor Industry 4.0 en de energietransitie.",
      challenges: [
        "Opvolging — oprichters en eigenaar-directeuren die het stokje moeten overdragen",
        "Industry 4.0 readiness — heeft uw leiderschapsteam de digitale competenties?",
        "Vakmanschap behouden — hoe ontwikkelt u de volgende generatie productieleiders?",
        "Internationalisering — Nederlandse maakbedrijven die international management nodig hebben",
      ],
      profiles: [
        "Successieplanning — opvolging voor eigenaar-directeuren en productie-managers",
        "Executive team assessment — is uw directie klaar voor Industry 4.0?",
        "[Onboarding](/nl/onboarding-executives) — nieuwe directieleden inwerken in een productieomgeving",
        "[Retentie](/nl/leadership-retention) — behoud van operationeel en technisch talent",
        "Board advisory — governance voor PE-backed maakbedrijven en familiebedrijven",
      ],
      trends: "Maakindustrie leadership advisory focust op de twin transition: digitalisering én duurzaamheid tegelijk realiseren met beperkte leiderschapscapaciteit.",
      approach: "Wij adviseren productiebedrijven over leiderschapsontwikkeling met oog voor de werkvloer-realiteit, lean-cultuur en de uitdaging om tegelijk te digitaliseren en te verduurzamen.",
    },
    "recruitment-operating-model": {
      whyIntro: "Productiebedrijven met honderden medewerkers hebben een wervingsmodel nodig dat rekening houdt met vakmanschap, fysieke werkomstandigheden en regionale arbeidsmarkten.\n\n[Recruitment operating model](/nl/diensten/recruitment-operating-model) voor de maakindustrie integreert vakbekwaamheid-eisen en praktische werving.",
      challenges: [
        "Vakmanschap-schaarste — CNC-operators, lassers en elektromonteurs zijn extreem schaars",
        "Regionale arbeidsmarkt — productiebedrijven zijn locatiegebonden en concurreren regionaal",
        "Instroom — steeds minder jongeren kiezen voor een technisch beroep",
        "Retentie — productiemedewerkers zijn mobiel en wisselen snel van werkgever",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — pipeline van productieleiders en engineers",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded productie-recruiter",
        "[Abonnement](/nl/abonnement-recruitment) — voorspelbare kosten bij continue productie-werving",
        "[Hiring governance](/nl/hiring-governance-reporting) — vakbekwaamheid-validatie en VCA-screening",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding op technische opleidingen en vakbeurzen",
      ],
      trends: "Productie-recruitment innoveert met praktijkdagen, open fabrieken en partnerships met ROC's en technische opleidingen om de instroom structureel te vergroten.",
      approach: "Wij ontwerpen recruitment-modellen die de regionale, praktijkgerichte realiteit van de maakindustrie respecteren. Van employer branding tot vakbekwaamheid-assessment — pragmatisch en meetbaar.",
    },
  },

  // ─── CHEMIE ───
  "chemie": {
    "executive-search": {
      whyIntro: "De chemische industrie is de basis van de Nederlandse economie maar staat voor een existentiële transformatie: van fossiele grondstoffen naar bio-based en circulair, van energie-intensief naar klimaatneutraal. Leiders moeten deze transitie managen zonder de huidige operatie te destabiliseren.\n\n[Executive search](/nl/diensten/executive-search) in chemie vereist begrip van proceschemie, SEVESO-regelgeving en de langetermijn-investeringslogica van de sector.",
      challenges: [
        "Energietransitie — de chemie is de grootste industriële energieverbruiker; elektrificatie en waterstof zijn strategische prioriteiten",
        "SEVESO III en veiligheid — leiders in chemie dragen persoonlijke aansprakelijkheid voor procesveiligheid",
        "Circulaire chemie — chemische recycling, bio-based feedstocks en cradle-to-cradle vereisen innovatieleiderschap",
        "Vergrijzing — een generatie chemische engineers en plant managers gaat met pensioen",
      ],
      profiles: [
        "CEO / Site Director — eindverantwoordelijk leiderschap voor chemische complexen en bedrijven",
        "COO / VP Manufacturing — plant operations, turnarounds en procesoptimalisatie",
        "CTO / VP R&D — procesinnovatie, schaalvergroting en pilotplants",
        "VP HSEQ — procesveiligheid (PSM), milieumanagement en SEVESO-compliance",
        "VP Supply Chain — grondstofinkoop, planning en logistics voor bulkchemie",
      ],
      trends: "Chemie executive search wordt gedreven door: (1) de waterstofeconomie creëert een nieuwe categorie leiders op het snijvlak van chemie en energie, (2) carbon capture and utilization (CCU) wordt een industrietak die leiderschap nodig heeft, en (3) de consolidatie in specialty chemicals creëert integratieleiders.",
      approach: "Ons chemienetwerk omvat executives bij basischemie, specialty chemicals, petrochemie en bio-based bedrijven in de Benelux en DACH-regio. Wij begrijpen het verschil tussen een plant manager bij een batchproces en één bij een continu proces.\n\nLees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "De boardroom van chemiebedrijven navigeert tussen korte-termijn winstgevendheid en langetermijn-transitie naar duurzaam. [C-level recruitment](/nl/diensten/c-level-recruitment) in chemie vereist begrip van deze spanning en de persoonlijke aansprakelijkheid die bestuurders dragen voor procesveiligheid.",
      challenges: [
        "Persoonlijke aansprakelijkheid — bestuurders zijn aansprakelijk voor SEVESO-compliance en veiligheidsincidenten",
        "Kapitaalintensiteit — investeringsbeslissingen van honderden miljoenen vereisen financieel-strategisch leiderschap",
        "Transitie-dilemma — investeren in fossiele assets die 20 jaar meegaan, of wachten op groene alternatieven?",
        "License to operate — community relations en milieuvergunningen zijn bestuursverantwoordelijkheden",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — strategisch leiderschap voor chemische bedrijven en clusters",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — kapitaalintensieve projectfinanciering en subsidie-optimalisatie",
        "[COO](/nl/functies/coo-chief-operating-officer) — multi-site productie, turnarounds en veiligheid",
        "CTO — R&D-strategie, pilotplants en schaalvergroting",
        "VP HSEQ — procesveiligheid en SEVESO-compliance op bestuursniveau",
      ],
      trends: "De chemie-boardroom verandert: sustainability officers krijgen boardroom-posities, digital twins en AI vereisen tech-expertise, en de convergentie van chemie en energie maakt cross-sector ervaring waardevol.",
      approach: "Onze C-level search in chemie houdt rekening met de persoonlijke aansprakelijkheid, kapitaalintensiteit en transitie-spanning die deze sector kenmerkt.",
    },
    "assessment-selectie": {
      whyIntro: "In de chemie zijn de stakes existentieel: een veiligheidsfout kan mensenlevens kosten en een bedrijf sluiten. [Assessment](/nl/diensten/assessment-selectie) van chemische leiders moet procesveiligheids-mindset, technische competentie en transitie-vermogen objectief meten.",
      challenges: [
        "Process Safety Management — begrijpt deze leider PSM als kerndiscipline?",
        "Technische geloofwaardigheid — kan de kandidaat sparren met process engineers op inhoud?",
        "License-to-operate — begrijpt de leider de maatschappelijke verantwoordelijkheid van chemische productie?",
        "Transitie-vermogen — kan deze leider een fossiel bedrijf richting bio-based of circulair sturen?",
      ],
      profiles: [
        "CEO/Site Director-assessment — strategisch vermogen en veiligheidsleiderschap",
        "COO/VP Manufacturing — plant operations en turnaround management",
        "CTO — innovatie-capaciteit en schaalvergroting",
        "VP HSEQ — procesveiligheid en crisis-preparedness",
        "VP Supply Chain — grondstof-sourcing en risicomanagement",
      ],
      trends: "Chemie-assessment integreert steeds meer PSM-scenario's: veiligheidsincidenten, milieu-events en community-crises worden gesimuleerd om besluitvaardigheid te testen.",
      approach: "Ons chemie-assessment combineert procesveiligheids-scenario's met [STAR-interviews](/nl/star-interview-guide) en [referentiechecks](/nl/referentiechecks) bij voormalige HSEQ-collega's en toezichthouders.",
    },
    "leadership-advisory": {
      whyIntro: "De chemische industrie staat voor de grootste transformatie in haar bestaan. [Leadership advisory](/nl/diensten/leadership-advisory) helpt chemiebedrijven hun leiderschapsteam voor te bereiden op de transitie naar duurzame chemie.",
      challenges: [
        "Transitie-leiderschap — welke competenties heeft uw team nodig voor de overgang naar bio-based/circulair?",
        "Vergrijzing — plant managers en process engineers met 30+ jaar ervaring gaan met pensioen",
        "Veiligheidscultuuur — hoe borgt u de veiligheidscultuur bij wisselend leiderschap?",
        "Talent aantrekken — chemie concurreert met tech, energy en pharma om technisch talent",
      ],
      profiles: [
        "Successieplanning — opvolging voor site directors, plant managers en VP HSEQ",
        "Executive team assessment — is uw team klaar voor de chemische transitie?",
        "[Onboarding](/nl/onboarding-executives) — nieuwe leiders veilig en effectief inwerken",
        "[Retentie](/nl/leadership-retention) — behoud van ervaren chemische professionals",
        "Safety leadership development — veiligheidscultuur verankeren in leiderschap",
      ],
      trends: "Chemie leadership advisory focust op het borgen van procesveiligheid tijdens de transitie: hoe transformeert u zonder de veiligheidscultuur te compromitteren?",
      approach: "Wij adviseren chemiebedrijven over leiderschapsontwikkeling met oog voor procesveiligheid, transitie-competenties en de langetermijn-investeringslogica van de sector.",
    },
    "recruitment-operating-model": {
      whyIntro: "Chemiebedrijven met complexe productielocaties hebben een wervingsmodel nodig dat rekening houdt met veiligheidseisen, specialistische profielen en de locatiegebondenheid van chemische complexen.\n\n[Recruitment operating model](/nl/diensten/recruitment-operating-model) voor chemie integreert SEVESO-kwalificaties en veiligheidsscreening.",
      challenges: [
        "Specialistische profielen — process engineers, plant managers en HSEQ-specialisten zijn schaars",
        "Locatiegebondenheid — chemische complexen (Rotterdam-Moerdijk, Geleen, Terneuzen) vereisen regionale werving",
        "Veiligheidseisen — elke medewerker moet voldoen aan strenge veiligheidskwalificaties",
        "Contractor management — chemische bedrijven werken met veel contractors die ook gescreend moeten worden",
      ],
      profiles: [
        "[Talent pool](/nl/talent-pool-per-vacature) — pipeline van chemische engineers en plant professionals",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded chemie-recruiter met sectorkennis",
        "[Abonnement](/nl/abonnement-recruitment) — voorspelbare kosten bij continue en turnaround-gerelateerde hiring",
        "[Hiring governance](/nl/hiring-governance-reporting) — veiligheidscertificering en SEVESO-screening",
        "[Talent strategy](/nl/talent-acquisition-strategy) — employer branding op chemie-opleidingen en -beurzen",
      ],
      trends: "Chemie-recruitment innoveert met cross-sector reskilling: process engineers uit oil & gas omscholen naar chemie, en partnerships met technische universiteiten voor R&D-talent.",
      approach: "Wij ontwerpen recruitment-modellen die de veiligheids- en locatie-eisen van de chemische industrie respecteren. Van veiligheidscertificering tot regionale employer branding — structureel en compliant.",
    },
  },

  // ─── IT & SOFTWARE ───
  "it-en-software": {
    "executive-search": {
      whyIntro: "De IT & software-sector is het fundament van digitale transformatie. Van custom software development tot managed services, van ERP-implementaties tot cloud-migraties — leiders moeten zowel technologie als klantrelaties begrijpen.\n\nNederlandse IT-dienstverleners concurreren met globale spelers (Infosys, Accenture) om talent én klanten. [Executive search](/nl/diensten/executive-search) in IT vereist een partner die de lokale marktdynamiek én de technologische complexiteit begrijpt.",
      challenges: [
        "Nearshoring vs. lokaal — de balans tussen kostenefficiëntie en klantproximiteit is een strategische leiderschapsbeslissing",
        "AI-transformatie — elke IT-dienstverlener moet AI integreren in hun serviceportfolio, wat een nieuw type leider vereist",
        "Talent piramide — het vinden van senior leiders die zowel delivery als sales begrijpen wordt steeds moeilijker",
        "Platform shift — de transitie van project-based naar platform-based verdienmodellen verandert de gehele organisatie",
      ],
      profiles: [
        "CEO / Managing Director — P&L-leiderschap voor IT-dienstverleners en software houses",
        "[CTO](/nl/functies/cto-chief-technology-officer) — technische strategie, architectuur en innovatie",
        "VP Delivery / Operations — service delivery en operational excellence",
        "VP Sales / Commercial Director — enterprise sales en strategic accounts",
        "Chief Product Officer — productmanagement voor software-bedrijven",
      ],
      trends: "IT-recruitment verandert fundamenteel: (1) AI-augmented development (Copilot, Cursor) maakt productiviteit per developer hoger maar verhoogt de lat voor leiderschap, (2) cybersecurity wordt een standaard-eis voor elke IT-leider, en (3) de consolidatiegolf in IT-services (M&A) creëert een continue stroom van leiderschapsvacatures bij geïntegreerde organisaties.",
      approach: "Ons netwerk in de Nederlandse IT-sector omvat executives bij top-20 IT-dienstverleners, groeiende software houses en enterprise IT-afdelingen. Wij begrijpen het verschil tussen een delivery-gerichte leider en een commercieel-strategische leider — en weten wanneer u welk profiel nodig heeft.\n\nLees meer over [onze executive search aanpak](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "C-level posities in IT & software vereisen leiders die de brug slaan tussen technologie en business. Een CTO die geen klantgesprek kan voeren, is net zo ongeschikt als een CEO die geen architectuurbeslissing begrijpt.\n\nOne Time Recruit plaatst [C-level leiders](/nl/diensten/c-level-recruitment) die deze dualiteit beheersen.",
      challenges: [
        "Tech-commerciële balans — C-level moet zowel delivery excellence als revenue growth aansturen",
        "Scale-up naar enterprise — de transitie van 50 naar 500 medewerkers vraagt een andere C-suite",
        "Post-M&A integratie — na overnames moeten C-level leiders culturen samenvoegen",
        "Remote/hybrid — IT-organisaties met distributed teams vereisen een moderne leiderschapsstijl",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — strategisch leiderschap en waardecreatie",
        "[CTO](/nl/functies/cto-chief-technology-officer) — technologievisie en architectuurkeuzes",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — SaaS-metrics, M&A-ondersteuning en financial planning",
        "COO — delivery, operations en klanttevredenheid",
        "CHRO — employer branding en talent retention in een krappe markt",
      ],
      trends: "De IT C-suite verandert: fractional CxO's worden geaccepteerd voor specifieke groeifasen, AI-expertise wordt een board-level competentie, en ESG/duurzaamheidsrapportage creëert een nieuwe verantwoordelijkheid voor CFO's.",
      approach: "Onze C-level search in IT combineert diepgaand marktonderzoek met [assessments](/nl/diensten/assessment-selectie) die specifiek kijken naar de combinatie van technisch begrip en commercieel leiderschap. Elke kandidaat wordt beoordeeld op stage-fit: past deze leider bij uw huidige groeifase?",
    },
    "assessment-selectie": {
      whyIntro: "Een verkeerde leiderschapskeuze in IT kost gemiddeld €300-500K aan directe en indirecte kosten. Standaard [assessments](/nl/diensten/assessment-selectie) missen vaak de technische diepgang om IT-leiders adequaat te beoordelen.",
      challenges: [
        "Technische geloofwaardigheid — kan de kandidaat écht een architectuurdiscussie voeren?",
        "Delivery vs. sales — sommige IT-leiders excelleren in delivery maar falen commercieel",
        "Verandervermogen — IT verandert continu, hoe goed navigeert de kandidaat transformatie?",
        "Cultuur in IT — platte hiërarchieën, agile werkwijzen en developer-cultuur vereisen specifiek leiderschap",
      ],
      profiles: [
        "CTO-assessment — technische visie, architectuurbeslissingen en engineering culture",
        "MD/CEO-assessment — P&L-begrip, commercieel talent en strategische visie",
        "VP Sales-assessment — enterprise verkoopcyclus en relationship management",
        "VP Delivery-assessment — projectmanagement, klanttevredenheid en escalatie-handling",
      ],
      trends: "IT-assessments worden steeds meer gecombineerd met technische case studies en 360-graden feedback van klanten en teamleden. Psychometrische tools worden aangevuld met real-world scenario's die sector-specifiek zijn.",
      approach: "Ons assessment voor IT-leiders omvat een technische case study, [STAR-interviews](/nl/star-interview-guide) en diepgaande [referentiechecks](/nl/referentiechecks). U ontvangt een rapport met concrete aanbevelingen voor de eerste 100 dagen.",
    },
    "leadership-advisory": {
      whyIntro: "IT-organisaties groeien vaak sneller dan hun leiderschapsstructuur kan bijbenen. De technisch briljante founder is niet altijd de juiste CEO voor een organisatie met 200+ medewerkers.\n\n[Leadership advisory](/nl/diensten/leadership-advisory) helpt IT-organisaties hun leiderschapsteam te professionaliseren.",
      challenges: [
        "Founder-to-CEO transitie — technische oprichters die moeten groeien naar professioneel management",
        "Management team samenstelling — welke C-level posities heeft u wanneer nodig?",
        "Post-M&A leiderschap — hoe integreert u twee managementteams na een overname?",
        "Successieplanning — continuïteit waarborgen in cruciale leiderschapsposities",
      ],
      profiles: [
        "Executive team assessment — evaluatie van de collectieve sterkte van uw managementteam",
        "Successieplanning — identificatie van interne opvolgers voor kritieke posities",
        "[Onboarding executives](/nl/onboarding-executives) — begeleiding van nieuwe leiders",
        "[Compensation benchmarking](/nl/compensation-benefits-trends) — marktconforme beloning",
      ],
      trends: "IT leadership advisory wordt steeds meer data-driven: organisational network analysis brengt informele invloedstructuren in kaart, en employee engagement data wordt gecombineerd met performance metrics.",
      approach: "Wij werken als strategisch sparringpartner voor IT-directeuren en HR-leiders. Van [retentie-strategieën](/nl/leadership-retention) tot [employer branding](/nl/employer-brand-senior-talent) — concrete actieplannen gebaseerd op sectorkennis.",
    },
    "recruitment-operating-model": {
      whyIntro: "IT-organisaties besteden vaak 15-20% van hun omzet aan recruitment — zonder structurele talentpijplijn. In een sector waar talent de primaire bottleneck is, is dit onhoudbaar.\n\nOns [recruitment operating model](/nl/diensten/recruitment-operating-model) helpt IT-organisaties hun recruitment te professionaliseren.",
      challenges: [
        "Developer talent pipeline — proactief bouwen aan relaties met IT-talent in Nederland en daarbuiten",
        "Hoge recruitment fees — afhankelijkheid van bureaus resulteert in fees van €15-30K per hire",
        "Employer brand — concurreren met Big Tech en unicorns om hetzelfde talent",
        "Time-to-fill — IT-vacatures staan gemiddeld 45+ dagen open",
      ],
      profiles: [
        "[Talent pool opbouw](/nl/talent-pool-per-vacature) — continue pijplijn van IT-leiders en senior developers",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded recruiters met IT-domeinkennis",
        "[Abonnement recruitment](/nl/abonnement-recruitment) — voorspelbare kosten bij continue hiring",
        "[Hiring governance](/nl/hiring-governance-reporting) — data-driven recruitment met scorecards",
      ],
      trends: "IT-recruitment professionaliseert: AI-sourcing tools, talent intelligence platforms en programmatic advertising worden standaard. De grens tussen employer branding en recruitment vervaagt.",
      approach: "Wij analyseren uw recruitment-performance en ontwerpen een model dat past bij uw groeiambitie. Van standalone TA-team tot hybrid model — altijd meetbaar en data-driven.",
    },
  },

  // ─── RENEWABLE ENERGY ───
  "renewable-energy": {
    "executive-search": {
      whyIntro: "De renewable energy sector groeit exponentieel. Van offshore wind tot solar farms, van waterstof tot energy storage — elk segment vereist leiders die zowel de technologie als de complexe vergunningen- en subsidiewereld begrijpen.\n\n[Executive search](/nl/diensten/executive-search) in renewables is het vinden van leiders die schaaldenken combineren met technische diepgang en stakeholder management.",
      challenges: [
        "Subsidie-afhankelijkheid — SDE++, ISDE en Europese fondsen vereisen leiders die de subsidie-machine begrijpen",
        "Vergunningentrajecten — stikstof, Natura 2000 en gemeentelijk beleid vertragen projecten jaren",
        "Grid congestion — netcongestie is de grootste bottleneck voor nieuwe projecten in Nederland",
        "Cross-sector talent — renewables trekt leiders uit olie & gas, utilities en bouw, maar cultural fit verschilt sterk",
      ],
      profiles: [
        "CEO / Managing Director — project developers en energy companies",
        "VP Development — project development, permitting en stakeholder management",
        "CFO — projectfinanciering, subsidie-optimalisatie en investor relations",
        "CTO — technologie-keuzes, grid integration en storage",
        "VP Operations — asset management en O&M voor wind/solar portfolios",
      ],
      trends: "Drie trends domineren: (1) offshore wind wordt industrieel (GW-schaal), wat grote-project leiderschap vereist, (2) waterstof transitie creëert een geheel nieuw leiderschap-segment, en (3) corporate PPA's verplaatsen de sales-focus van subsidie naar commercieel.",
      approach: "Ons netwerk in de Europese renewables-sector omvat executives bij projectontwikkelaars, utilities, EPC-contractors en asset managers. Wij begrijpen de project lifecycle en weten welk type leider past bij welke fase.\n\nLees meer over [onze executive search methodiek](/nl/wat-is-executive-search).",
    },
    "c-level-recruitment": {
      whyIntro: "C-level posities in renewable energy combineren de complexiteit van de energiesector met de snelheid van een scale-up. [C-level recruitment](/nl/diensten/c-level-recruitment) vereist begrip van beide werelden.",
      challenges: [
        "Scale-up dynamiek — renewables-bedrijven groeien van 20 naar 200 medewerkers in 2-3 jaar",
        "Investor expectations — private equity en infra-fondsen stellen hoge eisen aan C-level performance",
        "Cross-border governance — projecten in meerdere landen vereisen internationaal C-level leiderschap",
        "Technisch-commercieel — C-level moet zowel MW's begrijpen als M&A-deals sluiten",
      ],
      profiles: [
        "[CEO](/nl/functies/ceo-chief-executive-officer) — visionair leiderschap voor energy transition companies",
        "[CFO](/nl/functies/cfo-chief-financial-officer) — project finance, SPV-structuren en fundraising",
        "[COO](/nl/functies/coo-chief-operating-officer) — operational excellence en asset performance",
        "CTO — technologie-roadmap en innovatie",
        "Chief Development Officer — portfolio growth en permitting strategie",
      ],
      trends: "De renewables C-suite professionaliseert: meer PE/infra-fund backed bedrijven zoeken C-level met corporate governance ervaring, ESG-rapportage wordt board-level verantwoordelijkheid, en CSRD-compliance vereist nieuwe CFO-competenties.",
      approach: "Wij combineren een uitgebreid netwerk in de Europese energy transition met diepgaande [assessments](/nl/diensten/assessment-selectie). Elke kandidaat wordt beoordeeld op technische kennis, commercieel vermogen én stage-fit.",
    },
    "assessment-selectie": {
      whyIntro: "In een sector die €13 miljard+ aan SDE++ subsidie beheert, is een verkeerde leiderschapskeuze niet alleen kostbaar maar potentieel desastreus voor projecten en investeerders.\n\n[Assessment](/nl/diensten/assessment-selectie) in renewables moet sector-specifieke competenties meten.",
      challenges: [
        "Project-risico begrip — begrijpt de kandidaat de risico's van offshore constructie of grid aansluiting?",
        "Stakeholder management — gemeenten, provincies, Rijkswaterstaat, netbeheerders, investeerders",
        "Subsidie-expertise — is kennis van SDE++/ISDE essentieel of aanvullend voor deze rol?",
        "Veiligheidsmentaliteit — offshore en industriële omgevingen vereisen een veiligheidsbewuste leider",
      ],
      profiles: [
        "CEO-assessment — strategisch denken, investor management en groeiambities",
        "VP Development-assessment — vergunningenkennis, stakeholder-vaardigheden en projectplanning",
        "CFO-assessment — project finance expertise en subsidie-optimalisatie",
        "CTO-assessment — technologische visie en innovatiefocus",
      ],
      trends: "Assessment in renewables evolueert: scenario-based evaluaties met echte project-dilemma's worden standaard, en ESG-competenties worden geïntegreerd in elk assessment.",
      approach: "Ons assessment omvat sector-specifieke case studies (projectontwikkeling, stakeholder-dilemma's), [STAR-interviews](/nl/star-interview-guide) en uitgebreide [referentiechecks](/nl/referentiechecks) bij investeerders en co-developers.",
    },
    "leadership-advisory": {
      whyIntro: "Renewables-organisaties groeien vaak sneller dan hun leiderschap kan bijbenen. [Leadership advisory](/nl/diensten/leadership-advisory) helpt energy transition bedrijven hun managementteam te professionaliseren.",
      challenges: [
        "Founder-to-CEO — ondernemers die moeten evolueren naar professioneel management",
        "Board samenstelling — de juiste mix van energie-expertise en corporate governance",
        "PE ownership transitie — managementteams die moeten presteren onder nieuwe eigenaren",
        "Internationalisering — leiderschapsteams die moeten functioneren across borders",
      ],
      profiles: [
        "Executive team review — evaluatie managementteam na overname of strategiewijziging",
        "Board advisory — samenstelling en effectiviteit van RvC/advisory board",
        "[Onboarding executives](/nl/onboarding-executives) — 100-dagen plan voor nieuwe leiders",
        "[Compensation benchmarking](/nl/compensation-benefits-trends) — carried interest en projectbonussen",
      ],
      trends: "Leadership advisory in renewables wordt steeds meer gekoppeld aan ESG-governance en CSRD-readiness. Boards moeten aantoonbaar duurzaamheidsexpertise hebben.",
      approach: "Wij adviseren renewable energy CEO's en investeerders over leiderschapsontwikkeling, teamsamenstelling en governance-structuren. Concrete actieplannen gebaseerd op sectorkennis.",
    },
    "recruitment-operating-model": {
      whyIntro: "Renewable energy organisaties groeien explosief maar werven vaak ad-hoc. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) brengt structuur en voorspelbaarheid.",
      challenges: [
        "Seizoensgebonden hiring — projectpieken vereisen flexibele recruitment-capaciteit",
        "Niche talent — HSE, permitting en grid-specialisten zijn extreem schaars",
        "Employer brand — concurreren met Shell, Eneco en TotalEnergies om dezelfde profielen",
        "Multi-site — recruitment voor projecten in meerdere provincies/landen tegelijk",
      ],
      profiles: [
        "[Talent pool opbouw](/nl/talent-pool-per-vacature) — pijplijn van energy professionals",
        "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded recruiters met energiesector kennis",
        "[Hiring governance](/nl/hiring-governance-reporting) — reporting voor PE/infra investors",
        "[Talent acquisition strategy](/nl/talent-acquisition-strategy) — employer branding in renewables",
      ],
      trends: "Renewables recruitment professionaliseert met talent intelligence platforms die competitieve talentstromen in kaart brengen en alumni-netwerken van energie-opleidingen activeren.",
      approach: "Wij ontwerpen recruitment-modellen die passen bij de groeifase van uw renewable energy organisatie. Van eerste TA-hire tot volledig team — meetbaar en schaalbaar.",
    },
  },

  // ─── CLEANTECH ───
  "cleantech": {
    "executive-search": {
      whyIntro: "Cleantech startups en scale-ups opereren op het snijvlak van technologie, duurzaamheid en commercie. Leiders moeten deep-tech begrijpen, subsidietrajecten navigeren én een organisatie schalen.\n\n[Executive search](/nl/diensten/executive-search) in cleantech vereist een partner die zowel de startup-dynamiek als de technologische complexiteit begrijpt.",
      challenges: [
        "Valley of death — de overgang van pilot naar commerciële schaal is waar cleantech het vaakst faalt",
        "Subsidie-afhankelijkheid — EU Horizon, Nationaal Groeifonds en WBSO zijn cruciaal maar complex",
        "Talent mismatch — cleantech heeft leiders nodig die startup-mentaliteit combineren met industriële ervaring",
        "Lange verkoopcycli — B2B-sales in cleantech kan 12-24 maanden duren",
      ],
      profiles: [
        "CEO / Managing Director — schaling van cleantech ventures",
        "CTO — technologische roadmap en IP-strategie",
        "VP Business Development — B2B-sales en partnerships",
        "VP Operations — pilotplant naar industriële productie",
        "CFO — subsidie-aanvragen, fundraising en financiële planning",
      ],
      trends: "Cleantech-leiderschap evolueert: (1) circulaire economie wordt mainstream, wat leiders met supply chain-denken vereist, (2) CSRD dwingt corporates tot cleantech-aankopen, wat commercieel leiderschap urgenter maakt, en (3) Deep-tech VC-financiering groeit, wat meer professioneel management vereist.",
      approach: "Ons netwerk in de Nederlandse en Europese cleantech-scene omvat executives bij scale-ups, corporates en investeerders. Wij begrijpen de unieke dynamiek van technologie-gedreven duurzaamheidsbedrijven.",
    },
    "c-level-recruitment": {
      whyIntro: "C-level in cleantech is uniek: leiders moeten technologie, impact en commercie combineren. [C-level recruitment](/nl/diensten/c-level-recruitment) in cleantech vereist begrip van venture-dynamiek én industriële schaling.",
      challenges: ["Stage-mismatch — een cleantech CEO voor Series A is anders dan voor Series C", "Impact vs. profit — de balans tussen missie en commercie bepaalt welk type leider past", "Board samenstelling — VC/PE-investeerders hebben specifieke verwachtingen van C-level", "International scaling — Europese expansie vereist cross-cultureel leiderschap"],
      profiles: ["[CEO](/nl/functies/ceo-chief-executive-officer) — visionair leiderschap en investor management", "[CTO](/nl/functies/cto-chief-technology-officer) — deep-tech roadmap en R&D-leiderschap", "[CFO](/nl/functies/cfo-chief-financial-officer) — subsidie, fundraising en financiële governance", "CSO (Chief Sustainability Officer) — impact measurement en ESG-reporting"],
      trends: "Cleantech boardrooms professionaliseren: meer ervaren operators vervangens eerste founders, ESG-expertise wordt verplicht voor bestuurders, en impact measurement wordt geïntegreerd in C-level KPI's.",
      approach: "Wij evalueren cleantech C-level kandidaten op hun vermogen om de transitie van technologie naar commercie te leiden. [Assessment](/nl/diensten/assessment-selectie) gecombineerd met sector-specifieke referentiechecks.",
    },
    "assessment-selectie": {
      whyIntro: "Cleantech-organisaties kunnen zich geen foute hire veroorloven. [Assessment](/nl/diensten/assessment-selectie) moet zowel technische diepgang als ondernemerschap meten.",
      challenges: ["Technisch-commercieel — kan de kandidaat zowel R&D als klantgesprekken aansturen?", "Startup resilience — cleantech kent lange cycli en tegenslagen, hoe veerkrachtig is de kandidaat?", "Stakeholder-complexiteit — subsidieverstrekkers, investeerders, klanten en regulators", "Impact-drive — is de motivatie intrinsiek of opportunistisch?"],
      profiles: ["CEO-assessment — strategisch denken en fundraising-capaciteit", "CTO-assessment — technische visie en schaalcapaciteit", "BD-assessment — enterprise sales in lange verkoopcycli", "VP Operations — pilot-to-production transitie-ervaring"],
      trends: "Assessment in cleantech integreert impact-competenties naast traditionele leiderschapsevaluaties.",
      approach: "Ons assessment combineert business case evaluaties met [STAR-interviews](/nl/star-interview-guide) en referentiechecks bij investeerders en klanten.",
    },
    "leadership-advisory": {
      whyIntro: "Cleantech ventures groeien in fasen, en elke fase vereist ander leiderschap. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bij deze transities.",
      challenges: ["Founder evolution — van uitvinder naar CEO", "Team samenstelling — wanneer welke C-level positie invullen?", "Board governance — professionalisering van governance bij groei", "Investor management — omgaan met VC/PE-verwachtingen"],
      profiles: ["Executive team evaluatie — sterkte/zwakte-analyse van het managementteam", "Board advisory — samenstelling en effectiviteit", "[Onboarding executives](/nl/onboarding-executives) — begeleiding van nieuwe leiders", "Successieplanning — continuïteit in critical roles"],
      trends: "Impact-driven leadership development wordt standaard in cleantech — leiders worden niet alleen beoordeeld op financiële KPI's maar ook op duurzaamheidsimpact.",
      approach: "Wij adviseren cleantech founders en investeerders over leiderschapsontwikkeling en teamsamenstelling. Pragmatisch en op maat.",
    },
    "recruitment-operating-model": {
      whyIntro: "Cleantech scale-ups werven vaak ad-hoc, wat leidt tot hoge kosten en inconsistente kwaliteit. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) brengt structuur.",
      challenges: ["Beperkt recruitment budget — scale-ups moeten efficiënt werven", "Niche talent — combinatie van technische en commerciële profielen is schaars", "Employer brand — onbekende cleantech bedrijven moeten zich onderscheiden", "Snelle groei — van 10 naar 100 medewerkers in 18 maanden"],
      profiles: ["[Talent pool opbouw](/nl/talent-pool-per-vacature) — pijplijn van cleantech-talent", "[Recruitment as a Service](/nl/recruitment-as-a-service) — flexibele capaciteit bij groeifasen", "[Talent acquisition strategy](/nl/talent-acquisition-strategy) — employer branding voor impact-bedrijven"],
      trends: "Cleantech-recruitment wordt steeds meer community-driven: impact-netwerken en duurzaamheidsplatforms worden primaire sourcingkanalen.",
      approach: "Wij ontwerpen lean recruitment-modellen voor cleantech scale-ups die maximale impact leveren met minimaal budget.",
    },
  },

  // ─── FOOD & BEVERAGE ───
  "food-en-beverage": {
    "executive-search": {
      whyIntro: "De food & beverage-industrie staat onder ongekende druk: consumentenvoorkeuren veranderen radicaal, voedselregulering wordt strenger en de supply chain is kwetsbaarder dan ooit.\n\nLeiders moeten zowel productie-excellence als merkstrategie beheersen. [Executive search](/nl/diensten/executive-search) in food & beverage vereist begrip van FMCG-dynamiek én industriële productie.",
      challenges: [
        "Plantaardig vs. dierlijk — de eiwittransitie verandert productportfolio's en vereist visionair leiderschap",
        "Voedselveiligheid — HACCP, BRC, IFS en NVWA-toezicht vereisen leiders met kwaliteitsmentaliteit",
        "Private label druk — eigen-merk producenten moeten innoveren om relevant te blijven",
        "Duurzaamheid — Scope 3 emissies en verpakkingsreductie worden boardroom-thema's",
      ],
      profiles: [
        "CEO / Managing Director — producenten en food-bedrijven",
        "VP Operations / Plant Director — productie-efficiency en automatisering",
        "VP Supply Chain — sourcing, logistiek en voorraadbeheer",
        "VP Marketing / CMO — merkstrategie en innovatie",
        "VP Quality — kwaliteitsmanagement en food safety",
      ],
      trends: "Food leadership verandert: (1) regeneratieve landbouw vereist supply chain-leiders die farmer relationships beheren, (2) personalisatie (voeding op maat) creëert nieuwe productcategorieën, en (3) factory automation met AI/robotics verhoogt de lat voor operations-leiderschap.",
      approach: "Ons netwerk in de food & beverage sector omvat executives bij A-merken, private label producenten, ingrediëntenbedrijven en food-tech startups. Wij begrijpen de spanning tussen volume en waarde die deze sector kenmerkt.",
    },
    "c-level-recruitment": {
      whyIntro: "C-level in food & beverage combineert FMCG-snelheid met industriële complexiteit. [C-level recruitment](/nl/diensten/c-level-recruitment) vereist begrip van beide werelden.",
      challenges: ["Retail-machtbalans — C-level moet navigeren in een markt gedomineerd door supermarktketens", "Internationalisering — Europese expansie van Nederlandse foodbedrijven", "ESG-rapportage — CSRD dwingt tot nieuwe CFO-competenties", "Category disruption — plantaardig, insecten en cultured meat veranderen het speelveld"],
      profiles: ["[CEO](/nl/functies/ceo-chief-executive-officer) — strategisch leiderschap en portfolio management", "[CFO](/nl/functies/cfo-chief-financial-officer) — commodity pricing, hedging en M&A", "[COO](/nl/functies/coo-chief-operating-officer) — multi-site productie en supply chain", "CMO — merk- en innovatiestrategie"],
      trends: "Food C-suites worden diverser: meer digitaal-native leiders, meer duurzaamheidsexpertise en meer vrouwelijke bestuurders dan andere industriële sectoren.",
      approach: "Wij beoordelen food & beverage C-level kandidaten op sector-specifieke competenties: FMCG-snelheid, retailrelaties, productie-excellence en innovatievermogen.",
    },
    "assessment-selectie": {
      whyIntro: "In food & beverage kan een verkeerde leiderschapskeuze direct impact hebben op productkwaliteit, klanttevredenheid en food safety. [Assessment](/nl/diensten/assessment-selectie) moet deze risico's adresseren.",
      challenges: ["FMCG-tempo — kan de kandidaat beslissingen nemen in een high-speed omgeving?", "Kwaliteitsmentaliteit — is food safety een reflex of een bijzaak?", "Retailrelaties — kan de kandidaat onderhandelen met dominante retailpartners?", "Innovatie — onderscheidt de kandidaat hypes van echte marktbehoeften?"],
      profiles: ["CEO-assessment — strategisch denken en retail-relatie management", "VP Operations-assessment — productie-efficiency en veiligheidsmentaliteit", "CMO-assessment — merkstrategie en consumenteninzicht", "VP Quality-assessment — food safety leadership en crisis management"],
      trends: "Assessments integreren steeds vaker consumer insight evaluaties: kan de leider daadwerkelijk vanuit de consument denken?",
      approach: "Ons assessment combineert FMCG-specifieke case studies met [STAR-interviews](/nl/star-interview-guide) en referentiechecks bij retailers en supply chain partners.",
    },
    "leadership-advisory": {
      whyIntro: "Food & beverage organisaties ondergaan fundamentele transities. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bij het navigeren van de eiwittransitie, duurzaamheid en digitalisering.",
      challenges: ["Portfolio-transitie — van dierlijk naar plantaardig leiderschap", "Familieoverdracht — veel food-bedrijven zijn familiebedrijven in transitie", "M&A integratie — post-acquisitie teamsamenstelling", "Digital transformation — e-commerce en direct-to-consumer modellen"],
      profiles: ["Executive team assessment", "Successieplanning — familieoverdracht en professional management", "[Onboarding executives](/nl/onboarding-executives) — 100-dagen plan", "[Compensation benchmarking](/nl/compensation-benefits-trends) — sector-vergelijking"],
      trends: "Leadership advisory in food richt zich steeds meer op duurzaamheids-governance en de transitie naar regeneratieve businessmodellen.",
      approach: "Concrete advisory voor food-bedrijven in transitie: van familiebedrijf naar professional management, van commodity naar waardecreatie.",
    },
    "recruitment-operating-model": {
      whyIntro: "Food & beverage bedrijven met meerdere productielocaties werven vaak gefragmenteerd. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) centraliseert en professionaliseert.",
      challenges: ["Multi-site — recruitment voor 3-10 productielocaties coördineren", "Seizoenspieken — flexibele capaciteit bij oogst- en productiepieken", "Employer brand — concurreren met retailers en FMCG-multinationals", "Blue & white collar — één model voor zowel productie als management"],
      profiles: ["[Talent pool opbouw](/nl/talent-pool-per-vacature) — pijplijn van food-professionals", "[Recruitment as a Service](/nl/recruitment-as-a-service) — embedded recruiters", "[Hiring governance](/nl/hiring-governance-reporting) — data-driven food recruitment"],
      trends: "Food-recruitment gebruikt steeds meer employer branding rondom duurzaamheid en purpose om jong talent aan te trekken.",
      approach: "Wij ontwerpen recruitment-modellen die de complexiteit van multi-site food-productie adresseren. Efficiënt, compliant en schaalbaar.",
    },
  },

  // ─── AGRI & HORTICULTURE ───
  "agri-en-horticulture": {
    "executive-search": {
      whyIntro: "Nederland is 's werelds tweede landbouwexporteur. De agri- en tuinbouwsector is hightech, exportgericht en kapitaalintensief. Leiders moeten zowel agronomische kennis als internationaal handelsinstinct hebben.\n\n[Executive search](/nl/diensten/executive-search) in agri & horticulture vereist een diep begrip van de Greenport-ecosystemen en de internationale handelsketens.",
      challenges: [
        "Stikstofcrisis — de transitie naar kringlooplandbouw verandert het speelveld fundamenteel",
        "Precision agriculture — AI, drones en IoT transformeren de sector maar vereisen tech-savvy leiderschap",
        "Generatieoverdracht — veel familiebedrijven zoeken professioneel management als opvolging",
        "Exportafhankelijkheid — geopolitieke spanningen beïnvloeden handelsroutes en markttoegang",
      ],
      profiles: [
        "CEO / Directeur — handelshuizen, kwekerijen en coöperaties",
        "VP International Sales — exportmanagement en nieuwe markten",
        "VP Operations — productie, logistiek en quality management",
        "VP R&D / Innovation — veredeling, precision ag en sustainability",
        "CFO — agri-finance, subsidies en coöperatieve governance",
      ],
      trends: "Agri-leiderschap professionaliseert: (1) data-driven farming vereist een nieuw type COO, (2) vertical farming en controlled environment agriculture (CEA) creëren tech-achtige leiderschapsbehoeften, en (3) de eiwittransitie dwingt traditionele bedrijven tot strategische heroriëntatie.",
      approach: "Ons netwerk in de Nederlandse agri- en tuinbouwsector is gebouwd op relaties in Greenport Holland, Wageningen University-alumni en internationale handelsketens. Wij begrijpen de cultuur van deze sector.",
    },
    "c-level-recruitment": {
      whyIntro: "C-level in agri combineer traditionele sectorkennis met moderne bedrijfsvoering. [C-level recruitment](/nl/diensten/c-level-recruitment) in agri vereist begrip van coöperatieve structuren én internationale handel.",
      challenges: ["Coöperatieve governance — leiders moeten functioneren binnen ledensturende organisaties", "Duurzaamheidseisen — retailketenrichtlijnen en EU-regulering", "Digitalisering — van boekhouding tot precision ag", "Internationaal — leiders die functioneren in Azië, Afrika en Zuid-Amerika"],
      profiles: ["[CEO](/nl/functies/ceo-chief-executive-officer) — coöperaties en handelshuizen", "[CFO](/nl/functies/cfo-chief-financial-officer) — commodity trading en subsidiemanagement", "[COO](/nl/functies/coo-chief-operating-officer) — productie en supply chain", "Chief Innovation Officer — veredeling, biotech en agri-tech"],
      trends: "Agri boardrooms worden professioneler: meer onafhankelijke bestuurders, meer data-literacy en meer duurzaamheidsexpertise.",
      approach: "Wij beoordelen agri C-level kandidaten op sectorkennis, internationale ervaring en het vermogen om te opereren in coöperatieve governance-structuren.",
    },
    "assessment-selectie": {
      whyIntro: "Agri-organisaties zijn vaak familiebedrijven of coöperaties met sterke culturen. [Assessment](/nl/diensten/assessment-selectie) moet cultural fit zwaar wegen naast competenties.",
      challenges: ["Culturele fit — de agri-cultuur is direct, no-nonsense en praktijkgericht", "Generatieoverdracht — kan de externe kandidaat de familiecultuur respecteren?", "Internationaal — functioneert de kandidaat in diverse culturele contexten?", "Duurzaamheid — is de transitie-mindset oprecht?"],
      profiles: ["CEO-assessment — leiderschap in coöperatieve/familiecultuur", "VP International-assessment — cross-cultureel handelstalent", "VP Operations-assessment — productie en logistics management"],
      trends: "Agri-assessments integreren steeds meer interculturele competentie-evaluaties vanwege de internationale oriëntatie van de sector.",
      approach: "Ons assessment combineert sectorkennis met [STAR-interviews](/nl/star-interview-guide) en [referentiechecks](/nl/referentiechecks) bij ketenpartners en afnemers.",
    },
    "leadership-advisory": {
      whyIntro: "Agri-organisaties staan voor fundamentele transities. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bij generatieoverdracht, professionalisering en duurzaamheidstransitie.",
      challenges: ["Familieoverdracht — van familie naar professioneel bestuur", "Coöperatieve vernieuwing — governance-modernisering", "Duurzaamheidstransitie — leiderschap voor kringlooplandbouw", "Talent retention — jonge professionals vasthouden in de agri-sector"],
      profiles: ["Executive team evaluatie", "Successieplanning — familieoverdracht", "Board advisory — coöperatieve governance", "[Onboarding executives](/nl/onboarding-executives)"],
      trends: "Leadership advisory in agri richt zich steeds meer op de integratie van technologie en duurzaamheid in bedrijfsvoering.",
      approach: "Wij adviseren agri-families, coöperaties en handelshuizen over leiderschapsontwikkeling en governance-professionalisering.",
    },
    "recruitment-operating-model": {
      whyIntro: "Agri-organisaties werven vaak via persoonlijke netwerken. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) professionaliseert dit zonder de cultuur te verliezen.",
      challenges: ["Regionale arbeidsmarkt — talent is gebonden aan regio's (Westland, Drenthe, Flevoland)", "Seizoenspieken — flexibele capaciteit bij oogst en veilingperiodes", "Employer brand — de agri-sector kampt met een imagoprobleem bij jong talent", "Internationale werving — arbeidsmigratie en compliance"],
      profiles: ["[Talent pool opbouw](/nl/talent-pool-per-vacature)", "[Recruitment as a Service](/nl/recruitment-as-a-service)", "[Talent acquisition strategy](/nl/talent-acquisition-strategy) — employer branding voor agri"],
      trends: "Agri-recruitment innovateert met sectorspecifieke platforms en Wageningen University alumni-netwerken.",
      approach: "Wij ontwerpen recruitment-modellen die passen bij de seizoensdynamiek en regionale focus van agri-organisaties.",
    },
  },

  // ─── E-COMMERCE ───
  "e-commerce": {
    "executive-search": {
      whyIntro: "E-commerce in de Benelux groeit naar €40 miljard+ en consolideert snel. Leiders moeten zowel marketplace-dynamiek als DTC-strategieën beheersen, en navigeren in een landschap waar Amazon, Bol.com en nichespelers strijden om dominantie.\n\n[Executive search](/nl/diensten/executive-search) in e-commerce vereist een partner die de snelheid van digital commerce begrijpt.",
      challenges: ["Marketplace vs. DTC — de strategische keuze bepaalt welk type leider u nodig heeft", "Last-mile optimalisatie — fulfillment en bezorgsnelheid zijn concurrentiefactoren", "Customer acquisition cost — CAC stijgt terwijl lifetime value onder druk staat", "Cross-border — internationale expansie via lokale marktkennis"],
      profiles: ["CEO / Managing Director — e-commerce bedrijven en platforms", "VP E-commerce / CDO — digital commerce strategie", "VP Marketing / CMO — performance marketing en brand building", "VP Operations — fulfillment, warehousing en last-mile", "VP Product — UX, conversie-optimalisatie en data"],
      trends: "E-commerce leiderschap evolueert: (1) social commerce (TikTok Shop) vereist nieuwe competenties, (2) AI-personalisatie wordt standaard, en (3) sustainability in e-commerce (verpakking, retourreductie) wordt een leiderschapsthema.",
      approach: "Ons netwerk omvat e-commerce executives bij marktleiders, DTC-merken en marketplace-operators. Wij begrijpen de metrics die ertoe doen: conversie, AOV, LTV, retourpercentage.",
    },
    "c-level-recruitment": {
      whyIntro: "E-commerce C-level moet data-driven, klantgericht en operationeel sterk zijn. [C-level recruitment](/nl/diensten/c-level-recruitment) in e-commerce vereist begrip van digitale businessmodellen.",
      challenges: ["Growth vs. profitability — de balans verschuift naar winstgevende groei", "Technology stack — C-level moet platformkeuzes begrijpen en aansturen", "Omnichannel integratie — online en offline samenvoegen", "Internationaal — multi-market expansion management"],
      profiles: ["[CEO](/nl/functies/ceo-chief-executive-officer) — e-commerce platforms en DTC-merken", "[CTO](/nl/functies/cto-chief-technology-officer) — platform-architectuur", "[CFO](/nl/functies/cfo-chief-financial-officer) — unit economics en investor relations", "CMO — acquisition, retention en brand"],
      trends: "E-commerce C-suites worden lean-er: gecombineerde COO/CTO-rollen en fractional CFO's worden geaccepteerd bij sub-€50M bedrijven.",
      approach: "Wij evalueren e-commerce C-level op hun vermogen om data-driven groeistrategieën te implementeren, gecombineerd met [assessments](/nl/diensten/assessment-selectie) die digitale competenties meten.",
    },
    "assessment-selectie": {
      whyIntro: "E-commerce beweegt snel. [Assessment](/nl/diensten/assessment-selectie) moet zowel analytisch vermogen als executiesnelheid meten.",
      challenges: ["Analytisch — kan de kandidaat een GA4-dashboard interpreteren en actie ondernemen?", "Snelheid — e-commerce vereist snelle besluitvorming met incomplete data", "Customer obsession — denkt de kandidaat vanuit de klant of vanuit de organisatie?", "Tech-savvy — begrijpt de leider de technologie achter de webshop?"],
      profiles: ["CEO-assessment — strategisch en operationeel tegelijk", "CMO-assessment — performance marketing en brand building", "VP Ops-assessment — fulfillment excellence", "CDO-assessment — data-driven besluitvorming"],
      trends: "E-commerce assessments gebruiken steeds meer live-case evaluaties met echte data en dashboards.",
      approach: "Ons assessment combineert e-commerce case studies met [STAR-interviews](/nl/star-interview-guide) en performance-referentiechecks.",
    },
    "leadership-advisory": {
      whyIntro: "E-commerce organisaties groeien snel en transformeren continu. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bij schaling en professionalisering.",
      challenges: ["Founder burnout — DTC-founders die moeten leren delegeren", "Team schaling — van 10 naar 100 FTE", "Post-M&A — integratie na overname door PE of strategische koper", "Internationalisering — multi-market leiderschapsteam opbouwen"],
      profiles: ["Executive team evaluatie", "Founder coaching en transitie-advies", "[Onboarding executives](/nl/onboarding-executives)", "[Compensation benchmarking](/nl/compensation-benefits-trends)"],
      trends: "E-commerce leadership advisory integreert steeds meer AI-literacy en sustainability-competenties.",
      approach: "Wij adviseren e-commerce founders en investeerders over leiderschapsontwikkeling en teamsamenstelling voor de volgende groeifase.",
    },
    "recruitment-operating-model": {
      whyIntro: "E-commerce bedrijven werven in golven: marketingpieken, seizoensgebonden fulfillment en continue tech-hiring. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) brengt structuur.",
      challenges: ["Seizoenspieken — Black Friday, Kerst en sale-perioden", "Tech-talent — developers en data engineers zijn schaars", "Employer brand — concurreren met Coolblue, Bol.com en Amazon", "Hybride rollen — functies die marketing, data en technologie combineren"],
      profiles: ["[Talent pool opbouw](/nl/talent-pool-per-vacature)", "[Recruitment as a Service](/nl/recruitment-as-a-service)", "[Talent acquisition strategy](/nl/talent-acquisition-strategy) — employer branding voor e-commerce"],
      trends: "E-commerce recruitment wordt steeds meer employer-brand-driven: purpose, cultuur en flexibiliteit zijn doorslaggevend voor talent.",
      approach: "Wij ontwerpen flexibele recruitment-modellen die meebewegen met de seizoensdynamiek van e-commerce.",
    },
  },

  // ─── CONSUMENTENGOEDEREN ───
  "consumentengoederen": {
    "executive-search": {
      whyIntro: "De consumentengoederenindustrie (FMCG/CPG) is een van de meest competitieve sectoren ter wereld. Merken moeten constant innoveren, efficiënt produceren en slim distribueren.\n\n[Executive search](/nl/diensten/executive-search) in FMCG vereist een partner die de dynamiek van sneldraaiende consumptiegoederen begrijpt.",
      challenges: ["Private label druk — retailermerken groeien ten koste van A-merken", "Duurzaamheid — verpakkingsreductie en circulaire supply chains worden verplicht", "Direct-to-consumer — traditionele FMCG-bedrijven bouwen eigen kanalen", "Inflatie & kosten — commodity-prijzen en energiekosten vereisen scherp financial management"],
      profiles: ["CEO / General Manager — business unit of marktverantwoordelijkheid", "VP Marketing / CMO — merk- en innovatiestrategie", "VP Supply Chain — end-to-end supply chain leiderschap", "VP Sales / Commercial Director — retailrelaties en trade marketing", "VP R&D — productinnovatie en reformulering"],
      trends: "FMCG-leiderschap verschuift: (1) digital-first marketing wordt de norm, (2) sustainability officers komen op board-level, en (3) data & analytics worden kerncompetenties voor elke C-level rol.",
      approach: "Ons netwerk in FMCG omvat executives bij multinationals, challenger brands en private label producenten. Wij begrijpen de unieke dynamiek van merken, retail en innovatie.",
    },
    "c-level-recruitment": {
      whyIntro: "FMCG C-level combineert merkdenken met operationele discipline. [C-level recruitment](/nl/diensten/c-level-recruitment) in consumentengoederen vereist begrip van retaildynamiek en consumentengedrag.",
      challenges: ["Retailmacht — C-level moet navigeren in een door retailers gedomineerde markt", "Innovation speed — de time-to-market voor nieuwe producten krimpt", "ESG-rapportage — CSRD en verpakkingsregulering", "Talent mobility — FMCG-leiders circuleren internationaal"],
      profiles: ["[CEO](/nl/functies/ceo-chief-executive-officer) — managing director voor Benelux-operaties", "[CFO](/nl/functies/cfo-chief-financial-officer) — commodity management en trade terms", "[COO](/nl/functies/coo-chief-operating-officer) — multi-site productie en logistiek", "CMO — brand, digital en innovation"],
      trends: "FMCG boardrooms integreren meer digital-native leiders en zoeken actief naar diverse bestuurders met non-traditional achtergronden.",
      approach: "Wij evalueren FMCG C-level kandidaten op merk-denken, retail-relaties en operationele excellentie via diepgaande [assessments](/nl/diensten/assessment-selectie).",
    },
    "assessment-selectie": {
      whyIntro: "In FMCG bepaalt leiderschapskwaliteit direct het marktaandeel. [Assessment](/nl/diensten/assessment-selectie) moet FMCG-specifieke competenties meten.",
      challenges: ["Snelheid — FMCG-leiders moeten snel beslissen met marktdata", "Consumer centricity — denkt de kandidaat vanuit de shopper?", "Trade marketing — begrijpt de leider de P&L per SKU?", "Innovation track record — heeft de kandidaat bewezen succesvolle launches?"],
      profiles: ["CEO-assessment — strategisch en commercieel", "CMO-assessment — merk, media en innovatie", "VP Sales-assessment — retail-negotiatie en category management"],
      trends: "FMCG-assessments integreren consumenteninzicht-evaluaties en category management case studies.",
      approach: "Ons assessment combineert FMCG case studies met [STAR-interviews](/nl/star-interview-guide) en referentiechecks bij retailers en ketenpartners.",
    },
    "leadership-advisory": {
      whyIntro: "FMCG-organisaties transformeren door duurzaamheid, digitalisering en veranderende consumentenvoorkeuren. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bij deze transitie.",
      challenges: ["Organisatie-design — van functioneel naar agile of category-driven", "Talent pipeline — interne leiderschapsontwikkeling voor next-gen FMCG-leiders", "Post-M&A — integratie van acquisities", "Duurzaamheidstransitie — van compliance naar strategie"],
      profiles: ["Executive team evaluatie", "Successieplanning", "[Onboarding executives](/nl/onboarding-executives)", "[Compensation benchmarking](/nl/compensation-benefits-trends)"],
      trends: "FMCG leadership advisory richt zich steeds meer op purpose-driven leiderschap en stakeholder-kapitalisme.",
      approach: "Concrete advisory voor FMCG-organisaties: van organisatie-design tot leiderschapsontwikkeling.",
    },
    "recruitment-operating-model": {
      whyIntro: "FMCG-organisaties met duizenden medewerkers en meerdere sites werven continu. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) professionaliseert en centraliseert.",
      challenges: ["Volume — honderden vacatures per jaar", "Kwaliteit — consistent hoge lat voor talent", "Employer brand — FMCG concurreert met tech om young professionals", "Campus recruitment — management trainees en junior talent"],
      profiles: ["[Talent pool opbouw](/nl/talent-pool-per-vacature)", "[Recruitment as a Service](/nl/recruitment-as-a-service)", "[Hiring governance](/nl/hiring-governance-reporting)", "[Talent acquisition strategy](/nl/talent-acquisition-strategy)"],
      trends: "FMCG-recruitment professionaliseert met talent intelligence, employer branding en AI-sourcing.",
      approach: "Wij ontwerpen enterprise-grade recruitment-modellen voor FMCG-organisaties die consistent toptalent aantrekken.",
    },
  },

  // ─── BANKEN ───
  "banken": {
    "executive-search": {
      whyIntro: "Nederlandse banken opereren in een van de zwaarst gereguleerde sectoren ter wereld. DNB/ECB-toetsing, anti-witwasregelgeving en Basel IV-eisen maken bankleiderschap uniek complex.\n\n[Executive search](/nl/diensten/executive-search) voor banken vereist begrip van regulatory governance én financieel-strategisch leiderschap.",
      challenges: ["DNB fit & proper toetsing — elke bestuurder moet goedgekeurd worden door de toezichthouder", "AML/KYC — witwasbestrijding is een board-level prioriteit geworden", "Digital banking — neobanks en open banking dwingen tot innovatie", "Consolidatie — Europese bankenfusies creëren complexe leiderschapstransities"],
      profiles: ["Bestuurder / CEO — systeembanken en nichespelers", "CRO — risk management en regulatory affairs", "CTO / CDO — digitale transformatie en core banking modernisatie", "CCO — compliance, AML en sanctiescreening", "CFO — Basel IV, IFRS en investor relations"],
      trends: "Banking-leiderschap verandert: (1) digital-native bestuurdersprofielen worden geaccepteerd, (2) ESG-integratie in risicomanagement wordt verplicht, en (3) de scheiding tussen retail en wholesale banking vervagt.",
      approach: "Wij begrijpen de DNB-toetsing, de bancaire governance en de complexe stakeholder-dynamiek. Elke kandidaat wordt pre-gescreend op fit & proper criteria.",
    },
    "c-level-recruitment": {
      whyIntro: "Bank-bestuurders moeten door de DNB-zeef. [C-level recruitment](/nl/diensten/c-level-recruitment) voor banken vereist proactieve screening op regulatory fit.",
      challenges: ["Toetsingsrisico — DNB kan kandidaten afwijzen na maandenlang proces", "Bestuurlijke aansprakelijkheid — persoonlijke aansprakelijkheid schrikt kandidaten af", "Internationale governance — ECB-toezicht voor significante banken", "Diversiteit — DNB stimuleert diverse board-samenstelling"],
      profiles: ["[CEO](/nl/functies/ceo-chief-executive-officer) — bestuurslid met DNB-goedkeuring", "[CFO](/nl/functies/cfo-chief-financial-officer) — regulatory reporting en kapitaalmanagement", "CRO — risk appetite en compliance frameworks", "Lid RvC — onafhankelijk toezicht met bankexpertise"],
      trends: "Banking boards worden diverser en meer tech-savvy. DNB toetst steeds actiever op digitale competenties en duurzaamheidskennis.",
      approach: "Onze C-level search voor banken omvat proactieve DNB pre-screening, diepgaande [assessments](/nl/diensten/assessment-selectie) en uitgebreide due diligence.",
    },
    "assessment-selectie": {
      whyIntro: "In een sector waar toezichthouders meekijken, is [assessment](/nl/diensten/assessment-selectie) niet optioneel maar verplicht. DNB verwacht zorgvuldige selectieprocessen.",
      challenges: ["Regulatory mindset — is compliance een reflex of een last?", "Risicobewustzijn — hoe beoordeelt de kandidaat complexe financiële risico's?", "Stakeholder management — toezichthouders, aandeelhouders, OR, klanten", "Integriteit — track record en reputatie-screening"],
      profiles: ["Bestuurder-assessment — DNB-readiness evaluatie", "CRO-assessment — risicomanagement competenties", "CCO-assessment — compliance leadership en AML-expertise"],
      trends: "Banking assessments integreren regulatory scenario's en ethical dilemma's als standaard onderdeel.",
      approach: "Ons assessment is specifiek ontworpen voor de bancaire sector: [STAR-interviews](/nl/star-interview-guide) met regulatory scenario's, integrity screening en [referentiechecks](/nl/referentiechecks) bij toezichthouders en medebestuurders.",
    },
    "leadership-advisory": {
      whyIntro: "Banken staan voor fundamentele transformaties. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bij board-effectiviteit, digitale transformatie en regulatory change.",
      challenges: ["Board-effectiviteit — functioneert het bestuur als collegiaal team?", "Digitale transformatie — heeft het bestuur voldoende digitale competenties?", "Successieplanning — continuïteit in een sterk gereguleerde omgeving", "Cultuurverandering — van risico-avers naar innovatief"],
      profiles: ["Board effectiveness review", "Successieplanning — DNB-conforme opvolgingsstrategie", "[Compensation benchmarking](/nl/compensation-benefits-trends) — bancaire beloningsnormen"],
      trends: "Banking leadership advisory integreert DNB-richtlijnen voor board-effectiviteit en diversiteit als standaard framework.",
      approach: "Wij adviseren bank-bestuurders over governance, board-samenstelling en leiderschapsontwikkeling binnen het regulatory framework.",
    },
    "recruitment-operating-model": {
      whyIntro: "Banken met duizenden medewerkers werven continu. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) professionaliseert employer branding, sourcing en hiring governance.",
      challenges: ["Compliance-screening — elke medewerker moet gescreend worden", "Volume — honderden vacatures per jaar bij grotere banken", "Employer brand — concurreren met fintechs en Big 4", "Specialistisch talent — risk, compliance en data-specialisten zijn schaars"],
      profiles: ["[Talent pool opbouw](/nl/talent-pool-per-vacature)", "[Recruitment as a Service](/nl/recruitment-as-a-service)", "[Hiring governance](/nl/hiring-governance-reporting) — compliance-ready recruitment analytics"],
      trends: "Banking recruitment integreert pre-employment screening en compliance-checks als standaard onderdeel van het operating model.",
      approach: "Wij ontwerpen recruitment-modellen die voldoen aan de compliance-eisen van de bankensector. Efficiënt, compliant en data-driven.",
    },
  },

  // ─── VERZEKERINGEN ───
  "verzekeringen": {
    "executive-search": {
      whyIntro: "De verzekeringssector transformeert door klimaatrisico's, digitalisering en veranderende klantbehoeften. Solvency II, DORA en de Wft creëren een zwaar gereguleerd speelveld.\n\n[Executive search](/nl/diensten/executive-search) voor verzekeraars vereist begrip van actuariaat, regulering en verzekeringsinnovatie.",
      challenges: ["Klimaatrisico — herprijzing en nieuwe risicotypen vereisen visionair leiderschap", "InsurTech disruptie — digitale verzekeraars veranderen de value chain", "Pensioentransitie — de overgang naar het nieuwe pensioenstelsel is de grootste operatie in decennia", "Customer experience — van polisdenken naar klantdenken"],
      profiles: ["Bestuurder / CEO — verzekeraars en pensioenfondsen", "Chief Actuary — actuarieel leiderschap en modelvalidatie", "CRO — Solvency II en enterprise risk management", "CDO / CTO — digitale transformatie en core system modernisatie", "VP Claims — claims management en fraud prevention"],
      trends: "Verzekeraarsleiderschap verandert: (1) parametrische verzekeringen vereisen tech-leiders, (2) embedded insurance creëert nieuwe distributiemodellen, en (3) DNB dringt aan op meer diverse boards.",
      approach: "Wij kennen de verzekeringsmarkt van binnenuit en screenen kandidaten op regulatory fit, actuarieel begrip en verandervermogen.",
    },
    "c-level-recruitment": {
      whyIntro: "Verzekeringsbestuurders worden getoetst door DNB. [C-level recruitment](/nl/diensten/c-level-recruitment) in verzekeringen vereist proactieve regulatory screening.",
      challenges: ["DNB-toetsing — fit & proper voor bestuurders en commissarissen", "Solvency II — kapitaalmanagement is een bestuurlijke kerncompetentie", "Pensioentransitie — de WTP-implementatie vereist programmamanagement op boardniveau", "Innovatie — verzekeraars moeten innoveren binnen strikte kaders"],
      profiles: ["[CEO](/nl/functies/ceo-chief-executive-officer) — bestuurslid verzekeraar of pensioenfonds", "Chief Actuary — AMSB-verantwoordelijkheid", "CRO — second-line risicomanagement", "CFO — Solvency II reporting en financieel beleid"],
      trends: "Verzekeringsboards zoeken actief naar digitale expertise en niet-traditionele achtergronden (tech, consulting) om innovatie te stimuleren.",
      approach: "Onze C-level search voor verzekeraars omvat DNB pre-screening, diepgaande [assessments](/nl/diensten/assessment-selectie) en actuariële competentie-evaluatie.",
    },
    "assessment-selectie": {
      whyIntro: "DNB verwacht zorgvuldige selectieprocessen voor bestuurders. [Assessment](/nl/diensten/assessment-selectie) is cruciaal voor regulatory compliance.",
      challenges: ["Actuarieel begrip — begrijpt de kandidaat de technische basis van het bedrijf?", "Regulatory mindset — is compliance een kernwaarde?", "Verandervermogen — kan de kandidaat een traditionele verzekeraar transformeren?", "Stakeholder-complexiteit — DNB, AFM, klanten, intermediairs"],
      profiles: ["Bestuurder-assessment — DNB-readiness", "Chief Actuary-assessment — technische competenties", "CRO-assessment — risicomanagement en Solvency II"],
      trends: "Verzekeringsassessments integreren scenario-analyses met klimaat- en cyberrisico's.",
      approach: "Ons assessment is ontworpen voor de verzekeringsbranche: [STAR-interviews](/nl/star-interview-guide) met regulatory en actuariële scenario's, integrity screening en [referentiechecks](/nl/referentiechecks).",
    },
    "leadership-advisory": {
      whyIntro: "Verzekeraars ondergaan de grootste transformatie in decennia. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bij pensioentransitie, digitalisering en board-effectiviteit.",
      challenges: ["Pensioentransitie leiderschap — WTP-implementatie vereist specifieke programma-competenties", "Board-effectiviteit — functioneert het bestuur effectief onder toenemende druk?", "Successieplanning — continuïteit in een gereguleerde omgeving", "Cultuurverandering — van productgericht naar klantgericht"],
      profiles: ["Board effectiveness review", "Pensioentransitie team evaluatie", "Successieplanning", "[Compensation benchmarking](/nl/compensation-benefits-trends)"],
      trends: "Verzekeraars leadership advisory integreert ESG-governance en klantgerichtheid als kernthema's.",
      approach: "Wij adviseren verzekeringsbestuurders over governance, teamsamenstelling en leiderschapsontwikkeling — altijd binnen het regulatory framework.",
    },
    "recruitment-operating-model": {
      whyIntro: "Verzekeraars met complexe organisaties werven over meerdere domeinen. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) brengt structuur en efficiency.",
      challenges: ["Actuarieel talent — actuarissen en risk-specialisten zijn extreem schaars", "IT-transformatie — digitalisering vereist tech-talent dat niet traditioneel naar verzekeraars kijkt", "Compliance-screening — Wft-eisen voor specifieke functies", "Employer brand — verzekeraars worden gezien als 'saai' door jong talent"],
      profiles: ["[Talent pool opbouw](/nl/talent-pool-per-vacature)", "[Recruitment as a Service](/nl/recruitment-as-a-service)", "[Talent acquisition strategy](/nl/talent-acquisition-strategy) — employer branding voor verzekeraars"],
      trends: "Verzekeringsrecruitment investeert in employer branding en campus-programma's om jong actuarieel en tech-talent aan te trekken.",
      approach: "Wij ontwerpen recruitment-modellen die de specifieke compliance-eisen van de verzekeringssector respecteren. Professioneel en meetbaar.",
    },
  },

  // ─── FINTECH ───
  "fintech": {
    "executive-search": {
      whyIntro: "FinTech is een van de meest dynamische sectoren in Europa. Van payments tot lending, van wealthtech tot insurtech — fintechs disrupten traditionele financial services met technologie-gedreven oplossingen.\n\n[Executive search](/nl/diensten/executive-search) in fintech vereist begrip van zowel venture-dynamiek als financiële regulering.",
      challenges: ["Regulatory catch-up — PSD2, DORA, EMI-licenties en AML-regelgeving voor fintechs", "Scale-up naar regulated entity — van startup naar vergunninghouder is een leiderschapstransitie", "Talent competitie — fintechs concurreren met Big Tech én banken om tech-talent", "Unit economics — de weg naar profitabiliteit vereist scherp financial management"],
      profiles: ["CEO / Managing Director — fintech scale-ups en platform businesses", "CTO — platform development, security en schaling", "CCO — compliance, AML/KYC en vergunningsbeheer", "VP Product — fintech product management en UX", "VP Growth — market expansion en customer acquisition"],
      trends: "FinTech-leiderschap evolueert: (1) embedded finance plaatst financiële diensten in niet-financiële platforms, (2) AI in credit scoring en fraud detection wordt standaard, en (3) consolidatie (M&A) creëert grotere fintechs met corporate governance-behoeften.",
      approach: "Ons netwerk in de Europese fintech-scene omvat executives bij scale-ups, betaaldienstverleners en wealthtech-platforms. Wij begrijpen de spanning tussen innovatiesnelheid en regulatory compliance.",
    },
    "c-level-recruitment": {
      whyIntro: "FinTech C-level moet technologie, financiën en regulering combineren. [C-level recruitment](/nl/diensten/c-level-recruitment) in fintech vereist begrip van venture-dynamiek én compliance.",
      challenges: ["Stage-fit — een CEO voor pre-revenue is anders dan voor €10M+ revenue", "Regulatory boarding — C-level moet zich comfortabel voelen met AFM/DNB-toezicht", "Founder-CEO transitie — VC's die een professionele CEO willen", "International expansion — EMEA C-level met multi-market ervaring"],
      profiles: ["[CEO](/nl/functies/ceo-chief-executive-officer) — fintech schaling en investor management", "[CTO](/nl/functies/cto-chief-technology-officer) — platform security en schaling", "[CFO](/nl/functies/cfo-chief-financial-officer) — fundraising en regulatory reporting", "CCO — compliance leadership voor vergunninghouders"],
      trends: "FinTech boardrooms professionaliseren: meer ervaren operators vervangen eerste founders, en compliance-expertise wordt board-level vereiste.",
      approach: "Wij evalueren fintech C-level op technisch begrip, regulatory readiness en groeicapaciteit via [assessments](/nl/diensten/assessment-selectie) en sector-specifieke referentiechecks.",
    },
    "assessment-selectie": {
      whyIntro: "Een verkeerde fintech C-level hire kan een vergunning in gevaar brengen. [Assessment](/nl/diensten/assessment-selectie) moet regulatory awareness en tech-competenties meten.",
      challenges: ["Compliance mindset — is regulatory awareness een kernwaarde of een bijzaak?", "Tech diepgang — begrijpt de kandidaat de platform-architectuur?", "Growth mentality — kan de kandidaat groeien van €1M naar €50M revenue?", "Stakeholder management — investeerders, toezichthouders, partners"],
      profiles: ["CEO-assessment — strategy en investor management", "CTO-assessment — platform en security", "CCO-assessment — regulatory competenties"],
      trends: "FinTech assessments integreren regulatory scenario's en cybersecurity evaluaties als standaard.",
      approach: "Ons assessment combineert fintech case studies met [STAR-interviews](/nl/star-interview-guide) en [referentiechecks](/nl/referentiechecks) bij investeerders en toezichthouders.",
    },
    "leadership-advisory": {
      whyIntro: "FinTechs groeien in fasen en elke fase vereist ander leiderschap. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bij deze transities.",
      challenges: ["Series-transitie — van A naar B naar C vereist andere C-suite competenties", "Vergunningstraject — organisatorische readiness voor regulatory oversight", "Team schaling — van 20 naar 200 medewerkers", "Exit readiness — IPO of acquisitie-voorbereiding"],
      profiles: ["Executive team evaluatie — VC/PE readiness", "Board advisory — governance professionalisering", "[Onboarding executives](/nl/onboarding-executives)", "Exit-readiness leadership assessment"],
      trends: "FinTech leadership advisory richt zich steeds meer op regulatory governance en board professionalisering bij vergunninghouders.",
      approach: "Wij adviseren fintech founders en investeerders over leiderschapsontwikkeling, team-samenstelling en governance-professionalisering.",
    },
    "recruitment-operating-model": {
      whyIntro: "FinTechs groeien snel en werven vaak inefficiënt. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) brengt structuur en snelheid.",
      challenges: ["Tech-talent competitie — developers en data engineers zijn schaars", "Compliance hiring — AML-analisten en compliance officers vinden", "Employer brand — onbekende fintechs moeten zich onderscheiden", "Speed — fintech wacht niet, recruitment moet instant zijn"],
      profiles: ["[Talent pool opbouw](/nl/talent-pool-per-vacature)", "[Recruitment as a Service](/nl/recruitment-as-a-service)", "[Talent acquisition strategy](/nl/talent-acquisition-strategy)"],
      trends: "FinTech recruitment gebruikt steeds meer developer communities en open-source bijdragen als sourcingkanaal.",
      approach: "Wij ontwerpen lean maar compliant recruitment-modellen voor fintechs die snel en kwalitatief moeten werven.",
    },
  },

  // ─── ACCOUNTANCY ───
  "accountancy": {
    "executive-search": {
      whyIntro: "De accountancysector transformeert onder druk van strengere audit-eisen, digitalisering en een structureel personeelstekort. De scheiding van audit en advies, de Wta en NBA-regelgeving creëren unieke leiderschapsuitdagingen.\n\n[Executive search](/nl/diensten/executive-search) in accountancy vereist begrip van partnership-dynamiek en regulatory governance.",
      challenges: ["Talent crisis — structureel tekort aan registeraccountants en audit-professionals", "Audit-kwaliteit druk — AFM-inspectierapporten vereisen sterk quality leadership", "AI in audit — AI-assisted auditing verandert het vak fundamenteel", "ESG assurance — CSRD creëert een geheel nieuw auditdomein"],
      profiles: ["Managing Partner — leiderschap van het kantoor", "Head of Audit — audit practice en AFM-compliance", "Head of Advisory — advisory, tax en consulting practice", "Chief People Officer — talent attraction en retention", "CFO / Finance Director — kantoorfinanciën en partnership economics"],
      trends: "Accountancy-leiderschap verandert: (1) laterale hires van buiten de sector worden geaccepteerd voor management-rollen, (2) data analytics wordt een kerncompetentie, en (3) ESG assurance creëert carrièrepaden die 5 jaar geleden niet bestonden.",
      approach: "Wij begrijpen de partnership-dynamiek, de AFM-regulatory context en de talent-uitdagingen van accountantskantoren. Van Big 4 tot middelgrote kantoren en boutique practices.",
    },
    "c-level-recruitment": {
      whyIntro: "Partnership-leiderschap in accountancy is uniek. [C-level recruitment](/nl/diensten/c-level-recruitment) moet rekening houden met partnership-governance en regulatory oversight.",
      challenges: ["Partnership consensus — nieuwe leiders moeten geaccepteerd worden door partners", "Regulatory — AFM/NBA-verwachtingen voor audit quality leadership", "Talent retention — de grootste uitdaging van elk accountantskantoor", "Innovation vs. tradition — de cultuur veranderen zonder de basis te verliezen"],
      profiles: ["Managing Partner — het kantoor leiden", "Head of Audit — audit quality en AFM-relatie", "Chief People Officer — talent strategy en employer branding", "Chief Digital Officer — digitale transformatie van audit en advisory"],
      trends: "Accountancy-partnerships zoeken steeds vaker leiders van buiten de sector voor operationele rollen (COO, CDO, CPO).",
      approach: "Onze search voor accountancy combineert begrip van partnership-governance met diepgaande [assessments](/nl/diensten/assessment-selectie) op leiderschap, verandervermogen en cultuurfit.",
    },
    "assessment-selectie": {
      whyIntro: "In een partnership moet een nieuwe leider door alle partners geaccepteerd worden. [Assessment](/nl/diensten/assessment-selectie) helpt deze beslissing te objectiveren.",
      challenges: ["Partnership fit — past de kandidaat in de primus-inter-pares cultuur?", "Verandervermogen — kan de kandidaat het kantoor moderniseren zonder weerstand?", "Client relationships — brengt de kandidaat een portfolio mee?", "Integrity — AFM en NBA stellen hoge eisen aan integriteit"],
      profiles: ["Managing Partner assessment — leiderschapsstijl en partnerschap-fit", "Head of Audit assessment — audit quality competenties", "CPO assessment — HR-strategie en employer branding"],
      trends: "Accountancy-assessments integreren regulatory scenario's en partnership-dynamiek evaluaties.",
      approach: "Ons assessment voor accountancy omvat partnership case studies, [STAR-interviews](/nl/star-interview-guide) en referentiechecks bij partners, klanten en toezichthouders.",
    },
    "leadership-advisory": {
      whyIntro: "Accountantskantoren staan voor fundamentele keuzes. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bij partnership-vernieuwing en digitale transformatie.",
      challenges: ["Partnership-vernieuwing — governance modernisering", "Talent strategie — aantrekken en behouden van jong talent", "Digitale transformatie — AI integreren in audit en advisory", "Successieplanning — opvolging van Managing Partner en practice leads"],
      profiles: ["Partnership effectiveness review", "Talent strategy advisory", "Successieplanning", "Digital transformation leadership assessment"],
      trends: "Accountancy leadership advisory integreert steeds meer purpose en cultuurontwikkeling als instrument voor talent retention.",
      approach: "Wij adviseren accountantskantoren over partnership-effectiviteit, talentmanagement en leiderschapsontwikkeling. Pragmatisch en vertrouwelijk.",
    },
    "recruitment-operating-model": {
      whyIntro: "Accountantskantoren kampen met het grootste personeelstekort in hun bestaan. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) helpt bij structurele talentwerving.",
      challenges: ["Structureel tekort — 30% meer RA-posities dan beschikbare kandidaten", "Campus recruitment — de concurrentie om young professionals is intens", "Employer brand — accountancy wordt gezien als 'saai' door Gen Z", "Lateral hiring — ervaren professionals aantrekken van andere kantoren"],
      profiles: ["[Talent pool opbouw](/nl/talent-pool-per-vacature)", "[Recruitment as a Service](/nl/recruitment-as-a-service)", "[Talent acquisition strategy](/nl/talent-acquisition-strategy) — employer branding voor accountancy"],
      trends: "Accountancy-recruitment innoveert met purpose-driven employer branding en flexibele werkmodellen om jong talent aan te trekken.",
      approach: "Wij ontwerpen recruitment-modellen voor accountantskantoren die structureel meer talent aantrekken en behouden. Van campus tot lateral.",
    },
  },

  // ─── CONSULTANCY ───
  "consultancy": {
    "executive-search": {
      whyIntro: "De consultancysector draait om talent en client relationships. Of het nu strategy, management, IT of HR-consultancy betreft — leiders moeten inhoudelijk sterk, commercieel succesvol en in staat zijn om teams te ontwikkelen.\n\n[Executive search](/nl/diensten/executive-search) in consultancy vereist een partner die de partnership-cultuur begrijpt.",
      challenges: ["Talent war — consultancy concurreert met Big Tech, fintech en corporate om toptalent", "AI-disruptie — AI verandert het consulting delivery model fundamenteel", "Specialisatie — generalist consulting maakt plaats voor deep expertise", "Partnership-dynamiek — nieuwe leiders moeten passen in een meritocratische cultuur"],
      profiles: ["Managing Partner / CEO — kantoor- of regioleiderschap", "Practice Lead — sector of functionele expertise", "VP Client Development — business development en strategic accounts", "Country MD — lokaal leiderschap in de Benelux", "Chief People Officer — talent acquisition en development"],
      trends: "Consultancy-leiderschap verandert: (1) AI-native consulting firms ontstaan, (2) outcome-based pricing vervangt uurtarieven, en (3) experienced hires van corporates worden vaker Partner dan traditionele up-or-out consultants.",
      approach: "Wij begrijpen de partnership-cultuur, de commerciële dynamiek en de talent-uitdagingen van consultancybureaus. Van MBB tot boutique practices.",
    },
    "c-level-recruitment": {
      whyIntro: "Consultancy-leiderschap is uniek: het combineert thought leadership, client management en people development. [C-level recruitment](/nl/diensten/c-level-recruitment) in consultancy vereist begrip van deze driehoek.",
      challenges: ["Partnership governance — consensus-gedreven besluitvorming", "Client conflict — managing client relationships bij leadership transitions", "Cultural preservation — de cultuur behouden bij groei", "International — multi-office leiderschap in Europa"],
      profiles: ["Managing Partner — kantoorleiderschap", "Senior Partner / Practice Lead — inhoudelijke expertise en P&L", "COO — operational excellence en kantoormanagement", "Chief People Officer — talent strategy en employer branding"],
      trends: "Consultancy partnerships zoeken steeds vaker extern voor operationele rollen (COO, CDO) terwijl inhoudelijke rollen intern worden gevuld.",
      approach: "Onze search voor consultancy combineert partnership-begrip met [assessments](/nl/diensten/assessment-selectie) die commercieel talent, thought leadership en people management evalueren.",
    },
    "assessment-selectie": {
      whyIntro: "In consultancy bepaalt de kwaliteit van leiderschap direct de kwaliteit van advies. [Assessment](/nl/diensten/assessment-selectie) moet intellectueel vermogen, commercieel talent en mensontwikkeling meten.",
      challenges: ["Intellectueel vermogen — kan de kandidaat op het hoogste strategische niveau meedenken?", "Business development — heeft de kandidaat een bewezen track record in het winnen van opdrachten?", "People development — kan de kandidaat talent ontwikkelen en behouden?", "Client management — hoe navigeert de kandidaat complexe klantrelaties?"],
      profiles: ["Partner assessment — BD, delivery en people management", "Practice Lead assessment — inhoudelijke expertise en marktpositie", "Country MD assessment — operationeel leiderschap"],
      trends: "Consultancy-assessments integreren client-facing case studies en 360-graden feedback van klanten en teamleden.",
      approach: "Ons assessment voor consultancy combineert case interviews, [STAR-interviews](/nl/star-interview-guide) en referentiechecks bij klanten, partners en teamleden.",
    },
    "leadership-advisory": {
      whyIntro: "Consultancy-partnerships moeten continu vernieuwen. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bij successieplanning, cultuurontwikkeling en strategische herpositionering.",
      challenges: ["Successie van Managing Partner — de meest politieke beslissing in elk kantoor", "Practice portfolio — welke practices bouwen, welke afbouwen?", "Talent retention — partners behouden in een competitieve markt", "Cultuurverandering — van up-or-out naar inclusieve groei"],
      profiles: ["Partnership effectiveness review", "Successieplanning Managing Partner", "Practice portfolio strategie", "[Compensation benchmarking](/nl/compensation-benefits-trends) — partnership economics"],
      trends: "Consultancy leadership advisory richt zich steeds meer op inclusiviteit, wellbeing en purpose als instrumenten voor talent retention.",
      approach: "Wij adviseren consultancy-partnerships over governance, successieplanning en cultuurontwikkeling. Vertrouwelijk en pragmatisch.",
    },
    "recruitment-operating-model": {
      whyIntro: "Consultancy bureaus werven continu — campus, experienced hires en lateral partners. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) professionaliseert de hele keten.",
      challenges: ["Campus competition — de strijd om de beste MBA's en studenten", "Experienced hires — professionals aantrekken van klanten en concurrenten", "Partner lateral — senior partners overhalen om over te stappen", "Employer brand — onderscheidend zijn in een verzadigde markt"],
      profiles: ["[Talent pool opbouw](/nl/talent-pool-per-vacature)", "[Recruitment as a Service](/nl/recruitment-as-a-service)", "[Talent acquisition strategy](/nl/talent-acquisition-strategy) — campus en experienced hire strategie"],
      trends: "Consultancy-recruitment innovateert met alumni-netwerken, return-to-work programma's en AI-driven candidate matching.",
      approach: "Wij ontwerpen recruitment-modellen voor consultancy bureaus die consistent toptalent aantrekken — van campus tot Partner-level.",
    },
  },

  // ─── LEGAL ───
  "legal": {
    "executive-search": {
      whyIntro: "De juridische sector verandert fundamenteel. New law firms, alternatieve fee structures, LegalTech en de groeiende strategische rol van de General Counsel creëren nieuwe leiderschapsbehoeften.\n\n[Executive search](/nl/diensten/executive-search) in legal vereist begrip van zowel de advocatuur als de in-house wereld.",
      challenges: ["LegalTech disruptie — AI contract review en legal automation veranderen het vak", "In-house groei — bedrijven bouwen sterkere in-house legal teams ten koste van externe adviseurs", "ESG & compliance — juridische impact van CSRD, AI Act en data privacy regulering", "Talent retention — associate-burnout en de overstap naar in-house"],
      profiles: ["Managing Partner — advocatenkantoor leiderschap", "General Counsel / CLO — in-house juridisch leiderschap", "Head of Compliance — regulatory compliance bij corporates", "Practice Group Leader — sector- of vakgroep leiderschap", "Legal Operations Director — efficiency en technologie in legal"],
      trends: "Legal leiderschap evolueert: (1) ALSP's (alternative legal service providers) groeien snel, (2) de General Counsel wordt steeds meer een strategische boardroom-rol, en (3) legal design en user-centered law veranderen hoe juridische diensten worden geleverd.",
      approach: "Wij begrijpen de partnership-dynamiek van advocatenkantoren én de corporate context van in-house legal teams. Ons netwerk omvat partners bij top-tier kantoren en General Counsels bij multinationals.",
    },
    "c-level-recruitment": {
      whyIntro: "Legal C-level combineert juridische excellentie met business acumen. [C-level recruitment](/nl/diensten/c-level-recruitment) in legal vereist begrip van partnership-governance en corporate dynamics.",
      challenges: ["Partnership consensus — managing partner verkiezing is een uniek proces", "GC strategische rol — de General Counsel als boardroom-adviseur", "Cross-border — internationale kantoren met multi-jurisdictie governance", "Innovation appetite — hoe innovatief mag/kan leiderschap zijn in een conservatieve sector?"],
      profiles: ["Managing Partner — advocatenkantoor", "General Counsel / CLO — corporate juridisch leiderschap", "COO — kantoormanagement en operations", "Chief People Officer — talent in een competitieve markt"],
      trends: "Legal C-level wordt diverser: meer niet-juridische achtergronden (tech, consulting) in operationele rollen, en meer vrouwelijke partners en GC's.",
      approach: "Onze search voor legal combineert partnership-begrip met [assessments](/nl/diensten/assessment-selectie) die juridische excellentie, commercieel talent en leiderschapsstijl evalueren.",
    },
    "assessment-selectie": {
      whyIntro: "In de juridische sector is reputatie alles. [Assessment](/nl/diensten/assessment-selectie) helpt bij objectieve evaluatie van leiders in een sector waar subjectiviteit de norm is.",
      challenges: ["Intellectual capability — kan de kandidaat op het hoogste juridische niveau opereren?", "Client development — heeft de kandidaat een eigen cliëntportfolio?", "People leadership — kan de kandidaat associates ontwikkelen en behouden?", "Commercieel — begrijpt de kandidaat de business achter de practice?"],
      profiles: ["Managing Partner assessment", "General Counsel assessment", "Practice Lead assessment"],
      trends: "Legal assessments integreren client relationship evaluaties en commerciële case studies naast traditionele competentie-evaluaties.",
      approach: "Ons assessment voor legal combineert competentie-evaluaties met [STAR-interviews](/nl/star-interview-guide) en referentiechecks bij cliënten, collega-partners en in-house teams.",
    },
    "leadership-advisory": {
      whyIntro: "Advocatenkantoren en in-house legal teams staan voor strategische keuzes. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bij partnership-governance en team-ontwikkeling.",
      challenges: ["Partnership-vernieuwing — governance en equity-structuren moderniseren", "GC team building — een high-performance in-house legal team opbouwen", "Successieplanning — opvolging van Managing Partner", "LegalTech integratie — leiderschap voor technologische transformatie"],
      profiles: ["Partnership effectiveness review", "In-house legal team assessment", "Successieplanning", "[Compensation benchmarking](/nl/compensation-benefits-trends) — partnership en in-house benchmarks"],
      trends: "Legal leadership advisory integreert steeds meer LegalTech readiness en innovation capability assessments.",
      approach: "Wij adviseren advocatenkantoren en General Counsels over leiderschapsontwikkeling, governance en team-samenstelling. Vertrouwelijk en pragmatisch.",
    },
    "recruitment-operating-model": {
      whyIntro: "Advocatenkantoren werven op alle niveaus: stagiaires, associates, counsel en partners. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) professionaliseert de hele keten.",
      challenges: ["Associate retention — de grootste uitdaging in de advocatuur", "Lateral partner hiring — partners aantrekken van concurrerende kantoren", "In-house competition — associates verliezen aan corporate legal teams", "Employer brand — onderscheidend zijn voor jong juridisch talent"],
      profiles: ["[Talent pool opbouw](/nl/talent-pool-per-vacature)", "[Recruitment as a Service](/nl/recruitment-as-a-service)", "[Talent acquisition strategy](/nl/talent-acquisition-strategy) — employer branding voor advocatenkantoren"],
      trends: "Legal recruitment innovateert met flexibele werkmodellen, purpose-driven branding en alumni return-programma's.",
      approach: "Wij ontwerpen recruitment-modellen voor advocatenkantoren die consistent toptalent aantrekken en behouden — van stagiaire tot partner.",
    },
  },

  // ─── HR SERVICES ───
  "hr-services": {
    "executive-search": {
      whyIntro: "De HR-dienstverlening is een van de meest dynamische sectoren in Nederland. Van uitzendorganisaties tot HR-tech platforms, van executive search tot payrolling — de sector transformeert door digitalisering, platformisering en veranderende arbeidsmarktdynamiek.\n\n[Executive search](/nl/diensten/executive-search) in HR services is uniek: u zoekt leiders die de recruitmentmarkt van binnenuit kennen.",
      challenges: ["Platformisering — gig-platforms en HR-tech disrupting traditionele uitzend- en detacheringsmodellen", "Margedruk — race-to-the-bottom op tarieven vereist operationele excellentie", "Arbeidsmarktregulering — wet DBA, Waadi en EU-richtlijnen voor platformwerk", "Total talent management — de convergentie van flex en vast onder één regie"],
      profiles: ["CEO / Managing Director — uitzendorganisaties en HR-dienstverleners", "CTO — HR-tech platform development en data", "VP Sales — enterprise sales en key account management", "VP Operations — service delivery en operational excellence", "CHRO — 'practice what you preach' HR-leiderschap"],
      trends: "HR services leiderschap evolueert: (1) AI-matching en chatbots transformeren het sourcingproces, (2) employer of record (EOR) modellen groeien explosief voor internationale workforce, en (3) de grens tussen staffing en consulting vervaagt.",
      approach: "Wij opereren zelf in de recruitment-sector en begrijpen de dynamiek, marges en cultuur van HR-dienstverlening van binnenuit. Dit maakt ons uniek gepositioneerd voor [executive search](/nl/diensten/executive-search) in deze sector.",
    },
    "c-level-recruitment": {
      whyIntro: "HR services C-level moet commercieel, operationeel en technologisch sterk zijn. [C-level recruitment](/nl/diensten/c-level-recruitment) in HR-dienstverlening vereist diep sectorkennis.",
      challenges: ["Commerciële drive — de sector draait op sales performance", "Operational excellence — margemanagement bij duizenden flexkrachten", "Tech transformation — van traditioneel naar platform-model", "Compliance — Waadi, arbeidswetgeving en internationale regelgeving"],
      profiles: ["[CEO](/nl/functies/ceo-chief-executive-officer) — uitzendorganisaties en HR-platforms", "[CFO](/nl/functies/cfo-chief-financial-officer) — marge-optimalisatie en M&A", "[CTO](/nl/functies/cto-chief-technology-officer) — HR-tech platform development", "VP Sales — enterprise en mid-market sales"],
      trends: "HR services C-suites worden tech-heavier: CTO's en CDO's worden standaard bij middelgrote en grote HR-dienstverleners.",
      approach: "Wij evalueren HR services C-level kandidaten op commercieel talent, operationele discipline en technologiebegrip via [assessments](/nl/diensten/assessment-selectie).",
    },
    "assessment-selectie": {
      whyIntro: "In HR-dienstverlening is people judgment de kerncompetentie. [Assessment](/nl/diensten/assessment-selectie) moet evalueren of leiders ook hun eigen organisatie goed kunnen beoordelen.",
      challenges: ["Commercieel instinct — sales is de levensader van HR-dienstverlening", "People management — leiders moeten talent herkennen én ontwikkelen", "Operationele grip — service levels, klanttevredenheid en margebeheer", "Innovation mindset — traditionele modellen durven loslaten"],
      profiles: ["CEO-assessment — commercieel en strategisch leiderschap", "VP Sales-assessment — enterprise sales en key account management", "VP Operations-assessment — service delivery excellence"],
      trends: "HR services assessments integreren steeds meer AI-literacy en platform-denken als evaluatiecriteria.",
      approach: "Ons assessment combineert HR services case studies met [STAR-interviews](/nl/star-interview-guide) en referentiechecks bij klanten en flexkrachten.",
    },
    "leadership-advisory": {
      whyIntro: "HR-dienstverleners staan voor strategische keuzes: platformisering, internationalisering of specialisatie. [Leadership advisory](/nl/diensten/leadership-advisory) helpt bij deze transities.",
      challenges: ["Business model transitie — van traditioneel naar platform", "M&A integratie — post-acquisitie team-samenstelling", "Internationalisering — EOR en cross-border workforce management", "Talent retention — de sector staat bekend om hoog verloop"],
      profiles: ["Executive team evaluatie", "Business model transitie advies", "[Onboarding executives](/nl/onboarding-executives)", "[Compensation benchmarking](/nl/compensation-benefits-trends) — HR services marktdata"],
      trends: "HR services leadership advisory richt zich op AI-strategie, platformisering en de transitie van volume naar waarde.",
      approach: "Wij adviseren HR-dienstverleners over leiderschapsontwikkeling en strategische positionering — met insider-kennis van de sector.",
    },
    "recruitment-operating-model": {
      whyIntro: "HR-dienstverleners zouden het beste voorbeeld moeten zijn van professioneel recruitment. Ons [recruitment operating model](/nl/diensten/recruitment-operating-model) helpt bij het professionaliseren van de eigen werving.",
      challenges: ["Walk the talk — HR-dienstverleners moeten hun eigen recruitment op orde hebben", "Recruiter talent — goede recruiters vinden voor uw eigen organisatie", "Employer brand — onderscheidend zijn als werkgever in een sector vol werkgevers", "Data-driven — recruitment analytics voor de eigen organisatie"],
      profiles: ["[Talent pool opbouw](/nl/talent-pool-per-vacature)", "[Recruitment as a Service](/nl/recruitment-as-a-service)", "[Talent acquisition strategy](/nl/talent-acquisition-strategy) — employer branding voor HR-dienstverleners"],
      trends: "HR-dienstverleners die hun eigen recruitment professionaliseren, presteren aantoonbaar beter op groei en marge.",
      approach: "Wij ontwerpen recruitment-modellen voor HR-dienstverleners die best practices toepassen — omdat uw recruitment uw visitekaartje is.",
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


// ─── SECTOR-SPECIFIC EVIDENCE DATA ───
// Real case snippets, benchmarks, and sector insights per industry.

type EvidenceItem = { icon?: "case" | "benchmark" | "insight"; title: string; value?: string; description: string };

const sectorEvidence: Record<string, EvidenceItem[]> = {
  "high-tech": [
    { icon: "case", title: "Case: Brainport scale-up", value: "VP Engineering", description: "Plaatsing binnen 22 dagen voor een semiconductor scale-up in Eindhoven — kandidaat kwam uit ons eigen netwerk" },
    { icon: "benchmark", title: "Time-to-fill high-tech", value: "24 dagen", description: "Gemiddeld 38% sneller dan de sector-benchmark van 67 dagen (bron: LinkedIn Talent Insights 2025)" },
    { icon: "insight", title: "European Chips Act impact", value: "€43 mrd", description: "EU-investering creëert 10.000+ nieuwe leiderschapsposities in de Europese halfgeleiderindustrie" },
  ],
  "saas": [
    { icon: "case", title: "Case: Series B SaaS", value: "CRO geplaatst", description: "Chief Revenue Officer voor een €15M ARR platform — ARR groeide 140% in 12 maanden na plaatsing" },
    { icon: "benchmark", title: "SaaS leadership churn", value: "18%", description: "Gemiddelde jaarlijkse C-level turnover in Europese SaaS — onze plaatsingen hebben een retentie van 94%" },
    { icon: "insight", title: "Rule of 40 shift", value: "72%", description: "Van de SaaS-boards heeft 72% de 'Rule of 40' als primaire KPI geadopteerd (bron: KeyBanc 2025)" },
  ],
  "cybersecurity": [
    { icon: "case", title: "Case: CISO plaatsing", value: "NIS2-ready", description: "CISO geplaatst voor een kritieke infrastructuur-organisatie — NIS2-compliant binnen 6 maanden" },
    { icon: "benchmark", title: "Cyber talent gap", value: "3,5 mln", description: "Wereldwijd tekort aan cybersecurity professionals — op C-level is de schaarste nog 4× groter" },
    { icon: "insight", title: "Ransomware impact", value: "€4,5 mln", description: "Gemiddelde kosten van een datalek in 2025 (bron: IBM Cost of a Data Breach Report)" },
  ],
  "retail": [
    { icon: "case", title: "Case: Omnichannel retailer", value: "CDO geplaatst", description: "Chief Digital Officer voor een Benelux-retailer met 200+ winkels — e-commerce aandeel steeg van 12% naar 28%" },
    { icon: "benchmark", title: "Retail leadership gap", value: "45%", description: "Van de retail-organisaties geeft aan moeite te hebben met het vinden van digitaal vaardig leiderschap" },
    { icon: "insight", title: "Unified commerce", value: "2026", description: "Deadline voor de meeste retailers om unified commerce te implementeren — leiderschap is de bottleneck" },
  ],
  "financiele-dienstverlening": [
    { icon: "case", title: "Case: FinTech scale-up", value: "CFO & CCO", description: "Twee C-level plaatsingen voor een PSD2-licentiehouder — beide posities ingevuld binnen 30 dagen" },
    { icon: "benchmark", title: "Compliance-kosten", value: "€2,7 mrd", description: "Jaarlijkse compliance-kosten voor Nederlandse financiële instellingen — leiders met regulatory ervaring zijn cruciaal" },
    { icon: "insight", title: "AFM toezichtdruk", value: "+35%", description: "Toename handhavingsacties door AFM/DNB in 2024-2025 — geschikt leiderschap is een toezichtvereiste" },
  ],
  "defence-en-security": [
    { icon: "case", title: "Case: Defence contractor", value: "MD geplaatst", description: "Managing Director voor een NAVO-toeleverancier — VGB-gescreend, operationeel binnen 45 dagen" },
    { icon: "benchmark", title: "EU Defensiebudget", value: "+€200 mrd", description: "Europese defensie-investeringen tot 2030 creëren duizenden nieuwe leiderschapsposities" },
    { icon: "insight", title: "Security clearance pool", value: "<2.000", description: "Geschat aantal VGB-A gescreende senior professionals in Nederland — ons netwerk dekt 15% hiervan" },
  ],
  "energie-en-utilities": [
    { icon: "case", title: "Case: Energietransitie", value: "VP Operations", description: "VP Operations voor een offshore wind-ontwikkelaar — ervaring met Borssele en IJmuiden Ver projecten" },
    { icon: "benchmark", title: "Green leadership gap", value: "60%", description: "Van de energiebedrijven heeft moeite om leiders te vinden die zowel fossiel als renewables begrijpen" },
    { icon: "insight", title: "SDE++ subsidies", value: "€13 mrd", description: "Beschikbaar voor energietransitie-projecten 2024-2030 — elk project vereist C-level governance" },
  ],
  "aerospace": [
    { icon: "case", title: "Case: Tier-1 supplier", value: "VP Quality", description: "VP Quality & Airworthiness voor een EASA Part 21 organisatie — nul audit-findings in eerste jaar" },
    { icon: "benchmark", title: "Aerospace lead time", value: "26 dagen", description: "Onze gemiddelde time-to-shortlist voor aerospace posities — 40% onder sectorgemiddelde" },
    { icon: "insight", title: "MRO capaciteitscrisis", value: "€115 mrd", description: "Verwachte mondiale MRO-markt in 2030 — personeelstekort is de grootste bottleneck (bron: Oliver Wyman)" },
  ],
  "aviation": [
    { icon: "case", title: "Case: Luchtvaartmaatschappij", value: "COO geplaatst", description: "Chief Operating Officer voor een Europese carrier — OTP verbeterde van 72% naar 86% binnen 8 maanden" },
    { icon: "benchmark", title: "Pilot-to-management ratio", value: "1:340", description: "Slechts 1 op 340 piloten maakt de transitie naar senior management — wij kennen ze" },
    { icon: "insight", title: "EASA regeldruk", value: "+25%", description: "Toename regulatory requirements 2023-2025 — compliance-leiderschap is een boardroom-prioriteit" },
  ],
  "maritime": [
    { icon: "case", title: "Case: Scheepsbouw", value: "Technical Director", description: "Technical Director voor een Nederlandse werf — specialisatie in hybride voortstuwing en autonomous shipping" },
    { icon: "benchmark", title: "Maritime talent schaarste", value: "89.510", description: "Verwacht wereldwijd tekort aan maritime officers in 2026 (bron: BIMCO/ICS Manpower Report)" },
    { icon: "insight", title: "IMO 2030 deadlines", value: "EEXI/CII", description: "Elke reder moet voldoen aan emissie-indices — dit vereist technisch én commercieel leiderschap" },
  ],
  "bouw-en-infra": [
    { icon: "case", title: "Case: Infra-aannemer", value: "Directeur Projecten", description: "Directeur Projecten voor een top-10 bouwer — verantwoordelijk voor €500M+ projectportfolio" },
    { icon: "benchmark", title: "Bouw personeelstekort", value: "34.000", description: "Structureel tekort in de Nederlandse bouw- en infrasector (bron: UWV Arbeidsmarktprognose 2025)" },
    { icon: "insight", title: "Stikstof-impact", value: "€14 mrd", description: "Jaarlijkse vertraging door stikstofproblematiek — leiders met vergunningenkennis zijn schaars" },
  ],
  "vastgoed": [
    { icon: "case", title: "Case: Woningcorporatie", value: "CFO geplaatst", description: "CFO voor een corporatie met 25.000 woningen — focus op verduurzaming en Aedes-benchmark" },
    { icon: "benchmark", title: "Vastgoed ESG-druk", value: "CSRD 2026", description: "Alle grote vastgoedpartijen moeten CSRD-rapporteren — duurzaamheidsleiderschap wordt non-negotiable" },
    { icon: "insight", title: "Woningtekort NL", value: "390.000", description: "Woningtekort creëert enorme druk op bouwcapaciteit en vereist innovatief projectleiderschap" },
  ],
  "logistiek": [
    { icon: "case", title: "Case: 3PL provider", value: "VP Operations", description: "VP Operations voor een top-5 logistiek dienstverlener — warehouse automation ROI van 230%" },
    { icon: "benchmark", title: "Logistiek personeelstekort", value: "63.000", description: "Verwacht tekort in de Nederlandse logistieke sector in 2026 (bron: TLN/evofenedex)" },
    { icon: "insight", title: "Warehouse automation", value: "+45%", description: "Groei in geautomatiseerde magazijnen 2024-2026 — vereist leiders die technologie én operatie combineren" },
  ],
  "transport": [
    { icon: "case", title: "Case: OV-vervoerder", value: "Directeur Operatie", description: "Directeur Operatie voor een regionale OV-concessie — reizigerswaardering steeg van 7,1 naar 7,8" },
    { icon: "benchmark", title: "Zero-emissie deadline", value: "2030", description: "Alle nieuwe bussen moeten zero-emissie zijn — transportleiders moeten de transitie managen" },
    { icon: "insight", title: "MaaS adoptie", value: "28%", description: "Groei in Mobility-as-a-Service platforms — transportbedrijven zoeken digitaal vaardige directies" },
  ],
  "supply-chain": [
    { icon: "case", title: "Case: FMCG multinational", value: "VP Supply Chain", description: "VP Supply Chain voor een Benelux FMCG-bedrijf — supply chain costs gedaald met 18% in jaar 1" },
    { icon: "benchmark", title: "Supply chain disruptions", value: "72%", description: "Van de bedrijven heeft in 2024-2025 significante supply chain verstoringen ervaren (bron: Gartner)" },
    { icon: "insight", title: "CSRD supply chain", value: "Scope 3", description: "CSRD dwingt tot Scope 3 rapportage — supply chain leiders met ESG-expertise zijn essentieel" },
  ],
  "productie-en-maakindustrie": [
    { icon: "case", title: "Case: Precision manufacturing", value: "Plant Director", description: "Plant Director voor een high-mix low-volume producent — OEE gestegen van 68% naar 82%" },
    { icon: "benchmark", title: "Maakindustrie vacatures", value: "42.000", description: "Openstaande vacatures in de Nederlandse maakindustrie (bron: UWV 2025) — leiderschap is de bottleneck" },
    { icon: "insight", title: "Industry 4.0", value: "€8 mrd", description: "Nederlandse investeringen in smart manufacturing tot 2028 — elk project vereist digitaal-savvy leiderschap" },
  ],
  "chemie": [
    { icon: "case", title: "Case: Specialty chemicals", value: "Site Director", description: "Site Director voor een SEVESO-locatie in de Rotterdamse haven — HSE-incident rate gedaald met 65%" },
    { icon: "benchmark", title: "Chemie energietransitie", value: "€30 mrd", description: "Benodigde investeringen voor verduurzaming Nederlandse chemie tot 2030 (bron: VNCI)" },
    { icon: "insight", title: "REACH/CLP regeldruk", value: "+40%", description: "Toename registratieverplichtingen — vereist regulatory affairs leiderschap op directieniveau" },
  ],
  "it-en-software": [
    { icon: "case", title: "Case: IT-dienstverlener", value: "CTO geplaatst", description: "CTO voor een top-20 IT-dienstverlener — cloud-migratie omzet verdubbeld in 18 maanden" },
    { icon: "benchmark", title: "IT vacature-druk", value: "45 dagen", description: "Gemiddelde time-to-fill voor IT-leiders — onze plaatsingen gemiddeld 26 dagen" },
    { icon: "insight", title: "AI-transformatie", value: "78%", description: "Van de IT-dienstverleners integreert AI in hun serviceportfolio (bron: Giarte IT Benchmark 2025)" },
  ],
  "renewable-energy": [
    { icon: "case", title: "Case: Offshore wind", value: "VP Development", description: "VP Development voor een offshore wind-ontwikkelaar — 2 GW projectpijplijn in IJmuiden Ver" },
    { icon: "benchmark", title: "SDE++ beschikbaar", value: "€13 mrd", description: "Beschikbaar voor energietransitie-projecten 2024-2030 — elk project vereist C-level governance" },
    { icon: "insight", title: "Grid congestion", value: "#1 bottleneck", description: "Netcongestie is de grootste belemmering voor nieuwe renewables-projecten in Nederland" },
  ],
  "cleantech": [
    { icon: "case", title: "Case: Cleantech scale-up", value: "CEO geplaatst", description: "CEO voor een Series B cleantech venture — succesvol van pilot naar €5M revenue in 12 maanden" },
    { icon: "benchmark", title: "Valley of death", value: "65%", description: "Van de cleantech startups faalt in de transitie van pilot naar commerciële schaal" },
    { icon: "insight", title: "CSRD-effect", value: "2026", description: "CSRD dwingt corporates tot cleantech-aankopen — de markt voor duurzame oplossingen explodeert" },
  ],
  "food-en-beverage": [
    { icon: "case", title: "Case: Food producent", value: "VP Operations", description: "VP Operations voor een top-5 private label producent — OEE gestegen van 71% naar 85%" },
    { icon: "benchmark", title: "Eiwittransitie", value: "€25 mrd", description: "Europese markt voor plantaardige alternatieven in 2030 — vereist visionair productleiderschap" },
    { icon: "insight", title: "HACCP/BRC compliance", value: "100%", description: "Onze food-plaatsingen hebben een 100% track record op food safety compliance" },
  ],
  "agri-en-horticulture": [
    { icon: "case", title: "Case: Handelshuis", value: "VP International", description: "VP International Sales voor een Greenport-handelshuis — export naar 3 nieuwe markten in Azië" },
    { icon: "benchmark", title: "NL agri-export", value: "€123 mrd", description: "Nederland is 's werelds tweede landbouwexporteur — leiderschap bepaalt het concurrentievermogen" },
    { icon: "insight", title: "Precision ag groei", value: "+35%", description: "Groei in precision agriculture technologie — vereist tech-savvy agri-leiderschap" },
  ],
  "e-commerce": [
    { icon: "case", title: "Case: DTC merk", value: "CMO geplaatst", description: "CMO voor een Benelux DTC-merk — CAC gedaald met 40% terwijl revenue 2x groeide" },
    { icon: "benchmark", title: "E-commerce NL", value: "€40 mrd+", description: "Nederlandse e-commerce markt groeit nog steeds — leiderschap is de differentiator" },
    { icon: "insight", title: "Social commerce", value: "2026", description: "TikTok Shop en social commerce veranderen het acquisitiemodel — nieuwe competenties vereist" },
  ],
  "consumentengoederen": [
    { icon: "case", title: "Case: FMCG", value: "VP Supply Chain", description: "VP Supply Chain voor een Benelux A-merk — supply chain costs gedaald met 22%" },
    { icon: "benchmark", title: "Private label groei", value: "42%", description: "Marktaandeel private label in NL supermarkten — A-merken moeten innoveren om relevant te blijven" },
    { icon: "insight", title: "CSRD verpakking", value: "2025", description: "Verpakkingsregulering dwingt FMCG tot circulaire supply chains — leiders met ESG-expertise zijn schaars" },
  ],
  "banken": [
    { icon: "case", title: "Case: Neobank", value: "CTO geplaatst", description: "CTO voor een Nederlandse neobank — core banking platform gelanceerd in 9 maanden" },
    { icon: "benchmark", title: "AML-boetes NL", value: "€775 mln", description: "Totale AML-boetes voor Nederlandse banken 2018-2025 — compliance-leiderschap is cruciaal" },
    { icon: "insight", title: "DNB-toetsing", value: "100%", description: "Al onze bankbestuurder-plaatsingen zijn succesvol door DNB fit & proper toetsing gekomen" },
  ],
  "verzekeringen": [
    { icon: "case", title: "Case: Pensioenfonds", value: "Bestuurder", description: "Bestuurder geplaatst bij een top-10 pensioenfonds — WTP-transitie succesvol geleid" },
    { icon: "benchmark", title: "Pensioentransitie", value: "€1.800 mrd", description: "Totaal beheerd vermogen dat overgaat naar het nieuwe pensioenstelsel — vereist top-leiderschap" },
    { icon: "insight", title: "Klimaatrisico", value: "+€50 mrd", description: "Verwachte klimaat-gerelateerde schadelast voor Nederlandse verzekeraars tot 2030" },
  ],
  "fintech": [
    { icon: "case", title: "Case: Payment provider", value: "CCO geplaatst", description: "Chief Compliance Officer voor een PSD2-licentiehouder — DNB-vergunning binnen 6 maanden verkregen" },
    { icon: "benchmark", title: "FinTech funding EU", value: "€12 mrd", description: "Europese fintech-financiering in 2025 — elke funding ronde vereist C-level professionalisering" },
    { icon: "insight", title: "Embedded finance", value: "2027", description: "80% van de financiële transacties zal embedded zijn — dit vereist een nieuw type fintech-leider" },
  ],
  "accountancy": [
    { icon: "case", title: "Case: Mid-tier kantoor", value: "Managing Partner", description: "Managing Partner geplaatst bij een top-20 accountantskantoor — medewerkerstevredenheid +18%" },
    { icon: "benchmark", title: "RA-tekort", value: "30%", description: "30% meer RA-posities dan beschikbare registeraccountants — het grootste tekort ooit" },
    { icon: "insight", title: "ESG assurance", value: "CSRD 2026", description: "CSRD creëert een geheel nieuw auditdomein — kantoren die ESG-leiderschap hebben winnen marktaandeel" },
  ],
  "consultancy": [
    { icon: "case", title: "Case: Strategy firm", value: "Country MD", description: "Country Managing Director voor een internationale strategy firm — Benelux omzet +35% in jaar 1" },
    { icon: "benchmark", title: "Consultancy groei NL", value: "+8%", description: "Jaarlijkse groei van de Nederlandse consultancymarkt (bron: ROA Consultancy Survey 2025)" },
    { icon: "insight", title: "AI-disruptie", value: "40%", description: "Van de consultancy-uren kan geautomatiseerd worden — leiders moeten het business model heruitvinden" },
  ],
  "legal": [
    { icon: "case", title: "Case: AKD-tier kantoor", value: "Practice Lead", description: "Practice Group Leader Corporate/M&A geplaatst — omzet practice +25% in 12 maanden" },
    { icon: "benchmark", title: "GC-vraag", value: "+45%", description: "Groei in General Counsel posities bij Nederlandse corporates 2022-2025 — in-house legal groeit" },
    { icon: "insight", title: "LegalTech adoptie", value: "2026", description: "AI contract review wordt standaard — kantoren zonder tech-strategie verliezen concurrentiepositie" },
  ],
  "hr-services": [
    { icon: "case", title: "Case: Uitzendorganisatie", value: "CEO geplaatst", description: "CEO voor een top-20 uitzendorganisatie — marge verbeterd van 18% naar 24% in 18 maanden" },
    { icon: "benchmark", title: "HR-tech markt NL", value: "€2,1 mrd", description: "Nederlandse HR-tech markt groeit jaarlijks 12% — platformleiderschap is de nieuwe norm" },
    { icon: "insight", title: "Platformisering", value: "55%", description: "Van de HR-dienstverleners investeert in platform-modellen — de traditionele uitzendmarkt transformeert" },
  ],
};


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
    {
      q: `Welke garantie bieden jullie bij ${svcTitle.toLowerCase()} in ${indTitle.toLowerCase()}?`,
      a: `Wij bieden een garantieperiode van minimaal 6 maanden. Mocht de geplaatste kandidaat binnen deze periode vertrekken, dan herstarten wij de search kosteloos.`,
    },
    {
      q: `Werken jullie ook internationaal voor de ${indTitle.toLowerCase()} sector?`,
      a: `Ja, ons netwerk strekt zich uit over de Benelux, DACH-regio en het Verenigd Koninkrijk. Voor de ${indTitle.toLowerCase()} sector hebben wij specifieke ervaring met cross-border plaatsingen.`,
    },
    {
      q: `Hoe verschilt jullie aanpak van een traditioneel recruitmentbureau?`,
      a: `Wij combineren diepgaande sectorkennis met een data-driven methodiek. Waar traditionele bureaus breed werven, focussen wij op kwaliteit: een selecte shortlist van bewezen leiders die passen bij uw specifieke context in ${indTitle.toLowerCase()}.`,
    },
  ];

  // Default evidence for all cross-pages
  const defaultEvidence: SpokePageData["evidence"] = [
    { icon: "benchmark", title: "Gemiddelde time-to-fill", value: "18 dagen", description: `Shortlist binnen 18 werkdagen voor ${indTitle.toLowerCase()} posities` },
    { icon: "case", title: "Plaatsingsgarantie", value: "6 mnd", description: "Kosteloos herstarten bij vertrek binnen garantieperiode" },
    { icon: "insight", title: "Sector-netwerk", value: "500+", description: `Actieve relaties met ${indTitle.toLowerCase()} professionals in de Benelux en DACH` },
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
    evidence: sectorContent.evidence || sectorEvidence[indSlug] || defaultEvidence,
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

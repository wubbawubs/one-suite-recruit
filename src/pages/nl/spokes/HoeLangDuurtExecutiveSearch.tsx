import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Hoe Lang Duurt Executive Search? Timeline & Doorlooptijd | OneTime Recruit",
  metaDescription: "Hoe lang duurt een executive search traject? Ontdek de gemiddelde doorlooptijd per fase, van intake tot plaatsing. Inclusief tips om het proces te versnellen.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Executive Search", href: "/nl/diensten/executive-search" },
    { label: "Timeline Executive Search" },
  ],
  heroLabel: "Doorlooptijd",
  heroTitle: "Hoe lang duurt",
  heroHighlight: "executive search?",
  heroDescription: "Een realistische tijdslijn per fase — en wat u zelf kunt doen om het proces te versnellen.",
  sections: [
    {
      title: "Gemiddelde doorlooptijd: 4-8 weken",
      content: "De totale doorlooptijd van een executive search traject — van eerste intake tot getekend contract — varieert doorgaans tussen de 4 en 8 weken. Bij OneTime Recruit is de gemiddelde tijd van intake tot shortlist 18 werkdagen.\n\nDe daadwerkelijke doorlooptijd hangt af van meerdere factoren: de complexiteit van de rol, de schaarste in de markt, de snelheid van besluitvorming aan uw kant, en of er sprake is van een [confidential search](/nl/confidential-search).",
    },
    {
      title: "Fase 1: Intake & profieldefinitie (dag 1-2)",
      content: "De eerste fase draait om het diepgaand begrijpen van uw organisatie, de rol en het ideale kandidaatprofiel. Een grondige intake bespaart later tijd doordat het searchteam precies weet wat er gezocht wordt.\n\nDeze fase omvat gesprekken met key stakeholders, het vaststellen van must-haves versus nice-to-haves, en het definiëren van de zoekstrategie.",
    },
    {
      title: "Fase 2: Marktverkenning & sourcing (dag 3-8)",
      content: "Het searchteam identificeert potentiële kandidaten via netwerk, research en gerichte marktbenadering. Bij OneTime Recruit hebben we toegang tot een netwerk van 7.500+ executives.\n\nDeze fase kan versneld worden als het bureau al een bestaand netwerk heeft in uw sector. Bij een niche of schaars profiel kan deze fase langer duren.",
    },
    {
      title: "Fase 3: Assessment & shortlist (dag 9-14)",
      content: "Kandidaten worden geëvalueerd via competentie-based interviews, [cultuurfit-analyse](/nl/culture-fit-vs-culture-add) en [referentiechecks](/nl/referentiechecks). Het resultaat is een shortlist van 3-5 gekwalificeerde kandidaten.",
    },
    {
      title: "Fase 4: Presentatie & selectie (dag 15-18+)",
      content: "U ontvangt uitgebreide kandidaatprofielen met de aanbeveling van het searchteam. Daarna volgen interviews, eventuele tweede rondes en de uiteindelijke selectie.\n\nDeze fase is sterk afhankelijk van uw interne besluitvorming. Tip: plan de interviews ruim van tevoren en betrek de juiste stakeholders vroeg in het proces.",
    },
    {
      title: "Tips om de doorlooptijd te verkorten",
      content: "Er zijn concrete stappen die u kunt nemen om het executive search proces te versnellen zonder concessies aan kwaliteit:",
      items: [
        "Bereid de intake goed voor — hoe scherper het profiel, hoe sneller de search",
        "Zorg dat besluitvormers beschikbaar zijn voor interviews",
        "Stel een duidelijke timeline op met harde deadlines",
        "Beperk het aantal interviewrondes tot maximaal twee",
        "Geef snel feedback na elke kandidaatpresentatie",
        "Overweeg parallel te interviewen in plaats van sequentieel",
      ],
    },
  ],
  faqs: [
    { q: "Kan executive search sneller dan 4 weken?", a: "Ja, bij een scherp profiel en snelle besluitvorming kan de shortlist al na 2-3 weken klaar zijn. OneTime Recruit haalt gemiddeld 18 werkdagen van intake tot shortlist." },
    { q: "Waarom duurt executive search langer dan reguliere werving?", a: "Omdat executive search zich richt op passieve kandidaten die niet actief zoeken. Het benaderen, evalueren en overtuigen van deze kandidaten kost meer tijd, maar levert significant betere matches op." },
    { q: "Wat vertraagt een executive search traject het meest?", a: "De meest voorkomende vertraging is langzame besluitvorming aan de opdrachtgeverszijde: uitgestelde interviews, wijzigende profieleisen of onbereikbare stakeholders." },
  ],
  pillarLink: { label: "Terug naar Executive Search", href: "/nl/diensten/executive-search" },
  relatedLinks: [
    { label: "Wat is executive search?", href: "/nl/wat-is-executive-search" },
    { label: "Kosten executive search", href: "/nl/kosten-executive-search" },
    { label: "Hiring governance & reporting", href: "/nl/hiring-governance-reporting" },
    { label: "Onboarding executives", href: "/nl/onboarding-executives" },
  ],
};

export default function HoeLangDuurtExecutiveSearch() {
  return <SpokePage data={data} />;
}

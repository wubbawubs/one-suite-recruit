import { SpokePage, type SpokePageData } from "@/components/layout/SpokePage";

const data: SpokePageData = {
  metaTitle: "Confidential Search: Discreet Leadership Hiring | OneTime Recruit",
  metaDescription: "Confidential executive search voor vertrouwelijke leiderschapswisselingen. Leer hoe discreet leadership hiring werkt en wanneer u het inzet.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Executive Search", href: "/nl/executive-search" },
    { label: "Confidential Search" },
  ],
  heroLabel: "Vertrouwelijk",
  heroTitle: "Confidential search:",
  heroHighlight: "discreet leadership hiring",
  heroDescription: "Wanneer discretie essentieel is: hoe u vertrouwelijk een nieuwe leider vindt zonder interne onrust.",
  sections: [
    {
      title: "Wat is confidential search?",
      content: "Confidential search — ook wel 'blind search' of 'discreet search' genoemd — is een executive search traject waarbij de identiteit van de opdrachtgever niet wordt onthuld aan kandidaten totdat een vergevorderd stadium in het proces is bereikt.\n\nDit type search wordt ingezet wanneer bekendmaking van de vacature schadelijk zou zijn voor de organisatie, de huidige functiehouder, of de marktpositie.",
    },
    {
      title: "Wanneer is confidential search nodig?",
      content: "Er zijn specifieke situaties waarin een vertrouwelijke aanpak de enige verantwoorde optie is:",
      items: [
        "Vervanging van een zittende bestuurder die nog in functie is",
        "Strategische herstructurering die nog niet publiek is",
        "Fusie of overname waarbij leiderschapswisselingen plaatsvinden",
        "Beursgenoteerde organisaties waar vacatures koersgevoelig zijn",
        "Juridische geschillen met de huidige functiehouder",
        "Concurrentiegevoelige posities waarbij marktinformatie beschermd moet worden",
      ],
    },
    {
      title: "Hoe werkt het proces?",
      content: "Bij een confidential search wordt de zoekstrategie aangepast om maximale discretie te waarborgen. Het searchbureau benadert kandidaten zonder de naam van de opdrachtgever te noemen. In plaats daarvan wordt een anoniem bedrijfsprofiel gebruikt dat sector, omvang en uitdagingen beschrijft.\n\nKandidaten ontvangen pas de naam van de organisatie na ondertekening van een geheimhoudingsverklaring (NDA) en na positieve eerste screening. Dit beschermt zowel de opdrachtgever als de kandidaat.",
    },
    {
      title: "De rol van het searchbureau bij discretie",
      content: "Een ervaren searchbureau is cruciaal bij confidential search. Het bureau fungeert als vertrouwelijk intermediair en beheert alle communicatie:",
      items: [
        "Alle kandidaatcommunicatie loopt via het bureau, nooit direct",
        "Gebruik van anonieme functieprofielen in de marktbenadering",
        "NDA's worden afgenomen voordat gevoelige informatie wordt gedeeld",
        "Referentiechecks worden uitgesteld tot de finale fase",
        "Interne communicatie bij de opdrachtgever wordt beperkt tot need-to-know basis",
      ],
    },
    {
      title: "Risico's en aandachtspunten",
      content: "Hoewel confidential search bescherming biedt, zijn er ook aandachtspunten waarmee rekening gehouden moet worden:\n\nHet proces kan langer duren omdat kandidaten extra zekerheid nodig hebben voordat zij hun huidige positie overwegen te verlaten. De anonimiteit kan sommige kandidaten afschrikken. En er is altijd het risico dat de vertrouwelijkheid onbedoeld wordt doorbroken.\n\nEen ervaren searchbureau minimaliseert deze risico's door strikte protocollen en bewezen processen.",
    },
  ],
  faqs: [
    { q: "Hoe lang duurt een confidential search?", a: "Gemiddeld 2-4 weken langer dan een reguliere executive search, omdat extra stappen nodig zijn voor NDA's, anonieme benadering en vertrouwelijke communicatie." },
    { q: "Kunnen kandidaten achterhalen wie de opdrachtgever is?", a: "Bij een correct uitgevoerde confidential search is de kans hierop zeer klein. Het searchbureau gebruikt anonieme profielen en deelt pas bedrijfsinformatie na ondertekening van een NDA." },
    { q: "Is confidential search duurder?", a: "Bij OneTime Recruit hanteren wij hetzelfde vaste tarief. De extra inspanning voor discretie is inbegrepen in onze standaard dienstverlening." },
  ],
  pillarLink: { label: "Terug naar Executive Search", href: "/nl/executive-search" },
  relatedLinks: [
    { label: "Wat is executive search?", href: "/nl/wat-is-executive-search" },
    { label: "Kosten executive search", href: "/nl/kosten-executive-search" },
    { label: "Board & commissarissen search", href: "/nl/board-commissarissen-search" },
    { label: "Defence & high-tech recruitment", href: "/nl/defence-hightech-recruitment" },
  ],
};

export default function ConfidentialSearch() {
  return <SpokePage data={data} />;
}

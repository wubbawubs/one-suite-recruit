import { SpokePage } from "@/components/layout/SpokePage";

const data = {
  metaTitle: "Headhunter Nederland: Executive Search Bureau | OneTime Recruit",
  metaDescription: "Op zoek naar een headhunter in Nederland? OneTime Recruit is uw executive search partner voor C-level en directieposities. Vaste tarieven, 18 dagen doorlooptijd.",
  breadcrumbs: [
    { label: "Home", href: "/nl" },
    { label: "Executive Search", href: "/nl/diensten/executive-search" },
    { label: "Headhunter Nederland" },
  ],
  heroLabel: "Executive Headhunting",
  heroTitle: "Headhunter",
  heroHighlight: "Nederland",
  heroDescription: "Op zoek naar een betrouwbare headhunter voor senior posities? OneTime Recruit combineert de persoonlijke aanpak van een headhunter met de methodiek van executive search.",
  sections: [
    {
      title: "Wat doet een headhunter?",
      content: "Een headhunter is een recruitment-specialist die proactief kandidaten benadert voor senior en executive posities. In tegenstelling tot reguliere recruiters wacht een headhunter niet op sollicitaties, maar identificeert en benadert actief de beste leiders in de markt — inclusief kandidaten die niet actief op zoek zijn.\n\nIn Nederland is headhunting de gangbare methode voor het invullen van [C-level](/nl/c-level-recruitment), [directie](/nl/directie-werving) en VP-posities. De beste kandidaten voor deze rollen staan zelden open op jobboards. Zij worden gevonden via netwerken, referrals en gerichte [executive search](/nl/wat-is-executive-search).",
    },
    {
      title: "Headhunter vs. executive search bureau: wat kiest u?",
      content: "De termen worden vaak door elkaar gebruikt, maar er zijn belangrijke verschillen. Een traditionele headhunter werkt vaak solo of in een klein team, op commissiebasis per plaatsing. Een executive search bureau zoals OneTime Recruit biedt een gestructureerd, methodisch proces met assessment, cultuurfit-analyse en garantieregeling.\n\nBij OneTime Recruit krijgt u het beste van beide: de persoonlijke benadering en het netwerk van een headhunter, gecombineerd met de kwaliteitsborging en structuur van executive search. Met vaste tarieven in plaats van procentuele fees.",
      items: [
        "Persoonlijke, telefonische benadering van kandidaten",
        "Gestructureerd assessment met STAR-methodiek",
        "Cultuurfit-analyse en leiderschapspotentieel-evaluatie",
        "Vaste tarieven — geen 25-35% van het jaarsalaris",
        "Garantieregeling op elke plaatsing",
      ],
    },
    {
      title: "Waarom OneTime Recruit als uw headhunter?",
      content: "Wij onderscheiden ons op drie punten: transparantie, snelheid en kwaliteit. Onze [vaste tarieven](/nl/kosten-executive-search) elimineren de perverse prikkel om het hoogste salaris te adviseren. Onze gemiddelde [doorlooptijd van 18 dagen](/nl/hoe-lang-duurt-executive-search) is de helft van het branchegemiddelde. En ons retentiepercentage van 95% na 12 maanden bewijst dat onze matches duurzaam zijn.\n\nDaarnaast bieden wij iets unieks: een dedicated [talent pool per vacature](/nl/talent-pool-per-vacature) die u behoudt. Bij toekomstige vacatures kunt u direct uit deze pool putten — zonder een nieuwe search te starten.",
    },
  ],
  faqs: [
    { q: "Wat kost een headhunter in Nederland?", a: "Traditionele headhunters rekenen 25-35% van het jaarsalaris. OneTime Recruit werkt met vaste tarieven, ongeacht het salarisniveau. Dit betekent voorspelbare kosten en geen verborgen verrassingen." },
    { q: "Hoe lang duurt headhunting gemiddeld?", a: "Het branchegemiddelde is 6-12 weken. Bij OneTime Recruit leveren wij gemiddeld binnen 18 werkdagen een shortlist van 3-5 gekwalificeerde kandidaten." },
    { q: "Voor welke sectoren werken jullie als headhunter?", a: "Onze kernspecialisaties zijn Aviation, Defence & High-Tech, SaaS/IT, Finance en Operations. Daarnaast bedienen wij diverse andere sectoren op executive niveau." },
  ],
  pillarLink: { label: "Terug naar Executive Search", href: "/nl/diensten/executive-search" },
  relatedLinks: [
    { label: "Executive Search vs. Headhunter", href: "/nl/executive-search-vs-headhunter" },
    { label: "Kosten Executive Search", href: "/nl/kosten-executive-search" },
    { label: "Werving en Selectie", href: "/nl/werving-en-selectie" },
    { label: "Confidential Search", href: "/nl/confidential-search" },
  ],
  ctaTitle: "Op zoek naar een headhunter?",
  ctaDescription: "Plan een vrijblijvend gesprek en ontdek hoe wij uw search aanpakken.",
};

export default function HeadhunterNederland() {
  return <SpokePage data={data} />;
}
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { WhySection } from "@/components/sections/WhySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { TestimonialQuote } from "@/components/sections/TestimonialQuote";
import { PageMeta } from "@/components/PageMeta";
import { getAlternates, nlBreadcrumbs } from "@/lib/seo";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OneTime Recruit",
  url: "https://onetimerecruit.nl",
  logo: "https://onetimerecruit.nl/logo.png",
  description: "One Time Recruit is dé specialist in executive search en leiderschap voor enterprise organisaties in Nederland.",
  address: { "@type": "PostalAddress", addressLocality: "Amsterdam", addressCountry: "NL" },
  contactPoint: { "@type": "ContactPoint", telephone: "+31-6-17226186", contactType: "sales", availableLanguage: "Dutch" },
  sameAs: ["https://www.linkedin.com/company/onetimerecruit/"],
};

const NLHome = () => {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="One Time Recruit — Executive Search & Leiderschap"
        description="One Time Recruit is dé specialist in executive search. Wij vinden C-level en senior leiders voor enterprise organisaties in Nederland."
        jsonLd={orgJsonLd}
        locale="nl_NL"
        alternates={getAlternates("home", ["nl"])}
      />
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ProblemSection lang="nl" />
        <ServicesSection />
        <TestimonialQuote
          quote="One Time begreep direct welk type leiderschap wij zochten. De shortlist was kwalitatief uitzonderlijk."
          author="Directie"
          company="Arvoo"
        />
        <ComparisonSection lang="nl" />
        <WhySection />
        <ProcessSection />
        <TestimonialQuote
          quote="Van intake tot plaatsing liep alles vlekkeloos. De kandidaat draait inmiddels ruim een jaar uitstekend mee."
          author="Directeur"
          company="Energiebehoud"
          variant="dark"
        />
        <CaseStudiesSection />
        <InsightsSection />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
};

export default NLHome;

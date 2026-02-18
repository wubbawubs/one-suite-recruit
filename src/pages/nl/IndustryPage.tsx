import { useParams, Navigate, Link } from "react-router-dom";
import { SpokePage } from "@/components/layout/SpokePage";
import { getIndustryBySlug } from "@/data/industries";
import { serviceDefinitions } from "@/data/industry-services";
import { ArrowRight } from "lucide-react";

export default function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  if (!industry) {
    return <Navigate to="/nl/industries" replace />;
  }

  // Inject service cross-links into relatedLinks
  const serviceLinks = serviceDefinitions.map((s) => ({
    label: `${s.shortTitle} in ${industry.title.toLowerCase()}`,
    href: `/nl/industries/${industry.slug}/${s.slug}`,
  }));

  const enhancedData = {
    ...industry.pageData,
    relatedLinks: [
      ...serviceLinks,
      ...industry.pageData.relatedLinks,
    ],
  };

  return <SpokePage data={enhancedData} />;
}

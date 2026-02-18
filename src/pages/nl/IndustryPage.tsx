import { useParams, Navigate } from "react-router-dom";
import { SpokePage } from "@/components/layout/SpokePage";
import { getIndustryBySlug } from "@/data/industries";

export default function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  if (!industry) {
    return <Navigate to="/nl/industries" replace />;
  }

  return <SpokePage data={industry.pageData} />;
}

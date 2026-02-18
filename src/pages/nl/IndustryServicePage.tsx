import { useParams, Navigate } from "react-router-dom";
import { SpokePage } from "@/components/layout/SpokePage";
import { getIndustryBySlug } from "@/data/industries";
import { getServiceBySlug, generateIndustryServicePage } from "@/data/industry-services";

export default function IndustryServicePage() {
  const { slug, service } = useParams<{ slug: string; service: string }>();
  
  const industry = slug ? getIndustryBySlug(slug) : undefined;
  const serviceDef = service ? getServiceBySlug(service) : undefined;

  if (!industry || !serviceDef) {
    return <Navigate to="/nl/industries" replace />;
  }

  const pageData = generateIndustryServicePage(industry, serviceDef);

  return <SpokePage data={pageData} />;
}

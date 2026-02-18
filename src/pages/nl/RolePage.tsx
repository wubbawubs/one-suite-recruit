import { useParams, Navigate } from "react-router-dom";
import { SpokePage } from "@/components/layout/SpokePage";
import { getRoleBySlug } from "@/data/roles";

export default function RolePage() {
  const { slug } = useParams<{ slug: string }>();
  const role = slug ? getRoleBySlug(slug) : undefined;

  if (!role) {
    return <Navigate to="/nl/functies" replace />;
  }

  return <SpokePage data={role.pageData} />;
}

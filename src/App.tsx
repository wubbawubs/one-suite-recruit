import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import NLHome from "./pages/nl/Index";
import NLDiensten from "./pages/nl/Diensten";
import NLExecutiveSearch from "./pages/nl/ExecutiveSearch";
import NLOverOns from "./pages/nl/OverOns";
import NLContact from "./pages/nl/Contact";
import NLVacatures from "./pages/nl/Vacatures";
import NLOpdrachtgevers from "./pages/nl/Opdrachtgevers";
import NLCLevelRecruitment from "./pages/nl/CLevelRecruitment";
import NLAssessmentSelectie from "./pages/nl/AssessmentSelectie";
import NLIndustries from "./pages/nl/Industries";
import NLRecruitmentOperatingModel from "./pages/nl/RecruitmentOperatingModel";
import NLEmployerBrandingRetention from "./pages/nl/EmployerBrandingRetention";
// Executive Search spokes
import WatIsExecutiveSearch from "./pages/nl/spokes/WatIsExecutiveSearch";
import ExecutiveSearchVsHeadhunter from "./pages/nl/spokes/ExecutiveSearchVsHeadhunter";
import KostenExecutiveSearch from "./pages/nl/spokes/KostenExecutiveSearch";
import HoeLangDuurtExecutiveSearch from "./pages/nl/spokes/HoeLangDuurtExecutiveSearch";
import ConfidentialSearch from "./pages/nl/spokes/ConfidentialSearch";
// C-level spokes
import CEORecruitment from "./pages/nl/spokes/CEORecruitment";
import CFORecruitment from "./pages/nl/spokes/CFORecruitment";
import CTOCIORecruitment from "./pages/nl/spokes/CTOCIORecruitment";
import CHRORecruitment from "./pages/nl/spokes/CHRORecruitment";
import BoardCommissarissenSearch from "./pages/nl/spokes/BoardCommissarissenSearch";
// Assessment spokes
import STARInterviewGuide from "./pages/nl/spokes/STARInterviewGuide";
import AssessmentInzetten from "./pages/nl/spokes/AssessmentInzetten";
import Referentiechecks from "./pages/nl/spokes/Referentiechecks";
import CultureFitVsCultureAdd from "./pages/nl/spokes/CultureFitVsCultureAdd";
// Recruitment model spokes
import TalentPoolPerVacature from "./pages/nl/spokes/TalentPoolPerVacature";
import RecruitmentAsAService from "./pages/nl/spokes/RecruitmentAsAService";
import AbonnementRecruitment from "./pages/nl/spokes/AbonnementRecruitment";
import HiringGovernanceReporting from "./pages/nl/spokes/HiringGovernanceReporting";
// Industry spokes
import AviationRecruitment from "./pages/nl/spokes/AviationRecruitment";
import DefenceHightechRecruitment from "./pages/nl/spokes/DefenceHightechRecruitment";
import SaaSITLeadership from "./pages/nl/spokes/SaaSITLeadership";
import FinanceRiskCompliance from "./pages/nl/spokes/FinanceRiskCompliance";
import OperationsSupplyChain from "./pages/nl/spokes/OperationsSupplyChain";
// Employer branding spokes
import LeadershipRetention from "./pages/nl/spokes/LeadershipRetention";
import OnboardingExecutives from "./pages/nl/spokes/OnboardingExecutives";
import EmployerBrandSeniorTalent from "./pages/nl/spokes/EmployerBrandSeniorTalent";
import CompensationBenefitsTrends from "./pages/nl/spokes/CompensationBenefitsTrends";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/nl" replace />} />

          {/* Dutch (NL) routes */}
          <Route path="/nl" element={<NLHome />} />
          <Route path="/nl/diensten" element={<NLDiensten />} />
          <Route path="/nl/executive-search" element={<NLExecutiveSearch />} />
          <Route path="/nl/over-ons" element={<NLOverOns />} />
          <Route path="/nl/contact" element={<NLContact />} />
          <Route path="/nl/vacatures" element={<NLVacatures />} />
          <Route path="/nl/opdrachtgevers" element={<NLOpdrachtgevers />} />

          {/* NL Pillar/Hub pages */}
          <Route path="/nl/c-level-recruitment" element={<NLCLevelRecruitment />} />
          <Route path="/nl/assessment-selectie" element={<NLAssessmentSelectie />} />
          <Route path="/nl/industries" element={<NLIndustries />} />
          <Route path="/nl/recruitment-operating-model" element={<NLRecruitmentOperatingModel />} />
          <Route path="/nl/employer-branding-retention" element={<NLEmployerBrandingRetention />} />

          {/* Executive Search spokes */}
          <Route path="/nl/wat-is-executive-search" element={<WatIsExecutiveSearch />} />
          <Route path="/nl/executive-search-vs-headhunter" element={<ExecutiveSearchVsHeadhunter />} />
          <Route path="/nl/kosten-executive-search" element={<KostenExecutiveSearch />} />
          <Route path="/nl/hoe-lang-duurt-executive-search" element={<HoeLangDuurtExecutiveSearch />} />
          <Route path="/nl/confidential-search" element={<ConfidentialSearch />} />

          {/* C-level spokes */}
          <Route path="/nl/ceo-recruitment" element={<CEORecruitment />} />
          <Route path="/nl/cfo-recruitment" element={<CFORecruitment />} />
          <Route path="/nl/cto-cio-recruitment" element={<CTOCIORecruitment />} />
          <Route path="/nl/chro-recruitment" element={<CHRORecruitment />} />
          <Route path="/nl/board-commissarissen-search" element={<BoardCommissarissenSearch />} />

          {/* Assessment spokes */}
          <Route path="/nl/star-interview-guide" element={<STARInterviewGuide />} />
          <Route path="/nl/assessment-inzetten" element={<AssessmentInzetten />} />
          <Route path="/nl/referentiechecks" element={<Referentiechecks />} />
          <Route path="/nl/culture-fit-vs-culture-add" element={<CultureFitVsCultureAdd />} />

          {/* Recruitment model spokes */}
          <Route path="/nl/talent-pool-per-vacature" element={<TalentPoolPerVacature />} />
          <Route path="/nl/recruitment-as-a-service" element={<RecruitmentAsAService />} />
          <Route path="/nl/abonnement-recruitment" element={<AbonnementRecruitment />} />
          <Route path="/nl/hiring-governance-reporting" element={<HiringGovernanceReporting />} />

          {/* Industry spokes */}
          <Route path="/nl/aviation-recruitment" element={<AviationRecruitment />} />
          <Route path="/nl/defence-hightech-recruitment" element={<DefenceHightechRecruitment />} />
          <Route path="/nl/saas-it-leadership" element={<SaaSITLeadership />} />
          <Route path="/nl/finance-risk-compliance" element={<FinanceRiskCompliance />} />
          <Route path="/nl/operations-supply-chain" element={<OperationsSupplyChain />} />

          {/* Employer branding spokes */}
          <Route path="/nl/leadership-retention" element={<LeadershipRetention />} />
          <Route path="/nl/onboarding-executives" element={<OnboardingExecutives />} />
          <Route path="/nl/employer-brand-senior-talent" element={<EmployerBrandSeniorTalent />} />
          <Route path="/nl/compensation-benefits-trends" element={<CompensationBenefitsTrends />} />

          {/* Future: /de and /en routes */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

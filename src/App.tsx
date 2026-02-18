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
import NLLeadershipAdvisory from "./pages/nl/LeadershipAdvisory";
// DE pages
import DEHome from "./pages/de/Index";
import DELeistungen from "./pages/de/Leistungen";
import DEKontakt from "./pages/de/Kontakt";
import DEUeberUns from "./pages/de/UeberUns";
import DEStellenangebote from "./pages/de/Stellenangebote";
import DEFuerArbeitgeber from "./pages/de/FuerArbeitgeber";
// EN pages
import ENHome from "./pages/en/Index";
import ENServices from "./pages/en/Services";
import ENContact from "./pages/en/Contact";
import ENAbout from "./pages/en/About";
import ENJobs from "./pages/en/Jobs";
import ENForEmployers from "./pages/en/ForEmployers";
import NLAssessmentSelectie from "./pages/nl/AssessmentSelectie";
import NLIndustriesHub from "./pages/nl/IndustriesHub";
import NLIndustryPage from "./pages/nl/IndustryPage";
import NLRolesHub from "./pages/nl/RolesHub";
import NLRolePage from "./pages/nl/RolePage";
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
// (Old industry spokes now served by dynamic /nl/industries/:slug route)
// Employer branding spokes
import LeadershipRetention from "./pages/nl/spokes/LeadershipRetention";
import OnboardingExecutives from "./pages/nl/spokes/OnboardingExecutives";
import EmployerBrandSeniorTalent from "./pages/nl/spokes/EmployerBrandSeniorTalent";
import CompensationBenefitsTrends from "./pages/nl/spokes/CompensationBenefitsTrends";
// New high-volume spokes
import WervingEnSelectie from "./pages/nl/spokes/WervingEnSelectie";
import HeadhunterNederland from "./pages/nl/spokes/HeadhunterNederland";
import InterimManagement from "./pages/nl/spokes/InterimManagement";
import DirectieWerving from "./pages/nl/spokes/DirectieWerving";
import TalentAcquisitionStrategy from "./pages/nl/spokes/TalentAcquisitionStrategy";

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
          <Route path="/nl/over-ons" element={<NLOverOns />} />
          <Route path="/nl/contact" element={<NLContact />} />
          <Route path="/nl/vacatures" element={<NLVacatures />} />
          <Route path="/nl/opdrachtgevers" element={<NLOpdrachtgevers />} />

          {/* NL P1 Money Pages — /nl/diensten/... */}
          <Route path="/nl/diensten/executive-search" element={<NLExecutiveSearch />} />
          <Route path="/nl/diensten/c-level-recruitment" element={<NLCLevelRecruitment />} />
          <Route path="/nl/diensten/leadership-advisory" element={<NLLeadershipAdvisory />} />
          <Route path="/nl/diensten/recruitment-operating-model" element={<NLRecruitmentOperatingModel />} />
          <Route path="/nl/diensten/assessment-selectie" element={<NLAssessmentSelectie />} />

          {/* Redirects from old URLs */}
          <Route path="/nl/executive-search" element={<Navigate to="/nl/diensten/executive-search" replace />} />
          <Route path="/nl/c-level-recruitment" element={<Navigate to="/nl/diensten/c-level-recruitment" replace />} />
          <Route path="/nl/recruitment-operating-model" element={<Navigate to="/nl/diensten/recruitment-operating-model" replace />} />
          <Route path="/nl/assessment-selectie" element={<Navigate to="/nl/diensten/assessment-selectie" replace />} />

          {/* NL other hubs */}
          <Route path="/nl/industries" element={<NLIndustriesHub />} />
          <Route path="/nl/industries/:slug" element={<NLIndustryPage />} />
          <Route path="/nl/functies" element={<NLRolesHub />} />
          <Route path="/nl/functies/:slug" element={<NLRolePage />} />
          <Route path="/nl/employer-branding-retention" element={<NLEmployerBrandingRetention />} />

          {/* Redirects from old industry URLs to new /nl/industries/... */}
          <Route path="/nl/aviation-recruitment" element={<Navigate to="/nl/industries/aviation" replace />} />
          <Route path="/nl/defence-hightech-recruitment" element={<Navigate to="/nl/industries/defence-en-security" replace />} />
          <Route path="/nl/saas-it-leadership" element={<Navigate to="/nl/industries/saas" replace />} />
          <Route path="/nl/finance-risk-compliance" element={<Navigate to="/nl/industries/financiele-dienstverlening" replace />} />
          <Route path="/nl/operations-supply-chain" element={<Navigate to="/nl/industries/supply-chain" replace />} />

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

          {/* Old industry spokes now redirect via routes above */}

          {/* Employer branding spokes */}
          <Route path="/nl/leadership-retention" element={<LeadershipRetention />} />
          <Route path="/nl/onboarding-executives" element={<OnboardingExecutives />} />
          <Route path="/nl/employer-brand-senior-talent" element={<EmployerBrandSeniorTalent />} />
          <Route path="/nl/compensation-benefits-trends" element={<CompensationBenefitsTrends />} />

          {/* New high-volume spokes */}
          <Route path="/nl/werving-en-selectie" element={<WervingEnSelectie />} />
          <Route path="/nl/headhunter-nederland" element={<HeadhunterNederland />} />
          <Route path="/nl/interim-management" element={<InterimManagement />} />
          <Route path="/nl/directie-werving" element={<DirectieWerving />} />
          <Route path="/nl/talent-acquisition-strategy" element={<TalentAcquisitionStrategy />} />

          {/* German (DE) routes */}
          <Route path="/de" element={<DEHome />} />
          <Route path="/de/leistungen" element={<DELeistungen />} />
          <Route path="/de/kontakt" element={<DEKontakt />} />
          <Route path="/de/ueber-uns" element={<DEUeberUns />} />
          <Route path="/de/stellenangebote" element={<DEStellenangebote />} />
          <Route path="/de/fuer-arbeitgeber" element={<DEFuerArbeitgeber />} />

          {/* English (EN) routes */}
          <Route path="/en" element={<ENHome />} />
          <Route path="/en/services" element={<ENServices />} />
          <Route path="/en/contact" element={<ENContact />} />
          <Route path="/en/about" element={<ENAbout />} />
          <Route path="/en/jobs" element={<ENJobs />} />
          <Route path="/en/for-employers" element={<ENForEmployers />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

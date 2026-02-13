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

          {/* Future: /de and /en routes */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

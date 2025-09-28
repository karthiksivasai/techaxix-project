import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import About from "./pages/About";
import Directors from "./pages/Directors";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import WebTechnology from "./pages/WebTechnology";
import ApplicationDevelopment from "./pages/ApplicationDevelopment";
import TestingServices from "./pages/TestingServices";
import ConsultingServices from "./pages/ConsultingServices";
import CloudComputing from "./pages/CloudComputing";
import DigitalTransformation from "./pages/DigitalTransformation";
import OracleFusionCloud from "./pages/OracleFusionCloud";
import OracleEBS from "./pages/OracleEBS";
import CustomCloud from "./pages/CustomCloud";
import MobileDevelopment from "./pages/MobileDevelopment";
import StaffAugmentation from "./pages/StaffAugmentation";
import ProjectManagement from "./pages/ProjectManagement";
import DataAutomationAI from "./pages/DataAutomationAI";
import NotFound from "./pages/errors/NotFound";
import InternalServerError from "./pages/errors/InternalServerError";
import Forbidden from "./pages/errors/Forbidden";
import Offline from "./pages/errors/Offline";
import Timeout from "./pages/errors/Timeout";
import Maintenance from "./pages/errors/Maintenance";
import Security from "./pages/errors/Security";
import ErrorDemo from "./pages/ErrorDemo";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
          <ErrorBoundary>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/directors" element={<Directors />} />
                <Route path="/services" element={<Services />} />
                <Route
                  path="/services/web-technology"
                  element={<WebTechnology />}
                />
                <Route
                  path="/services/application-development"
                  element={<ApplicationDevelopment />}
                />
                <Route path="/services/testing" element={<TestingServices />} />
                <Route
                  path="/services/consulting"
                  element={<ConsultingServices />}
                />
                <Route
                  path="/services/cloud-computing"
                  element={<CloudComputing />}
                />
                <Route
                  path="/services/digital-transformation"
                  element={<DigitalTransformation />}
                />
                <Route
                  path="/services/oracle-fusion-cloud"
                  element={<OracleFusionCloud />}
                />
                <Route path="/services/oracle-ebs" element={<OracleEBS />} />
                <Route path="/services/custom-cloud" element={<CustomCloud />} />
                <Route
                  path="/services/mobile-development"
                  element={<MobileDevelopment />}
                />
                <Route
                  path="/services/staff-augmentation"
                  element={<StaffAugmentation />}
                />
                <Route
                  path="/services/project-management"
                  element={<ProjectManagement />}
                />
                <Route
                  path="/services/data-automation-ai"
                  element={<DataAutomationAI />}
                />
                <Route path="/industries" element={<Industries />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                />

                {/* Error Pages Demo */}
                <Route path="/error-demo" element={<ErrorDemo />} />

                {/* Error Page Routes */}
                <Route path="/error/404" element={<NotFound />} />
                <Route path="/error/500" element={<InternalServerError />} />
                <Route path="/error/403" element={<Forbidden />} />
                <Route path="/error/offline" element={<Offline />} />
                <Route path="/error/timeout" element={<Timeout />} />
                <Route path="/error/maintenance" element={<Maintenance />} />
                <Route path="/error/security" element={<Security />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

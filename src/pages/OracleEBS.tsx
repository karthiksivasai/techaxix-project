import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  ArrowRight,
  BarChart3,
  Shield,
} from "lucide-react";

// Import app dev icon
import appDevIcon from "@/assets/app-dev-icon.png";

const OracleEBS = () => {

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 via-brand-blue-light/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Code className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
                  Oracle E-Business Suite (EBS) Implementation & Support
                </h1>
              </div>
              <p className="text-xl text-text-body leading-relaxed">
                Our expertise extends to Oracle EBS Suite, where we deliver
                implementation, customization, and managed support services for
                HCM, SCM, Finance, Maintenance, Manufacturing & Hyperion
                modules.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={appDevIcon}
                  alt="Oracle E-Business Suite"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 header-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Expertise Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Our Oracle EBS Expertise
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                We provide comprehensive Oracle EBS solutions covering all
                major modules with deep expertise in implementation,
                customization, and ongoing support to ensure optimal system
                performance.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Our team of Oracle EBS specialists has extensive experience in
                delivering successful implementations across various
                industries, helping organizations maximize their Oracle
                investment and achieve operational excellence.
              </p>
            </div>


            {/* Benefits Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Why Oracle E-Business Suite?
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Code className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Proven Platform
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Mature, stable, and feature-rich ERP solution
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <BarChart3 className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Comprehensive
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    End-to-end business process coverage
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Shield className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Enterprise Ready
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Scalable and secure for large organizations
                  </p>
                </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Start Your Oracle EBS Implementation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OracleEBS;

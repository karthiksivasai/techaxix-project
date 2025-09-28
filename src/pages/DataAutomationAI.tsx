import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  ArrowRight,
  Zap,
  TrendingUp,
  Shield,
} from "lucide-react";

// Import consulting icon
import consultingIcon from "@/assets/consulting-icon.png";

const DataAutomationAI = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 via-brand-blue-light/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
                  Data, Automation & AI
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                In a rapidly evolving digital world, data is the new currency. At Techaxis Consulting, we harness the potential of Data, Automation, and AI to help organizations stay ahead of the curve.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={consultingIcon}
                  alt="Data, Automation & AI"
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
                Our Data, Automation & AI Expertise
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                We help businesses unlock the power of data-driven intelligence. By combining automation with artificial intelligence, we transform complex challenges into smart, scalable solutions. From predictive analytics to robotic process automation, our services empower organizations to make faster decisions, reduce costs, and deliver exceptional customer experiences.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                With Data, Automation & AI, Techaxis Consulting enables enterprises to transform into smart, agile, and future-ready businesses.
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Why Choose Our Data, Automation & AI Solutions?
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <TrendingUp className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Proven Results
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Track record of successful AI and automation implementations
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Zap className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Rapid Deployment
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Quick implementation with minimal business disruption
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Shield className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Secure & Compliant
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Enterprise-grade security and regulatory compliance
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Transform Your Business with Data, Automation & AI
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

export default DataAutomationAI;

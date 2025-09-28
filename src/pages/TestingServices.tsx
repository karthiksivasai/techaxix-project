import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { TestTube, ArrowRight, CheckCircle } from "lucide-react";

const TestingServices = () => {

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <TestTube className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                  Testing Services
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The use of automated testing tools and optimized software
                delivery reduces project costs and time-to-market while ensuring
                the highest quality standards.
              </p>
            </div>
            <div className="bg-gradient-primary opacity-20 rounded-2xl h-80"></div>
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
                Our Testing Services Expertise
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                Our comprehensive testing services include functional testing,
                performance testing, security testing, and user acceptance
                testing. We ensure your applications are reliable, secure, and
                perform optimally across all platforms.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                With our systematic approach to quality assurance, we help
                organizations deliver software that meets the highest
                standards of quality, security, and performance.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Benefits of Our Testing Services
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <TestTube className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Faster Time-to-Market
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Accelerated testing cycles through automation
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Cost Reduction
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Lower project costs through efficient testing
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <ArrowRight className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Higher Quality
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Superior software quality and reliability
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Get Testing Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ensure Your Software Quality
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Partner with us to implement comprehensive testing strategies that
            deliver reliable, high-quality software.
          </p>
          <Button variant="secondary" size="lg">
            Get Testing Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default TestingServices;

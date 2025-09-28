import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Users, ArrowRight } from "lucide-react";

const ConsultingServices = () => {

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                  Consulting Services
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                QIS brings systematic approach to technology consulting, design,
                technology architecture and implementation to deliver measurable
                business value.
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
                Strategic Technology Guidance
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                Our consulting services help organizations align their
                technology strategy with business objectives. We provide
                expert guidance on digital transformation, technology
                roadmaps, and architectural decisions.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                With our systematic approach to technology consulting, we help
                businesses navigate complex technology decisions and implement
                solutions that drive growth and efficiency.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Why Choose Our Consulting Services
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-slate-700">🎯</span>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Strategic Focus
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Align technology with business goals
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-slate-700">🚀</span>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Innovation
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Drive digital transformation initiatives
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-bold text-slate-700">📊</span>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Measurable Results
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Deliver quantifiable business value
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transform Your Technology Strategy
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our experts help you align technology with your business goals
            and drive sustainable growth.
          </p>
          <Button variant="secondary" size="lg">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default ConsultingServices;

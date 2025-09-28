import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Code, ArrowRight, CheckCircle } from "lucide-react";

const WebTechnology = () => {

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Code className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                  Web Technology Solutions
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Web revolutionized the way companies do business. It is no
                longer regarded as a medium for communication, web-based
                eCommerce solutions have opened new opportunities, social
                networking sites, eLearning applications & so on further
                improvised the business scope mitigating the boundaries.
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
                Our Web Technology Expertise
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                A right partner — one with proven expertise can help your
                business in streamlining processes & integrating operations,
                resulting in savings & sustainable competitive
                differentiation. We provide high-performance eBusiness and
                eCommerce solutions to our clients.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Our web technology solutions are designed to enhance your
                digital presence, improve customer engagement, and drive
                business growth through innovative web-based applications and
                platforms.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Why Choose Our Web Technology Solutions?
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Code className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Modern Technologies
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Latest web technologies and frameworks
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Scalable Solutions
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Built to grow with your business needs
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <ArrowRight className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Performance Focused
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Optimized for speed and user experience
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Get Started Today
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
            Ready to Transform Your Web Presence?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our web technology solutions can help modernize
            your business operations.
          </p>
          <Button variant="secondary" size="lg">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default WebTechnology;

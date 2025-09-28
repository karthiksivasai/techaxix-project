import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Code, CheckCircle, ArrowRight } from "lucide-react";

const WebTechnology = () => {
  const features = [
    "Web Portals Development",
    "Social Networking Sites",
    "Customer Relationship Management (CRM)",
    "Content Management Systems (CMS)",
    "Workflow Solutions",
    "eLearning Portals",
    "eCommerce Storefronts",
    "Back-end Application Integration",
  ];

  const industries = [
    "Insurance",
    "Financial Services",
    "Manufacturing",
    "Telecommunications",
    "Retail",
    "Energy and Utilities",
  ];

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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-text-primary mb-6">
                  Our Web Technology Expertise
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A right partner — one with proven expertise can help your
                  business in streamlining processes & integrating operations,
                  resulting in savings & sustainable competitive
                  differentiation. We provide high-performance eBusiness and
                  eCommerce solutions to our clients.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our web technology solutions are designed to enhance your
                  digital presence, improve customer engagement, and drive
                  business growth through innovative web-based applications and
                  platforms.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
                <CardContent className="relative p-8">
                  <h3 className="text-xl font-bold text-text-primary mb-6">
                    Our Services Include
                  </h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Clean glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
                </div>
              </Card>

              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
                <CardContent className="relative p-8">
                  <h3 className="text-xl font-bold text-text-primary mb-6">
                    Industries We Serve
                  </h3>
                  <div className="space-y-4">
                    {industries.map((industry, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {industry}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Clean glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
                </div>
              </Card>
            </div>

            {/* Process Section */}
            <Card className="group relative overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
              <CardContent className="relative p-8">
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  Our Web Development Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Analysis
                    </h4>
                    <p className="text-sm text-text-body">
                      Requirements gathering and technical analysis
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">Design</h4>
                    <p className="text-sm text-text-body">
                      UI/UX design and architecture planning
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Development
                    </h4>
                    <p className="text-sm text-text-body">
                      Coding and feature implementation
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Deployment
                    </h4>
                    <p className="text-sm text-text-body">
                      Testing, deployment and maintenance
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Clean glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
              </div>
            </Card>

            {/* Benefits Section */}
            <Card className="group relative overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
              <CardContent className="relative p-8">
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  Why Choose Our Web Technology Solutions?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Modern Technologies
                    </h4>
                    <p className="text-sm text-text-body">
                      Latest web technologies and frameworks
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Scalable Solutions
                    </h4>
                    <p className="text-sm text-text-body">
                      Built to grow with your business needs
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Performance Focused
                    </h4>
                    <p className="text-sm text-text-body">
                      Optimized for speed and user experience
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Clean glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
              </div>
            </Card>

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

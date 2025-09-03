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
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Our Approach
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
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Our Services Include
                  </h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Industries We Serve
                  </h3>
                  <div className="space-y-4">
                    {industries.map((industry, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          {industry}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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

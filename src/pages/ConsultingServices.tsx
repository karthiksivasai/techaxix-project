import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Users, CheckCircle, ArrowRight } from "lucide-react";

const ConsultingServices = () => {
  const services = [
    "Digital Transformation Strategy",
    "Technology Roadmap Planning",
    "System Architecture Design",
    "Process Optimization",
    "Technology Assessment",
    "IT Strategy Development",
    "Change Management",
    "Project Management Consulting",
  ];

  const expertise = [
    "Enterprise Architecture",
    "Cloud Strategy",
    "DevOps Implementation",
    "Agile Transformation",
    "Data Analytics Strategy",
    "Cybersecurity Planning",
    "Legacy System Modernization",
    "Technology Vendor Selection",
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Strategic Technology Guidance
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our consulting services help organizations align their
                  technology strategy with business objectives. We provide
                  expert guidance on digital transformation, technology
                  roadmaps, and architectural decisions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With our systematic approach to technology consulting, we help
                  businesses navigate complex technology decisions and implement
                  solutions that drive growth and efficiency.
                </p>
              </CardContent>
            </Card>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Consulting Services
                  </h3>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Areas of Expertise
                  </h3>
                  <div className="space-y-4">
                    {expertise.map((area, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Value Proposition */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Why Choose Our Consulting Services
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">🎯</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Strategic Focus
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Align technology with business goals
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">🚀</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Innovation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Drive digital transformation initiatives
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">📊</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Measurable Results
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Deliver quantifiable business value
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Section */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Our Consulting Approach
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Assessment
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Current state analysis and gap identification
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Strategy
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Develop comprehensive technology strategy
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Planning
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Create detailed implementation roadmap
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">4</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Execution
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Guide implementation and change management
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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

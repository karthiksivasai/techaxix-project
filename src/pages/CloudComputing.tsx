import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cloud, CheckCircle, ArrowRight } from "lucide-react";

const CloudComputing = () => {
  const services = [
    "Cloud Migration Strategy",
    "Cloud-Native Development",
    "Multi-Cloud Management",
    "Infrastructure as a Service (IaaS)",
    "Platform as a Service (PaaS)",
    "Software as a Service (SaaS)",
    "Cloud Security & Compliance",
    "DevOps & CI/CD Pipeline",
  ];

  const platforms = [
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
    "IBM Cloud",
    "Oracle Cloud",
    "Private Cloud Solutions",
    "Hybrid Cloud Architecture",
    "Container Orchestration (Kubernetes)",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                  Cloud Computing
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Cloud Computing would definitely redefine the prevailing
                business trends & processes by providing scalable, flexible and
                cost-effective solutions.
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
                  Transform Your Business with Cloud
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our cloud services include cloud migration, cloud-native
                  development, and multi-cloud management. We help businesses
                  leverage the power of cloud computing to reduce costs and
                  increase agility.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking to migrate existing applications to the
                  cloud or build new cloud-native solutions, our team provides
                  comprehensive cloud services that align with your business
                  objectives.
                </p>
              </CardContent>
            </Card>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Cloud Services
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
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Cloud Platforms
                  </h3>
                  <div className="space-y-4">
                    {platforms.map((platform, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          {platform}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Section */}
            <Card className="mb-12">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Cloud Computing Benefits
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">💰</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Cost Efficiency
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Reduce infrastructure costs and operational expenses
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">📈</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Scalability
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Scale resources up or down based on demand
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">⚡</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Agility</h4>
                    <p className="text-sm text-muted-foreground">
                      Faster deployment and time-to-market
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Migration Process */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Cloud Migration Process
                </h3>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Assessment
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Evaluate current infrastructure
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Planning
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Design migration strategy
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Migration
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Execute migration plan
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">4</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Testing</h4>
                    <p className="text-xs text-muted-foreground">
                      Validate and test systems
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">5</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Optimization
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Optimize performance
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
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us help you harness the power of cloud computing to transform
            your business operations and drive growth.
          </p>
          <Button variant="secondary" size="lg">
            Start Cloud Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudComputing;

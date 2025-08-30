import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Cloud,
  CheckCircle,
  ArrowRight,
  Database,
  Users,
  Settings,
  BarChart3,
  Shield,
} from "lucide-react";

// Import cloud icon
import cloudIcon from "@/assets/cloud-icon.png";

const OracleFusionCloud = () => {
  const modules = [
    "Human Capital Management (HCM)",
    "Supply Chain Management (SCM)",
    "Finance",
    "Maintenance",
    "Manufacturing",
    "Enterprise Performance Management (EPM)",
  ];

  const services = [
    "Implementation & Configuration",
    "Data Migration & Integration",
    "Customization & Development",
    "Training & Change Management",
    "Ongoing Support & Maintenance",
    "Upgrade & Enhancement Services",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 via-brand-blue-light/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  Oracle Fusion Cloud Implementation & Support
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We provide comprehensive Oracle Fusion Cloud services, covering
                full lifecycle implementation, post-go-live support, and
                continuous optimization across HCM, SCM, Finance, Maintenance,
                Manufacturing & EPM modules.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={cloudIcon}
                  alt="Oracle Fusion Cloud"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our Oracle Fusion Cloud Expertise
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our Oracle Fusion Cloud expertise spans across all major
                  modules including Human Capital Management, Supply Chain
                  Management, Financial Management, Maintenance, Manufacturing,
                  and Enterprise Performance Management.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We provide comprehensive implementation services, from initial
                  planning and configuration to ongoing support and
                  optimization, ensuring your Oracle Fusion Cloud deployment
                  delivers maximum business value.
                </p>
              </CardContent>
            </Card>

            {/* Modules Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Core Modules
                  </h3>
                  <div className="space-y-4">
                    {modules.map((module, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{module}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Our Services
                  </h3>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Implementation Process */}
            <Card className="mb-12">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Implementation Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="w-7 h-7 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Discovery</h4>
                    <p className="text-sm text-muted-foreground">
                      Requirements gathering and system analysis
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-7 h-7 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Configuration
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      System setup and customization
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-7 h-7 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Testing</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive testing and validation
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Go-Live</h4>
                    <p className="text-sm text-muted-foreground">
                      Production deployment and support
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Oracle Fusion Cloud?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Cloud-Native
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Built for the cloud with automatic updates and scalability
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      AI-Powered
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Built-in AI and machine learning capabilities
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Enterprise Security
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      World-class security and compliance features
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <a href="/contact">
                  Start Your Oracle Fusion Cloud Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OracleFusionCloud;

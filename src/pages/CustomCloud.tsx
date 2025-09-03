import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
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

const CustomCloud = () => {
  const platforms = [
    "Oracle Cloud Infrastructure (OCI)",
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
  ];

  const services = [
    "Cloud Strategy & Architecture",
    "Migration & Implementation",
    "Custom Development",
    "DevOps & Automation",
    "Security & Compliance",
    "Ongoing Support & Optimization",
  ];

  return (
    <div className="min-h-screen">

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
                  Custom Cloud Solutions
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We design and develop customized applications and solutions
                based on client-specific needs, leveraging leading cloud
                platforms: OCI, Azure & Google Cloud.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={cloudIcon}
                  alt="Custom Cloud Solutions"
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
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our Cloud Expertise
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our custom cloud solutions leverage the power of Oracle Cloud
                  Infrastructure, Microsoft Azure, and Google Cloud Platform to
                  deliver scalable, secure, and cost-effective solutions
                  tailored to your business needs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We help organizations design, implement, and optimize cloud
                  solutions that drive innovation, improve operational
                  efficiency, and create competitive advantages in the digital
                  marketplace.
                </p>
              </CardContent>
            </Card>

            {/* Platforms Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Cloud Platforms
                  </h3>
                  <div className="space-y-4">
                    {platforms.map((platform, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {platform}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
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
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Cloud Implementation Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Assessment
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Current state analysis and cloud readiness
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Cloud architecture and solution design
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Implementation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Deployment and configuration
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Optimization
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Performance tuning and monitoring
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Benefits of Custom Cloud Solutions
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Scalability
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Flexible resources that grow with your business
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Cost Efficiency
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Pay-as-you-use model reduces infrastructure costs
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Enterprise-grade security and compliance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Start Your Cloud Journey
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

export default CustomCloud;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Smartphone,
  CheckCircle,
  ArrowRight,
  Code,
  Users,
  Settings,
  BarChart3,
  Shield,
} from "lucide-react";

// Import app dev icon
import appDevIcon from "@/assets/app-dev-icon.png";

const MobileDevelopment = () => {
  const platforms = [
    "iOS Development (iPhone & iPad)",
    "Android Development",
    "Cross-Platform Solutions",
    "Progressive Web Apps (PWA)",
    "Hybrid Applications",
  ];

  const services = [
    "Custom Mobile App Development",
    "UI/UX Design & Prototyping",
    "App Store Optimization",
    "Testing & Quality Assurance",
    "Maintenance & Updates",
    "Performance Optimization",
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
                  <Smartphone className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  Mobile Application Development
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our skilled team builds intuitive and scalable mobile
                applications that enhance customer engagement and business
                mobility across iOS and Android platforms.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={appDevIcon}
                  alt="Mobile Application Development"
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
                  Our Mobile Development Expertise
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We develop high-performance mobile applications using the
                  latest technologies and best practices, ensuring excellent
                  user experience, scalability, and cross-platform
                  compatibility.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our mobile development team combines technical expertise with
                  creative design to create engaging, intuitive, and
                  feature-rich applications that drive user engagement and
                  business growth.
                </p>
              </CardContent>
            </Card>

            {/* Platforms Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Development Platforms
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

            {/* Development Process */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Mobile Development Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Discovery</h4>
                    <p className="text-sm text-muted-foreground">
                      Requirements gathering and user research
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Design</h4>
                    <p className="text-sm text-muted-foreground">
                      UI/UX design and prototyping
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Development
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Coding and feature implementation
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Testing</h4>
                    <p className="text-sm text-muted-foreground">
                      Quality assurance and testing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Benefits of Mobile Applications
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      User Engagement
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Direct access to users anytime, anywhere
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Business Growth
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Increased customer reach and sales
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Brand Presence
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Enhanced brand visibility and recognition
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Start Your Mobile App Project
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

export default MobileDevelopment;

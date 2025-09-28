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
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
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
      <section className="py-20 header-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Expertise Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Our Mobile Development Expertise
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                We develop high-performance mobile applications using the
                latest technologies and best practices, ensuring excellent
                user experience, scalability, and cross-platform
                compatibility.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Our mobile development team combines technical expertise with
                creative design to create engaging, intuitive, and
                feature-rich applications that drive user engagement and
                business growth.
              </p>
            </div>

            {/* Platforms Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Development Platforms
                </h3>
                <div className="space-y-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-slate-700 flex-shrink-0" />
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {platform}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Our Services
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Development Process */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Mobile Development Process
              </h3>
              <div className="grid md:grid-cols-4 gap-12">
                <div className="text-center px-4 py-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">Discovery</h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Requirements gathering and user research
                  </p>
                </div>
                <div className="text-center px-4 py-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Settings className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">Design</h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    UI/UX design and prototyping
                  </p>
                </div>
                <div className="text-center px-4 py-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Code className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Development
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Coding and feature implementation
                  </p>
                </div>
                <div className="text-center px-4 py-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Shield className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">Testing</h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Quality assurance and testing
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <Card className="group relative overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
              <CardContent className="relative p-8">
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  Benefits of Mobile Applications
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      User Engagement
                    </h4>
                    <p className="text-sm text-text-body">
                      Direct access to users anytime, anywhere
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Business Growth
                    </h4>
                    <p className="text-sm text-text-body">
                      Increased customer reach and sales
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Brand Presence
                    </h4>
                    <p className="text-sm text-text-body">
                      Enhanced brand visibility and recognition
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

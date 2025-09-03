import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  CheckCircle,
  ArrowRight,
  Database,
  Users2,
  Settings,
  BarChart3,
  Shield,
} from "lucide-react";

// Import consulting icon
import consultingIcon from "@/assets/consulting-icon.png";

const StaffAugmentation = () => {
  const roles = [
    "Oracle ERP Specialists",
    "Cloud Architects",
    "Full-Stack Developers",
    "Project Managers",
    "Business Analysts",
    "DevOps Engineers",
  ];

  const benefits = [
    "Flexible team scaling",
    "Access to specialized skills",
    "Cost-effective solutions",
    "Reduced hiring overhead",
    "Faster project delivery",
    "Domain expertise",
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
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  Staff Augmentation
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We provide flexible IT staffing solutions, offering skilled
                professionals who can seamlessly integrate into your teams to
                meet short-term and long-term project requirements.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={consultingIcon}
                  alt="Staff Augmentation"
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
                  Our Staff Augmentation Services
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our staff augmentation services provide access to skilled IT
                  professionals with deep domain expertise, helping you scale
                  your team quickly and efficiently without the overhead of
                  permanent hiring.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need Oracle ERP specialists, cloud architects,
                  developers, or project managers, we provide flexible staffing
                  solutions that integrate seamlessly with your existing team
                  and processes.
                </p>
              </CardContent>
            </Card>

            {/* Roles Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Available Roles
                  </h3>
                  <div className="space-y-4">
                    {roles.map((role, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Key Benefits
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Process Section */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Staff Augmentation Process
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
                      Evaluate your staffing needs and requirements
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users2 className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Matching</h4>
                    <p className="text-sm text-muted-foreground">
                      Find the right professionals for your team
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Integration
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Seamlessly integrate with your existing team
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Ongoing support and performance monitoring
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us Section */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Our Staff Augmentation?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Expert Team
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Skilled professionals with proven track records
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Flexible Scaling
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Scale up or down based on project needs
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Quality Assurance
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Rigorous screening and quality standards
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Get Started with Staff Augmentation
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

export default StaffAugmentation;

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
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
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
                <h2 className="text-3xl font-bold text-text-primary mb-6">
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
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
                <CardContent className="relative p-8">
                  <h3 className="text-xl font-bold text-text-primary mb-6">
                    Available Roles
                  </h3>
                  <div className="space-y-4">
                    {roles.map((role, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {role}
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
                    Key Benefits
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {benefit}
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
                  Staff Augmentation Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Assessment
                    </h4>
                    <p className="text-sm text-text-body">
                      Evaluate your staffing needs and requirements
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users2 className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">Matching</h4>
                    <p className="text-sm text-text-body">
                      Find the right professionals for your team
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Integration
                    </h4>
                    <p className="text-sm text-text-body">
                      Seamlessly integrate with your existing team
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">Support</h4>
                    <p className="text-sm text-text-body">
                      Ongoing support and performance monitoring
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Clean glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
              </div>
            </Card>

            {/* Why Choose Us Section */}
            <Card className="group relative overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
              <CardContent className="relative p-8">
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  Why Choose Our Staff Augmentation?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Expert Team
                    </h4>
                    <p className="text-sm text-text-body">
                      Skilled professionals with proven track records
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Flexible Scaling
                    </h4>
                    <p className="text-sm text-text-body">
                      Scale up or down based on project needs
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Quality Assurance
                    </h4>
                    <p className="text-sm text-text-body">
                      Rigorous screening and quality standards
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

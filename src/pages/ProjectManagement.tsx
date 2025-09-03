import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Settings,
  BarChart3,
  Shield,
} from "lucide-react";

// Import consulting icon
import consultingIcon from "@/assets/consulting-icon.png";

const ProjectManagement = () => {
  const services = [
    "Program Management",
    "Project Planning",
    "Risk Management",
    "Resource Allocation",
    "Stakeholder Communication",
    "Quality Control",
    "Timeline Management",
    "Budget Control",
  ];

  const benefits = [
    "On-time project delivery",
    "Within budget execution",
    "Aligned with business goals",
    "Risk mitigation",
    "Stakeholder satisfaction",
    "Quality assurance",
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
                  <Briefcase className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  Program & Project Management Consultancy
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our certified consultants deliver end-to-end program and project
                management services, ensuring that your strategic initiatives
                are executed on time, within budget, and aligned with business
                goals.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={consultingIcon}
                  alt="Program & Project Management Consultancy"
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
                  Our Project Management Expertise
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our certified project management consultants bring years of
                  experience in delivering complex programs and projects across
                  various industries, ensuring successful outcomes that drive
                  business value.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We follow industry best practices and methodologies to deliver
                  projects on time, within budget, and aligned with your
                  strategic business objectives.
                </p>
              </CardContent>
            </Card>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Our Services Include
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
                  Our Project Management Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Initiation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Project definition and stakeholder alignment
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Planning</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive project planning and scheduling
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Execution</h4>
                    <p className="text-sm text-muted-foreground">
                      Project delivery and stakeholder management
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Monitoring
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Progress tracking and quality control
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us Section */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Our Project Management?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Certified Consultants
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      PMP, PRINCE2, and Agile certified professionals
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Proven Track Record
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Successful delivery of complex projects
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Risk Management
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Proactive risk identification and mitigation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Start Your Project Management Journey
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

export default ProjectManagement;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";

// Import consulting icon
import consultingIcon from "@/assets/consulting-icon.png";

const DigitalTransformation = () => {
  const features = [
    "Process Optimization & Automation",
    "Business Model Innovation",
    "Technology Integration",
    "Change Management",
    "Digital Strategy Development",
    "Data Analytics & Insights",
    "Customer Experience Enhancement",
    "Operational Efficiency Improvement",
  ];

  const benefits = [
    "Streamlined workflows",
    "Increased productivity",
    "Improved customer experience",
    "Enhanced operational efficiency",
    "Competitive advantage",
    "Sustainable business growth",
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
                  Digital Transformation Projects
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We help organizations modernize their business processes and IT
                landscapes through end-to-end digital transformation
                initiatives. Our approach ensures streamlined workflows,
                increased productivity, and improved customer experience.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={consultingIcon}
                  alt="Digital Transformation"
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
                  Our Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We help organizations embrace digital transformation by
                  reimagining business processes, implementing modern
                  technologies, and creating innovative solutions that drive
                  growth and operational efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our digital transformation services are designed to help
                  businesses adapt to the rapidly changing digital landscape,
                  improve customer engagement, and create sustainable
                  competitive advantages.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-6">
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
                  <h3 className="text-2xl font-bold text-text-primary mb-6">
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
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Our Digital Transformation Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      Assessment
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Evaluate current state and identify transformation
                      opportunities
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      Develop comprehensive digital transformation roadmap
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      Implementation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Execute transformation initiatives with agile methodology
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      Optimization
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Continuous improvement and performance monitoring
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Start Your Digital Transformation
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

export default DigitalTransformation;

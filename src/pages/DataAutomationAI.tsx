import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Settings,
  Users,
} from "lucide-react";

// Import consulting icon
import consultingIcon from "@/assets/consulting-icon.png";

const DataAutomationAI = () => {
  const expertise = [
    "Data Analytics & Business Intelligence",
    "Robotic Process Automation (RPA)",
    "Machine Learning & AI Models",
    "Predictive Analytics",
    "Workflow Optimization",
    "End-to-End Integration",
  ];

  const benefits = [
    "Boost productivity and reduce manual effort",
    "Improve customer engagement with AI-driven personalization",
    "Gain competitive advantage with predictive insights",
    "Accelerate digital transformation with intelligent automation",
    "Real-time decision-making capabilities",
    "Cost reduction through process automation",
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
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
                  Data, Automation & AI
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                In a rapidly evolving digital world, data is the new currency. At Techaxis Consulting, we harness the potential of Data, Automation, and AI to help organizations stay ahead of the curve.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={consultingIcon}
                  alt="Data, Automation & AI"
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
                  Our Data, Automation & AI Expertise
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We help businesses unlock the power of data-driven intelligence. By combining automation with artificial intelligence, we transform complex challenges into smart, scalable solutions. From predictive analytics to robotic process automation, our services empower organizations to make faster decisions, reduce costs, and deliver exceptional customer experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With Data, Automation & AI, Techaxis Consulting enables enterprises to transform into smart, agile, and future-ready businesses.
                </p>
              </CardContent>
            </Card>

            {/* Expertise Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
                <CardContent className="relative p-8">
                  <h3 className="text-xl font-bold text-text-primary mb-6">
                    Our Expertise
                  </h3>
                  <div className="space-y-4">
                    {expertise.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {item}
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
                    Business Impact
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
                  Our Data, Automation & AI Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Data Assessment
                    </h4>
                    <p className="text-sm text-text-body">
                      Analyze existing data sources and identify opportunities
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bot className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">Automation Design</h4>
                    <p className="text-sm text-text-body">
                      Design and implement RPA and workflow automation
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">AI Implementation</h4>
                    <p className="text-sm text-text-body">
                      Deploy machine learning models and AI solutions
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">Optimization</h4>
                    <p className="text-sm text-text-body">
                      Monitor performance and continuously improve solutions
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
                  Why Choose Our Data, Automation & AI Solutions?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Proven Results
                    </h4>
                    <p className="text-sm text-text-body">
                      Track record of successful AI and automation implementations
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Rapid Deployment
                    </h4>
                    <p className="text-sm text-text-body">
                      Quick implementation with minimal business disruption
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Secure & Compliant
                    </h4>
                    <p className="text-sm text-text-body">
                      Enterprise-grade security and regulatory compliance
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
                  Transform Your Business with Data, Automation & AI
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

export default DataAutomationAI;

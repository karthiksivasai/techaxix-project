import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Users, 
  Shield, 
  Globe, 
  Zap, 
  Clock, 
  CheckCircle, 
  Award, 
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseUsIntro = () => {
  const coreStrengths = [
    {
      icon: Database,
      title: "Oracle & Cloud Expertise",
      description: "Deep expertise in Oracle ERP, EBS, Fusion Cloud, and modern cloud technologies"
    },
    {
      icon: Users,
      title: "Agile & Customer-Focused",
      description: "Agile delivery methodology with unwavering focus on customer success"
    },
    {
      icon: Shield,
      title: "End-to-End Services",
      description: "Complete support from implementation to managed services and maintenance"
    },
    {
      icon: Globe,
      title: "Industry Experience",
      description: "Proven experience across diverse industries and business verticals"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Cutting-edge solutions and digital excellence for competitive advantage"
    },
    {
      icon: Clock,
      title: "Round-the-Clock Support",
      description: "24/7 dedicated support and maintenance services for uninterrupted operations"
    }
  ];

  const stats = [
    { icon: Award, value: "100+", label: "Certified Experts" },
    { icon: CheckCircle, value: "98%", label: "Success Rate" },
    { icon: Users, value: "99%", label: "Client Satisfaction" },
    { icon: Clock, value: "15+", label: "Years Experience" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
            Why Choose Techaxis Consulting
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
            Your Trusted Partner in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {" "}Digital Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            We combine deep technical expertise with business acumen to deliver 
            transformative solutions that drive real business value and competitive advantage.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreStrengths.map((strength, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/50 bg-background/50">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <strength.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{strength.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link to="/why-choose-us">
            <Button 
              variant="brand" 
              size="lg" 
              className="btn-responsive-lg font-semibold group"
            >
              Discover Why Choose Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsIntro;

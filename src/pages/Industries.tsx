import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, HeartHandshake, Banknote, ShoppingCart, GraduationCap, Shield, Factory, Zap } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      title: "Insurance",
      description: "Comprehensive technology solutions for insurance providers, including policy management systems, claims processing automation, and customer portals.",
      features: ["Policy Management", "Claims Processing", "Risk Assessment", "Customer Portals"],
      icon: Shield,
      color: "text-blue-600"
    },
    {
      title: "Financial Services",
      description: "Secure and scalable solutions for banks, credit unions, and financial institutions with focus on compliance and security.",
      features: ["Online Banking", "Payment Processing", "Fraud Detection", "Regulatory Compliance"],
      icon: Banknote,
      color: "text-green-600"
    },
    {
      title: "Manufacturing",
      description: "Digital transformation solutions for manufacturing companies to optimize production, supply chain, and quality management.",
      features: ["ERP Systems", "Supply Chain Management", "Quality Control", "Production Planning"],
      icon: Factory,
      color: "text-orange-600"
    },
    {
      title: "Telecommunications",
      description: "Advanced solutions for telecom operators including network management, billing systems, and customer service platforms.",
      features: ["Network Management", "Billing Systems", "Customer Service", "Infrastructure Monitoring"],
      icon: Building2,
      color: "text-purple-600"
    },
    {
      title: "Retail & E-commerce",
      description: "Digital commerce solutions including e-commerce platforms, inventory management, and customer experience optimization.",
      features: ["E-commerce Platforms", "Inventory Management", "Customer Analytics", "Mobile Commerce"],
      icon: ShoppingCart,
      color: "text-pink-600"
    },
    {
      title: "Energy & Utilities",
      description: "Smart solutions for energy companies including grid management, billing systems, and renewable energy integration.",
      features: ["Smart Grid Management", "Energy Analytics", "Billing Automation", "Renewable Integration"],
      icon: Zap,
      color: "text-yellow-600"
    },
    {
      title: "Healthcare",
      description: "Healthcare technology solutions focusing on patient care, electronic health records, and medical practice management.",
      features: ["Electronic Health Records", "Patient Portals", "Medical Billing", "Telemedicine"],
      icon: HeartHandshake,
      color: "text-red-600"
    },
    {
      title: "Education",
      description: "Educational technology platforms for schools, universities, and training organizations to enhance learning experiences.",
      features: ["Learning Management Systems", "Student Information Systems", "Online Assessment", "Virtual Classrooms"],
      icon: GraduationCap,
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expertise spans across various industries, delivering tailored technology solutions 
            that address unique challenges and regulatory requirements.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 hover:border-accent/20"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                      <industry.icon className={`w-8 h-8 ${industry.color} group-hover:text-accent transition-colors duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4 text-center group-hover:text-accent transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-center">
                    {industry.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-sm">Key Solutions:</h4>
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Why Choose QIS for Your Industry?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary">Industry Expertise</h3>
                <p className="text-sm text-muted-foreground">Deep understanding of industry-specific challenges and regulations</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary">Proven Track Record</h3>
                <p className="text-sm text-muted-foreground">25+ years of successful project delivery across multiple sectors</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <HeartHandshake className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary">Partnership Approach</h3>
                <p className="text-sm text-muted-foreground">We work as your technology partner, not just a vendor</p>
              </div>
            </div>
            <Button variant="cta" size="lg">
              Discuss Your Industry Needs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
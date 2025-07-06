import { Card, CardContent } from "@/components/ui/card";
import { Building2, HeartHandshake, Banknote, ShoppingCart, GraduationCap, Shield } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      title: "Healthcare",
      description: "Innovative technology solutions for healthcare providers, improving patient care and operational efficiency.",
      icon: HeartHandshake,
      color: "text-blue-600"
    },
    {
      title: "Financial Services",
      description: "Secure and scalable solutions for banks, insurance companies, and financial institutions.",
      icon: Banknote,
      color: "text-green-600"
    },
    {
      title: "Retail & E-commerce",
      description: "Digital transformation solutions for retail businesses and e-commerce platforms.",
      icon: ShoppingCart,
      color: "text-purple-600"
    },
    {
      title: "Education",
      description: "Educational technology solutions for schools, universities, and online learning platforms.",
      icon: GraduationCap,
      color: "text-orange-600"
    },
    {
      title: "Government",
      description: "Secure government solutions for public sector organizations and agencies.",
      icon: Shield,
      color: "text-red-600"
    },
    {
      title: "Enterprise",
      description: "Large-scale enterprise solutions for Fortune 500 companies and growing businesses.",
      icon: Building2,
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30" id="industries">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2 tracking-wider">INDUSTRIES WE SERVE</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Specialized Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We deliver tailored technology solutions across diverse industries, 
            understanding unique challenges and regulatory requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 hover:border-accent/20"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                    <industry.icon className={`w-8 h-8 ${industry.color} group-hover:text-accent transition-colors duration-300`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {industry.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
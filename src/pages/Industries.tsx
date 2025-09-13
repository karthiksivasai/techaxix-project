import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  HeartHandshake,
  Banknote,
  ShoppingCart,
  GraduationCap,
  Shield,
  Factory,
  Zap,
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      title: "Insurance",
      icon: Shield,
      color: "text-blue-600",
    },
    {
      title: "Financial Services",
      icon: Banknote,
      color: "text-green-600",
    },
    {
      title: "Manufacturing",
      icon: Factory,
      color: "text-orange-600",
    },
    {
      title: "Telecommunications",
      icon: Building2,
      color: "text-purple-600",
    },
    {
      title: "Retail & E-commerce",
      icon: ShoppingCart,
      color: "text-pink-600",
    },
    {
      title: "Energy & Utilities",
      icon: Zap,
      color: "text-yellow-600",
    },
    {
      title: "Healthcare",
      icon: HeartHandshake,
      color: "text-red-600",
    },
    {
      title: "Education",
      icon: GraduationCap,
      color: "text-indigo-600",
    },
    {
      title: "Public Sector and Government",
      icon: Shield,
      color: "text-red-600",
    },
    {
      title: "Transportation & Logistics",
      icon: Zap,
      color: "text-teal-600",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-text-body max-w-3xl mx-auto">
            Our expertise spans across various industries, delivering tailored
            technology solutions that address unique challenges and regulatory
            requirements.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Our expertise spans across various industries, delivering tailored
              technology solutions that address unique challenges and regulatory
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-elegant transition-all duration-500 ease-out hover:scale-105 cursor-pointer rounded-2xl border border-gradient-to-r from-accent via-brand-blue-light to-accent"
              >
                <CardContent className="relative p-6 sm:p-8 text-center">
                  {/* Icon with proper spacing and reduced size - no more overlapping */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 flex items-center justify-center">
                        <industry.icon
                          className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${industry.color} group-hover:text-accent transition-colors duration-300`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Title with reduced size */}
                  <h3 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-xl lg:text-fluid-xl xl:text-fluid-2xl font-bold group-hover:text-accent transition-colors duration-300" style={{ color: '#0B2545' }}>
                    {industry.title}
                  </h3>
                </CardContent>

                {/* Clean glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-8">
              Why Choose Techaxis Consulting for Your Industry?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 hover:border-accent/20 p-8 h-full">
                <CardContent className="space-y-6 text-center h-full flex flex-col justify-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                    <Shield className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-bold text-text-primary text-xl">Industry Expertise</h3>
                  <p className="text-base text-text-body leading-relaxed">
                    Deep understanding of industry-specific challenges and
                    regulations
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 hover:border-accent/20 p-8 h-full">
                <CardContent className="space-y-6 text-center h-full flex flex-col justify-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                    <Building2 className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-bold text-text-primary text-xl">
                    Proven Track Record
                  </h3>
                  <p className="text-base text-text-body leading-relaxed">
                    25+ years of successful project delivery across multiple
                    sectors
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 hover:border-accent/20 p-8 h-full">
                <CardContent className="space-y-6 text-center h-full flex flex-col justify-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                    <HeartHandshake className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-bold text-text-primary text-xl">
                    Partnership Approach
                  </h3>
                  <p className="text-base text-text-body leading-relaxed">
                    We work as your technology partner, not just a vendor
                  </p>
                </CardContent>
              </Card>
            </div>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Discuss Your Industry Needs</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Industries;

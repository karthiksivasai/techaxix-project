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
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      title: "Manufacturing",
      description:
        "Digital transformation solutions for manufacturing companies, optimizing operations and supply chain management with Oracle ERP expertise.",
      icon: Building2,
      color: "text-brand-blue-light",
    },
    {
      title: "Financial Services",
      description:
        "Oracle ERP solutions for banks, insurance companies, and financial institutions with compliance, security, and regulatory expertise.",
      icon: Banknote,
      color: "text-green-400",
    },
    {
      title: "Healthcare",
      description:
        "Technology solutions for healthcare providers, improving patient care and operational efficiency with Oracle HCM and modern systems.",
      icon: HeartHandshake,
      color: "text-purple-400",
    },
    {
      title: "Retail & E-commerce",
      description:
        "Digital transformation solutions for retail businesses and e-commerce platforms with Oracle SCM and modern commerce technologies.",
      icon: ShoppingCart,
      color: "text-orange-400",
    },
    {
      title: "Government",
      description:
        "Secure government solutions for public sector organizations and agencies with Oracle EBS and compliance focus.",
      icon: Shield,
      color: "text-red-400",
    },
    {
      title: "Education",
      description:
        "Educational technology solutions for schools, universities, and online learning platforms with Oracle HCM and modern learning systems.",
      icon: GraduationCap,
      color: "text-indigo-400",
    },
  ];

  return (
    <section className="section-responsive bg-secondary/20" id="industries">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-red-500 font-semibold mb-2 sm:mb-3 tracking-wider text-fluid-base sm:text-fluid-lg">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-4xl xl:text-fluid-5xl font-bold text-white mb-4 sm:mb-6">
            Specialized Solutions
          </h2>
          <p className="text-gray-300 text-fluid-base sm:text-fluid-lg max-w-3xl mx-auto px-4 sm:px-0">
            We deliver tailored Oracle ERP solutions and digital transformation
            across diverse industries, understanding unique challenges and
            regulatory requirements with our deep domain expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
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
                <h3 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-xl lg:text-fluid-xl xl:text-fluid-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {industry.title}
                </h3>

                {/* Description with proper spacing */}
                <p className="text-gray-300 text-fluid-sm sm:text-fluid-base leading-relaxed text-left">
                  {industry.description}
                </p>
              </CardContent>

              {/* Clean glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Know More Button */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <Button
            variant="brand"
            size="lg"
            className="btn-responsive-lg px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 font-semibold rounded-full shadow-2xl hover:shadow-brand-blue-light/30 transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link to="/industries" aria-label="Learn more about industries we serve">
              KNOW MORE
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;

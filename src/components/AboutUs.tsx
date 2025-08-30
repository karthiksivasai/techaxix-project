import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-image.jpg";
import { Database, Users, Shield, Globe, Zap, Clock } from "lucide-react";

const AboutUs = () => {
  const features = [
    "Strong expertise in Oracle ERP & Cloud technologies",
    "Agile delivery methodology with customer-first approach",
    "End-to-end support from implementation to managed services",
    "Proven experience across industries",
  ];

  const whyChooseUs = [
    {
      text: "Strong expertise in Oracle ERP & Cloud technologies",
      icon: Database,
      description: "Oracle & Cloud expertise",
    },
    {
      text: "Agile delivery methodology with customer-first approach",
      icon: Users,
      description: "Agile & customer-focused",
    },
    {
      text: "End-to-end support from implementation to managed services",
      icon: Shield,
      description: "Complete support",
    },
    {
      text: "Proven experience across industries",
      icon: Globe,
      description: "Industry experience",
    },
    {
      text: "Focus on innovation and digital excellence",
      icon: Zap,
      description: "Innovation focus",
    },
    {
      text: "24/7 dedicated support and maintenance services",
      icon: Clock,
      description: "Round-the-clock support",
    },
  ];

  return (
    <section className="section-responsive bg-secondary/20" id="about">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <img
              src={teamImage}
              alt="Techaxis Consulting Team"
              className="rounded-2xl shadow-card-custom w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 bg-accent text-accent-foreground rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">25+</div>
                <div className="text-sm sm:text-base font-medium">years</div>
                <div className="text-xs sm:text-sm mt-1">experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <p className="text-accent font-semibold mb-2 sm:mb-3 tracking-wider text-fluid-base sm:text-fluid-lg">
                WHO WE ARE
              </p>
              <h2 className="text-fluid-3xl sm:text-fluid-4xl md:text-fluid-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                Techaxis Consulting Private Limited
              </h2>
              <p className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl text-white font-semibold mb-4 sm:mb-6">
                Axis of Possibilities
              </p>
            </div>

            <div className="text-gray-300 text-fluid-base sm:text-fluid-lg leading-relaxed space-y-3 sm:space-y-4">
              <p>
                Techaxis Consulting Private Limited is a next-generation IT
                solutions and consulting company committed to driving
                innovation, efficiency, and growth. With deep expertise across
                industries, we help organizations embrace digital transformation
                and achieve business excellence.
              </p>
              <p>
                With a blend of domain expertise, technology excellence, and a
                client-first approach, we partner with organizations to drive
                sustainable business success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6 sm:my-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-xl"
                >
                  {/* Content */}
                  <div className="relative p-3 sm:p-4 md:p-6">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      {/* Animated bullet point */}
                      <div className="w-2 h-2 bg-brand-blue-light rounded-full group-hover:bg-accent group-hover:scale-125 transition-all duration-300 flex-shrink-0"></div>

                      {/* Text content */}
                      <p className="font-medium text-fluid-sm sm:text-fluid-base text-gray-300 group-hover:text-accent transition-colors duration-300 leading-relaxed">
                        {feature}
                      </p>
                    </div>

                    {/* Hover effect indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-brand-blue-light to-accent rounded-full"></div>
                    </div>
                  </div>

                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light/20 via-transparent to-accent/20 rounded-lg blur-lg"></div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Our Services Button with proper spacing to avoid overlap */}
            <div className="pt-4 sm:pt-6">
              <Link to="/services">
                <Button
                  variant="brand"
                  size="lg"
                  className="btn-responsive-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-semibold rounded-full shadow-2xl hover:shadow-brand-blue-light/30 transform hover:scale-105 transition-all duration-300"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Us?
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We deliver exceptional value through our proven expertise and
              client-focused approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl"
              >
                {/* Content */}
                <div className="relative p-6">
                  {/* Icon container with clean background */}
                  <div className="mb-6 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-brand-blue-light/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-brand-blue-light/20 transition-all duration-300 group-hover:scale-110">
                      <item.icon className="w-7 h-7 text-accent group-hover:text-brand-blue-light transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="text-center">
                    <p className="font-medium text-gray-300 leading-relaxed group-hover:text-accent transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>

                  {/* Hover effect indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-1 bg-gradient-to-r from-accent to-brand-blue-light rounded-full"></div>
                  </div>
                </div>

                {/* Clean glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

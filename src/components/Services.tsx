import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import webTechIcon from "@/assets/web-tech-icon.png";
import appDevIcon from "@/assets/app-dev-icon.png";
import testingIcon from "@/assets/testing-icon.png";
import consultingIcon from "@/assets/consulting-icon.png";
import cloudIcon from "@/assets/cloud-icon.png";

const Services = () => {
  const services = [
    {
      title: "Web Technology Solution",
      description: "Web revolutionized the way companies do business. It is no longer regarded as a medium for static information display, but as a dynamic platform for conducting business operations.",
      icon: webTechIcon,
      link: "#web-technology-solutions"
    },
    {
      title: "Application Development & Maintenance", 
      description: "Leveraging on the use of latest technologies our custom software development team delivers robust, scalable and high-performance applications.",
      icon: appDevIcon,
      link: "#application-development-maintenance"
    },
    {
      title: "Testing",
      description: "The use of automated testing tools and optimized software delivery reduces project costs and time-to-market while ensuring the highest quality standards.",
      icon: testingIcon,
      link: "#testing"
    },
    {
      title: "Consulting Services",
      description: "QIS brings systematic approach to technology consulting, design, technology architecture and implementation to deliver measurable business value.",
      icon: consultingIcon,
      link: "#consulting-services"
    },
    {
      title: "Cloud Computing",
      description: "Cloud Computing would definitely redefine the prevailing business trends & processes by providing scalable, flexible and cost-effective solutions.",
      icon: cloudIcon,
      link: "#cloud-computing"
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2 tracking-wider">WHAT WE PROVIDE</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Service Offering
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 hover:border-accent/20"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
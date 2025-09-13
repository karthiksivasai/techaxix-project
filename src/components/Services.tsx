import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import webTechIcon from "@/assets/web-tech-icon.png";
import appDevIcon from "@/assets/app-dev-icon.png";
import testingIcon from "@/assets/testing-icon.png";
import consultingIcon from "@/assets/consulting-icon.png";
import cloudIcon from "@/assets/cloud-icon.png";

const Services = () => {
  const services = [
    {
      title: "Digital Transformation Projects",
      description:
        "We help organizations modernize their business processes and IT landscapes through end-to-end digital transformation initiatives. Our approach ensures streamlined workflows, increased productivity, and improved customer experience.",
      icon: consultingIcon,
      link: "/services/digital-transformation",
    },
    {
      title: "Oracle Fusion Cloud Implementation & Support",
      description:
        "We provide comprehensive Oracle Fusion Cloud services, covering full lifecycle implementation, post-go-live support, and continuous optimization across HCM, SCM, Finance, Maintenance, Manufacturing & EPM modules.",
      icon: cloudIcon,
      link: "/services/oracle-fusion-cloud",
    },
    {
      title: "Oracle E-Business Suite (EBS) Implementation & Support",
      description:
        "Our expertise extends to Oracle EBS Suite, where we deliver implementation, customization, and managed support services for HCM, SCM, Finance, Maintenance, Manufacturing & Hyperion modules.",
      icon: appDevIcon,
      link: "/services/oracle-ebs",
    },
    {
      title: "Custom Cloud Solutions",
      description:
        "We design and develop customized applications and solutions based on client-specific needs, leveraging leading cloud platforms including OCI, Azure & Google Cloud.",
      icon: cloudIcon,
      link: "/services/custom-cloud",
    },
    {
      title: "Mobile Application Development",
      description:
        "Our skilled team builds intuitive and scalable mobile applications that enhance customer engagement and business mobility across iOS and Android platforms.",
      icon: appDevIcon,
      link: "/services/mobile-development",
    },
    {
      title: "Staff Augmentation",
      description:
        "We provide flexible IT staffing solutions, offering skilled professionals who can seamlessly integrate into your teams to meet short-term and long-term project requirements.",
      icon: consultingIcon,
      link: "/services/staff-augmentation",
    },
    {
      title: "Program & Project Management Consultancy",
      description:
        "Our certified consultants deliver end-to-end program and project management services, ensuring that your strategic initiatives are executed on time, within budget, and aligned with business goals.",
      icon: consultingIcon,
      link: "/services/project-management",
    },
  ];

  return (
    <section className="section-responsive bg-background" id="services">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-accent font-semibold mb-2 sm:mb-3 tracking-wider text-fluid-base sm:text-fluid-lg">
            WHAT WE PROVIDE
          </p>
          <h2 className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-4xl xl:text-fluid-5xl font-bold text-text-primary">
            Our Service Offerings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
          {services.slice(0, 6).map((service, index) => (
            <Card
              key={index}
              className="card group relative overflow-hidden hover:shadow-elegant transition-all duration-500 ease-out hover:scale-105 cursor-pointer"
            >
              <CardContent className="relative p-6 sm:p-8 text-center">
                {/* Icon with proper spacing and reduced size */}
                <div className="mb-6 flex justify-center">
                  <div className="service-card-icon rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="service-card-icon img object-contain rounded-full"
                    />
                  </div>
                </div>

                {/* Title with reduced size */}
                <h3 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-xl lg:text-fluid-xl xl:text-fluid-2xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description with proper spacing */}
                <p className="text-text-body text-fluid-sm sm:text-fluid-base leading-relaxed mb-6 text-left">
                  {service.description}
                </p>

                {/* Button with proper spacing */}
                <div className="pt-2">
                  <Button
                    variant="brand-outline"
                    className="group-hover:bg-brand-blue-light group-hover:text-primary-foreground transition-all duration-300 btn-responsive w-full"
                    asChild
                  >
                    <Link to={service.link}>
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </CardContent>

              {/* Clean glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button
            variant="brand"
            size="lg"
            className="btn-responsive-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-semibold rounded-full shadow-2xl hover:shadow-brand-blue-light/30 transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

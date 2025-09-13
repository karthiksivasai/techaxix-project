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

        <div className="services-grid mb-12 sm:mb-16 md:mb-20">
          {services.slice(0, 6).map((service, index) => (
            <Card
              key={index}
              className="card group relative overflow-hidden hover:shadow-2xl hover:shadow-brand-blue-light/20 transition-all duration-500 ease-out hover:scale-[1.02] cursor-pointer border border-border/50 hover:border-accent/30"
            >
              <CardContent className="relative p-5 sm:p-6 md:p-7 lg:p-8 h-full flex flex-col">
                {/* Icon with enhanced styling */}
                <div className="mb-5 flex justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-2xl bg-gradient-to-br from-accent/10 to-brand-blue-light/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-brand-blue-light/20 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Title with improved typography */}
                <h3 className="text-fluid-base sm:text-fluid-lg md:text-fluid-xl lg:text-fluid-xl xl:text-fluid-2xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 text-center leading-tight">
                  {service.title}
                </h3>

                {/* Description with better spacing and alignment */}
                <p className="text-text-body text-fluid-sm sm:text-fluid-base leading-relaxed mb-4 text-center flex-grow">
                  {service.description}
                </p>

                {/* Button with enhanced styling */}
                <div className="mt-auto pt-3">
                  <Button
                    variant="brand-outline"
                    className="group-hover:bg-gradient-to-r group-hover:from-brand-blue-light group-hover:to-accent group-hover:text-white group-hover:border-transparent transition-all duration-300 btn-responsive w-full font-semibold shadow-md group-hover:shadow-lg py-2"
                    asChild
                  >
                    <Link to={service.link} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </CardContent>

              {/* Enhanced glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-brand-blue-light/10 to-accent/10 rounded-2xl blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brand-blue-light/5 rounded-2xl"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button
            variant="brand"
            size="lg"
            className="btn-responsive-lg px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 font-semibold rounded-full shadow-2xl hover:shadow-brand-blue-light/40 transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-brand-blue-light to-accent hover:from-accent hover:to-brand-blue-light"
            asChild
          >
            <Link to="/services" className="flex items-center justify-center">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

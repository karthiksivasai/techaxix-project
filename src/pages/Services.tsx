import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  Users,
  Cloud,
  Database,
  Smartphone,
  Briefcase,
  TrendingUp,
  Settings,
  Brain,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Digital Transformation Projects",
      description:
        "We help organizations modernize their business processes and IT landscapes through end-to-end digital transformation initiatives. Our approach ensures streamlined workflows, increased productivity, and improved customer experience.",
      icon: TrendingUp,
      link: "/services/digital-transformation",
    },
    {
      title: "Oracle Fusion Cloud Implementation & Support",
      description:
        "We provide comprehensive Oracle Fusion Cloud services, covering full lifecycle implementation, post-go-live support, and continuous optimization across HCM, SCM, Finance, Maintenance, Manufacturing & EPM modules.",
      icon: Cloud,
      link: "/services/oracle-fusion-cloud",
    },
    {
      title: "Data, Automation & AI",
      description:
        "At Techaxis Consulting, we help businesses unlock the power of data-driven intelligence. By combining automation with artificial intelligence, we transform complex challenges into smart, scalable solutions.",
      icon: Brain,
      link: "/services/data-automation-ai",
    },
    {
      title: "Oracle E-Business Suite (EBS) Implementation & Support",
      description:
        "Our expertise extends to Oracle EBS Suite, where we deliver implementation, customization, and managed support services for HCM, SCM, Finance, Maintenance, Manufacturing & Hyperion modules.",
      icon: Database,
      link: "/services/oracle-ebs",
    },
    {
      title: "Custom Cloud Solutions",
      description:
        "We design and develop customized applications and solutions based on client-specific needs, leveraging leading cloud platforms including OCI, Azure & Google Cloud.",
      icon: Settings,
      link: "/services/custom-cloud",
    },
    {
      title: "Mobile Application Development",
      description:
        "Our skilled team builds intuitive and scalable mobile applications that enhance customer engagement and business mobility across iOS and Android platforms.",
      icon: Smartphone,
      link: "/services/mobile-development",
    },
    {
      title: "Staff Augmentation",
      description:
        "We provide flexible IT staffing solutions, offering skilled professionals who can seamlessly integrate into your teams to meet short-term and long-term project requirements.",
      icon: Users,
      link: "/services/staff-augmentation",
    },
    {
      title: "Program & Project Management Consultancy",
      description:
        "Our certified consultants deliver end-to-end program and project management services, ensuring that your strategic initiatives are executed on time, within budget, and aligned with business goals.",
      icon: Briefcase,
      link: "/services/project-management",
    },
  ];

  return (
    <>
      <SEO
        title="Our Services - Techaxis Consulting | Oracle ERP & Digital Transformation"
        description="Comprehensive IT solutions and consulting services including Oracle ERP, digital transformation, cloud solutions, mobile development, and more. Transform your business with our expertise."
        keywords="Oracle ERP, Digital Transformation, Cloud Solutions, Mobile Development, Staff Augmentation, Project Management, Data Automation AI, Techaxis Consulting"
        canonical="/services"
      />
      <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Our Service Offerings
          </h1>
          <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions and consulting services designed to transform your business 
            and drive sustainable growth through technology innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <Link to={service.link} key={index} className="block mb-8">
                <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
                  <CardContent className="relative p-0">
                    <div
                      className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                    >
                      <div
                        className={`p-12 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                      >
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                            <service.icon className="w-8 h-8 text-accent" />
                          </div>
                          <h2 className="text-3xl font-bold text-text-primary">
                            {service.title}
                          </h2>
                        </div>

                        <p className="text-text-body leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <Button variant="cta">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>

                      <div
                        className={`bg-gradient-to-br from-accent/20 via-brand-blue-light/20 to-accent/20 p-12 flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                      >
                        <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center">
                          {service.title ===
                            "Digital Transformation Projects" && (
                            <TrendingUp className="w-24 h-24 text-accent" />
                          )}
                          {service.title ===
                            "Oracle Fusion Cloud Implementation & Support" && (
                            <Cloud className="w-24 h-24 text-brand-blue-light" />
                          )}
                          {service.title ===
                            "Oracle E-Business Suite (EBS) Implementation & Support" && (
                            <Database className="w-24 h-24 text-accent" />
                          )}
                          {service.title === "Custom Cloud Solutions" && (
                            <Settings className="w-24 h-24 text-brand-blue-light" />
                          )}
                          {service.title ===
                            "Mobile Application Development" && (
                            <Smartphone className="w-24 h-24 text-accent" />
                          )}
                          {service.title === "Staff Augmentation" && (
                            <Users className="w-24 h-24 text-brand-blue-light" />
                          )}
                          {service.title ===
                            "Program & Project Management Consultancy" && (
                            <Briefcase className="w-24 h-24 text-accent" />
                          )}
                          {service.title === "Data, Automation & AI" && (
                            <Brain className="w-24 h-24 text-brand-blue-light" />
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Clean glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-text-body mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and
            drive growth.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

    </div>
    </>
  );
};

export default Services;

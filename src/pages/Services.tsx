import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Cloud, TestTube, Users, Smartphone } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      title: "Web Technology Solutions",
      description: "Web revolutionized the way companies do business. It is no longer regarded as a medium for communication, web-based eCommerce solutions have opened new opportunities, social networking sites, eLearning applications & so on further improvised the business scope mitigating the boundaries.",
      fullDescription: "A right partner — one with proven expertise can help your business in streamlining processes & integrating operations, resulting in savings & sustainable competitive differentiation. We provide high-performance eBusiness and eCommerce solutions to our clients such as - Web Portals, Social Networking sites, Customer relationship management applications, content management and Workflow solutions, eLearnings portals, storefronts, integration with back-end applications.",
      icon: Code,
      industries: ["Insurance", "Financial Services", "Manufacturing", "Telecommunications", "Retail", "Energy and Utilities"]
    },
    {
      title: "Application Development & Maintenance",
      description: "Leveraging on the use of latest technologies our custom software development team delivers robust, scalable and high-performance applications tailored to your business needs.",
      fullDescription: "Our application development services cover the entire software development lifecycle from requirements analysis to deployment and maintenance. We specialize in creating enterprise-grade applications that drive business growth and operational efficiency.",
      icon: Smartphone,
      industries: ["Enterprise Software", "Mobile Applications", "Desktop Applications", "Web Applications"]
    },
    {
      title: "Testing Services",
      description: "The use of automated testing tools and optimized software delivery reduces project costs and time-to-market while ensuring the highest quality standards.",
      fullDescription: "Our comprehensive testing services include functional testing, performance testing, security testing, and user acceptance testing. We ensure your applications are reliable, secure, and perform optimally across all platforms.",
      icon: TestTube,
      industries: ["Quality Assurance", "Automated Testing", "Performance Testing", "Security Testing"]
    },
    {
      title: "Consulting Services",
      description: "QIS brings systematic approach to technology consulting, design, technology architecture and implementation to deliver measurable business value.",
      fullDescription: "Our consulting services help organizations align their technology strategy with business objectives. We provide expert guidance on digital transformation, technology roadmaps, and architectural decisions.",
      icon: Users,
      industries: ["Digital Transformation", "Technology Strategy", "Architecture Design", "Process Optimization"]
    },
    {
      title: "Cloud Computing",
      description: "Cloud Computing would definitely redefine the prevailing business trends & processes by providing scalable, flexible and cost-effective solutions.",
      fullDescription: "Our cloud services include cloud migration, cloud-native development, and multi-cloud management. We help businesses leverage the power of cloud computing to reduce costs and increase agility.",
      icon: Cloud,
      industries: ["Cloud Migration", "Cloud Architecture", "DevOps", "Infrastructure Management"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expertise spans across various industries including insurance, financial services, 
            manufacturing, telecommunications, retail, energy and utilities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-accent" />
                        </div>
                        <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed mb-8">
                        {service.fullDescription}
                      </p>

                      <div className="mb-8">
                        <h4 className="font-semibold text-primary mb-4">Key Areas:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.industries.map((industry, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{industry}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button variant="cta">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className={`bg-gradient-to-br from-primary/5 to-accent/5 p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="w-48 h-48 rounded-full bg-gradient-primary opacity-20"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <Button variant="secondary" size="lg">
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
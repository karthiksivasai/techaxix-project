import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Smartphone, CheckCircle, ArrowRight } from "lucide-react";

const ApplicationDevelopment = () => {
  const services = [
    "Requirements Analysis & Design",
    "Enterprise Application Development",
    "Mobile Application Development",
    "Desktop Application Development",
    "Web Application Development",
    "Application Maintenance & Support",
    "Legacy Application Modernization",
    "System Integration Services",
  ];

  const technologies = [
    "Java & Spring Framework",
    "Microsoft .NET",
    "React & Angular",
    "Node.js & Express",
    "Python & Django",
    "Mobile Development (iOS/Android)",
    "Database Technologies",
    "Cloud Platforms",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                  Application Development & Maintenance
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Leveraging on the use of latest technologies our custom software
                development team delivers robust, scalable and high-performance
                applications tailored to your business needs.
              </p>
            </div>
            <div className="bg-gradient-primary opacity-20 rounded-2xl h-80"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-text-primary mb-6">
                  Our Application Development Expertise
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our application development services cover the entire software
                  development lifecycle from requirements analysis to deployment
                  and maintenance. We specialize in creating enterprise-grade
                  applications that drive business growth and operational
                  efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a new application from scratch or want to
                  modernize your existing systems, our experienced team delivers
                  solutions that are scalable, secure, and aligned with your
                  business objectives.
                </p>
              </CardContent>
            </Card>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
                <CardContent className="relative p-8">
                  <h3 className="text-xl font-bold text-text-primary mb-6">
                    Development Services
                  </h3>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Clean glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
                </div>
              </Card>

              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
                <CardContent className="relative p-8">
                  <h3 className="text-xl font-bold text-text-primary mb-6">
                    Technologies We Use
                  </h3>
                  <div className="space-y-4">
                    {technologies.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Clean glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
                </div>
              </Card>
            </div>

            {/* Process Section */}
            <Card className="group relative overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
              <CardContent className="relative p-8">
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  Our Development Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold text-xl">1</span>
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Analysis
                    </h4>
                    <p className="text-sm text-text-body">
                      Requirements gathering and system analysis
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold text-xl">2</span>
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">Design</h4>
                    <p className="text-sm text-text-body">
                      Architecture design and planning
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold text-xl">3</span>
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Development
                    </h4>
                    <p className="text-sm text-text-body">
                      Agile development and testing
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold text-xl">4</span>
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Deployment
                    </h4>
                    <p className="text-sm text-text-body">
                      Deployment and ongoing support
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Clean glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
              </div>
            </Card>

            {/* Benefits Section */}
            <Card className="group relative overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
              <CardContent className="relative p-8">
                <h3 className="text-xl font-bold text-text-primary mb-6">
                  Why Choose Our Application Development Services?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Custom Solutions
                    </h4>
                    <p className="text-sm text-text-body">
                      Tailored applications for your specific business needs
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Quality Assurance
                    </h4>
                    <p className="text-sm text-text-body">
                      Rigorous testing and quality control processes
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-muted mb-2">
                      Ongoing Support
                    </h4>
                    <p className="text-sm text-text-body">
                      Continuous maintenance and support services
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Clean glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
              </div>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Next Application?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your application development needs and create a
            solution that drives your business forward.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="group hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-2xl px-8 py-4 text-lg font-semibold"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ApplicationDevelopment;

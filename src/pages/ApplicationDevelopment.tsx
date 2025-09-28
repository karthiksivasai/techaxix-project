import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Smartphone, CheckCircle, ArrowRight } from "lucide-react";

const ApplicationDevelopment = () => {

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
      <section className="py-20 header-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Expertise Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Our Application Development Expertise
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                Our application development services cover the entire software
                development lifecycle from requirements analysis to deployment
                and maintenance. We specialize in creating enterprise-grade
                applications that drive business growth and operational
                efficiency.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Whether you need a new application from scratch or want to
                modernize your existing systems, our experienced team delivers
                solutions that are scalable, secure, and aligned with your
                business objectives.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Why Choose Our Application Development Services?
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Smartphone className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Custom Solutions
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Tailored applications for your specific business needs
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Quality Assurance
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Rigorous testing and quality control processes
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <ArrowRight className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Ongoing Support
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Continuous maintenance and support services
                  </p>
                </div>
              </div>
            </div>

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

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  ArrowRight,
  TrendingUp,
  Zap,
} from "lucide-react";

// Import consulting icon
import consultingIcon from "@/assets/consulting-icon.png";

const DigitalTransformation = () => {

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 via-brand-blue-light/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
                  Digital Transformation Projects
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We help organizations modernize their business processes and IT
                landscapes through end-to-end digital transformation
                initiatives. Our approach ensures streamlined workflows,
                increased productivity, and improved customer experience.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={consultingIcon}
                  alt="Digital Transformation"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 header-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Expertise Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Our Digital Transformation Expertise
              </h2>
              <p className="text-text-body leading-relaxed mb-6">
                We help organizations embrace digital transformation by
                reimagining business processes, implementing modern
                technologies, and creating innovative solutions that drive
                growth and operational efficiency.
              </p>
              <p className="text-text-body leading-relaxed">
                Our digital transformation services are designed to help
                businesses adapt to the rapidly changing digital landscape,
                improve customer engagement, and create sustainable
                competitive advantages.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Why Choose Our Digital Transformation Services?
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <TrendingUp className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Proven Results
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Track record of successful digital transformations
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Zap className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Rapid Implementation
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Agile methodology for faster time-to-value
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Expert Team
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Experienced professionals with deep domain knowledge
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Start Your Digital Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DigitalTransformation;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  ArrowRight,
  BarChart3,
  Shield,
} from "lucide-react";

// Import consulting icon
import consultingIcon from "@/assets/consulting-icon.png";

const StaffAugmentation = () => {

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 via-brand-blue-light/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
                  Staff Augmentation
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We provide flexible IT staffing solutions, offering skilled
                professionals who can seamlessly integrate into your teams to
                meet short-term and long-term project requirements.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={consultingIcon}
                  alt="Staff Augmentation"
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
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Our Staff Augmentation Services
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                Our staff augmentation services provide access to skilled IT
                professionals with deep domain expertise, helping you scale
                your team quickly and efficiently without the overhead of
                permanent hiring.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Whether you need Oracle ERP specialists, cloud architects,
                developers, or project managers, we provide flexible staffing
                solutions that integrate seamlessly with your existing team
                and processes.
              </p>
            </div>



            {/* Why Choose Us Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Why Choose Our Staff Augmentation?
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Expert Team
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Skilled professionals with proven track records
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <BarChart3 className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Flexible Scaling
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Scale up or down based on project needs
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Shield className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Quality Assurance
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Rigorous screening and quality standards
                  </p>
                </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Get Started with Staff Augmentation
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

export default StaffAugmentation;

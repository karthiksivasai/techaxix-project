import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cloud,
  ArrowRight,
  BarChart3,
  Shield,
} from "lucide-react";

// Import cloud icon
import cloudIcon from "@/assets/cloud-icon.png";

const OracleFusionCloud = () => {

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 via-brand-blue-light/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
                  Oracle Fusion Cloud Implementation & Support
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We provide comprehensive Oracle Fusion Cloud services, covering
                full lifecycle implementation, post-go-live support, and
                continuous optimization across HCM, SCM, Finance, Maintenance,
                Manufacturing & EPM modules.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={cloudIcon}
                  alt="Oracle Fusion Cloud"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold text-text-primary mb-6">
                  Our Oracle Fusion Cloud Expertise
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our Oracle Fusion Cloud expertise spans across all major
                  modules including Human Capital Management, Supply Chain
                  Management, Financial Management, Maintenance, Manufacturing,
                  and Enterprise Performance Management.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We provide comprehensive implementation services, from initial
                  planning and configuration to ongoing support and
                  optimization, ensuring your Oracle Fusion Cloud deployment
                  delivers maximum business value.
                </p>
              </CardContent>
            </Card>


            {/* Benefits Section */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Why Oracle Fusion Cloud?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      Cloud-Native
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Built for the cloud with automatic updates and scalability
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      AI-Powered
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Built-in AI and machine learning capabilities
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      Enterprise Security
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      World-class security and compliance features
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Start Your Oracle Fusion Cloud Journey
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

export default OracleFusionCloud;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, ArrowRight, CheckCircle } from "lucide-react";

const CloudComputing = () => {

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                  Cloud Computing
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Cloud Computing would definitely redefine the prevailing
                business trends & processes by providing scalable, flexible and
                cost-effective solutions.
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
                Our Cloud Computing Expertise
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                Our cloud services include cloud migration, cloud-native
                development, and multi-cloud management. We help businesses
                leverage the power of cloud computing to reduce costs and
                increase agility.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Whether you're looking to migrate existing applications to the
                cloud or build new cloud-native solutions, our team provides
                comprehensive cloud services that align with your business
                objectives.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                Benefits of Cloud Computing
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Cloud className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Cost Efficiency
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Reduce infrastructure costs and operational expenses
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">
                    Scalability
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Scale resources up or down based on demand
                  </p>
                </div>
                <div className="text-center px-6 py-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <ArrowRight className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-4 text-xl">Agility</h4>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    Faster deployment and time-to-market
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Start Cloud Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us help you harness the power of cloud computing to transform
            your business operations and drive growth.
          </p>
          <Button variant="secondary" size="lg">
            Start Cloud Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default CloudComputing;

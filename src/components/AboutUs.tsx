import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-image.jpg";

const AboutUs = () => {
  const features = [
    "QIS Culture",
    "Technical & Domain Expertise", 
    "Committed to Quality",
    "Big Experience"
  ];

  return (
    <section className="py-20 bg-secondary/30" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <img 
              src={teamImage}
              alt="Quantum Innovative Solutions Team"
              className="rounded-2xl shadow-card-custom w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-elegant">
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm font-medium">years</div>
                <div className="text-xs mt-1">experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-semibold mb-2 tracking-wider">WHO WE ARE</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Quantum Innovative Solutions
              </h2>
            </div>

            <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
              <p>
                QIS is well positioned to deliver cost effective solutions to its clients with its 
                global presence, best practices, highly secured environment and total confidentiality 
                along with its angel teams.
              </p>
              <p>
                Quantum Innovative Solutions has proved itself as a provider of exceptional enterprise 
                solutions to help businesses adapt to the constantly changing market dynamics and 
                technological innovations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 my-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 border-l-4 border-l-accent bg-background hover:shadow-card-custom transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="font-medium text-sm">{feature}</p>
                  </div>
                </Card>
              ))}
            </div>

            <Link to="/services">
              <Button 
                variant="default" 
                size="lg" 
                className="mt-8"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
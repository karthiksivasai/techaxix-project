import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-image.jpg";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      title: "QIS Culture",
      description: "Our culture has mix of both worlds, striking the best balance of all the offshore firms. Most of our QIS's management team has extensive domestic and international experience, and understands our clients' culture.",
      icon: Users
    },
    {
      title: "Technical & Domain Expertise", 
      description: "QIS is specialized in verticals and horizontals rather than just regions and development centers. With our deep domain expertise in key verticals and providing solutions for enterprises.",
      icon: Target
    },
    {
      title: "Committed to Quality",
      description: "Every solution we develop, every challenge we embrace, every investment we make in resources and projects is dedicated to making our customers' businesses profitable.",
      icon: Award
    },
    {
      title: "Big Experience",
      description: "With 25+ years of experience in the industry, we have proved ourselves as a provider of exceptional enterprise solutions.",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We have approximately 25+ years of experience in delivering exceptional technology solutions.
          </p>
        </div>
      </section>

      {/* Our Passion Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <p className="text-accent font-semibold mb-2 tracking-wider">ABOUT US</p>
                <h2 className="text-4xl font-bold text-primary mb-6">Our Passion</h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Every solution we develop for enterprises, every challenge we embrace, every investment we make 
                  in resources and projects, every recommendation we make - is dedicated to a single target.
                </p>
                <p>
                  Making our customers' businesses profitable by empowering them to be more process oriented 
                  to their customers and to the competitive environment.
                </p>
                <p>
                  We'll achieve this by focusing on the intersection of our clients' emerging needs and the 
                  acceleration of business and technological change. Our commitment to innovation keeps us 
                  focused on the future and being ready at every level to service change.
                </p>
              </div>

              <Button variant="cta" size="lg" className="mt-8">
                Get In Touch
              </Button>
            </div>

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
          </div>
        </div>
      </section>

      {/* Strategic Partnership */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Strategic Partnership</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Every solution we develop for enterprises, every challenge we embrace, every investment we make 
                in resources and projects, every recommendation we make - is dedicated to a single target.
              </p>
              <p>
                Making our customers' businesses profitable by empowering them to be more process oriented 
                to their customers and to the competitive environment.
              </p>
              <p>
                We'll achieve this by focusing on the intersection of our clients' emerging needs and the 
                acceleration of business and technological change. Our commitment to innovation keeps us 
                focused on the future and being ready at every level to service change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2 tracking-wider">PERFORMANCE FEATURE</p>
            <h2 className="text-4xl font-bold text-primary">Power of Performance</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-card-custom transition-all duration-300 border-l-4 border-l-accent">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
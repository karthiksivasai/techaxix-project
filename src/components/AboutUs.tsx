import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-image.jpg";
import { Database, Users, Shield, Globe, Zap, Clock, Target, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutUs = () => {
  const isMobile = useIsMobile();
  
  // CMS fields for Mission & Values content
  const missionText = "Our mission is to empower organizations with cutting-edge Oracle ERP solutions and digital transformation services that drive innovation, efficiency, and sustainable growth. We are committed to delivering exceptional value through our expertise, innovation, and unwavering dedication to client success.";
  
  const valuesText = "Our values are the foundation of everything we do: Innovation in technology solutions, Excellence in service delivery, Integrity in all business relationships, Collaboration with our clients and teams, and Commitment to continuous learning and improvement. These principles guide us in creating lasting partnerships and achieving mutual success.";
  
  const features = [
    "Strong expertise in Oracle ERP & Cloud technologies",
    "Agile delivery methodology with customer-first approach",
    "End-to-end support from implementation to managed services",
    "Proven experience across industries",
  ];

  const whyChooseUs = [
    {
      text: "Strong expertise in Oracle ERP & Cloud technologies",
      icon: Database,
      description: "Oracle & Cloud expertise",
    },
    {
      text: "Agile delivery methodology with customer-first approach",
      icon: Users,
      description: "Agile & customer-focused",
    },
    {
      text: "End to End Service from Implementation to Managed Services",
      icon: Shield,
      description: "Complete support",
    },
    {
      text: "Proven experience across industries",
      icon: Globe,
      description: "Industry experience",
    },
    {
      text: "Focus on innovation and digital excellence",
      icon: Zap,
      description: "Innovation focus",
    },
    {
      text: "24/7 dedicated support and maintenance services",
      icon: Clock,
      description: "Round-the-clock support",
    },
  ];

  return (
    <section className="section section-responsive" id="about">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <img
              src={teamImage}
              alt="Techaxis Consulting Team"
              className="rounded-2xl shadow-card-custom w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 bg-accent text-accent-foreground rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">25+</div>
                <div className="text-sm sm:text-base font-medium">years</div>
                <div className="text-xs sm:text-sm mt-1">experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <p className="text-accent font-semibold mb-2 sm:mb-3 tracking-wider text-fluid-base sm:text-fluid-lg">
                WHO WE ARE
              </p>
            </div>

            <div className="text-text-body text-fluid-base sm:text-fluid-lg leading-relaxed space-y-3 sm:space-y-4">
              <p className="font-semibold text-text-primary">
                Next-generation IT solutions and consulting company committed to
                driving innovation, efficiency, and growth with Oracle ERP
                expertise.
              </p>
              <p>
                Techaxis Consulting Private Limited is a next-generation IT
                solutions and consulting company committed to driving
                innovation, efficiency, and growth. With deep expertise across
                industries, we help organizations embrace digital transformation
                and achieve business excellence.
              </p>
              <p>
                With a blend of domain expertise, technology excellence, and a
                client-first approach, we partner with organizations to drive
                sustainable business success.
              </p>
            </div>


            {/* Our Services Button with proper spacing to avoid overlap */}
            <div className="pt-4 sm:pt-6">
              <Link to="/services">
                <Button
                  variant="brand"
                  size="lg"
                  className="btn-responsive-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-semibold rounded-full shadow-2xl hover:shadow-brand-blue-light/30 transform hover:scale-105 transition-all duration-300"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mission & Values Section */}
        <section className="section">
          <div className="container-responsive">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Our Mission & Values
            </h3>
            <p className="text-text-body text-lg max-w-2xl mx-auto">
              Discover what drives us and the principles that guide our work
            </p>
          </div>
          
          <TooltipProvider>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-4xl mx-auto">
              {isMobile ? (
                // Mobile: Accordion implementation
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="mission" className="border border-accent/20 rounded-lg">
                    <AccordionTrigger 
                      className="px-6 py-4 text-left hover:no-underline"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="flex items-center gap-3">
                        <Target className="w-6 h-6 text-accent" />
                        <span className="font-semibold text-text-primary text-lg">Mission</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-text-body leading-relaxed">{missionText}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="values" className="border border-accent/20 rounded-lg">
                    <AccordionTrigger 
                      className="px-6 py-4 text-left hover:no-underline"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="flex items-center gap-3">
                        <Heart className="w-6 h-6 text-accent" />
                        <span className="font-semibold text-text-primary text-lg">Values</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-text-body leading-relaxed">{valuesText}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                // Desktop: Hover popover implementation
                <>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            size="lg"
                            className="flex items-center gap-3 px-8 py-4 border-accent/30 text-text-primary hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 min-w-[200px]"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <Target className="w-6 h-6 text-accent" />
                            Mission
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-96 p-6 bg-background border-accent/20 shadow-lg">
                          <p className="text-text-body leading-relaxed">{missionText}</p>
                        </PopoverContent>
                      </Popover>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Hover to view our mission</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            size="lg"
                            className="flex items-center gap-3 px-8 py-4 border-accent/30 text-text-primary hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 min-w-[200px]"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <Heart className="w-6 h-6 text-accent" />
                            Values
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-96 p-6 bg-background border-accent/20 shadow-lg">
                          <p className="text-text-body leading-relaxed">{valuesText}</p>
                        </PopoverContent>
                      </Popover>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Hover to view our values</p>
                    </TooltipContent>
                  </Tooltip>
                </>
              )}
            </div>
          </TooltipProvider>
          </div>
        </section>

        {/* Meet Our Leadership Section */}
        <section id="leadership" className="section">
          <div className="container-responsive">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
              Meet Our Leadership
            </h3>
            <p className="text-text-body text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              At Techaxis Consulting, our leaders drive growth and strategic objectives by leading from the front—supporting our customers, partners, and organization. They play a vital role in preserving our rich culture while upholding our unwavering commitment to core values.
            </p>
            
            {/* Know More Button */}
            <div className="mb-12">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-accent/30 text-text-primary hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 font-semibold rounded-full"
              >
                Know More
              </Button>
            </div>
          </div>
          
          {/* Leadership Profiles */}
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
            {/* Naseem Ahmed Profile */}
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-brand-blue-light/20 flex items-center justify-center">
                    <Users className="w-16 h-16 sm:w-20 sm:h-20 text-accent/60" />
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-text-primary mb-2 text-xl">Naseem Ahmed</h4>
              <p className="text-accent font-semibold mb-4">Leadership Role</p>
              <p className="text-text-body leading-relaxed text-sm">
                Experienced leader with deep expertise in Oracle ERP solutions and digital transformation, driving strategic growth and client success.
              </p>
            </div>
            
            {/* Tareni Mohanti Profile */}
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-brand-blue-light/20 flex items-center justify-center">
                    <Users className="w-16 h-16 sm:w-20 sm:h-20 text-accent/60" />
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-text-primary mb-2 text-xl">Tareni Mohanti</h4>
              <p className="text-accent font-semibold mb-4">Leadership Role</p>
              <p className="text-text-body leading-relaxed text-sm">
                Strategic leader focused on innovation and excellence, committed to delivering cutting-edge solutions and maintaining our core values.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section">
          <div className="container-responsive">
            <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#0B2545' }}>
              Why Choose Us?
            </h3>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#6C7A91' }}>
              We deliver exceptional value through our proven expertise and
              client-focused approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl"
              >
                {/* Content */}
                <div className="relative p-6">
                  {/* Icon container with clean background */}
                  <div className="mb-6 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-brand-blue-light/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-brand-blue-light/20 transition-all duration-300 group-hover:scale-110">
                      <item.icon className="w-7 h-7 text-accent group-hover:text-brand-blue-light transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="text-center">
                    <p className="font-medium leading-relaxed group-hover:text-accent transition-colors duration-300" style={{ color: '#2E3A59' }}>
                      {item.text}
                    </p>
                  </div>

                  {/* Hover effect indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-1 bg-gradient-to-r from-accent to-brand-blue-light rounded-full"></div>
                  </div>
                </div>

                {/* Clean glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
                </div>
              </Card>
            ))}
          </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;

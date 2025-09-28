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
    <>
      <section className="full-screen-section about-background" id="about">
        {/* Animated Grid Background */}
        <div className="animated-grid">
          <div className="grid-lines"></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        
        {/* Subtle Particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        
        {/* Light Rays */}
        <div className="light-ray ray-1"></div>
        <div className="light-ray ray-2"></div>
        
        {/* Frosted Glass Panels */}
        <div className="frosted-glass glass-panel-1"></div>
        <div className="frosted-glass glass-panel-2"></div>
        <div className="frosted-glass glass-panel-3"></div>
        
        <div className="full-screen-content section-content">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center max-w-7xl mx-auto">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <img
                src={teamImage}
                alt="Techaxis Consulting Team"
                className="rounded-2xl shadow-card-custom w-full h-auto object-cover"
              />
            </div>

            {/* Content Side */}
            <div className="space-y-8 sm:space-y-10 order-1 lg:order-2">
              <div>
                <p className="text-accent font-semibold mb-3 sm:mb-4 tracking-wider text-fluid-lg sm:text-fluid-xl">
                  WHO WE ARE
                </p>
              </div>

              <div className="text-text-body text-fluid-lg sm:text-fluid-xl leading-relaxed space-y-4 sm:space-y-6 text-left">
                <p className="font-semibold text-text-primary text-left">
                  Next-generation IT solutions and consulting company committed to
                  driving innovation, efficiency, and growth with Oracle ERP
                  expertise.
                </p>
                <p className="text-left">
                  Techaxis Consulting Private Limited is a next-generation IT
                  solutions and consulting company committed to driving
                  innovation, efficiency, and growth. With deep expertise across
                  industries, we help organizations embrace digital transformation
                  and achieve business excellence.
                </p>
                <p className="text-left">
                  With a blend of domain expertise, technology excellence, and a
                  client-first approach, we partner with organizations to drive
                  sustainable business success.
                </p>
              </div>

              {/* Our Services Button with proper spacing to avoid overlap */}
              <div className="pt-6 sm:pt-8">
                <Link to="/services">
                  <Button
                    variant="brand"
                    size="lg"
                    className="btn-responsive-lg px-10 sm:px-12 md:px-14 py-5 sm:py-6 md:py-7 font-semibold rounded-full shadow-2xl hover:shadow-brand-blue-light/30 transform hover:scale-105 transition-all duration-300"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section - Separate section with distinct background */}
      <section id="mission-values" className="full-screen-section mission-values-background">
        {/* Animated Grid Background */}
        <div className="animated-grid">
          <div className="grid-lines"></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
        
        {/* Subtle Particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-4"></div>
        
        {/* Light Rays */}
        <div className="light-ray ray-3"></div>
        
        {/* Frosted Glass Panels */}
        <div className="frosted-glass glass-panel-2"></div>
        <div className="frosted-glass glass-panel-4"></div>
        <div className="frosted-glass glass-panel-5"></div>
        
        <div className="full-screen-content section-content">
          <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up animate-delay-100">
            <h3 className="text-fluid-3xl sm:text-fluid-4xl md:text-fluid-5xl lg:text-fluid-5xl xl:text-fluid-6xl font-bold text-text-primary mb-6 sm:mb-8">
              Our Mission & Values
            </h3>
            <p className="text-text-body text-fluid-lg sm:text-fluid-xl max-w-4xl mx-auto leading-relaxed">
              Discover what drives us and the principles that guide our work
            </p>
          </div>
          
          <TooltipProvider>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center max-w-6xl mx-auto animate-fade-in-up animate-delay-300">
              {isMobile ? (
                // Mobile: Accordion implementation
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="mission" className="border border-accent/20 rounded-lg">
                    <AccordionTrigger 
                      className="px-8 py-6 text-left hover:no-underline"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="flex items-center gap-4">
                        <Target className="w-8 h-8 text-accent" />
                        <span className="font-semibold text-text-primary text-xl">Mission</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-8">
                      <p className="text-text-body leading-relaxed text-lg">{missionText}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="values" className="border border-accent/20 rounded-lg">
                    <AccordionTrigger 
                      className="px-8 py-6 text-left hover:no-underline"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="flex items-center gap-4">
                        <Heart className="w-8 h-8 text-accent" />
                        <span className="font-semibold text-text-primary text-xl">Values</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-8">
                      <p className="text-text-body leading-relaxed text-lg">{valuesText}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                // Desktop: Hover tooltip implementation
                <>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex items-center gap-4 px-12 py-6 border-accent/30 text-text-primary hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 min-w-[280px] group relative text-lg font-semibold"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <Target className="w-8 h-8 text-accent" />
                        Mission
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="w-96 p-6 bg-background border-accent/20 shadow-lg max-w-md">
                      <p className="text-text-body leading-relaxed">{missionText}</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex items-center gap-4 px-12 py-6 border-accent/30 text-text-primary hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 min-w-[280px] group relative text-lg font-semibold"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <Heart className="w-8 h-8 text-accent" />
                        Values
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="w-96 p-6 bg-background border-accent/20 shadow-lg max-w-md">
                      <p className="text-text-body leading-relaxed">{valuesText}</p>
                    </TooltipContent>
                  </Tooltip>
                </>
              )}
            </div>
          </TooltipProvider>
          </div>
        </div>
      </section>

      {/* Meet Our Leadership Section */}
      <section id="leadership" className="full-screen-section leadership-background">
        {/* Animated Grid Background */}
        <div className="animated-grid">
          <div className="grid-lines"></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-3"></div>
        
        {/* Subtle Particles */}
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        
        {/* Light Rays */}
        <div className="light-ray ray-1"></div>
        <div className="light-ray ray-2"></div>
        
        {/* Frosted Glass Panels */}
        <div className="frosted-glass glass-panel-1"></div>
        <div className="frosted-glass glass-panel-3"></div>
        <div className="frosted-glass glass-panel-5"></div>
        
        <div className="full-screen-content section-content">
          <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-fluid-3xl sm:text-fluid-4xl md:text-fluid-5xl lg:text-fluid-5xl xl:text-fluid-6xl font-bold text-text-primary mb-8 sm:mb-10">
              Meet Our Leadership
            </h3>
            <p className="text-text-body text-fluid-lg sm:text-fluid-xl max-w-6xl mx-auto leading-relaxed mb-12 sm:mb-16">
              At Techaxis Consulting, our leaders drive growth and strategic objectives by leading from the front—supporting our customers, partners, and organization. They play a vital role in preserving our rich culture while upholding our unwavering commitment to core values.
            </p>
            
            {/* Know More Button */}
            <div className="mb-12 sm:mb-16">
              <Link to="/directors">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-12 py-5 sm:py-6 border-accent/30 text-text-primary hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 font-semibold rounded-full text-lg sm:text-xl"
                >
                  Know More
                </Button>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="full-screen-section why-choose-us-background">
        {/* Animated Grid Background */}
        <div className="animated-grid">
          <div className="grid-lines"></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
        
        {/* Subtle Particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-4"></div>
        
        {/* Light Rays */}
        <div className="light-ray ray-1"></div>
        <div className="light-ray ray-3"></div>
        
        {/* Frosted Glass Panels */}
        <div className="frosted-glass glass-panel-1"></div>
        <div className="frosted-glass glass-panel-2"></div>
        <div className="frosted-glass glass-panel-4"></div>
        <div className="frosted-glass glass-panel-5"></div>
        
        <div className="full-screen-content section-content">
          <div className="container-responsive">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h3 className="text-fluid-3xl sm:text-fluid-4xl md:text-fluid-5xl lg:text-fluid-5xl xl:text-fluid-6xl font-bold mb-6 sm:mb-8" style={{ color: '#0B2545' }}>
              Why Choose Us?
            </h3>
            <p className="text-fluid-lg sm:text-fluid-xl max-w-5xl mx-auto leading-relaxed" style={{ color: '#6C7A91' }}>
              We deliver exceptional value through our proven expertise and
              client-focused approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-xl"
              >
                {/* Content */}
                <div className="relative p-4 sm:p-5 md:p-6">
                  {/* Icon container with clean background */}
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-accent/10 to-brand-blue-light/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-brand-blue-light/20 transition-all duration-300 group-hover:scale-110">
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent group-hover:text-brand-blue-light transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="text-center">
                    <p className="font-medium leading-relaxed group-hover:text-accent transition-colors duration-300 text-sm sm:text-base" style={{ color: '#2E3A59' }}>
                      {item.text}
                    </p>
                  </div>

                  {/* Hover effect indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-6 h-1 bg-gradient-to-r from-accent to-brand-blue-light rounded-full"></div>
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
        </div>
      </section>
    </>
  );
};

export default AboutUs;

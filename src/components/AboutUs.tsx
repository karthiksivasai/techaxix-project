import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-image.jpg";
import { Database, Users, Shield, Globe, Zap, Clock, Target, Heart } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { CMSService, type CMSContent, type LeadershipMember } from "@/lib/cms";

const AboutUs = () => {
  const isMobile = useIsMobile();
  const [missionOpen, setMissionOpen] = useState(false);
  const [valuesOpen, setValuesOpen] = useState(false);
  
  // CMS Content State
  const [cmsContent, setCmsContent] = useState<CMSContent | null>(null);
  const [loading, setLoading] = useState(true);

  // Load CMS content on component mount
  useEffect(() => {
    const loadContent = async () => {
      try {
        const content = await CMSService.getContent();
        setCmsContent(content);
      } catch (error) {
        console.error('Failed to load CMS content:', error);
        // Fallback to default content
        setCmsContent(null);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  // Get content from CMS or fallback to default
  const missionText = cmsContent?.mission_text || `Our mission is to empower organizations with cutting-edge Oracle ERP solutions and digital transformation services. We are committed to delivering innovative, scalable, and efficient technology solutions that drive business growth and operational excellence.

We strive to be the trusted partner that helps businesses navigate the complexities of digital transformation, ensuring seamless integration of Oracle technologies while maintaining the highest standards of quality and customer satisfaction.`;

  const valuesText = cmsContent?.values_text || `Our core values define who we are and guide everything we do:

• **Innovation**: We embrace new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the competition.

• **Integrity**: We maintain the highest ethical standards in all our business dealings, building trust through transparency and honesty.

• **Excellence**: We are committed to delivering exceptional quality in every project, going above and beyond to exceed expectations.

• **Collaboration**: We believe in the power of teamwork, both within our organization and with our clients, fostering partnerships that drive mutual success.

• **Customer-Centric**: Our clients' success is our success. We listen, understand, and deliver solutions that truly meet their unique needs and challenges.`;

  const leadershipTeam = cmsContent?.leadership_team || [];

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
      text: "End-to-end support from implementation to managed services",
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
    <section className="section alt section-responsive" id="about">
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

            {/* Mission & Values Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {!isMobile ? (
                // Desktop: Hover Cards
                <>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex items-center gap-2 bg-card/50 border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={missionOpen}
                      >
                        <Target className="w-4 h-4" />
                        Mission
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-card border-accent/30">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-accent">Our Mission</h4>
                        <p className="text-sm text-text-body leading-relaxed whitespace-pre-line">
                          {missionText}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex items-center gap-2 bg-card/50 border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={valuesOpen}
                      >
                        <Heart className="w-4 h-4" />
                        Values
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-card border-accent/30">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-accent">Our Values</h4>
                        <p className="text-sm text-text-body leading-relaxed whitespace-pre-line">
                          {valuesText}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </>
              ) : (
                // Mobile: Accordion
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="mission" className="border-accent/30">
                    <AccordionTrigger 
                      className="flex items-center gap-2 text-accent hover:text-accent/80 [&[data-state=open]]:text-accent"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={missionOpen}
                    >
                      <Target className="w-4 h-4" />
                      Mission
                    </AccordionTrigger>
                    <AccordionContent className="text-text-body leading-relaxed">
                      {missionText}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="values" className="border-accent/30">
                    <AccordionTrigger 
                      className="flex items-center gap-2 text-accent hover:text-accent/80 [&[data-state=open]]:text-accent"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={valuesOpen}
                    >
                      <Heart className="w-4 h-4" />
                      Values
                    </AccordionTrigger>
                    <AccordionContent className="text-text-body leading-relaxed">
                      <div className="whitespace-pre-line">
                        {valuesText}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
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

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Us?
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
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
                    <p className="font-medium text-gray-300 leading-relaxed group-hover:text-accent transition-colors duration-300">
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

        {/* Meet Our Leadership Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Meet Our Leadership
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our experienced leadership team brings decades of expertise in Oracle ERP, digital transformation, and technology consulting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.length > 0 ? (
              leadershipTeam.map((member, index) => {
                const icons = [Users, Database, Shield];
                const IconComponent = icons[index % icons.length];
                
                return (
                  <Card 
                    key={member.id}
                    className="group relative overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl"
                  >
                    <div className="relative p-6">
                      <div className="mb-6 flex items-center justify-center">
                        {member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={`${member.name} avatar`}
                            className="w-24 h-24 rounded-full object-cover border-2 border-accent/30 group-hover:border-accent/60 transition-all duration-300"
                          />
                        ) : (
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-brand-blue-light/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-brand-blue-light/30 transition-all duration-300 group-hover:scale-110">
                            <IconComponent className="w-12 h-12 text-accent group-hover:text-brand-blue-light transition-colors duration-300" />
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                        <p className="text-accent font-semibold mb-3">{member.position}</p>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {member.bio}
                        </p>
                        {(member.linkedin || member.email) && (
                          <div className="mt-4 flex justify-center gap-3">
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:text-brand-blue-light transition-colors duration-300"
                                aria-label={`${member.name}'s LinkedIn profile`}
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                              </a>
                            )}
                            {member.email && (
                              <a
                                href={`mailto:${member.email}`}
                                className="text-accent hover:text-brand-blue-light transition-colors duration-300"
                                aria-label={`Email ${member.name}`}
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/>
                                </svg>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })
            ) : (
              // Fallback content when no CMS data is available
              <>
                <Card className="group relative overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
                  <div className="relative p-6">
                    <div className="mb-6 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-brand-blue-light/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-brand-blue-light/30 transition-all duration-300 group-hover:scale-110">
                        <Users className="w-12 h-12 text-accent group-hover:text-brand-blue-light transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-white mb-2">John Smith</h4>
                      <p className="text-accent font-semibold mb-3">CEO & Founder</p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        25+ years of experience in Oracle ERP implementations and digital transformation across Fortune 500 companies.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="group relative overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl">
                  <div className="relative p-6">
                    <div className="mb-6 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-brand-blue-light/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-brand-blue-light/30 transition-all duration-300 group-hover:scale-110">
                        <Database className="w-12 h-12 text-accent group-hover:text-brand-blue-light transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-white mb-2">Sarah Johnson</h4>
                      <p className="text-accent font-semibold mb-3">CTO</p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Expert in cloud architecture and Oracle Cloud technologies with 20+ years of technical leadership experience.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="group relative overflow-hidden bg-card shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl md:col-span-2 lg:col-span-1">
                  <div className="relative p-6">
                    <div className="mb-6 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-brand-blue-light/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-brand-blue-light/30 transition-all duration-300 group-hover:scale-110">
                        <Shield className="w-12 h-12 text-accent group-hover:text-brand-blue-light transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-white mb-2">Michael Chen</h4>
                      <p className="text-accent font-semibold mb-3">VP of Operations</p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Operations leader with 18+ years in project management and client success, ensuring exceptional delivery standards.
                      </p>
                    </div>
                  </div>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

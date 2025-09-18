import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import teamImage from "@/assets/team-image.jpg";
import { Users, Target, Award, Globe, CheckCircle } from "lucide-react";

const About = () => {
  // About page-specific schema
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Techaxis Consulting - Oracle ERP & Digital Transformation Experts",
    "description": "Learn about Techaxis Consulting, a leading IT solutions company with 25+ years of experience in Oracle ERP, digital transformation, and cloud solutions.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Techaxis Consulting Private Limited",
      "alternateName": "Techaxis",
      "slogan": "Axis of Possibilities",
      "description": "Next-generation IT solutions and consulting company committed to driving innovation, efficiency, and growth with Oracle ERP expertise.",
      "foundingDate": "1999",
      "numberOfEmployees": "50-200",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@techaxisconsulting.com"
      },
      "sameAs": [
        "https://www.linkedin.com/company/techaxis-consulting",
        "https://twitter.com/techaxis_consult"
      ],
      "serviceArea": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Oracle ERP Solutions",
              "description": "Oracle Fusion Cloud and Oracle EBS implementation and consulting services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Transformation",
              "description": "End-to-end digital transformation consulting and implementation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Computing",
              "description": "Cloud migration, optimization, and managed services"
            }
          }
        ]
      }
    }
  };

  const whyChooseUs = [
    "Strong expertise in Oracle ERP & Cloud technologies",
    "Agile delivery methodology with customer-first approach",
    "End-to-end support from implementation to managed services",
    "Proven experience across industries",
    "Focus on innovation and digital excellence",
  ];

  const serviceOfferings = [
    "Digital Transformation Projects – Streamlining processes & enabling business innovation.",
    "Oracle Fusion Cloud Implementation & Support – Covering HCM, SCM, Finance, Maintenance, Manufacturing & EPM modules.",
    "Oracle E-Business Suite (EBS) Implementation & Support – Expertise in HCM, SCM, Finance, Maintenance, Manufacturing & Hyperion.",
    "Custom Cloud Solutions – Tailored solutions on OCI, Azure & Google Cloud.",
    "Mobile Application Development – Scalable apps for iOS & Android platforms.",
    "Staff Augmentation – Flexible IT staffing to strengthen client teams.",
    "Program & Project Management Consultancy – Ensuring on-time, on-budget delivery.",
  ];

  return (
    <>
      <SEO
        title="About Techaxis Consulting - Oracle ERP & Digital Transformation Experts"
        description="Learn about Techaxis Consulting, a leading IT solutions company with 25+ years of experience in Oracle ERP, digital transformation, and cloud solutions. Discover our mission, values, and commitment to driving business excellence."
        keywords="About Techaxis Consulting, IT Solutions Company, Oracle ERP Experts, Digital Transformation, Cloud Solutions, IT Consulting Services, Techaxis Team, Business Excellence"
        canonical="/about"
        schema={aboutSchema}
      />
      <div className="min-h-screen">

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5" aria-label="About Us Hero Section">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
              About Us
            </h1>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              Techaxis Consulting Private Limited is a next-generation IT
              solutions and consulting company committed to driving innovation,
              efficiency, and growth.
            </p>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-20 bg-background" aria-label="Company Overview">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-8">
                  <p className="text-accent font-semibold mb-2 tracking-wider">
                    WHO WE ARE
                  </p>
                  <h2 className="text-4xl font-bold text-text-primary mb-6">
                    Techaxis Consulting Private Limited
                  </h2>
                  <p className="text-xl text-primary font-semibold mb-6">
                    Axis of Possibilities
                  </p>
                </div>

                <div className="space-y-6 text-muted-foreground leading-relaxed text-left">
                  <p className="text-left">
                    Techaxis Consulting Private Limited is a next-generation IT
                    solutions and consulting company committed to driving
                    innovation, efficiency, and growth. With deep expertise across
                    industries, we help organizations embrace digital
                    transformation and achieve business excellence.
                  </p>
                  <p className="text-left">
                    With a blend of domain expertise, technology excellence, and a
                    client-first approach, we partner with organizations to drive
                    sustainable business success.
                  </p>
                  <p className="text-left">
                    ✨ With a blend of domain expertise, technology excellence,
                    and a client-first approach, we partner with organizations to
                    drive sustainable business success.
                  </p>
                </div>

                <Button variant="cta" size="lg" className="mt-8" asChild>
                  <Link to="/contact" aria-label="Contact Techaxis Consulting team">Get In Touch</Link>
                </Button>
              </div>

              <div className="relative">
                <img
                  src={teamImage}
                  alt="Techaxis Consulting Team - Professional IT consultants working together"
                  className="rounded-2xl shadow-card-custom w-full object-cover"
                  loading="lazy"
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

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10" aria-label="Why Choose Techaxis Consulting">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-text-primary mb-6">
                Why Choose Techaxis Consulting?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine deep technical expertise with business acumen to deliver
                transformative solutions that drive real business value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="bg-background/50 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="text-accent mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{reason}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Offerings Section */}
        <section className="py-20 bg-background" aria-label="Our Service Offerings">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-text-primary mb-6">
                Our Service Offerings
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive IT solutions designed to meet the evolving needs of
                modern businesses.
              </p>
            </div>

            <div className="space-y-6">
              {serviceOfferings.map((offering, index) => (
                <Card key={index} className="bg-gradient-to-r from-primary/5 to-accent/5 border-border/50 hover:border-accent/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{offering}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10" aria-label="Our Core Values">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-text-primary mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our every decision and action.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-background/50 border-border/50 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Collaboration</h3>
                  <p className="text-muted-foreground">Working together to achieve exceptional results</p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-border/50 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Excellence</h3>
                  <p className="text-muted-foreground">Striving for the highest quality in everything we do</p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-border/50 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Innovation</h3>
                  <p className="text-muted-foreground">Embracing new technologies and creative solutions</p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-border/50 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Global Reach</h3>
                  <p className="text-muted-foreground">Delivering solutions worldwide with local expertise</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;

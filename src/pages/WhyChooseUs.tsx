import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Users, 
  Shield, 
  Globe, 
  Zap, 
  Clock, 
  CheckCircle, 
  Award, 
  Target, 
  TrendingUp, 
  Headphones, 
  Lightbulb,
  ArrowRight,
  Star,
  Building2,
  Code2,
  Cloud,
  BarChart3
} from "lucide-react";

const WhyChooseUs = () => {
  // SEO Schema for Why Choose Us page
  const whyChooseUsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Choose Techaxis Consulting - IT Services & Solutions",
    "description": "Discover why leading organizations choose Techaxis Consulting for Oracle ERP, Cloud Computing, Digital Transformation, and comprehensive IT solutions.",
    "url": "https://techaxisconsulting.com/why-choose-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "Techaxis Consulting",
      "description": "Leading IT consulting firm specializing in Oracle ERP, Cloud Computing, and Digital Transformation",
      "url": "https://techaxisconsulting.com",
      "sameAs": [
        "https://www.linkedin.com/company/techaxis-consulting",
        "https://twitter.com/techaxisconsult"
      ]
    }
  };

  const coreStrengths = [
    {
      icon: Database,
      title: "Oracle & Cloud Expertise",
      description: "Deep expertise in Oracle ERP, EBS, Fusion Cloud, and modern cloud technologies",
      features: ["Oracle EBS Implementation", "Fusion Cloud Migration", "Cloud Architecture", "Database Optimization"]
    },
    {
      icon: Users,
      title: "Agile & Customer-Focused",
      description: "Agile delivery methodology with unwavering focus on customer success",
      features: ["Agile Methodology", "Customer-Centric Approach", "Rapid Prototyping", "Continuous Feedback"]
    },
    {
      icon: Shield,
      title: "End-to-End Services",
      description: "Complete support from implementation to managed services and maintenance",
      features: ["Implementation", "Integration", "Managed Services", "24/7 Support"]
    },
    {
      icon: Globe,
      title: "Industry Experience",
      description: "Proven experience across diverse industries and business verticals",
      features: ["Manufacturing", "Healthcare", "Finance", "Retail", "Government"]
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Cutting-edge solutions and digital excellence for competitive advantage",
      features: ["AI & Automation", "Digital Transformation", "Modern Technologies", "Future-Ready Solutions"]
    },
    {
      icon: Clock,
      title: "Round-the-Clock Support",
      description: "24/7 dedicated support and maintenance services for uninterrupted operations",
      features: ["24/7 Monitoring", "Rapid Response", "Proactive Maintenance", "Global Support"]
    }
  ];

  const competitiveAdvantages = [
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Oracle Certified professionals with industry-recognized certifications",
      stat: "100+"
    },
    {
      icon: Target,
      title: "Project Success Rate",
      description: "Consistently high project success rate with on-time delivery",
      stat: "98%"
    },
    {
      icon: TrendingUp,
      title: "Client Satisfaction",
      description: "Exceptional client satisfaction scores and long-term partnerships",
      stat: "99%"
    },
    {
      icon: Building2,
      title: "Years of Experience",
      description: "Decades of combined experience in enterprise solutions",
      stat: "15+"
    }
  ];

  const serviceHighlights = [
    {
      icon: Code2,
      title: "Custom Development",
      description: "Tailored solutions built specifically for your business needs",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with zero downtime",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Advanced analytics and business intelligence solutions",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: Headphones,
      title: "Support Services",
      description: "Comprehensive support and maintenance for all solutions",
      color: "bg-orange-50 border-orange-200"
    }
  ];

  const testimonials = [
    {
      quote: "Techaxis Consulting transformed our Oracle implementation with their expertise and dedication. The team's knowledge and support were exceptional.",
      author: "Sarah Johnson",
      role: "CTO, Manufacturing Corp",
      rating: 5
    },
    {
      quote: "Their cloud migration services helped us reduce costs by 40% while improving performance. Highly recommended for enterprise solutions.",
      author: "Michael Chen",
      role: "IT Director, Healthcare Systems",
      rating: 5
    },
    {
      quote: "The team's agile approach and customer focus made our digital transformation journey smooth and successful.",
      author: "Emily Rodriguez",
      role: "VP Technology, Financial Services",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Techaxis Consulting - IT Services & Solutions</title>
        <meta 
          name="description" 
          content="Discover why leading organizations choose Techaxis Consulting for Oracle ERP, Cloud Computing, Digital Transformation, and comprehensive IT solutions. Expert team, proven results." 
        />
        <meta 
          name="keywords" 
          content="why choose techaxis, oracle consulting, cloud services, IT solutions, digital transformation, enterprise consulting, techaxis advantages" 
        />
        <link rel="canonical" href="https://techaxisconsulting.com/why-choose-us" />
        <script type="application/ld+json">
          {JSON.stringify(whyChooseUsSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
                Why Choose Techaxis Consulting
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                Your Trusted Partner in
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {" "}Digital Excellence
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                We combine deep technical expertise with business acumen to deliver 
                transformative solutions that drive real business value and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="px-6 py-2 text-lg">
                  <Award className="w-5 h-5 mr-2" />
                  15+ Years Experience
                </Badge>
                <Badge variant="outline" className="px-6 py-2 text-lg">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  98% Success Rate
                </Badge>
                <Badge variant="outline" className="px-6 py-2 text-lg">
                  <Users className="w-5 h-5 mr-2" />
                  100+ Certified Experts
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                Our Core Strengths
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                What sets us apart in the competitive landscape of IT consulting and enterprise solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreStrengths.map((strength, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/50 bg-background/50">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <strength.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">{strength.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {strength.description}
                    </p>
                    <div className="space-y-2">
                      {strength.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                Proven Results & Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our track record speaks for itself with measurable outcomes and client success stories
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <advantage.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{advantage.stat}</div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">{advantage.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Highlights Section */}
        <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                Comprehensive Service Portfolio
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From strategy to implementation, we provide end-to-end solutions across all technology domains
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceHighlights.map((service, index) => (
                <Card key={index} className={`group hover:shadow-lg transition-all duration-300 border-2 ${service.color} hover:scale-105`}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it - hear from the organizations we've helped transform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/50 bg-background/50">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-border/50 pt-4">
                      <div className="font-semibold text-text-primary">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of successful organizations that trust Techaxis Consulting 
                for their digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/services" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyChooseUs;

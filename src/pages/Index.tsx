import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  // Homepage-specific schema
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Techaxis Consulting - Oracle ERP & Digital Transformation Solutions",
    "description": "Leading IT solutions and consulting company specializing in Oracle ERP, digital transformation, and cloud solutions with 25+ years of experience.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Techaxis Consulting Private Limited",
      "url": "https://techaxisconsulting.com",
      "logo": "https://techaxisconsulting.com/src/assets/techAxix_logo-removebg-preview.png",
      "description": "Next-generation IT solutions and consulting company committed to driving innovation, efficiency, and growth with Oracle ERP expertise.",
      "foundingDate": "1999",
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
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Application Development",
              "description": "Custom application development and mobile solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Testing Services",
              "description": "Comprehensive software testing and quality assurance"
            }
          }
        ]
      }
    }
  };

  return (
    <>
      <SEO
        title="Techaxis Consulting - Oracle ERP & Digital Transformation Solutions"
        description="Leading IT solutions and consulting company specializing in Oracle ERP, digital transformation, and cloud solutions with 25+ years of experience. Transform your business with our expertise."
        keywords="Oracle ERP, Digital Transformation, Cloud Solutions, IT Consulting, Oracle Fusion Cloud, Oracle EBS, Business Solutions, Techaxis Consulting, IT Services, Cloud Migration"
        canonical="/"
        schema={homeSchema}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <AboutUs />
        <Services />
        <Industries />
        <Careers />
        <Footer />
      </main>
    </>
  );
};

export default Index;

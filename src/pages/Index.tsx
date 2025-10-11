import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Careers from "@/components/Careers";
import SEO from "@/components/SEO";
import ImagePreloader from "@/components/ImagePreloader";
import LoadingIndicator from "@/components/LoadingIndicator";
import { useState, useEffect } from "react";

const Index = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Critical images that should be preloaded for better UX
  const criticalImages = [
    "/logo.png",
    "/favicon.ico",
    "/assets/hero-background.jpg",
    "/assets/team-image.jpg"
  ];

  // Fallback timeout to hide loading indicator after 10 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!imagesLoaded) {
        console.warn('Loading timeout reached, hiding loading indicator');
        setImagesLoaded(true);
      }
    }, 10000); // 10 seconds timeout

    return () => clearTimeout(timeout);
  }, [imagesLoaded]);

  // Manual close function for loading indicator
  const handleCloseLoading = () => {
    setImagesLoaded(true);
  };

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
      "logo": "https://techaxisconsulting.com/logo.png",
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
      
      {/* Preload critical images */}
      <ImagePreloader 
        images={criticalImages}
        onAllLoaded={() => setImagesLoaded(true)}
        onProgress={(loaded, total) => {
          const progress = (loaded / total) * 100;
          setLoadingProgress(progress);
          console.log(`Images loaded: ${loaded}/${total} (${Math.round(progress)}%)`);
        }}
      />
      
      {/* Show loading indicator while images are loading */}
      {!imagesLoaded && (
        <LoadingIndicator 
          message="Loading images..."
          showProgress={true}
          progress={loadingProgress}
          onClose={handleCloseLoading}
        />
      )}
      
      <Hero />
      <AboutUs />
      <Services />
      <Industries />
      <Careers />
    </>
  );
};

export default Index;

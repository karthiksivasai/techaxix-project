import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schema?: object;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/logo.png',
  ogType = 'website',
  schema,
  noindex = false
}: SEOProps) => {
  const baseUrl = 'https://techaxisconsulting.com';
  const fullUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  // Default organization schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Techaxis Consulting Private Limited",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Leading IT solutions and consulting company specializing in Oracle ERP, digital transformation, and cloud solutions with 25+ years of experience.",
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
        }
      ]
    }
  };

  // Merge default schema with page-specific schema
  const finalSchema = schema ? { ...defaultSchema, ...schema } : defaultSchema;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Techaxis Consulting" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@techaxis_consult" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Techaxis Consulting Private Limited" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* JSON-LD Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;

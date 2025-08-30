import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-responsive relative flex items-center justify-center bg-gradient-to-br from-hero-bg to-hero-overlay overflow-hidden"
      style={{ paddingTop: '2rem' }}
      aria-label="Hero Section - Transform Your Business"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        role="img"
        aria-label="Hero background showing business transformation concept"
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-responsive text-center" style={{ marginTop: '-2rem' }}>
        <div className="hero-content-responsive mx-auto">
          <h1 className="text-fluid-3xl sm:text-fluid-4xl md:text-fluid-5xl lg:text-fluid-5xl xl:text-fluid-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
            TRANSFORM YOUR BUSINESS WITH{" "}
            <span className="text-gradient-brand font-extrabold">
              TECHAXIS CONSULTING
            </span>{" "}
            AND UNLOCK THE{" "}
            <span className="text-accent font-extrabold">
              AXIS OF POSSIBILITIES
            </span>
            .
          </h1>

          <p className="text-fluid-base sm:text-fluid-lg md:text-fluid-xl lg:text-fluid-xl xl:text-fluid-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Next-generation IT solutions and consulting company committed to
            driving innovation, efficiency, and growth with Oracle ERP
            expertise.
          </p>

          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <Link to="/contact" aria-label="Get in touch with Techaxis Consulting team">
              <Button
                variant="brand"
                size="lg"
                className="btn-responsive-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 font-semibold rounded-full shadow-2xl hover:shadow-brand-blue-light/30 transform hover:scale-105 transition-all duration-300"
              >
                GET IN TOUCH
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        role="button"
        tabIndex={0}
        aria-label="Scroll down to explore more content"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 md:w-8 md:h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 md:h-4 bg-white rounded-full mt-2 sm:mt-3 md:mt-4 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

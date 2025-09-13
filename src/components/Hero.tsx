import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero hero-responsive relative flex items-center justify-center overflow-hidden"
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
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h1 className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-4xl xl:text-fluid-5xl font-bold text-text-primary leading-tight text-center">
              TRANSFORM YOUR BUSINESS WITH{" "}
              <span className="text-primary font-extrabold">
                TECHAXIS
              </span>{" "}
              <span className="text-primary font-extrabold">
                CONSULTING
              </span>{" "}
              AND UNLOCK THE{" "}
              <span className="text-accent font-extrabold">
                AXIS OF
              </span>{" "}
              <span className="text-accent font-extrabold">
                POSSIBILITIES.
              </span>
            </h1>
          </div>

          <p className="text-fluid-base sm:text-fluid-lg md:text-fluid-xl lg:text-fluid-xl xl:text-fluid-2xl text-text-body mb-6 sm:mb-8 md:mb-10 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 text-right">
            Next-generation IT solutions and consulting company committed to
            driving innovation, efficiency, and growth with Oracle ERP
            expertise.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-text-primary animate-bounce"
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

import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero hero-responsive flex items-center justify-center"
      aria-label="Hero Section - Transform Your Business"
    >
      {/* Content */}
      <div className="hero__content container-responsive text-center">
        <div className="hero-content-responsive mx-auto">
          <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in-up animate-delay-200">
            <h1 className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-4xl xl:text-fluid-5xl font-bold text-white leading-tight text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}>
              TRANSFORM YOUR BUSINESS WITH{" "}
              <span className="font-extrabold" style={{ color: '#1e40af', textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0 0 6px rgba(0,0,0,0.5)' }}>
                TECHAXIS
              </span>{" "}
              <span className="font-extrabold" style={{ color: '#1e40af', textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0 0 6px rgba(0,0,0,0.5)' }}>
                CONSULTING
              </span>{" "}
              AND UNLOCK THE{" "}
              <span className="font-extrabold" style={{ color: '#00A8A8', textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0 0 6px rgba(0,0,0,0.5)' }}>
                AXIS OF
              </span>{" "}
              <span className="font-extrabold" style={{ color: '#00A8A8', textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0 0 6px rgba(0,0,0,0.5)' }}>
                POSSIBILITIES.
              </span>
            </h1>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10 animate-fade-in-up animate-delay-600"
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

import ErrorPage from "../../components/ErrorPage";

const Maintenance = () => {
  const maintenanceIllustration = (
    <div className="w-48 h-48 relative">
      {/* Maintenance Icon */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Wrench */}
        <div className="w-24 h-6 bg-gradient-to-r from-accent to-brand-blue-light rounded-full transform rotate-45 relative">
          <div className="absolute -top-2 -left-2 w-10 h-10 border-4 border-brand-blue-light rounded-full"></div>
        </div>

        {/* Screwdriver */}
        <div className="w-20 h-4 bg-gradient-to-r from-accent to-accent/80 rounded-full transform -rotate-45 relative mt-4">
          <div className="absolute -top-1 -right-1 w-8 h-6 bg-accent rounded-t-full"></div>
        </div>

        {/* Gear */}
        <div className="w-16 h-16 border-4 border-brand-blue-light rounded-full relative mt-4">
          <div className="absolute inset-2 border-2 border-brand-blue-light rounded-full"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-brand-blue-light rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-brand-blue-light rounded-full"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-brand-blue-light rounded-full"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-brand-blue-light rounded-full"></div>
        </div>
      </div>

      {/* Maintenance Indicator */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse">
        <span className="text-white text-xs font-bold">🔧</span>
      </div>

      {/* Progress Bar */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-secondary/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-brand-blue-light rounded-full animate-pulse"
          style={{ width: "60%" }}
        ></div>
      </div>
    </div>
  );

  return (
    <ErrorPage
      errorCode="503"
      title="Under Maintenance"
      message="We're upgrading our systems to serve you better. Please check back soon."
      description="We're performing scheduled maintenance to improve your experience. This should only take a few minutes."
      actions={{
        primary: {
          text: "Check Back Later",
          href: "/",
          variant: "primary",
        },
      }}
      illustration={maintenanceIllustration}
    />
  );
};

export default Maintenance;

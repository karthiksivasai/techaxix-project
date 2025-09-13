import ErrorPage from "../../components/ErrorPage";

const NotFound = () => {
  const techIllustration = (
    <div className="w-48 h-48 relative">
      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 border-2 border-accent rounded-lg opacity-40">
        <div className="absolute top-4 left-4 w-3 h-3 bg-accent rounded-full"></div>
        <div className="absolute top-4 right-4 w-3 h-3 bg-brand-blue-light rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-3 h-3 bg-accent rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-brand-blue-light rounded-full"></div>

        {/* Circuit Lines */}
        <div className="absolute top-6 left-6 w-16 h-0.5 bg-gradient-to-r from-accent to-brand-blue-light"></div>
        <div className="absolute top-6 right-6 w-16 h-0.5 bg-gradient-to-l from-accent to-brand-blue-light"></div>
        <div className="absolute bottom-6 left-6 w-16 h-0.5 bg-gradient-to-r from-brand-blue-light to-accent"></div>
        <div className="absolute bottom-6 right-6 w-16 h-0.5 bg-gradient-to-l from-brand-blue-light to-accent"></div>

        {/* Vertical Lines */}
        <div className="absolute left-6 top-6 w-0.5 h-16 bg-gradient-to-b from-accent to-brand-blue-light"></div>
        <div className="absolute right-6 top-6 w-0.5 h-16 bg-gradient-to-b from-brand-blue-light to-accent"></div>
      </div>

      {/* Central Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-accent rounded-full flex items-center justify-center">
          <span className="text-accent text-2xl font-bold">?</span>
        </div>
      </div>
    </div>
  );

  return (
    <ErrorPage
      errorCode="404"
      title="Page Not Found"
      message="Oops! The page you're looking for doesn't exist."
      description="The page you're trying to access may have been moved, deleted, or never existed. Don't worry, we'll help you get back on track."
      actions={{
        primary: {
          text: "Go Back Home",
          href: "/",
          variant: "primary",
        },
      }}
      illustration={techIllustration}
    />
  );
};

export default NotFound;

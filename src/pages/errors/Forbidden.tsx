import ErrorPage from "../../components/ErrorPage";

const Forbidden = () => {
  const lockIllustration = (
    <div className="w-48 h-48 relative">
      {/* Lock Body */}
      <div className="absolute inset-0 flex flex-col items-center">
        {/* Lock Shackle */}
        <div className="w-20 h-16 border-4 border-accent rounded-t-full border-b-0 relative">
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent"></div>
        </div>

        {/* Lock Body */}
        <div className="w-16 h-20 bg-gradient-to-b from-accent to-brand-blue-light rounded-lg relative mt-2">
          {/* Keyhole */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-white rounded-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Base */}
        <div className="w-20 h-2 bg-brand-blue-light rounded-full mt-1"></div>
      </div>

      {/* Access Denied Indicator */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse">
        <span className="text-white text-xs font-bold">✕</span>
      </div>

      {/* Security Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-2 left-2 w-1 h-1 bg-accent rounded-full"></div>
        <div className="absolute top-2 right-2 w-1 h-1 bg-accent rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-accent rounded-full"></div>
      </div>
    </div>
  );

  return (
    <ErrorPage
      errorCode="403"
      title="Access Forbidden"
      message="You don't have permission to access this page."
      description="This area is restricted. If you believe this is an error, please contact our support team for assistance."
      actions={{
        primary: {
          text: "Go Back Home",
          href: "/",
          variant: "primary",
        },
        secondary: {
          text: "Contact Support",
          href: "/contact",
          variant: "outline",
        },
      }}
      illustration={lockIllustration}
    />
  );
};

export default Forbidden;

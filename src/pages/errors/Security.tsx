import ErrorPage from "../../components/ErrorPage";

const Security = () => {
  const securityIllustration = (
    <div className="w-48 h-48 relative">
      {/* Shield */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-40 bg-gradient-to-b from-[#2E86FF] to-[#5AB1FF] rounded-t-full relative">
          {/* Shield Top */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#2E86FF] rounded-full"></div>

          {/* Shield Body */}
          <div className="absolute inset-2 bg-gradient-to-b from-[#0B1A30] to-[#1a2a40] rounded-t-full flex items-center justify-center">
            {/* Security Icon */}
            <div className="w-16 h-16 border-4 border-[#FF4D4D] rounded-full flex items-center justify-center">
              <span className="text-[#FF4D4D] text-2xl font-bold">🔒</span>
            </div>
          </div>

          {/* Shield Border */}
          <div className="absolute inset-0 border-4 border-[#5AB1FF] rounded-t-full"></div>
        </div>
      </div>

      {/* Security Alert */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF4D4D] rounded-full flex items-center justify-center animate-pulse">
        <span className="text-white text-xs font-bold">⚠</span>
      </div>

      {/* Security Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-2 h-2 bg-[#FF4D4D] rounded-full"></div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF4D4D] rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#FF4D4D] rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#FF4D4D] rounded-full"></div>

        {/* Cross Pattern */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-[#FF4D4D] rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-[#FF4D4D] -rotate-45"></div>
      </div>

      {/* Floating Security Elements */}
      <div className="absolute top-8 left-8 w-3 h-3 bg-[#2E86FF] rounded-full animate-ping opacity-75"></div>
      <div className="absolute bottom-8 right-8 w-2 h-2 bg-[#5AB1FF] rounded-full animate-pulse opacity-75"></div>
    </div>
  );

  return (
    <ErrorPage
      errorCode="SECURITY"
      title="Security Alert"
      message="Suspicious activity detected. For your security, this action was blocked."
      description="Our security systems have identified unusual activity. This helps protect your account and our services."
      actions={{
        primary: {
          text: "Return to Homepage",
          href: "/",
          variant: "primary",
        },
        secondary: {
          text: "Contact Security Team",
          href: "/contact",
          variant: "outline",
        },
      }}
      illustration={securityIllustration}
    />
  );
};

export default Security;

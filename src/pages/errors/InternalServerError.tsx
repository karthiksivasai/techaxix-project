import ErrorPage from "../../components/ErrorPage";

const InternalServerError = () => {
  const serverIllustration = (
    <div className="w-48 h-48 relative">
      {/* Server Rack */}
      <div className="absolute inset-0 flex flex-col items-center">
        {/* Server Units */}
        <div className="w-32 h-8 bg-gradient-to-r from-[#2E86FF] to-[#5AB1FF] rounded-t-lg mb-1 relative">
          <div className="absolute top-1 left-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-1 right-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
        </div>

        <div className="w-32 h-8 bg-gradient-to-r from-[#5AB1FF] to-[#2E86FF] mb-1 relative">
          <div className="absolute top-1 left-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-1 right-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
        </div>

        <div className="w-32 h-8 bg-gradient-to-r from-[#FF4D4D] to-[#FF6B6B] mb-1 relative">
          <div className="absolute top-1 left-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-1 right-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
        </div>

        <div className="w-32 h-8 bg-gradient-to-r from-[#5AB1FF] to-[#2E86FF] mb-1 relative">
          <div className="absolute top-1 left-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-1 right-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
        </div>

        <div className="w-32 h-8 bg-gradient-to-r from-[#2E86FF] to-[#5AB1FF] relative">
          <div className="absolute top-1 left-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-1 right-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Error Indicator */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF4D4D] rounded-full flex items-center justify-center animate-pulse">
        <span className="text-white text-xs font-bold">!</span>
      </div>
    </div>
  );

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <ErrorPage
      errorCode="500"
      title="Internal Server Error"
      message="Something went wrong on our side. Please try again later."
      description="We're experiencing technical difficulties. Our team has been notified and is working to resolve the issue."
      actions={{
        primary: {
          text: "Reload Page",
          onClick: handleReload,
          variant: "primary",
        },
        secondary: {
          text: "Contact Support",
          href: "/contact",
          variant: "outline",
        },
      }}
      illustration={serverIllustration}
    />
  );
};

export default InternalServerError;

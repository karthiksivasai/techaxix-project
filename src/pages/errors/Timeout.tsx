import ErrorPage from "../../components/ErrorPage";

const Timeout = () => {
  const clockIllustration = (
    <div className="w-48 h-48 relative">
      {/* Clock Face */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 border-4 border-[#2E86FF] rounded-full relative bg-gradient-to-br from-[#0B1A30] to-[#1a2a40]">
          {/* Clock Numbers */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-[#5AB1FF] text-xs font-bold">
            12
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[#5AB1FF] text-xs font-bold">
            6
          </div>
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#5AB1FF] text-xs font-bold">
            9
          </div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#5AB1FF] text-xs font-bold">
            3
          </div>

          {/* Clock Hands */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Hour Hand */}
            <div className="w-1 h-8 bg-[#FF4D4D] rounded-full origin-bottom transform rotate-45"></div>
            {/* Minute Hand */}
            <div className="w-0.5 h-12 bg-[#5AB1FF] rounded-full origin-bottom transform -rotate-30 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            {/* Second Hand */}
            <div className="w-0.5 h-14 bg-[#FF6B6B] rounded-full origin-bottom transform rotate-60 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
          </div>

          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF4D4D] rounded-full"></div>
        </div>
      </div>

      {/* Timeout Indicator */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF4D4D] rounded-full flex items-center justify-center animate-pulse">
        <span className="text-white text-xs font-bold">⏱</span>
      </div>

      {/* Loading Dots */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
        <div className="w-2 h-2 bg-[#2E86FF] rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-[#5AB1FF] rounded-full animate-bounce delay-75"></div>
        <div className="w-2 h-2 bg-[#FF4D4D] rounded-full animate-bounce delay-150"></div>
      </div>
    </div>
  );

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <ErrorPage
      errorCode="TIMEOUT"
      title="Request Timeout"
      message="The request is taking too long."
      description="The server is taking longer than expected to respond. This might be due to high traffic or temporary issues."
      actions={{
        primary: {
          text: "Retry",
          onClick: handleRetry,
          variant: "primary",
        },
        secondary: {
          text: "Go Back Home",
          href: "/",
          variant: "outline",
        },
      }}
      illustration={clockIllustration}
    />
  );
};

export default Timeout;

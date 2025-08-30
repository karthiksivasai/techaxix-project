import ErrorPage from "../../components/ErrorPage";

const NotFound = () => {
  const techIllustration = (
    <div className="w-48 h-48 relative">
      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 border-2 border-[#2E86FF] rounded-lg opacity-30">
        <div className="absolute top-4 left-4 w-3 h-3 bg-[#2E86FF] rounded-full"></div>
        <div className="absolute top-4 right-4 w-3 h-3 bg-[#5AB1FF] rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#FF4D4D] rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-[#5AB1FF] rounded-full"></div>

        {/* Circuit Lines */}
        <div className="absolute top-6 left-6 w-16 h-0.5 bg-gradient-to-r from-[#2E86FF] to-[#5AB1FF]"></div>
        <div className="absolute top-6 right-6 w-16 h-0.5 bg-gradient-to-l from-[#2E86FF] to-[#5AB1FF]"></div>
        <div className="absolute bottom-6 left-6 w-16 h-0.5 bg-gradient-to-r from-[#5AB1FF] to-[#FF4D4D]"></div>
        <div className="absolute bottom-6 right-6 w-16 h-0.5 bg-gradient-to-l from-[#5AB1FF] to-[#FF4D4D]"></div>

        {/* Vertical Lines */}
        <div className="absolute left-6 top-6 w-0.5 h-16 bg-gradient-to-b from-[#2E86FF] to-[#5AB1FF]"></div>
        <div className="absolute right-6 top-6 w-0.5 h-16 bg-gradient-to-b from-[#5AB1FF] to-[#FF4D4D]"></div>
      </div>

      {/* Central Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#FF4D4D] rounded-full flex items-center justify-center">
          <span className="text-[#FF4D4D] text-2xl font-bold">?</span>
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

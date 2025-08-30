import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

interface ActionType {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
}

interface ErrorPageProps {
  errorCode: string;
  title: string;
  message: string;
  description?: string;
  actions: {
    primary: ActionType;
    secondary?: ActionType;
  };
  illustration?: ReactNode;
  showLogo?: boolean;
}

const ErrorPage = ({
  errorCode,
  title,
  message,
  description,
  actions,
  illustration,
  showLogo = true,
}: ErrorPageProps) => {
  const renderAction = (
    action: ActionType,
    variant: "primary" | "secondary" | "outline" = "primary",
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background";

    const variantClasses = {
      primary:
        "bg-gradient-to-r from-[#2E86FF] to-[#5AB1FF] text-white hover:from-[#1E76EF] hover:to-[#4AA1EF] shadow-lg hover:shadow-xl hover:shadow-[#2E86FF]/25",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
      outline:
        "border-2 border-[#2E86FF] text-[#2E86FF] hover:bg-[#2E86FF] hover:text-white",
    };

    const classes = `${baseClasses} ${variantClasses[variant]}`;

    if (action.href) {
      return (
        <Link to={action.href} className={classes}>
          {action.text}
        </Link>
      );
    }

    if (action.onClick) {
      return (
        <button onClick={action.onClick} className={classes}>
          {action.text}
        </button>
      );
    }

    return <button className={classes}>{action.text}</button>;
  };

  return (
    <div className="min-h-screen bg-[#0B1A30] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2E86FF] to-[#5AB1FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#FF4D4D] to-[#FF6B6B] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Logo */}
        {showLogo && (
          <div className="mb-8">
            <Logo variant="header" showTagline={false} />
          </div>
        )}

        {/* Error Code */}
        <div className="mb-6">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-[#2E86FF] to-[#5AB1FF] bg-clip-text animate-pulse">
            {errorCode}
          </h1>
        </div>

        {/* Error Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>

        {/* Error Message */}
        <p className="text-xl text-gray-300 mb-4 leading-relaxed">{message}</p>

        {/* Optional Description */}
        {description && (
          <p className="text-gray-400 mb-8 leading-relaxed">{description}</p>
        )}

        {/* Illustration */}
        {illustration && (
          <div className="mb-8 flex justify-center">{illustration}</div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {renderAction(actions.primary, actions.primary.variant || "primary")}
          {actions.secondary &&
            renderAction(
              actions.secondary,
              actions.secondary.variant || "secondary",
            )}
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-gray-500 text-sm">
          <p>
            Need help?{" "}
            <Link
              to="/contact"
              className="text-[#2E86FF] hover:text-[#5AB1FF] transition-colors"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-[#2E86FF] rounded-full animate-ping opacity-75"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-[#FF4D4D] rounded-full animate-pulse opacity-75"></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-[#5AB1FF] rounded-full animate-bounce opacity-60"></div>
    </div>
  );
};

export default ErrorPage;

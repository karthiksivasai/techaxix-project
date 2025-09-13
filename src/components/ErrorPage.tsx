import { ReactNode } from "react";
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
        "bg-gradient-to-r from-accent to-brand-blue-light text-white hover:from-accent/90 hover:to-brand-blue-light/90 shadow-lg hover:shadow-xl hover:shadow-accent/25",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
      outline:
        "border-2 border-accent text-accent hover:bg-accent hover:text-white",
    };

    const classes = `${baseClasses} ${variantClasses[variant]}`;

    if (action.href) {
      return (
        <a href={action.href} className={classes}>
          {action.text}
        </a>
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
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-brand-blue-light/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/20 to-brand-blue-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Logo */}
        {showLogo && (
          <div className="mb-8">
            <Logo variant="header" showTagline={false} useRouter={false} />
          </div>
        )}

        {/* Error Code */}
        <div className="mb-6">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-accent to-brand-blue-light bg-clip-text animate-pulse">
            {errorCode}
          </h1>
        </div>

        {/* Error Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {title}
        </h2>

        {/* Error Message */}
        <p className="text-xl text-text-body mb-4 leading-relaxed">{message}</p>

        {/* Optional Description */}
        {description && (
          <p className="text-text-body/80 mb-8 leading-relaxed">{description}</p>
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
        <div className="mt-8 text-text-body/60 text-sm">
          <p>
            Need help?{" "}
            <a
              href="/contact"
              className="text-accent hover:text-brand-blue-light transition-colors"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-ping opacity-75"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-accent rounded-full animate-pulse opacity-75"></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-brand-blue-light rounded-full animate-bounce opacity-60"></div>
    </div>
  );
};

export default ErrorPage;

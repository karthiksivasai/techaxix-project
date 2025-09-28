import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useNavigationHistory from "@/hooks/useNavigationHistory";

interface BackButtonProps {
  fallbackPath?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "brand" | "cta";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

const BackButton = ({ 
  fallbackPath, 
  className = "",
  variant = "outline",
  size = "default",
  children = "Back"
}: BackButtonProps) => {
  const navigate = useNavigate();
  const { getPreviousPath, canGoBack, getFallbackPath } = useNavigationHistory();

  const handleBack = () => {
    // Check if we can go back in history
    if (canGoBack()) {
      // Use browser's back button functionality
      window.history.back();
    } else {
      // Use provided fallback or smart fallback
      const targetPath = fallbackPath || getFallbackPath();
      navigate(targetPath);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleBack}
      className={`flex items-center gap-2 ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      {children}
    </Button>
  );
};

export default BackButton;

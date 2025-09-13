import { useState, useEffect } from "react";
import ErrorPage from "../../components/ErrorPage";

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
    if (isOnline) {
      window.location.reload();
    }
  };

  const wifiIllustration = (
    <div className="w-48 h-48 relative">
      {/* WiFi Signal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Signal Waves */}
        <div className="w-24 h-24 relative">
          {/* Outer Wave */}
          <div
            className={`absolute inset-0 border-4 border-accent rounded-full ${isOnline ? "animate-pulse" : ""}`}
          ></div>

          {/* Middle Wave */}
          <div
            className={`absolute inset-2 border-4 border-accent/80 rounded-full ${isOnline ? "animate-pulse delay-75" : ""}`}
          ></div>

          {/* Inner Wave */}
          <div
            className={`absolute inset-4 border-4 border-accent/60 rounded-full ${isOnline ? "animate-pulse delay-150" : ""}`}
          ></div>

          {/* Center Dot */}
          <div
            className={`absolute inset-8 w-8 h-8 bg-gradient-to-r from-accent to-brand-blue-light rounded-full flex items-center justify-center ${isOnline ? "animate-bounce" : ""}`}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Connection Status */}
        <div
          className={`mt-4 text-sm font-semibold ${isOnline ? "text-brand-blue-light" : "text-accent"}`}
        >
          {isOnline ? "Connection Restored!" : "No Connection"}
        </div>
      </div>

      {/* Network Icons */}
      <div className="absolute top-2 left-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center opacity-60">
        <span className="text-white text-xs">📶</span>
      </div>

      <div className="absolute top-2 right-2 w-6 h-6 bg-brand-blue-light rounded-full flex items-center justify-center opacity-60">
        <span className="text-white text-xs">🌐</span>
      </div>
    </div>
  );

  return (
    <ErrorPage
      errorCode="OFFLINE"
      title="You're Offline"
      message="You are offline. Please check your internet connection."
      description={
        isOnline
          ? "Great! Your connection is back. Click retry to reload the page."
          : "Please check your Wi-Fi or mobile data connection and try again."
      }
      actions={{
        primary: {
          text: isOnline ? "Retry Now" : "Check Connection",
          onClick: handleRetry,
          variant: "primary",
        },
        secondary: {
          text: "Go Back Home",
          href: "/",
          variant: "outline",
        },
      }}
      illustration={wifiIllustration}
    />
  );
};

export default Offline;

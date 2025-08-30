import React from "react";
import { useNetworkStatus } from "../hooks/useNetworkStatus";
import NotFound from "../pages/errors/NotFound";
import InternalServerError from "../pages/errors/InternalServerError";
import Forbidden from "../pages/errors/Forbidden";
import Offline from "../pages/errors/Offline";
import Timeout from "../pages/errors/Timeout";
import Maintenance from "../pages/errors/Maintenance";
import Security from "../pages/errors/Security";

interface ErrorPageRouterProps {
  errorType?:
    | "404"
    | "500"
    | "403"
    | "503"
    | "offline"
    | "timeout"
    | "security"
    | "maintenance";
  statusCode?: number;
  error?: Error;
  showOfflineDetection?: boolean;
}

const ErrorPageRouter: React.FC<ErrorPageRouterProps> = ({
  errorType,
  statusCode,
  error,
  showOfflineDetection = true,
}) => {
  const networkStatus = useNetworkStatus();

  // If offline detection is enabled and user is offline, show offline page
  if (showOfflineDetection && !networkStatus.isOnline) {
    return <Offline />;
  }

  // If error type is specified, show that specific error page
  if (errorType) {
    switch (errorType) {
      case "404":
        return <NotFound />;
      case "500":
        return <InternalServerError />;
      case "403":
        return <Forbidden />;
      case "503":
        return <Maintenance />;
      case "offline":
        return <Offline />;
      case "timeout":
        return <Timeout />;
      case "security":
        return <Security />;
      case "maintenance":
        return <Maintenance />;
      default:
        break;
    }
  }

  // If status code is provided, map it to appropriate error page
  if (statusCode) {
    switch (statusCode) {
      case 404:
        return <NotFound />;
      case 500:
        return <InternalServerError />;
      case 403:
        return <Forbidden />;
      case 503:
        return <Maintenance />;
      case 408:
      case 504:
        return <Timeout />;
      default:
        break;
    }
  }

  // If error object is provided, try to determine the type
  if (error) {
    const errorMessage = error.message.toLowerCase();

    if (
      errorMessage.includes("timeout") ||
      errorMessage.includes("network") ||
      errorMessage.includes("fetch")
    ) {
      return <Timeout />;
    }

    if (
      errorMessage.includes("forbidden") ||
      errorMessage.includes("unauthorized") ||
      errorMessage.includes("permission")
    ) {
      return <Forbidden />;
    }

    if (
      errorMessage.includes("maintenance") ||
      errorMessage.includes("service unavailable")
    ) {
      return <Maintenance />;
    }

    if (
      errorMessage.includes("security") ||
      errorMessage.includes("blocked") ||
      errorMessage.includes("suspicious")
    ) {
      return <Security />;
    }
  }

  // Default to internal server error if no specific error type can be determined
  return <InternalServerError />;
};

export default ErrorPageRouter;

import { useState, useEffect } from "react";

interface NetworkStatus {
  isOnline: boolean;
  isSlow: boolean;
  connectionType?: string;
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
}

// Network Information API interface
interface NetworkInformation extends EventTarget {
  readonly type?: string;
  readonly effectiveType?: string;
  readonly downlink?: number;
  readonly rtt?: number;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
}

const useNetworkStatus = (): NetworkStatus => {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus>({
    isOnline: navigator.onLine,
    isSlow: false,
  });

  useEffect(() => {
    const updateNetworkStatus = () => {
      const isOnline = navigator.onLine;

      // Check for slow connection using Network Information API if available
      let isSlow = false;
      let connectionType: string | undefined;
      let effectiveType: string | undefined;
      let downlink: number | undefined;
      let rtt: number | undefined;

      if ("connection" in navigator) {
        const connection = (navigator as NavigatorWithConnection).connection;
        if (connection) {
          connectionType = connection.type;
          effectiveType = connection.effectiveType;
          downlink = connection.downlink;
          rtt = connection.rtt;

          // Consider connection slow if RTT > 200ms or downlink < 1 Mbps
          isSlow = (rtt && rtt > 200) || (downlink && downlink < 1);
        }
      }

      setNetworkStatus({
        isOnline,
        isSlow,
        connectionType,
        effectiveType,
        downlink,
        rtt,
      });
    };

    // Initial check
    updateNetworkStatus();

    // Listen for online/offline events
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    // Listen for connection changes (if Network Information API is available)
    if ("connection" in navigator) {
      const connection = (navigator as NavigatorWithConnection).connection;
      if (connection) {
        connection.addEventListener("change", updateNetworkStatus);
      }
    }

    return () => {
      window.removeEventListener("online", updateNetworkStatus);
      window.removeEventListener("offline", updateNetworkStatus);

      if ("connection" in navigator) {
        const connection = (navigator as NavigatorWithConnection).connection;
        if (connection) {
          connection.removeEventListener("change", updateNetworkStatus);
        }
      }
    };
  }, []);

  return networkStatus;
};

export default useNetworkStatus;

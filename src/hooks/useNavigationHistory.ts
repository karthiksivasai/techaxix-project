import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationHistory {
  path: string;
  timestamp: number;
}

const useNavigationHistory = () => {
  const location = useLocation();
  const historyRef = useRef<NavigationHistory[]>([]);
  const maxHistorySize = 10; // Keep last 10 navigation entries

  useEffect(() => {
    const currentPath = location.pathname;
    const now = Date.now();
    
    // Add current path to history if it's different from the last entry
    const lastEntry = historyRef.current[historyRef.current.length - 1];
    if (!lastEntry || lastEntry.path !== currentPath) {
      historyRef.current.push({
        path: currentPath,
        timestamp: now
      });
      
      // Keep only the last maxHistorySize entries
      if (historyRef.current.length > maxHistorySize) {
        historyRef.current = historyRef.current.slice(-maxHistorySize);
      }
    }
  }, [location.pathname]);

  const getPreviousPath = (): string | null => {
    const history = historyRef.current;
    if (history.length < 2) return null;
    
    // Return the second-to-last path (previous page)
    return history[history.length - 2].path;
  };

  const getNavigationPath = (): string[] => {
    return historyRef.current.map(entry => entry.path);
  };

  const canGoBack = (): boolean => {
    return historyRef.current.length > 1;
  };

  const getFallbackPath = (): string => {
    // Define fallback paths based on current page
    const currentPath = location.pathname;
    
    // Service pages should go back to services
    if (currentPath.startsWith('/services/')) {
      return '/services';
    }
    
    // Directors page should go back to about
    if (currentPath === '/directors') {
      return '/about';
    }
    
    // Industries, careers, contact should go back to home
    if (['/industries', '/careers', '/contact'].includes(currentPath)) {
      return '/';
    }
    
    // Default fallback
    return '/';
  };

  return {
    getPreviousPath,
    getNavigationPath,
    canGoBack,
    getFallbackPath,
    currentPath: location.pathname
  };
};

export default useNavigationHistory;

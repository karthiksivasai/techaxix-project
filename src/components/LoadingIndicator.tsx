import React from 'react';
import { X } from 'lucide-react';

interface LoadingIndicatorProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
  onClose?: () => void;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ 
  message = "Loading...", 
  showProgress = false, 
  progress = 0,
  onClose 
}) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full mx-4 relative">
        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close loading"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        )}
        <div className="text-center">
          {/* Spinner */}
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent mb-4"></div>
          
          {/* Message */}
          <p className="text-text-primary font-medium mb-4">{message}</p>
          
          {/* Progress bar */}
          {showProgress && (
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-accent h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              ></div>
            </div>
          )}
          
          {/* Progress text */}
          {showProgress && (
            <p className="text-sm text-text-body">
              {Math.round(progress)}% complete
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;

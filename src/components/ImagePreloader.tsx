import { useEffect, useState } from 'react';

interface ImagePreloaderProps {
  images: string[];
  onAllLoaded?: () => void;
  onProgress?: (loaded: number, total: number) => void;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ 
  images, 
  onAllLoaded, 
  onProgress 
}) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (images.length === 0) {
      onAllLoaded?.();
      return;
    }

    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        
        // Set a timeout for each image load
        const timeout = setTimeout(() => {
          console.warn(`Image load timeout: ${src}`);
          setLoadedCount(prev => {
            const newCount = prev + 1;
            onProgress?.(newCount, images.length);
            if (newCount === images.length) {
              onAllLoaded?.();
            }
            return newCount;
          });
          resolve();
        }, 5000); // 5 second timeout per image

        img.onload = () => {
          clearTimeout(timeout);
          setLoadedImages(prev => new Set([...prev, src]));
          setLoadedCount(prev => {
            const newCount = prev + 1;
            onProgress?.(newCount, images.length);
            if (newCount === images.length) {
              onAllLoaded?.();
            }
            return newCount;
          });
          resolve();
        };
        
        img.onerror = () => {
          clearTimeout(timeout);
          console.warn(`Failed to preload image: ${src}`);
          setLoadedCount(prev => {
            const newCount = prev + 1;
            onProgress?.(newCount, images.length);
            if (newCount === images.length) {
              onAllLoaded?.();
            }
            return newCount;
          });
          resolve(); // Still resolve to continue loading other images
        };
        
        img.src = src;
      });
    };

    // Load all images
    Promise.all(images.map(loadImage)).catch((error) => {
      console.error('Error loading images:', error);
      // Force completion if there's an error
      onAllLoaded?.();
    });
  }, [images, onAllLoaded, onProgress]);

  return null;
};

export default ImagePreloader;

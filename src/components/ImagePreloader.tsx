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
    if (images.length === 0) return;

    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
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
    Promise.all(images.map(loadImage));
  }, [images, onAllLoaded, onProgress]);

  return null;
};

export default ImagePreloader;

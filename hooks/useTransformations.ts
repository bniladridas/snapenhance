'use client';

import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ImageFile, TransformedImage, BackgroundStyle } from '@/types';
import { processImage } from '@/lib/imageProcessor';

export function useTransformations() {
  const [transformations, setTransformations] = useState<TransformedImage[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentTransformation, setCurrentTransformation] = useState<TransformedImage | null>(null);
  const [error, setError] = useState<string | null>(null);


  // This would connect to the actual AI transformation API
  // For now, it will simulate the process with a timeout
  const transformImage = useCallback(
    async (
      image: ImageFile,
      style: BackgroundStyle,
      description?: string
    ): Promise<TransformedImage> => {
      setIsProcessing(true);
      setError(null);

      try {
        // Process the image using our image processor
        // Default dimensions for social media
        const width = 1200;
        const height = 630;
        const processedImage = await processImage(image, style, width, height);

        // Use the processed image directly
        const newTransformation = processedImage;

        setTransformations(prev => [...prev, newTransformation]);
        setCurrentTransformation(newTransformation);

        return newTransformation;
      } catch (err) {
        setError('Failed to transform image');
        console.error(err);
        throw err;
      } finally {
        setIsProcessing(false);
      }
    },
    []
  );

  const removeTransformation = useCallback((id: string) => {
    setTransformations(prev => prev.filter(t => t.id !== id));
    setCurrentTransformation(prev => prev?.id === id ? null : prev);
  }, []);

  const clearTransformations = useCallback(() => {
    setTransformations([]);
    setCurrentTransformation(null);
    setError(null);
  }, []);

  const selectTransformation = useCallback((id: string) => {
    const found = transformations.find(t => t.id === id);
    if (found) {
      setCurrentTransformation(found);
    }
  }, [transformations]);

  return {
    transformations,
    currentTransformation,
    isProcessing,
    error,
    transformImage,
    removeTransformation,
    clearTransformations,
    selectTransformation,
  };
}
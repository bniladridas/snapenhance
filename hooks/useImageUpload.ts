'use client';

import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fileToBase64, isValidFileType } from '@/lib/utils';
import { ImageFile } from '@/types';

interface UseImageUploadProps {
  acceptedFileTypes?: string[];
  maxFileSize?: number; // in bytes
}

export function useImageUpload({
  acceptedFileTypes = ['image/jpeg', 'image/png', 'image/webp'],
  maxFileSize = 10 * 1024 * 1024, // 10MB default
}: UseImageUploadProps = {}) {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = useCallback(
    async (file: File): Promise<ImageFile | null> => {
      setIsLoading(true);
      setError(null);

      try {
        // Validate file type
        if (!isValidFileType(file, acceptedFileTypes)) {
          setError(`Invalid file type. Accepted types: ${acceptedFileTypes.join(', ')}`);
          return null;
        }

        // Validate file size
        if (file.size > maxFileSize) {
          setError(`File too large. Maximum size: ${maxFileSize / (1024 * 1024)}MB`);
          return null;
        }

        // Convert to base64 for preview
        const preview = await fileToBase64(file);

        const newImage: ImageFile = {
          id: uuidv4(),
          file,
          preview,
          name: file.name,
          size: file.size,
          type: file.type,
          dateAdded: new Date(),
        };

        setImages((prev) => [...prev, newImage]);
        return newImage;
      } catch (err) {
        setError('Failed to process image');
        console.error(err);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [acceptedFileTypes, maxFileSize]
  );

  const handleFileDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles?.length) {
        await uploadImage(acceptedFiles[0]);
      }
    },
    [uploadImage]
  );

  const removeImage = useCallback((id: string) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  }, []);

  const clearImages = useCallback(() => {
    setImages([]);
    setError(null);
  }, []);

  return {
    images,
    isLoading,
    error,
    uploadImage,
    handleFileDrop,
    removeImage,
    clearImages,
  };
}
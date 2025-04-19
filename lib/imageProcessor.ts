import { BackgroundStyle, ImageFile, TransformedImage } from '@/types';
import { v4 as uuidv4 } from 'uuid';

// Simple function to apply a background to an image
export async function processImage(
  image: ImageFile,
  backgroundStyle: BackgroundStyle,
  width: number,
  height: number
): Promise<TransformedImage> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      throw new Error('Could not get canvas context');
    }
    
    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;
    
    // Create a new image element
    const img = new Image();
    img.onload = () => {
      // Draw background
      if (backgroundStyle.gradientType === 'linear') {
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        backgroundStyle.colors.forEach((color, index) => {
          gradient.addColorStop(index / (backgroundStyle.colors.length - 1), color);
        });
        ctx.fillStyle = gradient;
      } else if (backgroundStyle.gradientType === 'radial') {
        const gradient = ctx.createRadialGradient(
          width / 2, height / 2, 0,
          width / 2, height / 2, width / 2
        );
        backgroundStyle.colors.forEach((color, index) => {
          gradient.addColorStop(index / (backgroundStyle.colors.length - 1), color);
        });
        ctx.fillStyle = gradient;
      } else {
        // Default to solid color or first color in array
        ctx.fillStyle = backgroundStyle.colors[0];
      }
      ctx.fillRect(0, 0, width, height);
      
      // Calculate dimensions to maintain aspect ratio
      const imgAspect = img.width / img.height;
      const canvasAspect = width / height;
      
      let drawWidth, drawHeight, offsetX, offsetY;
      
      if (imgAspect > canvasAspect) {
        // Image is wider than canvas (relative to height)
        drawWidth = width * 0.8;
        drawHeight = drawWidth / imgAspect;
        offsetX = width * 0.1;
        offsetY = (height - drawHeight) / 2;
      } else {
        // Image is taller than canvas (relative to width)
        drawHeight = height * 0.8;
        drawWidth = drawHeight * imgAspect;
        offsetX = (width - drawWidth) / 2;
        offsetY = height * 0.1;
      }
      
      // Draw the image centered on the canvas
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      
      // Convert canvas to data URL
      const dataUrl = canvas.toDataURL('image/png');
      
      // Create transformed image object
      const transformedImage: TransformedImage = {
        id: uuidv4(),
        name: `${image.name.split('.')[0]}_enhanced.png`,
        originalImageId: image.id,
        dataUrl,
        width,
        height,
        transformationType: backgroundStyle.name,
        dateCreated: new Date(),
      };
      
      resolve(transformedImage);
    };
    
    // Set image source (could be preview or base64)
    img.src = image.preview || image.base64 || '';
  });
}

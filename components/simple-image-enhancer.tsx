'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Download, Image as ImageIcon } from 'lucide-react';

// Template definitions with their colors
const templates = [
  // Minimal Templates
  {
    id: 'minimal-light',
    name: 'Minimal Light',
    colors: ['#f8fafc', '#f1f5f9'],
    image: '/images/templates/minimal-light.svg',
  },
  {
    id: 'minimal-dark',
    name: 'Minimal Dark',
    colors: ['#1e293b', '#0f172a'],
    image: '/images/templates/minimal-dark.svg',
  },
  {
    id: 'blue-minimal',
    name: 'Blue Minimal',
    colors: ['#f0f9ff', '#e0f2fe'],
    image: '/images/templates/blue-minimal.svg',
  },
  {
    id: 'gray-minimal',
    name: 'Gray Minimal',
    colors: ['#f9fafb', '#f3f4f6'],
    image: '/images/templates/gray-minimal.svg',
  },
  {
    id: 'warm-minimal',
    name: 'Warm Minimal',
    colors: ['#fafaf9', '#f5f5f4'],
    image: '/images/templates/warm-minimal.svg',
  },
  {
    id: 'accent-minimal',
    name: 'Accent Minimal',
    colors: ['#f8fafc', '#e0f2fe'],
    image: '/images/templates/accent-minimal.svg',
  },

  // Business Templates
  {
    id: 'corporate-slide',
    name: 'Corporate Slide',
    colors: ['#dbeafe', '#93c5fd'],
    image: '/images/templates/corporate-slide.svg',
  },
  {
    id: 'quarterly-report',
    name: 'Quarterly Report',
    colors: ['#dcfce7', '#86efac'],
    image: '/images/templates/quarterly-report.svg',
  },
  {
    id: 'product-showcase',
    name: 'Product Showcase',
    colors: ['#f3e8ff', '#d8b4fe'],
    image: '/images/templates/product-showcase.svg',
  },
  {
    id: 'social-announcement',
    name: 'Social Announcement',
    colors: ['#ffedd5', '#fed7aa'],
    image: '/images/templates/social-announcement.svg',
  },
  {
    id: 'technical-documentation',
    name: 'Technical Documentation',
    colors: ['#f1f5f9', '#cbd5e1'],
    image: '/images/templates/technical-documentation.svg',
  },
  {
    id: 'executive-summary',
    name: 'Executive Summary',
    colors: ['#fee2e2', '#fecaca'],
    image: '/images/templates/executive-summary.svg',
  },
];

// Social media aspect ratios and dimensions
const socialMediaFormats = [
  { id: 'instagram-post', name: 'Instagram Post', width: 1080, height: 1080 },
  { id: 'instagram-story', name: 'Instagram Story', width: 1080, height: 1920 },
  { id: 'twitter-post', name: 'Twitter Post', width: 1200, height: 675 },
  { id: 'linkedin-post', name: 'LinkedIn Post', width: 1200, height: 627 },
  { id: 'facebook-post', name: 'Facebook Post', width: 1200, height: 630 },
  { id: 'custom', name: 'Custom Size', width: 1200, height: 800 },
];

export function SimpleImageEnhancer() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('instagram-post');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file is an image
      if (!file.type.startsWith('image/')) {
        alert('Please upload a valid image file (JPEG, PNG, etc.)');
        return;
      }

      const reader = new FileReader();

      // Add error handling for file reading
      reader.onerror = () => {
        console.error('Error reading file');
        alert('There was an error reading the file. Please try again with a different image.');
      };

      reader.onload = (e) => {
        const result = e.target?.result as string;

        // Validate the result is a data URL
        if (result && result.startsWith('data:image/')) {
          // Preload the image to verify it can be displayed
          const img = new Image();
          img.onload = () => {
            setUploadedImage(result);
            setEnhancedImage(null); // Reset enhanced image when new image is uploaded
          };
          img.onerror = () => {
            console.error('Error loading the uploaded image');
            alert('The uploaded image could not be processed. Please try a different image.');
          };
          img.src = result;
        } else {
          console.error('Invalid image data');
          alert('The uploaded file does not appear to be a valid image. Please try again.');
        }
      };

      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Get current format dimensions
  const getCurrentFormat = () => {
    return socialMediaFormats.find(f => f.id === selectedFormat) || socialMediaFormats[0];
  };

  // Apply template to image
  const applyTemplate = () => {
    if (!uploadedImage || !selectedTemplate) return;

    setIsProcessing(true);

    const template = templates.find(t => t.id === selectedTemplate);
    if (!template) {
      setIsProcessing(false);
      return;
    }

    const format = getCurrentFormat();

    const img = new Image();

    // Add error handling for image loading
    img.onerror = () => {
      console.error('Error loading the source image');
      alert('There was an error loading the image. Please try uploading it again.');
      setIsProcessing(false);
    };

    img.onload = () => {
      if (!canvasRef.current) {
        setIsProcessing(false);
        return;
      }

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setIsProcessing(false);
        return;
      }

      // Set canvas size to match selected format
      canvas.width = format.width;
      canvas.height = format.height;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, template.colors[0]);
      gradient.addColorStop(1, template.colors[1]);

      // Fill background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate image dimensions to fit within the canvas while maintaining aspect ratio
      const imgAspect = img.width / img.height;
      const canvasAspect = canvas.width / canvas.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgAspect > canvasAspect) {
        // Image is wider than canvas (relative to height)
        drawHeight = canvas.height * 0.8; // Use 80% of canvas height
        drawWidth = drawHeight * imgAspect;
      } else {
        // Image is taller than canvas (relative to width)
        drawWidth = canvas.width * 0.8; // Use 80% of canvas width
        drawHeight = drawWidth / imgAspect;
      }

      // Center the image
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = (canvas.height - drawHeight) / 2;

      // Draw image centered
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Add subtle shadow to the image
      ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
      ctx.shadowBlur = 15;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 5;

      // Add small logo watermark to bottom right
      const logoImg = new Image();

      // Add error handling for logo loading
      logoImg.onerror = () => {
        console.error('Error loading the logo image');
        // Continue without the logo if it fails to load
        const dataUrl = canvas.toDataURL('image/png', 1.0);
        if (dataUrl && dataUrl.startsWith('data:image/png')) {
          setEnhancedImage(dataUrl);
        } else {
          console.error('Generated data URL is invalid');
          alert('There was an error processing the image. Please try again.');
        }
        setIsProcessing(false);
      };

      logoImg.onload = () => {
        // Reset shadow for logo
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        // Calculate logo size and position (small, in bottom right corner)
        const logoWidth = canvas.width * 0.12; // 12% of canvas width
        const logoHeight = logoWidth * (logoImg.height / logoImg.width);
        const logoX = canvas.width - logoWidth - 20; // 20px padding from right
        const logoY = canvas.height - logoHeight - 20; // 20px padding from bottom

        // Draw logo with slight transparency
        ctx.globalAlpha = 0.7;
        ctx.drawImage(logoImg, logoX, logoY, logoWidth, logoHeight);
        ctx.globalAlpha = 1.0;

        // Convert to data URL with maximum quality
        try {
          const dataUrl = canvas.toDataURL('image/png', 1.0);

          // Verify the data URL is valid
          if (dataUrl && dataUrl.startsWith('data:image/png')) {
            setEnhancedImage(dataUrl);
          } else {
            console.error('Generated data URL is invalid');
            alert('There was an error processing the image. Please try again.');
          }
        } catch (error) {
          console.error('Error generating image data URL:', error);
          alert('There was an error processing the image. Please try again.');
        }

        setIsProcessing(false);
      };

      logoImg.src = '/favicon.svg';
    };

    img.src = uploadedImage;
  };

  // Handle download
  const handleDownload = () => {
    if (!enhancedImage) return;

    try {
      // Create a new image to verify the data URL is valid
      const img = new Image();
      img.onload = () => {
        // The image loaded successfully, proceed with download
        const link = document.createElement('a');
        link.href = enhancedImage;
        link.download = `enhanced-image-${selectedTemplate}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      img.onerror = () => {
        // Handle error if the image data URL is invalid
        console.error('Error loading the enhanced image for download');
        alert('There was an error preparing the image for download. Please try again.');
      };

      // Set the source to test if it loads
      img.src = enhancedImage;
    } catch (error) {
      console.error('Error during download:', error);
      alert('There was an error downloading the image. Please try again.');
    }
  };

  return (
    <div className="space-y-5">
      {/* Logo Header */}
      <div className="flex justify-center mb-5">
        <img src="/logo.svg" alt="SnapEnhance Logo" className="h-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Image Upload Section */}
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          {!uploadedImage ? (
            <div
              className="relative border border-dashed border-border/15 rounded-md p-6 text-center cursor-pointer hover:bg-accent/5 transition-all duration-300 h-full flex flex-col items-center justify-center group overflow-hidden"
              onClick={handleUploadClick}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute -inset-1 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-red-500/5 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>
              <Upload className="h-5 w-5 text-muted-foreground/30 mb-2 relative z-10 group-hover:text-red-500/50 transition-colors duration-300" />
              <p className="text-sm text-muted-foreground/80 relative z-10 group-hover:text-foreground/90 transition-colors duration-300">Upload image</p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="relative aspect-video bg-background rounded-md overflow-hidden">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex justify-between items-center">
                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger className="bg-background border-border/20 h-7 text-xs rounded-md w-auto">
                    <SelectValue placeholder="Format" />
                  </SelectTrigger>
                  <SelectContent>
                    {socialMediaFormats.map(format => (
                      <SelectItem key={format.id} value={format.id} className="text-xs">
                        {format.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex gap-2">
                  <button
                    onClick={handleUploadClick}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Replace
                  </button>
                  {selectedTemplate && (
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/5 group-hover:to-red-500/20 rounded-md blur-sm opacity-0 group-hover:opacity-70 transition-all duration-300 pointer-events-none"></div>
                      <Button
                        onClick={applyTemplate}
                        disabled={isProcessing}
                        className="h-7 px-3 text-xs rounded-md relative z-10 group-hover:shadow-sm transition-all duration-300"
                        variant={isProcessing ? "ghost" : "default"}
                      >
                        {isProcessing ? 'Processing...' : 'Apply'}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Result Section */}
        <div>
          {!enhancedImage ? (
            <div className="border border-dashed border-border/15 rounded-md flex flex-col items-center justify-center h-full">
              <div className="flex flex-col items-center justify-center space-y-2">
                <img src="/favicon.svg" alt="SnapEnhance Logo" className="h-8 w-8 opacity-40" />
                <p className="text-xs text-muted-foreground/50 text-center px-4">
                  {uploadedImage
                    ? selectedTemplate
                      ? 'Click "Apply" to enhance'
                      : 'Select a template below'
                    : 'Upload an image to start'
                  }
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="relative bg-background rounded-md overflow-hidden">
                <img
                  src={enhancedImage}
                  alt="Enhanced"
                  className="w-full object-contain"
                />
              </div>
              <div className="flex justify-end">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/5 group-hover:to-red-500/20 rounded-md blur-sm opacity-0 group-hover:opacity-70 transition-all duration-300 pointer-events-none"></div>
                  <Button
                    onClick={handleDownload}
                    className="h-7 px-3 text-xs rounded-md relative z-10 group-hover:shadow-sm transition-all duration-300"
                  >
                    <Download className="h-3.5 w-3.5 mr-1.5" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hidden canvas for image processing */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Templates Section - Smooth Scrolling */}
      <div className="mt-5 relative">
        <div
          className="flex gap-2 pb-1 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pl-1 pr-6"
          style={{
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '8px',
            maskImage: 'linear-gradient(to right, transparent, black 4px, black calc(100% - 30px), transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 4px, black calc(100% - 30px), transparent)',
          }}
        >
          {templates.map((template) => (
            <div
              key={template.id}
              className={`flex-shrink-0 w-24 cursor-pointer transition-all duration-300 snap-start ${selectedTemplate === template.id ? 'transform-gpu scale-[1.05] shadow-md z-10 relative' : 'hover:scale-[1.02]'}`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <div className={`aspect-video relative overflow-hidden rounded-sm ${selectedTemplate === template.id ? 'transform-gpu perspective-[800px] shadow-lg template-selected' : ''} transition-all duration-300`} style={{ transformStyle: 'preserve-3d' }}>
                <img
                  src={template.image}
                  alt={template.name}
                  className={`w-full h-full object-cover transition-all duration-300 ${selectedTemplate === template.id ? 'saturate-[1.1] contrast-[1.05]' : 'hover:scale-[1.05]'}`}
                  draggable="false"
                />
                {selectedTemplate === template.id && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 pointer-events-none"></div>
                    <div className="absolute inset-0 ring-1 ring-primary/70 pointer-events-none rounded-sm"></div>
                    <div className="absolute -inset-1 bg-primary/5 blur-md opacity-70 pointer-events-none"></div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-red-500/10 via-primary/5 to-red-500/20 blur-xl opacity-50 pointer-events-none animate-pulse"></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

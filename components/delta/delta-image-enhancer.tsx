'use client';

import { useState, useRef } from 'react';
import { Upload, Download } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Delta templates with different styles
const deltaTemplates = [
  {
    id: 'delta-minimal',
    name: 'Minimal',
    colors: ['#f0f9ff', '#e0f2fe'],
    image: '/images/delta-minimal.png',
    description: 'Clean, simple background with focus on content',
  },
  {
    id: 'delta-dark',
    name: 'Dark',
    colors: ['#0f172a', '#1e293b'],
    image: '/images/delta-dark.png',
    description: 'Professional dark theme for elegant presentations',
  },
  {
    id: 'delta-gradient',
    name: 'Gradient',
    colors: ['#3b82f6', '#2563eb'],
    image: '/images/delta-gradient.png',
    description: 'Modern blue gradient for vibrant visual impact',
  },
  {
    id: 'delta-tech',
    name: 'Tech',
    colors: ['#18181b', '#3f3f46'],
    image: '/images/delta-tech.png',
    description: 'Futuristic tech-inspired design with grid patterns',
  },
  {
    id: 'delta-nature',
    name: 'Nature',
    colors: ['#166534', '#22c55e'],
    image: '/images/delta-nature.png',
    description: 'Organic green tones inspired by natural elements',
  },
];

export function DeltaImageEnhancer() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('standard');
  const [promptInput, setPromptInput] = useState('');
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiGenerationError, setAiGenerationError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'upload' | 'generate'>('upload');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file upload click
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result && result.startsWith('data:image/')) {
        const img = new Image();
        img.onload = () => {
          setUploadedImage(result);
          setEnhancedImage(null);
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
  };

  // Apply template to image
  const applyTemplate = () => {
    if (!uploadedImage || !selectedTemplate) return;

    setIsProcessing(true);

    const template = deltaTemplates.find(t => t.id === selectedTemplate);
    if (!template) {
      setIsProcessing(false);
      return;
    }

    const img = new Image();
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

      // Set canvas dimensions based on format
      switch (selectedFormat) {
        case 'square':
          canvas.width = 1080;
          canvas.height = 1080;
          break;
        case 'wide':
          canvas.width = 1920;
          canvas.height = 1080;
          break;
        case 'story':
          canvas.width = 1080;
          canvas.height = 1920;
          break;
        case 'custom':
          canvas.width = 1500;
          canvas.height = 1000;
          break;
        default: // standard
          canvas.width = 1200;
          canvas.height = 630;
      }

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, template.colors[0]);
      gradient.addColorStop(1, template.colors[1]);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate dimensions to maintain aspect ratio
      const imgAspect = img.width / img.height;
      const canvasAspect = canvas.width / canvas.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgAspect > canvasAspect) {
        drawHeight = canvas.height * 0.8;
        drawWidth = drawHeight * imgAspect;
      } else {
        drawWidth = canvas.width * 0.8;
        drawHeight = drawWidth / imgAspect;
      }

      // Center the image
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = (canvas.height - drawHeight) / 2;

      // Draw image centered
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Add subtle border effect
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 8;
      ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

      // Add Delta watermark
      const watermarkSize = Math.min(canvas.width, canvas.height) * 0.03;
      ctx.font = `bold ${watermarkSize}px Arial`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';

      // Draw delta symbol and text
      const watermarkText = 'Δ DELTA';
      const textWidth = ctx.measureText(watermarkText).width;
      ctx.fillText(watermarkText, canvas.width - textWidth - 20, canvas.height - 20);

      try {
        const dataUrl = canvas.toDataURL('image/png', 1.0);
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

    img.src = uploadedImage;
  };

  // Handle download
  const handleDownload = () => {
    if (!enhancedImage) return;

    try {
      const link = document.createElement('a');
      link.href = enhancedImage;
      link.download = 'delta-enhanced-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error during download:', error);
      alert('There was an error downloading the image. Please try again.');
    }
  };

  // Function to handle AI image generation
  const generateImage = async () => {
    if (!promptInput.trim()) {
      setAiGenerationError('Please enter a prompt');
      return;
    }

    // Reset error and set loading state
    setAiGenerationError(null);
    setIsGeneratingAI(true);

    try {
      // Make an API call to the image generation endpoint
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: promptInput })
      });

      // Check if the response is JSON (error message) or blob (image)
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        let errorMessage = 'Failed to generate image';

        if (errorData.error) {
          errorMessage = errorData.error;
          if (errorData.details) {
            errorMessage += `: ${errorData.details}`;
          }
        }

        throw new Error(errorMessage);
      }

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}`);
      }

      // Get the image blob
      const blob = await response.blob();

      // Create a URL for the image blob
      const imageUrl = URL.createObjectURL(blob);

      // Set the image as the uploaded image
      setUploadedImage(imageUrl);
      setEnhancedImage(null);

      // Switch to upload tab to show the generated image
      setActiveTab('upload');
    } catch (error) {
      console.error('Error generating image:', error);
      setAiGenerationError(
        error instanceof Error
          ? error.message
          : 'Failed to generate image. Please try again with a different prompt.'
      );
    } finally {
      setIsGeneratingAI(false);
    }
  };

  return (
    <div className="space-y-6 bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg">
      {/* Delta Header - Simplified */}
      <div className="flex items-center justify-center gap-2 mb-5">
        <div className="text-xl text-blue-600">Δ</div>
        <div className="text-lg text-blue-700">DELTA</div>
        <div className="text-xs text-blue-500 border border-blue-100 rounded-full px-2 py-0.5">BETA</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Panel - Templates & Settings */}
        <div className="lg:col-span-2 space-y-5 order-2 lg:order-1">
          {/* Format Selection - Refined */}
          <div className="delta-card">
            <h3 className="delta-label mb-3 flex items-center">
              <span className="inline-block w-4 h-4 bg-blue-50 rounded-full mr-2 flex items-center justify-center text-xs text-blue-600">1</span>
              Output Format
            </h3>
            <Select
              value={selectedFormat}
              onValueChange={setSelectedFormat}
            >
              <SelectTrigger className="delta-input h-9 border-blue-100 bg-white">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard (1200×630)</SelectItem>
                <SelectItem value="square">Square (1080×1080)</SelectItem>
                <SelectItem value="wide">Wide (1920×1080)</SelectItem>
                <SelectItem value="story">Story (1080×1920)</SelectItem>
                <SelectItem value="custom">Custom Size</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Templates - Refined */}
          <div className="delta-card">
            <h3 className="delta-label mb-3 flex items-center">
              <span className="inline-block w-4 h-4 bg-blue-50 rounded-full mr-2 flex items-center justify-center text-xs text-blue-600">2</span>
              Select Template
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {deltaTemplates.map((template) => (
                <div
                  key={template.id}
                  className="delta-template cursor-pointer"
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div
                    className={`aspect-video relative overflow-hidden rounded-md ${
                      selectedTemplate === template.id ? 'border-2 border-blue-500' : 'border border-blue-100'
                    }`}
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})`,
                      }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between items-start">
                    <div>
                      <p className="text-sm text-blue-800">{template.name}</p>
                      <p className="text-xs text-blue-500 line-clamp-1">{template.description}</p>
                    </div>
                    {selectedTemplate === template.id && (
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-1"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons - Refined */}
          {uploadedImage && selectedTemplate && (
            <div className="delta-card">
              <h3 className="delta-label mb-3 flex items-center">
                <span className="inline-block w-4 h-4 bg-blue-50 rounded-full mr-2 flex items-center justify-center text-xs text-blue-600">3</span>
                Generate Image
              </h3>
              <button
                onClick={applyTemplate}
                disabled={isProcessing}
                className="delta-button delta-button-primary w-full"
              >
                {isProcessing ? 'Processing...' : 'Generate Enhanced Image'}
              </button>
            </div>
          )}
        </div>

        {/* Right Panel - Image Upload & Result */}
        <div className="lg:col-span-3 space-y-5 order-1 lg:order-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          {/* Source Image Tabs - Refined */}
          <div className="delta-card overflow-hidden p-0">
            <div className="delta-tabs">
              <button
                className={`flex-1 py-2 text-sm ${activeTab === 'upload' ? 'delta-tab active' : 'delta-tab'}`}
                onClick={() => setActiveTab('upload')}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <Upload className="h-3.5 w-3.5" />
                  Upload Image
                </span>
              </button>
              <button
                className={`flex-1 py-2 text-sm ${activeTab === 'generate' ? 'delta-tab active' : 'delta-tab'}`}
                onClick={() => setActiveTab('generate')}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <span className="text-xs">AI</span>
                  Generate Image
                </span>
              </button>
            </div>

            <div className="p-4">
              {activeTab === 'upload' ? (
                <>
                  <h3 className="delta-label mb-3">Source Image</h3>

                  {!uploadedImage ? (
                    <div
                      className="relative border border-dashed border-blue-100 rounded-md p-6 text-center cursor-pointer hover:bg-blue-50/30 transition-all flex flex-col items-center justify-center overflow-hidden"
                      onClick={handleUploadClick}
                    >
                      <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                        <Upload className="h-4 w-4 text-blue-500" />
                      </div>
                      <p className="text-sm text-blue-700">Upload your image</p>
                      <p className="text-xs text-blue-400 mt-1">Click to browse or drag and drop</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="relative aspect-video bg-gray-50 rounded-md overflow-hidden border border-blue-50">
                        <img
                          src={uploadedImage}
                          alt="Uploaded"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs delta-text-secondary">
                          Ready for enhancement
                        </div>
                        <button
                          onClick={handleUploadClick}
                          className="text-xs text-blue-500 hover:text-blue-600 transition-colors flex items-center gap-1"
                        >
                          <Upload className="h-3 w-3" />
                          Replace
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <h3 className="delta-label mb-3">AI Image Generation</h3>

                  <div className="space-y-3">
                    <div className="relative">
                      <textarea
                        value={promptInput}
                        onChange={(e) => setPromptInput(e.target.value)}
                        placeholder="Describe the image you want to generate..."
                        className="delta-input h-20 px-3 py-2 text-sm resize-none"
                      />

                      <div className="mt-2 flex justify-between items-center">
                        <div className="text-xs delta-text-secondary">
                          Be specific for best results
                        </div>
                        <div className="text-xs delta-text-muted">
                          {promptInput.length}/1000
                        </div>
                      </div>
                    </div>

                    {aiGenerationError && (
                      <div className="text-xs text-red-500 bg-red-50/50 p-3 rounded-md space-y-1 border border-red-100">
                        <p>{aiGenerationError}</p>
                        {aiGenerationError.includes("No image data received") && (
                          <div className="text-gray-600 text-xs space-y-1 mt-1">
                            <p>The Gemini model may be:</p>
                            <ul className="list-disc pl-4 space-y-0.5">
                              <li>Still in preview</li>
                              <li>Requiring specific permissions</li>
                              <li>Unable to generate this image</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    <button
                      onClick={generateImage}
                      disabled={isGeneratingAI || !promptInput.trim()}
                      className={`delta-button w-full ${
                        isGeneratingAI || !promptInput.trim()
                          ? 'bg-blue-300 text-white cursor-not-allowed'
                          : 'delta-button-primary'
                      }`}
                    >
                      {isGeneratingAI ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Generating...
                        </span>
                      ) : (
                        'Generate Image'
                      )}
                    </button>

                    <div className="text-xs delta-text-muted text-center">
                      <p>Powered by Google Gemini AI</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Result Section - Refined */}
          <div className="delta-card">
            <h3 className="delta-label mb-3">Enhanced Result</h3>

            {!enhancedImage ? (
              <div className="border border-dashed border-blue-100 rounded-md flex flex-col items-center justify-center p-6 bg-blue-50/20">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="text-xl text-blue-300">Δ</div>
                  <p className="text-sm text-blue-400 text-center px-4">
                    {uploadedImage
                      ? selectedTemplate
                        ? 'Click "Generate Enhanced Image" to create your design'
                        : 'Select a template from the left panel'
                      : 'Upload an image to get started'
                    }
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="relative bg-gray-50 rounded-md overflow-hidden border border-blue-50">
                  <img
                    src={enhancedImage}
                    alt="Enhanced"
                    className="w-full object-contain"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xs delta-text-secondary">
                    Enhancement complete
                  </div>
                  <button
                    onClick={handleDownload}
                    className="delta-button delta-button-primary h-8 px-3 text-xs"
                  >
                    <Download className="h-3 w-3 mr-1.5" />
                    Download
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hidden canvas for image processing */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}

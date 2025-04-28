'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

export function DeltaAiGenerator() {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [promptInput, setPromptInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState<string | null>(null);

  // Function to handle AI image generation
  const generateImage = async () => {
    if (!promptInput.trim()) {
      setGenerationError('Please enter a prompt');
      return;
    }

    // Reset error and set loading state
    setGenerationError(null);
    setIsGenerating(true);

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

      // Set the generated image
      setGeneratedImage(imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
      setGenerationError(
        error instanceof Error
          ? error.message
          : 'Failed to generate image. Please try again with a different prompt.'
      );
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle download
  const handleDownload = () => {
    if (!generatedImage) return;

    try {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'delta-ai-generated-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error during download:', error);
      alert('There was an error downloading the image. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto delta-fade-in">
      {/* Header with Mode Toggle */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl text-blue-600">Δ</div>
        <ModeToggle variant="switch" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col space-y-6">
        {/* Input Section - Ultra Clean */}
        <div className="delta-slide-up" style={{ animationDelay: '100ms' }}>
          <textarea
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            placeholder="Describe the image you want to generate..."
            className="w-full p-3 border border-gray-200 rounded-md text-sm resize-none h-24 focus:outline-none focus:ring-1 focus:ring-blue-200 transition-all duration-300"
          />
        </div>

        {/* Image Preview Area */}
        <div className="delta-slide-up" style={{ animationDelay: '200ms' }}>
          {!generatedImage ? (
            <div className="border border-gray-200 rounded-md flex items-center justify-center h-64 transition-all duration-300">
              <div className="text-center">
                <div className="text-xl text-blue-400 mb-2 transition-transform duration-700 ease-in-out">Δ</div>
                <p className="text-sm text-gray-500">
                  Your generated image will appear here
                </p>
              </div>
            </div>
          ) : (
            <div className="delta-fade-in">
              <div className="rounded-md overflow-hidden aspect-square delta-blur-to-clear border border-gray-200 relative">
                <img
                  src={generatedImage}
                  alt="AI Generated"
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={handleDownload}
                  className="absolute bottom-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:shadow transition-all duration-300"
                >
                  <Download className="h-4 w-4 text-blue-500" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Character Count */}
        <div className="flex justify-end">
          <div className="text-xs text-gray-500">
            {promptInput.length}/1000
          </div>
        </div>

        {/* Error Message */}
        {generationError && (
          <div className="text-xs text-red-500 p-3 rounded-md bg-red-50 border border-red-100 delta-fade-in">
            <p>{generationError}</p>
          </div>
        )}

        {/* Generate Button */}
        <button
          onClick={generateImage}
          disabled={isGenerating || !promptInput.trim()}
          className={`py-2 rounded-md text-sm font-medium text-white transition-all duration-300 ${
            isGenerating || !promptInput.trim()
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isGenerating ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Generating</span>
            </span>
          ) : (
            'Generate'
          )}
        </button>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400 text-center mt-6 delta-fade-in-slow" style={{ animationDelay: '500ms' }}>
        Powered by Delta AI
      </div>
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { Download, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LogoPage() {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Function to download the logo as PNG
  const downloadPNG = (size: number) => {
    if (!svgRef.current || !canvasRef.current) return;
    
    const svg = svgRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = size;
    canvas.height = size;
    
    // Create a data URL from the SVG
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    
    // Create an image from the SVG data
    const img = new Image();
    img.onload = () => {
      // Clear canvas and draw the image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // Convert canvas to PNG and trigger download
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `snapenhance-logo-${size}x${size}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      // Clean up
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  // Copy SVG code to clipboard
  const copySVG = () => {
    if (!svgRef.current) return;
    
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    navigator.clipboard.writeText(svgData).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">SnapEnhance Logo</h1>
        
        <div className="space-y-8">
          {/* Logo Preview */}
          <div className="flex flex-col items-center justify-center p-8 border border-border/20 rounded-lg">
            <div className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
              <svg 
                ref={svgRef}
                width="128" 
                height="128" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <style>
                  {`
                    .bg { fill: ${theme === 'dark' ? 'hsl(0, 0%, 3.9%)' : 'hsl(0, 0%, 100%)'}; }
                    .text { fill: ${theme === 'dark' ? 'hsl(0, 0%, 98%)' : 'hsl(0, 0%, 3.9%)'}; }
                    .accent { fill: ${theme === 'dark' ? 'hsl(0, 0%, 14.9%)' : 'hsl(0, 0%, 96.1%)'}; }
                  `}
                </style>
                
                {/* Background with rounded corners */}
                <rect width="32" height="32" rx="8" className="bg"/>
                
                {/* Stylized S and E letters */}
                <g className="text" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 500 }}>
                  <text x="8" y="22" fontSize="18">S</text>
                  <text x="17" y="22" fontSize="18">E</text>
                </g>
                
                {/* Subtle accent element */}
                <rect x="8" y="24" width="16" height="2" rx="1" className="accent"/>
              </svg>
            </div>
            
            <div className="mt-4">
              <Button onClick={toggleTheme} variant="outline" size="sm" className="text-xs">
                Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
              </Button>
            </div>
          </div>
          
          {/* Download Options */}
          <div className="space-y-4">
            <h2 className="text-base font-medium">Download Options</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button onClick={() => downloadPNG(16)} variant="outline" size="sm" className="text-xs">
                <Download className="h-3 w-3 mr-1" />
                16×16 PNG
              </Button>
              <Button onClick={() => downloadPNG(32)} variant="outline" size="sm" className="text-xs">
                <Download className="h-3 w-3 mr-1" />
                32×32 PNG
              </Button>
              <Button onClick={() => downloadPNG(64)} variant="outline" size="sm" className="text-xs">
                <Download className="h-3 w-3 mr-1" />
                64×64 PNG
              </Button>
              <Button onClick={() => downloadPNG(128)} variant="outline" size="sm" className="text-xs">
                <Download className="h-3 w-3 mr-1" />
                128×128 PNG
              </Button>
            </div>
            
            <div className="mt-4">
              <Button onClick={copySVG} variant="outline" size="sm" className="text-xs">
                {copied ? (
                  <>
                    <Check className="h-3 w-3 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 mr-1" />
                    Copy SVG Code
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hidden canvas for PNG conversion */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
}

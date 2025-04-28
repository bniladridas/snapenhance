'use client';

import { useState, useEffect } from 'react';
import { Info, X } from 'lucide-react';
import Link from 'next/link';
import { FounderBadge } from '@/components/founder-badge';
import { TimeSyncDisplay } from '@/components/time-sync-display';
import { getMode, toggleMode, AppMode } from './mode-utils';

export function FloatingInfoButtonClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AppMode>('snapenhance');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setMode(getMode());

    // Listen for mode changes
    const handleModeChange = () => {
      setMode(getMode());
    };

    window.addEventListener('modechange', handleModeChange);
    window.addEventListener('storage', handleModeChange);

    return () => {
      window.removeEventListener('modechange', handleModeChange);
      window.removeEventListener('storage', handleModeChange);
    };
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const isDelta = mode === 'delta';

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:block" style={{ display: 'block' }}>
      {/* Info panel - Optimized for smaller screens */}
      {isOpen && (
        <div
          className={`absolute bottom-14 md:bottom-12 right-0 w-64 md:w-52 max-h-[80vh] ${isDelta ? 'bg-white/98' : 'bg-background/98'} backdrop-blur-sm rounded-md shadow-md p-3 md:p-2.5 ${isDelta ? 'border border-blue-100' : 'border border-border/10'} text-xs animate-in fade-in slide-in-from-bottom-3 duration-150`}
          style={{
            maxHeight: 'calc(100vh - 100px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}
        >
          <div className="flex justify-between items-center mb-3 sticky top-0 z-10 pb-1 border-b border-gray-100/50">
            <h3 className={`text-xs font-medium ${isDelta ? 'text-blue-600' : 'text-muted-foreground/90'}`}>Information</h3>
            <button
              onClick={toggleOpen}
              className={`${isDelta ? 'text-blue-400 hover:text-blue-600' : 'text-muted-foreground/60 hover:text-muted-foreground/90'} transition-colors p-1`}
              aria-label="Close information panel"
            >
              <X className="h-4 w-4 md:h-3.5 md:w-3.5" />
            </button>
          </div>

          <div className="space-y-1.5 overflow-y-auto pr-1 -mr-1 pb-1" style={{ maxHeight: 'calc(100vh - 150px)', WebkitOverflowScrolling: 'touch' }}>
            {isDelta && (
              <div className="mb-2 p-1.5 bg-blue-50/50 rounded-md border border-blue-100/50">
                <h4 className="text-[10px] font-medium text-blue-700 mb-0.5">Delta Mode</h4>
                <p className="text-[9px] leading-tight text-blue-600/80">
                  Unlimited AI image generation with clean interface
                </p>
                <button
                  onClick={() => {
                    toggleMode();
                    window.dispatchEvent(new Event('modechange'));
                    setIsOpen(false);
                  }}
                  className="text-[9px] w-full mt-1.5 py-1 px-1.5 bg-white rounded border border-blue-100 text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Return to SnapEnhance
                </button>
              </div>
            )}

            <div className="py-0.5">
              <Link
                href="/"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block text-[11px]`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </div>

            <div className="py-0.5">
              <Link
                href="/privacy"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block text-[11px]`}
                onClick={() => setIsOpen(false)}
              >
                Privacy Policy
              </Link>
            </div>

            <div className="py-0.5">
              <Link
                href="/terms"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block text-[11px]`}
                onClick={() => setIsOpen(false)}
              >
                Terms of Service
              </Link>
            </div>

            <div>
              <Link
                href="/logo"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                Logo & Assets
              </Link>
            </div>

            <div>
              <Link
                href="/changelog"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                Changelog
              </Link>
            </div>

            <div>
              <Link
                href="/legal"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                Legal Software
              </Link>
            </div>

            <div>
              <Link
                href="/ai-ml"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                AI/ML Information
              </Link>
            </div>

            {!isDelta && (
              <div className="py-0.5 px-1.5 my-1 bg-gradient-to-r from-blue-50/50 to-transparent rounded">
                <button
                  onClick={() => {
                    toggleMode();
                    window.dispatchEvent(new Event('modechange'));
                    setIsOpen(false);
                  }}
                  className="text-[10px] text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                >
                  <span className="text-blue-500">Δ</span>
                  Switch to Delta Mode
                </button>
              </div>
            )}

            <div>
              <Link
                href="/blog"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </div>

            <div>
              <Link
                href="/blog/fixing-gemini-image-generation"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                Fixing Gemini Image Generation
              </Link>
            </div>

            <div>
              <Link
                href="/blog/testing-gemini-api"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                Gemini API Testing
              </Link>
            </div>

            <div>
              <Link
                href="/blog/production-build-optimization"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                Production Optimization
              </Link>
            </div>

            <div>
              <Link
                href="/android"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                Android App
              </Link>
            </div>

            <div>
              <Link
                href="/ios"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                iOS App
              </Link>
            </div>

            <div>
              <Link
                href="/social"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                Social Media
              </Link>
            </div>

            <div>
              <Link
                href="/og-image"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                OG Image
              </Link>
            </div>

            <div>
              <Link
                href="/license"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                License
              </Link>
            </div>

            <div>
              <Link
                href="/cookies"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                Cookies & Cache Policy
              </Link>
            </div>

            <div>
              <Link
                href="/contact"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline block`}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>

            <div>
              <Link
                href="https://github.com/bniladridas/snapenhance"
                className={`${isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-primary'} hover:underline flex items-center gap-1.5`}
                onClick={() => setIsOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                snapenhance
              </Link>
            </div>

            <div className={`pt-2 mt-1 border-t ${isDelta ? 'border-blue-100/50' : 'border-border/5'}`}>
              <div className="flex justify-center mb-1">
                <FounderBadge size="sm" className="justify-center scale-90" />
              </div>

              <div className="flex justify-center">
                <TimeSyncDisplay showIcon={false} />
              </div>
              <p className={`text-[9px] ${isDelta ? 'text-blue-400/50' : 'text-muted-foreground/50'} text-center`}>
                © 2025 {isDelta ? 'Delta' : 'SnapEnhance'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating button - Enhanced for mobile */}
      <button
        onClick={toggleOpen}
        className={`h-10 w-10 md:h-8 md:w-8 rounded-full flex items-center justify-center shadow-md transition-all duration-150 ${
          isOpen
            ? isDelta
              ? 'bg-white/95 backdrop-blur-sm border border-blue-200 text-blue-500 rotate-90'
              : 'bg-background/95 backdrop-blur-sm border border-border/20 text-primary/80 rotate-90'
            : isDelta
              ? 'bg-white/95 backdrop-blur-sm border border-blue-200 text-blue-400 hover:text-blue-600'
              : 'bg-background/95 backdrop-blur-sm border border-border/20 text-muted-foreground/70 hover:text-muted-foreground'
        }`}
        style={{
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          WebkitTapHighlightColor: 'transparent'
        }}
      >
        <Info className="h-5 w-5 md:h-4 md:w-4" />
      </button>
    </div>
  );
}

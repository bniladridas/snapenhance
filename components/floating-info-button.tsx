'use client';

import { useState } from 'react';
import { Info, X } from 'lucide-react';
import Link from 'next/link';
import { FounderBadge } from '@/components/founder-badge';
import { TimeSyncDisplay } from '@/components/time-sync-display';
import { ThemeToggle } from '@/components/theme-toggle';

export function FloatingInfoButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Info panel */}
      {isOpen && (
        <div className="absolute bottom-12 right-0 w-56 bg-background/98 backdrop-blur-sm rounded-md shadow-sm p-3 border border-border/10 text-xs animate-in fade-in slide-in-from-bottom-3 duration-150">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs font-medium text-muted-foreground/90">Information</h3>
            <button
              onClick={toggleOpen}
              className="text-muted-foreground/60 hover:text-muted-foreground/90 transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-2">
            <div>
              <Link
                href="/"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </div>

            <div>
              <Link
                href="/privacy"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Privacy Policy
              </Link>
            </div>

            <div>
              <Link
                href="/terms"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Terms of Service
              </Link>
            </div>

            <div>
              <Link
                href="/logo"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Logo & Assets
              </Link>
            </div>

            <div>
              <Link
                href="/changelog"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Changelog
              </Link>
            </div>

            <div>
              <Link
                href="/legal"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Legal Software
              </Link>
            </div>

            <div>
              <Link
                href="/ai-ml"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                AI/ML Information
              </Link>
            </div>

            <div>
              <Link
                href="/blog"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </div>

            <div>
              <Link
                href="/blog/testing-gemini-api"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Gemini API Testing
              </Link>
            </div>

            <div>
              <Link
                href="/blog/production-build-optimization"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Production Optimization
              </Link>
            </div>

            <div>
              <Link
                href="/android"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Android App
              </Link>
            </div>

            <div>
              <Link
                href="/ios"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                iOS App
              </Link>
            </div>

            <div>
              <Link
                href="/social"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Social Media
              </Link>
            </div>

            <div>
              <Link
                href="/og-image"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                OG Image
              </Link>
            </div>

            <div>
              <Link
                href="/license"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                License
              </Link>
            </div>

            <div>
              <Link
                href="/cookies"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Cookies & Cache Policy
              </Link>
            </div>

            <div>
              <Link
                href="/contact"
                className="text-primary hover:underline block"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>

            <div>
              <Link
                href="https://github.com/bniladridas/snapenhance"
                className="text-primary hover:underline flex items-center gap-1.5"
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

            <div className="pt-3 mt-1 border-t border-border/5">
              <div className="flex justify-center mb-3">
                <ThemeToggle />
              </div>

              <div className="flex justify-center mb-2">
                <FounderBadge size="sm" className="justify-center" />
              </div>

              <div className="flex justify-center mb-1">
                <TimeSyncDisplay showIcon={false} />
              </div>
              <p className="text-[10px] text-muted-foreground/50 text-center">
                © 2025 SnapEnhance
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={toggleOpen}
        className={`h-8 w-8 rounded-full flex items-center justify-center shadow-sm transition-all duration-150 ${
          isOpen
            ? 'bg-background/95 backdrop-blur-sm border border-border/20 text-primary/80 rotate-90'
            : 'bg-background/95 backdrop-blur-sm border border-border/20 text-muted-foreground/70 hover:text-muted-foreground'
        }`}
      >
        <Info className="h-4 w-4" />
      </button>
    </div>
  );
}

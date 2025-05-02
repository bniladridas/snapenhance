'use client';

import { AdaptiveLogo } from '@/components/adaptive-logo';
import { FounderBadge } from '@/components/founder-badge';
import { SimpleImageEnhancer } from '@/components/simple-image-enhancer';
import { DeltaAiGenerator } from '@/components/delta/delta-ai-generator';
import { TimeSyncDisplay } from '@/components/time-sync-display';
import { VisualResearchBar } from '@/components/visual-research-bar';
import { ModeToggle } from '@/components/mode-toggle';
import { useState, useEffect } from 'react';
import { getMode, AppMode } from './mode-utils';
import Link from 'next/link';

export function HomeClient() {
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

  return (
    <div className="min-h-screen py-8 bg-pastel-gradient transition-colors duration-500 overflow-x-hidden w-full">
      <div className="container px-4 max-w-4xl mx-auto w-full">
        {!isDelta && (
          // Responsive SnapEnhance header
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo-pastel.svg"
                alt="SnapEnhance Logo"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <h1 className="text-lg sm:text-xl font-medium tracking-tight">
                SnapEnhance
              </h1>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <ModeToggle variant="switch" className="mr-2" />
              <div className="flex items-center gap-3">
                <Link href="/blog" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
                <Link href="/ai-ml" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">AI/ML</Link>
                <Link href="/legal" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">Legal</Link>
              </div>
            </div>
          </div>
        )}

        {!isDelta && (
          <header className="mb-12 text-center">
            <div className="flex justify-center mb-4">
              <AdaptiveLogo size="lg" />
            </div>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Screenshot Enhancement and Visual Content Platform
            </p>
            <p className="text-xs text-muted-foreground/80 max-w-md mx-auto mt-2">
              For social media, documentation, presentations, and more
            </p>
            <p className="text-xs text-muted-foreground/70 max-w-md mx-auto mt-1">
              Legal software: properly licensed and compliant with all applicable laws
            </p>
          </header>
        )}

        <main>
          {!isDelta && (
            <>
              <div className="mb-6 px-4 py-3 bg-white/90 backdrop-blur-sm rounded-md border border-border/10 shadow-sm relative z-10">
                <VisualResearchBar />
              </div>

              <div className="mb-10 px-4 py-6 bg-white/80 backdrop-blur-sm rounded-md border border-border/10 shadow-sm relative overflow-hidden z-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none"></div>
                <h2 className="text-base font-medium mb-3 text-center">How Our Software Works: The Fundamental Truth of Visual Stack</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
                  <div className="flex flex-col items-center text-center p-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/10 to-red-500/5 flex items-center justify-center mb-3 shadow-sm relative group transition-all duration-300 hover:scale-105">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      <span className="text-lg font-medium text-foreground/90">1</span>
                    </div>
                    <h3 className="text-sm font-medium mb-1">Layer Composition</h3>
                    <p className="text-xs text-muted-foreground/80">Our software builds visual content through precise layer composition, treating each element as part of a harmonious stack that creates depth and meaning.</p>
                  </div>

                  <div className="flex flex-col items-center text-center p-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-500/5 flex items-center justify-center mb-3 shadow-sm relative group transition-all duration-300 hover:scale-105">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      <span className="text-lg font-medium text-foreground/90">2</span>
                    </div>
                    <h3 className="text-sm font-medium mb-1">Visual Harmony</h3>
                    <p className="text-xs text-muted-foreground/80">We apply principles of visual harmony to ensure each element relates perfectly to others, creating a cohesive whole that communicates clearly without visual noise.</p>
                  </div>

                  <div className="flex flex-col items-center text-center p-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-green-500/5 flex items-center justify-center mb-3 shadow-sm relative group transition-all duration-300 hover:scale-105">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      <span className="text-lg font-medium text-foreground/90">3</span>
                    </div>
                    <h3 className="text-sm font-medium mb-1">Contextual Enhancement</h3>
                    <p className="text-xs text-muted-foreground/80">Rather than arbitrary filters, we analyze the content's context to apply enhancements that preserve and elevate the original message with perfect balance.</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {isDelta ? <DeltaAiGenerator /> : <SimpleImageEnhancer />}
        </main>

        <footer className={`mt-12 pt-6 ${isDelta ? '' : 'border-t border-border/10'}`}>
          {isDelta ? (
            // Minimal Delta footer with subtle animation
            <div className="flex justify-end delta-fade-in-slow" style={{ animationDelay: '500ms' }}>
              <div className="text-xs text-gray-300 transition-all duration-700 hover:text-blue-400 cursor-default">
                Δ
              </div>
            </div>
          ) : (
            // Original SnapEnhance footer
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <FounderBadge size="lg" />

              <div className="flex flex-col items-center text-xs text-muted-foreground/60 gap-2">
                <TimeSyncDisplay />
                <div className="flex items-center gap-3 mb-1">
                  <a
                    href="https://github.com/bniladridas/snapenhance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground/70 hover:text-primary transition-colors"
                    title="snapenhance"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
                <p>snapenhance.vercel.app | <a href="https://snapenhanceai.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">snapenhanceai.vercel.app</a></p>
              </div>
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}

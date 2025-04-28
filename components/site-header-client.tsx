'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FounderBadge } from '@/components/founder-badge';
import { ModeToggle } from '@/components/mode-toggle';
import { useState, useEffect } from 'react';
import { getMode, AppMode } from './mode-utils';

export function SiteHeaderClient() {
  const pathname = usePathname();
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

  // Don't show the header on the home page since we've already added it there
  if (pathname === '/') {
    return null;
  }

  return (
    <div className={`border-b ${isDelta ? 'border-blue-100' : 'border-border/10'} w-full overflow-x-hidden`}>
      <div className="container px-4 max-w-4xl mx-auto w-full">
        <div className="flex flex-wrap justify-between items-center py-3 sm:h-14">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/" className="flex items-center gap-1 sm:gap-2 hover:opacity-90 transition-opacity">
              <img
                src={isDelta ? "/images/delta-logo.svg" : "/logo-pastel.svg"}
                alt={isDelta ? "Delta Logo" : "SnapEnhance Logo"}
                className="w-5 h-5 sm:w-6 sm:h-6"
                onError={(e) => {
                  // Fallback if delta logo doesn't exist
                  if (isDelta) {
                    e.currentTarget.src = "/logo-pastel.svg";
                  }
                }}
              />
              <h1 className={`text-sm sm:text-base font-medium tracking-tight ${isDelta ? 'text-blue-600' : ''}`}>
                {isDelta ? 'Delta' : 'SnapEnhance'}
              </h1>
            </Link>
            <div className={`hidden md:block border-l ${isDelta ? 'border-blue-100 pl-4' : 'border-border/10 pl-4'}`}>
              <p className={`text-xs ${isDelta ? 'text-blue-500' : 'text-muted-foreground'}`}>
                {isDelta ? 'Advanced Visual Processing System' : 'Screenshot Enhancement and Visual Content Platform'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-4 mt-2 sm:mt-0 w-full sm:w-auto">
            <ModeToggle variant="switch" className="mr-1 sm:mr-2" />

            <div className="hidden lg:block">
              <FounderBadge size="sm" showText={false} />
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/blog"
                className={`text-xs sm:text-sm ${pathname.startsWith('/blog')
                  ? (isDelta ? 'text-blue-600' : 'text-primary')
                  : (isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-muted-foreground hover:text-primary')} transition-colors`}
              >
                Blog
              </Link>
              <Link
                href="/ai-ml"
                className={`text-xs sm:text-sm ${pathname === '/ai-ml'
                  ? (isDelta ? 'text-blue-600' : 'text-primary')
                  : (isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-muted-foreground hover:text-primary')} transition-colors`}
              >
                AI/ML
              </Link>
              <Link
                href="/legal"
                className={`text-xs sm:text-sm ${pathname === '/legal'
                  ? (isDelta ? 'text-blue-600' : 'text-primary')
                  : (isDelta ? 'text-blue-500 hover:text-blue-700' : 'text-muted-foreground hover:text-primary')} transition-colors`}
              >
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

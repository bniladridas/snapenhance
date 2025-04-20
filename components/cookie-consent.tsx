'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookie-consent');
    if (!hasAccepted) {
      setShowConsent(true);
    }
    setMounted(true);
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!mounted) return null;

  // If user has already accepted, don't show the banner
  if (!showConsent) return null;

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowConsent(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowConsent(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-5 duration-300">
      <div className="mx-auto max-w-4xl bg-background/95 backdrop-blur-sm rounded-lg border border-border/20 shadow-lg p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-base font-medium">Cookie & Cache Notice</h3>
            <p className="text-sm text-muted-foreground">
              SnapEnhance uses cookies and browser storage to enhance your experience. We store your theme preferences,
              temporary image data, and application settings to provide a seamless experience.
              <a href="/cookies" className="text-primary hover:underline">Learn more</a> about how we use cookies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={acceptEssential}
              className="text-xs"
            >
              Essential Only
            </Button>
            <Button
              size="sm"
              onClick={acceptAll}
              className="text-xs"
            >
              Accept All
            </Button>
          </div>
        </div>
        <button
          onClick={acceptEssential}
          className="absolute top-3 right-3 text-muted-foreground/70 hover:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
}

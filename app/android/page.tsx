'use client';

import Link from 'next/link';

export default function AndroidPage() {
  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">SnapEnhance for Android</h1>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1">
            <div className="bg-muted rounded-lg overflow-hidden shadow-md">
              <div className="bg-primary/10 p-4 flex justify-center">
                <img
                  src="/backgrounds/enhanced-image-social-announcement.png"
                  alt="SnapEnhance on Android"
                  className="max-h-[300px] rounded shadow-sm"
                />
              </div>
              <div className="p-4">
                <h2 className="text-base font-medium mb-2">Optimized for Android Devices</h2>
                <p className="text-sm text-muted-foreground">
                  SnapEnhance works seamlessly on Android devices including Realme, Samsung, Google Pixel,
                  OnePlus, Xiaomi, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-medium mb-3">Transform Your Mobile Screenshots</h2>
              <p className="text-muted-foreground mb-4">
                SnapEnhance for Android brings professional screenshot enhancement directly to your
                Realme and other Android devices. Capture, enhance, and share - all from your phone.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Native Android Experience</h3>
                    <p className="text-xs text-muted-foreground">
                      Optimized for Android's interface guidelines and touch controls
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Direct Camera Integration</h3>
                    <p className="text-xs text-muted-foreground">
                      Capture and enhance in one seamless workflow
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Share Directly to Apps</h3>
                    <p className="text-xs text-muted-foreground">
                      Send enhanced screenshots to any app using Android's share menu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium text-sm">
                Download for Android
              </button>
              <Link href="/blog" className="text-center text-xs text-muted-foreground hover:underline">
                Learn how to use SnapEnhance on your phone
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-medium">Perfect for Realme and All Android Devices</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Optimized Performance</h3>
              <p className="text-xs text-muted-foreground">
                SnapEnhance is optimized for Android devices, including Realme phones, ensuring smooth performance
                even on mid-range hardware. The app is designed to be lightweight and efficient, preserving your
                device's battery life while delivering professional results.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Android-Specific Features</h3>
              <p className="text-xs text-muted-foreground">
                Take advantage of Android-specific features like direct integration with your phone's screenshot
                functionality, custom share intents, and notification actions. SnapEnhance works with your Realme's
                built-in screenshot tools for a seamless experience.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Material Design Interface</h3>
              <p className="text-xs text-muted-foreground">
                SnapEnhance follows Android's Material Design guidelines, providing a familiar and intuitive interface
                for Realme and other Android users. The app adapts to your device's theme settings, supporting both
                light and dark modes.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-medium mb-4">Featured Background Styles</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-background border border-border rounded-md overflow-hidden">
                <img
                  src="/backgrounds/enhanced-image-quarterly-report.png"
                  alt="Quarterly Report Style"
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-medium">Quarterly Report</h3>
                  <p className="text-xs text-muted-foreground">
                    Professional green gradient perfect for business and financial content
                  </p>
                </div>
              </div>

              {/* Placeholder for additional styles */}
              <div className="bg-background border border-border rounded-md overflow-hidden opacity-60">
                <div className="w-full h-32 bg-gradient-to-r from-primary/10 to-primary/30 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">More styles coming soon</span>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium">Gradient Blue</h3>
                  <p className="text-xs text-muted-foreground">
                    Modern, vibrant background for social media posts
                  </p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-md overflow-hidden opacity-60">
                <div className="w-full h-32 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">More styles coming soon</span>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium">Dark Mode</h3>
                  <p className="text-xs text-muted-foreground">
                    Eye-friendly dark background for code snippets and night viewing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-muted/20 p-4 rounded-lg border border-border/30">
            <h2 className="text-base font-medium mb-2">System Requirements</h2>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Android 8.0 (Oreo) or higher</li>
              <li>• Compatible with all Realme devices running Android 8.0+</li>
              <li>• 50MB free storage space</li>
              <li>• Camera permission (for direct capture)</li>
              <li>• Storage permission (for accessing and saving screenshots)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <p>SnapEnhance for Android | Last updated: April 19, 2025</p>
        </div>
      </div>
    </div>
  );
}

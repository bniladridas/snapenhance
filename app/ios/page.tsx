'use client';

import Link from 'next/link';

export default function IOSPage() {
  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">SnapEnhance for iOS</h1>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1">
            <div className="bg-muted rounded-lg overflow-hidden shadow-md">
              <div className="bg-primary/10 p-4 flex justify-center">
                <img
                  src="/backgrounds/enhanced-image-quarterly-report.png"
                  alt="SnapEnhance on iOS"
                  className="max-h-[300px] rounded shadow-sm"
                />
              </div>
              <div className="p-4">
                <h2 className="text-base font-medium mb-2">Designed for Apple Devices</h2>
                <p className="text-sm text-muted-foreground">
                  SnapEnhance works beautifully on all Apple devices including iPhone, iPad, and Mac
                  with seamless iCloud sync.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-medium mb-3">Elevate Your iOS Screenshots</h2>
              <p className="text-muted-foreground mb-4">
                SnapEnhance for iOS brings professional screenshot enhancement to your Apple ecosystem.
                With native integration and Apple-optimized design, transform your screenshots with just a few taps.
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
                    <h3 className="text-sm font-medium">Native iOS Experience</h3>
                    <p className="text-xs text-muted-foreground">
                      Follows Apple's Human Interface Guidelines for intuitive use
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
                    <h3 className="text-sm font-medium">Shortcuts Integration</h3>
                    <p className="text-xs text-muted-foreground">
                      Create automated workflows with Apple Shortcuts
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
                    <h3 className="text-sm font-medium">iCloud Sync</h3>
                    <p className="text-xs text-muted-foreground">
                      Access your enhanced screenshots across all your Apple devices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium text-sm">
                Download on the App Store
              </button>
              <Link href="/blog" className="text-center text-xs text-muted-foreground hover:underline">
                Learn how to use SnapEnhance on your iPhone
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-medium">Seamless Apple Ecosystem Integration</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Share Sheet Extension</h3>
              <p className="text-xs text-muted-foreground">
                Enhance screenshots directly from the iOS Share Sheet without even opening the app.
                Simply take a screenshot, tap the share button, and select SnapEnhance to instantly
                apply your favorite background style.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Continuity Camera</h3>
              <p className="text-xs text-muted-foreground">
                Use your iPhone as a camera for your Mac with Continuity Camera support.
                Capture, enhance, and insert professional images directly into your Mac
                applications with just a few clicks.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Universal Purchase</h3>
              <p className="text-xs text-muted-foreground">
                Buy once and use on all your Apple devices. SnapEnhance is available as a universal
                purchase, giving you access on iPhone, iPad, and Mac with a single purchase. Your
                settings and styles sync automatically via iCloud.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-medium mb-4">Featured Background Styles</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-background border border-border rounded-md overflow-hidden">
                <img
                  src="/backgrounds/enhanced-image-social-announcement.png"
                  alt="Social Announcement Style"
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-medium">Social Announcement</h3>
                  <p className="text-xs text-muted-foreground">
                    Warm, engaging background perfect for social media posts
                  </p>
                </div>
              </div>

              {/* Placeholder for additional styles */}
              <div className="bg-background border border-border rounded-md overflow-hidden opacity-60">
                <div className="w-full h-32 bg-gradient-to-r from-primary/10 to-primary/30 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">More styles coming soon</span>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium">Apple Light</h3>
                  <p className="text-xs text-muted-foreground">
                    Inspired by Apple's clean design aesthetic
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
                    Perfect complement to iOS Dark Mode
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-muted/20 p-4 rounded-lg border border-border/30">
            <h2 className="text-base font-medium mb-2">System Requirements</h2>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• iOS 15.0 or later</li>
              <li>• iPadOS 15.0 or later</li>
              <li>• macOS 12.0 or later</li>
              <li>• Compatible with iPhone, iPad, and Mac</li>
              <li>• 30MB free storage space</li>
              <li>• Photo Library access permission</li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
            <h2 className="text-base font-medium mb-2">Privacy Focus</h2>
            <p className="text-sm text-muted-foreground">
              At SnapEnhance, we take your privacy seriously. Our iOS app:
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1">
              <li>• Processes all images locally on your device</li>
              <li>• Never uploads your screenshots to any server</li>
              <li>• Uses iCloud only for syncing your preferences</li>
              <li>• Includes no third-party analytics or tracking</li>
              <li>• Follows Apple's App Privacy guidelines</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <p>SnapEnhance for iOS | Last updated: April 19, 2025</p>
        </div>
      </div>
    </div>
  );
}

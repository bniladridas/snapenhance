'use client';

import Link from 'next/link';

export default function SocialPage() {
  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">SnapEnhance for Social Media</h1>

        <div className="bg-muted/30 p-6 rounded-lg border border-border/30 mb-8">
          <h2 className="text-lg font-medium mb-3">Elevate Your Social Media Presence</h2>
          <p className="text-muted-foreground">
            While platforms like Facebook connect people, SnapEnhance transforms your visual content to make those
            connections more impactful. Create professional, eye-catching images that stand out in crowded social feeds.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex-1">
            <img
              src="/backgrounds/enhanced-image-social-announcement.png"
              alt="Enhanced screenshot for social media"
              className="rounded-lg shadow-md w-full"
            />
            <p className="text-xs text-muted-foreground/70 mt-2 text-center">
              Example of a screenshot enhanced with our Social Announcement style
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-base font-medium mb-3">The Perfect Companion for Social Media</h2>
              <p className="text-sm text-muted-foreground mb-4">
                SnapEnhance is the ideal tool for content creators, social media managers, and businesses
                looking to enhance their visual presence across platforms like Facebook, Instagram, Twitter,
                and LinkedIn.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Optimized for Social Sharing</h3>
                    <p className="text-xs text-muted-foreground">
                      Create images perfectly sized for each platform's requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Increased Engagement</h3>
                    <p className="text-xs text-muted-foreground">
                      Professional-looking content gets more likes, shares, and comments
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Brand Consistency</h3>
                    <p className="text-xs text-muted-foreground">
                      Maintain a cohesive visual identity across all platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-lg font-medium">How SnapEnhance Complements Social Media Platforms</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-md overflow-hidden">
              <div className="p-4 bg-primary/5 border-b border-border">
                <h3 className="text-base font-medium">Facebook</h3>
              </div>
              <div className="p-4">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Transform screenshots of important conversations or posts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Create professional images for Facebook Business Pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Enhance images for Facebook Marketplace listings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Design eye-catching event cover photos</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-background border border-border rounded-md overflow-hidden">
              <div className="p-4 bg-primary/5 border-b border-border">
                <h3 className="text-base font-medium">Instagram</h3>
              </div>
              <div className="p-4">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Create perfectly-sized images for feed posts and stories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Enhance screenshots for tutorial content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Design professional carousel posts with consistent styling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Prepare visuals for Instagram Shopping</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-background border border-border rounded-md overflow-hidden">
              <div className="p-4 bg-primary/5 border-b border-border">
                <h3 className="text-base font-medium">Twitter/X</h3>
              </div>
              <div className="p-4">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Make tweet screenshots stand out in your timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Create professional thread starter images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Design eye-catching promotional graphics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Enhance code snippets and technical content</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-background border border-border rounded-md overflow-hidden">
              <div className="p-4 bg-primary/5 border-b border-border">
                <h3 className="text-base font-medium">LinkedIn</h3>
              </div>
              <div className="p-4">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Create professional-looking content for your profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Enhance screenshots for thought leadership posts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Design visuals for company updates and announcements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Prepare professional images for LinkedIn articles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-muted/20 p-6 rounded-lg border border-border/30">
            <h2 className="text-base font-medium mb-4">Success Story: Increasing Social Media Engagement</h2>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground italic">
                  "After using SnapEnhance to improve the quality of our social media screenshots, we saw a 47% increase
                  in engagement across our Facebook and LinkedIn posts. The professional appearance of our content has
                  significantly improved our brand perception and audience growth."
                </p>
                <p className="text-sm font-medium mt-3">
                  — Sarah Johnson, Social Media Manager
                </p>
              </div>

              <div className="flex-1">
                <div className="bg-background p-4 rounded-md border border-border">
                  <h3 className="text-sm font-medium mb-2">Results After Using SnapEnhance</h3>
                  <ul className="text-xs text-muted-foreground space-y-2">
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>47% increase in overall engagement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>63% more shares on technical content</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>52% higher click-through rate on promotional posts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>29% increase in follower growth rate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <h2 className="text-lg font-medium mb-4">Ready to Transform Your Social Media Content?</h2>
          <div className="flex gap-4">
            <Link
              href="/"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium"
            >
              Try SnapEnhance Now
            </Link>
            <Link
              href="/blog"
              className="bg-muted text-muted-foreground px-4 py-2 rounded-md text-sm font-medium"
            >
              Read Our Blog
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <p>SnapEnhance for Social Media | Last updated: April 19, 2025</p>
        </div>
      </div>
    </div>
  );
}

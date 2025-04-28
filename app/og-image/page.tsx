'use client';

import Link from 'next/link';

export default function OGImagePage() {
  return (
    <div className="min-h-screen py-8 bg-pastel-gradient">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Open Graph Image</h1>

        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-border/30 shadow-sm mb-8">
          <h2 className="text-lg font-medium mb-3">Enhanced Social Sharing</h2>
          <p className="text-muted-foreground">
            Our Open Graph image ensures that when you share SnapEnhance on social media platforms,
            it appears with a professional, eye-catching preview that accurately represents our platform.
          </p>
        </div>

        <div className="flex flex-col gap-8 mb-12">
          <div>
            <h2 className="text-base font-medium mb-4">Our Open Graph Image</h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-md">
              <img
                src="/backgrounds/new-og.png"
                alt="SnapEnhance Open Graph Image"
                className="w-full"
              />
            </div>
            <p className="text-xs text-muted-foreground/70 mt-2 text-center">
              This image appears when SnapEnhance links are shared on social media
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-base font-medium">How Open Graph Images Work</h2>
            <p className="text-sm text-muted-foreground">
              Open Graph (OG) images are special images that appear when links are shared on social media platforms
              like Facebook, Twitter, LinkedIn, and messaging apps. They help make shared links more visually
              appealing and increase engagement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-md border border-border/30 shadow-sm">
                <h3 className="text-sm font-medium mb-2">Benefits of OG Images</h3>
                <ul className="text-xs text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Increased click-through rates on shared links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Better brand recognition and visual identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>More professional appearance in social feeds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Improved user experience for shared content</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-md border border-border/30 shadow-sm">
                <h3 className="text-sm font-medium mb-2">Technical Implementation</h3>
                <ul className="text-xs text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Optimized dimensions: 1200 × 630 pixels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Implemented via meta tags in the page head</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Customized for different platforms (Facebook, Twitter)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Created using SnapEnhance's own enhancement tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-medium">How Our OG Image Was Created</h2>

          <div className="bg-white/90 backdrop-blur-sm border border-border rounded-md overflow-hidden shadow-sm">
            <div className="p-4 bg-primary/5 border-b border-border">
              <h3 className="text-base font-medium">Using SnapEnhance's Own Tools</h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-4">
                Our Open Graph image was created using SnapEnhance itself, showcasing the platform's
                capabilities for creating professional visual content. We used the following process:
              </p>

              <ol className="text-sm text-muted-foreground space-y-3 pl-5 list-decimal">
                <li>
                  <strong>Started with a screenshot</strong> of the SnapEnhance interface
                </li>
                <li>
                  <strong>Applied our professional background styles</strong> to create a clean, polished look
                </li>
                <li>
                  <strong>Optimized the dimensions</strong> to the recommended 1200 × 630 pixels for optimal display on social platforms
                </li>
                <li>
                  <strong>Added the SnapEnhance logo and tagline</strong> to reinforce brand identity
                </li>
                <li>
                  <strong>Ensured high contrast</strong> for readability across different devices and platforms
                </li>
              </ol>

              <div className="mt-4 p-4 bg-white rounded-md shadow-sm">
                <p className="text-xs text-muted-foreground italic">
                  "This is a perfect example of how SnapEnhance can be used to create professional visual assets
                  for your own projects. The same techniques we used for our OG image can be applied to your
                  screenshots for social media posts, documentation, or presentations."
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-border/30 shadow-sm">
            <h2 className="text-base font-medium mb-4">Test Our Social Sharing</h2>
            <p className="text-sm text-muted-foreground mb-4">
              See how SnapEnhance appears when shared on different platforms:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://snapenhance.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 bg-white rounded-md border border-border hover:border-primary/50 transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="text-xs">Facebook</span>
              </a>

              <a
                href="https://twitter.com/intent/tweet?url=https://snapenhance.vercel.app&text=Check out SnapEnhance - Screenshot Enhancement and Visual Content Platform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 bg-white rounded-md border border-border hover:border-primary/50 transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="text-xs">Twitter</span>
              </a>

              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://snapenhance.vercel.app&title=SnapEnhance&summary=Screenshot Enhancement and Visual Content Platform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 bg-white rounded-md border border-border hover:border-primary/50 transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="text-xs">LinkedIn</span>
              </a>

              <a
                href="https://pinterest.com/pin/create/button/?url=https://snapenhance.vercel.app&media=https://snapenhance.vercel.app/backgrounds/new-og.png&description=SnapEnhance - Screenshot Enhancement and Visual Content Platform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 bg-white rounded-md border border-border hover:border-primary/50 transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                  <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"></path>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
                <span className="text-xs">Pinterest</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <h2 className="text-lg font-medium mb-4">Create Your Own Enhanced Images</h2>
          <div className="flex gap-4">
            <Link
              href="/"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium"
            >
              Try SnapEnhance Now
            </Link>
            <Link
              href="/social"
              className="bg-white/90 backdrop-blur-sm text-muted-foreground px-4 py-2 rounded-md text-sm font-medium shadow-sm"
            >
              Social Media Features
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <p>SnapEnhance Open Graph Image | Last updated: April 28, 2025</p>
        </div>
      </div>
    </div>
  );
}

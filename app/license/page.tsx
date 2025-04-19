'use client';

export default function LicensePage() {
  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">License</h1>
        
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <h2 className="text-lg font-medium mb-4">MIT License</h2>
          
          <p className="text-muted-foreground mb-6">
            Copyright (c) 2025 SnapEnhance
          </p>
          
          <p className="text-muted-foreground mb-4">
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
          </p>
          
          <p className="text-muted-foreground mb-4">
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
          </p>
          
          <p className="text-muted-foreground mb-4">
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
          
          <div className="mt-8 p-4 bg-muted/20 rounded-lg border border-border/30">
            <h3 className="text-base font-medium mb-2">What This Means</h3>
            <p className="text-sm text-muted-foreground">
              The MIT License is a permissive license that is short and to the point. It lets people do almost anything they want with your project, like making and distributing closed source versions, as long as they include the original license and copyright notice in any copy of the software or substantial portion of it.
            </p>
          </div>
          
          <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border/30">
            <h3 className="text-base font-medium mb-2">Third-Party Licenses</h3>
            <p className="text-sm text-muted-foreground">
              SnapEnhance uses several open-source libraries and components, each with their own licenses. All third-party components are used in compliance with their respective licenses. Major dependencies include:
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1">
              <li>• Next.js (MIT License)</li>
              <li>• React (MIT License)</li>
              <li>• Tailwind CSS (MIT License)</li>
              <li>• Lucide Icons (ISC License)</li>
              <li>• Marked (MIT License)</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <p>Last updated: April 19, 2025</p>
        </div>
      </div>
    </div>
  );
}

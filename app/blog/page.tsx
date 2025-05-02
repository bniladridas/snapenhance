'use client';

export default function BlogPage() {
  return (
    <div className="min-h-screen py-8 bg-pastel-gradient">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">SnapEnhance Blog</h1>

        <div className="mb-8 flex flex-col gap-4">
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/feedback" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">New Feedback Form for <span className="text-primary">SnapEnhance AI</span> Platform</h2>
              <p className="text-xs text-muted-foreground">Published: May 3, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                We've launched a dedicated feedback form for the SnapEnhance AI platform. Share your thoughts, report issues, or suggest new features to help us improve.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/quick-mode-feature" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">Introducing Quick Mode: Ultra-Fast Responses in <span className="text-primary">SnapEnhance AI</span></h2>
              <p className="text-xs text-muted-foreground">Published: May 1, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Learn about our new Quick Mode toggle that provides ultra-fast responses when speed is a priority, along with technical improvements for better performance.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/voice-interface-philosophy" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">Voice Interface & Philosophy: New Features in <span className="text-primary">SnapEnhance AI</span></h2>
              <p className="text-xs text-muted-foreground">Published: April 30, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Discover our new voice interface with real-time transcription and learn about our clarity-over-complexity philosophy that guides <span className="text-primary">SnapEnhance AI</span>'s development.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/version-numbering" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">Understanding SnapEnhance Version Numbering: Our Approach to Semantic Versioning</h2>
              <p className="text-xs text-muted-foreground">Published: April 30, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Learn how we use semantic versioning principles to communicate the significance of each update and the evolution of our platform through our version numbering system.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/snapenhance-ai-platform" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">Introducing <span className="text-primary">SnapEnhance AI</span>: Powerful Text-Based Assistant Powered by Llama 3.3 and DeepSeek R1</h2>
              <p className="text-xs text-muted-foreground">Published: April 30, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Discover our new text-based AI assistant platform featuring zero-shot function calling, real-time data integration, and enhanced response formatting powered by cutting-edge language models.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/prompt-engineering-guide" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">Prompt Engineering Guide: Creating Effective AI Image Prompts</h2>
              <p className="text-xs text-muted-foreground">Published: April 30, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Learn how to craft effective prompts for AI image generation in Delta mode with our comprehensive guide to prompt engineering techniques.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/product-roadmap" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">SnapEnhance Product Roadmap: The Future of Visual Content Creation</h2>
              <p className="text-xs text-muted-foreground">Published: April 30, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Explore our ambitious vision for SnapEnhance as we evolve from a screenshot enhancement tool into a comprehensive visual content platform.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/ai-ethics" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">AI Ethics: Our Approach to Responsible Visual AI</h2>
              <p className="text-xs text-muted-foreground">Published: April 30, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Learn about our ethical framework for AI implementation, focusing on transparency, privacy, and human-centered design in our visual AI features.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/office-productivity" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">Transforming Office Productivity with SnapEnhance</h2>
              <p className="text-xs text-muted-foreground">Published: April 29, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Discover how SnapEnhance can streamline visual communication in your office environment, from documentation to presentations and team collaboration.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/google-startup-trust" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">How Google Might Trust Our Startup: A System Perspective</h2>
              <p className="text-xs text-muted-foreground">Published: April 29, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Explore how our technical implementation, user experience design, and ethical considerations help build trust with major platforms like Google.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/time-zone-detection" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">Automatic Time Zone Detection</h2>
              <p className="text-xs text-muted-foreground">Published: April 28, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Discover how our new time zone detection feature enhances your experience with accurate time display and synchronization across different regions.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/mobile-responsiveness" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">Improving Mobile Responsiveness</h2>
              <p className="text-xs text-muted-foreground">Published: April 28, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Learn how we optimized the SnapEnhance interface for mobile devices, fixing layout issues and enhancing the user experience on smaller screens.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/fixing-gemini-image-generation" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">Solving Gemini API Image Generation Challenges</h2>
              <p className="text-xs text-muted-foreground">Published: April 28, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Discover how we solved the challenges with Google's Gemini API image generation by using direct REST API calls instead of the JavaScript SDK.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/testing-gemini-api" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">Testing Google Gemini API Integration</h2>
              <p className="text-xs text-muted-foreground">Published: April 20, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Learn how we test our Gemini API integration using shell scripts to ensure reliable AI-powered visual research.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="/blog/production-build-optimization" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">Troubleshooting Production Build Optimization</h2>
              <p className="text-xs text-muted-foreground">Published: April 20, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Learn how to optimize your Next.js application for production with strategies for bundle size, image optimization, and more.
              </p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-colors shadow-sm">
            <a href="#mobile-access" className="block">
              <h2 className="text-base font-medium mb-1 text-foreground hover:text-primary transition-colors">How to Access Your Web Application on a Mobile Phone</h2>
              <p className="text-xs text-muted-foreground">Published: April 19, 2025</p>
              <p className="text-sm text-muted-foreground mt-2">
                Explore different methods to test your web application on mobile devices and enhance mobile screenshots.
              </p>
            </a>
          </div>
        </div>

        <article className="prose prose-sm dark:prose-invert max-w-none" id="mobile-access">
          <h2 className="text-lg font-medium mt-8 mb-4">How to Access Your Web Application on a Mobile Phone</h2>

          <p className="text-muted-foreground mb-4">
            Published: April 19, 2025 | Author: SnapEnhance Team
          </p>

          <div className="mb-6 p-4 bg-white/90 backdrop-blur-sm rounded-lg border border-border/50 shadow-sm">
            <h3 className="text-base font-medium mb-2">Featured Examples: Professional Background Enhancements</h3>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1">
                  <img
                    src="/backgrounds/enhanced-image-quarterly-report.png"
                    alt="Screenshot with quarterly report background enhancement"
                    className="rounded-md shadow-md w-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    This example shows how SnapEnhance transforms a regular screenshot with our "Quarterly Report" background style.
                    The clean, professional appearance with a subtle green gradient makes it perfect for business presentations and financial documentation.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1">
                  <img
                    src="/backgrounds/enhanced-image-social-announcement.png"
                    alt="Screenshot with social announcement background enhancement"
                    className="rounded-md shadow-md w-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    This example demonstrates the "Social Announcement" background style, which uses warm orange tones to create an engaging, attention-grabbing image perfect for social media posts and promotional content.
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-2">
                When testing on mobile devices, pay special attention to how these enhanced images render on different screen sizes
                and how they appear in various lighting conditions. The contrasting styles showcase SnapEnhance's versatility.
              </p>
            </div>
          </div>

          <p>
            Testing your web application on a mobile device is an essential part of the development process.
            It helps ensure that your application is responsive, user-friendly, and functions correctly across different devices.
            In this guide, we'll explore several methods to access your locally developed web application on a mobile phone.
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">Method 1: Access via Local Network (Easiest)</h3>

          <p>
            The simplest way to test your web application on a mobile device is to connect both your development machine and mobile phone to the same WiFi network.
          </p>

          <h4 className="text-sm font-medium mt-4 mb-1">Step 1: Configure Your Development Server</h4>

          <p>
            First, you need to configure your development server to accept connections from devices other than localhost.
            For Next.js applications, modify your package.json scripts:
          </p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs border border-border/30 shadow-sm">
            {`"scripts": {
  "dev": "next dev -H 0.0.0.0",
  "start": "next start -H 0.0.0.0"
}`}
          </pre>

          <p>
            The <code>-H 0.0.0.0</code> flag tells the server to listen on all available network interfaces, not just localhost.
          </p>

          <h4 className="text-sm font-medium mt-4 mb-1">Step 2: Find Your Computer's IP Address</h4>

          <p>On macOS or Linux, open Terminal and run:</p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs border border-border/30 shadow-sm">
            ifconfig | grep "inet " | grep -v 127.0.0.1
          </pre>

          <p>On Windows, open Command Prompt and run:</p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs border border-border/30 shadow-sm">
            ipconfig
          </pre>

          <p>Look for your IPv4 address, which typically looks like 192.168.x.x or 10.0.x.x</p>

          <h4 className="text-sm font-medium mt-4 mb-1">Step 3: Access on Your Mobile Device</h4>

          <p>
            Start your development server with <code>npm run dev</code>, then open a browser on your mobile device and navigate to:
          </p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs border border-border/30 shadow-sm">
            http://YOUR_IP_ADDRESS:3000
          </pre>

          <p>
            For example, if your IP address is 192.168.1.5, you would navigate to <code>http://192.168.1.5:3000</code>
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">Method 2: Use a Tunneling Service</h3>

          <p>
            If you're having trouble with the local network approach or need to test from a device not on your network,
            you can use a tunneling service like ngrok.
          </p>

          <h4 className="text-sm font-medium mt-4 mb-1">Step 1: Install ngrok</h4>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs border border-border/30 shadow-sm">
            npm install -g ngrok
          </pre>

          <h4 className="text-sm font-medium mt-4 mb-1">Step 2: Start Your Development Server</h4>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs border border-border/30 shadow-sm">
            npm run dev
          </pre>

          <h4 className="text-sm font-medium mt-4 mb-1">Step 3: Create a Tunnel</h4>

          <p>In a separate terminal window, run:</p>

          <pre className="bg-white p-4 rounded-md overflow-x-auto text-xs border border-border/30 shadow-sm">
            ngrok http 3000
          </pre>

          <p>
            Ngrok will provide a public URL (like <code>https://abc123.ngrok.io</code>) that you can access from any device with internet access.
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">Method 3: Deploy to a Hosting Service</h3>

          <p>
            For a more production-like environment, you can deploy your application to a hosting service like Vercel:
          </p>

          <ol className="list-decimal pl-5 space-y-2 mt-2">
            <li>Push your code to a GitHub repository</li>
            <li>Connect your GitHub repository to Vercel</li>
            <li>Vercel will automatically deploy your application</li>
            <li>You'll get a public URL that you can access from any device</li>
          </ol>

          <h3 className="text-base font-medium mt-6 mb-2">What to Test on Mobile</h3>

          <p>When testing on your mobile device, be sure to check:</p>

          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Responsive layout</strong> - Does everything fit properly on the smaller screen?</li>
            <li><strong>Touch interactions</strong> - Are buttons and interactive elements easy to tap?</li>
            <li><strong>Mobile-specific features</strong> - Do features like camera access work correctly?</li>
            <li><strong>Performance</strong> - Does the application load and respond quickly?</li>
            <li><strong>Cross-browser compatibility</strong> - Test on different mobile browsers (Chrome, Safari, etc.)</li>
          </ul>

          <h3 className="text-base font-medium mt-6 mb-2">Troubleshooting</h3>

          <p><strong>Can't connect via local IP:</strong></p>
          <ul className="list-disc pl-5 space-y-1 mt-1">
            <li>Ensure both devices are on the same network</li>
            <li>Check if your computer's firewall is blocking connections</li>
            <li>Try disabling any VPNs that might be running</li>
          </ul>

          <p><strong>Connection refused errors:</strong></p>
          <ul className="list-disc pl-5 space-y-1 mt-1">
            <li>Verify you're using the correct port number</li>
            <li>Make sure your development server is running with the -H 0.0.0.0 flag</li>
          </ul>

          <h3 className="text-base font-medium mt-8 mb-2">Using SnapEnhance for Mobile Screenshots</h3>

          <p>
            SnapEnhance isn't just for desktop screenshots - it's also perfect for enhancing screenshots taken on your mobile device!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-md border border-border/30 shadow-sm">
              <h4 className="text-sm font-medium mb-2">Mobile Screenshot Workflow</h4>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Take a screenshot on your mobile device</li>
                <li>Access SnapEnhance on your phone using the methods described above</li>
                <li>Upload your screenshot directly from your phone's gallery</li>
                <li>Apply one of our professional background styles (like "Quarterly Report" or "Social Announcement")</li>
                <li>Download the enhanced image back to your phone</li>
                <li>Share directly to social media or messaging apps</li>
              </ol>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-md border border-border/30 shadow-sm">
              <h4 className="text-sm font-medium mb-2">Perfect Use Cases</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li><strong>App Reviews:</strong> Enhance screenshots of mobile apps you're reviewing</li>
                <li><strong>Mobile Tutorials:</strong> Create professional-looking mobile how-to guides</li>
                <li><strong>Social Media:</strong> Make your mobile screenshots stand out on Instagram or Twitter</li>
                <li><strong>Bug Reports:</strong> Submit clearer, more professional bug reports for mobile issues</li>
                <li><strong>Mobile UI Designs:</strong> Showcase your mobile interface designs in a polished format</li>
              </ul>
            </div>
          </div>

          <p>
            The background styles shown in our examples are particularly effective for mobile screenshots. The "Quarterly Report" style
            provides a professional look for business content, while the "Social Announcement" style creates eye-catching images
            that stand out in social feeds. Both work well with the typically vertical orientation of mobile content.
          </p>

          <div className="border-t border-border/20 mt-8 pt-4">
            <p className="text-sm text-muted-foreground/80">
              By testing your web application on actual mobile devices, you can ensure a better experience for all your users,
              regardless of the device they're using. Regular mobile testing should be an integral part of your development workflow.
              And with SnapEnhance, you can create professional-looking screenshots from any device, anywhere!
            </p>
          </div>
        </article>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <p>Last updated: May 3, 2025</p>
        </div>
      </div>
    </div>
  );
}

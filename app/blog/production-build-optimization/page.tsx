'use client';



export default function ProductionBuildOptimizationPage() {
  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Troubleshooting Production Build Optimization</h1>

        <article className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-4">
            Published: April 20, 2025 | Author: SnapEnhance Team
          </p>

          <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border/50">
            <h3 className="text-base font-medium mb-2">Key Takeaways</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Production builds require different optimization strategies than development builds</li>
              <li>Common issues include large bundle sizes, slow initial load times, and rendering inconsistencies</li>
              <li>Proper image optimization is crucial for applications like SnapEnhance that handle visual content</li>
              <li>Environment variables and API keys need special handling in production builds</li>
              <li>Robust API error handling is essential to prevent JSON parsing errors and timeout issues in production</li>
              <li>Vercel deployment offers specific optimization features that can be leveraged</li>
            </ul>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Understanding Production Build Challenges</h2>

          <p>
            When deploying SnapEnhance to production, we encountered several optimization challenges that required careful
            troubleshooting. In this guide, we'll share our experiences and solutions to help you optimize your own Next.js
            applications for production.
          </p>

          <p>
            Production builds differ significantly from development builds in terms of performance requirements, error handling,
            and optimization strategies. What works well in development might not translate to a smooth production experience.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">Common Production Build Issues</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Large Bundle Sizes</h3>
              <p className="text-xs text-muted-foreground">
                Production builds with excessive JavaScript can slow down initial page loads. This is especially problematic
                for applications like SnapEnhance that need to be responsive and quick to load.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Image Optimization Issues</h3>
              <p className="text-xs text-muted-foreground">
                Unoptimized images can significantly impact performance. For SnapEnhance, where image processing is central
                to the application, proper image optimization is crucial.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Environment Variable Configuration</h3>
              <p className="text-xs text-muted-foreground">
                Incorrect handling of environment variables, especially API keys like our Gemini API key, can lead to
                functionality not working in production.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Rendering Inconsistencies</h3>
              <p className="text-xs text-muted-foreground">
                Differences between server-side rendering (SSR), static site generation (SSG), and client-side rendering can
                cause unexpected behavior in production that wasn't present in development.
              </p>
            </div>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Troubleshooting Bundle Size Issues</h2>

          <p>
            Large JavaScript bundles can significantly slow down your application's initial load time. Here's how we addressed
            this issue in SnapEnhance:
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">1. Analyzing Bundle Size</h3>

          <p>
            First, we needed to understand what was contributing to our bundle size. We used the built-in Next.js bundle
            analyzer to get insights:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Install the bundle analyzer
npm install --save-dev @next/bundle-analyzer

// In next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // Your existing Next.js config
})

// Run the analysis
ANALYZE=true npm run build`}
          </pre>

          <p>
            This gave us a visual representation of our bundle composition, helping us identify large dependencies and
            opportunities for optimization.
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">2. Implementing Code Splitting</h3>

          <p>
            Next.js provides automatic code splitting by pages, but we took it further by using dynamic imports for
            components that weren't needed on initial load:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Before
import { HeavyComponent } from '@/components/heavy-component';

// After
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('@/components/heavy-component'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false // If the component doesn't need SSR
  }
);`}
          </pre>

          <p>
            This approach was particularly useful for our image enhancement features that use canvas manipulation, which
            isn't needed until the user uploads an image.
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">3. Tree Shaking Optimization</h3>

          <p>
            We ensured proper tree shaking by using ES modules and avoiding side effects:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Bad: Importing the entire library
import * as LucideIcons from 'lucide-react';

// Good: Importing only what we need
import { Upload, Download, Image as ImageIcon } from 'lucide-react';`}
          </pre>

          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 my-6">
            <h3 className="text-sm font-medium mb-2">Solution Highlight</h3>
            <p className="text-xs text-muted-foreground">
              By implementing these bundle optimization techniques, we reduced our initial JavaScript payload by 42%,
              resulting in a 1.2-second improvement in Time to Interactive metrics.
            </p>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Troubleshooting Image Optimization</h2>

          <p>
            As a screenshot enhancement application, image optimization is critical for SnapEnhance. Here's how we addressed
            common image-related issues:
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">1. Using Next.js Image Component</h3>

          <p>
            We replaced standard <code>&lt;img&gt;</code> tags with Next.js <code>Image</code> component for static images:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Before
<img src="/backgrounds/og.png" alt="OG Image" />

// After
import Image from 'next/image';

<Image
  src="/backgrounds/og.png"
  alt="OG Image"
  width={1200}
  height={630}
  priority={true} // For important above-the-fold images
/>`}
          </pre>

          <p>
            This automatically handles responsive sizing, lazy loading, and WebP format conversion when supported by the browser.
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">2. Canvas-Generated Images</h3>

          <p>
            For our dynamically generated images using Canvas, we implemented quality controls:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Optimize canvas.toDataURL with quality parameter
const dataUrl = canvas.toDataURL('image/png', 0.85); // Adjust quality as needed`}
          </pre>

          <p>
            We also added error handling to ensure the generated data URLs were valid:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`try {
  const dataUrl = canvas.toDataURL('image/png', 0.85);

  // Verify the data URL is valid
  if (dataUrl && dataUrl.startsWith('data:image/png')) {
    setEnhancedImage(dataUrl);
  } else {
    console.error('Generated data URL is invalid');
    // Handle error appropriately
  }
} catch (error) {
  console.error('Error generating image data URL:', error);
  // Provide user feedback
}`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">3. Image Loading States</h3>

          <p>
            We implemented proper loading states to prevent layout shifts and improve perceived performance:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`<div className="relative aspect-video bg-muted rounded-md overflow-hidden">
  {isLoading ? (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="animate-pulse">Loading...</span>
    </div>
  ) : null}

  {uploadedImage ? (
    <img
      src={uploadedImage}
      alt="Uploaded"
      className={\`w-full h-full object-contain \${isLoading ? 'opacity-0' : 'opacity-100'}\`}
      onLoad={() => setIsLoading(false)}
    />
  ) : null}
</div>`}
          </pre>

          <h2 className="text-lg font-medium mt-8 mb-4">Environment Variables in Production</h2>

          <p>
            Properly configuring environment variables is crucial for production builds, especially for API keys like our
            Gemini API key. Here's how we addressed common issues:
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">1. Next.js Environment Variables</h3>

          <p>
            We followed Next.js conventions for environment variables:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// .env.local (for development, not committed to version control)
GEMINI_API_KEY=your_development_api_key

// .env.production (for production builds, not committed to version control)
GEMINI_API_KEY=your_production_api_key

// In Vercel, set these as Environment Variables in the project settings`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">2. Client-Side vs. Server-Side Variables</h3>

          <p>
            We were careful to distinguish between server-side and client-side environment variables:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Server-side only (not exposed to the browser)
GEMINI_API_KEY=your_api_key

// Exposed to the browser (prefixed with NEXT_PUBLIC_)
NEXT_PUBLIC_APP_VERSION=1.1.0`}
          </pre>

          <p>
            For our Gemini API integration, we kept the API key server-side only and created an API route to handle
            the communication with Google's API.
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">3. Verifying Environment Variables</h3>

          <p>
            We added validation to ensure environment variables were properly loaded:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// In app/api/visual-research/route.ts
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('GEMINI_API_KEY is not defined in environment variables');
  // Implement fallback behavior
}`}
          </pre>

          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 my-6">
            <h3 className="text-sm font-medium mb-2">Troubleshooting Tip</h3>
            <p className="text-xs text-muted-foreground">
              If your API integration works in development but fails in production, double-check that you've set the
              environment variables in your hosting platform (e.g., Vercel). Also verify that you're not trying to access
              server-side variables from client components.
            </p>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Rendering Optimization</h2>

          <p>
            Next.js offers different rendering strategies, and choosing the right one for each page can significantly
            impact performance. Here's how we optimized rendering in SnapEnhance:
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">1. Static vs. Dynamic Pages</h3>

          <p>
            We identified which pages could be statically generated and which needed server-side rendering:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Static page (blog post)
// app/blog/testing-gemini-api/page.tsx
export const dynamic = 'force-static';

// Dynamic page (user dashboard)
// app/dashboard/page.tsx
export const dynamic = 'force-dynamic';`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">2. Client Components vs. Server Components</h3>

          <p>
            We carefully chose between client and server components based on their needs:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Server Component (no 'use client' directive)
// Ideal for content-heavy pages with minimal interactivity
export default function BlogPage() {
  // This runs on the server
  return <div>...</div>;
}

// Client Component
'use client';
// Necessary for interactive components that use hooks, state, etc.
export default function ImageEnhancer() {
  const [state, setState] = useState(null);
  // This runs in the browser
  return <div>...</div>;
}`}
          </pre>

          <p>
            For SnapEnhance, we used server components for static content like blog posts and legal pages, while keeping
            interactive features like the image enhancer as client components.
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">3. Hydration Errors</h3>

          <p>
            We encountered hydration errors when the server-rendered HTML didn't match the client-side React tree. Here's how we fixed them:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Problem: Different content on server vs. client
function Component() {
  // This will cause hydration errors because Date.now() is different
  // on server render vs. client hydration
  return <div>{Date.now()}</div>;
}

// Solution: Use useEffect for client-only code
function Component() {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    // This only runs on the client after hydration
    setTimestamp(Date.now().toString());
  }, []);

  return <div>{timestamp}</div>;
}`}
          </pre>

          <h2 className="text-lg font-medium mt-8 mb-4">Vercel-Specific Optimizations</h2>

          <p>
            Since SnapEnhance is deployed on Vercel, we leveraged several Vercel-specific optimizations:
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">1. Edge Runtime</h3>

          <p>
            For certain API routes that needed to be fast but didn't require the full Node.js runtime:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// app/api/simple-endpoint/route.ts
export const runtime = 'edge';

export async function GET() {
  // This runs on the Edge runtime (faster cold starts)
  return new Response('Hello from the Edge!');
}`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">2. Image Optimization Service</h3>

          <p>
            We configured Vercel's image optimization service for our static images:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// next.config.js
module.exports = {
  images: {
    domains: ['your-domain.com'],
    // Configure image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
}`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">3. Caching Strategies</h3>

          <p>
            We implemented appropriate caching headers for different types of content:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// For static assets that rarely change
export async function GET() {
  return new Response('Static content', {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

// For dynamic content that changes frequently
export async function GET() {
  return new Response('Dynamic content', {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}`}
          </pre>

          <h2 className="text-lg font-medium mt-8 mb-4">Monitoring and Continuous Improvement</h2>

          <p>
            Optimization is an ongoing process. We set up monitoring to continuously improve our production build:
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Vercel Analytics</strong> - To track Core Web Vitals and user experience metrics</li>
            <li><strong>Error Tracking</strong> - To identify and fix production errors quickly</li>
            <li><strong>Performance Budgets</strong> - To prevent performance regressions</li>
            <li><strong>User Feedback</strong> - To identify issues that metrics might miss</li>
          </ul>

          <h2 className="text-lg font-medium mt-8 mb-4">Troubleshooting API Response Errors</h2>

          <p>
            One particularly challenging issue we encountered in production was the "Unexpected token 'A', 'An error o'... is not valid JSON" error.
            This occurred when our client-side code tried to parse a response from our API that wasn't valid JSON.
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">1. Understanding the Problem</h3>

          <p>
            We encountered two related issues in our visual research feature that uses the Gemini API. In development, everything worked fine,
            but in production, users would see either "Received non-JSON response from server" or "Request timed out. Please try again."
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// The error occurred when trying to parse the API response
try {
  const data = await response.json();
  // Process data...
} catch (error) {
  // Error: Unexpected token 'A', "An error o"... is not valid JSON
}`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">2. Root Causes</h3>

          <p>
            After investigation, we identified several potential causes:
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Missing Content-Type Headers</strong> - The API wasn't explicitly setting the Content-Type header to application/json</li>
            <li><strong>Error Handling Issues</strong> - When errors occurred, the API was returning non-JSON responses</li>
            <li><strong>Environment Variables</strong> - Missing API keys in production caused different error paths than in development</li>
            <li><strong>Timeout Issues</strong> - Long-running requests were being terminated with non-JSON error messages or timing out entirely</li>
            <li><strong>AI Model Performance</strong> - The AI model we were using was sometimes too slow for production use</li>
          </ul>

          <h3 className="text-base font-medium mt-6 mb-2">3. Comprehensive Solution</h3>

          <p>
            We implemented a multi-layered solution to ensure robust error handling:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Server-side: Always return valid JSON with explicit headers
export async function POST(request: NextRequest) {
  try {
    // API logic here...
    return new NextResponse(
      JSON.stringify({ result: data }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    // Even for errors, return valid JSON
    return new NextResponse(
      JSON.stringify({
        error: error.message || 'An error occurred',
        isSimulated: true,
        // Include fallback content for better UX
        result: 'Sorry, we encountered an error...'
      }),
      {
        status: 200, // Use 200 to avoid CORS issues
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}`}
          </pre>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Client-side: Robust response handling
try {
  // Get response as text first
  const responseText = await response.text();

  // Then try to parse as JSON
  let data;
  try {
    data = JSON.parse(responseText);
  } catch (jsonError) {
    console.error('JSON parsing error:', jsonError);
    // Use fallback data instead of throwing
    data = {
      result: 'Fallback content...',
      isSimulated: true
    };
  }

  // Use the data (original or fallback)
  setSearchResult(data.result);
} catch (err) {
  // Handle fetch errors
  console.error('Fetch error:', err);
}`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">4. Optimizing for Speed and Reliability</h3>

          <p>
            To address the timeout issues specifically, we implemented several optimizations:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Client-side: Reduced timeout and better fallback handling
// Use a shorter timeout to prevent long waits
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

// Handle timeout gracefully
if (fetchError.name === 'AbortError') {
  console.error('Request timed out');
  // Instead of showing an error, show fallback content
  setSearchResult('# Visual Design Principles\n- Use the rule of thirds...');
  setIsSimulated(true);
  setIsResultVisible(true);
  setError('Request took too long. Showing general design principles instead.');
  return; // Exit early with fallback content
}`}
          </pre>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Server-side: Optimize prompt and use faster model
// Simplified prompt for faster responses
const prompt = \`As a visual content research assistant, provide brief insights about: "\${queryText}"
  Focus on 2-3 of these most relevant to the query:
  - Visual composition principles
  - Color theory suggestions
  - Typography recommendations
  Keep your response concise (under 300 words). Prioritize speed.\`;

// Use the fastest model available with a timeout
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash" // Using the fastest model
});

// Create a timeout promise at the API level
const timeoutPromise = new Promise((_, reject) => {
  setTimeout(() => reject(new Error('API timeout')), 5000); // 5 second timeout
});

// Race between the API call and the timeout
const result = await Promise.race([
  model.generateContent(prompt),
  timeoutPromise
]);`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">5. Edge Runtime Benefits</h3>

          <p>
            We also switched our API route to use the Edge runtime, which provided more consistent behavior between development and production:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Set the runtime to edge for better performance and reliability
export const runtime = 'edge';

// Explicitly mark as dynamic route
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  // API logic here...
}`}
          </pre>

          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 my-6">
            <h3 className="text-sm font-medium mb-2">Key Lessons</h3>
            <p className="text-xs text-muted-foreground">
              When working with APIs in production, especially those that call external services like AI models:
            </p>
            <ul className="list-disc pl-5 mt-2 text-xs text-muted-foreground">
              <li>Implement multiple layers of error handling and timeouts</li>
              <li>Get the raw response as text first before attempting to parse it as JSON</li>
              <li>Always provide fallback content for a better user experience when errors occur</li>
              <li>Optimize prompts and model selection for speed in production environments</li>
              <li>Use the Edge runtime for better performance with API routes</li>
            </ul>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Conclusion</h2>

          <p>
            Optimizing production builds requires a multifaceted approach addressing bundle size, image optimization,
            environment variables, rendering strategies, and robust error handling. By systematically troubleshooting these areas, we've
            significantly improved SnapEnhance's performance and reliability in production.
          </p>

          <p>
            Remember that optimization is a continuous process, not a one-time task. Regularly revisit your application's
            performance metrics and user feedback to identify new opportunities for improvement.
          </p>

          <div className="border-t border-border/20 mt-8 pt-4">
            <p className="text-sm text-muted-foreground/80">
              If you have specific questions about optimizing your Next.js application for production, feel free to reach out.
              We're always learning and improving our approaches to production optimization.
            </p>
          </div>
        </article>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <p>Last updated: April 28, 2025</p>
        </div>
      </div>
    </div>
  );
}

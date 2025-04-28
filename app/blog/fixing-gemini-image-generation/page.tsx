'use client';

import Link from 'next/link';

export default function FixingGeminiImageGenerationPage() {
  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Solving Gemini API Image Generation Challenges</h1>

        <article className="prose prose-sm max-w-none">
          <p className="text-muted-foreground mb-4">
            Published: April 20, 2025 | Author: SnapEnhance Team
          </p>

          <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border/50">
            <h3 className="text-base font-medium mb-2">Key Takeaways</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>We successfully implemented image generation using Google's Gemini API</li>
              <li>Direct REST API calls proved more reliable than the JavaScript SDK for experimental features</li>
              <li>Proper request formatting is critical for successful image generation</li>
              <li>Testing different approaches in isolation helped identify the working solution</li>
            </ul>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">The Challenge: Empty Responses from Gemini API</h2>

          <p>
            As part of enhancing SnapEnhance's visual content capabilities, we integrated Google's Gemini API for AI-powered
            image generation. However, we encountered a significant challenge: despite having a valid API key and access to
            the <code>gemini-2.0-flash-exp-image-generation</code> model, our requests were returning empty responses with no image data.
          </p>

          <p>
            The API logs showed responses like this:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`{
  "candidates": [
    {
      "index": 0,
      "finishReason": "STOP",
      "content": {
        "role": "model",
        "parts": [
          {
            "text": ""
          }
        ]
      }
    }
  ],
  "usageMetadata": {
    "promptTokenCount": 9,
    "totalTokenCount": 9,
    "promptTokensDetails": [
      {
        "modality": "TEXT",
        "tokenCount": 9
      }
    ]
  }
}`}
          </pre>

          <p>
            This was particularly puzzling because our test scripts confirmed that the model was accessible and should be capable
            of generating images. After extensive testing and debugging, we discovered the solution.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">The Solution: Direct API Calls</h2>

          <p>
            The key insight was that the Google Generative AI JavaScript SDK wasn't handling image generation correctly for
            experimental models. By switching to direct REST API calls, we gained more control over the request format and
            successfully received image data.
          </p>

          <h3 className="text-base font-medium mt-6 mb-2">1. Direct REST API Implementation</h3>

          <p>
            Here's how we implemented the direct API call approach:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Use direct REST API call instead of the SDK
const model = 'gemini-2.0-flash-exp-image-generation';
const enhancedPrompt = \`Generate a detailed image of \${prompt}\`;

// Create the request payload
const requestPayload = {
  contents: [
    {
      role: 'user',
      parts: [
        {
          text: enhancedPrompt
        }
      ]
    }
  ],
  generationConfig: {
    responseModalities: ['image', 'text'],
    responseMimeType: 'text/plain'
  }
};

// Make a direct fetch request to the Gemini API
const endpoint = \`https://generativelanguage.googleapis.com/v1beta/models/\${model}:generateContent?key=\${apiKey}\`;

const apiResponse = await fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestPayload)
});

// Parse the response
const result = await apiResponse.json();`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">2. Simplified Prompt Format</h3>

          <p>
            We found that simpler prompts worked better for image generation. Instead of complex instructions, we used
            straightforward prompts like:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`"Generate a detailed image of a new building"`}
          </pre>

          <h3 className="text-base font-medium mt-6 mb-2">3. Correct Response Handling</h3>

          <p>
            With the direct API approach, we received proper responses containing image data:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "inlineData": {
              "mimeType": "image/png",
              "data": "iVBORw0KGgoAAAANSUhEUgAABAAAAAKoCAIAAABm4BptAAAAiXpUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAAiZTYwxDgIxDAT7... [truncated]"
            }
          }
        ],
        "role": "model"
      },
      "finishReason": "STOP",
      "index": 0
    }
  ]
}`}
          </pre>

          <p>
            We then extracted the image data and returned it to the client:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Process the response
if (result.candidates && result.candidates.length > 0) {
  const candidate = result.candidates[0];
  if (candidate.content && candidate.content.parts) {
    // Look for image data in the parts
    for (const part of candidate.content.parts) {
      if (part.inlineData) {
        mimeType = part.inlineData.mimeType || 'image/png';
        imageBuffer = Buffer.from(part.inlineData.data || '', 'base64');
        console.log(\`Received image data with mime type: \${mimeType}\`);
        break; // We found our image
      }
    }
  }
}`}
          </pre>

          <h2 className="text-lg font-medium mt-8 mb-4">Fallback Mechanism</h2>

          <p>
            To ensure a robust user experience, we implemented a fallback mechanism that tries a slightly different prompt
            if the first attempt doesn't return image data:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// Try with a different prompt if the first one didn't work
if (!imageBuffer) {
  console.log("First attempt didn't return image data, trying with a different prompt...");

  // Create a more direct prompt for image generation
  const fallbackPrompt = \`Create a detailed image of \${prompt}\`;

  // Create the request payload for the fallback attempt
  const fallbackRequestPayload = {
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: fallbackPrompt
          }
        ]
      }
    ],
    generationConfig: {
      responseModalities: ['image', 'text'],
      responseMimeType: 'text/plain'
    }
  };

  // Try again with a different prompt
  const fallbackResponse = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fallbackRequestPayload)
  });

  // Process the fallback response...
}`}
          </pre>

          <p>
            If both attempts fail, we provide a placeholder image with an informative error message:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`// If we still don't have an image, return a placeholder
if (!imageBuffer) {
  const fallbackMsg = "No image data received from Gemini API. Check your API quota, prompt, or try again later.";
  console.warn(fallbackMsg);

  const placeholderBuffer = await generatePlaceholderImage(fallbackMsg, true);
  return new NextResponse(placeholderBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": "inline; filename=delta_generated_error.png",
      "X-Error": fallbackMsg
    }
  });
}`}
          </pre>

          <h2 className="text-lg font-medium mt-8 mb-4">Key Lessons Learned</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">SDK Limitations</h3>
              <p className="text-sm text-muted-foreground">
                The JavaScript SDK might not fully support all experimental features like image generation. For cutting-edge
                features, direct API calls often provide more flexibility and control.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Request Format Matters</h3>
              <p className="text-sm text-muted-foreground">
                The exact format of the request payload is critical for experimental features. Even small deviations from
                the expected format can result in failed requests or empty responses.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Testing in Isolation</h3>
              <p className="text-sm text-muted-foreground">
                Testing different configurations in isolation helps identify working approaches that can then be integrated
                into the main application. Our test scripts were invaluable in finding the solution.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">Robust Error Handling</h3>
              <p className="text-sm text-muted-foreground">
                Always implement fallback mechanisms and graceful degradation for AI features. This ensures a good user
                experience even when the AI service encounters issues.
              </p>
            </div>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Practical Applications</h2>

          <p>
            With image generation working correctly, SnapEnhance can now offer enhanced visual content capabilities:
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Custom Backgrounds:</strong> Generate unique backgrounds for screenshots based on content</li>
            <li><strong>Visual Explanations:</strong> Create explanatory visuals to accompany technical screenshots</li>
            <li><strong>Content Enhancement:</strong> Add visual elements to make screenshots more engaging</li>
            <li><strong>Brand Consistency:</strong> Generate visuals that match your brand's style and color scheme</li>
          </ul>

          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 my-6">
            <h3 className="text-sm font-medium mb-2">Implementation Note</h3>
            <p className="text-xs text-muted-foreground">
              When implementing AI features, always be prepared to adapt your approach as the technology evolves.
              Experimental models and features may change without notice, requiring flexible implementation strategies.
            </p>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Conclusion</h2>

          <p>
            By switching from the JavaScript SDK to direct REST API calls and carefully formatting our requests, we successfully
            implemented image generation with Google's Gemini API. This enhancement significantly expands SnapEnhance's capabilities,
            allowing users to generate custom visuals to complement their screenshots.
          </p>

          <p>
            The journey to implement this feature taught us valuable lessons about working with experimental AI features and
            the importance of thorough testing and fallback mechanisms. We hope sharing our experience helps others facing
            similar challenges with AI integration.
          </p>

          <div className="border-t border-border/20 mt-8 pt-4">
            <p className="text-sm text-muted-foreground/80">
              If you're interested in learning more about our AI integration or have questions about implementing Gemini API
              in your own projects, feel free to reach out to us. We're always happy to share our experiences and learn from
              the community.
            </p>
          </div>
        </article>

        <div className="mt-12 pt-4 border-t border-border/20 text-xs text-muted-foreground/60 text-center">
          <p>Last updated: April 20, 2025</p>
        </div>
      </div>
    </div>
  );
}

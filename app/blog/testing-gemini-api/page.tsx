'use client';

import Link from 'next/link';

export default function TestingGeminiAPIBlogPage() {
  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h1 className="text-xl font-medium mb-6">Testing Google Gemini API Integration</h1>

        <article className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-4">
            Published: April 20, 2025 | Author: SnapEnhance Team
          </p>

          <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border/50">
            <h3 className="text-base font-medium mb-2">Key Takeaways</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>We've integrated Google's Gemini API to power our visual research feature</li>
              <li>Shell scripts can help test API connectivity and model availability</li>
              <li>Multiple Gemini models are supported: gemini-1.5-pro, gemini-1.5-flash, and gemini-2.5-flash-preview-04-17</li>
              <li>Proper error handling ensures a smooth user experience even when API issues occur</li>
            </ul>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Integrating AI into SnapEnhance</h2>

          <p>
            As part of our commitment to providing the best screenshot enhancement experience, we've integrated Google's 
            powerful Gemini API into SnapEnhance. This integration powers our visual research feature, which helps users 
            get design insights and recommendations for their visual content.
          </p>

          <p>
            However, working with third-party APIs can sometimes be challenging. API endpoints might change, models can be 
            deprecated, and service disruptions can occur. To ensure a smooth experience for our users, we've developed a 
            set of shell scripts that help us test and troubleshoot our Gemini API integration.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">The Challenge of API Testing</h2>

          <p>
            When working with AI APIs like Google's Gemini, several challenges can arise:
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Model availability</strong> - Not all API keys have access to all models</li>
            <li><strong>API versioning</strong> - Endpoints and parameters can change between versions</li>
            <li><strong>Rate limiting</strong> - APIs often have usage limits that need to be respected</li>
            <li><strong>Error handling</strong> - Different error conditions need to be handled gracefully</li>
            <li><strong>Authentication</strong> - API keys need to be validated and secured</li>
          </ul>

          <p>
            To address these challenges, we created a set of shell scripts that allow us to quickly test our API integration 
            and identify any issues.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">Our Testing Scripts</h2>

          <p>
            We developed three main scripts to help with API testing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">check-dependencies.sh</h3>
              <p className="text-xs text-muted-foreground">
                This script checks if the necessary tools (like <code>jq</code> for JSON parsing) are installed on the system. 
                If they're not, it guides the user through the installation process.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-md border border-border/30">
              <h3 className="text-sm font-medium mb-2">test-gemini-api.sh</h3>
              <p className="text-xs text-muted-foreground">
                This script tests a specific Gemini model with the provided API key. It sends a simple request and displays 
                the response, helping to verify that the API key is working correctly.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 p-4 rounded-md border border-border/30 mb-6">
            <h3 className="text-sm font-medium mb-2">test-gemini-models.sh</h3>
            <p className="text-xs text-muted-foreground">
              This script tests multiple Gemini models to see which ones are available with the provided API key. It provides 
              a summary of working models and instructions for updating the application code.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              We specifically test three models: <code>gemini-1.5-pro</code>, <code>gemini-1.5-flash</code>, and <code>gemini-2.5-flash-preview-04-17</code>.
            </p>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">The Script Code</h2>

          <p>
            Here's a simplified version of our <code>test-gemini-models.sh</code> script:
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`#!/bin/bash

# Check if API key is provided
if [ -z "$1" ]; then
  echo "Usage: ./test-gemini-models.sh YOUR_GEMINI_API_KEY"
  exit 1
fi

API_KEY=$1

# List of models to test
MODELS=(
  "gemini-1.5-pro"
  "gemini-1.5-flash"
  "gemini-2.5-flash-preview-04-17"
)

# Array to store working models
WORKING_MODELS=()

echo "Testing Gemini API with multiple models"
echo "========================================"

for MODEL in "\${MODELS[@]}"; do
  echo "Testing model: \${MODEL}"
  ENDPOINT="https://generativelanguage.googleapis.com/v1beta/models/\${MODEL}:generateContent?key=\${API_KEY}"
  
  RESPONSE=$(curl -s -X POST "\${ENDPOINT}" \\
    -H "Content-Type: application/json" \\
    -d '{"contents":[{"parts":[{"text":"Hello, this is a test message."}]}]}')
  
  # Check if the response contains an error
  if echo "$RESPONSE" | grep -q "error"; then
    echo "❌ Model \${MODEL} is not available"
    ERROR_CODE=$(echo "$RESPONSE" | jq -r '.error.code // "Unknown"')
    ERROR_MESSAGE=$(echo "$RESPONSE" | jq -r '.error.message // "Unknown error"')
    echo "   Code: $ERROR_CODE"
    echo "   Message: $ERROR_MESSAGE"
  else
    echo "✅ Model \${MODEL} is working!"
    # Add to working models array
    WORKING_MODELS+=("\${MODEL}")
  fi
  
  echo "----------------------------------------"
done

# Display summary of working models
echo "Summary of working models:"
if [ \${#WORKING_MODELS[@]} -eq 0 ]; then
  echo "❌ No models are working with your API key."
else
  echo "The following models are available with your API key:"
  for MODEL in "\${WORKING_MODELS[@]}"; do
    echo "  ✅ $MODEL"
  done
  
  echo ""
  echo "To update your application, edit app/api/visual-research/route.ts:"
  echo "const model = genAI.getGenerativeModel({ model: \"MODEL_NAME_HERE\" });"
fi`}
          </pre>

          <h2 className="text-lg font-medium mt-8 mb-4">Running the Tests</h2>

          <p>
            To test our Gemini API integration, we follow these steps:
          </p>

          <ol className="list-decimal pl-5 space-y-2 mt-2">
            <li>
              <strong>Check dependencies</strong>: First, we run <code>./check-dependencies.sh</code> to ensure all necessary tools are installed.
            </li>
            <li>
              <strong>Test models</strong>: Next, we run <code>./test-gemini-models.sh YOUR_GEMINI_API_KEY</code> to see which models are available.
            </li>
            <li>
              <strong>Update code</strong>: Based on the test results, we update our application code to use one of the working models.
            </li>
          </ol>

          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 my-6">
            <h3 className="text-sm font-medium mb-2">Security Note</h3>
            <p className="text-xs text-muted-foreground">
              Always keep your API keys secure. Never commit them to version control or share them publicly. 
              We store our API keys in environment variables that are not included in our repository.
            </p>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-4">Fallback Mechanism</h2>

          <p>
            Even with thorough testing, API calls can sometimes fail in production. To ensure a smooth user experience, 
            we've implemented a fallback mechanism in our visual research feature. If the Gemini API call fails for any reason, 
            we provide a simulated response based on the user's query.
          </p>

          <p>
            This approach ensures that users always get some value from the feature, even if there are temporary issues with 
            the API. The simulated responses are designed to provide useful information related to the user's query, though 
            they're not as personalized or comprehensive as the AI-generated responses.
          </p>

          <h2 className="text-lg font-medium mt-8 mb-4">Lessons Learned</h2>

          <p>
            Through our experience integrating and testing the Gemini API, we've learned several valuable lessons:
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Test multiple models</strong> - Different API keys may have access to different models, so it's important to test multiple options.</li>
            <li><strong>Implement fallbacks</strong> - Always have a plan B for when API calls fail.</li>
            <li><strong>Monitor usage</strong> - Keep track of API usage to avoid hitting rate limits.</li>
            <li><strong>Stay updated</strong> - AI models and APIs evolve quickly, so stay informed about changes and new capabilities.</li>
            <li><strong>Automate testing</strong> - Scripts like ours make it easy to quickly test API connectivity and troubleshoot issues.</li>
          </ul>

          <h2 className="text-lg font-medium mt-8 mb-4">Conclusion</h2>

          <p>
            Integrating AI capabilities into applications like SnapEnhance can greatly enhance the user experience, but it also 
            comes with challenges. By creating robust testing scripts and implementing proper error handling, we've been able to 
            provide a reliable visual research feature powered by Google's Gemini API.
          </p>

          <p>
            For more information about how we use AI in SnapEnhance, check out our <Link href="/ai-ml" className="text-primary hover:underline">AI/ML Information</Link> page.
          </p>

          <div className="border-t border-border/20 mt-8 pt-4">
            <p className="text-sm text-muted-foreground/80">
              If you're interested in learning more about API testing or have questions about our implementation, feel free to reach out to us.
              We're always happy to share our experiences and learn from others in the community.
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

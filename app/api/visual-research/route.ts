import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Get the API key from environment variables
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('GEMINI_API_KEY is not defined in environment variables');
}

// Function to generate a simulated response as fallback
function getSimulatedResponse(query: string): string {
  const queryLower = query.toLowerCase();

  // Common visual design principles to include in responses
  const designPrinciples = [
    '# Visual Composition',
    '- Use the rule of thirds to create balanced compositions',
    '- Create visual hierarchy to guide the viewer\'s eye',
    '- Maintain white space to prevent visual clutter',
    '',
    '# Color Theory',
    '- Consider complementary colors for contrast',
    '- Use analogous colors for harmony',
    '- Limit your palette to 3-5 colors for cohesion',
    '',
    '# Typography',
    '- Pair a serif with a sans-serif font for contrast',
    '- Maintain consistent line spacing (1.5x font size)',
    '- Use no more than 2-3 font families',
  ];

  // Add query-specific content
  if (queryLower.includes('logo') || queryLower.includes('brand')) {
    return `# Brand Design Research

## Logo Design Principles
- Keep it simple and memorable
- Ensure it works in black and white
- Make it scalable for different applications
- Consider negative space opportunities

## Color Psychology
- Blue conveys trust and professionalism
- Green suggests growth and sustainability
- Red creates urgency and passion
- Purple communicates luxury and creativity

## Typography Considerations
- Sans-serif fonts appear modern and clean
- Serif fonts convey tradition and reliability
- Custom letterforms can create unique brand identity
- Consider weight variations for versatility

## Application Guidelines
- Maintain consistent spacing around the logo (logo clearspace)
- Define minimum size requirements for legibility
- Provide guidelines for placement on different backgrounds
- Include both vertical and horizontal logo orientations if applicable`;
  } else if (queryLower.includes('social') || queryLower.includes('instagram') || queryLower.includes('facebook')) {
    return `# Social Media Visual Strategy

## Platform-Specific Considerations
- Instagram: Focus on high-quality imagery with consistent aesthetic
- Facebook: More text-friendly, but still visually driven
- Twitter: Clear, simple visuals that work at smaller sizes
- LinkedIn: Professional polish with branded elements

## Content Types
- Carousel posts for multi-part stories or tutorials
- Short-form video for engagement (15-30 seconds optimal)
- Infographics for data visualization
- Quote graphics for shareable wisdom

## Visual Consistency
- Develop a signature filter or editing style
- Use consistent fonts across all platforms
- Create templates for recurring content types
- Maintain color palette alignment with brand guidelines

## Engagement Optimization
- Use bright, contrasting colors to capture attention
- Include human faces to increase emotional connection
- Incorporate movement or directional cues
- Design with mobile-first mindset (most social browsing happens on mobile)`;
  } else {
    // Default response with general visual design principles
    return designPrinciples.join('\n');
  }
}

// Set the runtime to edge for better performance and reliability
// Note: This will show a warning during build: "Using edge runtime on a page currently disables static generation for that page"
// This is expected and appropriate for API routes that need to run on-demand
export const runtime = 'edge';

// Explicitly mark as dynamic route
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  // Always use a try-catch to ensure we return a valid JSON response
  try {
    // First try to parse the request body as JSON
    let queryText = '';
    try {
      const body = await request.json();
      queryText = body.query || '';
    } catch (parseError) {
      console.error('Error parsing request JSON:', parseError);
      return new NextResponse(
        JSON.stringify({ error: 'Invalid request format', isSimulated: true }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    if (!queryText || queryText.trim() === '') {
      return new NextResponse(
        JSON.stringify({ error: 'Query is required', isSimulated: true }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // If API key is not available, return a simulated response
    if (!apiKey) {
      console.log('API key not available, using simulated response');
      return new NextResponse(
        JSON.stringify({
          result: getSimulatedResponse(queryText),
          isSimulated: true
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    try {
      // Create the prompt with visual content research context - optimized for faster responses
      const prompt = `As a visual content research assistant, provide brief insights about the following query related to visual design: "${queryText}"

      Focus on 2-3 of these most relevant to the query:
      - Visual composition principles
      - Color theory suggestions
      - Typography recommendations
      - Layout considerations
      - Mood impact
      - Target audience
      - Current trends

      Keep your response concise (under 300 words) with bullet points. Prioritize speed over comprehensiveness.`;

      // Initialize the Generative AI model with the correct model name
      const genAI = new GoogleGenerativeAI(apiKey);

      // Use the fastest model available with a timeout
      try {
        // Start with the fastest model
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash" // Using the fastest model instead of preview
        });

        // Create a timeout promise
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('API timeout')), 5000); // 5 second timeout
        });

        // Race between the API call and the timeout
        const result = await Promise.race([
          model.generateContent(prompt),
          timeoutPromise
        ]) as any;

        const response = result.response;
        const text = response.text();

        return new NextResponse(
          JSON.stringify({
            result: text,
            isSimulated: false
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      } catch (modelError) {
        console.error('Error or timeout with model:', modelError);

        // If we get here, either the model failed or timed out
        // Return a simulated response immediately instead of trying another model
        return new NextResponse(
          JSON.stringify({
            result: getSimulatedResponse(queryText),
            isSimulated: true,
            error: modelError instanceof Error ? modelError.message : 'Model error or timeout'
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    } catch (error: any) {
      console.error('Error calling Gemini API:', error);

      // Log detailed error information
      if (error.status) {
        console.error(`Status: ${error.status}, Status Text: ${error.statusText}`);
      }
      if (error.errorDetails) {
        console.error('Error details:', error.errorDetails);
      }

      // Fallback to simulated response if API call fails
      return new NextResponse(
        JSON.stringify({
          result: getSimulatedResponse(queryText),
          isSimulated: true
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  } catch (error: any) {
    console.error('Error in visual research API:', error);
    // Ensure we always return a valid JSON response
    return new NextResponse(
      JSON.stringify({
        error: error.message || 'An error occurred during visual research',
        isSimulated: true,
        result: 'Sorry, we encountered an error processing your request. Here are some general visual design principles:\n\n# Visual Design Principles\n- Use the rule of thirds for balanced compositions\n- Create visual hierarchy to guide attention\n- Maintain consistent color schemes\n- Use typography to establish tone and readability\n- Ensure adequate white space for visual breathing room'
      }),
      {
        status: 200, // Return 200 even for errors to avoid CORS issues
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

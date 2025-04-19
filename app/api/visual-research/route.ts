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
export const runtime = 'edge';

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
      // Create the prompt with visual content research context
      const prompt = `As a visual content research assistant, provide insights, ideas, and recommendations for the following query related to visual design, imagery, or content creation: "${queryText}"

      Focus on:
      - Visual composition principles
      - Color theory and palette suggestions
      - Typography recommendations
      - Layout and spacing considerations
      - Mood and emotional impact
      - Target audience considerations
      - Current design trends

      Format your response in a clear, concise manner with bullet points where appropriate.`;

      // Initialize the Generative AI model with the correct model name
      const genAI = new GoogleGenerativeAI(apiKey);

      // Use a more reliable model or fallback to a simulated response
      try {
        // Try with the specified model
        const model = genAI.getGenerativeModel({
          model: "gemini-2.5-flash-preview-04-17"
        });

        // Generate content
        const result = await model.generateContent(prompt);
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
        console.error('Error with primary model, trying fallback:', modelError);

        // Try with a fallback model
        try {
          const fallbackModel = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
          });

          const result = await fallbackModel.generateContent(prompt);
          const response = result.response;
          const text = response.text();

          return new NextResponse(
            JSON.stringify({
              result: text,
              isSimulated: false,
              usedFallbackModel: true
            }),
            {
              status: 200,
              headers: { 'Content-Type': 'application/json' }
            }
          );
        } catch (fallbackError) {
          console.error('Fallback model also failed:', fallbackError);
          throw fallbackError; // Let the outer catch handle it
        }
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

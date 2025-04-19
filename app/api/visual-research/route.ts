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

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query || query.trim() === '') {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    // If API key is not available, return a simulated response
    if (!apiKey) {
      return NextResponse.json({ result: getSimulatedResponse(query) });
    }

    try {
      // Create the prompt with visual content research context
      const prompt = `As a visual content research assistant, provide insights, ideas, and recommendations for the following query related to visual design, imagery, or content creation: "${query}"

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
      // Use the correct model name for the Gemini API
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash-preview-04-17"
        // No need to explicitly set API version as it's handled by the SDK
      });

      // Generate content
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return NextResponse.json({
        result: text,
        isSimulated: false
      });
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
      return NextResponse.json({
        result: getSimulatedResponse(query),
        // Include a note that this is a simulated response
        isSimulated: true
      });
    }
  } catch (error: any) {
    console.error('Error in visual research API:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred during visual research' },
      { status: 500 }
    );
  }
}

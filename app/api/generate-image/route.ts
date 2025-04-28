/*
 * /api/generate-image
 * Next.js API route (App Router, 13+) for handling image generation prompts.
 * Expects: { prompt: string } JSON in POST body.
 * Returns: Image (as octet-stream or correct MIME type), or JSON error.
 */

import { NextRequest, NextResponse } from 'next/server';
import mime from 'mime';

export const runtime = 'nodejs';
export const maxDuration = 60; // Set max duration to 60 seconds for image generation

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const prompt = data?.prompt?.trim();
    if (!prompt) {
      return NextResponse.json({ error: 'No prompt provided' }, { status: 400 });
    }

    console.log("Received image generation prompt:", prompt);

    // Helper to create a text placeholder image for errors or when API is unavailable
    const generatePlaceholderImage = async (text: string, isError = false) => {
      // Create a basic placeholder with text
      const encodedText = encodeURIComponent(text.substring(0, 50) + (text.length > 50 ? '...' : ''));
      const bgColor = isError ? 'ff6b6b' : '3b82f6';
      const placeholderUrl = `https://placehold.co/800x600/${bgColor}/ffffff?text=${encodedText}`;

      console.log("Using basic placeholder:", placeholderUrl);

      const placeholderResponse = await fetch(placeholderUrl);
      const placeholderBlob = await placeholderResponse.blob();

      return Buffer.from(await placeholderBlob.arrayBuffer());
    };

    try {
      // Check if we have the GEMINI_API_KEY
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.warn('GEMINI_API_KEY not found in environment variables');

        // Return a placeholder image
        const placeholderBuffer = await generatePlaceholderImage(prompt);

        return new NextResponse(placeholderBuffer, {
          status: 200,
          headers: {
            "Content-Type": "image/png",
            "Content-Disposition": `inline; filename=delta_generated_image.png`
          }
        });
      }

      console.log("Using Gemini API for image generation with prompt:", prompt);

      // Use direct REST API call instead of the SDK
      // This matches exactly what worked in our test script
      const model = 'gemini-2.0-flash-exp-image-generation';
      const enhancedPrompt = `Generate a detailed image of ${prompt}`;

      try {
        console.log("Sending direct request to Gemini API...");

        // Create the request payload exactly as in our test script
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
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        // Log the endpoint without exposing the API key
        console.log("Using endpoint:", endpoint.split("?key=")[0]);
        console.log("With prompt:", enhancedPrompt);

        const apiResponse = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestPayload)
        });

        if (!apiResponse.ok) {
          const errorText = await apiResponse.text();
          throw new Error(`Gemini API returned ${apiResponse.status}: ${errorText}`);
        }

        // Parse the response
        const result = await apiResponse.json();
        console.log("Raw Gemini API response:", JSON.stringify(result, (key, value) => {
          // Redact the actual image data to keep logs manageable
          if (key === 'data' && typeof value === 'string' && value.length > 100) {
            return value.substring(0, 100) + '... [truncated]';
          }
          return value;
        }, 2));

        // Process the response
        let imageBuffer: Buffer | null = null;
        let mimeType = 'image/png'; // Default mime type

        try {
          // We already have the result from the direct API call

          // Log full raw Gemini API response for debugging (with sensitive data redacted)
          console.log("Raw Gemini API response:", JSON.stringify(result, (key, value) => {
            // Redact the actual image data to keep logs manageable
            if (key === 'data' && typeof value === 'string' && value.length > 100) {
              return value.substring(0, 100) + '... [truncated]';
            }
            return value;
          }, 2));

          // Process the response
          if (result.candidates && result.candidates.length > 0) {
            const candidate = result.candidates[0];
            if (candidate.content && candidate.content.parts) {
              // Look for image data in the parts
              for (const part of candidate.content.parts) {
                if (part.inlineData) {
                  mimeType = part.inlineData.mimeType || 'image/png';
                  imageBuffer = Buffer.from(part.inlineData.data || '', 'base64');
                  console.log(`Received image data with mime type: ${mimeType}`);
                  break; // We found our image
                }
              }

              // If no image found, collect any text for additional diagnostics
              if (!imageBuffer) {
                for (const part of candidate.content.parts) {
                  if (part.text) {
                    console.warn("Gemini API returned text instead of image:", part.text);
                  }
                }
              }
            }
          }
        } catch (streamError) {
          console.error("Error processing stream:", streamError);
          throw streamError; // Re-throw to be caught by the outer try/catch
        }

        // If we successfully got an image, return it
        if (imageBuffer) {
          const fileExtension = mime.getExtension(mimeType) || 'png';

          return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
              "Content-Type": mimeType,
              "Content-Disposition": `inline; filename=delta_generated_image.${fileExtension}`
            }
          });
        } else {
          // Try with a different prompt if the first one didn't work
          console.log("First attempt didn't return image data, trying with a different prompt...");

          try {
            // Create a more direct prompt for image generation
            // Using a slightly different wording but same format
            const fallbackPrompt = `Create a detailed image of ${prompt}`;

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

            // Make a direct fetch request to the Gemini API
            console.log("Trying fallback prompt:", fallbackPrompt);

            const fallbackResponse = await fetch(endpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(fallbackRequestPayload)
            });

            if (!fallbackResponse.ok) {
              const errorText = await fallbackResponse.text();
              throw new Error(`Gemini API returned ${fallbackResponse.status}: ${errorText}`);
            }

            // Parse the response
            const fallbackResult = await fallbackResponse.json();

            // Process the fallback response
            if (fallbackResult.candidates && fallbackResult.candidates.length > 0) {
              const candidate = fallbackResult.candidates[0];
              if (candidate.content && candidate.content.parts) {
                // Look for image data in the parts
                for (const part of candidate.content.parts) {
                  if (part.inlineData) {
                    mimeType = part.inlineData.mimeType || 'image/png';
                    imageBuffer = Buffer.from(part.inlineData.data || '', 'base64');
                    console.log(`Received image data from fallback attempt with mime type: ${mimeType}`);

                    // Return the image from the fallback attempt
                    const fileExtension = mime.getExtension(mimeType) || 'png';
                    return new NextResponse(imageBuffer, {
                      status: 200,
                      headers: {
                        "Content-Type": mimeType,
                        "Content-Disposition": `inline; filename=delta_generated_image.${fileExtension}`
                      }
                    });
                  }
                }
              }
            }
          } catch (fallbackError) {
            console.error("Error with fallback attempt:", fallbackError);
          }

          // If we still don't have an image, return a placeholder
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
        }
      } catch (geminiApiError) {
        // If there was an error with the Gemini API call, log it
        console.error("Error calling Gemini API:", geminiApiError);

        // Create an error message
        const errorMessage = "Failed to generate image with Gemini API: " +
          (geminiApiError instanceof Error ? geminiApiError.message : String(geminiApiError));

        // Return an error placeholder image instead of JSON for better UX
        const placeholderBuffer = await generatePlaceholderImage(errorMessage, true);
        return new NextResponse(placeholderBuffer, {
          status: 200, // Using 200 to ensure the image displays in UI
          headers: {
            "Content-Type": "image/png",
            "Content-Disposition": "inline; filename=delta_generated_error.png",
            "X-Error": errorMessage
          }
        });
      }

    } catch (geminiError: any) {
      console.error('Error in image generation:', geminiError);

      // Return an error response
      return NextResponse.json({
        error: "Failed to process image generation request",
        details: geminiError instanceof Error ? geminiError.message : String(geminiError)
      }, {
        status: 500
      });
    }

  } catch (e: any) {
    console.error('Exception in generate-image:', e);
    return NextResponse.json({ error: e.message || 'Failed to generate image' }, { status: 500 });
  }
}

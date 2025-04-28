const { GoogleGenerativeAI } = require('@google/generative-ai');

// Replace with your actual key
const apiKey = process.env.GEMINI_API_KEY;
const model = "gemini-2.0-flash-exp-image-generation";

(async () => {
  if (!apiKey) {
    console.error("Set GEMINI_API_KEY env variable");
    process.exit(1);
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const contents = [
    {
      role: 'user',
      parts: [
        { text: "Generate a PNG of a red square" }
      ]
    }
  ];

  try {
    const genModel = genAI.getGenerativeModel({ model });
    const response = await genModel.generateContentStream({
      contents,
      generationConfig: {
        responseModalities: ['image', 'text'],
        responseMimeType: 'text/plain',
      },
    });

    const result = await response.response;
    console.log("Raw Gemini API response:", JSON.stringify(result, null, 2));

    if (
      result.candidates &&
      result.candidates[0]?.content?.parts?.some(part => part.inlineData)
    ) {
      console.log("Image data received!");
    } else {
      console.log("No image data in response.");
    }

  } catch (e) {
    console.error("Gemini API error:", e);
  }
})();
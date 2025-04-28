#!/bin/bash

# Check if API key is provided
if [ -z "$1" ]; then
  echo "Usage: ./test-gemini-image-models.sh YOUR_GEMINI_API_KEY"
  exit 1
fi

API_KEY=$1

# List of models to test for image generation capabilities
MODELS=(
  "gemini-2.0-flash-exp-image-generation"
  "gemini-2.0-flash"
  "gemini-1.5-pro"
  "gemini-1.5-flash"
)

# Simple prompt for testing image generation
IMAGE_PROMPT="Generate a detailed image of a red cat sitting on a blue chair"

echo "Testing Gemini API models for image generation capabilities"
echo "=========================================================="

# Function to test a model for image generation
test_model_image_generation() {
  local model=$1
  local prompt=$2
  
  echo "Testing model: ${model} for image generation"
  
  # Create the request payload
  JSON_DATA='{
    "contents": [
      {
        "role": "user",
        "parts": [
          {
            "text": "'"${prompt}"'"
          }
        ]
      }
    ],
    "generationConfig": {
      "responseModalities": ["image", "text"],
      "responseMimeType": "text/plain"
    }
  }'
  
  # Make the API call
  ENDPOINT="https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}"
  echo "Sending request to: ${ENDPOINT}"
  
  RESPONSE=$(curl -s -X POST "${ENDPOINT}" \
    -H "Content-Type: application/json" \
    -d "${JSON_DATA}")
  
  # Check if the response contains an error
  if echo "$RESPONSE" | grep -q "error"; then
    echo "❌ Model ${model} returned an error"
    ERROR_CODE=$(echo "$RESPONSE" | jq -r '.error.code // "Unknown"')
    ERROR_MESSAGE=$(echo "$RESPONSE" | jq -r '.error.message // "Unknown error"')
    echo "   Code: $ERROR_CODE"
    echo "   Message: $ERROR_MESSAGE"
    return 1
  fi
  
  # Check if the response contains image data
  if echo "$RESPONSE" | jq -e '.candidates[0].content.parts[] | select(.inlineData != null)' > /dev/null; then
    echo "✅ Model ${model} successfully generated an image!"
    return 0
  else
    echo "❓ Model ${model} returned a response but no image data was found"
    echo "Response preview:"
    echo "$RESPONSE" | jq '.candidates[0].content.parts[0].text' | head -c 100 | sed 's/$/.../'
    return 2
  fi
}

# Array to store working models for image generation
WORKING_IMAGE_MODELS=()

for MODEL in "${MODELS[@]}"; do
  if test_model_image_generation "$MODEL" "$IMAGE_PROMPT"; then
    WORKING_IMAGE_MODELS+=("$MODEL")
  fi
  echo "----------------------------------------"
done

echo "Test completed."

# Display summary of working models for image generation
echo "Summary of models that can generate images:"
if [ ${#WORKING_IMAGE_MODELS[@]} -eq 0 ]; then
  echo "❌ No models were able to generate images with your API key."
  echo "This could be due to:"
  echo "  1. Your API key doesn't have access to image generation features"
  echo "  2. The models tested don't support image generation"
  echo "  3. The API has changed and the test needs to be updated"
else
  echo "The following models can generate images with your API key:"
  for MODEL in "${WORKING_IMAGE_MODELS[@]}"; do
    echo "  ✅ $MODEL"
  done
  
  echo ""
  echo "To update your application, edit app/api/generate-image/route.ts:"
  echo "const modelOptions = ["
  for MODEL in "${WORKING_IMAGE_MODELS[@]}"; do
    echo "  '$MODEL',"
  done
  echo "];"
fi

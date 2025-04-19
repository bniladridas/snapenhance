#!/bin/bash

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
  "gemini-1.5-flash-8b"
  "gemini-2.0-flash"
  "gemini-2.0-flash-exp-image-generation"
  "gemini-2.0-flash-lite"
  "gemini-2.0-flash-thinking-exp-01-21"
  "gemini-2.5-pro-preview-03-25"
  "gemini-2.5-flash-preview-04-17"
)

# Simple prompt for testing
JSON_DATA='{
  "contents": [
    {
      "parts": [
        {
          "text": "Hello, this is a test message to verify the API is working."
        }
      ]
    }
  ]
}'

echo "Testing Gemini API with multiple models"
echo "========================================"

# Array to store working models
WORKING_MODELS=()

for MODEL in "${MODELS[@]}"; do
  echo "Testing model: ${MODEL}"
  ENDPOINT="https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}"

  echo "Sending request to: ${ENDPOINT}"
  RESPONSE=$(curl -s -X POST "${ENDPOINT}" \
    -H "Content-Type: application/json" \
    -d "${JSON_DATA}")

  # Check if the response contains an error
  if echo "$RESPONSE" | grep -q "error"; then
    echo "❌ Model ${MODEL} is not available"
    ERROR_CODE=$(echo "$RESPONSE" | jq -r '.error.code // "Unknown"')
    ERROR_MESSAGE=$(echo "$RESPONSE" | jq -r '.error.message // "Unknown error"')
    echo "   Code: $ERROR_CODE"
    echo "   Message: $ERROR_MESSAGE"
  else
    echo "✅ Model ${MODEL} is working!"
    echo "$RESPONSE" | jq '.candidates[0].content.parts[0].text' | head -c 100 | sed 's/$/.../'
    # Add to working models array
    WORKING_MODELS+=("${MODEL}")
  fi

  echo "----------------------------------------"
done

echo "Test completed."

# Display summary of working models
echo "Summary of working models:"
if [ ${#WORKING_MODELS[@]} -eq 0 ]; then
  echo "❌ No models are working with your API key. Please check your API key and permissions."
else
  echo "The following models are available with your API key:"
  for MODEL in "${WORKING_MODELS[@]}"; do
    echo "  ✅ $MODEL"
  done

  echo ""
  echo "To update your application, edit app/api/visual-research/route.ts:"
  echo "const model = genAI.getGenerativeModel({ model: \"MODEL_NAME_HERE\" });"
  echo "Replace MODEL_NAME_HERE with one of the working models listed above."
fi

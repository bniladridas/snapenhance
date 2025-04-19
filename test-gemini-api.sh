#!/bin/bash

# Check if API key is provided
if [ -z "$1" ]; then
  echo "Usage: ./test-gemini-api.sh YOUR_GEMINI_API_KEY"
  exit 1
fi

API_KEY=$1
MODEL="gemini-2.5-flash-preview-04-17"
ENDPOINT="https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}"

# Create a simple prompt
JSON_DATA='{
  "contents": [
    {
      "parts": [
        {
          "text": "Hello, can you generate a simple test response to verify the API is working?"
        }
      ]
    }
  ]
}'

# Make the API call
echo "Testing Gemini API with model: ${MODEL}"
echo "Sending request to: ${ENDPOINT}"
echo "Request payload: ${JSON_DATA}"
echo "-------------------------------------"

curl -s -X POST "${ENDPOINT}" \
  -H "Content-Type: application/json" \
  -d "${JSON_DATA}" | jq .

echo "-------------------------------------"
echo "If you see a proper JSON response above, your API key is working correctly."
echo "If you see an error, check the error message for details."

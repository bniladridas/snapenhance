// Use global fetch instead of node-fetch for Node.js 18+
// If you're using an older version of Node.js, uncomment the line below
// const fetch = require('node-fetch');

// Test the image generation API
async function testImageGeneration() {
  console.log("Testing image generation API...");

  try {
    // Make a request to the image generation API
    // Use 0.0.0.0 instead of localhost to avoid IPv6 issues
    const response = await fetch('http://0.0.0.0:3001/api/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: 'a cat eating food',
      }),
    });

    // Check if the response is successful
    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
      const errorData = await response.json();
      console.error('Error details:', errorData);
      return;
    }

    // Check the content type
    const contentType = response.headers.get('content-type');
    console.log('Response content type:', contentType);

    if (contentType.includes('application/json')) {
      // If the response is JSON, it's probably an error
      const errorData = await response.json();
      console.error('API returned JSON error:', errorData);
      return;
    }

    // If the response is an image, it's successful
    const buffer = await response.arrayBuffer();
    console.log(`Successfully received image data (${buffer.byteLength} bytes)`);

    // Check if there's an error header
    const errorHeader = response.headers.get('x-error');
    if (errorHeader) {
      console.warn('Warning: Image generation had an error:', errorHeader);
    }

    console.log('Image generation test completed successfully!');
  } catch (error) {
    console.error('Error testing image generation:', error);
  }
}

// Run the test
testImageGeneration();

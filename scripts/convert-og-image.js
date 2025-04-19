const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

async function convertSvgToPng() {
  try {
    // Create a canvas with the desired dimensions
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext('2d');

    // Load the SVG image
    const img = await loadImage(path.join(__dirname, '../public/backgrounds/new-og-light.svg'));

    // Draw the image on the canvas
    ctx.drawImage(img, 0, 0, 1200, 630);

    // Convert canvas to PNG buffer
    const buffer = canvas.toBuffer('image/png');

    // Save the PNG file
    fs.writeFileSync(path.join(__dirname, '../public/backgrounds/new-og.png'), buffer);

    console.log('OG image converted successfully!');
  } catch (error) {
    console.error('Error converting OG image:', error);
  }
}

convertSvgToPng();

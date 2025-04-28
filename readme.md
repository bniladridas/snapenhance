# SnapEnhance

![SnapEnhance LinkedIn Cover](public/backgrounds/cobranded-linkedin-cover-desktop.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)
[![Last Updated](https://img.shields.io/badge/Last_Updated-April_2025-blue)](CHANGELOG.md)

SnapEnhance is a Screenshot Enhancement and Visual Content Platform designed for professionals, content creators, and businesses. It transforms ordinary screenshots into polished, presentation-ready images for social media, documentation, and presentations. With its clean, minimalist interface, SnapEnhance helps users create professional-looking visuals without requiring design expertise, similar to how social media platforms like Facebook connect people through content.

## Who It's For

- **Product Managers** creating documentation and presentations
- **Developers** sharing code snippets and technical information
- **Content Creators** preparing tutorials and educational content
- **Marketers** developing social media and promotional materials
- **Business Professionals** enhancing reports and business communications
- **Technical Writers** producing clear, professional documentation

## Features

- **Screenshot Enhancement**: Transform screenshots with professional backgrounds and templates
- **Multiple Formats**: Support for PNG, JPG, and WEBP image formats
- **Template System**: Various background styles to choose from
- **Social Media Presets**: Optimized formats for different social media platforms
- **Delta Mode**: Specialized interface focused exclusively on AI image generation using Google's Gemini API
  - Generate custom background images based on text prompts
  - Create brand-consistent visuals with AI assistance
  - Seamlessly integrate generated images with your screenshots
  - Clean, focused UI designed specifically for AI workflows
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technology Stack

- **Framework**: Next.js 13
- **Styling**: Tailwind CSS with custom pastel gradient design
- **UI Components**: Custom components with shadcn/ui
- **AI Integration**: Google's Gemini API for image generation and visual research
  - Models: gemini-2.5-flash-preview-04-17, gemini-1.5-flash, and gemini-1.5-pro
  - Direct REST API implementation for optimal performance
  - Advanced prompt engineering for high-quality image generation
- **Time Synchronization**: Automatic time zone detection with global/local time toggle
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/bniladridas/snapenhance.git
   cd snapenhance
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Standard Mode
1. Upload a screenshot by clicking on the upload area
2. Select a template from the horizontal scrolling list
3. Choose an output format (Instagram, Twitter, etc.)
4. Click "Apply" to enhance your screenshot
5. Download the enhanced image

### Delta Mode
1. Toggle to Delta mode using the mode switcher in the header
2. Enter a detailed prompt describing the background image you want to generate
3. Click "Generate" to create an AI-generated background using Gemini API
4. Upload your screenshot to overlay on the generated background
5. Adjust positioning and settings as needed
6. Download the final composite image

### Visual Research
1. Use the GPT-style search bar at the top of the application
2. Enter queries about visual design, branding, or image enhancement
3. Get AI-powered responses with relevant visual content suggestions

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── ai-ml/            # AI/ML information
│   ├── android/          # Android app information
│   ├── blog/             # Blog with helpful articles
│   ├── changelog/        # Changelog page
│   ├── contact/          # Contact form and information
│   ├── cookies/          # Cookie & cache policy
│   ├── ios/              # iOS app information
│   ├── legal/            # Legal software information
│   ├── license/          # License information
│   ├── logo/             # Logo and assets page
│   ├── og-image/         # Open Graph image information
│   ├── privacy/          # Privacy policy page
│   ├── social/           # Social media integration
│   ├── terms/            # Terms of service page
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/           # React components
│   ├── ui/               # UI components
│   ├── delta/            # Delta mode components
│   │   ├── delta-ai-generator.tsx # AI image generation component
│   │   └── delta-interface.tsx    # Delta mode interface
│   ├── adaptive-logo.tsx          # Logo component
│   ├── visual-research-bar.tsx    # AI-powered search component
│   ├── time-zone-selector.tsx     # Time zone selection component
│   ├── time-sync-display.tsx      # Time display component
│   └── simple-image-enhancer.tsx  # Main image enhancement component
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── backgrounds/      # Background templates
│   ├── images/           # Images and templates
│   ├── favicon.svg       # Favicon
│   ├── favicon-pastel.svg # Pastel version of favicon
│   └── logo-pastel.svg   # Pastel version of logo
├── CHANGELOG.md          # Changelog
├── README.md             # Project documentation
├── LICENSE.md            # MIT License information
├── linkedin-cover-cobranded.html  # LinkedIn cover image generator
├── linkedin-company-banner.html   # LinkedIn company banner generator
├── linkedin-company-banner-visual.html # Visual LinkedIn company banner generator
└── logo-downloader.html  # Logo download utility
```

## Design

SnapEnhance features a clean, elegant design with:

- **Pastel Gradient Background**: A subtle gradient combining light pink, light blue, and light mint green
- **Consistent Light Theme**: Removed dark mode in favor of a unified, elegant light theme
- **Refined Typography**: Clean, harmonious text styling with perfect hierarchy
- **3D Elements**: Subtle 3D-like behavior for templates when selected
- **Animations**: Smooth transitions when switching modes and generating images
- **Minimalist UI**: Focused interface with no redundancy or visual noise

## Deployment

The application is deployed on Vercel at [snapenhance.vercel.app](https://snapenhance.vercel.app).

## Legal

- [Privacy Policy](/app/privacy/page.tsx)
- [Terms of Service](/app/terms/page.tsx)
- [Legal Software Information](/app/legal/page.tsx)
- [Cookie & Cache Policy](/app/cookies/page.tsx)
- [License](/app/license/page.tsx)
- [AI/ML Information](/app/ai-ml/page.tsx)
- [Contact Us](/app/contact/page.tsx)
- [Blog](/app/blog/page.tsx)
- [Android App](/app/android/page.tsx)
- [iOS App](/app/ios/page.tsx)
- [Social Media](/app/social/page.tsx)
- [OG Image](/app/og-image/page.tsx)
- [Changelog](/CHANGELOG.md)

SnapEnhance is legal software that is properly licensed and compliant with all applicable laws. All third-party libraries and components used in SnapEnhance are also properly licensed and used in accordance with their respective license agreements.

We maintain a clear End of Life (EOL) policy, committing to at least 12 months advance notice before any EOL decision, along with security patches during transition periods and migration guidance.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

```
MIT License

Copyright (c) 2025 SnapEnhance

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Last Updated

April 29, 2025

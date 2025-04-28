# SnapEnhance

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
- **Delta Mode**: Alternative interface focused on AI image generation
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Technology Stack

- **Framework**: Next.js 13
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
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

1. Upload a screenshot by clicking on the upload area
2. Select a template from the horizontal scrolling list
3. Choose an output format (Instagram, Twitter, etc.)
4. Click "Apply" to enhance your screenshot
5. Download the enhanced image

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
│   ├── adaptive-logo.tsx # Logo component
│   └── simple-image-enhancer.tsx # Main image enhancement component
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── backgrounds/      # Background templates
│   ├── images/           # Images and templates
│   └── favicon.svg       # Favicon
├── CHANGELOG.md          # Changelog
└── README.md             # Project documentation
```

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

This project is licensed under the MIT License - see the LICENSE file for details.

## Last Updated

April 20, 2025

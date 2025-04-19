import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { Providers } from './providers';
import { FloatingInfoButton } from '@/components/floating-info-button';
import { SiteHeader } from '@/components/site-header';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'SnapEnhance',
  description: 'Screenshot Enhancement and Visual Content Platform for social media, documentation, presentations, and more',
  metadataBase: new URL('https://snapenhance.vercel.app'),
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'SnapEnhance',
    description: 'Screenshot Enhancement and Visual Content Platform for social media, documentation, presentations, and more. Legal software: properly licensed and compliant with all applicable laws.',
    images: [{
      url: '/backgrounds/new-og.png',
      width: 1200,
      height: 630,
      alt: 'SnapEnhance',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SnapEnhance',
    description: 'Screenshot Enhancement and Visual Content Platform for social media, documentation, presentations, and more',
    images: ['/backgrounds/new-og.png'],
    creator: '@snapenhance',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </head>
      <body className={`${outfit.className} ${outfit.variable} antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col bg-background">
            <SiteHeader />
            <main className="flex-1 flex flex-col">{children}</main>
            <FloatingInfoButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
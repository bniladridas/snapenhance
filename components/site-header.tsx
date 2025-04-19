'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FounderBadge } from '@/components/founder-badge';

export function SiteHeader() {
  const pathname = usePathname();

  // Don't show the header on the home page since we've already added it there
  if (pathname === '/') {
    return null;
  }

  return (
    <div className="border-b border-border/10">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <img src="/logo.svg" alt="SnapEnhance Logo" className="w-6 h-6" />
              <h1 className="text-base font-medium tracking-tight">
                SnapEnhance
              </h1>
            </Link>
            <div className="hidden md:block border-l border-border/10 pl-4">
              <p className="text-xs text-muted-foreground">Screenshot Enhancement and Visual Content Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <FounderBadge size="sm" showText={false} />
            </div>

            <Link
              href="/blog"
              className={`text-sm ${pathname.startsWith('/blog') ? 'text-primary' : 'text-muted-foreground hover:text-primary'} transition-colors`}
            >
              Blog
            </Link>
            <Link
              href="/ai-ml"
              className={`text-sm ${pathname === '/ai-ml' ? 'text-primary' : 'text-muted-foreground hover:text-primary'} transition-colors`}
            >
              AI/ML
            </Link>
            <Link
              href="/legal"
              className={`text-sm ${pathname === '/legal' ? 'text-primary' : 'text-muted-foreground hover:text-primary'} transition-colors`}
            >
              Legal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

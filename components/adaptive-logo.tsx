'use client';

import { cn } from '@/lib/utils';

interface AdaptiveLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function AdaptiveLogo({ size = 'md', className }: AdaptiveLogoProps) {
  const sizeMap = {
    sm: { fontSize: 'text-sm' },
    md: { fontSize: 'text-base' },
    lg: { fontSize: 'text-lg' },
    xl: { fontSize: 'text-xl' },
  };

  const { fontSize } = sizeMap[size];

  return (
    <div className={cn('flex items-center', className)}>
      <div className={cn(
        "font-medium tracking-tight",
        fontSize
      )}>
        <span className="text-foreground">Snap</span>
        <span className="text-primary">Enhance</span>
      </div>
    </div>
  );
}

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
        <span className="text-[#333333]">Snap</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-blue-400 to-green-400">Enhance</span>
      </div>
    </div>
  );
}

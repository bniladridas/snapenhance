'use client';

interface FounderBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export function FounderBadge({ size = 'md', showText = true, className = '' }: FounderBadgeProps) {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="https://avatars.githubusercontent.com/u/125604915?v=4"
        alt="Founder"
        className={`${sizeMap[size]} rounded-full object-cover border border-border/20 shadow-sm`}
      />
      {showText && (
        <div>
          <p className={`${size === 'sm' ? 'text-[10px]' : 'text-xs'} ${size === 'lg' ? 'font-medium' : ''}`}>
            Niladri Das
          </p>
          {size !== 'sm' && (
            <p className="text-xs text-muted-foreground/60">
              Software Engineer | Founder & CEO
            </p>
          )}
        </div>
      )}
    </div>
  );
}

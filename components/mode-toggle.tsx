'use client';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useState, useEffect } from 'react';
import { getMode, toggleMode, AppMode } from './mode-utils';

interface ModeToggleProps {
  className?: string;
  variant?: 'button' | 'switch';
  style?: React.CSSProperties;
}

export function ModeToggle({ className = '', variant = 'button', style }: ModeToggleProps) {
  const [mode, setMode] = useState<AppMode>('snapenhance');
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    setMode(getMode());

    // Add event listener for storage changes
    const handleStorageChange = () => {
      setMode(getMode());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    const newMode = toggleMode();
    setMode(newMode);

    // Dispatch a custom event to notify other components
    window.dispatchEvent(new Event('modechange'));
  };

  if (variant === 'switch') {
    return (
      <div className={`flex items-center gap-2 ${className}`} style={style}>
        <span className={`text-sm ${mode === 'snapenhance' ? 'font-medium' : 'text-muted-foreground'} transition-colors duration-300`}>
          SnapEnhance
        </span>
        <Switch
          checked={mode === 'delta'}
          onCheckedChange={handleToggle}
          className="data-[state=checked]:bg-blue-600 transition-all duration-300"
        />
        <span className={`text-sm ${mode === 'delta' ? 'font-medium' : 'text-muted-foreground'} transition-colors duration-300`}>
          Delta
        </span>
      </div>
    );
  }

  return (
    <Button
      onClick={handleToggle}
      variant="outline"
      size="sm"
      className={`relative overflow-hidden ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        {mode === 'snapenhance' ? 'SnapEnhance Mode' : 'Delta Mode'}
      </span>
      <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        Switch to {mode === 'snapenhance' ? 'Delta' : 'SnapEnhance'}
      </span>
    </Button>
  );
}

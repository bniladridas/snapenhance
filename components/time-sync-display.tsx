'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Clock } from 'lucide-react';

interface TimeSyncDisplayProps {
  showIcon?: boolean;
  className?: string;
}

export function TimeSyncDisplay({ showIcon = true, className = '' }: TimeSyncDisplayProps) {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [timeSource, setTimeSource] = useState<'global' | 'local'>('local');
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Function to fetch global time from a time API
  const fetchGlobalTime = async () => {
    try {
      const response = await fetch('https://worldtimeapi.org/api/ip');
      const data = await response.json();
      return new Date(data.datetime);
    } catch (error) {
      console.error('Error fetching global time:', error);
      return new Date(); // Fallback to local time
    }
  };

  // Function to toggle between global and local time
  const toggleTimeSource = async () => {
    const newSource = timeSource === 'global' ? 'local' : 'global';
    setTimeSource(newSource);

    if (newSource === 'global') {
      const globalTime = await fetchGlobalTime();
      setCurrentTime(globalTime);
    } else {
      setCurrentTime(new Date());
    }
  };

  // Format time based on theme - more minimal
  const formatTime = (date: Date | null) => {
    if (!date) return '';

    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: !isDark, // 24-hour format for dark theme, 12-hour for light theme
    };

    return date.toLocaleTimeString(undefined, options);
  };

  // Update time every second
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const updateTime = async () => {
      if (timeSource === 'global') {
        const globalTime = await fetchGlobalTime();
        setCurrentTime(globalTime);
      } else {
        setCurrentTime(new Date());
      }
    };

    // Initial time update
    updateTime();

    // Set interval for updates
    intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [timeSource]);

  return (
    <div
      className={`flex items-center gap-1 text-[10px] ${isDark ? 'text-muted-foreground/70' : 'text-muted-foreground/60'} ${className}`}
      onClick={toggleTimeSource}
      title={`Click to switch to ${timeSource === 'global' ? 'local' : 'global'} time`}
      style={{ cursor: 'pointer' }}
    >
      {showIcon && <Clock className="h-2.5 w-2.5" />}
      <span>{formatTime(currentTime)}</span>
      <span className="text-[9px] opacity-60">
        {timeSource === 'global' ? 'UTC' : ''}
      </span>
    </div>
  );
}

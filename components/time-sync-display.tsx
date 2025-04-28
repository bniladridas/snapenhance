'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeSyncDisplayProps {
  showIcon?: boolean;
  className?: string;
}

export function TimeSyncDisplay({ showIcon = true, className = '' }: TimeSyncDisplayProps) {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [timeSource, setTimeSource] = useState<'global' | 'local'>('local');
  const [timeZone, setTimeZone] = useState<string>('');

  // Function to fetch global time from a time API
  const fetchGlobalTime = async () => {
    try {
      // Get the user's IP-based location and time
      const response = await fetch('https://worldtimeapi.org/api/ip');
      const data = await response.json();

      // Set the timezone from the API response
      if (data.timezone) {
        const tzParts = data.timezone.split('/');
        const tzName = tzParts[tzParts.length - 1].replace('_', ' ');
        setTimeZone(tzName);
      }

      return new Date(data.datetime);
    } catch (error) {
      console.error('Error fetching global time:', error);
      // Fallback to local time with browser-detected timezone
      setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone.split('/').pop()?.replace('_', ' ') || '');
      return new Date();
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

  // Format time - 12-hour format
  const formatTime = (date: Date | null) => {
    if (!date) return '';

    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Always use 12-hour format
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

        // Update local time zone display
        const savedTimeZone = localStorage.getItem('user-timezone');
        if (savedTimeZone) {
          const tzParts = savedTimeZone.split('/');
          const tzName = tzParts[tzParts.length - 1].replace('_', ' ');
          setTimeZone(tzName);
        } else {
          const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const tzParts = localTimeZone.split('/');
          const tzName = tzParts[tzParts.length - 1].replace('_', ' ');
          setTimeZone(tzName);
        }
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
      className={`flex items-center gap-1 text-[10px] text-muted-foreground/60 ${className}`}
      onClick={toggleTimeSource}
      title={`${timeSource === 'global' ? 'Using detected timezone' : 'Using device timezone'} - Click to switch`}
      style={{ cursor: 'pointer' }}
    >
      {showIcon && <Clock className="h-2.5 w-2.5" />}
      <span>{formatTime(currentTime)}</span>
      <span className="text-[9px] opacity-60">
        {timeZone}
      </span>
    </div>
  );
}

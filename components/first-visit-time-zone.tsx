'use client';

import { useState, useEffect } from 'react';
import { TimeZoneSelector } from './time-zone-selector';

export function FirstVisitTimeZone() {
  const [showSelector, setShowSelector] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('has-visited-snapenhance');
    const hasSetTimeZone = localStorage.getItem('user-timezone');
    
    if (!hasVisited || !hasSetTimeZone) {
      // Set a small delay to ensure the page has loaded
      const timer = setTimeout(() => {
        setShowSelector(true);
        // Mark as visited
        localStorage.setItem('has-visited-snapenhance', 'true');
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleTimeZoneSelect = (timezone: string) => {
    localStorage.setItem('user-timezone', timezone);
    setShowSelector(false);
  };

  const handleClose = () => {
    // Even if they close without selecting, mark as visited
    localStorage.setItem('has-visited-snapenhance', 'true');
    setShowSelector(false);
  };

  if (!showSelector) return null;

  return (
    <TimeZoneSelector 
      onClose={handleClose} 
      onSelect={handleTimeZoneSelect} 
    />
  );
}

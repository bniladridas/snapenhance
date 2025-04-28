'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TimeZoneSelectorProps {
  onClose: () => void;
  onSelect: (timezone: string) => void;
}

export function TimeZoneSelector({ onClose, onSelect }: TimeZoneSelectorProps) {
  const [selectedTimezone, setSelectedTimezone] = useState<string>('');
  const [detectedTimezone, setDetectedTimezone] = useState<string>('');
  const [commonTimezones, setCommonTimezones] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredTimezones, setFilteredTimezones] = useState<string[]>([]);

  // Detect user's timezone on component mount
  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setDetectedTimezone(userTimezone);
    setSelectedTimezone(userTimezone);

    // Common timezones that cover major regions
    const popular = [
      'America/New_York',
      'America/Los_Angeles',
      'America/Chicago',
      'America/Toronto',
      'Europe/London',
      'Europe/Paris',
      'Europe/Berlin',
      'Asia/Tokyo',
      'Asia/Shanghai',
      'Asia/Singapore',
      'Asia/Dubai',
      'Australia/Sydney',
      'Pacific/Auckland',
    ];

    // Get all available timezones if supported by the browser
    let allTimezones: string[] = [];
    try {
      // @ts-ignore - Intl.supportedValuesOf is not in all TypeScript definitions yet
      if (Intl.supportedValuesOf) {
        // @ts-ignore
        allTimezones = Intl.supportedValuesOf('timeZone');
      }
    } catch (e) {
      console.warn('Browser does not support Intl.supportedValuesOf');
    }

    // If we couldn't get the list, use our popular list
    const timezones = allTimezones.length > 0 ? allTimezones : popular;
    
    // Make sure detected timezone is in the list
    if (userTimezone && !timezones.includes(userTimezone)) {
      timezones.unshift(userTimezone);
    }
    
    setCommonTimezones(timezones);
    setFilteredTimezones(timezones);
  }, []);

  // Filter timezones based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredTimezones(commonTimezones);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = commonTimezones.filter(tz => 
      tz.toLowerCase().includes(query)
    );
    
    setFilteredTimezones(filtered);
  }, [searchQuery, commonTimezones]);

  const handleSelect = () => {
    onSelect(selectedTimezone);
    // Save to localStorage
    localStorage.setItem('user-timezone', selectedTimezone);
    onClose();
  };

  const formatTimezone = (tz: string) => {
    return tz.replace(/_/g, ' ').replace(/\//g, ' / ');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-lg max-w-md w-full max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Select Your Time Zone</h2>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="p-4 border-b">
          <p className="text-sm text-muted-foreground mb-4">
            We've detected your time zone as <span className="font-medium">{formatTimezone(detectedTimezone)}</span>. 
            You can confirm this or select a different time zone.
          </p>
          
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search time zones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border rounded-md text-sm"
            />
          </div>
        </div>
        
        <div className="overflow-y-auto flex-1 p-2">
          <div className="space-y-1">
            {filteredTimezones.map((tz) => (
              <div
                key={tz}
                className={`p-2 rounded-md cursor-pointer text-sm ${
                  selectedTimezone === tz 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted'
                }`}
                onClick={() => setSelectedTimezone(tz)}
              >
                {formatTimezone(tz)}
              </div>
            ))}
            
            {filteredTimezones.length === 0 && (
              <div className="p-4 text-center text-muted-foreground">
                No time zones match your search
              </div>
            )}
          </div>
        </div>
        
        <div className="p-4 border-t flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSelect}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}

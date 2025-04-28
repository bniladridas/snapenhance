'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type AppMode = 'snapenhance' | 'delta';

interface ModeContextType {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<AppMode>('snapenhance');
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);

    // Check if there's a saved preference in localStorage
    // Only access localStorage on the client side
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('app-mode') as AppMode | null;
      if (savedMode && (savedMode === 'snapenhance' || savedMode === 'delta')) {
        setMode(savedMode);
      }
    }
  }, []);

  // Update body class when mode changes
  useEffect(() => {
    if (mounted) {
      if (mode === 'delta') {
        document.body.classList.add('delta-mode');
      } else {
        document.body.classList.remove('delta-mode');
      }
    }
  }, [mode, mounted]);

  const toggleMode = () => {
    const newMode = mode === 'snapenhance' ? 'delta' : 'snapenhance';
    setMode(newMode);

    // Only access localStorage on the client side
    if (typeof window !== 'undefined') {
      localStorage.setItem('app-mode', newMode);
    }
  };

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}

'use client';

export type AppMode = 'snapenhance' | 'delta';

export function getMode(): AppMode {
  if (typeof window === 'undefined') {
    return 'snapenhance';
  }
  
  const savedMode = localStorage.getItem('app-mode') as AppMode | null;
  return (savedMode && (savedMode === 'snapenhance' || savedMode === 'delta')) 
    ? savedMode 
    : 'snapenhance';
}

export function setMode(mode: AppMode): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  localStorage.setItem('app-mode', mode);
}

export function toggleMode(): AppMode {
  const currentMode = getMode();
  const newMode = currentMode === 'snapenhance' ? 'delta' : 'snapenhance';
  setMode(newMode);
  return newMode;
}

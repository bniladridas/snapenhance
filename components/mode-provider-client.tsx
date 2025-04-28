'use client';

import { ModeProvider } from '@/contexts/ModeContext';

export function ModeProviderClient({ children }: { children: React.ReactNode }) {
  return <ModeProvider>{children}</ModeProvider>;
}

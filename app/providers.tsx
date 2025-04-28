'use client';

import { ModeProviderClient } from '@/components/mode-provider-client';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModeProviderClient>
      {children}
    </ModeProviderClient>
  );
}
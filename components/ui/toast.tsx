'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ToastProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
  className?: string;
  duration?: number;
  children?: React.ReactNode;
};

export type ToastActionElement = React.ReactElement<{
  altText: string;
  onClick: () => void;
}>;

export function Toast({
  title,
  description,
  action,
  variant = 'default',
  className,
  children,
  ...props
}: ToastProps) {
  return (
    <div
      className={cn(
        'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all',
        variant === 'default' && 'bg-background border-border',
        variant === 'destructive' && 'bg-destructive text-destructive-foreground border-destructive',
        className
      )}
      {...props}
    >
      {children || (
        <div className="flex flex-col gap-1">
          {title && <div className="text-sm font-medium">{title}</div>}
          {description && <div className="text-xs opacity-90">{description}</div>}
        </div>
      )}
      {action}
      <button className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function ToastViewport({ children }: { children?: React.ReactNode }) {
  return (
    <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {children}
    </div>
  );
}

"use client";

import { useState, useCallback } from 'react';

interface Toast {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

interface ToastState extends Toast {
  id: number;
}

let toastCount = 0;

export function useToast() {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const toast = useCallback(({ title, description, variant = 'default' }: Toast) => {
    const id = toastCount++;
    
    setToasts(prev => [...prev, { id, title, description, variant }]);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  }, []);

  const Toaster = () => {
    if (toasts.length === 0) return null;

    return (
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map(({ id, title, description, variant }) => (
          <div
            key={id}
            className={`rounded-lg p-4 shadow-lg transition-all ${
              variant === 'destructive' 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-gray-900 border border-gray-200'
            }`}
          >
            <div className="font-semibold">{title}</div>
            {description && (
              <div className="text-sm mt-1 opacity-90">{description}</div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return { toast, Toaster };
}

"use client";

import { SessionProvider } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const { Toaster } = useToast();

  return (
    <SessionProvider>
      {children}
      <Toaster />
    </SessionProvider>
  );
}

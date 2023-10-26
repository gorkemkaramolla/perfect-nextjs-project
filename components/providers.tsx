'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
interface Providers {
  children: ReactNode;
}
export default function Providers({ children }: Providers) {
  return <SessionProvider>{children}</SessionProvider>;
}

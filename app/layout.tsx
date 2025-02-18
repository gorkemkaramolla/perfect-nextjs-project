import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import Providers from '@/components/providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={
          'dark:text-white text-black dark:bg-black bg-yellow-50' +
          inter.className
        }
      >
        {<Providers>{children}</Providers>}
      </body>
    </html>
  );
}

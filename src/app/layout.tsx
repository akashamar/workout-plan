import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Workout Plan',
  description: 'A comprehensive workout planning application',
  manifest: '/manifest.json',
  icons: {
    apple: [
      { url: '/icons/icon-192x192.png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512' }
    ]
  },
  themeColor: '#1a1f2b',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-900 text-white antialiased selection:bg-cyan-900 selection:text-cyan-100`}>
        <div className="relative min-h-screen flex flex-col">
          {/* Background gradient orbs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-cyan-900/20 blur-[120px]" />
            <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-blue-900/20 blur-[120px]" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col flex-1">
            <Navigation />
            <main className="flex-1 bg-transparent">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
} 
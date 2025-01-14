import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CMAI - Community Management AI',
  description: 'Empowering Crypto Communities with Smart Automation',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: './favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: ['/favicon.png'],
    apple: [{ url: '/favicon.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

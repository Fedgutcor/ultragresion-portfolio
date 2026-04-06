import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Nav } from '@/components/Nav';
import './globals.css';

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Ultragresion',
  description: 'AI architect. Game builder. Signal emitter.',
  icons: {
    icon: [
      { url: '/brand/favicon_32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/favicon_16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/brand/apple_touch_icon.png',
  },
  openGraph: {
    title: 'Ultragresion — Command Center',
    description: 'AI architect. Game builder. Signal emitter.',
    url: 'https://ultragresion.com',
    images: [{ url: 'https://ultragresion.com/brand/og_banner.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultragresion',
    description: 'AI architect. Game builder. Signal emitter.',
    images: ['https://ultragresion.com/brand/og_banner.png'],
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${mono.variable} font-mono bg-[#050505] text-white antialiased`}>
        <Nav />
        <div className="pt-[44px]">
          {props.children}
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Ultragresion',
  description: 'AI architect. Game builder. Signal emitter.',
  openGraph: {
    title: 'Ultragresion',
    description: 'AI architect. Game builder. Signal emitter.',
    url: 'https://ultragresion.com',
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${mono.variable} font-mono bg-[#050505] text-white antialiased`}>
        {props.children}
      </body>
    </html>
  );
}

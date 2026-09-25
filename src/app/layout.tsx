import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'SecondShelf — Give Books a Second Life | Fair Used Book Pricing',
  description:
    'Official digital hub for SecondShelf. Calculate fair second-hand book prices based on condition and retail value. Connect with us directly on Instagram to buy, sell, and trade pre-owned books.',
  keywords: [
    'SecondShelf',
    'used books',
    'second hand books',
    'fair book price calculator',
    'book valuation',
    'buy used books',
    'sell used books',
    'trade books',
  ],
  authors: [{ name: 'SecondShelf' }],
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FAF9F5] text-[#111812] flex flex-col antialiased selection:bg-[#122416] selection:text-[#FAF9F5]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

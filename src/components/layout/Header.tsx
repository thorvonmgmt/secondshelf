'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

const INSTAGRAM_URL = 'https://instagram.com/secondshelf';
const INSTAGRAM_HANDLE = '@secondshelf';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'What is SecondShelf', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Fair Price Calculator', href: '#calculator' },
    { label: 'Why Fair Pricing', href: '#why-fair-pricing' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E3E2D8] shadow-xs'
          : 'bg-[#FAF9F5] border-b border-[#E3E2D8]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-36 sm:h-12 sm:w-40 rounded-lg overflow-hidden border border-[#122416]/20 shadow-xs transition-transform group-hover:scale-[1.02]">
            <Image
              src="/logo.png"
              alt="SecondShelf"
              fill
              priority
              className="object-cover"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-wider text-[#586358] hover:text-[#111812] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action: Instagram CTA */}
        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#122416] text-[#FAF9F5] text-xs font-semibold hover:bg-[#1A3420] transition-all hover:scale-[1.02] shadow-sm"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#B5D0A4]" />
            <span>Connect on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 hidden sm:inline" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#111812] hover:bg-[#F2F1EA] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-[#E3E2D8] px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#111812] py-1 border-b border-[#E3E2D8]/40"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-[#122416] text-[#FAF9F5] text-xs font-bold flex items-center justify-center gap-2"
              >
                <InstagramIcon className="w-4 h-4 text-[#B5D0A4]" />
                <span>Message on Instagram ({INSTAGRAM_HANDLE})</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

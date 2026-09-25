import React from 'react';
import Image from 'next/image';
import { ArrowRight, Calculator, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

const INSTAGRAM_URL = 'https://instagram.com/secondshelf';
const INSTAGRAM_HANDLE = '@secondshelf';

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-[#FAF9F5]">
      {/* Background organic blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#B5D0A4]/20 via-[#F2F1EA]/50 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Subtle Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#122416]/5 border border-[#122416]/10 text-xs font-semibold text-[#122416] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#122416]" />
            <span>BUY · SELL · TRADE</span>
            <span className="text-[#A6B2A6]">•</span>
            <span className="text-[#586358] font-normal">Fair Used Book Valuation</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111812] leading-[1.08] max-w-4xl">
            Great books deserve <br />
            <span className="italic font-serif font-normal text-[#122416]">
              a second life — at fair prices.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-xl text-[#586358] max-w-2xl font-normal leading-relaxed">
            SecondShelf connects readers with pre-owned books through transparent, reasonable pricing. Value your books with our fair price calculator, then coordinate buying and selling directly on Instagram.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#122416] text-[#FAF9F5] text-sm font-semibold hover:bg-[#1A3420] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center justify-center gap-2.5"
            >
              <InstagramIcon className="w-4 h-4 text-[#B5D0A4]" />
              <span>Connect on Instagram ({INSTAGRAM_HANDLE})</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#calculator"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#F2F1EA] border border-[#E3E2D8] hover:border-[#122416] text-[#111812] text-sm font-semibold hover:bg-[#EAE8DD] transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#586358]" />
              <span>Calculate Fair Price</span>
            </a>
          </div>

          {/* Official Brand Badge Feature Card */}
          <div className="mt-16 sm:mt-20 w-full max-w-md mx-auto p-4 sm:p-5 rounded-3xl bg-[#122416] text-[#FAF9F5] shadow-2xl border border-[#25432B] flex flex-col items-center">
            <div className="relative h-14 w-52 sm:h-16 sm:w-60 rounded-xl overflow-hidden my-2">
              <Image
                src="/logo.png"
                alt="SecondShelf Official Brand Mark"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-3 pt-3 border-t border-[#25432B] w-full flex items-center justify-between text-[11px] text-[#B5D0A4] px-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B5D0A4]" /> Official Digital Hub
              </span>
              <span>Transactions via Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

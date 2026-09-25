import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

const INSTAGRAM_URL = 'https://instagram.com/secondshelf';
const INSTAGRAM_HANDLE = '@secondshelf';

export function InstagramHub() {
  return (
    <section id="instagram" className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-[#E3E2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#122416] text-[#FAF9F5] p-8 sm:p-14 border border-[#25432B] shadow-xl text-center relative overflow-hidden">
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B5D0A4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Instagram Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#1A3420] border border-[#25432B] flex items-center justify-center text-[#B5D0A4] mb-6 shadow-md">
              <InstagramIcon className="w-8 h-8 text-[#B5D0A4]" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-[#B5D0A4]">
              Our Primary Channel
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF9F5] mt-2 mb-4">
              Everything happens on Instagram.
            </h2>

            {/* Clear Website vs Instagram Explanation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl w-full my-6 text-left">
              <div className="p-4 rounded-2xl bg-[#1A3420] border border-[#25432B]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#B5D0A4]">
                  Here on the Website
                </p>
                <p className="text-xs text-[#C8D6C8] mt-1 leading-relaxed">
                  Learn about SecondShelf, understand our principles, and use the Fair Price Calculator.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1A3420] border border-[#25432B]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#B5D0A4]">
                  Over on Instagram
                </p>
                <p className="text-xs text-[#C8D6C8] mt-1 leading-relaxed">
                  Real communication, book requests, photo verification, fair negotiations, and transactions.
                </p>
              </div>
            </div>

            <p className="text-sm text-[#A6BFA6] max-w-lg mb-8 leading-relaxed">
              Drop us a DM with the books you'd like to sell or titles you've been searching for. Our team is active every day.
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FAF9F5] text-[#122416] text-sm font-bold hover:bg-[#EAE8DD] hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              <InstagramIcon className="w-4 h-4 text-[#122416]" />
              <span>Message Us: {INSTAGRAM_HANDLE}</span>
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

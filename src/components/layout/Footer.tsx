import React from 'react';
import Image from 'next/image';

const INSTAGRAM_HANDLE = '@secondshelf.exe';

export function Footer() {
  return (
    <footer className="bg-[#122416] text-[#FAF9F5] border-t border-[#1A3420] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#25432B]">
          {/* Logo & Brand Statement */}
          <div className="max-w-md">
            <div className="relative h-12 w-44 rounded-lg overflow-hidden border border-[#25432B] mb-4">
              <Image
                src="/logo.png"
                alt="SecondShelf Logo"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-[#B5D0A4] font-medium leading-relaxed">
              Give Books a Second Life.
            </p>
            <p className="text-xs text-[#8FA28F] mt-2 leading-relaxed">
              SecondShelf is the official digital identity and fair-price reference for second-hand books. All inquiries, buying, selling, and exchanges are coordinated directly through Instagram.
            </p>
          </div>

          {/* Instagram Handle Info */}
          <div className="flex flex-col items-start md:items-end">
            <span className="text-[11px] uppercase tracking-wider text-[#8FA28F]">
              Official Instagram
            </span>
            <span className="text-base font-semibold text-[#B5D0A4] mt-1 font-mono">
              {INSTAGRAM_HANDLE}
            </span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A8E7A] gap-4">
          <p>© 2026 SecondShelf. All rights reserved.</p>
          <p className="italic font-serif text-[#B5D0A4]">
            Second-hand books. Fair pricing. Simple process.
          </p>
        </div>
      </div>
    </footer>
  );
}

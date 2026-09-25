import React from 'react';
import { BookPlus, Search } from 'lucide-react';

const INSTAGRAM_HANDLE = '@secondself.exe';

export function BuyAndSellCards() {
  return (
    <section className="py-20 sm:py-28 bg-[#F2F1EA] border-t border-[#E3E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#586358]">
            Two Simple Paths
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111812] mt-2 leading-tight">
            Ready to Buy or Sell?
          </h2>
          <p className="text-sm sm:text-base text-[#586358] mt-3">
            Reach out directly on Instagram. No signups, accounts, or complex forms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Sell Your Book */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF9F5] border border-[#E3E2D8] flex flex-col justify-between hover:border-[#122416] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F2F1EA] flex items-center justify-center text-[#122416] mb-6">
                <BookPlus className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-[#586358]">
                Clear Your Shelf
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111812] tracking-tight mt-1 mb-4">
                Sell Your Books
              </h3>

              <p className="text-sm text-[#586358] leading-relaxed mb-6">
                Have books you've already read sitting idle on your shelf? Message us on Instagram with photos of the books. We'll agree on a fair price and coordinate pickup.
              </p>

              <ul className="space-y-2 text-xs text-[#586358] mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#122416]" />
                  <span>Fair price determined before shipping</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#122416]" />
                  <span>Doorstep pickup coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#122416]" />
                  <span>Prompt payouts directly to your UPI</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E3E2D8] flex items-center justify-between text-xs text-[#586358]">
              <span className="font-medium">Direct Inquiries:</span>
              <span className="font-semibold text-[#122416] bg-[#F2F1EA] px-3.5 py-1.5 rounded-full border border-[#E3E2D8]">
                DM {INSTAGRAM_HANDLE}
              </span>
            </div>
          </div>

          {/* Card 2: Find Books */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF9F5] border border-[#E3E2D8] flex flex-col justify-between hover:border-[#122416] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F2F1EA] flex items-center justify-center text-[#122416] mb-6">
                <Search className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-[#586358]">
                Discover Your Next Read
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111812] tracking-tight mt-1 mb-4">
                Find a Book
              </h3>

              <p className="text-sm text-[#586358] leading-relaxed mb-6">
                Looking for an academic textbook, competitive exam guide, business classic, or literary novel? Send us your wishlist or title via Instagram DM.
              </p>

              <ul className="space-y-2 text-xs text-[#586358] mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#122416]" />
                  <span>Verified physical condition descriptions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#122416]" />
                  <span>Up to 50%–70% lower than retail MRP</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#122416]" />
                  <span>Safe doorstep delivery nationwide</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E3E2D8] flex items-center justify-between text-xs text-[#586358]">
              <span className="font-medium">Wishlist Requests:</span>
              <span className="font-semibold text-[#122416] bg-[#F2F1EA] px-3.5 py-1.5 rounded-full border border-[#E3E2D8]">
                DM {INSTAGRAM_HANDLE}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

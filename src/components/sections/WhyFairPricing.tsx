import React from 'react';
import { HelpCircle, AlertTriangle, Trash2, CheckCircle2 } from 'lucide-react';

export function WhyFairPricing() {
  const problems = [
    {
      title: "Sellers don't know what their used book is worth",
      desc: 'Without a clear benchmark, sellers either ask unrealistically high prices or surrender great books for scrap value.',
      icon: HelpCircle,
    },
    {
      title: 'Buyers overpay for second-hand copies',
      desc: 'Commercial used bookstores often charge near-MRP prices for worn, annotated copies with no quality verification.',
      icon: AlertTriangle,
    },
    {
      title: 'Books are unnecessarily discarded',
      desc: 'Millions of readable, valuable books end up thrown out or paper-shredded simply because there was no easy way to value and rehome them.',
      icon: Trash2,
    },
  ];

  return (
    <section id="why-fair-pricing" className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-[#E3E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#586358]">
            Transparency & Reason
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111812] mt-2 leading-tight">
            Why Fair Pricing?
          </h2>
          <p className="text-base sm:text-lg text-[#586358] mt-4 font-normal leading-relaxed">
            The used book market has historically been opaque. SecondShelf was created to establish a reasonable, shared standard that respects both the reader letting a book go and the reader welcoming it in.
          </p>
        </div>

        {/* 3 Problems We Solve */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.title}
                className="p-8 rounded-3xl bg-[#F2F1EA] border border-[#E3E2D8] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] flex items-center justify-center text-[#122416] mb-6">
                    <Icon className="w-5 h-5 text-[#586358]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111812] tracking-tight mb-2">
                    {prob.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#586358] leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The SecondShelf Answer */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#122416] text-[#FAF9F5] border border-[#25432B]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B5D0A4]">
                The SecondShelf Standard
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#FAF9F5] mt-1 tracking-tight">
                A transparent, reasonable benchmark for every book.
              </h3>
              <p className="text-sm text-[#C8D6C8] mt-2 leading-relaxed">
                We believe fair pricing creates trust. When sellers receive fair value and buyers pay honest prices, books keep moving from hand to hand.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B5D0A4] bg-[#1A3420] px-4 py-2 rounded-full border border-[#25432B]">
              <CheckCircle2 className="w-4 h-4 text-[#B5D0A4]" />
              <span>Zero Arbitrary Markups</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { BookOpen, Scale, Sparkles, RefreshCw } from 'lucide-react';

export function WhatIsSecondShelf() {
  const pillars = [
    {
      title: 'Second-hand books.',
      desc: 'Quality pre-loved books passed directly from one thoughtful reader to the next.',
      icon: BookOpen,
    },
    {
      title: 'Fair pricing.',
      desc: 'Transparent estimations based on condition, original price, and demand — avoiding arbitrary markups.',
      icon: Scale,
    },
    {
      title: 'Simple process.',
      desc: 'No confusing checkout hurdles, apps, or accounts. Everything is arranged directly through our Instagram.',
      icon: Sparkles,
    },
    {
      title: 'Giving books a second life.',
      desc: 'Keeping great literature and textbooks circulating instead of sitting forgotten on dusty shelves.',
      icon: RefreshCw,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F2F1EA] border-t border-[#E3E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#586358]">
            The Concept
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111812] mt-2 leading-tight">
            What is SecondShelf?
          </h2>
          <p className="text-base sm:text-lg text-[#586358] mt-4 font-normal leading-relaxed">
            SecondShelf connects people with second-hand books, making the process of buying, selling, and trading pre-owned reads simpler, transparent, and grounded in fairness.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl bg-[#FAF9F5] border border-[#E3E2D8] flex flex-col justify-between hover:border-[#122416] transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F2F1EA] flex items-center justify-center text-[#122416] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111812] tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#586358] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

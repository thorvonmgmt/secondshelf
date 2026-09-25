import React from 'react';
import { Search, MessageSquare, Image as ImageIcon, Scale, Truck } from 'lucide-react';

const INSTAGRAM_HANDLE = '@secondself.exe';

export function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Find your book or decide to sell',
      desc: 'Whether you want to buy a specific title, trade an old favourite, or clear your bookshelf.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Contact us through Instagram',
      desc: `Send a direct message to ${INSTAGRAM_HANDLE}. Our team will respond directly.`,
      icon: MessageSquare,
    },
    {
      step: '03',
      title: 'Share the required book details',
      desc: 'Send the book title, edition, and clear photos showing the cover, spine, and pages.',
      icon: ImageIcon,
    },
    {
      step: '04',
      title: 'We determine a fair price',
      desc: 'Using our SecondShelf fair-pricing methodology, we agree on a transparent price that works for everyone.',
      icon: Scale,
    },
    {
      step: '05',
      title: 'We coordinate the rest via Instagram',
      desc: 'Pickup, packing verification, courier dispatch, and payments are coordinated directly through Instagram.',
      icon: Truck,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-[#E3E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#586358]">
              Straightforward Flow
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111812] mt-2 leading-tight">
              How It Works
            </h2>
            <p className="text-sm sm:text-base text-[#586358] mt-3 max-w-xl">
              SecondShelf is an informational hub and fair-price reference. All transactions and communication happen through our Instagram.
            </p>
          </div>

          <div className="self-start md:self-auto px-4 py-2 rounded-full bg-[#F2F1EA] border border-[#E3E2D8] text-xs text-[#586358] font-medium">
            <span>Direct Instagram Inquiries: <strong className="text-[#122416]">{INSTAGRAM_HANDLE}</strong></span>
          </div>
        </div>

        {/* 5-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 rounded-3xl bg-[#F2F1EA] border border-[#E3E2D8] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#122416]">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] flex items-center justify-center text-[#122416]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#111812] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#586358] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-3 border-t border-[#E3E2D8]/70">
                  <span className="text-[10px] font-mono text-[#8C988C] uppercase">
                    Step {item.step}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-[#122416]/5 border border-[#122416]/10 text-center">
          <p className="text-xs sm:text-sm text-[#122416] font-medium">
            💡 No accounts or shopping carts required. Just a message to our Instagram team to buy, sell, or trade.
          </p>
        </div>
      </div>
    </section>
  );
}

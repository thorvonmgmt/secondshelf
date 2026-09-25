'use client';

import React, { useState, useMemo } from 'react';
import {
  calculateFairPrice,
  formatInstagramDMSummary,
  BookCondition,
  BookAge,
  BookMarkings,
  CoverCondition,
  DemandTier,
} from '@/lib/pricingMethodology';
import {
  Calculator,
  Copy,
  Check,
  Sparkles,
  Info,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

const INSTAGRAM_URL = 'https://instagram.com/secondshelf';

export function FairPriceCalculator() {
  const [title, setTitle] = useState('The Psychology of Money');
  const [originalPrice, setOriginalPrice] = useState<number | string>(599);
  const [condition, setCondition] = useState<BookCondition>('excellent');
  const [age, setAge] = useState<BookAge>('1-to-3-years');
  const [markings, setMarkings] = useState<BookMarkings>('none');
  const [coverCondition, setCoverCondition] = useState<CoverCondition>('minor-shelfwear');
  const [demandTier, setDemandTier] = useState<DemandTier>('bestseller');

  const [copied, setCopied] = useState(false);

  // Real-time pure frontend calculation
  const estimate = useMemo(() => {
    return calculateFairPrice({
      title,
      originalPrice: Number(originalPrice) || 0,
      condition,
      age,
      markings,
      coverCondition,
      demandTier,
    });
  }, [title, originalPrice, condition, age, markings, coverCondition, demandTier]);

  const handleCopySummary = () => {
    const text = formatInstagramDMSummary(
      {
        title,
        originalPrice: Number(originalPrice) || 0,
        condition,
        age,
        markings,
        coverCondition,
        demandTier,
      },
      estimate,
      'selling'
    );

    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReset = () => {
    setTitle('');
    setOriginalPrice('');
    setCondition('excellent');
    setAge('1-to-3-years');
    setMarkings('none');
    setCoverCondition('minor-shelfwear');
    setDemandTier('general');
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#F2F1EA] border-t border-[#E3E2D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#122416]/5 border border-[#122416]/10 text-xs font-semibold text-[#122416] mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#122416]" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111812] leading-tight">
            Fair Price Calculator
          </h2>
          <p className="text-sm sm:text-base text-[#586358] mt-3">
            Estimate a reasonable, fair second-hand valuation based on physical condition, age, and retail price. Runs completely in your browser.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#FAF9F5] rounded-3xl border border-[#E3E2D8] shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Inputs Panel */}
            <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#E3E2D8] space-y-8">
              <div className="flex items-center justify-between pb-3 border-b border-[#E3E2D8]">
                <h3 className="text-base font-bold text-[#111812]">Book Details</h3>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-[#8C988C] hover:text-[#111812] flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Title & Original Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#111812] mb-1.5">
                    Book Title (Optional)
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Sapiens, Atomic Habits"
                    className="w-full px-3.5 py-2.5 bg-[#F2F1EA] border border-[#E3E2D8] rounded-xl text-xs sm:text-sm text-[#111812] placeholder:text-[#A6B2A6] focus:outline-none focus:border-[#122416]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111812] mb-1.5">
                    Original Price / MRP (₹) <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="50000"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    placeholder="e.g. 599"
                    className="w-full px-3.5 py-2.5 bg-[#F2F1EA] border border-[#E3E2D8] rounded-xl text-xs sm:text-sm text-[#111812] placeholder:text-[#A6B2A6] focus:outline-none focus:border-[#122416] font-semibold"
                  />
                </div>
              </div>

              {/* Condition Selector */}
              <div>
                <label className="block text-xs font-bold text-[#111812] mb-2">
                  Overall Condition
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'like-new', label: 'Like New', desc: 'Unread / Pristine' },
                    { id: 'excellent', label: 'Excellent', desc: 'Read once, crisp' },
                    { id: 'good', label: 'Good', desc: 'Gentle wear, intact' },
                    { id: 'fair', label: 'Fair', desc: 'Noticeable wear' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCondition(item.id as BookCondition)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        condition === item.id
                          ? 'border-[#122416] bg-[#122416] text-[#FAF9F5] shadow-xs'
                          : 'border-[#E3E2D8] bg-[#F2F1EA] text-[#111812] hover:border-[#122416]'
                      }`}
                    >
                      <p className="text-xs font-bold">{item.label}</p>
                      <p className={`text-[10px] mt-0.5 ${condition === item.id ? 'text-[#B5D0A4]' : 'text-[#586358]'}`}>
                        {item.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Age of the Book */}
              <div>
                <label className="block text-xs font-bold text-[#111812] mb-2">
                  Age of the Book / Edition
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'under-1-year', label: '< 1 Year' },
                    { id: '1-to-3-years', label: '1 – 3 Years' },
                    { id: '3-to-5-years', label: '3 – 5 Years' },
                    { id: 'over-5-years', label: '5+ Years' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAge(item.id as BookAge)}
                      className={`py-2 px-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                        age === item.id
                          ? 'border-[#122416] bg-[#122416] text-[#FAF9F5]'
                          : 'border-[#E3E2D8] bg-[#F2F1EA] text-[#586358] hover:text-[#111812]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Markings & Highlighting */}
              <div>
                <label className="block text-xs font-bold text-[#111812] mb-2">
                  Markings & Highlighting
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'none', label: 'Clean Pages', sub: 'No pen, pencil, or notes' },
                    { id: 'light-pencil', label: 'Light Pencil', sub: 'Erasable annotations' },
                    { id: 'pen-highlighter', label: 'Highlighter / Pen', sub: 'Permanent marks' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMarkings(item.id as BookMarkings)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        markings === item.id
                          ? 'border-[#122416] bg-[#122416] text-[#FAF9F5]'
                          : 'border-[#E3E2D8] bg-[#F2F1EA] text-[#111812] hover:border-[#122416]'
                      }`}
                    >
                      <p className="text-xs font-bold">{item.label}</p>
                      <p className={`text-[10px] ${markings === item.id ? 'text-[#B5D0A4]' : 'text-[#586358]'}`}>
                        {item.sub}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cover & Binding Wear */}
              <div>
                <label className="block text-xs font-bold text-[#111812] mb-2">
                  Cover & Spine State
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'pristine', label: 'Pristine Spine', sub: 'Unbent, sharp corners' },
                    { id: 'minor-shelfwear', label: 'Light Shelfwear', sub: 'Normal gentle handling' },
                    { id: 'creased-worn', label: 'Creased / Worn', sub: 'Spine fold, edge crease' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCoverCondition(item.id as CoverCondition)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        coverCondition === item.id
                          ? 'border-[#122416] bg-[#122416] text-[#FAF9F5]'
                          : 'border-[#E3E2D8] bg-[#F2F1EA] text-[#111812] hover:border-[#122416]'
                      }`}
                    >
                      <p className="text-xs font-bold">{item.label}</p>
                      <p className={`text-[10px] ${coverCondition === item.id ? 'text-[#B5D0A4]' : 'text-[#586358]'}`}>
                        {item.sub}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category / Demand Tier */}
              <div>
                <label className="block text-xs font-bold text-[#111812] mb-2">
                  Book Category / Demand Tier
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'bestseller', label: 'Popular Bestseller' },
                    { id: 'academic-competitive', label: 'Academic / Exam' },
                    { id: 'general', label: 'General Read' },
                    { id: 'niche-classic', label: 'Niche / Classic' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDemandTier(item.id as DemandTier)}
                      className={`py-2 px-2.5 rounded-xl border text-center text-xs font-medium transition-all ${
                        demandTier === item.id
                          ? 'border-[#122416] bg-[#122416] text-[#FAF9F5]'
                          : 'border-[#E3E2D8] bg-[#F2F1EA] text-[#586358] hover:text-[#111812]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Output Valuation Card */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-[#122416] text-[#FAF9F5] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#B5D0A4] font-semibold">
                  Estimated Valuation
                </span>

                <h3 className="text-xl font-bold tracking-tight mt-1 text-[#FAF9F5]">
                  Fair Second-Hand Price
                </h3>

                {/* Price Display */}
                <div className="mt-8 p-6 rounded-2xl bg-[#1A3420] border border-[#25432B]">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#FAF9F5]">
                        ₹{estimate.fairPrice}
                      </span>
                      <p className="text-xs text-[#B5D0A4] mt-1">
                        Fair Range: ₹{estimate.rangeLow} – ₹{estimate.rangeHigh}
                      </p>
                    </div>
                    {estimate.originalPrice > 0 && (
                      <span className="px-2.5 py-1 rounded-full bg-[#B5D0A4] text-[#122416] text-xs font-bold">
                        {estimate.discountFromMRP}% below MRP
                      </span>
                    )}
                  </div>
                </div>

                {/* Transparent Rationale */}
                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#B5D0A4]">
                    How This Was Determined:
                  </p>
                  <ul className="space-y-2 text-xs text-[#C8D6C8]">
                    {estimate.explanation.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#B5D0A4] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions & Methodology Disclaimer */}
              <div className="mt-10 pt-6 border-t border-[#25432B] space-y-3">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  disabled={estimate.fairPrice <= 0}
                  className="w-full py-3.5 px-4 rounded-full bg-[#FAF9F5] hover:bg-[#EAE8DD] text-[#122416] text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-40"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-700" />
                      <span>Valuation Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Valuation for Instagram DM</span>
                    </>
                  )}
                </button>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full border border-[#25432B] hover:bg-[#1A3420] text-[#FAF9F5] text-xs font-semibold transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <InstagramIcon className="w-4 h-4 text-[#B5D0A4]" />
                  <span>Send to SecondShelf on Instagram →</span>
                </a>

                {/* Disclaimer */}
                <div className="flex items-start gap-2 pt-2 text-[10px] text-[#8FA28F] leading-relaxed">
                  <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#B5D0A4]" />
                  <p>
                    Estimated fair price based on SecondShelf pricing methodology. Actual agreed price may vary based on photo inspection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

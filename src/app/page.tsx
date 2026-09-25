import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhatIsSecondShelf } from '@/components/sections/WhatIsSecondShelf';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FairPriceCalculator } from '@/components/sections/FairPriceCalculator';
import { WhyFairPricing } from '@/components/sections/WhyFairPricing';
import { BuyAndSellCards } from '@/components/sections/BuyAndSellCards';
import { InstagramHub } from '@/components/sections/InstagramHub';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. What is SecondShelf? */}
      <WhatIsSecondShelf />

      {/* 3. How It Works */}
      <HowItWorks />

      {/* 4. Fair Price Calculator */}
      <FairPriceCalculator />

      {/* 5. Why Fair Pricing? */}
      <WhyFairPricing />

      {/* 6 & 7. Sell Your Book / Find a Book */}
      <BuyAndSellCards />

      {/* 8. Instagram Hub */}
      <InstagramHub />
    </div>
  );
}

/**
 * SecondShelf Fair Price Calculation Engine
 * 
 * This module isolates all pricing rules, depreciation ratios, and condition adjustments.
 * Team members can easily modify percentages and rules below without modifying UI code.
 */

export type BookCondition = 'like-new' | 'excellent' | 'good' | 'fair';
export type BookAge = 'under-1-year' | '1-to-3-years' | '3-to-5-years' | 'over-5-years';
export type BookMarkings = 'none' | 'light-pencil' | 'pen-highlighter';
export type CoverCondition = 'pristine' | 'minor-shelfwear' | 'creased-worn';
export type DemandTier = 'academic-competitive' | 'bestseller' | 'general' | 'niche-classic';

export interface CalculatorInputs {
  title?: string;
  originalPrice: number;
  condition: BookCondition;
  age: BookAge;
  markings: BookMarkings;
  coverCondition: CoverCondition;
  demandTier: DemandTier;
}

export interface CalculationBreakdown {
  basePercentage: number;
  conditionModifier: number;
  ageModifier: number;
  markingsModifier: number;
  coverModifier: number;
  demandModifier: number;
  finalPercentage: number;
}

export interface FairPriceEstimate {
  fairPrice: number;
  rangeLow: number;
  rangeHigh: number;
  originalPrice: number;
  discountFromMRP: number;
  breakdown: CalculationBreakdown;
  explanation: string[];
}

/**
 * Base percentage of original MRP retained by condition tier
 */
const BASE_CONDITION_RETENTION: Record<BookCondition, number> = {
  'like-new': 0.65, // ~65% of MRP
  'excellent': 0.52, // ~52% of MRP
  'good': 0.40, // ~40% of MRP
  'fair': 0.26, // ~26% of MRP
};

/**
 * Age adjustment factor (newer books retain slightly higher value)
 */
const AGE_MODIFIERS: Record<BookAge, number> = {
  'under-1-year': 0.04, // +4%
  '1-to-3-years': 0.00, // 0%
  '3-to-5-years': -0.04, // -4%
  'over-5-years': -0.08, // -8%
};

/**
 * Markings adjustment factor
 */
const MARKINGS_MODIFIERS: Record<BookMarkings, number> = {
  'none': 0.00,
  'light-pencil': -0.03, // -3%
  'pen-highlighter': -0.07, // -7%
};

/**
 * Cover / binding wear adjustment factor
 */
const COVER_MODIFIERS: Record<CoverCondition, number> = {
  'pristine': 0.02, // +2%
  'minor-shelfwear': 0.00,
  'creased-worn': -0.05, // -5%
};

/**
 * Demand tier adjustment (academic/curriculum retains strong demand, niche varies)
 */
const DEMAND_MODIFIERS: Record<DemandTier, number> = {
  'academic-competitive': 0.05, // High demand exams/university texts
  'bestseller': 0.03, // Popular contemporary titles
  'general': 0.00,
  'niche-classic': -0.02,
};

/**
 * Main calculation function running completely in the browser
 */
export function calculateFairPrice(inputs: CalculatorInputs): FairPriceEstimate {
  const original = Math.max(0, Number(inputs.originalPrice) || 0);

  if (original <= 0) {
    return {
      fairPrice: 0,
      rangeLow: 0,
      rangeHigh: 0,
      originalPrice: 0,
      discountFromMRP: 0,
      breakdown: {
        basePercentage: 0,
        conditionModifier: 0,
        ageModifier: 0,
        markingsModifier: 0,
        coverModifier: 0,
        demandModifier: 0,
        finalPercentage: 0,
      },
      explanation: ['Enter a valid original book price to see valuation.'],
    };
  }

  const basePercentage = BASE_CONDITION_RETENTION[inputs.condition];
  const ageMod = AGE_MODIFIERS[inputs.age];
  const markingsMod = MARKINGS_MODIFIERS[inputs.markings];
  const coverMod = COVER_MODIFIERS[inputs.coverCondition];
  const demandMod = DEMAND_MODIFIERS[inputs.demandTier];

  // Calculate composite retention percentage, bounded between 15% and 75% of MRP
  let finalPercentage = basePercentage + ageMod + markingsMod + coverMod + demandMod;
  finalPercentage = Math.min(0.75, Math.max(0.18, finalPercentage));

  // Compute calculated fair price rounded to nearest ₹5 or ₹10
  const rawFairPrice = original * finalPercentage;
  const roundedFairPrice = Math.round(rawFairPrice / 5) * 5;

  // Fair price spread bracket (±7%)
  const spread = Math.round((roundedFairPrice * 0.07) / 5) * 5 || 10;
  const rangeLow = Math.max(30, roundedFairPrice - spread);
  const rangeHigh = roundedFairPrice + spread;
  const discountFromMRP = Math.round(((original - roundedFairPrice) / original) * 100);

  // Generate transparent rationale points
  const explanation: string[] = [];

  switch (inputs.condition) {
    case 'like-new':
      explanation.push('Pristine state preserves up to ~65% of the original bookstore value.');
      break;
    case 'excellent':
      explanation.push('Well-preserved reading copy with firm binding retains ~50%–55% of value.');
      break;
    case 'good':
      explanation.push('Honest pre-owned condition retains ~38%–42% of original retail price.');
      break;
    case 'fair':
      explanation.push('Visible wear or reading mileage balances at budget pricing (~22%–28%).');
      break;
  }

  if (inputs.markings === 'none') {
    explanation.push('Zero highlights or pen annotations preserve maximum readability.');
  } else if (inputs.markings === 'pen-highlighter') {
    explanation.push('Highlighter or pen marks slightly reduce value for subsequent readers.');
  }

  if (inputs.demandTier === 'academic-competitive') {
    explanation.push('Academic and exam reference titles hold steady student demand.');
  }

  return {
    fairPrice: roundedFairPrice,
    rangeLow,
    rangeHigh,
    originalPrice: original,
    discountFromMRP,
    breakdown: {
      basePercentage,
      conditionModifier: ageMod,
      ageModifier: ageMod,
      markingsModifier: markingsMod,
      coverModifier: coverMod,
      demandModifier: demandMod,
      finalPercentage,
    },
    explanation,
  };
}

/**
 * Format valuation summary for copying directly into an Instagram Direct Message
 */
export function formatInstagramDMSummary(
  inputs: CalculatorInputs,
  estimate: FairPriceEstimate,
  action: 'selling' | 'buying' = 'selling'
): string {
  const bookName = inputs.title?.trim() || 'My Book';
  const conditionLabel = {
    'like-new': 'Like New',
    'excellent': 'Excellent',
    'good': 'Good',
    'fair': 'Fair',
  }[inputs.condition];

  if (action === 'selling') {
    return (
      `Hi SecondShelf! I calculated a fair price on your website and would like to sell my book:\n\n` +
      `📖 Title: ${bookName}\n` +
      `🏷️ Original MRP: ₹${estimate.originalPrice}\n` +
      `✨ Condition: ${conditionLabel}\n` +
      `💰 Estimated Fair Price: ₹${estimate.fairPrice} (Range: ₹${estimate.rangeLow} - ₹${estimate.rangeHigh})\n\n` +
      `Could we coordinate this via SecondShelf?`
    );
  } else {
    return (
      `Hi SecondShelf! I'm looking to buy this book at a fair price:\n\n` +
      `📖 Title: ${bookName}\n` +
      `🎯 Target Fair Budget: ~₹${estimate.fairPrice}\n\n` +
      `Do you have a copy available on your shelf?`
    );
  }
}

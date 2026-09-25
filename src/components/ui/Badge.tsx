import React from 'react';
import { BookCondition } from '@/types';

interface BadgeProps {
  condition: BookCondition;
  size?: 'sm' | 'md';
}

export function ConditionBadge({ condition, size = 'sm' }: BadgeProps) {
  const sizeClasses = size === 'sm' ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3 py-1';

  switch (condition) {
    case 'Like New':
      return (
        <span
          className={`inline-flex items-center font-medium rounded-full bg-[#111111] text-[#FAFAF7] tracking-tight ${sizeClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
          Like New
        </span>
      );
    case 'Excellent':
      return (
        <span
          className={`inline-flex items-center font-medium rounded-full bg-[#F2F2EE] text-[#111111] border border-[#E5E5E0] tracking-tight ${sizeClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-1.5" />
          Excellent
        </span>
      );
    case 'Good':
      return (
        <span
          className={`inline-flex items-center font-medium rounded-full bg-[#F2F2EE] text-[#555555] border border-[#E5E5E0] tracking-tight ${sizeClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5" />
          Good
        </span>
      );
    case 'Fair':
      return (
        <span
          className={`inline-flex items-center font-medium rounded-full bg-[#F2F2EE] text-[#6E6E73] border border-[#E5E5E0] tracking-tight ${sizeClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mr-1.5" />
          Fair
        </span>
      );
    default:
      return null;
  }
}

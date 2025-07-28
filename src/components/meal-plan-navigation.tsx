'use client';

import type { DayGroup } from '@/types/meal-plan';

interface MealPlanNavigationProps {
  groups: DayGroup[];
  currentIndex: number;
  onGroupChange: (index: number) => void;
}

export function MealPlanNavigation({
  groups,
  currentIndex,
  onGroupChange,
}: MealPlanNavigationProps) {
  return (
    <nav className="flex flex-wrap justify-center gap-3">
      {groups.map((group, index) => (
        <button
          key={group.name}
          type="button"
          onClick={() => onGroupChange(index)}
          className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-sans ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
            index === currentIndex
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg transform -translate-y-0.5'
              : 'border bg-white/80 backdrop-blur-sm hover:bg-white border-stone-200 text-stone-700 hover:text-stone-900 hover:border-emerald-300'
          }`}>
          {group.name}
        </button>
      ))}
    </nav>
  );
}

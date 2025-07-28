'use client';

import type { MealData, MealType } from '@/types/meal-plan';

interface MealCardProps {
  mealType: MealType;
  mealData: MealData;
  config: { icon: string; label: string };
  onClick: () => void;
}

export function MealCard({ mealData, config, onClick }: MealCardProps) {
  if (!mealData) return null;

  return (
    <div
      className="rounded-lg text-card-foreground group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
      onClick={onClick}
      data-slot="card">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
            <span>{config.icon}</span>
          </div>
          <div>
            <h3 className="font-semibold text-stone-800 group-hover:text-emerald-600 transition-colors">
              {mealData.title}
            </h3>
            <p className="text-xs text-stone-500 uppercase tracking-wide">
              {config.label}
            </p>
          </div>
        </div>

        <ul className="space-y-2">
          {mealData.items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-stone-600">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm leading-relaxed">
                {item.name}
                {item.quantity && (
                  <span className="text-stone-500 ml-1">({item.quantity})</span>
                )}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-4 border-t border-stone-100">
          <p className="text-xs text-stone-500 group-hover:text-emerald-600 transition-colors">
            Click for nutritional details &rarr;
          </p>
        </div>
      </div>
    </div>
  );
}

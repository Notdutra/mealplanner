'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const guidelines = [
  {
    title: 'Consistent Hydration',
    content:
      'Drink 2 to 3 liters of water per day. Start your day with a large glass of water and stay hydrated throughout.',
  },
  {
    title: 'Preparation Methods',
    content:
      'Prefer cooking your food by grilling, baking, steaming, or sautéing with a minimal amount of extra virgin olive oil.',
  },
  {
    title: 'Quality Foods',
    content: 'Always opt for fresh and minimally processed foods.',
  },
  {
    title: 'Listen to Your Body',
    content:
      'The portion sizes indicated are suggestions. Adjust them based on your hunger, satiety, and physical activity level. The goal is to eat until you feel satisfied, not overly full.',
  },
  {
    title: 'Professional Guidance',
    content:
      'This plan is a guide. For a fully personalized and safe nutritional program, always consult a nutritionist or qualified health professional.',
  },
];

export function GuidelinesSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-lg text-card-foreground mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <div className="p-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-left group p-3">
          <h2 className="text-xl font-bold text-stone-800 group-hover:text-emerald-600 transition-colors">
            Essential Guidelines for Success
          </h2>
          <ChevronDown
            className={`w-5 h-5 text-stone-500 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }}`}>
          <div className="border-t border-stone-200 pt-3">
            <div className="grid gap-4 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="space-y-2">
                  <h3 className="font-medium text-stone-800 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    {guideline.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed pl-4">
                    {guideline.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

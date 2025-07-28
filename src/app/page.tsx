'use client';

import { useState, useEffect } from 'react';
import { MealPlanHeader } from '@/components/meal-plan-header';
import { GuidelinesSection } from '@/components/guidelines-section';
import { MealPlanNavigation } from '@/components/meal-plan-navigation';
import { MealGrid } from '@/components/meal-grid';
import { NutritionModal } from '@/components/nutrition-modal';
import { mealPlanData, dayGroups } from '@/lib/meal-data';
import { MealType } from '@/types/meal-plan';
import type { MealData } from '@/types/meal-plan';
export default function MealPlanPage() {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [selectedMeal, setSelectedMeal] = useState<{
    type: MealType;
    data: MealData;
  } | null>(null);

  // Set initial group based on current day
  useEffect(() => {
    const today = new Date().getDay();
    const foundGroupIndex = dayGroups.findIndex((group) =>
      group.days.includes(today)
    );
    if (foundGroupIndex !== -1) {
      setCurrentGroupIndex(foundGroupIndex);
    }
  }, []);

  const currentGroup = dayGroups[currentGroupIndex];
  const currentMealPlan = {
    breakfast: mealPlanData.breakfast[currentGroup.option],
    postWorkout: mealPlanData.postWorkout[currentGroup.option],
    lunch: mealPlanData.lunch[currentGroup.option],
    afternoonSnack: mealPlanData.afternoonSnack[currentGroup.option],
    dinner: mealPlanData.dinner[currentGroup.option],
    beforeBed: mealPlanData.beforeBed[currentGroup.option],
  };

  const handleMealClick = (mealType: MealType) => {
    setSelectedMeal({
      type: mealType,
      data: currentMealPlan[mealType],
    });
  };

  const handleGroupChange = (index: number) => {
    setCurrentGroupIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <MealPlanHeader />

        <GuidelinesSection />

        <main className="space-y-8">
          <MealPlanNavigation
            groups={dayGroups}
            currentIndex={currentGroupIndex}
            onGroupChange={handleGroupChange}
          />

          <MealGrid
            mealPlan={currentMealPlan}
            onMealClick={handleMealClick}
          />
        </main>

        <NutritionModal
          meal={selectedMeal}
          onClose={() => setSelectedMeal(null)}
        />
      </div>
    </div>
  );
}

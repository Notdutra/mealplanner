"use client"

import { MealCard } from "@/components/meal-card"
import type { MealPlan, MealType } from "@/types/meal-plan"

interface MealGridProps {
  mealPlan: MealPlan
  onMealClick: (mealType: MealType) => void
}

const mealTypeConfig = {
  breakfast: { icon: "🍳", label: "Breakfast" },
  postWorkout: { icon: "🏋️", label: "Post-Workout" },
  lunch: { icon: "🥗", label: "Lunch" },
  afternoonSnack: { icon: "🥪", label: "Afternoon Snack" },
  dinner: { icon: "🌙", label: "Dinner" },
  beforeBed: { icon: "⭐", label: "Before Bed" },
}

export function MealGrid({ mealPlan, onMealClick }: MealGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {Object.entries(mealPlan).map(([mealType, mealData]) => (
        <MealCard
          key={mealType}
          mealType={mealType as MealType}
          mealData={mealData}
          config={mealTypeConfig[mealType as MealType]}
          onClick={() => onMealClick(mealType as MealType)}
        />
      ))}
    </div>
  )
}

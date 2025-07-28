'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { MealType, MealData } from '@/types/meal-plan';

interface NutritionModalProps {
  meal: {
    type: MealType;
    data: MealData;
  } | null;
  onClose: () => void;
}

export function NutritionModal({ meal, onClose }: NutritionModalProps) {
  if (!meal) return null;

  const totalNutrition = meal.data.items.reduce(
    (total, item) => ({
      kcal: total.kcal + item.nutrition.kcal,
      protein: total.protein + item.nutrition.protein,
      carbs: total.carbs + item.nutrition.carbs,
      fat: total.fat + item.nutrition.fat,
    }),
    { kcal: 0, protein: 0, carbs: 0, fat: 0 }
  );

  return (
    <>
      {/* Overlay handled by DialogOverlay in DialogContent */}
      <Dialog
        open={!!meal}
        onOpenChange={onClose}>
        <DialogContent className="max-w-md max-h-[80vh] sm:max-h-[90vh] overflow-y-auto px-2 py-4 sm:px-6 sm:py-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-stone-800 pr-8 text-center">
              {meal.data.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Total Nutrition Summary */}
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-4">
              <h3 className="font-semibold text-emerald-800 mb-3">
                Total Nutrition
              </h3>
              <div className="grid grid-cols-2 gap-x-0 gap-y-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-700">
                    {totalNutrition.kcal}
                  </div>
                  <div className="text-xs text-emerald-600 uppercase tracking-wide">
                    Calories
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-700">
                    {totalNutrition.protein.toFixed(1)}g
                  </div>
                  <div className="text-xs text-emerald-600 uppercase tracking-wide">
                    Protein
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-700">
                    {totalNutrition.carbs.toFixed(1)}g
                  </div>
                  <div className="text-xs text-emerald-600 uppercase tracking-wide">
                    Carbs
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-700">
                    {totalNutrition.fat.toFixed(1)}g
                  </div>
                  <div className="text-xs text-emerald-600 uppercase tracking-wide">
                    Fat
                  </div>
                </div>
              </div>
            </div>

            {/* Individual Items */}
            <div className="space-y-4">
              <h3 className="font-semibold text-stone-800">Ingredients</h3>
              {meal.data.items.map((item, index) => (
                <div
                  key={index}
                  className="border border-stone-200 rounded-lg p-4 hover:bg-stone-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-stone-800">{item.name}</h4>
                    {item.quantity && (
                      <span className="text-sm text-stone-500 bg-stone-100 px-2 py-1 rounded">
                        {item.quantity}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-stone-700">
                        {item.nutrition.kcal}
                      </div>
                      <div className="text-xs text-stone-500">kcal</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-stone-700">
                        {item.nutrition.protein}g
                      </div>
                      <div className="text-xs text-stone-500">protein</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-stone-700">
                        {item.nutrition.carbs}g
                      </div>
                      <div className="text-xs text-stone-500">carbs</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-stone-700">
                        {item.nutrition.fat}g
                      </div>
                      <div className="text-xs text-stone-500">fat</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

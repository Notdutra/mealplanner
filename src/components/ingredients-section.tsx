import React from 'react';

export type Ingredient = {
  name: string;
  amount: string;
  nutrition: {
    kcal: string;
    protein: string;
    carbs: string;
    fat: string;
  };
};

export function IngredientsSection({
  ingredients,
  title = 'Ingredients',
}: {
  ingredients: Ingredient[];
  title?: string;
}) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-stone-800">{title}</h3>
      {ingredients.map((ingredient, i) => (
        <div
          key={ingredient.name + i}
          className="border border-stone-200 rounded-lg p-4 hover:bg-stone-50 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-stone-800">{ingredient.name}</h4>
            <span className="text-sm text-stone-500 bg-stone-100 px-2 py-1 rounded">
              {ingredient.amount}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-sm">
            <div className="text-center">
              <div className="font-medium text-stone-700">
                {ingredient.nutrition.kcal}
              </div>
              <div className="text-xs text-stone-500">kcal</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-stone-700">
                {ingredient.nutrition.protein}
              </div>
              <div className="text-xs text-stone-500">protein</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-stone-700">
                {ingredient.nutrition.carbs}
              </div>
              <div className="text-xs text-stone-500">carbs</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-stone-700">
                {ingredient.nutrition.fat}
              </div>
              <div className="text-xs text-stone-500">fat</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

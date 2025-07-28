import type { MealData, MealPlanOption, DayGroup } from "@/types/meal-plan"

export const mealPlanData: Record<string, Record<MealPlanOption, MealData>> = {
  breakfast: {
    A: {
      title: "High-Protein Breakfast",
      items: [
        {
          name: "2 boiled eggs",
          quantity: "100g",
          nutrition: { kcal: 143, protein: 13, carbs: 1, fat: 10 },
        },
        {
          name: "2 tbsp oats",
          quantity: "30g",
          nutrition: { kcal: 114, protein: 4, carbs: 20, fat: 2.5 },
        },
        {
          name: "Sliced banana",
          quantity: "80g",
          nutrition: { kcal: 72, protein: 0.9, carbs: 19, fat: 0.2 },
        },
        {
          name: "Coffee",
          quantity: "200ml, no sugar",
          nutrition: { kcal: 0, protein: 0, carbs: 0, fat: 0 },
        },
      ],
    },
    B: {
      title: "Chicken & Tapioca Breakfast",
      items: [
        {
          name: "Tapioca",
          quantity: "50g",
          nutrition: { kcal: 180, protein: 0, carbs: 45, fat: 0 },
        },
        {
          name: "Shredded chicken",
          quantity: "80g",
          nutrition: { kcal: 130, protein: 25, carbs: 0, fat: 3 },
        },
        {
          name: "Papaya",
          quantity: "100g",
          nutrition: { kcal: 43, protein: 0.5, carbs: 11, fat: 0.1 },
        },
      ],
    },
    C: {
      title: "Veggie Omelet Breakfast",
      items: [
        {
          name: "Omelet with 2 eggs",
          quantity: "100g",
          nutrition: { kcal: 143, protein: 13, carbs: 1, fat: 10 },
        },
        {
          name: "Tomato & kale",
          quantity: "50g",
          nutrition: { kcal: 15, protein: 1, carbs: 3, fat: 0.2 },
        },
        {
          name: "Small banana",
          quantity: "80g",
          nutrition: { kcal: 72, protein: 0.9, carbs: 19, fat: 0.2 },
        },
      ],
    },
  },
  postWorkout: {
    A: {
      title: "Recovery Shake A",
      items: [
        {
          name: "Whey protein powder",
          quantity: "33g",
          nutrition: { kcal: 140, protein: 24, carbs: 2, fat: 3.5 },
        },
        {
          name: "Almond milk",
          quantity: "200ml",
          nutrition: { kcal: 25, protein: 1, carbs: 1, fat: 2 },
        },
        {
          name: "5 almonds",
          quantity: "7g",
          nutrition: { kcal: 40, protein: 1.4, carbs: 1.4, fat: 3.5 },
        },
      ],
    },
    B: {
      title: "Recovery Shake B",
      items: [
        {
          name: "Whey protein powder",
          quantity: "33g",
          nutrition: { kcal: 140, protein: 24, carbs: 2, fat: 3.5 },
        },
        {
          name: "Almond milk",
          quantity: "200ml",
          nutrition: { kcal: 25, protein: 1, carbs: 1, fat: 2 },
        },
        {
          name: "Brazil nuts",
          quantity: "10g",
          nutrition: { kcal: 65, protein: 1.4, carbs: 1.2, fat: 6.6 },
        },
      ],
    },
    C: {
      title: "Recovery Shake C",
      items: [
        {
          name: "Whey protein powder",
          quantity: "33g",
          nutrition: { kcal: 140, protein: 24, carbs: 2, fat: 3.5 },
        },
        {
          name: "Coconut milk",
          quantity: "200ml",
          nutrition: { kcal: 40, protein: 0.4, carbs: 1, fat: 4 },
        },
        {
          name: "Pumpkin seeds",
          quantity: "10g",
          nutrition: { kcal: 56, protein: 2.5, carbs: 1.5, fat: 4.5 },
        },
      ],
    },
  },
  lunch: {
    A: {
      title: "Balanced Lunch A",
      items: [
        {
          name: "Grilled chicken",
          quantity: "150g",
          nutrition: { kcal: 240, protein: 45, carbs: 0, fat: 6 },
        },
        {
          name: "Brown rice",
          quantity: "70g",
          nutrition: { kcal: 80, protein: 1.5, carbs: 17, fat: 0.5 },
        },
        {
          name: "Beans",
          quantity: "70g",
          nutrition: { kcal: 70, protein: 4.5, carbs: 12, fat: 0.5 },
        },
        {
          name: "Mixed salad",
          quantity: "120g",
          nutrition: { kcal: 20, protein: 1, carbs: 4, fat: 0.2 },
        },
        {
          name: "Olive oil",
          quantity: "10g",
          nutrition: { kcal: 90, protein: 0, carbs: 0, fat: 10 },
        },
      ],
    },
    B: {
      title: "Balanced Lunch B",
      items: [
        {
          name: "Lean ground beef",
          quantity: "150g",
          nutrition: { kcal: 250, protein: 40, carbs: 0, fat: 10 },
        },
        {
          name: "Cooked quinoa",
          quantity: "80g",
          nutrition: { kcal: 100, protein: 3.5, carbs: 18, fat: 1.5 },
        },
        {
          name: "Sautéed cauliflower & zucchini",
          quantity: "120g",
          nutrition: { kcal: 30, protein: 2, carbs: 6, fat: 0.5 },
        },
      ],
    },
    C: {
      title: "Balanced Lunch C",
      items: [
        {
          name: "Baked fish",
          quantity: "150g",
          nutrition: { kcal: 200, protein: 30, carbs: 0, fat: 8 },
        },
        {
          name: "Cooked sweet potato",
          quantity: "80g",
          nutrition: { kcal: 70, protein: 1.5, carbs: 16, fat: 0.1 },
        },
        {
          name: "Mixed salad",
          quantity: "120g",
          nutrition: { kcal: 20, protein: 1, carbs: 4, fat: 0.2 },
        },
        {
          name: "Olive oil",
          quantity: "10g",
          nutrition: { kcal: 90, protein: 0, carbs: 0, fat: 10 },
        },
      ],
    },
  },
  afternoonSnack: {
    A: {
      title: "Afternoon Snack A",
      items: [
        {
          name: "Whole wheat bread",
          quantity: "50g",
          nutrition: { kcal: 120, protein: 6, carbs: 22, fat: 1.5 },
        },
        {
          name: "Whole peanut butter",
          quantity: "15g",
          nutrition: { kcal: 90, protein: 3.5, carbs: 3, fat: 7.5 },
        },
        {
          name: "Herbal tea",
          quantity: "",
          nutrition: { kcal: 0, protein: 0, carbs: 0, fat: 0 },
        },
      ],
    },
    B: {
      title: "Afternoon Snack B",
      items: [
        {
          name: "Whole wheat bread",
          quantity: "50g",
          nutrition: { kcal: 120, protein: 6, carbs: 22, fat: 1.5 },
        },
        {
          name: "Boiled egg",
          quantity: "50g",
          nutrition: { kcal: 72, protein: 6.5, carbs: 0.5, fat: 5 },
        },
        {
          name: "Tomato",
          quantity: "50g",
          nutrition: { kcal: 9, protein: 0.5, carbs: 2, fat: 0.1 },
        },
      ],
    },
    C: {
      title: "Afternoon Snack C",
      items: [
        {
          name: "Plant-based milk",
          quantity: "200ml",
          nutrition: { kcal: 50, protein: 2, carbs: 5, fat: 2.5 },
        },
        {
          name: "Oats",
          quantity: "15g",
          nutrition: { kcal: 57, protein: 2, carbs: 10, fat: 1.25 },
        },
        {
          name: "Walnuts",
          quantity: "10g",
          nutrition: { kcal: 65, protein: 1.5, carbs: 1.4, fat: 6.5 },
        },
      ],
    },
  },
  dinner: {
    A: {
      title: "Light Dinner A",
      items: [
        {
          name: "Grilled fish",
          quantity: "150g",
          nutrition: { kcal: 200, protein: 30, carbs: 0, fat: 8 },
        },
        {
          name: "Pumpkin puree",
          quantity: "100g",
          nutrition: { kcal: 26, protein: 1, carbs: 6.5, fat: 0.1 },
        },
        {
          name: "Cooked broccoli & carrots",
          quantity: "120g",
          nutrition: { kcal: 40, protein: 3, carbs: 8, fat: 0.5 },
        },
      ],
    },
    B: {
      title: "Light Dinner B",
      items: [
        {
          name: "Grilled chicken",
          quantity: "150g",
          nutrition: { kcal: 240, protein: 45, carbs: 0, fat: 6 },
        },
        {
          name: "Brown rice",
          quantity: "70g",
          nutrition: { kcal: 80, protein: 1.5, carbs: 17, fat: 0.5 },
        },
        {
          name: "Beans",
          quantity: "70g",
          nutrition: { kcal: 70, protein: 4.5, carbs: 12, fat: 0.5 },
        },
        {
          name: "Green salad",
          quantity: "with olive oil (10g)",
          nutrition: { kcal: 110, protein: 1, carbs: 4, fat: 10.2 },
        },
      ],
    },
    C: {
      title: "Light Dinner C",
      items: [
        {
          name: "Lean beef",
          quantity: "150g",
          nutrition: { kcal: 280, protein: 45, carbs: 0, fat: 10 },
        },
        {
          name: "Rice",
          quantity: "70g",
          nutrition: { kcal: 80, protein: 1.5, carbs: 17, fat: 0.5 },
        },
        {
          name: "Beans",
          quantity: "70g",
          nutrition: { kcal: 70, protein: 4.5, carbs: 12, fat: 0.5 },
        },
        {
          name: "Cooked beetroot",
          quantity: "80g",
          nutrition: { kcal: 35, protein: 1.5, carbs: 8, fat: 0.1 },
        },
      ],
    },
  },
  beforeBed: {
    A: {
      title: "Bedtime Snack (Optional)",
      items: [
        {
          name: "Coconut milk",
          quantity: "150ml",
          nutrition: { kcal: 30, protein: 0.3, carbs: 0.7, fat: 3 },
        },
        {
          name: "Chia seeds",
          quantity: "10g",
          nutrition: { kcal: 48, protein: 1.7, carbs: 4.2, fat: 3 },
        },
        {
          name: "Cocoa powder",
          quantity: "5g",
          nutrition: { kcal: 10, protein: 1, carbs: 1.5, fat: 0.5 },
        },
      ],
    },
    B: {
      title: "Bedtime Snack",
      items: [
        {
          name: "Dark chocolate 70% cocoa",
          quantity: "25g",
          nutrition: { kcal: 140, protein: 2, carbs: 10, fat: 10 },
        },
        {
          name: "Almonds",
          quantity: "10g",
          nutrition: { kcal: 58, protein: 2.1, carbs: 2.1, fat: 5 },
        },
      ],
    },
    C: {
      title: "Bedtime Snack",
      items: [
        {
          name: "Tea",
          quantity: "",
          nutrition: { kcal: 0, protein: 0, carbs: 0, fat: 0 },
        },
        {
          name: "Cashews",
          quantity: "15g",
          nutrition: { kcal: 85, protein: 2.5, carbs: 4.5, fat: 7 },
        },
      ],
    },
  },
}

export const dayGroups: DayGroup[] = [
  { name: "Meal Plan A", option: "A", days: [0, 1, 4] }, // Sunday, Monday, Thursday
  { name: "Meal Plan B", option: "B", days: [2, 5] }, // Tuesday, Friday
  { name: "Meal Plan C", option: "C", days: [3, 6] }, // Wednesday, Saturday
]

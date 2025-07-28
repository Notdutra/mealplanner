export interface NutritionInfo {
  kcal: number
  protein: number
  carbs: number
  fat: number
}

export interface MealItem {
  name: string
  quantity: string
  nutrition: NutritionInfo
}

export interface MealData {
  title: string
  items: MealItem[]
}

export type MealPlanOption = "A" | "B" | "C"

export type MealType = "breakfast" | "postWorkout" | "lunch" | "afternoonSnack" | "dinner" | "beforeBed"

export interface MealPlan {
  breakfast: MealData
  postWorkout: MealData
  lunch: MealData
  afternoonSnack: MealData
  dinner: MealData
  beforeBed: MealData
}

export interface DayGroup {
  name: string
  option: MealPlanOption
  days: number[]
}

export function MealPlanHeader() {
  return (
    <header className="text-center mb-12">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center">
          <span className="text-2xl">🍽️</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent">
          Weekly Meal Plan
        </h1>
      </div>
      <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
        Your interactive guide to a week of healthy eating for fat loss. Click on any meal to view detailed nutritional
        information.
      </p>
    </header>
  )
}

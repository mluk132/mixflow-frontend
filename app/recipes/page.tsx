'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  MusicalNoteIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  FireIcon,
  HeartIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { api, Recipe } from '@/lib/api'

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMealType, setSelectedMealType] = useState<string>()

  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert']

  useEffect(() => {
    loadRecipes()
  }, [selectedMealType])

  const loadRecipes = async () => {
    try {
      setLoading(true)
      const data = await api.getRecipes({ meal_type: selectedMealType })
      setRecipes(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load recipes')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      loadRecipes()
      return
    }
    try {
      setLoading(true)
      const data = await api.getRecipes({ search: searchQuery, meal_type: selectedMealType })
      setRecipes(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed')
    } finally {
      setLoading(false)
    }
  }

  const toggleSave = async (recipeId: string) => {
    try {
      await api.toggleSaveRecipe(recipeId)
      setRecipes(recipes.map(r => 
        r.id === recipeId ? { ...r, is_saved: !r.is_saved } : r
      ))
    } catch (err) {
      console.error('Failed to toggle save:', err)
    }
  }

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-700'
      case 'medium': return 'bg-yellow-100 text-yellow-700'
      case 'hard': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mixflow
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/recipes" className="text-indigo-600 font-medium">
                Recipes
              </Link>
              <Link href="/meal-plans" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Meal Plans
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Profile
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Recipe Collection</h1>
            <p className="text-gray-600">Discover delicious meal prep recipes</p>
          </div>
          <Link href="/create-recipe" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
            <PlusIcon className="h-5 w-5" />
            Add Recipe
          </Link>
        </div>

        <div className="mb-8">
          <div className="relative max-w-2xl mb-6">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedMealType(undefined)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedMealType
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All
            </button>
            {mealTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedMealType(selectedMealType === type ? undefined : type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedMealType === type
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600">Loading recipes...</p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 mb-6">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {recipes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No recipes found.</p>
                <Link href="/create-recipe" className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                  Create Your First Recipe
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                  <div key={recipe.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all">
                    <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100">
                      {recipe.image_url ? (
                        <img src={recipe.image_url} alt={recipe.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-6xl">
                          🍽️
                        </div>
                      )}
                      <button
                        onClick={() => toggleSave(recipe.id)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                      >
                        {recipe.is_saved ? (
                          <HeartSolidIcon className="h-5 w-5 text-red-500" />
                        ) : (
                          <HeartIcon className="h-5 w-5 text-gray-700" />
                        )}
                      </button>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {recipe.meal_type && (
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">
                            {recipe.meal_type}
                          </span>
                        )}
                        {recipe.difficulty && (
                          <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(recipe.difficulty)}`}>
                            {recipe.difficulty}
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-lg mb-2">{recipe.name}</h3>
                      {recipe.description && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                      )}

                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        {recipe.prep_time_minutes && (
                          <span className="flex items-center gap-1">
                            <ClockIcon className="h-4 w-4" />
                            {recipe.prep_time_minutes + (recipe.cook_time_minutes || 0)} min
                          </span>
                        )}
                        {recipe.calories_per_serving && (
                          <span className="flex items-center gap-1">
                            <FireIcon className="h-4 w-4" />
                            {recipe.calories_per_serving} cal
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

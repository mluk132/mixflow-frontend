'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  CalendarIcon,
  PlusIcon,
  ClockIcon,
  FireIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { api, MealPlan } from '@/lib/api'

export default function MealPlansPage() {
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadMealPlans()
  }, [])

  const loadMealPlans = async () => {
    try {
      setLoading(true)
      const data = await api.getMealPlans()
      setMealPlans(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load meal plans')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
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
              <Link href="/recipes" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Recipes
              </Link>
              <Link href="/meal-plans" className="text-indigo-600 font-medium">
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
            <h1 className="text-4xl font-bold mb-2">Meal Plans</h1>
            <p className="text-gray-600">Plan your meals for the week</p>
          </div>
          <Link href="/create-meal-plan" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
            <PlusIcon className="h-5 w-5" />
            Create Plan
          </Link>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600">Loading meal plans...</p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 mb-6">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {mealPlans.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📅</div>
                <p className="text-gray-600 mb-4">No meal plans yet.</p>
                <Link href="/create-meal-plan" className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                  Create Your First Meal Plan
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mealPlans.map((plan) => (
                  <div key={plan.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
                        {plan.description && (
                          <p className="text-gray-600 text-sm mb-3">{plan.description}</p>
                        )}
                      </div>
                      {plan.active && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          <CheckCircleIcon className="h-4 w-4" />
                          Active
                        </span>
                      )}
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{formatDate(plan.start_date)} - {formatDate(plan.end_date)}</span>
                      </div>
                      {plan.goal && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="font-medium">Goal:</span>
                          <span>{plan.goal}</span>
                        </div>
                      )}
                      {plan.target_calories && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FireIcon className="h-4 w-4" />
                          <span>{plan.target_calories} cal/day</span>
                        </div>
                      )}
                      {plan.recipe_count !== undefined && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="font-medium">{plan.recipe_count} recipes</span>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Link 
                        href={`/meal-plans/${plan.id}`}
                        className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-center text-sm font-medium"
                      >
                        View Plan
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                        Edit
                      </button>
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

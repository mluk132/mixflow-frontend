const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://mixflow-api.fly.dev';

export interface Recipe {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  cuisine_type?: string;
  meal_type?: string;
  prep_time_minutes?: number;
  cook_time_minutes?: number;
  servings?: number;
  difficulty?: string;
  calories_per_serving?: number;
  protein_per_serving?: number;
  carbs_per_serving?: number;
  fats_per_serving?: number;
  instructions?: string;
  image_url?: string;
  is_public: boolean;
  created_at: string;
  is_saved?: boolean;
  ingredients?: Ingredient[];
}

export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  notes?: string;
}

export interface MealPlan {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  start_date: string;
  end_date: string;
  goal?: string;
  target_calories?: number;
  active: boolean;
  created_at: string;
  recipe_count?: number;
  recipes?: any[];
}

export interface GroceryList {
  id: string;
  user_id: string;
  meal_plan_id?: string;
  name: string;
  created_at: string;
  total_items?: number;
  checked_items?: number;
  items?: GroceryItem[];
}

export interface GroceryItem {
  id: string;
  name: string;
  quantity?: number;
  unit?: string;
  category?: string;
  checked: boolean;
}

export interface CreateRecipeData {
  name: string;
  description?: string;
  cuisine_type?: string;
  meal_type?: string;
  prep_time_minutes?: number;
  cook_time_minutes?: number;
  servings?: number;
  difficulty?: string;
  calories_per_serving?: number;
  protein_per_serving?: number;
  carbs_per_serving?: number;
  fats_per_serving?: number;
  instructions?: string;
  is_public?: boolean;
  ingredients?: Array<{
    name: string;
    quantity: number;
    unit: string;
    notes?: string;
  }>;
}

class ApiClient {
  private baseUrl: string;
  private userId: string;

  constructor() {
    this.baseUrl = API_URL;
    this.userId = '00000000-0000-0000-0000-000000000001';
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'x-user-id': this.userId,
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // Recipes
  async getRecipes(params?: { meal_type?: string; cuisine_type?: string; search?: string }): Promise<Recipe[]> {
    const queryParams = new URLSearchParams();
    if (params?.meal_type) queryParams.append('meal_type', params.meal_type);
    if (params?.cuisine_type) queryParams.append('cuisine_type', params.cuisine_type);
    if (params?.search) queryParams.append('search', params.search);
    
    const query = queryParams.toString();
    return this.request(`/api/recipes${query ? `?${query}` : ''}`);
  }

  async getRecipe(id: string): Promise<Recipe> {
    return this.request(`/api/recipes/${id}`);
  }

  async createRecipe(data: CreateRecipeData): Promise<Recipe> {
    return this.request('/api/recipes', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateRecipe(id: string, data: Partial<CreateRecipeData>): Promise<Recipe> {
    return this.request(`/api/recipes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteRecipe(id: string): Promise<{ message: string }> {
    return this.request(`/api/recipes/${id}`, {
      method: 'DELETE',
    });
  }

  async toggleSaveRecipe(id: string): Promise<{ saved: boolean; message: string }> {
    return this.request(`/api/recipes/${id}/save`, {
      method: 'POST',
    });
  }

  async getSavedRecipes(): Promise<Recipe[]> {
    return this.request('/api/recipes/saved/list');
  }

  // Meal Plans
  async getMealPlans(): Promise<MealPlan[]> {
    return this.request('/api/meal-plans');
  }

  async getMealPlan(id: string): Promise<MealPlan> {
    return this.request(`/api/meal-plans/${id}`);
  }

  async createMealPlan(data: {
    name: string;
    description?: string;
    start_date: string;
    end_date: string;
    goal?: string;
    target_calories?: number;
  }): Promise<MealPlan> {
    return this.request('/api/meal-plans', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateMealPlan(id: string, data: Partial<{
    name: string;
    description?: string;
    start_date: string;
    end_date: string;
    goal?: string;
    target_calories?: number;
  }>): Promise<MealPlan> {
    return this.request(`/api/meal-plans/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteMealPlan(id: string): Promise<{ message: string }> {
    return this.request(`/api/meal-plans/${id}`, {
      method: 'DELETE',
    });
  }

  async addRecipeToMealPlan(mealPlanId: string, data: {
    recipe_id: string;
    day_of_week: number;
    meal_type: string;
    servings?: number;
  }): Promise<any> {
    return this.request(`/api/meal-plans/${mealPlanId}/recipes`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async generateGroceryList(mealPlanId: string): Promise<GroceryList> {
    return this.request(`/api/meal-plans/${mealPlanId}/grocery-list`, {
      method: 'POST',
    });
  }

  // Grocery Lists
  async getGroceryLists(): Promise<GroceryList[]> {
    return this.request('/api/grocery-lists');
  }

  async getGroceryList(id: string): Promise<GroceryList> {
    return this.request(`/api/grocery-lists/${id}`);
  }

  async createGroceryList(data: {
    name: string;
    items?: Array<{
      name: string;
      quantity?: number;
      unit?: string;
      category?: string;
    }>;
  }): Promise<GroceryList> {
    return this.request('/api/grocery-lists', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async deleteGroceryList(id: string): Promise<{ message: string }> {
    return this.request(`/api/grocery-lists/${id}`, {
      method: 'DELETE',
    });
  }

  async addItemToGroceryList(listId: string, data: {
    name: string;
    quantity?: number;
    unit?: string;
    category?: string;
  }): Promise<GroceryItem> {
    return this.request(`/api/grocery-lists/${listId}/items`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async toggleGroceryItem(listId: string, itemId: string, checked: boolean): Promise<GroceryItem> {
    return this.request(`/api/grocery-lists/${listId}/items/${itemId}`, {
      method: 'PATCH',
      body: JSON.stringify({ checked }),
    });
  }

  async deleteGroceryItem(listId: string, itemId: string): Promise<{ message: string }> {
    return this.request(`/api/grocery-lists/${listId}/items/${itemId}`, {
      method: 'DELETE',
    });
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export const api = new ApiClient();

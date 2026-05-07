import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { hashPassword, generateToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name, appType, ...additionalData } = body;

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 409 }
      );
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Insert user
    const result = await query(
      `INSERT INTO users (email, password_hash, name, app_type, created_at, updated_at)
       VALUES ($1, $2, $3, $4, NOW(), NOW())
       RETURNING id, email, name, app_type, created_at`,
      [email, passwordHash, name, appType || 'general']
    );

    const user = result.rows[0];

    // Create app-specific profile if needed
    if (additionalData) {
      await createAppProfile(user.id, appType, additionalData);
    }

    // Generate JWT token
    const token = generateToken(user.id, user.email);

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        appType: user.app_type
      },
      token
    }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed. Please try again.' },
      { status: 500 }
    );
  }
}

async function createAppProfile(userId: number, appType: string, data: any) {
  switch (appType) {
    case 'healthfit':
      await query(
        `INSERT INTO healthfit_profiles (user_id, fitness_goal, activity_level, focus_areas)
         VALUES ($1, $2, $3, $4)`,
        [userId, data.fitnessGoal, data.activityLevel, data.focusAreas || []]
      );
      break;
    case 'finance':
      await query(
        `INSERT INTO finance_profiles (user_id, financial_goal, monthly_income_range, priorities)
         VALUES ($1, $2, $3, $4)`,
        [userId, data.financialGoal, data.monthlyIncome, data.priorities || []]
      );
      break;
    case 'lush':
      await query(
        `INSERT INTO lush_artworks (user_id, title, artist_type, experience_level, interests)
         VALUES ($1, $2, $3, $4, $5)`,
        [userId, 'Profile', data.artistType, data.experienceLevel, data.interests || []]
      );
      break;
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if user exists
    const result = await query(
      'SELECT id, email, name FROM users WHERE email = $1',
      [email]
    );

    // Always return success to prevent email enumeration
    if (result.rows.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'If an account exists with this email, you will receive a password reset link.'
      });
    }

    const user = result.rows[0];

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour

    // Store reset token (you'll need to add these columns to users table)
    await query(
      `UPDATE users 
       SET reset_token = $1, reset_token_expiry = $2, updated_at = NOW()
       WHERE id = $3`,
      [resetToken, resetTokenExpiry, user.id]
    );

    // In production, send email here
    // For now, we'll return the token (remove this in production!)
    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`;

    console.log('Password reset link:', resetLink);
    console.log('User:', user.email);

    // TODO: Send email with reset link
    // await sendPasswordResetEmail(user.email, user.name, resetLink);

    return NextResponse.json({
      success: true,
      message: 'If an account exists with this email, you will receive a password reset link.',
      // Remove this in production:
      resetLink: process.env.NODE_ENV === 'development' ? resetLink : undefined
    });

  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again.' },
      { status: 500 }
    );
  }
}

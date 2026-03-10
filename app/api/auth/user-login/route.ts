import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { email, phone } = await request.json()
    
    if (!email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Email and phone are required' },
        { status: 400 }
      )
    }
    
    const client = await clientPromise
    const db = client.db('paulsir')
    
    // Find user by email and phone
    const user = await db.collection('users').findOne({ 
      email: email.toLowerCase().trim(),
      phone: phone.trim()
    })
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found. Please check your credentials.' },
        { status: 401 }
      )
    }
    
    // Generate JWT token for user
    const jwt = require('jsonwebtoken')
    const token = jwt.sign(
      { 
        userId: user._id.toString(),
        email: user.email,
        role: 'user'
      },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '7d' }
    )
    
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        phone: user.phone,
        course: user.course,
        batch: user.batch,
        status: user.status,
        enrolledAt: user.enrolledAt
      }
    })
    
    // Set HTTP-only cookie
    response.cookies.set('user_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    })
    
    return response
  } catch (error) {
    console.error('User login error:', error)
    return NextResponse.json(
      { success: false, error: 'Login failed' },
      { status: 500 }
    )
  }
}

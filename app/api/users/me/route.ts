import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import jwt from 'jsonwebtoken'

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('user_token')?.value
    
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      )
    }
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret') as any
    
    const client = await clientPromise
    const db = client.db('paulsir')
    
    // Find user by ID
    const user = await db.collection('users').findOne({ 
      _id: new (require('mongodb').ObjectId)(decoded.userId) 
    })
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      data: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        phone: user.phone,
        course: user.course,
        batch: user.batch,
        status: user.status,
        enrolledAt: user.enrolledAt,
        fees: user.fees,
        address: user.address,
        notes: user.notes
      }
    })
  } catch (error) {
    console.error('Error fetching user data:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch user data' },
      { status: 500 }
    )
  }
}

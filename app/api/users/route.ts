import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { User } from '@/lib/models/User'

// GET all users
export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('paulsir')
    
    const users = await db
      .collection('users')
      .find({})
      .sort({ enrolledAt: -1 })
      .toArray()
    
    return NextResponse.json({ success: true, data: users })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}

// POST new user
export async function POST(request: NextRequest) {
  try {
    const userData = await request.json()
    
    const client = await clientPromise
    const db = client.db('paulsir')
    
    // Check if user with this email already exists
    const existingUser = await db.collection('users').findOne({ email: userData.email })
    
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'User with this email already exists' },
        { status: 400 }
      )
    }
    
    const user: User = {
      ...userData,
      enrolledAt: new Date()
    }
    
    const result = await db.collection('users').insertOne(user)
    
    return NextResponse.json({
      success: true,
      data: { ...user, _id: result.insertedId }
    })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create user' },
      { status: 500 }
    )
  }
}

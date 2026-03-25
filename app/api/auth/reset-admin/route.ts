import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import clientPromise from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db('paulsir')
    
    // Delete existing admin user
    await db.collection('admins').deleteOne({ email: 'admin@paulsirsclasses.com' })
    
    // Hash the default password with current JWT_SECRET
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    // Create new admin user
    const result = await db.collection('admins').insertOne({
      email: 'admin@paulsirsclasses.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    })
    
    return NextResponse.json({
      success: true,
      message: 'Admin user reset successfully',
      adminId: result.insertedId
    })
  } catch (error) {
    console.error('Reset admin error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to reset admin user' },
      { status: 500 }
    )
  }
}

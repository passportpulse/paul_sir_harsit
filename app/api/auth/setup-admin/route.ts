import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import clientPromise from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db('paulsir')
    
    // Check if admin already exists
    const existingAdmin = await db.collection('admins').findOne({ email: 'admin@paulsirsclasses.com' })
    
    if (existingAdmin) {
      return NextResponse.json({
        success: false,
        error: 'Admin user already exists'
      })
    }
    
    // Hash the default password
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    // Create admin user
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
      message: 'Admin user created successfully',
      adminId: result.insertedId
    })
  } catch (error) {
    console.error('Setup admin error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create admin user' },
      { status: 500 }
    )
  }
}

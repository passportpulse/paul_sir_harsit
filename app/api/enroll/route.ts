import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      whatsapp, 
      course, 
      currentLevel, 
      preferredMode, 
      address, 
      message 
    } = await request.json()
    
    if (!firstName || !lastName || !email || !phone || !course) {
      return NextResponse.json(
        { success: false, error: 'First name, last name, email, phone, and course are required' },
        { status: 400 }
      )
    }
    
    const client = await clientPromise
    const db = client.db('paulsir')
    
    // Save enrollment form submission
    const result = await db.collection('enrollments').insertOne({
      firstName,
      lastName,
      email,
      phone,
      whatsapp: whatsapp || '',
      course,
      currentLevel: currentLevel || '',
      preferredMode: preferredMode || '',
      address: address || '',
      message: message || '',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    })
    
    return NextResponse.json({
      success: true,
      message: 'Enrollment form submitted successfully',
      enrollmentId: result.insertedId
    })
  } catch (error) {
    console.error('Enrollment form error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit enrollment form' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db('paulsir')
    
    // Get all enrollment submissions
    const enrollments = await db
      .collection('enrollments')
      .find({})
      .sort({ createdAt: -1 })
      .toArray()
    
    return NextResponse.json({
      success: true,
      data: enrollments
    })
  } catch (error) {
    console.error('Get enrollments error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch enrollments' },
      { status: 500 }
    )
  }
}

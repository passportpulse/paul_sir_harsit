import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, course, message } = await request.json()
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }
    
    const client = await clientPromise
    const db = client.db('paulsir')
    
    // Save contact form submission
    const result = await db.collection('contact_submissions').insertOne({
      name,
      email,
      phone: phone || '',
      course: course || '',
      message,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    })
    
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      submissionId: result.insertedId
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db('paulsir')
    
    // Get all contact submissions
    const submissions = await db
      .collection('contact_submissions')
      .find({})
      .sort({ createdAt: -1 })
      .toArray()
    
    return NextResponse.json({
      success: true,
      data: submissions
    })
  } catch (error) {
    console.error('Get contact submissions error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contact submissions' },
      { status: 500 }
    )
  }
}

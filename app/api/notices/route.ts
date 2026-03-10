import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { Notice } from '@/lib/models/Notice'

// GET all notices
export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('paulsir')
    
    const notices = await db
      .collection('notices')
      .find({})
      .sort({ createdAt: -1 })
      .toArray()
    
    return NextResponse.json({ success: true, data: notices })
  } catch (error) {
    console.error('Error fetching notices:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch notices' },
      { status: 500 }
    )
  }
}

// POST new notice
export async function POST(request: NextRequest) {
  try {
    const noticeData = await request.json()
    
    const client = await clientPromise
    const db = client.db('paulsir')
    
    // Get the highest ID to generate new one
    const lastNotice = await db
      .collection('notices')
      .findOne({}, { sort: { id: -1 } })
    
    const newId = lastNotice ? lastNotice.id + 1 : 1
    
    const notice: Notice = {
      ...noticeData,
      id: newId,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    const result = await db.collection('notices').insertOne(notice)
    
    return NextResponse.json({
      success: true,
      data: { ...notice, _id: result.insertedId }
    })
  } catch (error) {
    console.error('Error creating notice:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create notice' },
      { status: 500 }
    )
  }
}

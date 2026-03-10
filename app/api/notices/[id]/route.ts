import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
import { Notice } from '@/lib/models/Notice'

// PUT update notice
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: noticeId } = await params
    const noticeData = await request.json()
    
    const client = await clientPromise
    const db = client.db('paulsir')
    
    const result = await db
      .collection('notices')
      .updateOne(
        { _id: new ObjectId(noticeId) },
        { $set: { ...noticeData, updatedAt: new Date() } }
      )
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Notice not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ success: true, data: noticeData })
  } catch (error) {
    console.error('Error updating notice:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update notice' },
      { status: 500 }
    )
  }
}

// DELETE notice
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: noticeId } = await params
    
    const client = await clientPromise
    const db = client.db('paulsir')
    
    const result = await db
      .collection('notices')
      .deleteOne({ _id: new ObjectId(noticeId) })
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Notice not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting notice:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete notice' },
      { status: 500 }
    )
  }
}

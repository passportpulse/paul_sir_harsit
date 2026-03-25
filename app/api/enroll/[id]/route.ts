import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { status } = await request.json()
    
    if (!status || !['pending', 'contacted', 'enrolled', 'completed'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Valid status is required (pending, contacted, enrolled, completed)' },
        { status: 400 }
      )
    }
    
    const client = await clientPromise
    const db = client.db('paulsir')
    
    const result = await db
      .collection('enrollments')
      .updateOne(
        { _id: new ObjectId(id) },
        { 
          $set: { 
            status, 
            updatedAt: new Date() 
          } 
        }
      )
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Enrollment not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      message: 'Enrollment status updated successfully'
    })
  } catch (error) {
    console.error('Update enrollment error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update enrollment' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    const client = await clientPromise
    const db = client.db('paulsir')
    
    const result = await db
      .collection('enrollments')
      .deleteOne({ _id: new ObjectId(id) })
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Enrollment not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      message: 'Enrollment deleted successfully'
    })
  } catch (error) {
    console.error('Delete enrollment error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete enrollment' },
      { status: 500 }
    )
  }
}

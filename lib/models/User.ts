import { ObjectId } from 'mongodb'

export interface User {
  _id?: ObjectId
  name: string
  email: string
  phone: string
  course: string
  batch: string
  status: 'active' | 'inactive' | 'completed'
  enrolledAt: Date
  lastPayment?: Date
  fees?: number
  address?: string
  notes?: string
}

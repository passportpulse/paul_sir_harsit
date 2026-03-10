import { ObjectId } from 'mongodb'

export interface Notice {
  _id?: ObjectId
  id: number
  type: 'exam' | 'result' | 'admission' | 'schedule' | 'workshop' | 'holiday'
  title: string
  description: string
  date: string
  priority: 'high' | 'medium' | 'low'
  Note?: string
  icon: string
  createdAt?: Date
  updatedAt?: Date
}

export interface NoticeInput {
  type: Notice['type']
  title: string
  description: string
  date: string
  priority: Notice['priority']
  Note?: string
}

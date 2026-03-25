'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Bell, 
  Calendar, 
  Trophy, 
  BookOpen, 
  Clock, 
  Users, 
  AlertCircle,
  Plus,
  Edit2,
  Trash2
} from 'lucide-react'
import { Notice } from '@/lib/models/Notice'
import AdminLayout from '@/components/AdminLayout'

const iconMap = {
  exam: <Calendar className="w-5 h-5" />,
  result: <Trophy className="w-5 h-5" />,
  admission: <BookOpen className="w-5 h-5" />,
  schedule: <Clock className="w-5 h-5" />,
  workshop: <Users className="w-5 h-5" />,
  holiday: <AlertCircle className="w-5 h-5" />
}

const typeColors = {
  exam: 'bg-blue-100 text-blue-700 border-blue-200',
  result: 'bg-green-100 text-green-700 border-green-200',
  admission: 'bg-purple-100 text-purple-700 border-purple-200',
  schedule: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  workshop: 'bg-orange-100 text-orange-700 border-orange-200',
  holiday: 'bg-red-100 text-red-700 border-red-200'
}

export default function AdminDashboard() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null)
  const [formData, setFormData] = useState({
    type: 'admission' as Notice['type'],
    title: '',
    description: '',
    date: '',
    priority: 'medium' as Notice['priority'],
    Note: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchNotices()
  }, [])

  const fetchNotices = async () => {
    try {
      const response = await fetch('/api/notices')
      const data = await response.json()
      if (data.success) {
        setNotices(data.data)
      }
    } catch (error) {
      console.error('Error fetching notices:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const url = editingNotice 
        ? `/api/notices/${editingNotice._id}`
        : '/api/notices'
      
      const method = editingNotice ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        await fetchNotices()
        setIsModalOpen(false)
        setEditingNotice(null)
        setFormData({
          type: 'admission',
          title: '',
          description: '',
          date: '',
          priority: 'medium',
          Note: ''
        })
      }
    } catch (error) {
      console.error('Error saving notice:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (notice: Notice) => {
    setEditingNotice(notice)
    setFormData({
      type: notice.type,
      title: notice.title,
      description: notice.description,
      date: notice.date,
      priority: notice.priority,
      Note: notice.Note || ''
    })
    setIsModalOpen(true)
  }

  const handleDelete = async (noticeId: string) => {
    if (!confirm('Are you sure you want to delete this notice?')) return

    try {
      const response = await fetch(`/api/notices/${noticeId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        await fetchNotices()
      }
    } catch (error) {
      console.error('Error deleting notice:', error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <AdminLayout title="Notice Board" subtitle="Manage notice board content">
      {/* Actions Bar */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">All Notices</h2>
            <p className="text-gray-600">Manage notice board content</p>
          </div>
          
          <button
            onClick={() => {
              setEditingNotice(null)
              setFormData({
                type: 'admission',
                title: '',
                description: '',
                date: '',
                priority: 'medium',
                Note: ''
              })
              setIsModalOpen(true)
            }}
            className="flex items-center gap-2 px-4 py-2 bg-[#0b1e6d] text-white rounded-lg hover:bg-[#1e3a8a] transition"
          >
            <Plus className="h-4 w-4" />
            Add Notice
          </button>
        </div>
      </div>

        {/* Notices Grid */}
        <div className="grid gap-6">
          {notices.map((notice) => (
            <div
              key={notice._id?.toString()}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${typeColors[notice.type]}`}>
                      {iconMap[notice.type]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {notice.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(notice.date).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${typeColors[notice.type]}`}>
                      {notice.priority}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-2">{notice.description}</p>
                  {notice.Note && (
                    <p className="text-red-600 text-sm font-medium">{notice.Note}</p>
                  )}
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(notice)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(notice._id?.toString() || '')}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {editingNotice ? 'Edit Notice' : 'Add New Notice'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value as Notice['type'] })}
                      className="w-full text-gray-500 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b1e6d] focus:border-transparent"
                    >
                      <option value="exam">Exam</option>
                      <option value="result">Result</option>
                      <option value="admission">Admission</option>
                      <option value="schedule">Schedule</option>
                      <option value="workshop">Workshop</option>
                      <option value="holiday">Holiday</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority
                    </label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value as Notice['priority'] })}
                      className="w-full  text-gray-500 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b1e6d] focus:border-transparent"
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full  text-gray-500 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b1e6d] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full  text-gray-500 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b1e6d] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3  text-gray-500 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b1e6d] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Note (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.Note}
                    onChange={(e) => setFormData({ ...formData, Note: e.target.value })}
                    className="w-full  text-gray-500 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b1e6d] focus:border-transparent"
                    placeholder="e.g., Note: Only 20 students will be taken in each batch."
                  />
                </div>

                <div className="flex items-center justify-end gap-4 pt-6 border-t">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 bg-[#0b1e6d] text-white rounded-lg hover:bg-[#1e3a8a] transition disabled:opacity-50"
                  >
                    {isLoading ? 'Saving...' : (editingNotice ? 'Update' : 'Create')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}

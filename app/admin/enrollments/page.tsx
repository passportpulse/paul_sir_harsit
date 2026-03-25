'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Mail, Phone, Calendar, Clock, User, Trash2, GraduationCap, Eye, X } from 'lucide-react'
import Link from 'next/link'
import AdminLayout from '@/components/AdminLayout'

interface Enrollment {
  _id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  whatsapp?: string
  course: string
  currentLevel?: string
  preferredMode?: string
  address?: string
  message?: string
  status: 'pending' | 'contacted' | 'enrolled' | 'completed'
  createdAt: string
  updatedAt: string
}

export default function EnrollmentsPage() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'contacted' | 'enrolled' | 'completed'>('all')
  const [selectedEnrollment, setSelectedEnrollment] = useState<Enrollment | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchEnrollments()
  }, [])

  const fetchEnrollments = async () => {
    try {
      const response = await fetch('/api/enroll')
      const data = await response.json()
      
      if (data.success) {
        setEnrollments(data.data)
      } else {
        console.error('Failed to fetch enrollments:', data.error)
      }
    } catch (error) {
      console.error('Error fetching enrollments:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: Enrollment['status']) => {
    try {
      const response = await fetch(`/api/enroll/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      })

      const data = await response.json()
      
      if (data.success) {
        fetchEnrollments() // Refresh the list
      } else {
        console.error('Failed to update status:', data.error)
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const deleteEnrollment = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enrollment?')) {
      return
    }

    try {
      const response = await fetch(`/api/enroll/${id}`, {
        method: 'DELETE'
      })

      const data = await response.json()
      
      if (data.success) {
        fetchEnrollments() // Refresh the list
      } else {
        console.error('Failed to delete enrollment:', data.error)
      }
    } catch (error) {
      console.error('Error deleting enrollment:', error)
    }
  }

  const openModal = (enrollment: Enrollment) => {
    setSelectedEnrollment(enrollment)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedEnrollment(null)
  }

  const filteredEnrollments = filter === 'all' 
    ? enrollments 
    : enrollments.filter(enrollment => enrollment.status === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'contacted': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'enrolled': return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'completed': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading enrollments...</div>
      </div>
    )
  }

  return (
    <AdminLayout title="Student Enrollments" subtitle="Manage student enrollment applications">
      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'pending' 
                  ? 'bg-yellow-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('contacted')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'contacted' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Contacted
            </button>
            <button
              onClick={() => setFilter('enrolled')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'enrolled' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Enrolled
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'completed' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Completed
            </button>
          </div>
        </div>
      </div>   {/* Enrollments Table */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {filteredEnrollments.length === 0 ? (
            <div className="p-8 text-center">
              <GraduationCap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No enrollments found</h3>
              <p className="text-gray-600">
                {filter === 'all' 
                  ? 'No student enrollments yet.' 
                  : `No ${filter} enrollments found.`
                }
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredEnrollments.map((enrollment, index) => (
                    <tr key={enrollment._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                              <User className="h-5 w-5 text-purple-600" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {enrollment.firstName} {enrollment.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {enrollment.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {enrollment.phone}
                        </div>
                        {enrollment.whatsapp && (
                          <div className="text-xs text-gray-500">
                            WhatsApp: {enrollment.whatsapp}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {enrollment.course}
                        </div>
                        {enrollment.currentLevel && (
                          <div className="text-xs text-gray-500">
                            {enrollment.currentLevel}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {formatDate(enrollment.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={enrollment.status}
                          onChange={(e) => updateStatus(enrollment._id, e.target.value as Enrollment['status'])}
                          className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(enrollment.status)}`}
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="enrolled">Enrolled</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openModal(enrollment)}
                            className="text-purple-600 hover:text-purple-900"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => updateStatus(enrollment._id, 'contacted')}
                            className="text-blue-600 hover:text-blue-900"
                            title="Mark as Contacted"
                          >
                            <Mail className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => updateStatus(enrollment._id, 'enrolled')}
                            className="text-green-600 hover:text-green-900"
                            title="Mark as Enrolled"
                          >
                            <GraduationCap className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteEnrollment(enrollment._id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Details Modal */}
      {showModal && selectedEnrollment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Student Enrollment Details</h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                {/* Student Info */}
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Student Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Full Name</p>
                      <p className="font-medium text-gray-900">{selectedEnrollment.firstName} {selectedEnrollment.lastName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">{selectedEnrollment.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium text-gray-900">{selectedEnrollment.phone}</p>
                    </div>
                    {selectedEnrollment.whatsapp && (
                      <div>
                        <p className="text-sm text-gray-600">WhatsApp</p>
                        <p className="font-medium text-gray-900">{selectedEnrollment.whatsapp}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Course Info */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Course Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Course</p>
                      <p className="font-medium text-gray-900">{selectedEnrollment.course}</p>
                    </div>
                    {selectedEnrollment.currentLevel && (
                      <div>
                        <p className="text-sm text-gray-600">Current Level</p>
                        <p className="font-medium text-gray-900">{selectedEnrollment.currentLevel}</p>
                      </div>
                    )}
                    {selectedEnrollment.preferredMode && (
                      <div>
                        <p className="text-sm text-gray-600">Preferred Mode</p>
                        <p className="font-medium text-gray-900">{selectedEnrollment.preferredMode}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Address & Message */}
                {(selectedEnrollment.address || selectedEnrollment.message) && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Additional Information
                    </h4>
                    {selectedEnrollment.address && (
                      <div className="mb-3">
                        <p className="text-sm text-gray-600">Address</p>
                        <p className="font-medium text-gray-900">{selectedEnrollment.address}</p>
                      </div>
                    )}
                    {selectedEnrollment.message && (
                      <div>
                        <p className="text-sm text-gray-600">Message</p>
                        <p className="text-gray-700 whitespace-pre-wrap">{selectedEnrollment.message}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Status & Dates */}
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Status & Timeline
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Current Status</p>
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(selectedEnrollment.status)}`}>
                        {selectedEnrollment.status.charAt(0).toUpperCase() + selectedEnrollment.status.slice(1)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Applied On</p>
                      <p className="font-medium text-gray-900">{formatDate(selectedEnrollment.createdAt)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Last Updated</p>
                      <p className="font-medium text-gray-900">{formatDate(selectedEnrollment.updatedAt)}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <button
                    onClick={() => {
                      updateStatus(selectedEnrollment._id, 'contacted')
                      closeModal()
                    }}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Mark as Contacted
                  </button>
                  <button
                    onClick={() => {
                      updateStatus(selectedEnrollment._id, 'enrolled')
                      closeModal()
                    }}
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    Mark as Enrolled
                  </button>
                  <button
                    onClick={() => {
                      updateStatus(selectedEnrollment._id, 'completed')
                      closeModal()
                    }}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Mark as Completed
                  </button>
                  <button
                    onClick={() => {
                      deleteEnrollment(selectedEnrollment._id)
                      closeModal()
                    }}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}

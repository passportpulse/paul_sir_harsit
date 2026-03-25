'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Mail, Phone, Calendar, Clock, User, Trash2, Eye, X } from 'lucide-react'
import Link from 'next/link'
import AdminLayout from '@/components/AdminLayout'

interface ContactSubmission {
  _id: string
  name: string
  email: string
  phone?: string
  course?: string
  message: string
  status: 'pending' | 'contacted' | 'resolved'
  createdAt: string
  updatedAt: string
}

export default function ContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'contacted' | 'resolved'>('all')
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/contact')
      const data = await response.json()

      if (data.success) {
        setSubmissions(data.data)
      } else {
        console.error('Failed to fetch submissions:', data.error)
      }
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: ContactSubmission['status']) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      })

      const data = await response.json()

      if (data.success) {
        fetchSubmissions() // Refresh the list
      } else {
        console.error('Failed to update status:', data.error)
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const deleteSubmission = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact submission?')) {
      return
    }

    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'DELETE'
      })

      const data = await response.json()
      
      if (data.success) {
        fetchSubmissions() // Refresh the list
      } else {
        console.error('Failed to delete submission:', data.error)
      }
    } catch (error) {
      console.error('Error deleting submission:', error)
    }
  }

  const openModal = (submission: ContactSubmission) => {
    setSelectedSubmission(submission)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedSubmission(null)
  }

  const filteredSubmissions = filter === 'all'
    ? submissions
    : submissions.filter(sub => sub.status === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'contacted': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'resolved': return 'bg-green-100 text-green-700 border-green-200'
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
        <div className="text-gray-500">Loading contact submissions...</div>
      </div>
    )
  }

  return (
    <AdminLayout title="Contact Submissions" subtitle="Manage contact form submissions">
      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'pending'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('contacted')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'contacted'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              Contacted
            </button>
            <button
              onClick={() => setFilter('resolved')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'resolved'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              Resolved
            </button>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="max-w-7xl mx-auto px-6 pb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {filteredSubmissions.length === 0 ? (
              <div className="p-8 text-center">
                <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions found</h3>
                <p className="text-gray-600">
                  {filter === 'all'
                    ? 'No contact submissions yet.'
                    : `No ${filter} submissions found.`
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
                        Contact Info
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
                    {filteredSubmissions.map((submission, index) => (
                      <tr key={submission._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <User className="h-5 w-5 text-gray-500" />
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {submission.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {submission.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {submission.phone || '-'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {submission.course || '-'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {formatDate(submission.createdAt)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={submission.status}
                            onChange={(e) => updateStatus(submission._id, e.target.value as ContactSubmission['status'])}
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(submission.status)}`}
                          >
                            <option value="pending">Pending</option>
                            <option value="contacted">Contacted</option>
                            <option value="resolved">Resolved</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex gap-2">
                            <button
                              onClick={() => openModal(submission)}
                              className="text-blue-600 hover:text-blue-900"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => updateStatus(submission._id, 'contacted')}
                              className="text-green-600 hover:text-green-900"
                              title="Mark as Contacted"
                            >
                              <Mail className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteSubmission(submission._id)}
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
        {showModal && selectedSubmission && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Contact Submission Details</h3>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-lg transition"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="space-y-6">
                  {/* Contact Info */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Contact Information
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Name</p>
                        <p className="font-medium text-gray-900">{selectedSubmission.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium text-gray-900">{selectedSubmission.email}</p>
                      </div>
                      {selectedSubmission.phone && (
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="font-medium text-gray-900">{selectedSubmission.phone}</p>
                        </div>
                      )}
                      {selectedSubmission.course && (
                        <div>
                          <p className="text-sm text-gray-600">Course</p>
                          <p className="font-medium text-gray-900">{selectedSubmission.course}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Message
                    </h4>
                    <p className="text-gray-700 whitespace-pre-wrap">{selectedSubmission.message}</p>
                  </div>

                  {/* Status & Dates */}
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Status & Timeline
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Current Status</p>
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(selectedSubmission.status)}`}>
                          {selectedSubmission.status.charAt(0).toUpperCase() + selectedSubmission.status.slice(1)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Submitted On</p>
                        <p className="font-medium text-gray-900">{formatDate(selectedSubmission.createdAt)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Last Updated</p>
                        <p className="font-medium text-gray-900">{formatDate(selectedSubmission.updatedAt)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t">
                    <button
                      onClick={() => {
                        updateStatus(selectedSubmission._id, 'contacted')
                        closeModal()
                      }}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Mark as Contacted
                    </button>
                    <button
                      onClick={() => {
                        updateStatus(selectedSubmission._id, 'resolved')
                        closeModal()
                      }}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      Mark as Resolved
                    </button>
                    <button
                      onClick={() => {
                        deleteSubmission(selectedSubmission._id)
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
        </div>
      </AdminLayout>
  )
}

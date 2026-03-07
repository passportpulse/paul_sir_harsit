'use client'

import { useState, useEffect } from 'react'
import { Bell, Calendar, Trophy, AlertCircle, BookOpen, Users, Clock, ChevronRight } from 'lucide-react'

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState('all')
  const [notices, setNotices] = useState([
    {
      id: 1,
      type: 'exam',
      title: 'CA Foundation Mock Test - 15th March',
      description: 'Full syllabus mock test for CA Foundation students. Register by 10th March.',
      date: '2024-03-01',
      priority: 'high',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      id: 2,
      type: 'result',
      title: 'ISC Commerce Results - 95% Success',
      description: 'Congratulations to our ISC Commerce students for achieving outstanding results!',
      date: '2024-02-28',
      priority: 'high',
      icon: <Trophy className="w-5 h-5" />
    },
    {
      id: 3,
      type: 'admission',
      title: 'New Batch Admissions Open - April 2024',
      description: 'Admissions open for all courses. Early bird discount available till 25th March.',
      date: '2024-02-25',
      priority: 'medium',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 4,
      type: 'schedule',
      title: 'Weekend Special Classes - CMA Intermediate',
      description: 'Special weekend batches starting from 5th March for working professionals.',
      date: '2024-02-20',
      priority: 'medium',
      icon: <Clock className="w-5 h-5" />
    },
    {
      id: 5,
      type: 'workshop',
      title: 'Taxation Workshop - 20th March',
      description: 'Free workshop on GST and Income Tax for B.Com students.',
      date: '2024-02-18',
      priority: 'low',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 6,
      type: 'holiday',
      title: 'Class Schedule - Holi Festival',
      description: 'Classes will remain closed on 25th March for Holi. Regular classes from 26th March.',
      date: '2024-02-15',
      priority: 'low',
      icon: <AlertCircle className="w-5 h-5" />
    }
  ])

  const tabs = [
    { id: 'all', label: 'All Notices', icon: <Bell className="w-4 h-4" /> },
    { id: 'exam', label: 'Exams', icon: <Calendar className="w-4 h-4" /> },
    { id: 'result', label: 'Results', icon: <Trophy className="w-4 h-4" /> },
    { id: 'admission', label: 'Admissions', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'schedule', label: 'Schedule', icon: <Clock className="w-4 h-4" /> }
  ]

  const filteredNotices = activeTab === 'all'
    ? notices
    : notices.filter(notice => notice.type === activeTab)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-600 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-600 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-600 border-green-200'
      default: return 'bg-gray-100 text-gray-600 border-gray-200'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className='flex justify-between items-center'>
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex  mb-4">
              <div className="bg-[#f5c542] text-[#0b1e6d] p-3 rounded-full mr-3">
                <Bell className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold text-[#0b1e6d]">Notice Board</h2>
            </div>
            <p className="text-gray-600 text-lg mt-2">
              Stay updated with latest announcements, exam schedules, and important notifications
            </p>
          </div>
          <div className="text-center mb-12">
            <button className="bg-[#0b1e6d] hover:bg-[#f5c542] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
              View All Notices
            </button>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="flex flex-wrap  gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeTab === tab.id
                  ? 'bg-[#0b1e6d] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Notices Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              {/* Notice Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#f5c542]/10 text-[#0b1e6d] p-2 rounded-lg">
                      {notice.icon}
                    </div>
                    <div>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(notice.priority)}`}>
                        {notice.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Notice Content */}
                <h3 className="text-lg font-semibold text-[#0b1e6d] mb-2 group-hover:text-[#f5c542] transition-colors">
                  {notice.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {notice.description}
                </p>

                {/* Notice Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">
                    {formatDate(notice.date)}
                  </span>
                  <button className="text-[#0b1e6d] hover:text-[#f5c542] transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>




        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Active Notices', value: notices.length, icon: <Bell className="w-5 h-5" /> },
            { label: 'Upcoming Exams', value: '3', icon: <Calendar className="w-5 h-5" /> },
            { label: 'New Admissions', value: 'Open', icon: <BookOpen className="w-5 h-5" /> },
            { label: 'Success Rate', value: '95%', icon: <Trophy className="w-5 h-5" /> }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center border border-gray-100">
              <div className="flex justify-center mb-2 text-[#f5c542]">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-[#0b1e6d]">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

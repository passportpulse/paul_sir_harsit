'use client'

import { X, Target, BookOpen, Clock, TrendingUp } from 'lucide-react'

interface DetailedInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DetailedInfoModal({ isOpen, onClose }: DetailedInfoModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#0b1e6d]">Detailed Information</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-8">
          
          {/* Teaching Methodology */}
          <section>
            <h3 className="text-xl font-bold text-[#0b1e6d] mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-500" />
              Teaching Methodology
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Concept-Based Learning</h4>
                <p className="text-gray-600 text-sm">
                  We focus on building strong conceptual foundations through real-life examples and practical applications.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Exam-Oriented Approach</h4>
                <p className="text-gray-600 text-sm">
                  Regular mock tests, previous year analysis, and strategic preparation for board and professional exams.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Personalized Attention</h4>
                <p className="text-gray-600 text-sm">
                  Small batch sizes ensure individual focus and doubt-clearing sessions for every student.
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Technology Integration</h4>
                <p className="text-gray-600 text-sm">
                  Modern teaching aids, online resources, and digital learning platforms for enhanced understanding.
                </p>
              </div>
            </div>
          </section>

          {/* Study Materials */}
          <section>
            <h3 className="text-xl font-bold text-[#0b1e6d] mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-500" />
              Comprehensive Study Materials
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Detailed Notes & Summaries</h4>
                  <p className="text-gray-600 text-sm">Well-structured notes covering all topics with key highlights and important formulas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Practice Question Banks</h4>
                  <p className="text-gray-600 text-sm">Chapter-wise questions with solutions and previous year papers for thorough practice.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sample Papers & Mock Tests</h4>
                  <p className="text-gray-600 text-sm">Regular assessments to track progress and improve exam performance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Digital Resources</h4>
                  <p className="text-gray-600 text-sm">Access to online lectures, e-books, and supplementary learning materials.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Batch Timings */}
          <section>
            <h3 className="text-xl font-bold text-[#0b1e6d] mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              Batch Schedule & Timings
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Morning Batches</h4>
                <p className="text-gray-600 text-sm">6:00 AM - 9:00 AM</p>
                <p className="text-gray-500 text-xs mt-1">For working professionals</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Afternoon Batches</h4>
                <p className="text-gray-600 text-sm">2:00 PM - 5:00 PM</p>
                <p className="text-gray-500 text-xs mt-1">For college students</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Evening Batches</h4>
                <p className="text-gray-600 text-sm">5:00 PM - 8:00 PM</p>
                <p className="text-gray-500 text-xs mt-1">For school students</p>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section>
            <h3 className="text-xl font-bold text-[#0b1e6d] mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              Student Success Stories
            </h3>
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Recent Achievements</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• 95% score in ISC Commerce (2024)</li>
                    <li>• CA Foundation cleared in first attempt</li>
                    <li>• State rank in H.S Commerce</li>
                    <li>• University topper in B.Com</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Alumni Success</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Placed in Big 4 companies</li>
                    <li>• Successful entrepreneurs</li>
                    <li>• CA professionals</li>
                    <li>• MBA graduates from premier institutes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact for Admission */}
          <section className="bg-[#0b1e6d] text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Ready to Join?</h3>
            <p className="mb-4">
              Take the first step towards commerce excellence with Paul Sir's Classes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  onClose()
                  window.open('/contact', '_self')
                }}
                className="bg-[#f5c542] text-[#0b1e6d] px-6 py-3 rounded-lg font-semibold hover:bg-[#f5d542] transition-colors"
              >
                Contact for Admission
              </button>
              <button 
                onClick={() => {
                  onClose()
                  window.open('/courses', '_self')
                }}
                className="bg-white text-[#0b1e6d] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Courses
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

'use client'

import { GraduationCap, BookOpen, Star } from 'lucide-react'

export default function CoursesOverview() {
  return (
    <>
      {/* ================= COURSES OVERVIEW ================= */}
      <section className="py-24 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Intro */}
          <div className="mb-16 max-w-3xl">
            <p className="text-orange-500 font-semibold mb-3">
              Our Academic Programs
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
              Subjects & Courses We Offer
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Paul Sir's Classes provides structured and result-oriented commerce coaching 
              for school students, undergraduate learners, and professional aspirants. 
              Our curriculum is designed to build strong conceptual clarity, exam confidence, 
              and practical financial understanding.
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* School Boards */}
            <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300">
              <GraduationCap size={42} className="text-orange-500 mb-6" />

              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                School Board Programs
              </h3>

              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li>• ISC Commerce</li>
                <li>• CBSE Commerce</li>
                <li>• H.S (West Bengal Board)</li>
                <li>• Accounts & Economics</li>
                <li>• Business Studies & Commercial Applications</li>
              </ul>

              <p className="text-sm text-gray-500 mt-6">
                Strong conceptual foundation with exam-focused preparation.
              </p>
            </div>

            {/* Undergraduate */}
            <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300">
              <BookOpen size={42} className="text-orange-500 mb-6" />

              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                Undergraduate Courses
              </h3>

              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li>• B.Com (All Semesters)</li>
                <li>• BBA & MBA</li>
                <li>• Financial Accounting</li>
                <li>• Cost & Management Accounting</li>
                <li>• Corporate & Company Accounts</li>
                <li>• Direct & Indirect Taxation</li>
              </ul>

              <p className="text-sm text-gray-500 mt-6">
                University-aligned syllabus with practical case-based learning.
              </p>
            </div>

            {/* Professional */}
            <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300">
              <Star size={42} className="text-orange-500 mb-6" />

              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                Professional Courses
              </h3>

              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li>• CA (Foundation & Intermediate)</li>
                <li>• CMA (Foundation & Inter)</li>
                <li>• CS Preparation</li>
                <li>• Financial Management</li>
                <li>• Auditing & Law</li>
                <li>• Advanced Taxation</li>
              </ul>

              <p className="text-sm text-gray-500 mt-6">
                Expert mentorship with strategic exam preparation approach.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

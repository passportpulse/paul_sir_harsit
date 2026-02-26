'use client'

import { BookOpen, Users, Award, Clock } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0b1e6d] mb-4">
            Welcome To The Online Learning Center
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive courses designed to help you master commerce subjects with expert guidance and flexible learning options.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Learn from the Best Commerce Educator
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 25 years of experience in commerce education, Paul Sir brings expertise in Accounts, Economics, Taxation, and Business Studies. Our structured approach ensures concept clarity and exam success.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Users className="text-[#f5c542]" size={24} />
                <div>
                  <div className="font-semibold">500+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="text-[#f5c542]" size={24} />
                <div>
                  <div className="font-semibold">25+</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-[#f5c542]" size={24} />
                <div>
                  <div className="font-semibold">100%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-[#f5c542]" size={24} />
                <div>
                  <div className="font-semibold">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
            
            <button className="bg-[#0b1e6d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e3a8a] transition">
              Explore Courses
            </button>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Online Learning"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "School Level",
              description: "Class 11-12 (ISC/CBSE/H.S)",
              subjects: "Accounts, Economics, Business Studies",
              icon: BookOpen
            },
            {
              title: "Graduation Level", 
              description: "B.Com / BBA / MBA",
              subjects: "Financial Accounting, Costing, Taxation",
              icon: Award
            },
            {
              title: "Professional Courses",
              description: "CA / CMA / CS",
              subjects: "Foundation & Intermediate Levels",
              icon: Users
            }
          ].map((course, index) => {
            const Icon = course.icon
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
                <div className="bg-[#0b1e6d] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h4>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-sm text-gray-500">{course.subjects}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

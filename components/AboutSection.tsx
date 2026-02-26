'use client'

import { BookOpen, Users, Award, Clock, GraduationCap } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ====== TOP CONTENT ====== */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-orange-500 font-semibold mb-4">
              About Paul Sir’s Classes
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
              Commerce Education That Builds
              <br /> Real Success
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              With over 25 years of excellence in commerce teaching, Paul Sir 
              specializes in Accounts, Economics, Taxation, and Business Studies. 
              Our structured approach focuses on concept clarity, exam strategy, 
              and practical financial understanding.
            </p>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 mb-10">

              <Stat icon={Users} number="5,000+" label="Students Mentored" />
              <Stat icon={BookOpen} number="25+" label="Courses Offered" />
              <Stat icon={Award} number="95%" label="Success Rate" />
              <Stat icon={Clock} number="25+" label="Years Experience" />

            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg">
              Explore Courses
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Soft Background Frame */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-orange-100 rounded-3xl"></div>

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Commerce Learning"
              className="relative z-10 rounded-3xl shadow-2xl w-full object-cover"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-8 left-8 bg-white rounded-2xl shadow-xl px-6 py-4 z-20">
              <p className="font-semibold text-gray-800">
                Trusted Commerce Mentor in Kolkata
              </p>
            </div>

          </div>
        </div>

        {/* ====== COURSE CATEGORY CARDS ====== */}
        <div>

          <h3 className="text-3xl font-bold text-[#0f172a] mb-12">
            Our Academic Programs
          </h3>

          <div className="grid md:grid-cols-3 gap-10">

            <CourseCard
              icon={GraduationCap}
              title="School Level"
              desc="ISC / CBSE / H.S"
              details="Accounts, Economics, Business Studies & Commercial Applications"
            />

            <CourseCard
              icon={BookOpen}
              title="Undergraduate"
              desc="B.Com / BBA / MBA"
              details="Financial Accounting, Costing, Corporate Accounts, Taxation"
            />

            <CourseCard
              icon={Award}
              title="Professional"
              desc="CA / CMA / CS"
              details="Foundation & Intermediate with Advanced Exam Strategy"
            />

          </div>

        </div>

      </div>
    </section>
  )
}

/* ====== SMALL STAT COMPONENT ====== */
function Stat({ icon: Icon, number, label }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-orange-100 p-3 rounded-xl">
        <Icon className="text-orange-500" size={20} />
      </div>
      <div>
        <div className="font-bold text-lg text-[#0f172a]">{number}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  )
}

/* ====== COURSE CARD ====== */
function CourseCard({ icon: Icon, title, desc, details }: any) {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">

      <div className="bg-[#0f172a] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="text-white" size={28} />
      </div>

      <h4 className="text-xl font-bold text-[#0f172a] mb-2">
        {title}
      </h4>

      <p className="text-orange-500 font-medium mb-4">
        {desc}
      </p>

      <p className="text-gray-600 text-sm leading-relaxed">
        {details}
      </p>

    </div>
  )
}
'use client'

import { Award, BookOpen, GraduationCap, Star, MapPin, Users, Play, Monitor,  } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e6d]/90 to-[#1e3a8a]/85"></div>

        <div className="relative max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Paul Sir’s Classes
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            25+ Years of Excellence in Commerce Education
          </p>
        </div>
      </section>

 <section className="py-24 bg-[#f8f6f2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT IMAGE AREA ================= */}
        <div className="relative">

          {/* Gradient Background Frame */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#f5c542] via-[#f3d37a] to-[#f8e7b0] rounded-3xl"></div>

          {/* Main Image */}
          <img
            src="/paul.jpeg"
            alt="Paul Sir Commerce Classes"
            className="relative rounded-3xl w-full object-cover z-10"
          />

          {/* Floating Card - Courses */}
          <div className="absolute top-8 -left-10 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4 z-20">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Play className="text-blue-600" size={20} />
            </div>
            <div>
              <div className="font-bold text-gray-800">200+</div>
              <div className="text-sm text-gray-500">Commerce Lectures</div>
            </div>
          </div>

          {/* Floating Rating Card */}
          <div className="absolute -bottom-10 left-10 bg-white rounded-2xl shadow-xl p-5 z-20">
            <div className="font-semibold text-gray-800">
              Paul Sir
            </div>
            <div className="text-sm text-gray-500">
              Accounts & Taxation Expert
            </div>
            <div className="flex items-center gap-1 mt-2 text-orange-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <Star size={14} className="text-gray-300" />
              <span className="text-gray-600 text-sm ml-1">4.8</span>
            </div>
          </div>

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>

          <p className="text-orange-500 font-semibold mb-4">
            About Paul Sir’s Classes
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
            Welcome To The Premier <br />
            Commerce Learning Center
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10">
            Paul Sir’s Classes is dedicated to providing top-quality commerce education 
            with over 25 years of teaching excellence. Specializing in Accounts, 
            Economics, Business Studies, Taxation, and Finance, we prepare students 
            for ICSE, ISC, CBSE, H.S, B.Com, CA & other professional courses.
          </p>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">

            <FeatureCard
              icon={<BookOpen size={26} />}
              title="Offline Classes"
              desc="Regular Commerce Batches"
            />

            <FeatureCard
              icon={<Monitor size={26} />}
              title="Online Classes"
              desc="Live & Recorded Lectures"
            />

            <FeatureCard
              icon={<GraduationCap size={26} />}
              title="Professional Courses"
              desc="CA / CMA / CS Preparation"
            />

            <FeatureCard
              icon={<Award size={26} />}
              title="Certified Excellence"
              desc="25+ Years Experience"
            />

          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg flex items-center gap-3">
            Read More →
          </button>

        </div>

      </div>
    </section>

   {/* ================= ABOUT INSTITUTE ================= */}
<section className="py-28 bg-[#f8f9fb]">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>

      <p className="text-orange-500 font-semibold mb-4">
        About Our Institute
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-8">
        Building Commerce Excellence <br />
        For Over 25 Years
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Paul Sir’s Classes is one of the most trusted commerce coaching institutes 
        in North Kolkata. Strategically located near <span className="font-medium text-gray-800">Girish Park Metro</span> 
        and <span className="font-medium text-gray-800">Dumdum Station</span>, 
        we have been mentoring students successfully for more than 25 years.
      </p>

      <p className="text-gray-600 leading-relaxed mb-10">
        Our institute is known for structured teaching methodology, exam-oriented preparation,
        detailed study materials, regular doubt-clearing sessions, and flexible 
        online & offline learning facilities tailored to every student’s needs.
      </p>

      {/* HIGHLIGHT STATS */}
      <div className="grid grid-cols-3 gap-8">

        <div>
          <h3 className="text-3xl font-bold text-orange-500 mb-2">25+</h3>
          <p className="text-gray-600 text-sm">Years Experience</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-orange-500 mb-2">5,000+</h3>
          <p className="text-gray-600 text-sm">Students Mentored</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-orange-500 mb-2">95%</h3>
          <p className="text-gray-600 text-sm">Success Rate</p>
        </div>

      </div>

    </div>

    {/* RIGHT IMAGE AREA */}
    <div className="relative">

      {/* Soft Background Frame */}
      <div className="absolute -top-6 -right-6 w-full h-full bg-orange-100 rounded-3xl"></div>

      <img
        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
        alt="Paul Sir Classroom"
        className="relative z-10 rounded-3xl shadow-2xl w-full object-cover"
      />

      {/* Floating Badge */}
      <div className="absolute -bottom-8 left-10 bg-white rounded-2xl shadow-xl px-6 py-4 z-20">
        <p className="text-gray-800 font-semibold">
          Trusted by Thousands of Commerce Students
        </p>
      </div>

    </div>

  </div>
</section>


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
        Paul Sir’s Classes provides structured and result-oriented commerce coaching 
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


     


  

    </div>
  )
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 flex items-center gap-4">
      <div className="bg-gray-100 p-4 rounded-xl text-orange-500">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  )
}
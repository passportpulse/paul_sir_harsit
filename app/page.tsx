'use client'

import { Phone, Mail, MapPin, BookOpen, GraduationCap, Star, Award } from 'lucide-react'
import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <HeroSection />

      {/* ================= ONLINE LEARNING CENTER SECTION ================= */}
      <AboutSection />

 {/* ================= PREMIUM ABOUT INSTITUTE ================= */}
<section className="py-32 bg-gradient-to-b from-[#f9fafc] to-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">

    {/* ===== LEFT IMAGE AREA ===== */}
    <div className="relative">

      {/* Background Accent Layer */}
      <div className="absolute -top-10 -left-10 w-[90%] h-[90%] bg-orange-100 rounded-[40px]"></div>
      <div className="absolute -bottom-10 -right-10 w-[90%] h-[90%] border-4 border-orange-200 rounded-[40px]"></div>

      {/* Main Image */}
      <img
        src="/paul.jpeg"
        alt="J Paul Sir"
        className="relative z-10 rounded-[40px] shadow-2xl w-full object-cover"
      />

      {/* Floating Achievement Card */}
      <div className="absolute -bottom-10 left-10 bg-white px-8 py-6 rounded-3xl shadow-xl z-20">
        <p className="text-sm text-gray-500">Guiding Students Since</p>
        <p className="text-sm text-gray-600 mt-1">25+ Years of Excellence</p>
      </div>

    </div>

    {/* ===== RIGHT CONTENT ===== */}
    <div>

      <p className="text-orange-500 font-semibold tracking-wide uppercase mb-5">
        About The Institute
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-8">
        Empowering Commerce Students
        <br />
        With Expertise & Integrity
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Paul Sir’s Classes stands as one of North Kolkata’s most trusted commerce coaching institutes,
        strategically located near <span className="font-medium text-gray-800">Girish Park Metro</span> 
        and <span className="font-medium text-gray-800">Dumdum Station</span>.
        For over two decades, the institute has consistently produced excellent academic results.
      </p>

      <p className="text-gray-600 leading-relaxed mb-10">
        Our approach combines structured syllabus planning, deep conceptual clarity,
        exam-focused strategy, and personalized mentorship — ensuring every student
        achieves confidence and academic excellence in commerce subjects.
      </p>

      {/* Mentor Highlight Card */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">

        <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
          J. Paul Sir (M.Com, CMA)
        </h3>

        <p className="text-orange-500 font-medium mb-4">
          Founder & Lead Commerce Mentor
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          Renowned for concept clarity, practical accounting insight,
          structured notes, and powerful exam strategies. 
          His mentorship style blends discipline with approachability,
          making complex financial concepts easy to master.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-6">

          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Award className="text-orange-500" size={20} />
            </div>
            <div>
              <div className="font-bold text-[#0f172a]">25+ Years</div>
              <div className="text-sm text-gray-600">Teaching Experience</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Star className="text-orange-500" size={20} />
            </div>
            <div>
              <div className="font-bold text-[#0f172a]">5.0 Rated</div>
              <div className="text-sm text-gray-600">Trusted by Students</div>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

  

      {/* ================= COURSES ================= */}
      <section id="courses" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#0b1e6d] mb-12">
          Courses Offered
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Class 11–12 (ISC / CBSE / H.S)",
              subjects: "Accounts, Economics, Business Studies, Commercial Studies"
            },
            {
              title: "B.Com / BBA / MBA",
              subjects: "Financial Accounting, Costing, Taxation, Financial Management, Corporate Accounting"
            },
            {
              title: "Professional Courses",
              subjects: "CA, CMA, CS (Foundation & Intermediate)"
            }
          ].map((course, index) => (
            <div key={index} className="bg-white p-8 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition">
              <GraduationCap className="text-[#0b1e6d] mb-4" size={40} />
              <h3 className="text-xl font-bold mb-4">{course.title}</h3>
              <p className="text-gray-600">{course.subjects}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-[#0b1e6d] text-white text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <div>
            <BookOpen size={40} className="mx-auto mb-4 text-[#f5c542]" />
            <h3 className="font-semibold mb-2">Structured Notes</h3>
            <p className="text-gray-300">Effective notes & exam-focused preparation</p>
          </div>

          <div>
            <Star size={40} className="mx-auto mb-4 text-[#f5c542]" />
            <h3 className="font-semibold mb-2">Concept Clarity</h3>
            <p className="text-gray-300">Personalized doubt clearing sessions</p>
          </div>

          <div>
            <Award size={40} className="mx-auto mb-4 text-[#f5c542]" />
            <h3 className="font-semibold mb-2">Online & Offline Classes</h3>
            <p className="text-gray-300">Flexible learning modes available</p>
          </div>

        </div>
      </section>

   

    </div>
  )
}
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
 {/* ================= WHY CHOOSE US ================= */}
<section className="py-28 bg-gradient-to-br from-[#0b1e6d] via-[#0f2c9e] to-[#0b1e6d] text-white relative overflow-hidden">

  {/* Soft Overlay Glow */}
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="max-w-3xl mb-16">
      <p className="text-[#f5c542] font-semibold uppercase tracking-wider mb-4">
        Why Choose Paul Sir’s Classes
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
        The Right Guidance Makes <br /> All The Difference
      </h2>

      <p className="text-gray-300 leading-relaxed">
        With over 25 years of excellence in commerce education, we combine structured learning,
        deep conceptual clarity, and exam-focused mentoring to help students achieve academic
        confidence and outstanding results.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition duration-300">
        <div className="bg-[#f5c542] text-[#0b1e6d] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          <BookOpen size={28} />
        </div>

        <h3 className="text-xl font-semibold mb-4">
          Structured Study Material
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Comprehensive notes, simplified explanations, and exam-oriented practice
          sets designed specifically for Accounts, Economics, and Business Studies.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition duration-300">
        <div className="bg-[#f5c542] text-[#0b1e6d] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          <Star size={28} />
        </div>

        <h3 className="text-xl font-semibold mb-4">
          Concept Clarity & Doubt Solving
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Interactive teaching methods with regular doubt-clearing sessions
          ensure every student understands concepts thoroughly before exams.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition duration-300">
        <div className="bg-[#f5c542] text-[#0b1e6d] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          <Award size={28} />
        </div>

        <h3 className="text-xl font-semibold mb-4">
          Flexible Learning Modes
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Choose between offline classroom sessions or online live classes,
          ensuring accessibility and flexibility for every student.
        </p>
      </div>

    </div>

  </div>
</section>
  
{/* ================= COURSES ================= */}
<section id="courses" className="py-28 bg-[#f8f9fb]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header Row */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-6">

      <div>
        <p className="text-orange-500 font-semibold uppercase tracking-wide mb-3">
          Our Academic Programs
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a]">
          Courses Offered
        </h2>
      </div>

      <a href='/courses' className="self-start lg:self-auto bg-[#0f172a] hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md">
        View More Courses →
      </a>

    </div>

    {/* Course Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          title: "Class 11–12 (ISC / CBSE / H.S)",
          desc: "Accounts, Economics, Business Studies & Commercial Applications",
        },
        {
          title: "B.Com (All Semesters)",
          desc: "Financial Accounting, Corporate Accounts, Cost & Management Accounting",
        },
        {
          title: "BBA / MBA",
          desc: "Financial Management, Business Law, Taxation & Strategic Finance",
        },
        {
          title: "CA Foundation & Inter",
          desc: "Accounting, Law, Economics, Taxation & Financial Management",
        },
        {
          title: "CMA Foundation & Inter",
          desc: "Costing, Financial Accounting, Direct & Indirect Taxation",
        },
        {
          title: "CS (Company Secretary)",
          desc: "Company Law, Business Environment & Corporate Governance",
        },
      ].map((course, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-10 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >
          <div className="bg-orange-100 text-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
            <GraduationCap size={26} />
          </div>

          <h3 className="text-xl font-bold text-[#0f172a] mb-4 leading-snug">
            {course.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm">
            {course.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

{/* ================= TESTIMONIALS ================= */}
<section className="py-28 bg-[#f8f9fb]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="max-w-3xl mb-16">
      <p className="text-orange-500 font-semibold uppercase tracking-wide mb-4">
        Student Testimonials
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
        What Our Students Say
      </h2>

      <p className="text-gray-600 leading-relaxed">
        Over the years, thousands of commerce students have trusted Paul Sir’s
        Classes for academic excellence and exam success.
      </p>
    </div>

    {/* Testimonial Cards */}
    <div className="grid md:grid-cols-3 gap-10">

      {[
        {
          name: "Ritika Sharma",
          course: "ISC Commerce Student",
          review:
            "Paul Sir’s teaching style made Accounts and Economics extremely easy to understand. His structured notes and exam strategies helped me score above 90%.",
        },
        {
          name: "Arjun Mehta",
          course: "B.Com Student",
          review:
            "The clarity with which Sir explains Financial Accounting and Taxation is outstanding. Doubt clearing sessions are very helpful and practical.",
        },
        {
          name: "Sneha Agarwal",
          course: "CA Foundation Aspirant",
          review:
            "Best commerce mentor in Kolkata. The discipline, practice sessions, and motivation provided by Sir boosted my confidence for professional exams.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
        >
          {/* Stars */}
          <div className="flex text-orange-500 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          {/* Review */}
          <p className="text-gray-600 leading-relaxed mb-8">
            "{item.review}"
          </p>

          {/* Student Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold">
              {item.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-[#0f172a]">
                {item.name}
              </div>
              <div className="text-sm text-gray-500">
                {item.course}
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>
   

    </div>
  )
}
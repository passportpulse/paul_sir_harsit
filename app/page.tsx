'use client'

import { Phone, Mail, MapPin, BookOpen, GraduationCap, Star, Award } from 'lucide-react'
import AboutSection from '@/components/AboutSection'
import HeroSection from '@/components/HeroSection'
import NoticeBoard from '@/components/NoticeBoard'

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/bg.png"
            alt="background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>

        {/* Animated Background Circles */}
        <div className="absolute w-[500px] h-[500px] bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-300 opacity-20 rounded-full blur-3xl animate-bounce bottom-[-120px] right-[-120px]" />

        {/* Logo and Content - Centered */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <img
            src="/logo.png"
            alt="logo"
            className="w-32 md:w-86 mb-6 animate-logo"
          />

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide animate-title">
            PAUL SIR'S CLASSES
          </h1>

          {/* Slogan */}
          <p className="mt-6 text-xl md:text-3xl text-blue-100 animate-slogan">
            From Basics to Brilliance in Commerce.
          </p>

          {/* Button */}
          <button className="mt-10 px-8 py-4 text-lg bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-100 transition animate-slogan">
            Join Now
          </button>
        </div>


      </section>

      {/* ================= HERO SECTION ================= */}
      <HeroSection />
      <AboutSection />
      {/* ================= PREMIUM ABOUT INSTITUTE ================= */}
      <section className="py-32 bg-gradient-to-b from-[#f9fafc] to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">

          {/* ===== LEFT IMAGE AREA ===== */}
        <div className="relative md:sticky md:top-24">


            {/* Background Accent Layer */}
            <div className="absolute -top-10 -left-10 w-[90%] h-[90%] bg-orange-100 rounded-[40px]"></div>
<div className="hidden lg:block absolute -bottom-10 -right-10 w-[90%] h-[90%] border-4 border-orange-200 rounded-[40px]"></div>
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
              Paul Sir’s Classes is one of the best Commerce coaching institutes in North Kolkata, trusted by students and parents for high-quality Commerce education and excellent board results. Conveniently located near the <span className="font-medium text-gray-800">Girish Park Metro</span> and <span className="font-medium text-gray-800">Dum Dum Station</span>, the institute has been providing top Commerce coaching in Kolkata for over 20 years, helping Class 11 and Class 12 Commerce students build strong academic foundations and achieve outstanding success.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We specialize in Accountancy coaching, Economics tuition, and Business Studies coaching, Costing & Taxation, Corporate Accounting, Financial management guidance using a concept-based teaching approach, exam-focused preparation, and regular test series designed to help students secure high marks in board examinations. Our structured syllabus coverage, clear conceptual explanations, practical problem-solving guidance, and personalized attention ensure that every student develops a deep understanding of Commerce subjects.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Recognized as a trusted Commerce tuition center in North Kolkata, Paul Sir’s Classes emphasizes small batch learning, individual mentoring, doubt-clearing sessions, and result-driven teaching methods. Located conveniently near Girish Park and Dum Dum, the institute continues to guide students toward academic excellence, confidence, and successful careers in Commerce and business. 
            </p>

      
            {/* Mentor Highlight Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">

              <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                J. Paul Sir (M.Com, CMA)
              </h3>

              <p className="text-orange-500 font-medium mb-4">
                Founder & Lead Commerce Mentor
              </p>

              <p className="text-gray-600 leading-relaxed mb-3">
                J. Paul Sir (M.Com, CMA) is a highly respected Commerce educator and mentor in North Kolkata, known for his exceptional ability to simplify complex accounting and commerce concepts. With over 25 years of dedicated teaching experience, he has successfully guided thousands of Class 11 and Class 12 Commerce students toward outstanding academic results and strong conceptual understanding. His teaching approach focuses on deep concept clarity, practical accounting knowledge, structured notes, and strategic exam preparation, enabling students to confidently master subjects like Accountancy, Economics, and Business Studies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                What truly sets Paul Sir apart is his unique mentorship style that combines discipline, personal attention, and student-friendly guidance, creating a supportive learning environment where every student can thrive. Widely trusted by students and parents, Paul Sir’s Classes has become a leading Commerce coaching destination in North Kolkata, known for consistent results, strong fundamentals, and academic excellence.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
      {/* ================= NOTICE BOARD ================= */}
      <NoticeBoard />

      {/* ================= ONLINE LEARNING CENTER SECTION ================= */}
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

      {/* Gallery Section */}
      <section className="py-28 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Section Header */}
            <div className="text-left mb-16">
              <p className="text-orange-500 font-semibold uppercase tracking-wide mb-3">
                Our Gallery
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a]">
                Memories & Moments
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl ">
                Explore our journey through photos of classroom sessions, events, achievements, and student success stories.
              </p>
            </div>
            {/* View More Button */}
        <div className="hidden md:block text-center">
              <a
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f172a] hover:bg-orange-500 text-white font-semibold rounded-xl  transition duration-300"
              >
                View Full Gallery
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            <div className="relative group overflow-hidden rounded-xl  transition duration-300 bg-white">
              <img
                src="/gallery/33.jpeg"
                alt="Classroom Session"
                className="w-full h-64 object-contain group-hover:scale-110 transition duration-300"
              />
            </div>

            <div className="relative group overflow-hidden rounded-xl  transition duration-300 bg-white">
              <img
                src="/gallery/32.jpeg"
                alt="Student Achievement"
                className="w-full h-64 object-contain group-hover:scale-110 transition duration-300"
              />
            </div>

            <div className="relative group overflow-hidden rounded-xl transition duration-300 bg-white">
              <img
                src="/gallery/31.jpeg"
                alt="Events & Activities"
                className="w-full h-64 object-contain group-hover:scale-110 transition duration-300"
              />
            </div>

            <div className="relative group overflow-hidden rounded-xl transition duration-300 bg-white">
              <img
                src="/gallery/29.jpeg"
                alt="Campus Life"
                className="w-full h-64 object-contain group-hover:scale-110 transition duration-300"
              />
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
                name: "Manjima Mukherjee",
                course: "ISC Commerce Student",
                review:
                  "He is best teacher you can ever have... I'm studying under his guidance for a long time he is genuinely very helpful and his teaching techniques are very unique and innovative..you should must give it a try.",
              },
              {
                name: "Arin Sarkar",
                course: "B.Com Student",
                review:
                  "This tuition was too much effective that it made accountancy interesting for me and the sir is friendly and thus teach with having Little funs which engage the students more into the studies.",
              },
              {
                name: "NINJA GMR FF",
                course: "CA Foundation Aspirant",
                review:
                  "Sir is too good. His concept is very unique and usefull for us....",
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
                    {/* <div className="text-sm text-gray-500">
                      {item.course}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Final Enrollment Section */}
      <section className="py-24 bg-gradient-to-r from-[#0b1e6d] to-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of successful students who have achieved their academic goals with Paul Sir's expert guidance. Take the first step towards your success today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/enroll"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f5c542] text-[#0b1e6d] font-bold rounded-xl hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
              >
                Enroll Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition duration-300 border border-white/30"
              >
                Have Questions? Contact Us
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Faculty</h3>
                <p className="text-white/80 text-sm">25+ years of experience in commerce education</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Personalized Attention</h3>
                <p className="text-white/80 text-sm">Small batch sizes for individual focus</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-white/80 text-sm">95%+ success rate in board exams</p>
              </div>
            </div>

            <p className="text-white/60 text-sm mt-12">
              Limited seats available. Enroll today to secure your spot!
            </p>
          </div>
        </div>
      </section>


    </div>
  )
}
'use client'

import { Phone, Mail, MapPin, BookOpen, GraduationCap, Star, Award } from 'lucide-react'
import AboutSection from '@/components/AboutSection'

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e6d]/90 to-[#1e3a8a]/85"></div>

        <div className="relative max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            PAUL SIR’S CLASSES
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-6">
            25+ Years of Excellence in Commerce Education
          </p>

          <p className="text-lg text-gray-300 mb-8">
            Accounts • Economics • Taxation • Costing • Business Studies  
            For ISC, CBSE, H.S, B.Com, BBA, MBA, CA, CMA & CS
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9007019442"
              className="bg-[#f5c542] text-[#0b1e6d] px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Call Now
            </a>
            <a
              href="#courses"
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0b1e6d] transition"
            >
              View Courses
            </a>
          </div>
        </div>
      </section>

      {/* ================= ONLINE LEARNING CENTER SECTION ================= */}
      <AboutSection />

      {/* ================= ABOUT INSTITUTE ================= */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#0b1e6d] mb-8">
          About The Institute
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Paul Sir’s Classes is one of the most trusted commerce coaching institutes in North Kolkata.
          Located near Girish Park Metro and Dumdum Station, the institute has been guiding students
          for over 25 years with structured teaching, exam-focused preparation, and personalized attention.
        </p>
      </section>

      {/* ================= TEACHER SECTION ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold text-[#0b1e6d] mb-6">
              Meet Your Mentor
            </h2>

            <h3 className="text-2xl font-semibold mb-4">
              J. Paul Sir (M.Com, CMA)
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              A highly experienced faculty with 25+ years of excellence in Commerce education.
              Known for concept clarity, structured notes, exam strategies and personalized doubt clearing.
            </p>

            <div className="flex gap-6 mt-6">
              <div className="flex items-center gap-2">
                <Award className="text-[#f5c542]" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-[#f5c542]" />
                <span>5.0 Rated Institute</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/paul.jpeg"
              className="rounded-2xl shadow-2xl"
              alt="Teacher"
            />
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
'use client'

import { Award, BookOpen, GraduationCap, Star, MapPin, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white"
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


      {/* ================= ABOUT INSTITUTE ================= */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold text-[#0b1e6d] mb-6">
              Our Institute
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Paul Sir’s Classes is one of the most trusted commerce coaching institutes 
              in North Kolkata. Located near Girish Park Metro Station and Dumdum Station, 
              the institute has been guiding students successfully for more than 25 years.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The institute is known for structured teaching methods, exam-oriented preparation,
              detailed notes, regular doubt-clearing sessions and both online & offline teaching facilities.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
              alt="Classroom"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>


      {/* ================= FOUNDER SECTION ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="Teacher"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#0b1e6d] mb-6">
              Meet The Founder
            </h2>

            <h3 className="text-2xl font-semibold mb-4">
              Joymalya Paul (J. Paul Sir)
            </h3>

            <p className="text-gray-700 mb-4">
              M.Com, CMA — 25+ years experienced faculty for Commerce guidance.
              Highly respected for his conceptual clarity, exam strategies and personal attention.
            </p>

            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3">
                <Award className="text-[#f5c542]" />
                <span>25+ Years Teaching Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="text-[#f5c542]" />
                <span>Specialist in Accounts & Economics</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-[#f5c542]" />
                <span>Thousands of Successful Students</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= COURSES OVERVIEW ================= */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#0b1e6d] mb-12">
          Subjects & Courses We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
            <GraduationCap size={40} className="text-[#0b1e6d] mb-4" />
            <h3 className="font-bold mb-3">School Boards</h3>
            <p className="text-gray-600">
              ISC, CBSE, H.S & Other State Boards  
              (Accounts, Economics, Business Studies, Commercial Studies)
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
            <BookOpen size={40} className="text-[#0b1e6d] mb-4" />
            <h3 className="font-bold mb-3">Undergraduate Courses</h3>
            <p className="text-gray-600">
              B.Com (All Semesters), BBA, MBA  
              Financial Accounting, Costing, Taxation, Corporate Accounting
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
            <Star size={40} className="text-[#0b1e6d] mb-4" />
            <h3 className="font-bold mb-3">Professional Courses</h3>
            <p className="text-gray-600">
              CA, CMA, CS (Foundation & Intermediate)  
              Direct & Indirect Taxation, Auditing, Financial Management
            </p>
          </div>

        </div>
      </section>


      {/* ================= LOCATIONS ================= */}
      <section className="py-20 bg-[#0b1e6d] text-white text-center">
        <h2 className="text-4xl font-bold mb-10">Our Locations</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">

          <div>
            <MapPin size={32} className="mx-auto mb-4 text-[#f5c542]" />
            <h3 className="font-semibold mb-2">Main Centre</h3>
            <p className="text-gray-200">
              35B, South Sinthee Road  
              Kolkata – 700050  
              (Near Dumdum Station)
            </p>
          </div>

          <div>
            <MapPin size={32} className="mx-auto mb-4 text-[#f5c542]" />
            <h3 className="font-semibold mb-2">Branch Centre</h3>
            <p className="text-gray-200">
              148, Ramdulal Sarkar Street  
              Hedua, Kolkata – 700006  
              (Near Girish Park Metro)
            </p>
          </div>

        </div>
      </section>


  

    </div>
  )
}
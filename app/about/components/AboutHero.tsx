'use client'

import { Award, BookOpen, GraduationCap, Star, MapPin, Users, Play, Monitor, X, Clock, Target, TrendingUp } from 'lucide-react'

interface AboutHeroProps {
  onShowDetailedInfo: () => void
}

export default function AboutHero({ onShowDetailedInfo }: AboutHeroProps) {
  return (
    <>
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
            About Paul Sir's Classes
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
              About Paul Sir's Classes
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
              Welcome To The Premier <br />
              Commerce Learning Center
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              Paul Sir's Classes is dedicated to providing top-quality commerce education 
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

            <button 
              onClick={onShowDetailedInfo}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg flex items-center gap-3"
            >
              Read More →
            </button>

          </div>

        </div>
      </section>
    </>
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

'use client'

import { Phone, Play, Users, Award, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] bg-[#f8f6f2] overflow-hidden">
      
      {/* GOLD ANIMATED DOTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-40 left-60 w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-72 left-32 w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse opacity-80" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-40 w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse opacity-70" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-24 right-72 w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse opacity-70" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 px-6 w-full h-full flex items-center">
        <div className="flex justify-between items-center gap-5 w-full">

          {/* LEFT CONTENT */}
          <div className="space-y-8 py-16 lg:py-0">
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight">
              Let's Start Smart
              <div className="relative inline-block mx-2">
                <span className="text-yellow-500 border border-yellow-500 px-3 py-1 rounded rotate-45 relative z-10">Learning</span>
                {/* 4 moving dots around the border */}
                <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-border-move"></div>
                <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-border-move" style={{animationDelay: '1s'}}></div>
                <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-border-move" style={{animationDelay: '2s'}}></div>
                <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-border-move" style={{animationDelay: '3s'}}></div>
              </div>
              Today
            </h1>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Paul Sir’s Classes provides comprehensive commerce education 
              with 25+ years of excellence. Learn Accounts, Economics, 
              Taxation & Business Studies from expert faculty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('tel:9007019442', '_self')}
                className="bg-yellow-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg flex items-center gap-3"
              >
                <Phone size={20} />
                Contact Now
              </button>

              <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-300 flex items-center gap-3">
                <Play size={20} />
                Watch Demo
              </button>
            </div>

         

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center h-full">

            {/* IMAGE - Larger and more prominent */}
            <div className="relative z-10">
              <img
                src="/banner_img-1.png"
                alt="Student"
                className="w-full h-auto object-contain max-h-[85vh]"
              />
            </div>

            {/* Floating Card 1 - Top Left */}
            <div className="absolute top-0 left-0 bg-white rounded-2xl shadow-xl p-4 animate-bounce">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Play className="text-yellow-500" size={18} />
                </div>
                <div>
                  <div className="font-semibold">200+</div>
                  <div className="text-sm text-gray-500">Video Courses</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - Middle Right */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 animate-bounce" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Users className="text-blue-500" size={18} />
                </div>
                <div>
                  <div className="font-semibold">4.5k+</div>
                  <div className="text-sm text-gray-500">Satisfied Students</div>
                </div>
              </div>
            </div>

            {/* Instructor Card - Bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-2xl shadow-xl p-4 animate-bounce" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-3">
                <Award size={18} />
                <div>
                  <div className="font-semibold">Expert Instructor</div>
                  <div className="text-sm text-gray-300">25+ Years Experience</div>
                </div>
              </div>
            </div>

            {/* Rating Badge - Top Right */}
            <div className="absolute top-4 right-4 bg-yellow-400 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 animate-pulse">
              <Star className="fill-white text-white" size={14} />
              <span className="font-bold text-gray-900">4.9</span>
            </div>

          </div>
        </div>
      </div>

      
    {/* CUSTOM ANIMATION STYLES */}
      <style jsx>{`
        @keyframes moveAroundBorder {
          0% { top: -4px; left: -4px; }
          25% { top: -4px; left: calc(100% - 4px); }
          50% { top: calc(100% - 4px); left: calc(100% - 4px); }
          75% { top: calc(100% - 4px); left: -4px; }
          100% { top: -4px; left: -4px; }
        }
        
        .animate-border-move {
          animation: moveAroundBorder 4s linear infinite;
        }
      `}</style>
    </section>
  )
}
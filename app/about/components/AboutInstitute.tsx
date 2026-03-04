'use client'

export default function AboutInstitute() {
  return (
    <>
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
              Paul Sir's Classes is one of most trusted commerce coaching institutes 
              in North Kolkata. Strategically located near <span className="font-medium text-gray-800">Girish Park Metro</span> 
              and <span className="font-medium text-gray-800">Dumdum Station</span>, 
              we have been mentoring students successfully for more than 25 years.
            </p>

            <p className="text-gray-600 leading-relaxed mb-10">
              Our institute is known for structured teaching methodology, exam-oriented preparation,
              detailed study materials, regular doubt-clearing sessions, and flexible 
              online & offline learning facilities tailored to every student's needs.
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
    </>
  )
}

import { useState } from 'react'
import {
  GraduationCap,
  Users,
  Clock,
  Star,
  Award,
  BookOpen,
  CheckCircle,
  PlayCircle,
  Calendar,
  Download,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react'

interface CourseDetailProps {
  course: {
    id: number
    title: string
    description: string
    longDescription?: string
    duration: string
    level: string
    students: string
    rating: number
    features: string[]
    curriculum: {
      module: string
      topics: string[]
      duration: string
    }[]
    instructor: {
      name: string
      title: string
      experience: string
      image?: string
    }
    requirements: string[]
    outcomes: string[]
    schedule: {
      days: string
      time: string
      mode: string
    }
    materials: string[]
    certification: boolean
    placement: boolean
    image?: string
  }
  onEnroll: () => void
}

export default function CourseDetail({ course, onEnroll }: CourseDetailProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const handleEnroll = () => {
    // Navigate to enroll page with course pre-selected
    window.location.href = `/enroll?course=${encodeURIComponent(course.title)}`
  }

  const handleDownloadPDF = () => {
    // Generate and download course brochure PDF
    const courseContent = `
      PAUL SIR'S CLASSES - COURSE BROCHURE
      
      Course: ${course.title}
      Duration: ${course.duration}
      Level: ${course.level}
      Students Enrolled: ${course.students}
      Rating: ${course.rating}/5
      
      Description:
      ${course.longDescription || course.description}
      
      Key Features:
      ${course.features.map(feature => `• ${feature}`).join('\n')}
      
      Course Curriculum:
      ${course.curriculum.map(module => 
        `${module.module} (${module.duration}):\n${module.topics.map(topic => `  - ${topic}`).join('\n')}`
      ).join('\n\n')}
      
      Instructor:
      ${course.instructor.name}
      ${course.instructor.title}
      ${course.instructor.experience}
      
      Schedule:
      ${course.schedule.days} - ${course.schedule.time}
      Mode: ${course.schedule.mode}
      
      Requirements:
      ${course.requirements.map(req => `• ${req}`).join('\n')}
      
      Learning Outcomes:
      ${course.outcomes.map(outcome => `• ${outcome}`).join('\n')}
      
      Study Materials:
      ${course.materials.map(material => `• ${material}`).join('\n')}
      
      Certification: ${course.certification ? 'Available' : 'Not Available'}
      Placement Assistance: ${course.placement ? 'Available' : 'Not Available'}
      
      Contact Information:
      📞 Phone: 9007019442, 9830275787
      📧 Email: paulsirsclasses@gmail.com
      📍 Main Branch: 35B, South Sinthee Road, Kolkata – 700050
      📍 Other Branch: 148, Ramdulal Sarkar Street, Hedua, Kolkata – 700006
      
      Website: www.paulsirsclasses.com
    `.trim()

    // Create a blob with the content
    const blob = new Blob([courseContent], { type: 'text/plain' })
    
    // Create download link
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${course.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_brochure.txt`
    
    // Trigger download
    document.body.appendChild(a)
    a.click()
    
    // Cleanup
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
    
    // Show success message
    alert('Course brochure downloaded successfully!')
  }

  return (
    <div className="bg-white">

      {/* Course Header */}
      {/* ================= PREMIUM COURSE HEADER ================= */}
      <section className="relative bg-gradient-to-br from-[#0b1e6d] via-[#112a88] to-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>

              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#f5c542] text-[#0b1e6d] px-4 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </span>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < course.rating
                          ? "text-[#f5c542] fill-current"
                          : "text-white/40"
                        }`}
                    />
                  ))}
                  <span className="ml-2 text-sm">({course.rating})</span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {course.title}
              </h1>

              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                {course.longDescription || course.description}
              </p>

              {/* Premium CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleEnroll}
                  className="bg-[#f5c542] hover:bg-[#e4b338] text-[#0b1e6d] px-8 py-4 rounded-xl font-bold transition shadow-xl hover:scale-105 flex items-center gap-2"
                >
                  Enroll Now
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={handleDownloadPDF}
                  className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition flex items-center gap-2"
                >
                  <Download size={18} />
                  Download PDF
                </button>

            
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                {course.image ? (
                  <img
                    src={course.image}
                    className="rounded-2xl w-full h-72 object-cover"
                  />
                ) : (
                  <div className="h-72 flex items-center justify-center">
                    <GraduationCap className="h-24 w-24 text-white/50" />
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* GLASS INFO BAR */}
          <div className="mt-16 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 grid md:grid-cols-4 gap-6">
            <Info label="Duration" value={course.duration} icon={<Clock size={18} />} />
            <Info label="Students" value={course.students} icon={<Users size={18} />} />
            <Info label="Schedule" value={course.schedule.days} icon={<Calendar size={18} />} />
            <Info label="Certificate" value={course.certification ? "Yes" : "No"} icon={<Award size={18} />} />
          </div>

        </div>
      </section>

      {/* Course Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b">
            {['overview', 'curriculum', 'instructor', 'requirements', 'outcomes', 'demo'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold capitalize transition-all duration-200 border-b-2 ${activeTab === tab
                    ? 'text-[#0b1e6d] border-[#0b1e6d]'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Main Content */}
            <div className="lg:col-span-2">

              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0b1e6d] mb-4">About This Course</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {course.longDescription || course.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#0b1e6d] mb-4">What You'll Learn</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#f5c542] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#0b1e6d] mb-4">Course Schedule</h3>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Days</p>
                          <p className="font-semibold text-gray-800">{course.schedule.days}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Time</p>
                          <p className="font-semibold text-gray-800">{course.schedule.time}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Mode</p>
                          <p className="font-semibold text-gray-800">{course.schedule.mode}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Curriculum Tab */}
              {activeTab === 'curriculum' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#0b1e6d] mb-6">Course Curriculum</h3>
                  {course.curriculum.map((module, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-[#0b1e6d]">
                          Module {index + 1}: {module.module}
                        </h4>
                        <span className="text-sm text-gray-500">{module.duration}</span>
                      </div>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-3 text-gray-700">
                            <PlayCircle className="h-4 w-4 text-[#f5c542]" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Instructor Tab */}
              {activeTab === 'instructor' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#0b1e6d] mb-6">Meet Your Instructor</h3>
                  <div className="bg-gray-50 rounded-xl p-8">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#0b1e6d] to-[#1e3a8a] rounded-full flex items-center justify-center">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-[#0b1e6d]">{course.instructor.name}</h4>
                        <p className="text-lg text-gray-600">{course.instructor.title}</p>
                        <p className="text-gray-500">{course.instructor.experience}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our experienced instructor brings years of expertise in commerce education,
                      providing personalized attention and practical insights to help students excel
                      in their examinations and future careers.
                    </p>
                  </div>
                </div>
              )}

              {/* Requirements Tab */}
              {activeTab === 'requirements' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#0b1e6d] mb-6">Course Requirements</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <ul className="space-y-3">
                      {course.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#f5c542] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Outcomes Tab */}
              {activeTab === 'outcomes' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#0b1e6d] mb-6">Learning Outcomes</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <ul className="space-y-3">
                      {course.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-[#f5c542] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Demo Tab */}
              {activeTab === 'demo' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-[#0b1e6d] mb-6">Watch Demo Classes</h3>
                  
                  {/* Featured Demo Video */}
                  <div className="bg-gradient-to-br from-[#0b1e6d] to-[#1e3a8a] rounded-2xl p-8 text-white">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h4 className="text-3xl font-bold mb-4">Experience Our Teaching Style</h4>
                        <p className="text-white/80 mb-6">
                          Get a glimpse of our comprehensive commerce education approach with expert faculty and interactive learning methods.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <button className="bg-[#f5c542] hover:bg-[#e4b338] text-[#0b1e6d] px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2">
                            <PlayCircle className="h-5 w-5" />
                            Watch Full Demo
                          </button>
                          <button className="bg-white/20 backdrop-blur border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition">
                            More Videos
                          </button>
                        </div>
                      </div>
                      <div className="bg-black/20 rounded-xl p-4">
                        <div className="aspect-video bg-black/40 rounded-lg flex items-center justify-center">
                          <PlayCircle className="h-16 w-16 text-white/80 hover:text-white transition cursor-pointer" />
                        </div>
                        <p className="text-center mt-3 text-white/70">Introduction to {course.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Sample Class Videos */}
                  <div>
                    <h4 className="text-xl font-bold text-[#0b1e6d] mb-6">Sample Class Recordings</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Chapter 1: Basic Concepts",
                          duration: "45:30",
                          description: "Understanding fundamental principles with real-world examples",
                          thumbnail: "demo1"
                        },
                        {
                          title: "Problem Solving Session",
                          duration: "38:15",
                          description: "Step-by-step approach to complex problems",
                          thumbnail: "demo2"
                        },
                        {
                          title: "Exam Preparation Tips",
                          duration: "52:20",
                          description: "Strategic approach to scoring high marks",
                          thumbnail: "demo3"
                        },
                        {
                          title: "Practical Applications",
                          duration: "41:45",
                          description: "Applying theory to practical business scenarios",
                          thumbnail: "demo4"
                        },
                        {
                          title: "Q&A Session",
                          duration: "35:10",
                          description: "Student doubts and expert solutions",
                          thumbnail: "demo5"
                        },
                        {
                          title: "Revision Workshop",
                          duration: "48:55",
                          description: "Complete chapter revision with key points",
                          thumbnail: "demo6"
                        }
                      ].map((video, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                          <div className="relative">
                            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <PlayCircle className="h-12 w-12 text-[#0b1e6d]/60 hover:text-[#0b1e6d] transition" />
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                              {video.duration}
                            </div>
                            <div className="absolute top-2 left-2 bg-[#f5c542] text-[#0b1e6d] px-2 py-1 rounded text-xs font-semibold">
                              FREE
                            </div>
                          </div>
                          <div className="p-4">
                            <h5 className="font-semibold text-gray-800 mb-2">{video.title}</h5>
                            <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                            <div className="mt-3 flex items-center justify-between">
                              <span className="text-xs text-gray-500">1.2K views</span>
                              <button className="text-[#0b1e6d] hover:text-[#1e3a8a] text-sm font-medium transition">
                                Watch →
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Student Testimonials */}
                  <div>
                    <h4 className="text-xl font-bold text-[#0b1e6d] mb-6">Student Success Stories</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          name: "Ananya Sharma",
                          course: "B.Com Semester 1",
                          rating: 5,
                          comment: "The demo classes helped me understand the teaching methodology. Paul Sir's explanation makes complex topics so easy to grasp!",
                          result: "Scored 92% in exams"
                        },
                        {
                          name: "Rahul Verma",
                          course: "CA Foundation",
                          rating: 5,
                          comment: "After watching the demo videos, I was confident about joining. The problem-solving approach is exceptional.",
                          result: "Cleared CA Foundation in first attempt"
                        }
                      ].map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6">
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-[#f5c542] fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-gray-800">{testimonial.name}</p>
                              <p className="text-sm text-gray-600">{testimonial.course}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-[#f5c542]">{testimonial.result}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-[#f5c542] to-[#e4b338] rounded-2xl p-8 text-center">
                    <h4 className="text-2xl font-bold text-[#0b1e6d] mb-4">Ready to Start Learning?</h4>
                    <p className="text-[#0b1e6d]/80 mb-6 max-w-2xl mx-auto">
                      Join thousands of successful students who have transformed their commerce education with Paul Sir's Classes.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <button
                        onClick={handleEnroll}
                        className="bg-[#0b1e6d] hover:bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-semibold transition flex items-center gap-2"
                      >
                        Enroll Now
                        <ArrowRight size={18} />
                      </button>
                      <button className="bg-white/20 backdrop-blur border border-white/30 text-[#0b1e6d] px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition">
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* Course Info Card */}
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="text-xl font-bold text-[#0b1e6d] mb-4">Course Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-semibold text-gray-600">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students</span>
                    <span className="font-semibold text-gray-600">{course.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < course.rating ? 'text-[#f5c542] fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-1 text-gray-600">({course.rating})</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificate</span>
                    <span className="font-semibold text-gray-600">{course.certification ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Placement</span>
                    <span className="font-semibold text-gray-600">{course.placement ? 'Yes' : 'No'}</span>
                  </div>
                </div>
              </div>

              {/* Materials */}
              <div className="bg-gray-50 rounded-xl p-6 border">
                <h3 className="text-xl font-bold text-[#0b1e6d] mb-4">Course Materials</h3>
                <ul className="space-y-2">
                  {course.materials.map((material, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <Download className="h-4 w-4 text-[#f5c542]" />
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 sticky top-8">
  <h3 className="text-2xl font-bold text-[#0b1e6d] mb-4">
    Ready To Join?
  </h3>

  <p className="text-gray-600 mb-6">
    Secure your seat today and start mastering commerce with expert guidance.
  </p>

  <button
    onClick={handleEnroll}
    className="w-full bg-[#0b1e6d] hover:bg-orange-500 text-white py-4 rounded-xl font-semibold transition mb-4"
  >
    Enroll Now
  </button>

  <div className="space-y-3 text-sm text-gray-600">
    <p><strong>Duration:</strong> {course.duration}</p>
    <p><strong>Mode:</strong> {course.schedule.mode}</p>
    <p><strong>Students:</strong> {course.students}</p>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


function Info({ label, value, icon }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#f5c542]">{icon}</div>
      <div>
        <p className="text-sm text-white/70">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  )
}
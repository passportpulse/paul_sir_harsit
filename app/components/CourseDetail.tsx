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

  return (
    <div className="bg-white">
      
      {/* Course Header */}
      <section className="bg-gradient-to-r from-[#0b1e6d] to-[#1e3a8a] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#f5c542] text-[#0b1e6d] px-3 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < course.rating ? 'text-[#f5c542] fill-current' : 'text-white opacity-50'}`} 
                    />
                  ))}
                  <span className="ml-1">({course.rating})</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {course.title}
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {course.longDescription || course.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#f5c542]" />
                  <div>
                    <p className="text-sm text-gray-300">Duration</p>
                    <p className="font-semibold">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#f5c542]" />
                  <div>
                    <p className="text-sm text-gray-300">Students</p>
                    <p className="font-semibold">{course.students}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#f5c542]" />
                  <div>
                    <p className="text-sm text-gray-300">Schedule</p>
                    <p className="font-semibold">{course.schedule.days}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#f5c542]" />
                  <div>
                    <p className="text-sm text-gray-300">Certificate</p>
                    <p className="font-semibold">{course.certification ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onEnroll}
                  className="bg-[#f5c542] hover:bg-[#e4b338] text-[#0b1e6d] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  Enroll Now
                  <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  href="tel:9007019442"
                  className="border border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#0b1e6d] transition flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </div>
            </div>
            
            {/* Right Content - Course Image */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {course.image ? (
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full h-64 bg-white/20 rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-24 w-24 text-white/50" />
                  </div>
                )}
              </div>
              
              {/* Instructor Card */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0b1e6d] to-[#1e3a8a] rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b1e6d]">{course.instructor.name}</h4>
                    <p className="text-sm text-gray-600">{course.instructor.title}</p>
                    <p className="text-xs text-gray-500">{course.instructor.experience}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Tabs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b">
            {['overview', 'curriculum', 'instructor', 'requirements', 'outcomes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold capitalize transition-all duration-200 border-b-2 ${
                  activeTab === tab
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
              <div className="bg-gradient-to-br from-[#0b1e6d] to-[#1e3a8a] text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <a href="tel:9007019442" className="flex items-center gap-3 hover:text-[#f5c542] transition">
                    <Phone className="h-5 w-5" />
                    <span>9007019442</span>
                  </a>
                  <a href="mailto:paulsirsclasses@gmail.com" className="flex items-center gap-3 hover:text-[#f5c542] transition">
                    <Mail className="h-5 w-5" />
                    <span>paulsirsclasses@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'
import CourseCard from '../components/CourseCard'
import { GraduationCap, Filter, Search, Star, Users, Clock, Award } from 'lucide-react'

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Courses', icon: <GraduationCap className="h-5 w-5" /> },
    { id: 'school', name: 'School Programs', icon: <Award className="h-5 w-5" /> },
    { id: 'college', name: 'College Programs', icon: <Users className="h-5 w-5" /> },
    { id: 'professional', name: 'Professional Courses', icon: <Star className="h-5 w-5" /> }
  ]

  const handleEnroll = (courseTitle: string) => {
    // Navigate to enroll page with course pre-selected
    window.location.href = `/enroll?course=${encodeURIComponent(courseTitle)}`
  }

  const coursesData = [
    // School Programs
    {
      id: 1,
      category: 'school',
      title: 'ICSE Accounts & Economics',
      description: 'Complete preparation for ICSE Class 11-12 Accounts and Economics with expert guidance and exam-focused study material.',
      duration: '12 Months',
      level: 'Class 11-12',
      students: '500+ Students',
      rating: 4.9,
      isPopular: true,
      features: [
        'Financial Accounting Fundamentals',
        'Double Entry System',
        'Trial Balance & Final Accounts',
        'Micro & Macro Economics',
        'Indian Economic Development',
        'Statistics & Econometrics'
      ]
    },
    {
      id: 2,
      category: 'school',
      title: 'ISC Commerce Stream',
      description: 'Comprehensive coaching for ISC Commerce subjects including Accounts, Economics, and Business Studies.',
      duration: '12 Months',
      level: 'Class 11-12',
      students: '450+ Students',
      rating: 4.8,
      features: [
        'Corporate Accounting',
        'Management Accounting',
        'Business Studies',
        'Economic Applications',
        'Project Work Guidance',
        'Mock Tests & Evaluations'
      ]
    },
    {
      id: 3,
      category: 'school',
      title: 'CBSE Commerce Complete',
      description: 'Full coverage of CBSE Class 11-12 Commerce curriculum with regular tests and personalized attention.',
      duration: '12 Months',
      level: 'Class 11-12',
      students: '600+ Students',
      rating: 4.7,
      features: [
        'Accountancy Part 1 & 2',
        'Business Studies',
        'Economics Micro & Macro',
        'Project Work',
        'Case Study Analysis',
        'Board Exam Preparation'
      ]
    },
    {
      id: 4,
      category: 'school',
      title: 'Higher Secondary Commerce',
      description: 'Specialized coaching for West Bengal HS Commerce with focus on Accounts, Business Economics, and Statistics.',
      duration: '12 Months',
      level: 'Class 11-12',
      students: '350+ Students',
      rating: 4.6,
      features: [
        'Business Mathematics',
        'Business Organization',
        'Cost Accounting',
        'Business Economics',
        'Statistics',
        'University Exam Pattern'
      ]
    },

    // College Programs
    {
      id: 5,
      category: 'college',
      title: 'B.Com Complete Program',
      description: 'All-semester B.Com coaching covering Financial Accounting, Costing, Taxation, and Corporate Accounting.',
      duration: '3 Years',
      level: 'Undergraduate',
      students: '800+ Students',
      rating: 4.9,
      isPopular: true,
      features: [
        'Financial Accounting (All Semesters)',
        'Cost Accounting & Cost Management',
        'Corporate Accounting',
        'Income Tax & GST',
        'Auditing',
        'University Exam Preparation'
      ]
    },
    {
      id: 6,
      category: 'college',
      title: 'BBA Specialized Coaching',
      description: 'Complete BBA curriculum coverage with focus on management principles and business applications.',
      duration: '3 Years',
      level: 'Undergraduate',
      students: '300+ Students',
      rating: 4.7,
      features: [
        'Principles of Management',
        'Business Mathematics',
        'Financial Management',
        'Marketing Management',
        'Human Resource Management',
        'Business Communication'
      ]
    },
    {
      id: 7,
      category: 'college',
      title: 'MBA Executive Program',
      description: 'Advanced MBA coaching with specialization in Finance, Marketing, and Human Resource Management.',
      duration: '2 Years',
      level: 'Postgraduate',
      students: '200+ Students',
      rating: 4.8,
      features: [
        'Strategic Management',
        'Financial Management',
        'Marketing Strategy',
        'Operations Management',
        'Business Analytics',
        'Case Study Method'
      ]
    },

    // Professional Courses
    {
      id: 8,
      category: 'professional',
      title: 'CA Foundation Complete',
      description: 'Comprehensive CA Foundation preparation covering all subjects with expert faculty and mock tests.',
      duration: '8 Months',
      level: 'Professional',
      students: '400+ Students',
      rating: 4.9,
      isPopular: true,
      features: [
        'Principles & Practices of Accounting',
        'Business Laws & Business Correspondence',
        'Business Mathematics & Logical Reasoning',
        'Business Economics & Business Mathematics',
        'Mock Tests & Papers',
        'ICAI Exam Pattern'
      ]
    },
    {
      id: 9,
      category: 'professional',
      title: 'CA Intermediate Group 1',
      description: 'Complete CA Intermediate Group 1 coaching with detailed coverage and exam-oriented preparation.',
      duration: '6 Months',
      level: 'Professional',
      students: '250+ Students',
      rating: 4.8,
      features: [
        'Advanced Accounting',
        'Corporate Laws & Compliance',
        'Cost & Management Accounting',
        'Taxation',
        'Practical Training',
        'ICAI Updates'
      ]
    },
    {
      id: 10,
      category: 'professional',
      title: 'CA Intermediate Group 2',
      description: 'Complete CA Intermediate Group 2 preparation with focus on advanced topics and practical applications.',
      duration: '6 Months',
      level: 'Professional',
      students: '200+ Students',
      rating: 4.7,
      features: [
        'Advanced Financial Management',
        'Auditing & Ethics',
        'Elective Subjects',
        'Case Studies',
        'Practical Applications',
        'Exam Strategy'
      ]
    },
    {
      id: 11,
      category: 'professional',
      title: 'CMA Foundation Program',
      description: 'Complete CMA Foundation preparation with comprehensive coverage of all subjects and regular assessments.',
      duration: '6 Months',
      level: 'Professional',
      students: '180+ Students',
      rating: 4.6,
      features: [
        'Fundamentals of Economics & Management',
        'Fundamentals of Financial Accounting',
        'Fundamentals of Laws & Ethics',
        'Fundamentals of Business Mathematics',
        'Mock Tests',
        'ICMAI Pattern'
      ]
    },
    {
      id: 12,
      category: 'professional',
      title: 'CMA Intermediate',
      description: 'Advanced CMA Intermediate coaching covering all subjects with practical applications and case studies.',
      duration: '8 Months',
      level: 'Professional',
      students: '150+ Students',
      rating: 4.7,
      features: [
        'Financial Accounting',
        'Direct & Indirect Taxation',
        'Cost Accounting',
        'Operations Management',
        'Strategic Management',
        'Practical Training'
      ]
    },
    {
      id: 13,
      category: 'professional',
      title: 'CS Foundation Program',
      description: 'Complete CS Foundation preparation with focus on company law and secretarial practices.',
      duration: '6 Months',
      level: 'Professional',
      students: '120+ Students',
      rating: 4.5,
      features: [
        'Business Environment & Law',
        'Business Management & Ethics',
        'Entrepreneurship Development',
        'Business Economics',
        'Company Law',
        'Secretarial Practices'
      ]
    },
    {
      id: 14,
      category: 'professional',
      title: 'CS Executive Program',
      description: 'Advanced CS Executive coaching with comprehensive coverage of company law and corporate governance.',
      duration: '8 Months',
      level: 'Professional',
      students: '100+ Students',
      rating: 4.6,
      features: [
        'Company Law',
        'Securities Laws & Compliances',
        'Economic, Business & Commercial Laws',
        'Setting Up of Business Entities',
        'Corporate Governance',
        'Practical Training'
      ]
    }
  ]

  // Filter courses based on category and search
  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0b1e6d] to-[#1e3a8a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Courses
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Comprehensive Commerce Education for Every Level
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-[#f5c542]" />
              <span>14+ Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-[#f5c542]" />
              <span>5000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-[#f5c542]" />
              <span>4.8 Avg Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-[#0b1e6d] text-white border-[#0b1e6d]'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#0b1e6d]'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0b1e6d] mb-2">
              {selectedCategory === 'all' ? 'All Available Courses' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course: any) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  duration={course.duration}
                  level={course.level}
                  students={course.students}
                  rating={course.rating}
                  features={course.features}
                  isPopular={course.isPopular}
                  courseId={course.id}
                  onEnroll={() => handleEnroll(course.title)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0b1e6d] to-[#1e3a8a] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us for personalized course recommendations and special batches
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#0b1e6d] px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition flex items-center justify-center gap-2"
            >
              <Filter className="h-5 w-5" />
              Get Counseling
            </a>
            <a
              href="tel:9007019442"
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0b1e6d] transition flex items-center justify-center gap-2"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

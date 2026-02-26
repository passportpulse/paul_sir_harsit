'use client'

import { useState, useEffect } from 'react'
import CourseDetail from '../../components/CourseDetail'
import { useParams, useRouter } from 'next/navigation'

// Course data - in a real app this would come from an API
const coursesDatabase = {
  'icse-accounts-economics': {
    id: 1,
    title: 'ICSE Accounts & Economics',
    description: 'Complete preparation for ICSE Class 11-12 Accounts and Economics with expert guidance and exam-focused study material.',
    longDescription: 'This comprehensive course covers the complete ICSE curriculum for Accounts and Economics for Classes 11 and 12. Designed by experienced faculty, this program focuses on conceptual clarity, practical application, and exam-oriented preparation to help students achieve excellent results.',
    duration: '12 Months',
    level: 'Class 11-12',
    students: '500+ Students',
    rating: 4.9,
    features: [
      'Financial Accounting Fundamentals',
      'Double Entry System',
      'Trial Balance & Final Accounts',
      'Micro & Macro Economics',
      'Indian Economic Development',
      'Statistics & Econometrics'
    ],
    curriculum: [
      {
        module: 'Financial Accounting Basics',
        topics: ['Introduction to Accounting', 'Accounting Principles', 'Double Entry System', 'Journal Entries'],
        duration: '4 Weeks'
      },
      {
        module: 'Final Accounts',
        topics: ['Trading Account', 'Profit & Loss Account', 'Balance Sheet', 'Adjustment Entries'],
        duration: '6 Weeks'
      },
      {
        module: 'Micro Economics',
        topics: ['Demand & Supply', 'Market Structures', 'Price Determination', 'Consumer Behavior'],
        duration: '8 Weeks'
      },
      {
        module: 'Macro Economics',
        topics: ['National Income', 'Money & Banking', 'Fiscal Policy', 'Monetary Policy'],
        duration: '6 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      'Basic understanding of mathematics',
      'Class 10 passed with good grades',
      'Dedication to regular study',
      'Access to smartphone/computer for online classes'
    ],
    outcomes: [
      'Complete mastery of ICSE Accounts & Economics syllabus',
      'Ability to solve complex accounting problems',
      'Understanding of economic concepts and their applications',
      'Improved analytical and problem-solving skills',
      'Confidence to appear for board exams',
      'Better grades and academic performance'
    ],
    schedule: {
      days: 'Mon, Wed, Fri',
      time: '4:00 PM - 6:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'Comprehensive Study Notes',
      'Practice Worksheets',
      'Previous Year Papers',
      'Mock Test Papers',
      'Video Lectures',
      'Doubt Clearing Sessions'
    ],
    certification: true,
    placement: false
  },
  'isc-commerce-stream': {
    id: 2,
    title: 'ISC Commerce Stream',
    description: 'Comprehensive coaching for ISC Commerce subjects including Accounts, Economics, and Business Studies.',
    longDescription: 'Our ISC Commerce Stream program provides complete coverage of all commerce subjects for Classes 11 and 12. With experienced faculty and proven teaching methodologies, we ensure students develop strong conceptual understanding and excel in their examinations.',
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
    ],
    curriculum: [
      {
        module: 'Corporate Accounting',
        topics: ['Company Accounts', 'Issue of Shares', 'Redemption of Debentures', 'Financial Statements'],
        duration: '8 Weeks'
      },
      {
        module: 'Management Accounting',
        topics: ['Cost Concepts', 'Budgetary Control', 'Standard Costing', 'Variance Analysis'],
        duration: '6 Weeks'
      },
      {
        module: 'Business Studies',
        topics: ['Management Functions', 'Business Environment', 'Marketing', 'Human Resource Management'],
        duration: '8 Weeks'
      },
      {
        module: 'Economic Applications',
        topics: ['Indian Economy', 'Business Statistics', 'Project Work', 'Case Studies'],
        duration: '6 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      'Class 10 passed with Commerce stream preferred',
      'Basic accounting knowledge helpful',
      'Regular attendance and practice',
      'Access to study materials online'
    ],
    outcomes: [
      'Complete understanding of ISC commerce curriculum',
      'Expertise in corporate and management accounting',
      'Knowledge of business management principles',
      'Ability to analyze economic scenarios',
      'Project work completion skills',
      'Board exam excellence'
    ],
    schedule: {
      days: 'Tue, Thu, Sat',
      time: '5:00 PM - 7:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'ISC Study Materials',
      'Corporate Accounting Notes',
      'Business Studies Guide',
      'Economics Applications',
      'Project Templates',
      'Sample Papers'
    ],
    certification: true,
    placement: false
  },
  'bcom-complete-program': {
    id: 5,
    title: 'B.Com Complete Program',
    description: 'All-semester B.Com coaching covering Financial Accounting, Costing, Taxation, and Corporate Accounting.',
    longDescription: 'Our B.Com Complete Program offers comprehensive coaching for all six semesters of B.Com. With expert faculty and structured curriculum, we ensure students gain deep understanding of accounting principles, taxation laws, and business management concepts.',
    duration: '3 Years',
    level: 'Undergraduate',
    students: '800+ Students',
    rating: 4.9,
    features: [
      'Financial Accounting (All Semesters)',
      'Cost Accounting & Cost Management',
      'Corporate Accounting',
      'Income Tax & GST',
      'Auditing',
      'University Exam Preparation'
    ],
    curriculum: [
      {
        module: 'Semester 1-2 Foundation',
        topics: ['Financial Accounting', 'Business Mathematics', 'Business Economics', 'Business Organization'],
        duration: '6 Months'
      },
      {
        module: 'Semester 3-4 Core',
        topics: ['Corporate Accounting', 'Cost Accounting', 'Income Tax', 'Business Law'],
        duration: '12 Months'
      },
      {
        module: 'Semester 5-6 Advanced',
        topics: ['Advanced Accounting', 'Auditing', 'Financial Management', 'E-Commerce'],
        duration: '12 Months'
      },
      {
        module: 'Practical Applications',
        topics: ['Tally ERP', 'GST Filing', 'Tax Returns', 'Project Work'],
        duration: '6 Months'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      '12th pass with Commerce stream',
      'Admission in B.Com program',
      'Basic computer knowledge',
      'Commitment to 3-year program'
    ],
    outcomes: [
      'Complete B.Com syllabus mastery',
      'Practical accounting skills',
      'Tax filing knowledge',
      'Audit understanding',
      'Software proficiency (Tally)',
      'University exam success'
    ],
    schedule: {
      days: 'Mon-Fri',
      time: 'Flexible Batches',
      mode: 'Online & Offline'
    },
    materials: [
      'All Semester Notes',
      'Practical Assignments',
      'Tax Software Training',
      'Mock University Papers',
      'Industry Case Studies',
      'Internship Guidance'
    ],
    certification: true,
    placement: true
  },
  'ca-foundation-complete': {
    id: 8,
    title: 'CA Foundation Complete',
    description: 'Comprehensive CA Foundation preparation covering all subjects with expert faculty and mock tests.',
    longDescription: 'Our CA Foundation Complete program is designed to help students clear the CA Foundation exam in their first attempt. With comprehensive coverage of all four papers, regular mock tests, and personalized guidance, we ensure success in this prestigious professional course.',
    duration: '8 Months',
    level: 'Professional',
    students: '400+ Students',
    rating: 4.9,
    features: [
      'Principles & Practices of Accounting',
      'Business Laws & Business Correspondence',
      'Business Mathematics & Logical Reasoning',
      'Business Economics & Business Mathematics',
      'Mock Tests & Papers',
      'ICAI Exam Pattern'
    ],
    curriculum: [
      {
        module: 'Paper 1: Accounting',
        topics: ['Theoretical Framework', 'Accounting Process', 'Bank Reconciliation', 'Inventories', 'Financial Statements'],
        duration: '8 Weeks'
      },
      {
        module: 'Paper 2: Business Laws',
        topics: ['Indian Contract Act', 'Sale of Goods Act', 'Partnership Act', 'Companies Act', 'Business Correspondence'],
        duration: '8 Weeks'
      },
      {
        module: 'Paper 3: Mathematics & LR',
        topics: ['Business Mathematics', 'Logical Reasoning', 'Statistics', 'Probability', 'Permutations'],
        duration: '8 Weeks'
      },
      {
        module: 'Paper 4: Economics',
        topics: ['Micro Economics', 'Macro Economics', 'Business Economics', 'Mathematical Tools', 'Economic Laws'],
        duration: '8 Weeks'
      }
    ],
    instructor: {
      name: 'J. Paul Sir',
      title: 'M.Com, CMA - Commerce Expert',
      experience: '25+ Years Teaching Experience'
    },
    requirements: [
      '12th pass with minimum 50% marks',
      'Registered with ICAI for CA Foundation',
      'Strong analytical skills',
      'Dedication to professional studies'
    ],
    outcomes: [
      'Clear CA Foundation exam',
      'Strong foundation for CA Intermediate',
      'Professional accounting knowledge',
      'Business law understanding',
      'Analytical and reasoning skills',
      'Career in Chartered Accountancy'
    ],
    schedule: {
      days: 'Mon-Sat',
      time: '6:00 AM - 8:00 AM & 6:00 PM - 8:00 PM',
      mode: 'Online & Offline'
    },
    materials: [
      'ICAI Study Materials',
      'Practice Manuals',
      'Mock Test Papers',
      'Previous Year Papers',
      'Revision Notes',
      'Exam Strategy Guide'
    ],
    certification: true,
    placement: true
  }
}

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const slug = params.slug as string
    
    // Simulate API call
    setTimeout(() => {
      const courseData = coursesDatabase[slug as keyof typeof coursesDatabase]
      if (courseData) {
        setCourse(courseData)
      } else {
        // Course not found, redirect to courses page
        router.push('/courses')
      }
      setLoading(false)
    }, 500)
  }, [params.slug, router])

  const handleEnroll = () => {
    // Navigate to enroll page with course pre-selected
    if (course) {
      window.location.href = `/enroll?course=${encodeURIComponent(course.title)}`
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0b1e6d] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course details...</p>
        </div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <a
            href="/courses"
            className="bg-[#0b1e6d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a3a8a] transition"
          >
            Browse All Courses
          </a>
        </div>
      </div>
    )
  }

  return <CourseDetail course={course} onEnroll={handleEnroll} />
}

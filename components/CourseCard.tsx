'use client'

import { Clock, Users, Star, ArrowRight, BookOpen } from 'lucide-react'

interface CourseCardProps {
  title: string
  description: string
  duration: string
  level: string
  students: string
  rating: number
  features: string[]
  isPopular?: boolean
  courseId: number
  onEnroll: (title: string) => void
  onViewDetails?: () => void
}

export default function CourseCard({
  title,
  description,
  duration,
  level,
  students,
  rating,
  features,
  isPopular = false,
  courseId,
  onEnroll,
  onViewDetails
}: CourseCardProps) {
  
  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails()
    } else {
      // Navigate to course detail page
      window.location.href = `/courses/${getCourseSlug(title)}`
    }
  }

  const getCourseSlug = (courseTitle: string): string => {
    const slugMap: { [key: string]: string } = {
      'ICSE Accounts & Economics': 'icse-accounts-economics',
      'ISC Commerce Stream': 'isc-commerce-stream',
      'CBSE Commerce Complete': 'cbse-commerce-complete',
      'Higher Secondary Commerce': 'higher-secondary-commerce',
      'B.Com Complete Program': 'bcom-complete-program',
      'BBA Specialized Coaching': 'bba-specialized-coaching',
      'MBA Executive Program': 'mba-executive-program',
      'CA Foundation Complete': 'ca-foundation-complete',
      'CA Intermediate Group 1': 'ca-intermediate-group-1',
      'CA Intermediate Group 2': 'ca-intermediate-group-2',
      'CMA Foundation Program': 'cma-foundation-program',
      'CMA Intermediate': 'cma-intermediate',
      'CS Foundation Program': 'cs-foundation-program',
      'CS Executive Program': 'cs-executive-program'
    }
    return slugMap[courseTitle] || `course-${courseId}`
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100">
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-4 right-4 bg-[#f5c542] text-[#0b1e6d] text-xs px-3 py-1 rounded-full font-semibold z-10">
          Popular
        </div>
      )}

      <div onClick={handleCardClick} className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-[#0b1e6d] mb-2 group-hover:text-[#f5c542] transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>{students}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700">{rating}</span>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-[#f5c542]" />
            <span className="text-sm font-semibold text-gray-700">Key Topics</span>
          </div>
          <div className="space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#f5c542] rounded-full"></div>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
            {features.length > 3 && (
              <span className="text-xs text-gray-500">+{features.length - 3} more topics</span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleCardClick()
            }}
            className="flex-1 bg-[#0b1e6d] text-white px-4 py-3 rounded-xl font-semibold hover:bg-[#1a2f7d] transition-colors flex items-center justify-center gap-2"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onEnroll(title)
            }}
            className="flex-1 bg-[#f5c542] text-[#0b1e6d] px-4 py-3 rounded-xl font-semibold hover:bg-[#f5d542] transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  )
}

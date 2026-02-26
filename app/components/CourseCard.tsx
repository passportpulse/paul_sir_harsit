import { GraduationCap, Users, Clock, Star, ArrowRight } from 'lucide-react'

interface CourseCardProps {
  title: string
  description: string
  duration: string
  level: string
  students: string
  rating: number
  price?: string
  features: string[]
  image?: string
  isPopular?: boolean
  courseId: number
  onEnroll?: () => void
}

const handleEnroll = (courseTitle: string) => {
  // Navigate to enroll page with course pre-selected
  window.location.href = `/enroll?course=${encodeURIComponent(courseTitle)}`
}

export default function CourseCard({
  title,
  description,
  duration,
  level,
  students,
  rating,
  price,
  features,
  image,
  isPopular = false,
  courseId,
  onEnroll
}: CourseCardProps) {
  const handleViewDetails = () => {
    // Navigate to course detail page
    const slugMap: { [key: number]: string } = {
      1: 'icse-accounts-economics',
      2: 'isc-commerce-stream',
      3: 'cbse-commerce-complete',
      4: 'higher-secondary-commerce',
      5: 'bcom-complete-program',
      6: 'bba-specialized-coaching',
      7: 'mba-executive-program',
      8: 'ca-foundation-complete',
      9: 'ca-intermediate-group-1',
      10: 'ca-intermediate-group-2',
      11: 'cma-foundation-program',
      12: 'cma-intermediate',
      13: 'cs-foundation-program',
      14: 'cs-executive-program'
    }
    
    const slug = slugMap[courseId] || `course-${courseId}`
    window.location.href = `/courses/${slug}`
  }
  return (
    <div className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden hover:shadow-2xl transition-all duration-300 group ${
      isPopular ? 'border-[#f5c542]' : 'border-gray-200'
    }`}>
      
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-[#f5c542] text-[#0b1e6d] px-3 py-1 rounded-full text-sm font-semibold">
            Popular
          </span>
        </div>
      )}

      {/* Course Image */}
      <div className="relative h-48 bg-gradient-to-br from-[#0b1e6d] to-[#1e3a8a] overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <GraduationCap className="h-16 w-16 text-white opacity-50" />
          </div>
        )}
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Title and Description */}
        <h3 className="text-xl font-bold text-[#0b1e6d] mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Course Features */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-4 w-4 text-[#f5c542]" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="h-4 w-4 text-[#f5c542]" />
              <span>{students}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="bg-gray-100 px-2 py-1 rounded text-gray-700">{level}</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < rating ? 'text-[#f5c542] fill-current' : 'text-gray-300'}`} 
                />
              ))}
              <span className="text-gray-600 ml-1">({rating})</span>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">What you'll learn:</h4>
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-[#f5c542] mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
            {features.length > 3 && (
              <li className="text-sm text-[#0b1e6d] font-medium">
                +{features.length - 3} more topics
              </li>
            )}
          </ul>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex gap-2">
            <button
              onClick={handleViewDetails}
              className="border border-[#0b1e6d] text-[#0b1e6d] px-4 py-2 rounded-xl font-semibold transition-all duration-200 hover:bg-[#0b1e6d] hover:text-white"
            >
              View Details
            </button>
            <button
              onClick={onEnroll}
              className="bg-[#0b1e6d] hover:bg-[#1a3a8a] text-white px-4 py-2 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2"
            >
              Enroll
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

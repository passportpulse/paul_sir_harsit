'use client'

import {
  GraduationCap,
  Users,
  Clock,
  Star,
  ArrowRight
} from 'lucide-react'

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
    <div className="relative bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">

      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-5 left-5 z-20">
          <span className="bg-[#f5c542] text-[#0b1e6d] px-4 py-1 rounded-full text-xs font-bold shadow-md">
            Most Popular
          </span>
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-52 overflow-hidden">
        {image ? (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
          </>
        ) : (
          <div className="h-full bg-gradient-to-br from-[#0b1e6d] to-[#1e3a8a] flex items-center justify-center">
            <GraduationCap className="h-16 w-16 text-white/40" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">

        {/* Title */}
        <h3 className="text-xl font-bold text-[#0f172a] mb-3 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm mb-6">

          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} className="text-orange-500" />
            {duration}
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Users size={16} className="text-orange-500" />
            {students}
          </div>

        </div>

        {/* Level + Rating */}
        <div className="flex items-center justify-between mb-6">

          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
            {level}
          </span>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < rating
                    ? "text-orange-500 fill-orange-500"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">
              ({rating})
            </span>
          </div>

        </div>

        {/* Features */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
            What You'll Learn
          </h4>

          <ul className="space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
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

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">

          {/* Price */}
          <div>
            {price ? (
              <div className="text-lg font-bold text-[#0f172a]">
                ₹{price}
              </div>
            ) : (
              <span className="text-sm text-gray-500">Contact for Fees</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">

            <button
              onClick={handleViewDetails}
              className="border border-[#0b1e6d] text-[#0b1e6d] px-4 py-2 rounded-xl font-semibold text-sm transition hover:bg-[#0b1e6d] hover:text-white"
            >
              Details
            </button>

            <button
              onClick={onEnroll}
              className="bg-[#0b1e6d] hover:bg-orange-500 text-white px-4 py-2 rounded-xl font-semibold text-sm transition flex items-center gap-2"
            >
              Enroll
              <ArrowRight size={16} />
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}
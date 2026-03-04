'use client'

import { Star, Quote } from 'lucide-react'

interface WrittenFeedbackProps {
  feedback: any[]
}

export default function WrittenFeedback({ feedback }: WrittenFeedbackProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedback.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Student Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0b1e6d] to-[#1a2f7d] rounded-full flex items-center justify-center text-white font-semibold">
                    {item.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0b1e6d]">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.course}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    {renderStars(item.rating)}
                  </div>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>

              {/* Feedback Content */}
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-[#f5c542] w-6 h-6" />
                <p className="text-gray-700 leading-relaxed text-sm pl-6">
                  {item.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

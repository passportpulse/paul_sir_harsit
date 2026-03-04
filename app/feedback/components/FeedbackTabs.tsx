'use client'

import { MessageCircle, Video } from 'lucide-react'

interface FeedbackTabsProps {
  activeTab: 'written' | 'videos'
  onTabChange: (tab: 'written' | 'videos') => void
}

export default function FeedbackTabs({ activeTab, onTabChange }: FeedbackTabsProps) {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-4">
          <button
            onClick={() => onTabChange('written')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === 'written'
                ? 'bg-[#0b1e6d] text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Written Feedback</span>
          </button>
          <button
            onClick={() => onTabChange('videos')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === 'videos'
                ? 'bg-[#0b1e6d] text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Video className="w-5 h-5" />
            <span>Video Testimonials</span>
          </button>
        </div>
      </div>
    </section>
  )
}

'use client'

import { Camera, Video } from 'lucide-react'

interface GalleryTabsProps {
  activeTab: 'photos' | 'videos'
  onTabChange: (tab: 'photos' | 'videos') => void
  activeCategory: string
  categories: any[]
  onCategoryChange: (category: string) => void
}

export default function GalleryTabs({ 
  activeTab, 
  onTabChange, 
  activeCategory, 
  categories, 
  onCategoryChange 
}: GalleryTabsProps) {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* LEFT - Photos / Videos */}
          <div className="flex gap-4">
            <button
              onClick={() => onTabChange("photos")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition ${activeTab === "photos"
                  ? "bg-[#0b1e6d] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              <Camera className="w-5 h-5" />
              <span>Photos</span>
            </button>

            <button
              onClick={() => onTabChange("videos")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition ${activeTab === "videos"
                  ? "bg-[#0b1e6d] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              <Video className="w-5 h-5" />
              <span>Videos</span>
            </button>
          </div>

          {/* RIGHT - Category Dropdown (Only for Photos) */}
          {activeTab === "photos" && (
            <div className="w-full md:w-60">
              <select
                value={activeCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f5c542]"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

'use client'

import { Video, Play, X } from 'lucide-react'

interface VideoGalleryProps {
  videos: any[]
  onVideoClick: (video: any) => void
}

export default function VideoGallery({ videos, onVideoClick }: VideoGalleryProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {videos.length === 0 ? (
          <div className="text-center py-20">
            <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No videos available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => onVideoClick(video)}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  {/* Video Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-[#0b1e6d] to-[#1a2f7d] flex items-center justify-center">
                    <Video className="w-12 h-12 text-white/50" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="bg-white p-4">
                    <h3 className="font-semibold text-[#0b1e6d] mb-2 group-hover:text-[#f5c542] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

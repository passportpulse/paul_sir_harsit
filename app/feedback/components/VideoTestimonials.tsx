'use client'

import { Video, Play, X } from 'lucide-react'

interface VideoTestimonialsProps {
  videos: any[]
  selectedVideo: any
  onVideoSelect: (video: any) => void
  onCloseModal: () => void
}

export default function VideoTestimonials({ videos, selectedVideo, onVideoSelect, onCloseModal }: VideoTestimonialsProps) {
  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => onVideoSelect(video)}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Video Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-[#0b1e6d] to-[#1a2f7d] flex items-center justify-center">
                    <Video className="w-12 h-12 text-white/50" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-[#0b1e6d] mb-2 group-hover:text-[#f5c542] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Student: {video.studentName}</span>
                      <span>Course: {video.course}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={onCloseModal}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Modal Content */}
            <div className="bg-white rounded-xl overflow-hidden">
              {/* Video Player Placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-[#0b1e6d] to-[#1a2f7d] flex items-center justify-center">
                <Video className="w-16 h-16 text-white/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-[#0b1e6d]" />
                  </div>
                </div>
              </div>
              
              {/* Video Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#0b1e6d] mb-4">
                  {selectedVideo.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {selectedVideo.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Student: {selectedVideo.studentName}</span>
                  <span>Course: {selectedVideo.course}</span>
                  <span>Duration: {selectedVideo.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

'use client'

import { X, Camera, Video, Play } from 'lucide-react'

interface GalleryModalsProps {
  selectedImage: any
  selectedVideo: any
  onCloseModal: () => void
}

export default function GalleryModals({ selectedImage, selectedVideo, onCloseModal }: GalleryModalsProps) {
  return (
    <>
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={onCloseModal}
        >
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={onCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Modal Content */}
            <div className=" rounded-xl overflow-hidden">
              {/* Image Container */}
              <div className="relative h-96 bg-black/40">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Image Details */}
              <div className="p-6">
                {/* <h2 className="text-2xl font-bold text-[#0b1e6d] mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {selectedImage.description}
                </p> */}

                {/* Image Info */}
                {/* <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Category: {selectedImage.category}</span>
                  <span>Image ID: {selectedImage.id}</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}

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
              <X className="w-8 h-8" />
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-xl overflow-hidden">
              {/* Video Player */}
              <div className="relative h-96 bg-black">
                <video 
                  src={selectedVideo.src} 
                  className="w-full h-full"
                  controls
                  autoPlay
                  playsInline
                />
              </div>

              {/* Video Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#0b1e6d] mb-2">
                  {selectedVideo.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {selectedVideo.description}
                </p>

                {/* Video Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Duration: {selectedVideo.duration}</span>
                  <span>Category: {selectedVideo.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

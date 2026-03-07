'use client'

import { Camera } from 'lucide-react'

interface PhotoGalleryProps {
  images: any[]
  onImageClick: (image: any) => void
}

export default function PhotoGallery({ images, onImageClick }: PhotoGalleryProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {images.length === 0 ? (
          <div className="text-center py-20">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No images found in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => onImageClick(image)}
                className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 "
              >
                {/* Actual Image */}
                <div className="relative h-64 bg-white">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>

                {/* Image Info Overlay
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                  <p className="text-gray-300 text-xs mt-1">{image.description}</p>
                </div> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { X, Calendar, Award, Users, BookOpen, MapPin, Camera, Play, Video } from 'lucide-react'
import Image from 'next/image'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos')

  const categories = [
    { id: 'all', label: 'All Photos', icon: <Camera className="w-4 h-4" /> },
    { id: 'classroom', label: 'Classroom', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'events', label: 'Events', icon: <Calendar className="w-4 h-4" /> },
    { id: 'achievements', label: 'Achievements', icon: <Award className="w-4 h-4" /> },
    { id: 'students', label: 'Students', icon: <Users className="w-4 h-4" /> }
  ]

  const galleryImages = [
    {
      id: 1,
      category: 'classroom',
      title: 'CA Foundation Classroom',
      description: 'Interactive session with CA Foundation students',
      src: '/classroom-1.jpg'
    },
    {
      id: 2,
      category: 'events',
      title: 'Annual Function 2024',
      description: 'Students receiving excellence awards',
      src: '/event-1.jpg'
    },
    {
      id: 3,
      category: 'achievements',
      title: 'Top Performers',
      description: 'Students scoring 90%+ in board exams',
      src: '/achievement-1.jpg'
    },
    {
      id: 4,
      category: 'students',
      title: 'Study Group Session',
      description: 'Collaborative learning environment',
      src: '/students-1.jpg'
    },
    {
      id: 5,
      category: 'classroom',
      title: 'B.Com Advanced Class',
      description: 'Financial accounting practical session',
      src: '/classroom-2.jpg'
    },
    {
      id: 6,
      category: 'events',
      title: 'Workshop on GST',
      description: 'Special taxation workshop for professionals',
      src: '/event-2.jpg'
    },
    {
      id: 7,
      category: 'achievements',
      title: 'CA Inter Toppers',
      description: 'Congratulations to our CA Inter rank holders',
      src: '/achievement-2.jpg'
    },
    {
      id: 8,
      category: 'students',
      title: 'Doubt Clearing Session',
      description: 'Personalized attention to every student',
      src: '/students-2.jpg'
    }
  ]

  const videos = [
    {
      id: 1,
      title: 'CA Foundation Course Introduction',
      description: 'Complete overview of CA Foundation program at Paul Sir\'s Classes',
      thumbnail: '/video-thumb-1.jpg',
      duration: '12:45',
      category: 'course-intro'
    },
    {
      id: 2,
      title: 'Student Success Story - Ritika Sharma',
      description: 'How Ritika scored 95% in ISC Commerce with our guidance',
      thumbnail: '/video-thumb-2.jpg',
      duration: '8:30',
      category: 'testimonials'
    },
    {
      id: 3,
      title: 'Accounts Made Easy - Chapter 1',
      description: 'Learn basic accounting concepts with Paul Sir',
      thumbnail: '/video-thumb-3.jpg',
      duration: '15:20',
      category: 'sample-lecture'
    },
    {
      id: 4,
      title: 'Annual Function 2024 Highlights',
      description: 'Best moments from our annual celebration',
      thumbnail: '/video-thumb-4.jpg',
      duration: '6:15',
      category: 'events'
    },
    {
      id: 5,
      title: 'CMA Intermediate Strategy',
      description: 'Complete strategy to crack CMA Intermediate exams',
      thumbnail: '/video-thumb-5.jpg',
      duration: '18:00',
      category: 'course-intro'
    },
    {
      id: 6,
      title: 'Campus Tour',
      description: 'Take a virtual tour of our institute',
      thumbnail: '/video-thumb-6.jpg',
      duration: '5:45',
      category: 'facility'
    }
  ]

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openImageModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image)
  }

  const openVideoModal = (video: typeof videos[0]) => {
    setSelectedVideo(video)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[40vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e6d]/90 to-[#1e3a8a]/85"></div>

        <div className="relative max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Gallery Paul Sir’s Classes
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Explore our journey through photos and videos - classrooms, events, achievements, and memorable moments

          </p>
        </div>
      </section>


      {/* Tab Navigation */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* LEFT - Photos / Videos */}
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab("photos")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition ${activeTab === "photos"
                    ? "bg-[#0b1e6d] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                <Camera className="w-5 h-5" />
                <span>Photos</span>
              </button>

              <button
                onClick={() => setActiveTab("videos")}
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
                  onChange={(e) => setActiveCategory(e.target.value)}
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

      {/* Photos Section */}
      {activeTab === 'photos' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            {filteredImages.length === 0 ? (
              <div className="text-center py-20">
                <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No images found in this category</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                  <div
                    key={image.id}
                    onClick={() => openImageModal(image)}
                    className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    {/* Placeholder Image */}
                    <div className="relative h-64 bg-gradient-to-br from-[#0b1e6d] to-[#1a2f7d] flex items-center justify-center">
                      <Camera className="w-12 h-12 text-white/50" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>

                    {/* Image Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                      <p className="text-gray-300 text-xs mt-1">{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Videos Section */}
      {activeTab === 'videos' && (
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
                    onClick={() => openVideoModal(video)}
                    className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      {/* Video Thumbnail */}
                      <div className="relative h-48 bg-gradient-to-br from-[#0b1e6d] to-[#1a2f7d] flex items-center justify-center">
                        <Video className="w-12 h-12 text-white/50" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                            <Play className="w-6 h-6 text-[#0b1e6d]" />
                          </div>
                        </div>

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
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-xl overflow-hidden">
              {/* Image Container */}
              <div className="relative h-96 bg-gradient-to-br from-[#0b1e6d] to-[#1a2f7d] flex items-center justify-center">
                <Camera className="w-16 h-16 text-white/50" />
              </div>

              {/* Image Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#0b1e6d] mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {selectedImage.description}
                </p>

                {/* Image Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Category: {selectedImage.category}</span>
                  <span>Image ID: {selectedImage.id}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-xl overflow-hidden">
              {/* Video Player Placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-[#0b1e6d] to-[#1a2f7d] flex items-center justify-center">
                <Video className="w-16 h-16 text-white/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4">
                    <Play className="w-8 h-8 text-[#0b1e6d]" />
                  </div>
                </div>
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

    </div>
  )
}

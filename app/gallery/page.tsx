'use client'

import { useState } from 'react'
import { X, Camera, Calendar, Award, Users, BookOpen, MapPin, Play, Video } from 'lucide-react'
import Image from 'next/image'
import GalleryHero from './components/GalleryHero'
import GalleryTabs from './components/GalleryTabs'
import PhotoGallery from './components/PhotoGallery'
import VideoGallery from './components/VideoGallery'
import GalleryModals from './components/GalleryModals'

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
      src: '/gallery/1.jpeg'
    },
    {
      id: 2,
      category: 'events',
      title: 'Annual Function 2024',
      description: 'Students receiving excellence awards',
      src: '/gallery/2.jpeg'
    },
    {
      id: 3,
      category: 'achievements',
      title: 'Top Performers',
      description: 'Students scoring 90%+ in board exams',
      src: '/gallery/3.jpeg'
    },
    {
      id: 4,
      category: 'students',
      title: 'Study Group Session',
      description: 'Collaborative learning environment',
      src: '/gallery/4.jpeg'
    },
    {
      id: 5,
      category: 'classroom',
      title: 'B.Com Advanced Class',
      description: 'Financial accounting practical session',
      src: '/gallery/5.jpeg'
    },
    {
      id: 6,
      category: 'events',
      title: 'Workshop on GST',
      description: 'Special taxation workshop for professionals',
      src: '/gallery/6.jpeg'
    },
    {
      id: 7,
      category: 'achievements',
      title: 'CA Inter Toppers',
      description: 'Congratulations to our CA Inter rank holders',
      src: '/gallery/7.jpeg'
    },
    {
      id: 8,
      category: 'students',
      title: 'Doubt Clearing Session',
      description: 'Personalized attention to every student',
      src: '/gallery/8.jpeg'
    },
    {
      id: 9,
      category: 'classroom',
      title: 'CA Final Classroom',
      description: 'Interactive session with CA Final students',
      src: '/gallery/9.jpeg'
    },
    {
      id: 10,
      category: 'events',
      title: 'CA Final Exam Preparation',
      description: 'Last-minute revision tips for CA Final students',
      src: '/gallery/10.jpeg'
    },
    {
  id: 11,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/11.jpeg'
},
{
  id: 12,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/12.jpeg'
},
{
  id: 13,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/13.jpeg'
},
{
  id: 14,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/14.jpeg'
},
{
  id: 15,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/15.jpeg'
},
{
  id: 16,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/16.jpeg'
},
{
  id: 17,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/17.jpeg'
},
{
  id: 18,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/18.jpeg'
},
{
  id: 19,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/19.jpeg'
},
{
  id: 20,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/20.jpeg'
},
{
  id: 21,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/21.jpeg'
},
{
  id: 22,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/22.jpeg'
},
{
  id: 23,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/23.jpeg'
},
{
  id: 24,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/24.jpeg'
},
{
  id: 25,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/25.jpeg'
},
{
  id: 26,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/26.jpeg'
},
{
  id: 27,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/27.jpeg'
},
{
  id: 28,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/28.jpeg'
},
{
  id: 29,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/29.jpeg'
},
{
  id: 30,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/30.jpeg'
},
{
  id: 31,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/31.jpeg'
},
{
  id: 32,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/32.jpeg'
},
{
  id: 33,
  category: 'events',
  title: 'CA Final Exam Preparation',
  description: 'Last-minute revision tips for CA Final students',
  src: '/gallery/33.jpeg'
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
      <GalleryHero />
      <GalleryTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        activeCategory={activeCategory}
        categories={categories}
        onCategoryChange={setActiveCategory}
      />

      {activeTab === 'photos' && (
        <PhotoGallery
          images={filteredImages}
          onImageClick={openImageModal}
        />
      )}

      {activeTab === 'videos' && (
        <VideoGallery
          videos={videos}
          onVideoClick={openVideoModal}
        />
      )}

      <GalleryModals
        selectedImage={selectedImage}
        selectedVideo={selectedVideo}
        onCloseModal={closeModal}
      />
    </div>
  )
}

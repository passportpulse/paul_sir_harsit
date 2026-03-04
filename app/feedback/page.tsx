'use client'

import { useState } from 'react'
import { Star, Play, MessageCircle, Quote, Video, Calendar, Award, Users } from 'lucide-react'

export default function FeedbackPage() {
  const [activeTab, setActiveTab] = useState<'written' | 'videos'>('written')
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)

  const writtenFeedback = [
    {
      id: 1,
      name: "Ritika Sharma",
      course: "ISC Commerce",
      rating: 5,
      date: "2024-02-15",
      feedback: "Paul Sir's teaching methodology is exceptional. His way of explaining complex accounting concepts with real-life examples made everything so easy to understand. The structured notes and regular practice tests helped me score 95% in my board exams. Highly recommended!",
      avatar: "RS"
    },
    {
      id: 2,
      name: "Arjun Mehta",
      course: "B.Com Semester 3",
      rating: 5,
      date: "2024-01-28",
      feedback: "I was struggling with Financial Accounting until I joined Paul Sir's classes. The personalized attention and doubt-clearing sessions made all the difference. Sir's industry experience adds practical value to theoretical concepts. Best commerce faculty in Kolkata!",
      avatar: "AM"
    },
    {
      id: 3,
      name: "Sneha Agarwal",
      course: "CA Foundation",
      rating: 5,
      date: "2024-02-10",
      feedback: "The comprehensive study material and exam-oriented approach at Paul Sir's Classes is unmatched. Regular mock tests and performance analysis helped me identify my weak areas and improve. Successfully cleared CA Foundation in first attempt!",
      avatar: "SA"
    },
    {
      id: 4,
      name: "Rohit Kumar",
      course: "CMA Intermediate",
      rating: 4,
      date: "2024-01-15",
      feedback: "Excellent coaching for CMA Intermediate. The weekend batches are perfect for working professionals like me. Sir's conceptual clarity and practical examples make cost accounting and financial management easy to grasp.",
      avatar: "RK"
    },
    {
      id: 5,
      name: "Priya Singh",
      course: "CBSE Commerce",
      rating: 5,
      date: "2024-02-20",
      feedback: "Paul Sir's classes transformed my approach towards studies. The regular tests, detailed feedback, and motivation helped me improve from 70% to 92% in just 6 months. Thank you Sir for your guidance and support!",
      avatar: "PS"
    },
    {
      id: 6,
      name: "Vikram Choudhary",
      course: "CS Executive",
      rating: 5,
      date: "2024-01-08",
      feedback: "Professional and structured coaching for CS Executive program. The study material is comprehensive and covers all latest amendments. Sir's insights into company law and corporate governance are invaluable. Cleared both modules with distinction!",
      avatar: "VC"
    }
  ]

  const videos = [
    {
      id: 1,
      title: "Success Story - Ritika Sharma (95% in ISC)",
      description: "Hear how Ritika achieved outstanding results in ISC Commerce with Paul Sir's guidance",
      thumbnail: "/feedback-video-1.jpg",
      duration: "4:32",
      studentName: "Ritika Sharma",
      course: "ISC Commerce"
    },
    {
      id: 2,
      title: "CA Foundation Topper - Arjun Mehta",
      description: "Arjun shares his experience of clearing CA Foundation in first attempt",
      thumbnail: "/feedback-video-2.jpg",
      duration: "6:18",
      studentName: "Arjun Mehta",
      course: "CA Foundation"
    },
    {
      id: 3,
      title: "B.Com Success Journey - Sneha Agarwal",
      description: "Sneha talks about her academic improvement and college success",
      thumbnail: "/feedback-video-3.jpg",
      duration: "5:45",
      studentName: "Sneha Agarwal",
      course: "B.Com"
    },
    {
      id: 4,
      title: "Working Professional - Rohit Kumar",
      description: "Rohit shares how weekend batches helped him balance work and studies",
      thumbnail: "/feedback-video-4.jpg",
      duration: "7:20",
      studentName: "Rohit Kumar",
      course: "CMA Intermediate"
    },
    {
      id: 5,
      title: "CBSE Topper - Priya Singh",
      description: "Priya's journey from 70% to 92% with dedicated coaching",
      thumbnail: "/feedback-video-5.jpg",
      duration: "5:15",
      studentName: "Priya Singh",
      course: "CBSE Commerce"
    }
  ]

  const openVideoModal = (video: typeof videos[0]) => {
    setSelectedVideo(video)
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
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
         Student Feedback
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Hear directly from our students about their learning experience and success stories

          </p>
        </div>
      </section>


      {/* Tab Navigation */}
      <section className="py-8 bg-white ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex  gap-4">
            <button
              onClick={() => setActiveTab('written')}
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
              onClick={() => setActiveTab('videos')}
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

      {/* Written Feedback Section */}
      {activeTab === 'written' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {writtenFeedback.map((feedback) => (
                <div
                  key={feedback.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  {/* Student Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0b1e6d] to-[#1a2f7d] rounded-full flex items-center justify-center text-white font-semibold">
                        {feedback.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0b1e6d]">{feedback.name}</h3>
                        <p className="text-sm text-gray-600">{feedback.course}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        {renderStars(feedback.rating)}
                      </div>
                      <p className="text-xs text-gray-500">{feedback.date}</p>
                    </div>
                  </div>

                  {/* Feedback Content */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 text-[#f5c542] w-6 h-6" />
                    <p className="text-gray-700 leading-relaxed text-sm pl-6">
                      {feedback.feedback}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Testimonials Section */}
      {activeTab === 'videos' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => openVideoModal(video)}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
                    <div className="p-4">
                      <h3 className="font-semibold text-[#0b1e6d] mb-2 group-hover:text-[#f5c542] transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{video.studentName}</span>
                        <span>{video.course}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
              <span className="text-3xl">×</span>
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
                  <span>Student: {selectedVideo.studentName}</span>
                  <span>Course: {selectedVideo.course}</span>
                  <span>Duration: {selectedVideo.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



    </div>
  )
}

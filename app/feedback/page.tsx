'use client'

import { useState } from 'react'
import FeedbackHero from './components/FeedbackHero'
import FeedbackTabs from './components/FeedbackTabs'
import WrittenFeedback from './components/WrittenFeedback'
import VideoTestimonials from './components/VideoTestimonials'
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
      <FeedbackHero />
      <FeedbackTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === 'written' && (
        <WrittenFeedback feedback={writtenFeedback} />
      )}
      
      {activeTab === 'videos' && (
        <VideoTestimonials 
          videos={videos}
          selectedVideo={selectedVideo}
          onVideoSelect={openVideoModal}
          onCloseModal={closeModal}
        />
      )}
    </div>
  )
}

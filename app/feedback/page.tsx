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
      name: "Manjima Mukherjee",
      course: "ISC Commerce",
      rating: 5,
      date: "3 weeks ago",
      feedback: "He is best teacher you can ever have... I'm studying under his guidance for a long time he is genuinely very helpful and his teaching techniques are very unique and innovative..you should must give it a try.",
      avatar: "RS"
    },
    {
      id: 2,
      name: "NINJA GMR FF",
      course: "CMA Intermediate",
      rating: 4,
      date: "3 weeks ago",
      feedback: "Sir is too good. His concept is very unique and usefull for us....",
      avatar: "NG"
    },
    {
      id: 3,
      name: "Arin Sarkar",
      course: "CA Foundation",
      rating: 5,
      date: "49 weeks ago",
      feedback: "This tuition was too much effective that it made accountancy interesting for me and the sir is friendly and thus teach with having Little funs which engage the students more into the studies.",
      avatar: "AS"
    },

    {
      id: 4,
      name: "Working Giants",
      course: "B.Com Semester 3",
      rating: 5,
      date: "49 weeks ago",
      feedback: "Paul Sir’s coaching class is an excellent place for students seeking in-depth understanding and academic success. His teaching methods are clear, structured, and engaging, making even complex topics easy to grasp. He is highly knowledgeable, patient, and always ready to clear doubts, ensuring every student gets personal attention. The study materials provided are well-organized and immensely helpful for exam preparation. His dedication and passion for teaching create a motivating learning environment. Students not only gain subject knowledge but also develop confidence in their abilities. Highly recommended for anyone looking for quality coaching and academic excellence!",
      avatar: "AM"
    },

  ]

  const videos = [
    {
      id: 1,
      title: "Success Story -  (95% in ISC)",
      description: "Hear how  achieved outstanding results in ISC Commerce with Paul Sir's guidance",
      thumbnail: "/feedback/feedback1.mp4",
      duration: "",
      studentName: "",
      course: "ISC Commerce"
    },

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

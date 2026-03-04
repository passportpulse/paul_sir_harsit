'use client'

import { useState } from 'react'
import AboutHero from './components/AboutHero'
import AboutInstitute from './components/AboutInstitute'
import CoursesOverview from './components/CoursesOverview'
import DetailedInfoModal from './components/DetailedInfoModal'

export default function AboutPage() {
  const [showDetailedInfo, setShowDetailedInfo] = useState(false)
  
  return (
    <div className="bg-white text-gray-800">
      <AboutHero onShowDetailedInfo={() => setShowDetailedInfo(true)} />
      <AboutInstitute />
      <CoursesOverview />
      <DetailedInfoModal 
        isOpen={showDetailedInfo} 
        onClose={() => setShowDetailedInfo(false)} 
      />
    </div>
  )
}

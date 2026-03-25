'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import EnrollHero from './components/EnrollHero'
import EnrollForm from './components/EnrollForm'
import EnrollSidebar from './components/EnrollSidebar'
import EnrollCTA from './components/EnrollCTA'

function EnrollPageContent() {
  const searchParams = useSearchParams()
  const courseFromUrl = searchParams.get('course')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsapp: '',
    course: courseFromUrl ? decodeURIComponent(courseFromUrl) : '',
    currentLevel: '',
    preferredMode: '',
    address: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Update form when course parameter changes in URL
  useEffect(() => {
    if (courseFromUrl) {
      setFormData(prev => ({
        ...prev,
        course: decodeURIComponent(courseFromUrl)
      }))
    }
  }, [courseFromUrl])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        alert('Enrollment form submitted successfully! We will contact you within 24 hours.')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          whatsapp: '',
          course: courseFromUrl ? decodeURIComponent(courseFromUrl) : '',
          currentLevel: '',
          preferredMode: '',
          address: '',
          message: ''
        })
      } else {
        alert(data.error || 'Failed to submit enrollment form. Please try again.')
      }
    } catch (error) {
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const courses = [
    {
      category: "School Programs",
      courses: [
        "ICSE Accounts & Economics",
        "ICSE - Accounts & Economics",
        "ISC Commerce Stream",
        "ISC - Accounts & Economics", 
        "CBSE Commerce Complete",
        "CBSE - Accounts & Economics",
        "H.S - Accounts & Economics",
        "Higher Secondary Commerce",
        "ICSE Commerce (Class 9-10)",
        "ISC Commerce (Class 11-12)",
        "CBSE Commerce (Class 11-12)",
        "Higher Secondary (WB Board)",
        "Accounts & Economics",
        "Business Studies",
        "Commercial Applications"
      ]
    },
    {
      category: "College Programs",
      courses: [
        "B.Com Complete Program",
        "B.Com Honours (Semester 1-6)",
        "BBA Specialized Coaching",
        "MBA Executive Program",
        "Financial Accounting",
        "Cost & Management Accounting",
        "Corporate Accounting",
        "Direct Taxation",
        "Indirect Taxation",
        "Business Law",
        "Economics"
      ]
    },
    {
      category: "Professional Courses",
      courses: [
        "CA Foundation Complete",
        "CA Intermediate Group 1",
        "CA Intermediate Group 2",
        "CA Final",
        "CMA Foundation Program",
        "CMA Intermediate",
        "CMA Final",
        "CS Foundation Program",
        "CS Executive Program",
        "CS Professional",
        "ACCA",
        "CFA",
        "Financial Management",
        "Investment Analysis",
        "Auditing & Assurance",
        "Company Law & Secretarial Practice",
        "Advanced Taxation",
        "Financial Modeling",
        "Excel for Finance",
        "Tally & ERP"
      ]
    }
  ]

  return (
    <div className="bg-white text-gray-800">
      <EnrollHero />
      
      {/* ================= ENROLLMENT FORM ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Form Section */}
          <div className="lg:col-span-2">
            <EnrollForm 
              initialCourse={courseFromUrl ? decodeURIComponent(courseFromUrl) : ''}
              courses={courses}
              formData={formData}
              isSubmitting={isSubmitting}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>

          {/* Sidebar Information */}
          <div className="lg:col-span-1">
            <EnrollSidebar />
          </div>
        </div>
      </section>

      <EnrollCTA />
    </div>
  )
}

export default function EnrollPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EnrollPageContent />
    </Suspense>
  )
}

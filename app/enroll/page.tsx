'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, GraduationCap, Users, Award, Clock, CheckCircle, Send, ArrowRight } from 'lucide-react'

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsapp: '',
    course: '',
    currentLevel: '',
    preferredMode: '',
    address: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const courses = [
    {
      category: "School Programs",
      courses: [
        "ICSE - Accounts & Economics",
        "ISC - Accounts & Economics", 
        "CBSE - Accounts & Economics",
        "H.S - Accounts & Economics"
      ]
    },
    {
      category: "College Programs",
      courses: [
        "B.Com (All Semesters)",
        "BBA",
        "MBA"
      ]
    },
    {
      category: "Professional Courses",
      courses: [
        "CA Foundation",
        "CA Intermediate",
        "CMA Foundation", 
        "CMA Intermediate",
        "CS Foundation",
        "CS Intermediate"
      ]
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Enrollment form submitted successfully! We will contact you within 24 hours.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      whatsapp: '',
      course: '',
      currentLevel: '',
      preferredMode: '',
      address: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e6d]/90 to-[#1e3a8a]/85"></div>

        <div className="relative max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enroll Now
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6">
            Start Your Journey to Commerce Excellence
          </p>
          <p className="text-lg text-gray-300">
            Join 5000+ successful students who have achieved their dreams with Paul Sir's Classes
          </p>
        </div>
      </section>

      {/* ================= ENROLLMENT FORM ================= */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border">
              <h2 className="text-3xl font-bold text-[#0b1e6d] mb-8">
                Enrollment Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Personal Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
                        placeholder="Enter first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                {/* Course Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Course Information</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Course *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
                    >
                      <option value="">Select a course</option>
                      {courses.map((category, index) => (
                        <optgroup key={index} label={category.category}>
                          {category.courses.map((course, courseIndex) => (
                            <option key={courseIndex} value={course}>
                              {course}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Education Level *
                      </label>
                      <select
                        name="currentLevel"
                        value={formData.currentLevel}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
                      >
                        <option value="">Select level</option>
                        <option value="class10">Class 10</option>
                        <option value="class11">Class 11</option>
                        <option value="class12">Class 12</option>
                        <option value="bcom1st">B.Com 1st Year</option>
                        <option value="bcom2nd">B.Com 2nd Year</option>
                        <option value="bcom3rd">B.Com 3rd Year</option>
                        <option value="graduate">Graduate</option>
                        <option value="working">Working Professional</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Mode *
                      </label>
                      <select
                        name="preferredMode"
                        value={formData.preferredMode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
                      >
                        <option value="">Select mode</option>
                        <option value="offline">Offline Classes</option>
                        <option value="online">Online Classes</option>
                        <option value="hybrid">Hybrid (Both)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
                    placeholder="Enter your complete address"
                  ></textarea>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
                    placeholder="Any specific requirements or questions..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#f5c542] to-[#ffda6a] text-[#0b1e6d] font-semibold py-4 rounded-xl shadow-lg hover:scale-105 transition duration-300 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0b1e6d]"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Enrollment
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-8">
            
            {/* Why Enroll */}
            <div className="bg-gradient-to-br from-[#0b1e6d] to-[#1e3a8a] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Enroll With Us?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#f5c542] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">25+ Years Experience</h4>
                    <p className="text-gray-300 text-sm">Proven track record in commerce education</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#f5c542] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Faculty</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gray-50 rounded-2xl p-8 border">
              <h3 className="text-xl font-bold text-[#0b1e6d] mb-6">Need Help?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-[#f5c542]" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-600">9007019442</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-[#f5c542]" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-gray-600">paulsirsclasses@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="text-[#f5c542]" />
                  <div>
                    <p className="font-semibold">Office Hours</p>
                    <p className="text-gray-600">Mon-Fri: 9AM-8PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Courses */}
            <div className="bg-white rounded-2xl p-8 border shadow-lg">
              <h3 className="text-xl font-bold text-[#0b1e6d] mb-6">Popular Courses</h3>
              
              <div className="space-y-3">
                {["CA Foundation", "B.Com All Semesters", "ISC Accounts", "CBSE Economics"].map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                    <span className="text-gray-700">{course}</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-gradient-to-r from-[#0b1e6d] to-[#1e3a8a] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of successful students who have achieved their dreams with Paul Sir's Classes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9007019442"
              className="bg-white text-[#0b1e6d] px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <a
              href="/contact"
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0b1e6d] transition flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

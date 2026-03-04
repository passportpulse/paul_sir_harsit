'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

function Input({ label, name, value, onChange, type = "text" }: any) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        required
        className="w-full px-4 py-3 border text-gray-500 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f5c542] focus:border-transparent outline-none"
      />
    </div>
  )
}

interface ContactFormProps {
  onSubmit: (formData: any) => void
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Your Name" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} />
        <Input label="Email Address" placeholder="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
      </div>

      <div className="grid md:grid-cols-2 items-center gap-6">
        <Input label="Phone Number" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Course
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f5c542] focus:border-transparent outline-none"
          >
            <option value="">Select Course</option>
            
            {/* School Level Courses */}
            <optgroup label="📚 School Level Courses">
              <option>ICSE Commerce (Class 9-10)</option>
              <option>ISC Commerce (Class 11-12)</option>
              <option>CBSE Commerce (Class 11-12)</option>
              <option>Higher Secondary (WB Board)</option>
              <option>Accounts & Economics</option>
              <option>Business Studies</option>
              <option>Commercial Applications</option>
            </optgroup>
            
            {/* Undergraduate Courses */}
            <optgroup label="🎓 Undergraduate Courses">
              <option>B.Com Honours (Semester 1-6)</option>
              <option>B.Com General (Semester 1-6)</option>
              <option>BBA (All Years)</option>
              <option>MBA (All Semesters)</option>
              <option>Financial Accounting</option>
              <option>Cost & Management Accounting</option>
              <option>Corporate Accounting</option>
              <option>Direct Taxation</option>
              <option>Indirect Taxation</option>
              <option>Business Law</option>
              <option>Economics</option>
            </optgroup>
            
            {/* Professional Courses */}
            <optgroup label="💼 Professional Courses">
              <option>CA Foundation</option>
              <option>CA Intermediate</option>
              <option>CA Final</option>
              <option>CMA Foundation</option>
              <option>CMA Intermediate</option>
              <option>CMA Final</option>
              <option>CS Foundation</option>
              <option>CS Executive</option>
              <option>CS Professional</option>
              <option>ACCA</option>
              <option>CFA</option>
            </optgroup>
            
            {/* Specialized Courses */}
            <optgroup label="🎯 Specialized Courses">
              <option>Financial Management</option>
              <option>Investment Analysis</option>
              <option>Auditing & Assurance</option>
              <option>Company Law & Secretarial Practice</option>
              <option>Advanced Taxation</option>
              <option>Financial Modeling</option>
              <option>Excel for Finance</option>
              <option>Tally & ERP</option>
            </optgroup>
            
            {/* Exam Preparation */}
            <optgroup label="📝 Exam Preparation">
              <option>Board Exam Preparation</option>
              <option>University Exam Preparation</option>
              <option>Competitive Exam Preparation</option>
              <option>Crash Course</option>
              <option>Doubt Clearing Sessions</option>
              <option>Mock Test Series</option>
            </optgroup>
          </select>
        </div>
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        placeholder="Tell us about your requirements..."
        className="w-full px-4 py-3 text-gray-500 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f5c542] focus:border-transparent outline-none"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#f5c542] to-[#ffda6a] text-[#0b1e6d] font-semibold py-4 rounded-xl shadow-lg hover:scale-105 transition duration-300 flex justify-center items-center gap-2"
      >
        <Send className="h-5 w-5" />
        Send Message
      </button>
    </form>
  )
}

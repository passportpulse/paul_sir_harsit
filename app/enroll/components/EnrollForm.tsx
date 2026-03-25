'use client'

import { useState } from 'react'
import { Send, ArrowRight } from 'lucide-react'

function Input({ label, name, value, onChange, type = "text", required = true }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
        placeholder={label}
      />
    </div>
  )
}

function SelectInput({ label, name, value, onChange, options, required = true }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
      >
        <option value="">{`Select ${label.toLowerCase()}`}</option>
        {options.map((option: string, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

interface EnrollFormProps {
  initialCourse?: string
  courses: any[]
  formData: any
  isSubmitting: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent) => void
}

export default function EnrollForm({ initialCourse, courses, formData, isSubmitting, handleChange, handleSubmit }: EnrollFormProps) {

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-[#0b1e6d] mb-8">
        Enrollment Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Personal Information</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Input 
              label="First Name" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
            />
            <Input 
              label="Last Name" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input 
              label="Email Address" 
              type="email"
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
            <Input 
              label="Phone Number" 
              type="tel"
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>

          <Input 
            label="WhatsApp Number (Optional)" 
            type="tel"
            name="whatsapp" 
            value={formData.whatsapp} 
            onChange={handleChange} 
            required={false}
          />
        </div>

        {/* Course Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Course Information</h3>
          
          <SelectInput
            label="Course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            options={courses.flatMap(category => category.courses)}
          />

          <div className="grid md:grid-cols-2 gap-4">
            <SelectInput
              label="Current Education Level"
              name="currentLevel"
              value={formData.currentLevel}
              onChange={handleChange}
              options={[
                "Class 10",
                "Class 11", 
                "Class 12",
                "B.Com 1st Year",
                "B.Com 2nd Year",
                "B.Com 3rd Year",
                "Graduate",
                "Working Professional"
              ]}
            />
            
            <SelectInput
              label="Preferred Mode"
              name="preferredMode"
              value={formData.preferredMode}
              onChange={handleChange}
              options={[
                "Offline Classes",
                "Online Classes",
                "Hybrid (Both)"
              ]}
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f5c542] focus:border-transparent"
            placeholder="Enter your complete address"
          />
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
          />
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
  )
}

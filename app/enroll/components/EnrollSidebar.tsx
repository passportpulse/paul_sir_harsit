'use client'

import { Phone, Mail, MapPin, GraduationCap, Users, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export default function EnrollSidebar() {
  return (
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
              <p className="text-gray-300 text-sm">Experienced teachers with industry knowledge</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
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
      <div className="bg-white rounded-2xl p-8 border shadow-lg  border-gray-200">
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
  )
}

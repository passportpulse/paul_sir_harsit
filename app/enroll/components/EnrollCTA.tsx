'use client'

import { Phone, Mail, ArrowRight } from 'lucide-react'

export default function EnrollCTA() {
  return (
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
  )
}

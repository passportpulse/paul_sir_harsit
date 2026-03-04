'use client'

import { MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function ContactMap() {
  return (
    <section className="py-20 bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/contact-side.png"
            alt="Contact"
            className="w-full object-cover rounded-3xl"
          />
        </div>

        {/* MAP + INFO */}
        <div className="space-y-10 flex-1">
          <div className="flex flex-row gap-4">
            {/* MAIN BRANCH MAP */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-3">Main Branch - Dumdum</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5370.8535866701395!2d88.39183949999999!3d22.6212867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89df078c7ae81%3A0x5e15ac966f93eb6a!2s35b%2C%20S%20Sinthee%20Rd%2C%20Pearabagan%2C%20South%20Sinthee%2C%20Biswanath%20Colony%2C%20Sinthee%2C%20Kolkata%2C%20West%20Bengal%20700030!5e1!3m2!1sen!2sin!4v1772600972967!5m2!1sen!2sin"
                  className="w-full h-72"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>

              <button
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=35B+South+Sinthee+Road+Kolkata+700050', '_blank')}
                className="mt-2 text-[#0b1e6d] hover:text-[#f5c542] text-sm font-medium flex items-center gap-1 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Get Directions to Main Branch
              </button>
            </div>

            {/* OTHER BRANCH MAP */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-3">Other Branch - Hedua</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5372.123286849975!2d88.36564829999999!3d22.588758700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276359bb70ad3%3A0x7bc0d0b687415290!2s148%2C%20Ramdulal%20Sarkar%20St%2C%20Manicktala%2C%20Hedua%2C%20Kolkata%2C%20West%20Bengal%20700006!5e1!3m2!1sen!2sin!4v1772600950918!5m2!1sen!2sin"
                  className="w-full h-72"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
              <button
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=148+Ramdulal+Sarkar+Street+Hedua+Kolkata+700006', '_blank')}
                className="mt-2 text-[#0b1e6d] hover:text-[#f5c542] text-sm font-medium flex items-center gap-1 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Get Directions to Other Branch
              </button>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl shadow-md border">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Office Hours</h3>
            <div className="space-y-3 text-gray-800">
              <p><strong>Mon - Fri:</strong> 9:00 AM - 8:00 PM</p>
              <p><strong>Saturday:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Sunday:</strong> 10:00 AM - 2:00 PM</p>
            </div>
          </div>

          <div className="flex gap-4">
            {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
              <div key={i} className="w-12 h-12 bg-gray-700 hover:bg-[#f5c542] hover:text-[#0b1e6d] text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer transition duration-300">
                <Icon className="h-5 w-5" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

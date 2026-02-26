'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will contact you soon.')
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">

      {/* ================= HERO ================= */}
      <section className="bg-white text-gray-700 py-12 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 ">
          <div className='flex justify-between items-center'>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Contact <span className="text-[#f5c542]">Paul Sir's Classes</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-2xl">
                Have questions about admissions or courses?
                We’re here to guide you every step of the way.
              </p>
            </div>
            <img src="/logo-soc.png" alt="" />
          </div>
        </div>

      </section>

  

      {/* ================= CONTACT CARDS ================= */}
      <section className="py-24 bg-white">
               <div className="max-w-7xl mx-auto px-6 mb-12 ">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl ">
            We're here to help you succeed in your commerce education journey. 
            Reach out through any of the following channels.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        

          {/* RIGHT SIDE BOXES */}
          <div className="space-y-8">

            {/* BIG LOCATION BOX */}
            <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="bg-gray-200 p-4 rounded-xl">
                  <MapPin className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Locations
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <div>
                      <p className="font-semibold text-gray-800">
                        35B, South Sinthee Road
                      </p>
                      <p>Kolkata – 700050</p>
                      <p className="text-sm text-gray-500">
                        (Near Dumdum Station)
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="font-semibold text-gray-800">
                        148, Ramdulal Sarkar Street
                      </p>
                      <p>Hedua, Kolkata – 700006</p>
                      <p className="text-sm text-gray-500">
                        (Near Girish Park Metro)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TWO SMALL BOXES */}
            <div className="grid sm:grid-cols-2 gap-8">

              {/* CALL BOX */}
              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
                <div className="bg-gray-200 p-3 rounded-xl w-fit mb-6">
                  <Phone className="h-5 w-5 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Call Us
                </h3>
                <p className="text-gray-600">9007019442</p>
                <p className="text-gray-600">9830275787</p>
              </div>

              {/* EMAIL BOX */}
              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
                <div className="bg-gray-200 p-3 rounded-xl w-fit mb-6">
                  <Mail className="h-5 w-5 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Email Us
                </h3>
                <p className="text-gray-600">
                  paulsirsclasses@gmail.com
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  We reply within 24 hours
                </p>
              </div>

            </div>

          </div>
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
                    <option>ICSE</option>
                    <option>ISC</option>
                    <option>CBSE</option>
                    <option>H.S</option>
                    <option>B.Com</option>
                    <option>BBA</option>
                    <option>MBA</option>
                    <option>CA</option>
                    <option>CMA</option>
                    <option>CS</option>
                  </select>
                </div>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tel  us about your requirements..."
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
        </div>
      </section>

      {/* ================= FORM + MAP ================= */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* ===== FORM ===== */}
        
  {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="/contact-side.png"
              alt="Contact"
              className="w-full object-cover rounded-3xl"
            />
          </div>

          {/* ===== MAP + INFO ===== */}
          <div className="space-y-10">

            <div className="rounded-2xl overflow-hidden shadow-lg border">
              <iframe
                src="https://www.google.com/maps?q=South+Sinthee+Road+Kolkata&output=embed"
                className="w-full h-72"
                loading="lazy"
              ></iframe>
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

    </div>
  )
}

/* Reusable Input */
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
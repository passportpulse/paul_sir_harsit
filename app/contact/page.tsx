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
      <section className="bg-gradient-to-r from-[#0b1e6d] via-[#1e3a8a] to-[#1e40af] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Contact <span className="text-[#f5c542]">Paul Sir's Classes</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Have questions about admissions or courses?  
            We’re here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[{
            title: "Main Address",
            icon: <MapPin className="h-6 w-6 text-white" />,
            content: (
              <>
                <p className="font-semibold text-gray-800">35B, South Sinthee Road</p>
                <p className="text-gray-700">Kolkata – 700050</p>
                <p className="text-sm text-gray-600">(Near Dumdum Station)</p>
              </>
            )
          },
          {
            title: "Branch Address",
            icon: <MapPin className="h-6 w-6 text-white" />,
            content: (
              <>
                <p className="font-semibold text-gray-800">148, Ramdulal Sarkar Street</p>
                <p className="text-gray-700">Hedua, Kolkata – 700006</p>
                <p className="text-sm text-gray-600">(Near Girish Park Metro)</p>
              </>
            )
          },
          {
            title: "Contact Info",
            icon: <Phone className="h-6 w-6 text-white" />,
            content: (
              <div className="space-y-2 text-gray-800">
                <p>9007019442</p>
                <p>9830275787</p>
                <p className="text-blue-700 font-medium">paulsirsclasses@gmail.com</p>
              </div>
            )
          }].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0b1e6d] to-[#1e40af] rounded-xl flex items-center justify-center mb-6 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0b1e6d] mb-4">{item.title}</h3>
              {item.content}
            </div>
          ))}

        </div>
      </section>

      {/* ================= FORM + MAP ================= */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* ===== FORM ===== */}
          <div>
            <h2 className="text-3xl font-bold text-[#0b1e6d] mb-10">
              Send Us a Message
            </h2>

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
              <h3 className="text-xl font-bold text-[#0b1e6d] mb-4">Office Hours</h3>
              <div className="space-y-3 text-gray-800">
                <p><strong>Mon - Fri:</strong> 9:00 AM - 8:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Sunday:</strong> 10:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
                <div key={i} className="w-12 h-12 bg-[#0b1e6d] hover:bg-[#f5c542] hover:text-[#0b1e6d] text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer transition duration-300">
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
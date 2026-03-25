'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, MessageCircle, Youtube } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setSubmitMessage('Thank you for your inquiry! We will contact you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        })
      } else {
        setSubmitMessage(data.error || 'Failed to submit. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.')
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
                We're here to guide you every step of the way.
              </p>
            </div>
            <img src="/logo-soc.png" alt="" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-12 bg-white transform translate-y-1/2 rotate-180"><svg className="h-full w-full text-yellow-500" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 L0,0 Z" fill="currentColor"></path></svg></div>
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
                  <div className="flex flex-col md:flex-row gap-4 items-stretch">

                    {/* MAIN BRANCH */}
                    <div className="flex-1 p-4 bg-[#f5c542]/10 rounded-xl h-full">
                      <h4 className="font-bold text-[#0b1e6d] mb-3 flex items-center gap-2">
                        <span className="bg-[#f5c542] text-white text-xs px-2 py-1 rounded">
                          MAIN BRANCH
                        </span>
                      </h4>

                      <div className="space-y-2 text-gray-700 flex flex-col justify-between h-full">
                        <div>
                          <p className="font-semibold">35B, South Sinthee Road</p>
                          <p>Kolkata – 700050</p>
                          <p className="text-sm text-gray-500">(Near Dumdum Station)</p>
                        </div>

                        <button
                          onClick={() =>
                            window.open(
                              "https://maps.app.goo.gl/Q5C1JLrMGMvXAZYm7?g_st=aw",
                              "_blank"
                            )
                          }
                          className="mt-4 text-[#0b1e6d] hover:text-[#f5c542] text-sm font-medium flex items-center gap-1 transition-colors"
                        >
                          <MapPin className="w-4 h-4" />
                          View on Google Maps
                        </button>
                      </div>
                    </div>

                    {/* OTHER BRANCH */}
                    <div className="flex-1 p-4 bg-gray-50 rounded-xl h-full">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded">
                          OTHER BRANCH
                        </span>
                      </h4>

                      <div className="space-y-2 text-gray-700 flex flex-col justify-between h-full">
                        <div>
                          <p className="font-semibold">148, Ramdulal Sarkar Street</p>
                          <p>Hedua, Kolkata – 700006</p>
                          <p className="text-sm text-gray-500">(Near Girish Park Metro)</p>
                        </div>

                        <button
                          onClick={() =>
                            window.open(
                              "https://maps.app.goo.gl/JYbfwpZQHhH7o7DL7?g_st=aw",
                              "_blank"
                            )
                          }
                          className="mt-4 text-[#0b1e6d] hover:text-[#f5c542] text-sm font-medium flex items-center gap-1 transition-colors"
                        >
                          <MapPin className="w-4 h-4" />
                          View on Google Maps
                        </button>
                      </div>
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
         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=paulsirsclasses@gmail.com"
  target="_blank"
  className="text-gray-600 hover:text-blue-600 transition"
>
  paulsirsclasses@gmail.com
</a>
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
              placeholder="Tel  us about your requirements..."
              className="w-full px-4 py-3 text-gray-500 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f5c542] focus:border-transparent outline-none"
            />

            {submitMessage && (
              <div className="mb-4 p-4 rounded-lg bg-green-50 border border-green-200">
                <p className="text-green-700 font-medium">{submitMessage}</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#f5c542] to-[#ffda6a] text-[#0b1e6d] font-semibold py-4 rounded-xl shadow-lg hover:scale-105 transition duration-300 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent border-r-transparent animate-spin rounded-full"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
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
          <div className="space-y-10 flex-1">
            <div className="flex flex-row gap-4">
              {/* MAIN BRANCH MAP */}
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">Main Branch - Dumdum</h3>
                <div className="rounded-2xl overflow-hidden shadow-lg border">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5370.664978735498!2d88.3868695!3d22.6261148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d33210d5377%3A0xe071dfa513203e74!2sPaul%20sir&#39;s%20classes!5e1!3m2!1sen!2sin!4v1772867325109!5m2!1sen!2sin"
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
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5372.123126919393!2d88.3655959!3d22.588762799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02763575844177%3A0x5f3a3976cfce3fc5!2sKeshub%20Academy%20(Primary)!5e1!3m2!1sen!2sin!4v1772867374565!5m2!1sen!2sin"
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
              <a 
                href="https://www.facebook.com/share/1Hm8WmUxWG/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 hover:bg-[#f5c542] hover:text-[#0b1e6d] text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer transition duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              
              <a 
                href="https://www.instagram.com/paul_sirs_classes?igsh=MWx0ZXFsdGh3Nm51Yw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 hover:bg-[#f5c542] hover:text-[#0b1e6d] text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer transition duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              
              <a 
                href="https://youtube.com/@paulsirscommerceclasses?si=rF4Rf_-Q5eCWwMki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 hover:bg-[#f5c542] hover:text-[#0b1e6d] text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer transition duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
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
'use client'

import { useState } from 'react'
import ContactHero from './components/ContactHero'
import ContactCards from './components/ContactCards'
import ContactForm from './components/ContactForm'
import ContactMap from './components/ContactMap'

export default function ContactPage() {
  const handleSubmit = (formData: any) => {
    alert('Thank you for your inquiry! We will contact you soon.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <ContactHero />
      <ContactCards />
      
      {/* ================= FORM + MAP ================= */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <ContactForm onSubmit={handleSubmit} />
          <ContactMap />
        </div>
      </section>
    </div>
  )
}
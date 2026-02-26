'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, Menu, X, ChevronDown } from 'lucide-react'

export default function PaulNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopDropdownOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleCall = () => window.open('tel:9007019442', '_self')
  const handleWhatsApp = () => window.open('https://wa.me/9830275787', '_blank')

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#0b1e6d]/95 backdrop-blur-md shadow-xl'
        : 'bg-[#0b1e6d] shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"   // 🔥 change if needed
              alt="Paul Sir Logo"
              width={70}
              height={70}
              className="rounded-full"
            />
         
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-8">

            <Link href="/" className="navLink">Home</Link>
            <Link href="/about" className="navLink">About</Link>

            {/* DESKTOP DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
                className="flex items-center navLink"
              >
                Courses
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                  isDesktopDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {isDesktopDropdownOpen && (
                <div className="absolute left-0 mt-4 w-[500px] bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-2">

                    <div className="bg-gray-50 p-5">
                      <h3 className="dropdownHeading">All Courses</h3>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/courses" className="dropdownLink font-semibold text-[#0b1e6d]">📚 View All Courses</Link></li>
                      </ul>
                      
                      <h3 className="dropdownHeading mt-4">School</h3>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/courses/icse-accounts-economics" className="dropdownLink">ICSE Accounts & Economics</Link></li>
                        <li><Link href="/courses/isc-commerce-stream" className="dropdownLink">ISC Commerce Stream</Link></li>
                        <li><Link href="/courses/cbse-commerce-complete" className="dropdownLink">CBSE Commerce Complete</Link></li>
                        <li><Link href="/courses/higher-secondary-commerce" className="dropdownLink">Higher Secondary Commerce</Link></li>
                      </ul>
                    </div>

                    <div className="p-5">
                      <h3 className="dropdownHeading">College & Pro</h3>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/courses/bcom-complete-program" className="dropdownLink">B.Com Complete Program</Link></li>
                        <li><Link href="/courses/bba-specialized-coaching" className="dropdownLink">BBA Specialized Coaching</Link></li>
                        <li><Link href="/courses/mba-executive-program" className="dropdownLink">MBA Executive Program</Link></li>
                        <li><Link href="/courses/ca-foundation-complete" className="dropdownLink">CA Foundation Complete</Link></li>
                        <li><Link href="/courses/ca-intermediate-group-1" className="dropdownLink">CA Intermediate Group 1</Link></li>
                        <li><Link href="/courses/ca-intermediate-group-2" className="dropdownLink">CA Intermediate Group 2</Link></li>
                        <li><Link href="/courses/cma-foundation-program" className="dropdownLink">CMA Foundation Program</Link></li>
                        <li><Link href="/courses/cma-intermediate" className="dropdownLink">CMA Intermediate</Link></li>
                        <li><Link href="/courses/cs-foundation-program" className="dropdownLink">CS Foundation Program</Link></li>
                        <li><Link href="/courses/cs-executive-program" className="dropdownLink">CS Executive Program</Link></li>
                      </ul>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="navLink">Contact</Link>

            {/* BUTTONS */}
           

            <Link href="/enroll" className="enrollBtn">
              Enroll Now
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden text-white">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0b1e6d] px-6 py-6 space-y-4">
          <Link href="/" className="mobileLink">Home</Link>
          <Link href="/about" className="mobileLink">About</Link>

          <button
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            className="flex justify-between w-full mobileLink"
          >
            Courses
            <ChevronDown className={`transition-transform ${
              isMobileDropdownOpen ? 'rotate-180' : ''
            }`} />
          </button>

          {isMobileDropdownOpen && (
            <div className="ml-4 space-y-2 text-sm text-gray-300">
              <Link href="/courses" className="block font-semibold text-[#f5c542]">📚 View All Courses</Link>
              <Link href="/courses/icse-accounts-economics" className="block">ICSE Accounts & Economics</Link>
              <Link href="/courses/isc-commerce-stream" className="block">ISC Commerce Stream</Link>
              <Link href="/courses/cbse-commerce-complete" className="block">CBSE Commerce Complete</Link>
              <Link href="/courses/higher-secondary-commerce" className="block">Higher Secondary Commerce</Link>
              <Link href="/courses/bcom-complete-program" className="block">B.Com Complete Program</Link>
              <Link href="/courses/bba-specialized-coaching" className="block">BBA Specialized Coaching</Link>
              <Link href="/courses/mba-executive-program" className="block">MBA Executive Program</Link>
              <Link href="/courses/ca-foundation-complete" className="block">CA Foundation Complete</Link>
              <Link href="/courses/ca-intermediate-group-1" className="block">CA Intermediate Group 1</Link>
              <Link href="/courses/ca-intermediate-group-2" className="block">CA Intermediate Group 2</Link>
              <Link href="/courses/cma-foundation-program" className="block">CMA Foundation Program</Link>
              <Link href="/courses/cma-intermediate" className="block">CMA Intermediate</Link>
              <Link href="/courses/cs-foundation-program" className="block">CS Foundation Program</Link>
              <Link href="/courses/cs-executive-program" className="block">CS Executive Program</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
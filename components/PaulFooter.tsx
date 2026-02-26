import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function PaulFooter() {
  return (
    <footer className="bg-[#0b1e6d] text-white relative">
      {/* Top Gradient Separator */}
      <div className="h-1 bg-gradient-to-r from-[#f5c542] via-[#f5c542] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About Institute */}
          <div className="space-y-4">
          <img src="/logo.png" alt=""  className="w-30 h-30"/>
            <p className="text-gray-300 text-sm leading-relaxed">
              25 Years Experienced Commerce Faculty. Expert guidance for ICSE, ISC, CBSE, B.Com, CA, CMA, CS and MBA students.
            </p>
            <p className="text-[#f5c542] text-sm font-medium italic">
              Commerce Excellence Since 25 Years
            </p>
                {/* Social Media Icons */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white  bg-opacity-10 text-[#0b1e6d]  hover:bg-[#f5c542] hover:text-[#0b1e6d] rounded-full flex items-center justify-center transition-all duration-200 group"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white bg-opacity-10 text-[#0b1e6d] hover:bg-[#f5c542] hover:text-[#0b1e6d] rounded-full flex items-center justify-center transition-all duration-200 group"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/9830275787" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white text-[#0b1e6d] bg-opacity-10 hover:bg-[#f5c542] hover:text-[#0b1e6d] rounded-full flex items-center justify-center transition-all duration-200 group"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#f5c542] mb-4">
              Courses
            </h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">School Level</h4>
                <ul className="space-y-1">
                  <li>
                    <Link 
                      href="/courses/icse" 
                      className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                    >
                      ICSE
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/courses/isc" 
                      className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                    >
                      ISC
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/courses/cbse" 
                      className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                    >
                      CBSE
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/courses/hs-state-board" 
                      className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                    >
                      H.S (State Board)
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">College & Professional</h4>
                <ul className="space-y-1">
                  <li>
                    <Link 
                      href="/courses/bcom" 
                      className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                    >
                      B.Com (All Semester)
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/courses/bba" 
                      className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                    >
                      BBA
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/courses/mba" 
                      className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                    >
                      MBA
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/courses/ca" 
                      className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                    >
                      CA (Foundation & Inter)
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/courses/cma" 
                      className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                    >
                      CMA (Foundation & Inter)
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/courses/cs" 
                      className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                    >
                      CS (Foundation & Inter)
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#f5c542] mb-4">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              {/* Main Address */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-300">Main Address</h4>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-[#f5c542] mt-0.5 flex-shrink-0" />
                  <div className="text-gray-400 text-sm">
                    <p>35B, South Sinthee Road,</p>
                    <p>Kolkata – 700050</p>
                    <p className="text-xs text-gray-500">(Near Dumdum Station)</p>
                  </div>
                </div>
              </div>
              
              {/* Branch Address */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-300">Branch Address</h4>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-[#f5c542] mt-0.5 flex-shrink-0" />
                  <div className="text-gray-400 text-sm">
                    <p>148, Ramdulal Sarkar Street,</p>
                    <p>Hedua, Kolkata – 700006</p>
                    <p className="text-xs text-gray-500">(Near Girish Park Metro)</p>
                  </div>
                </div>
              </div>
              
              {/* Phone Numbers */}
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-gray-300">Phone</h4>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#f5c542]" />
                  <a 
                    href="tel:9007019442" 
                    className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm"
                  >
                    9007019442
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#f5c542]" />
                  <a 
                    href="tel:9830275787" 
                    className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm"
                  >
                    9830275787
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-gray-300">Email</h4>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-[#f5c542]" />
                  <a 
                    href="mailto:paulsirsclasses@gmail.com" 
                    className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm"
                  >
                    paulsirsclasses@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#f5c542] mb-4">
              Quick Links
            </h3>
            
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses" 
                  className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                >
                  Courses
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>
         
       
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-sm relative group py-1 inline-block"
                >
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>

        
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} PAUL SIR'S CLASSES. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed with professionalism.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <Link 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-xs relative group py-1 inline-block"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-gray-400 hover:text-[#f5c542] transition-colors duration-200 text-xs relative group py-1 inline-block"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f5c542] transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

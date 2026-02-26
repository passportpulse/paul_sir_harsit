import Link from 'next/link'
import { Home, ArrowLeft, Search, BookOpen } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1e6d] to-[#1a2f7d] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-white opacity-20">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">😕</div>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h2>
        
        <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for seems to have vanished. Let's get you back on track with your commerce studies!
        </p>

        {/* Search Suggestion */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center space-x-2 text-[#f5c542] mb-3">
            <Search className="h-5 w-5" />
            <span className="font-medium">Looking for something specific?</span>
          </div>
          <p className="text-gray-300 text-sm">
            Try searching for our popular courses or navigate using the menu above
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center space-x-2 bg-[#f5c542] text-[#0b1e6d] px-6 py-3 rounded-lg font-semibold hover:bg-[#f5d542] transition-all duration-200 transform hover:scale-105"
          >
            <Home className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          
          <Link 
            href="/courses"
            className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20"
          >
            <BookOpen className="h-5 w-5" />
            <span>Browse Courses</span>
          </Link>
        </div>

        {/* Popular Courses */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <h3 className="text-white font-semibold mb-4">Popular Courses</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: 'CA Foundation', slug: 'ca-foundation-complete' },
              { name: 'B.Com', slug: 'bcom-complete-program' },
              { name: 'ICSE', slug: 'icse-accounts-economics' },
              { name: 'CMA', slug: 'cma-foundation-program' },
            ].map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="bg-white/5 hover:bg-white/10 text-white text-sm py-2 px-3 rounded-lg transition-all duration-200 border border-white/10 hover:border-[#f5c542]"
              >
                {course.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-2">Need immediate help?</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="tel:9007019442"
              className="text-[#f5c542] hover:text-[#f5d542] font-medium transition-colors"
            >
              📞 9007019442
            </a>
            <a 
              href="https://wa.me/9830275787"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5c542] hover:text-[#f5d542] font-medium transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

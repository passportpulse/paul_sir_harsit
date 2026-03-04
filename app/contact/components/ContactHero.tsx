'use client'

export default function ContactHero() {
  return (
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
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white transform translate-y-1/2 rotate-180">
          <svg className="h-full w-full text-yellow-500" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,0 Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

'use client'

export default function EnrollHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e6d]/90 to-[#1e3a8a]/85"></div>

      <div className="relative max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Enroll Now
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-6">
          Start Your Journey to Commerce Excellence
        </p>
        <p className="text-lg text-gray-300">
          Join 5000+ successful students who have achieved their dreams with Paul Sir's Classes
        </p>
      </div>
    </section>
  )
}

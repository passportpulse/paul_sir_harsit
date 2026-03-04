'use client'

export default function GalleryHero() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e6d]/90 to-[#1e3a8a]/85"></div>

      <div className="relative max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Gallery Paul Sir's Classes
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Explore our journey through photos and videos - classrooms, events, achievements, and memorable moments
        </p>
      </div>
    </section>
  )
}

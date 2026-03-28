import { useState, useEffect, useCallback } from 'react'
import slide1 from '../assets/Images/front_page_sliding/01.jpg'
import slide2 from '../assets/Images/front_page_sliding/02.jpeg'
import slide3 from '../assets/Images/front_page_sliding/03.jpg'
import slide4 from '../assets/Images/front_page_sliding/04.jpg'

const CAROUSEL_IMAGES = [
  { src: slide1, alt: 'Architectural Texture' },
  { src: slide2, alt: 'Monolithic Facade' },
  { src: slide3, alt: 'Concrete Structure' },
  { src: slide4, alt: 'Desert Minimalist' },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
  }, [])

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 5000)
    return () => clearInterval(interval)
  }, [handleNext])

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 pt-32 pb-20 relative overflow-hidden bg-[#EAE7E1]">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {CAROUSEL_IMAGES.map(({ src, alt }, index) => (
          <div
            key={alt}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-45' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover md:grayscale"
            />
          </div>
        ))}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#EAE7E1] via-transparent to-[#EAE7E1]/80 pointer-events-none" />
      </div>

      {/* Carousel Controls */}
      <button
        onClick={handlePrev}
        className="absolute inset-y-0 left-0 z-20 flex items-center px-4 md:px-8 group"
      >
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#1A1A1A]/60 group-hover:text-[#C05A3E] group-hover:bg-white/30 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl font-extralight group-hover:scale-110 transition-transform">
            chevron_left
          </span>
        </div>
      </button>
      <button
        onClick={handleNext}
        className="absolute inset-y-0 right-0 z-20 flex items-center px-4 md:px-8 group"
      >
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#1A1A1A]/60 group-hover:text-[#C05A3E] group-hover:bg-white/30 transition-all duration-300">
          <span className="material-symbols-outlined text-4xl font-extralight group-hover:scale-110 transition-transform">
            chevron_right
          </span>
        </div>
      </button>

      {/* Hero Content */}
      <div className="max-w-screen-2xl mx-auto w-full relative z-10">
        <div className="text-[10px] uppercase tracking-[0.5em] text-[#C05A3E] mb-8 font-[Inter]">
          The Studio of Silence
        </div>

        <h1 className="font-['Playfair_Display'] italic text-5xl md:text-8xl lg:text-9xl leading-[1.1] text-[#1A1A1A] max-w-5xl tracking-tight mb-12">
          Designing Spaces That{' '}
          <span className="text-[#C05A3E]">Speak Quietly.</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end gap-12">
          <p className="text-[#666666] text-lg md:text-xl max-w-md leading-relaxed">
            Architecture, interiors, and spatial experiences crafted with
            intention and monolithic presence.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-10 py-4 bg-[#C05A3E] text-white font-[Inter] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#A54B32] transition-all duration-500"
            >
              View Project
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border border-[#1A1A1A]/20 text-[#1A1A1A] font-[Inter] text-xs uppercase tracking-[0.2em] hover:bg-[#1A1A1A]/5 transition-all duration-500"
            >
              Explore Space
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

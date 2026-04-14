import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel'
import { Link } from 'react-router-dom'

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
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#EAE7E1]">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-screen"
        opts={{
          loop: true,
          duration: 30, // Smooth transition
        }}
      >
        <CarouselContent className="-ml-0 h-screen">
          {CAROUSEL_IMAGES.map(({ src, alt }) => (
            <CarouselItem key={alt} className="pl-0 relative h-screen w-full">
              <div className="absolute inset-0">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover transition-all duration-1000 grayscale-0 md:grayscale hover:grayscale-0 opacity-85 blur-xxs"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#EAE7E1] via-transparent to-[#EAE7E1]/80 pointer-events-none z-10" />
        
        <CarouselPrevious className="left-8 z-20 h-12 w-12 bg-white/10 backdrop-blur-md border-white/20 text-neutral-900 hover:bg-white/30 [&_svg]:h-8 [&_svg]:w-8" />
        <CarouselNext className="right-8 z-20 h-12 w-12 bg-white/10 backdrop-blur-md border-white/20 text-neutral-900 hover:bg-white/30 [&_svg]:h-8 [&_svg]:w-8" />
      </Carousel>
      
      {/* Centered Overlay Links */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-items-center items-center justify-center gap-x-12 gap-y-8 md:gap-16 lg:gap-24 px-8 pointer-events-auto text-center">
          {[
            { label: 'Work', path: '/work' },
            { label: 'Insights', path: '#' },
            { label: 'About', path: '/about' },
            { label: 'Contact', path: '/contact' },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="font-['Playfair_Display'] text-lg md:text-4xl lg:text-5xl text-white hover:text-[#C05A3E] transition-all duration-500 no-underline drop-shadow-md italic"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Hero Content - REMOVED per user request */}
    </section>
  )
}

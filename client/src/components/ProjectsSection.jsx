import { useState, useEffect } from 'react'

// Cabin & Co
import cabin_co_1 from '../assets/Images/COMMERCIAL/CABIN & CO/H1_Interactive LightMix copy.jpg'
import cabin_co_2 from '../assets/Images/COMMERCIAL/CABIN & CO/H2_Interactive LightMix copy 2.jpg'
import cabin_co_3 from '../assets/Images/COMMERCIAL/CABIN & CO/H3_Interactive LightMix copy.jpg'

// S Pal
import spal_1 from '../assets/Images/COMMERCIAL/S PAL BUSINESS PARK OFFICE GURGAON/CONFRENCE.jpg'
import spal_2 from '../assets/Images/COMMERCIAL/S PAL BUSINESS PARK OFFICE GURGAON/V1.jpg'
import spal_3 from '../assets/Images/COMMERCIAL/S PAL BUSINESS PARK OFFICE GURGAON/V2.jpg'

// Primark
import primark_1 from '../assets/Images/COMMERCIAL/primark office bhopal/C6_Interactive LightMix.jpg'
import primark_2 from '../assets/Images/COMMERCIAL/primark office bhopal/t1_Interactive LightMix.jpg'
import primark_3 from '../assets/Images/COMMERCIAL/primark office bhopal/t2_Interactive LightMix.jpg'

// Hotel (Only 1)
import hotel_1 from '../assets/Images/HOSPITALITY/SUNEL GUPTA HOTEL BADAUN/K3_Interactive LightMix copy.jpg'

// Farm House (Only 1)
import farm_house_1 from '../assets/Images/RESIDENCE/FARM HOUSE/c4_Interactive LightMix.jpg'

// Farm House Interior
import farm_house_int_1 from '../assets/Images/RESIDENCE/FARM HOUSE INTERIOR/C2_Interactive LightMix.jpg'
import farm_house_int_2 from '../assets/Images/RESIDENCE/FARM HOUSE INTERIOR/1.jpg'
import farm_house_int_3 from '../assets/Images/RESIDENCE/FARM HOUSE INTERIOR/2.jpg'

// Looks Salon
import looks_salon_1 from '../assets/Images/RETAIL/LOOKS SALON/1.jpg'
import looks_salon_2 from '../assets/Images/RETAIL/LOOKS SALON/2.jpg'
import looks_salon_3 from '../assets/Images/RETAIL/LOOKS SALON/3.jpg'

const PROJECTS = [
  {
    id: 1,
    title: 'CABIN & CO',
    location: 'Office / Commercial',
    type: 'Workspace',
    images: [cabin_co_1, cabin_co_2, cabin_co_3],
    offset: false,
  },
  {
    id: 2,
    title: 'S PAL BUSINESS PARK',
    location: 'Gurgaon / Commercial',
    type: 'Business Park',
    images: [spal_1, spal_2, spal_3],
    offset: true,
  },
  {
    id: 3,
    title: 'PRIMARK OFFICE',
    location: 'Bhopal / Commercial',
    type: 'Office Interior',
    images: [primark_1, primark_2, primark_3],
    offset: false,
  },
  {
    id: 4,
    title: 'SUNEL GUPTA HOTEL',
    location: 'Badaun / Hospitality',
    type: 'Institutional',
    images: [hotel_1],
    offset: true,
  },
  {
    id: 5,
    title: 'FARM HOUSE',
    location: 'Residence',
    type: 'Modern Living',
    images: [farm_house_1],
    offset: false,
  },
  {
    id: 6,
    title: 'FARM HOUSE INTERIOR',
    location: 'Residence',
    type: 'Interior Design',
    images: [farm_house_int_1, farm_house_int_2, farm_house_int_3],
    offset: true,
  },
  {
    id: 7,
    title: 'LOOKS SALON',
    location: 'Retail',
    type: 'Beauty & Wellness',
    images: [looks_salon_1, looks_salon_2, looks_salon_3],
    offset: false,
  },
]

function ProjectCard({ title, location, type, images, offset }) {
  const [imgIndex, setImgIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let interval
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % images.length)
      }, 2200) // Slower speed: 2.2s per image
    } else {
      setImgIndex(0)
    }
    return () => clearInterval(interval)
  }, [isHovered, images.length])

  return (
    <div
      className={`group cursor-pointer ${offset ? 'md:mt-32' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden bg-[#EAE7E1] aspect-[4/5] mb-6 relative">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${title} - image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] grayscale-0 md:grayscale group-hover:grayscale-0 group-hover:scale-105 ${
              index === imgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-100'
            }`}
          />
        ))}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-['Playfair_Display'] text-2xl text-[#1A1A1A] mb-2 uppercase">
            {title}
          </h3>
          <p className="font-[Inter] text-[10px] uppercase tracking-widest text-[#666666]">
            {location} / {type}
          </p>
        </div>
        <span className="material-symbols-outlined text-[#C05A3E] opacity-0 group-hover:opacity-100 transition-opacity">
          arrow_outward
        </span>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4)

  return (
    <section className="py-32 px-8 bg-[#FAFAF7]" id="projects">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-20 border-b border-black/5 pb-10">
          <h2 className="font-['Playfair_Display'] text-4xl italic text-[#1A1A1A]">
            Selected Works
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && PROJECTS.length > 4 && (
          <div className="mt-24 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-12 py-5 border border-on-surface/20 text-on-surface font-[Inter] text-xs uppercase tracking-[0.4em] hover:bg-[#C05A3E] hover:text-white hover:border-[#C05A3E] transition-all duration-500 font-bold"
            >
              More Projects +
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

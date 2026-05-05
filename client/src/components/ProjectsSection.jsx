import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

function ProjectCard({ id, title, location, category, type, images, offset }) {
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
    <Link
      to={`/project/${id}`}
      className={`group block cursor-pointer no-underline ${offset ? 'md:mt-32' : ''}`}
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
            {location} / {category}
          </p>
        </div>
        <span className="material-symbols-outlined text-[#C05A3E] opacity-0 group-hover:opacity-100 transition-opacity">
          arrow_outward
        </span>
      </div>
    </Link>
  )
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  
  const CATEGORIES = ['All', 'Commercial', 'Hospitality', 'Residential', 'Retail', 'Others']

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)

  return (
    <section className="py-32 px-8 bg-[#FAFAF7]" id="projects">
      <div className="max-w-screen-2xl mx-auto">
        {/* Filter Navbar */}
        <div className="mb-20 border-b border-black/5 pb-10">
          <div className="flex flex-wrap gap-y-6 gap-x-8 md:gap-12">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category)
                  setShowAll(false)
                }}
                className={`font-[Inter] text-xs uppercase tracking-widest transition-all duration-300 pb-2 border-b-2 ${
                  activeFilter === category 
                    ? 'text-[#C05A3E] border-[#C05A3E] font-bold'
                    : 'text-neutral-400 hover:text-[#1A1A1A] border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
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
        {!showAll && filteredProjects.length > 4 && (
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

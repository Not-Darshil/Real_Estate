import cabin_co from '../assets/Images/COMMERCIAL/CABIN & CO/H1_Interactive LightMix copy.jpg'
import spal_office from '../assets/Images/COMMERCIAL/S PAL BUSINESS PARK OFFICE GURGAON/CONFRENCE.jpg'
import primark_office from '../assets/Images/COMMERCIAL/primark office bhopal/C6_Interactive LightMix.jpg'
import hotel_badaun from '../assets/Images/HOSPITALITY/SUNEL GUPTA HOTEL BADAUN/K3_Interactive LightMix copy.jpg'
import farm_house from '../assets/Images/RESIDENCE/FARM HOUSE/c4_Interactive LightMix.jpg'
import farm_house_interior from '../assets/Images/RESIDENCE/FARM HOUSE INTERIOR/C2_Interactive LightMix.jpg'
import looks_salon from '../assets/Images/RETAIL/LOOKS SALON/1.jpg'

const PROJECTS = [
  {
    id: 1,
    title: 'CABIN & CO',
    location: 'Office / Commercial',
    type: 'Workspace',
    src: cabin_co,
    offset: false,
  },
  {
    id: 2,
    title: 'S PAL BUSINESS PARK',
    location: 'Gurgaon / Commercial',
    type: 'Business Park',
    src: spal_office,
    offset: true,
  },
  {
    id: 3,
    title: 'PRIMARK OFFICE',
    location: 'Bhopal / Commercial',
    type: 'Office Interior',
    src: primark_office,
    offset: false,
  },
  {
    id: 4,
    title: 'SUNEL GUPTA HOTEL',
    location: 'Badaun / Hospitality',
    type: 'Institutional',
    src: hotel_badaun,
    offset: true,
  },
  {
    id: 5,
    title: 'FARM HOUSE',
    location: 'Residence',
    type: 'Modern Living',
    src: farm_house,
    offset: false,
  },
  {
    id: 6,
    title: 'FARM HOUSE INTERIOR',
    location: 'Residence',
    type: 'Interior Design',
    src: farm_house_interior,
    offset: true,
  },
  {
    id: 7,
    title: 'LOOKS SALON',
    location: 'Retail',
    type: 'Beauty & Wellness',
    src: looks_salon,
    offset: false,
  },
]

function ProjectCard({ title, location, type, src, offset }) {
  return (
    <div className={`group cursor-pointer ${offset ? 'md:mt-32' : ''}`}>
      <div className="overflow-hidden bg-[#EAE7E1] aspect-[4/5] mb-6">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-['Playfair_Display'] text-2xl text-[#1A1A1A] mb-2 uppercase">{title}</h3>
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
  return (
    <section className="py-32 px-8 bg-[#FAFAF7]" id="projects">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-20 border-b border-black/5 pb-10">
          <h2 className="font-['Playfair_Display'] text-4xl italic text-[#1A1A1A]">
            Selected Works
          </h2>
          <span className="font-[Inter] text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            Portfolio — 2024
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

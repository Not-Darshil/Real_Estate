import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { useEffect } from 'react'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = PROJECTS.find(p => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return <Navigate to="/work" replace />
  }

  return (
    <div className="pt-32 pb-40 px-8 bg-[#FAFAF7] min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-12 flex items-center gap-2 font-[Inter] text-xs uppercase tracking-[0.3em] text-neutral-400 hover:text-[#C05A3E] transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Projects
        </button>

        {/* Header */}
        <div className="mb-24 md:mb-32">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#1A1A1A] mb-8 tracking-tight uppercase">
            {project.title}
          </h1>
        </div>

        {/* Info Grid & Description */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-40">
          {/* Info Column */}
          <div className="w-full lg:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-10">
            <div>
              <span className="block font-[Inter] text-xs uppercase tracking-widest text-[#C05A3E] mb-2">Size</span>
              <p className="font-[Inter] text-lg text-[#1A1A1A]">{project.size}</p>
            </div>
            <div>
              <span className="block font-[Inter] text-xs uppercase tracking-widest text-[#C05A3E] mb-2">Type</span>
              <p className="font-[Inter] text-lg text-[#1A1A1A]">{project.type}</p>
            </div>
            <div>
              <span className="block font-[Inter] text-xs uppercase tracking-widest text-[#C05A3E] mb-2">Location</span>
              <p className="font-[Inter] text-lg text-[#1A1A1A]">{project.location}</p>
            </div>
            <div>
              <span className="block font-[Inter] text-xs uppercase tracking-widest text-[#C05A3E] mb-2">Status</span>
              <p className="font-[Inter] text-lg text-[#1A1A1A]">{project.status}</p>
            </div>
          </div>

          {/* Description Column */}
          <div className="w-full lg:w-2/3">
            <span className="block font-[Inter] text-xs uppercase tracking-widest text-[#C05A3E] mb-6">Description</span>
            <p className="font-[Inter] text-[#666666] text-xl md:text-2xl leading-relaxed text-justify">
              {project.description}
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="space-y-16 md:space-y-32">
          {project.images.map((imgSrc, idx) => (
            <div key={idx} className="w-full overflow-hidden bg-[#EAE7E1]">
              <img 
                src={imgSrc} 
                alt={`${project.title} - view ${idx + 1}`} 
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

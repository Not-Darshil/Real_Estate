import { ChevronsRight } from 'lucide-react'

const FOUNDERS = [
  {
    name: 'Sonali Bhagwati',
    role: 'PARTNER | ARCHITECT',
    bio: 'An alumnus of CEPT Ahmedabad, she is a distinguished architect and interior designer with over three decades of experience. Trained under Bernard Kohn in Paris, her work spans award-winning projects across India, earning recognition among the country\'s top architects. Widely published, she has also served two terms with the Delhi Urban Arts Commission, contributing significantly to urban reform and design advocacy.',
    highlights: [
      {
        title: 'Architecture & Interiors',
        description: 'Designing homes, workplaces, and spaces that blend function, beauty, and cultural context.'
      },
      {
        title: 'Urban Design & Heritage',
        description: 'Offering insight-driven solutions for Sustainable urban rejuvenation and heritage revitalization.'
      },
      {
        title: 'Design Advisory & Leadership',
        description: 'Guiding projects with award-winning expertise, published work, and thought leadership.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop'
  },
  {
    name: 'Karan Gupta',
    role: 'PARTNER | DESIGN DIRECTOR',
    bio: 'With a focus on monolithic structures and minimal materiality, Karan brings a contemporary edge to the studio\'s portfolio. His background in structural engineering combined with a passion for Brutalist aesthetics allows him to craft spaces that feel both grounded and ethereal. He oversees the technical innovation and sustainable integration of all large-scale projects at the firm.',
    highlights: [
      {
        title: 'Material Innovation',
        description: 'Pushing the boundaries of concrete, steel, and timber in modern architectural applications.'
      },
      {
        title: 'Sustainable Systems',
        description: 'Integrating net-zero energy solutions into luxury residential and commercial developments.'
      },
      {
        title: 'Project Orchestration',
        description: 'Seamlessly managing complex construction timelines from conceptual sketch to final handover.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop'
  }
]

function FounderBlock({ founder }) {
  return (
    <div className="max-w-4xl mx-auto mb-40 last:mb-0">
      {/* Top Section: Image & Header */}
      <div className="flex flex-col md:flex-row gap-12 items-end mb-12">
        {/* Founder Image */}
        <div className="w-full md:w-1/2">
          <div className="aspect-square md:aspect-[4/3] overflow-hidden bg-[#EAE7E1]">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Text Header */}
        <div className="w-full md:w-1/2 text-left pb-4">
          <span className="font-[Inter] text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6 block">
            {founder.role}
          </span>
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#1A1A1A] tracking-tight">
            {founder.name}
          </h2>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full">
        
        <div className="flex flex-col md:flex-row gap-12 text-left">
          <div className="w-full md:w-1/2">
            <p className="font-[Inter] text-[#666666] text-lg leading-relaxed text-justify">
              {founder.bio}
            </p>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            {founder.highlights.map((item, idx) => (
              <div key={idx} className="flex gap-4 group">
                <ChevronsRight className="text-[#C05A3E] shrink-0 mt-1 transition-transform group-hover:translate-x-1" size={20} />
                <p className="text-[#1A1A1A] font-[Inter] leading-relaxed">
                  <span className="font-bold underline decoration-[#C05A3E]/30 decoration-2 underline-offset-4">{item.title}</span> – {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section className="py-40 px-8 bg-[#FAFAF7]" id="about">
      <div className="max-w-screen-2xl mx-auto">
        {/* Company Philosophy / How We Work */}
        <div className="max-w-4xl mx-auto mb-40">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl italic text-[#1A1A1A] mb-12 text-center">
            How We Work
          </h2>
          <div className="font-[Inter] text-[#666666] text-lg leading-relaxed text-justify space-y-6">
            <p>
              Sleek Line Architect is conceived as more than a design practice—it is an evolving dialogue between form, function, and the future. With a commitment to redefining contemporary design narratives, the studio seeks to position itself as a catalyst in shaping spaces that are not only visually refined but experientially meaningful.
            </p>
            <p>
              At its core, Sleek Line Architect is driven not by a fixed aesthetic, but by a mindset of curiosity and exploration. The process begins with a simple yet powerful question: what could this become? What if design moved beyond boundaries? What if spaces adapted intuitively to human interaction? What if architecture wasn’t static, but fluid and responsive?
            </p>
            <p>
              Each project becomes an opportunity to experiment—whether it’s a residential space, a commercial development, an interior transformation, or a large-scale urban vision. This diversity fuels a dynamic creative process, allowing ideas to cross-pollinate and evolve into something unexpected and distinctive.
            </p>
            <p>
              The Sleek Line approach is rooted in collaboration and clarity. By bringing together a multidisciplinary team of skilled professionals, the studio ensures a seamless, single-window execution that addresses every layer of a project—from concept to completion. It’s a process that encourages exploration while maintaining precision and purpose.
            </p>
          </div>

          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl italic text-[#1A1A1A] mb-12 mt-24 text-center">
            Our Mission
          </h2>
          <div className="font-[Inter] text-[#666666] text-lg leading-relaxed text-justify space-y-6">
            <p>
              At Sleek Line Architect, we believe architecture has the power to inspire, elevate, and transform. It is not merely about constructing physical structures, but about crafting environments that resonate with life, emotion, and imagination.
            </p>
            <p>
              We view every space as a living entity—one that interacts with its surroundings and the people who inhabit it. Guided by this philosophy, our mission is to create designs that exist in harmony with nature while responding thoughtfully to the evolving needs of modern living.
            </p>
            <p>
              Through innovation, experimentation, and a deep passion for design, Sleek Line Architect strives to shape a built environment that is both forward-thinking and timeless. Every project is an opportunity to add meaningful layers to the world around us—spaces that don’t just exist, but truly come alive.
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl italic text-[#1A1A1A] mb-12 text-center">
            Leadership
          </h2>
        </div>

        {/* Founders */}
        <div className="space-y-40">
          {FOUNDERS.map((founder) => (
            <FounderBlock 
              key={founder.name} 
              founder={founder} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

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

function FounderBlock({ founder, reverse }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-start mb-40 last:mb-0`}>
      {/* Text Content */}
      <div className="w-full md:w-3/5">
        <span className="font-[Inter] text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6 block">
          {founder.role}
        </span>
        <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#1A1A1A] mb-10 tracking-tight">
          {founder.name}
        </h2>
        
        <p className="text-[#666666] text-lg leading-relaxed mb-12 max-w-2xl font-[Inter]">
          {founder.bio}
        </p>

        <div className="space-y-8">
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

      {/* Founder Image */}
      <div className="w-full md:w-2/5">
        <div className="aspect-[3/4] overflow-hidden bg-[#EAE7E1]">
          <img
            src={founder.image}
            alt={founder.name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section className="py-40 px-8 bg-[#FAFAF7]" id="about">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="mb-32 border-b border-black/5 pb-12">
          <h1 className="font-['Playfair_Display'] italic text-3xl text-neutral-400 uppercase tracking-widest">
            Leadership
          </h1>
        </div>

        {/* Founders */}
        <div className="space-y-40">
          {FOUNDERS.map((founder, index) => (
            <FounderBlock 
              key={founder.name} 
              founder={founder} 
              reverse={index % 2 !== 0} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

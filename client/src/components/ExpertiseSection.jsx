const EXPERTISE_ITEMS = [
  { num: '01', label: 'Architectural Design' },
  { num: '02', label: 'Interior Curation' },
  { num: '03', label: 'Urban Planning' },
  { num: '04', label: 'Spatial Research' },
]

function ExpertiseItem({ num, label }) {
  return (
    <li className="py-12 flex justify-between items-center group cursor-default border-b border-black/5 last:border-b-0">
      <span className="font-[Inter] text-[10px] text-neutral-400 mr-8">{num}</span>
      <span className="font-['Playfair_Display'] text-3xl md:text-5xl text-[#1A1A1A] group-hover:text-[#C05A3E] transition-colors duration-500 flex-1">
        {label}
      </span>
      <span className="material-symbols-outlined text-neutral-300 group-hover:translate-x-2 group-hover:text-[#C05A3E] transition-all duration-500">
        arrow_right_alt
      </span>
    </li>
  )
}

export default function ExpertiseSection() {
  return (
    <section className="py-24 px-8 bg-[#FAFAF7]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left header */}
          <div className="w-full md:w-1/3">
            <h2 className="font-['Playfair_Display'] italic text-4xl text-[#1A1A1A]">
              Our Expertise
            </h2>
            <p className="mt-4 text-[#666666] text-sm">
              Comprehensive spatial strategies from concept to execution.
            </p>
          </div>

          {/* Right list */}
          <div className="w-full md:w-2/3">
            <ul className="divide-y divide-black/5">
              {EXPERTISE_ITEMS.map((item) => (
                <ExpertiseItem key={item.num} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

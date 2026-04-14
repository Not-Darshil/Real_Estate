const STATS = [
  { value: '12+', label: 'Years of Design' },
  { value: '45', label: 'Awards Won' },
]

export default function AboutSection() {
  return (
    <section className="py-32 px-8 bg-[#EAE7E1]" id="about">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="aspect-[3/4] bg-[#FAFAF7] relative overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4fSnqzFCKunfZIYxtp2I_xj-DsfS9qresvQ0uldU8CYREnIsW7PUfOai8bR46g4tHx33oCVZQowyRoOFRhnx3BfeSN8krC6dlMgXpAasE7fkIYsJw8w6zFX95KkjHKIC8xdfgFaIMxrUxlMsHwgoc-a1wS-hvsYo4MM8XQvWuZ4WHi-D8thPtmbIoZ-pS2LUcS4hur9JzxNvRlLayEI0SGxrJvYu4XyJ7cZiguRuPSyyZZtk5h1f01POjf4oUZHyhmqHghVah7F4"
              alt="About SLA"
              className="w-full h-full object-cover md:grayscale"
            />
            <div className="absolute inset-0 bg-[#C05A3E]/5 mix-blend-overlay" />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <span className="font-[Inter] text-[10px] uppercase tracking-[0.4em] text-[#C05A3E] mb-6 block">
            The Philosophy
          </span>
          <h2 className="font-['Playfair_Display'] italic text-4xl md:text-6xl text-[#1A1A1A] mb-8 leading-tight">
            Architecture is the language of weight and light.
          </h2>
          <p className="text-[#666666] text-lg leading-loose mb-12">
            SLA was founded on the principle that spaces should not just
            exist, but perform a silent service to their inhabitants. We strip
            away the unnecessary to reveal the core essence of
            materiality—concrete, wood, steel, and light.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-12">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <span className="font-['Playfair_Display'] text-3xl text-[#C05A3E] block mb-2">
                  {value}
                </span>
                <span className="font-[Inter] text-[10px] uppercase tracking-widest text-neutral-500">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

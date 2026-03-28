const PROJECTS = [
  {
    id: 1,
    title: 'Urban Residence',
    location: 'London, UK',
    type: 'Residential',
    offset: false,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaAYklfMlUNFKtEa_5pgeWCfLOvjwLfQ0RsexbAVGJiifnOJzS1q4AhP6f5t3D0Y5R9Vl2XTBclsYc6_kjzPJGB9fx49t-6cS6wDZ1rWOmY-TYPdaGTIUWAorB0Mchn5zaYx-WF2k4o92Qgx_VBFqsQpNImu8Can46qCWZK3lDO06tYBGJ4LVv2G1jVGoOWQbd2-UATyiEjE2PyeCP0AW0XDK2OsWWJpcUKasxKkJcaWfOeajHQowo6tk3xxbbLU5Hi4duBZceYRA',
  },
  {
    id: 2,
    title: 'Concrete Pavilion',
    location: 'Berlin, DE',
    type: 'Cultural',
    offset: true,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9PBCXhHKSkM9IS-rg_lERE3GHeXXLfdD_Day5cDutpk32SVTHKeAUXC2f1G1Tk8dnzFrjAqKHxWhn6H9ORJCPg-yZiv9ggCqdZp8shDC5_LFr3S1GG2Nv4yAEyHsxeucKdI3o_G9W7JVKb0b9bYSTr_wHbY45Ra9rF9FVThd83YFNlnMvIrWUwBjaA31yuU_86xDETmvAtV4gunVw1_o071hOlT1klnv0jrDue5wFPDlbybIPna7ZcCqHmfI0mjPJfuNSpIUvH5k',
  },
  {
    id: 3,
    title: 'Minimal Office',
    location: 'Tokyo, JP',
    type: 'Workplace',
    offset: false,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1alMuzQ1li4rk1clQyZEuiUjdz-5uDQ_nwkNA5Ghfqutej0GXeWpL2XEejDJxSMp48HjbMaYkNHPlOMIhI4kKS2kxrA74FOqVYmsZavY4Mn5yU48nZ0fLFLtxUDQZ-2rsdl4tt1sqjGAzwU7EXJosrhmqkMY16OoPuE9MiD5KAWr2lyzb8eSd844v28ALIXUh4LPnUobMugp4FWuziLWlusn4HlpecID4QYCCLzLKG9ZdxFR38dimUmh0pVHCtrGaJM3vzz8KJHs',
  },
  {
    id: 4,
    title: 'Desert Villa',
    location: 'Joshua Tree, US',
    type: 'Retreat',
    offset: true,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPjOA3rWCLMtHBfS05zqmoYgGIhjoh8-LePwIOReeBDf4ixo1U2GoYsszgIwknLQT8a7qrqCJZ0xxFe4qNAYQBXjxsIHX2Vp2CCaQRhDFe8Ol8sxF9QEhL4ut_5yWHZqsGHp3EcIMgape-3lXLcWCuwRI4NYEHwk90ZHedRM-y5dU6rFftJ3GuTwsmfTRLKT-d-F5zFnqZY7xwuSV-i-5_phrzGkGGbIDq7eljeWDuI8UQkQr76fKB_W1FVACVntnT2D3GNY7gkMs',
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
          <h3 className="font-['Playfair_Display'] text-2xl text-[#1A1A1A] mb-2">{title}</h3>
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
            Vol. 01 — 2024
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

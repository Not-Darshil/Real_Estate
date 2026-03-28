const CAROUSEL_IMAGES = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCrH0G3qxcoUkLrkh5JCQEW3595HKUyAq1z3PTq1JWuYQIcbkdzVOcorg3PA0X7heVCgw02ndMNSZ8wt1l_i0rwlvGpsVHRTu7KuzQTxIIJPHnLz4dTM1iYY5xqpYJkkj7pp7vzmA655lGNZh8oewYUm3N6HdslxlI_CYPqzXAPvwT-n2aPpVKQV-qY15-5l7djULS0cXifYlmUu6BjbpwkxqmGNsq4YbKhMa1qVJ5yXo4cBdDgAB7CQKT7Wi4VY19rU9XXL3WAj8',
    alt: 'Architectural Texture',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaAYklfMlUNFKtEa_5pgeWCfLOvjwLfQ0RsexbAVGJiifnOJzS1q4AhP6f5t3D0Y5R9Vl2XTBclsYc6_kjzPJGB9fx49t-6cS6wDZ1rWOmY-TYPdaGTIUWAorB0Mchn5zaYx-WF2k4o92Qgx_VBFqsQpNImu8Can46qCWZK3lDO06tYBGJ4LVv2G1jVGoOWQbd2-UATyiEjE2PyeCP0AW0XDK2OsWWJpcUKasxKkJcaWfOeajHQowo6tk3xxbbLU5Hi4duBZceYRA',
    alt: 'Monolithic Facade',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9PBCXhHKSkM9IS-rg_lERE3GHeXXLfdD_Day5cDutpk32SVTHKeAUXC2f1G1Tk8dnzFrjAqKHxWhn6H9ORJCPg-yZiv9ggCqdZp8shDC5_LFr3S1GG2Nv4yAEyHsxeucKdI3o_G9W7JVKb0b9bYSTr_wHbY45Ra9rF9FVThd83YFNlnMvIrWUwBjaA31yuU_86xDETmvAtV4gunVw1_o071hOlT1klnv0jrDue5wFPDlbybIPna7ZcCqHmfI0mjPJfuNSpIUvH5k',
    alt: 'Concrete Structure',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPjOA3rWCLMtHBfS05zqmoYgGIhjoh8-LePwIOReeBDf4ixo1U2GoYsszgIwknLQT8a7qrqCJZ0xxFe4qNAYQBXjxsIHX2Vp2CCaQRhDFe8Ol8sxF9QEhL4ut_5yWHZqsGHp3EcIMgape-3lXLcWCuwRI4NYEHwk90ZHedRM-y5dU6rFftJ3GuTwsmfTRLKT-d-F5zFnqZY7xwuSV-i-5_phrzGkGGbIDq7eljeWDuI8UQkQr76fKB_W1FVACVntnT2D3GNY7gkMs',
    alt: 'Desert Minimalist',
  },
]

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 pt-32 pb-20 relative overflow-hidden bg-[#EAE7E1]">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {CAROUSEL_IMAGES.map(({ src, alt }) => (
          <div key={alt} className="carousel-item">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover md:grayscale opacity-20"
            />
          </div>
        ))}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#EAE7E1] via-transparent to-[#EAE7E1]/80 pointer-events-none" />
      </div>

      {/* Carousel arrows */}
      <button className="absolute inset-y-0 left-0 z-20 flex items-center px-4 md:px-8 p-2 text-[#1A1A1A]/20 hover:text-[#C05A3E] transition-colors duration-300">
        <span className="material-symbols-outlined text-4xl font-extralight">chevron_left</span>
      </button>
      <button className="absolute inset-y-0 right-0 z-20 flex items-center px-4 md:px-8 p-2 text-[#1A1A1A]/20 hover:text-[#C05A3E] transition-colors duration-300">
        <span className="material-symbols-outlined text-4xl font-extralight">chevron_right</span>
      </button>

      {/* Hero Content */}
      <div className="max-w-screen-2xl mx-auto w-full relative z-10">
        <div className="text-[10px] uppercase tracking-[0.5em] text-[#C05A3E] mb-8 font-[Inter]">
          The Studio of Silence
        </div>

        <h1 className="font-['Playfair_Display'] italic text-5xl md:text-8xl lg:text-9xl leading-[1.1] text-[#1A1A1A] max-w-5xl tracking-tight mb-12">
          Designing Spaces That{' '}
          <span className="text-[#C05A3E]">Speak Quietly.</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end gap-12">
          <p className="text-[#666666] text-lg md:text-xl max-w-md leading-relaxed">
            Architecture, interiors, and spatial experiences crafted with
            intention and monolithic presence.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-10 py-4 bg-[#C05A3E] text-white font-[Inter] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#A54B32] transition-all duration-500"
            >
              View Project
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border border-[#1A1A1A]/20 text-[#1A1A1A] font-[Inter] text-xs uppercase tracking-[0.2em] hover:bg-[#1A1A1A]/5 transition-all duration-500"
            >
              Explore Space
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

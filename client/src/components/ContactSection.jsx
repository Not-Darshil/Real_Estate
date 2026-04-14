import { useState } from 'react'

const CONTACT_INFO = [
  {
    label: 'New Inquiries',
    value: 'hello@SLA.studio',
    href: 'mailto:hello@SLA.studio',
    isLink: true,
  },
  {
    label: 'Studio Address',
    value: '22 Bruton St, London W1J 6QE',
    isLink: false,
  },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', description: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
  }

  return (
    <section className="py-32 px-8 bg-[#EAE7E1]" id="contact">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Left Info */}
          <div>
            <h2 className="font-['Playfair_Display'] italic text-5xl md:text-7xl text-[#1A1A1A] mb-8">
              Let's build something timeless.
            </h2>
            <p className="text-[#666666] text-xl mb-12 max-w-md">
              We are always looking for visionary clients who value the integrity
              of space.
            </p>
            <div className="space-y-8">
              {CONTACT_INFO.map(({ label, value, href, isLink }) => (
                <div key={label}>
                  <span className="font-[Inter] text-[10px] uppercase tracking-widest text-[#C05A3E] block mb-2">
                    {label}
                  </span>
                  {isLink ? (
                    <a
                      href={href}
                      className="font-['Playfair_Display'] text-2xl text-[#1A1A1A] hover:text-[#C05A3E] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-['Playfair_Display'] text-2xl text-[#1A1A1A]">
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <form className="space-y-12" onSubmit={handleSubmit}>
            {[
              { name: 'name', type: 'text', placeholder: 'YOUR NAME' },
              { name: 'email', type: 'email', placeholder: 'EMAIL ADDRESS' },
            ].map(({ name, type, placeholder }) => (
              <div key={name} className="relative">
                <input
                  id={`contact-${name}`}
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-0 border-b border-[#1A1A1A]/10 py-4 font-[Inter] text-xs tracking-widest text-[#1A1A1A] focus:outline-none focus:border-[#C05A3E] transition-colors placeholder:text-neutral-400 uppercase"
                />
              </div>
            ))}
            <div className="relative">
              <textarea
                id="contact-description"
                name="description"
                rows={4}
                value={form.description}
                onChange={handleChange}
                placeholder="PROJECT DESCRIPTION"
                className="w-full bg-transparent border-0 border-b border-[#1A1A1A]/10 py-4 font-[Inter] text-xs tracking-widest text-[#1A1A1A] focus:outline-none focus:border-[#C05A3E] transition-colors placeholder:text-neutral-400 uppercase resize-none"
              />
            </div>
            <button
              id="contact-submit"
              type="submit"
              className="w-full md:w-auto px-12 py-5 bg-[#C05A3E] text-white font-[Inter] text-xs uppercase tracking-widest hover:bg-[#A54B32] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

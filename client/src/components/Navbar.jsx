const NAV_LINKS = [
  { href: '#projects', label: 'Projects', active: true },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="bg-[#FAFAF7]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-black/5">
      <nav className="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-black tracking-tighter text-[#1A1A1A]">
          ARCHIVE
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map(({ href, label, active }) => (
            <a
              key={label}
              href={href}
              className={`font-[Inter] text-xs tracking-widest uppercase transition-colors ${
                active
                  ? 'text-[#C05A3E] border-b border-[#C05A3E] pb-1'
                  : 'text-neutral-500 hover:text-[#1A1A1A]'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <span className="material-symbols-outlined text-[#1A1A1A]">menu</span>
        </div>
      </nav>
    </header>
  )
}

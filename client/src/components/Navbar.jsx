import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-[#FAFAF7]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-black/5">
      <nav className="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-xl font-black tracking-tighter text-[#1A1A1A] no-underline">
          SLA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={label}
                to={path}
                className={`font-[Inter] text-xs tracking-widest uppercase transition-colors no-underline ${
                  isActive
                    ? 'text-[#C05A3E] border-b border-[#C05A3E] pb-1'
                    : 'text-neutral-500 hover:text-[#1A1A1A]'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <span className="material-symbols-outlined text-[#1A1A1A]">menu</span>
        </div>
      </nav>
    </header>
  )
}

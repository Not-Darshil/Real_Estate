import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header className={`bg-[#FAFAF7]/95 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-black/5 transition-all duration-500 ease-in-out overflow-hidden ${
      isOpen ? 'h-screen md:h-24' : 'h-[73px] md:h-24'
    }`}>
      <nav className="flex justify-between items-center px-8 py-4 w-full max-w-screen-2xl mx-auto h-[73px] md:h-24">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl font-black tracking-tighter text-[#1A1A1A] no-underline z-50"
          onClick={() => setIsOpen(false)}
        >
          SLA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map(({ path, label }) => {
            const isActive = location.pathname === path
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
            )
          })}
        </div>

        {/* Mobile menu icon */}
        <button 
          className="md:hidden text-[#1A1A1A] p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Content - Expands inside the header */}
      <div className={`md:hidden flex flex-col items-center justify-center gap-10 h-[calc(100vh-73px)] transition-all duration-500 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        {NAV_LINKS.map(({ path, label }) => {
          const isActive = location.pathname === path
          return (
            <Link
              key={label}
              to={path}
              className={`font-['Playfair_Display'] text-5xl italic transition-all duration-300 no-underline ${
                isActive ? 'text-[#C05A3E] tracking-widest' : 'text-[#1A1A1A]'
              }`}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </header>
  )
}

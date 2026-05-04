import logo from '../assets/Images/logo/logo.svg'

const FOOTER_COLUMNS = [
  {
    heading: 'Locations',
    links: ['Lucknow', 'Delhi', 'Rohini'],
  },
  {
    heading: 'Social',
    links: ['Instagram', 'LinkedIn', 'Vimeo'],
  },
  {
    heading: 'General',
    links: ['Careers', 'Press', 'Legal'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#FAFAF7] py-20 px-8 border-t border-black/5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center">
            <img src={logo} alt="SLA Logo" className="h-10 w-auto" />
          </div>
          <p className="font-[Inter] text-[10px] uppercase tracking-[0.2em] text-neutral-400 max-w-xs leading-relaxed">
            © 2026 SLEEK LINE ARCHITECTS.
            <br></br>ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          {FOOTER_COLUMNS.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="font-[Inter] text-[10px] uppercase tracking-[0.2em] text-[#C05A3E] mb-6">
                {heading}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-[Inter] text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-[#1A1A1A] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

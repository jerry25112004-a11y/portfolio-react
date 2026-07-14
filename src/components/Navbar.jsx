import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Navbar background change on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active nav link tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let current = 'home'
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id')
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 py-[18px] backdrop-blur-md ${
        scrolled ? 'bg-black/95 shadow-[0_5px_25px_rgba(255,0,0,.2)]' : 'bg-black/70'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-6xl">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-[28px] font-bold text-primary"
        >
          Muhammad Aitzaz
        </a>

        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <ul
          className={`lg:flex lg:items-center lg:gap-0 absolute lg:static left-0 right-0 top-full lg:top-auto bg-black/95 lg:bg-transparent transition-all overflow-hidden ${
            isOpen ? 'max-h-96 py-4' : 'max-h-0 lg:max-h-none'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.href} className="ml-0 lg:ml-[25px] text-center lg:text-left">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`inline-block py-2 px-4 lg:px-0 text-[17px] font-medium transition-all duration-300 relative group ${
                  active === item.href.slice(1) ? 'text-primary' : 'text-white'
                } hover:text-primary`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
                    active === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

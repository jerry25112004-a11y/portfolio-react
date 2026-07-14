const year = new Date().getFullYear()

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#050505] pt-[90px] pb-[30px] mt-20 border-t border-white/[.08]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-[70px] h-[70px] rounded-full bg-primary flex items-center justify-center text-[28px] font-bold text-white shadow-[0_0_20px_rgba(255,0,0,.35)]">
                MA
              </div>
              <div>
                <h3 className="text-white mb-0 text-xl font-semibold">Muhammad Aitzaz</h3>
                <small className="text-primary">ASP.NET Core Developer</small>
              </div>
            </div>
            <p className="text-[#bfbfbf] leading-[1.9]">
              Passionate ASP.NET Core MVC developer dedicated to building responsive, modern and
              user-friendly web applications using C#, SQL Server, Bootstrap and JavaScript.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-bold mb-6">Quick Links</h4>
            <ul className="list-none p-0 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-[#d0d0d0] no-underline transition-all duration-300 hover:text-primary hover:pl-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-bold mb-6">Contact Info</h4>
            <p className="text-[#c8c8c8] mb-3">📧 m.aitzazqamar510@gmail.com</p>
            <p className="text-[#c8c8c8] mb-3">📱 +92 320 5447578</p>
            <p className="text-[#c8c8c8] mb-3">📍 Islamabad, Pakistan</p>
            <span className="inline-block mt-5 py-[10px] px-[18px] bg-primary rounded-full text-sm font-semibold text-white">
              Available for Internship &amp; Freelance
            </span>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="text-center">
          <p className="text-[#999]">© {year} Muhammad Aitzaz. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

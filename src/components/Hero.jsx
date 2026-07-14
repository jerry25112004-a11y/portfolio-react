import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import img1 from '../../public/profile.png'
const cv = "/M_Aitzaz_CV.pdf";
const words = ['ASP.NET Core Developer', 'C# Developer', 'SQL Server Developer', 'Frontend Developer']

export default function Hero({ onDownloadCV }) {
  const [text, setText] = useState('')

  // Typing effect, ported from site.js
  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timeoutId

    const type = () => {
      const currentWord = words[wordIndex]

      if (!deleting) {
        charIndex++
        setText(currentWord.substring(0, charIndex))
        if (charIndex > currentWord.length) {
          deleting = true
          timeoutId = setTimeout(type, 1200)
          return
        }
      } else {
        charIndex--
        setText(currentWord.substring(0, charIndex))
        if (charIndex < 0) {
          deleting = false
          wordIndex = (wordIndex + 1) % words.length
        }
      }

      timeoutId = setTimeout(type, deleting ? 40 : 80)
    }

    timeoutId = setTimeout(type, 80)
    return () => clearTimeout(timeoutId)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 lg:pt-0">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-primary font-bold">👋 Hello, I'm</span>

            <h1 className="text-[34px] sm:text-[52px] lg:text-[70px] font-extrabold leading-tight mt-3 text-primary">
              Muhammad <br />
              <span className="text-primary">Aitzaz</span>
            </h1>

            <h3 className="text-[22px] lg:text-[32px] my-5 text-[#dddddd] min-h-[1.5em]">
              {text}
              <span className="border-r-2 border-primary ml-1 animate-pulse" />
            </h3>

            <p className="text-[#bbbbbb] leading-[2] mb-8">
              Passionate Web Developer specializing in ASP.NET Core MVC, C#, SQL Server, Bootstrap and
              JavaScript. I build modern, responsive, high-performance web applications with clean UI and
              scalable architecture.
            </p>

            <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                onClick={handleClick}
                className="inline-block py-[14px] px-[34px] rounded-full font-semibold bg-primary text-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(255,0,0,.5)] hover:bg-primary-light"
              >
                Hire Me
              </a>

              <a
                href={cv}
                download="Muhammad_Aitzaz_CV.pdf"
                className="inline-block py-[14px] px-[34px] rounded-full font-semibold border-2 border-primary text-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(255,0,0,.5)] hover:bg-primary"
              >
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-[15px] mt-10">
              <a
                href="https://github.com/jerry25112004-a11y"
                target="_blank"
                rel="noreferrer"
                className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#151515] border border-white/10 text-white text-[22px] transition-all duration-400 hover:bg-primary hover:-translate-y-2 hover:rotate-[360deg] hover:shadow-[0_0_20px_rgba(255,0,0,.4)]"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-aitzaz-qamar-67651a364"
                target="_blank"
                rel="noreferrer"
                className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#151515] border border-white/10 text-white text-[22px] transition-all duration-400 hover:bg-primary hover:-translate-y-2 hover:rotate-[360deg] hover:shadow-[0_0_20px_rgba(255,0,0,.4)]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/mr.tazu02"
                target="_blank"
                rel="noreferrer"
                className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#151515] border border-white/10 text-white text-[22px] transition-all duration-400 hover:bg-primary hover:-translate-y-2 hover:rotate-[360deg] hover:shadow-[0_0_20px_rgba(255,0,0,.4)]"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center">
            <img
              src={img1}
              alt="Profile"
              className="profile-image w-[220px] sm:w-[260px] lg:w-[380px] rounded-full border-[6px] border-primary shadow-[0_0_30px_rgba(255,0,0,.4),0_0_70px_rgba(255,0,0,.2)] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

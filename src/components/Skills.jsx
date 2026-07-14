import { useState } from 'react'
import skills from '../data/skills'
import useScrollReveal from '../hooks/useScrollReveal'

function SkillCard({ skill }) {
  const [ref, visible] = useScrollReveal()
  const [glow, setGlow] = useState(null)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setGlow(null)}
      style={
        glow
          ? {
              background: `radial-gradient(circle at ${glow.x}px ${glow.y}px, rgba(255,0,0,.25), #181818)`,
            }
          : undefined
      }
      className={`skill-card group h-full rounded-[20px] border border-white/[.08] bg-white/5 shadow-[0_10px_25px_rgba(0,0,0,.35)] transition-all duration-[450ms] hover:-translate-y-3 hover:shadow-[0_0_20px_rgba(255,0,0,.20),0_0_45px_rgba(255,0,0,.18),0_0_80px_rgba(255,0,0,.08)] hover:border-primary ${
        visible ? 'reveal-show' : 'reveal-hidden'
      }`}
    >
      <div className="text-center py-10 px-6">
        <div className="text-[60px] mb-5 transition-transform duration-400 group-hover:rotate-[10deg] group-hover:scale-[1.15]">
          {skill.icon}
        </div>
        <h4 className="text-primary font-bold mb-4">{skill.title}</h4>
        <p className="text-[#c9c9c9] leading-[1.8] mb-6">{skill.text}</p>

        <div className="h-[10px] bg-[#2b2b2b] rounded-full overflow-hidden">
          <div
            className="progress-bar-fill h-full rounded-full bg-primary flex items-center justify-end pr-2 text-[10px] font-semibold text-white"
            style={{ width: `${skill.level}%` }}
          >
            {skill.level}%
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-[80px] lg:py-[110px]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          {/* <span className="text-primary font-bold">WHAT I DO</span> */}
          <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-bold uppercase mt-2 mb-6 section-title inline-block">
            My Technical Skills
          </h2>
          <p className="text-[#bbbbbb] leading-[2] max-w-2xl mx-auto">
            I enjoy building responsive web applications using Microsoft's technologies and modern frontend
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

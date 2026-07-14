import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-[30px] bottom-[30px] w-[55px] h-[55px] rounded-full border-none bg-primary text-white text-2xl cursor-pointer z-[9999] shadow-[0_0_20px_rgba(255,0,0,.4)] transition-all duration-400 hover:-translate-y-2 ${
        show ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      ↑
    </button>
  )
}

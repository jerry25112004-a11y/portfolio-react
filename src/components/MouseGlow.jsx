import { useEffect, useRef } from 'react'

export default function MouseGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`
        ref.current.style.top = `${e.clientY}px`
      }
    }
    document.addEventListener('mousemove', handleMove)
    return () => document.removeEventListener('mousemove', handleMove)
  }, [])

  return <div ref={ref} className="mouse-glow" />
}

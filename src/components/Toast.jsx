import { useEffect } from 'react'

const typeStyles = {
  success: 'bg-green-600',
  error: 'bg-red-600',
}

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [toast, onClose])

  if (!toast) return null

  return (
    <div className="fixed bottom-5 right-5 z-[9999] max-w-sm">
      <div
        className={`flex items-center justify-between gap-4 text-white rounded-lg shadow-lg px-4 py-3 ${
          typeStyles[toast.type] || 'bg-neutral-800'
        }`}
      >
        <span className="text-sm">{toast.message}</span>
        <button onClick={onClose} aria-label="Close" className="text-white/80 hover:text-white text-lg leading-none">
          &times;
        </button>
      </div>
    </div>
  )
}

import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function VideoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-negro/80 backdrop-blur-sm p-4 animate-fade-up"
      style={{ animationDuration: '0.3s' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar video"
          className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>
        <iframe
          src="https://www.youtube.com/embed/RkLnJzON3l8?autoplay=1&rel=0"
          title="Video demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full aspect-video"
        />
      </div>
    </div>
  )
}

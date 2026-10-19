import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoWhite from '../assets/logo-normvix-white.png'

const links = [
  { href: '#problematica', label: 'Problemática' },
  { href: '#modulos', label: 'Módulos' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#planes', label: 'Planes' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-negro/95 backdrop-blur-md border-b border-white/10 transition-shadow duration-300 ${
        progress > 0 ? 'shadow-lg shadow-black/20' : ''
      }`}
    >
      <div
        className="absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-turquesa to-ambar origin-left"
        style={{ transform: `scaleX(${progress})`, width: '100%' }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-18 py-3 flex items-center justify-between">
        <a href="#top">
          <img src={logoWhite} alt="Normvix" className="h-8 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white/75 hover:text-turquesa transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-turquesa after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="btn-shine hidden lg:inline-flex items-center rounded-full bg-turquesa text-negro text-sm font-bold px-5 py-2.5 transition-all hover:bg-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-turquesa/30"
        >
          Solicitar demo
        </a>

        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-up lg:hidden border-t border-white/10 bg-negro px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="inline-flex justify-center rounded-full bg-turquesa text-negro text-sm font-bold px-5 py-2.5"
            onClick={() => setOpen(false)}
          >
            Solicitar demo
          </a>
        </div>
      )}
    </header>
  )
}

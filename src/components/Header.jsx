import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { href: '#problematica', label: 'Problemática' },
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#modulos', label: 'Módulos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-marfil/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 h-18 py-3 flex items-center justify-between">
        <a href="#top">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-grafito/80 hover:text-turquesa transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-full bg-azul text-white text-sm font-semibold px-5 py-2.5 hover:bg-turquesa transition-colors"
        >
          Solicitar demo
        </a>

        <button
          type="button"
          className="md:hidden text-azul"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-marfil px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-grafito/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="inline-flex justify-center rounded-full bg-azul text-white text-sm font-semibold px-5 py-2.5"
            onClick={() => setOpen(false)}
          >
            Solicitar demo
          </a>
        </div>
      )}
    </header>
  )
}

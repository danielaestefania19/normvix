import { ArrowUp, ArrowUpRight, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import logoWhite from '../assets/logo-normvix-white.png'
import iconContact from '../assets/icon-contact.png'
import iconLocation from '../assets/icon-location.png'
import iconNetwork from '../assets/icon-network.png'
import iconFaq from '../assets/icon-faq.png'

const links = [
  { href: '#problematica', label: 'Problemática' },
  { href: '#modulos', label: 'Módulos' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#contacto', label: 'Contacto' },
]

const platform = ['Marco legal', 'Aplicabilidad', 'Permisos críticos', 'Riesgos', 'Auditorías', 'Tableros y KPI']

const contactInfo = [
  { icon: iconContact, title: 'Llámanos', text: '+58 412-9564458', href: 'tel:+584129564458' },
  { icon: iconLocation, title: 'Ubicación', text: 'Caracas, Venezuela' },
  {
    icon: iconNetwork,
    title: 'Síguenos',
    text: '@normvix__vzla',
    href: 'https://www.instagram.com/Normvix__vzla/',
  },
  { icon: iconFaq, title: '¿Tienes dudas?', text: 'Preguntas frecuentes', href: '#faq' },
]

function FooterLink({ href, children }) {
  return (
    <a href={href} className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white">
      <ArrowRight
        size={14}
        className="-ml-5 opacity-0 text-turquesa transition-all duration-300 group-hover:ml-0 group-hover:opacity-100"
      />
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-negro text-white/60">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-turquesa to-transparent" aria-hidden="true" />
      <div className="absolute -z-10 -top-40 left-1/4 w-lg h-128 rounded-full bg-turquesa/10 blur-3xl animate-blob" aria-hidden="true" />
      <div
        className="absolute -z-10 bottom-0 -right-32 w-md h-112 rounded-full bg-ambar/5 blur-3xl animate-blob"
        style={{ animationDelay: '-8s' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 pt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contactInfo.map(({ icon, title, text, href }, i) => {
          const Tag = href ? 'a' : 'div'
          const isExternal = href?.startsWith('http')
          return (
            <Reveal key={title} delay={i * 80}>
              <Tag
                {...(href ? { href } : {})}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`group relative flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-4 backdrop-blur-sm transition-all duration-300 ${
                  href ? 'hover:-translate-y-1 hover:border-turquesa/40 hover:bg-white/7' : ''
                }`}
              >
                <img
                  src={icon}
                  alt=""
                  className="w-12 h-12 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="text-sm truncate">{text}</p>
                </div>
                {href && (
                  <ArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-turquesa opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </Tag>
            </Reveal>
          )
        })}
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <img src={logoWhite} alt="Normvix" className="h-8 w-auto" />
          <p className="mt-6 font-heading font-bold text-base text-white">
            Tus obligaciones, <span className="text-gradient">bajo control.</span>
          </p>
          <p className="mt-3 text-sm max-w-sm leading-relaxed">
            Software de cumplimiento legal para empresas que operan en Venezuela: del marco
            legal a la evidencia, en un solo lugar.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-turquesa text-negro text-sm font-bold px-5 py-2.5 shadow-lg shadow-turquesa/20 transition-all hover:bg-white hover:-translate-y-0.5"
            >
              Solicitar demo
              <ArrowRight size={14} />
            </a>
            <a
              href="mailto:contact@normvix.com"
              className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm transition-colors hover:border-turquesa hover:text-white"
            >
              contact@normvix.com
            </a>
          </div>
        </div>

        <nav aria-label="Navegación del sitio">
          <p className="eyebrow text-white">Navegación</p>
          <ul className="mt-5 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-white">Plataforma</p>
          <ul className="mt-5 space-y-3">
            {platform.map((item) => (
              <li key={item}>
                <FooterLink href="#modulos">{item}</FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        className="pointer-events-none select-none text-center font-heading font-bold leading-none tracking-tighter text-[18vw] lg:text-[15rem] mb-[-0.2em] bg-linear-to-b from-white/7 to-transparent bg-clip-text text-transparent"
        aria-hidden="true"
      >
        NORMVIX
      </p>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Normvix. Todos los derechos reservados.</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition-all hover:border-turquesa hover:text-white"
          >
            Volver arriba
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

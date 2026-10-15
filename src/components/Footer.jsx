import logoHorizontal from '../assets/logo-horizontal.png'
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

const contactInfo = [
  { icon: iconContact, title: 'Llámanos', text: '+58 412-9564458' },
  { icon: iconLocation, title: 'Ubicación', text: 'Caracas, Venezuela' },
  {
    icon: iconNetwork,
    title: 'Síguenos',
    text: 'Conecta en redes',
    href: 'https://www.instagram.com/Normvix__vzla/',
  },
  { icon: iconFaq, title: '¿Tienes dudas?', text: 'Preguntas frecuentes', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="bg-azul text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactInfo.map(({ icon, title, text, href }) => {
          const Tag = href ? 'a' : 'div'
          const isExternal = href?.startsWith('http')
          return (
            <Tag
              key={title}
              {...(href ? { href } : {})}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`flex items-center gap-4${href ? ' hover:text-white transition-colors' : ''}`}
            >
              <img src={icon} alt="" className="w-12 h-12 rounded-full shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-sm">{text}</p>
              </div>
            </Tag>
          )
        })}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <img src={logoHorizontal} alt="Normvix" className="h-18 w-auto" />
            <p className="mt-3 text-sm max-w-xs">Tus obligaciones, bajo control.</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-sm">contact@normvix.com</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs">
          © {new Date().getFullYear()} Normvix. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

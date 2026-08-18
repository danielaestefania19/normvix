import Logo from './Logo'
import iconContact from '../assets/icon-contact.png'
import iconLocation from '../assets/icon-location.png'
import iconNetwork from '../assets/icon-network.png'
import iconFaq from '../assets/icon-faq.png'

const links = [
  { href: '#problematica', label: 'Problemática' },
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#modulos', label: 'Módulos' },
  { href: '#contacto', label: 'Contacto' },
]

const contactInfo = [
  { icon: iconContact, title: 'Llámanos', text: '+58 412 123 4567' },
  { icon: iconLocation, title: 'Ubicación', text: 'Caracas, Venezuela' },
  { icon: iconNetwork, title: 'Síguenos', text: 'Conecta en redes' },
  { icon: iconFaq, title: '¿Tienes dudas?', text: 'Preguntas frecuentes' },
]

export default function Footer() {
  return (
    <footer className="bg-azul text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactInfo.map(({ icon, title, text }) => (
          <div key={title} className="flex items-center gap-4">
            <img src={icon} alt="" className="w-12 h-12 rounded-full shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-sm">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Logo dark />
            <p className="mt-3 text-sm max-w-xs">Tus obligaciones, bajo control.</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-sm">hola@nexo.com.ve</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs">
          © {new Date().getFullYear()} Nexo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

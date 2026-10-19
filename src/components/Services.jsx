import { Building2, Store, Check, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const plans = [
  {
    icon: Building2,
    name: 'B2B Big Corp',
    tagline: 'Para grandes empresas y grupos corporativos',
    text: 'Suscripción para grandes empresas, con mayor capacidad de usuarios, múltiples plantas y gestión centralizada del cumplimiento legal.',
    features: [
      'Mayor capacidad de usuarios',
      'Múltiples plantas, sedes y razones sociales',
      'Gestión centralizada desde un solo tablero',
      'Comparación del cumplimiento entre sedes',
    ],
    featured: true,
  },
  {
    icon: Store,
    name: 'B2B PYMES',
    tagline: 'Para pequeñas y medianas empresas',
    text: 'Suscripción adaptada a pequeñas y medianas empresas, con límites de usuarios y establecimientos, manteniendo las funcionalidades esenciales de cumplimiento legal.',
    features: [
      'Funcionalidades esenciales de cumplimiento',
      'Usuarios y establecimientos a tu medida',
      'Alertas, permisos críticos y evidencias',
      'Crece al plan corporativo cuando lo necesites',
    ],
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="planes" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Planes</span>
          <h2 className="mt-4 font-heading font-bold text-2xl md:text-[2.1rem] leading-tight text-negro">
            Una suscripción para cada tamaño de empresa
          </h2>
          <p className="mt-4 text-grafito/65 leading-relaxed">
            Desde un grupo con varias plantas hasta un comercio con un solo local: elige el plan
            que se ajusta a tu operación y cámbialo cuando tu empresa crezca.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {plans.map(({ icon: Icon, name, tagline, text, features, featured }, i) => (
            <Reveal key={name} delay={i * 150} variant={i === 0 ? 'left' : 'right'}>
              <div
                className={`group relative isolate h-full overflow-hidden rounded-3xl p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                  featured
                    ? 'bg-negro text-white shadow-2xl shadow-black/20'
                    : 'bg-white border-2 border-negro/10 hover:border-turquesa hover:shadow-xl hover:shadow-turquesa/15'
                }`}
              >
                {featured && (
                  <>
                    <span className="absolute -z-10 hidden lg:block -bottom-6 right-24 h-44 w-14 bg-turquesa skew-x-34 transition-transform duration-700 group-hover:translate-x-4" aria-hidden="true" />
                    <span className="absolute -z-10 hidden lg:block -bottom-6 right-12 h-44 w-5 bg-ambar skew-x-34 transition-transform duration-700 group-hover:translate-x-4" aria-hidden="true" />
                  </>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${
                      featured ? 'bg-turquesa text-negro' : 'bg-negro text-turquesa'
                    }`}
                  >
                    <Icon size={26} />
                  </div>
                  {featured && (
                    <span className="rounded-full bg-ambar text-negro text-[11px] font-bold uppercase tracking-wider px-3 py-1">
                      Multi-sede
                    </span>
                  )}
                </div>

                <h3 className={`mt-6 font-heading font-bold text-xl ${featured ? 'text-turquesa' : 'text-negro'}`}>
                  {name}
                </h3>
                <p className={`mt-1 text-sm font-semibold ${featured ? 'text-white/80' : 'text-grafito/80'}`}>
                  {tagline}
                </p>
                <p className={`mt-4 text-sm leading-relaxed ${featured ? 'text-white/60' : 'text-grafito/65'}`}>
                  {text}
                </p>

                <ul className="mt-6 mb-8 space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${
                          featured ? 'bg-turquesa/20 text-turquesa' : 'bg-turquesa/20 text-turquesa-ink'
                        }`}
                      >
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className={featured ? 'text-white/85' : 'text-grafito/85'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`btn-shine mt-auto self-start inline-flex items-center gap-2 rounded-full text-sm font-bold px-6 py-3 transition-all hover:-translate-y-0.5 ${
                    featured
                      ? 'bg-turquesa text-negro hover:bg-white'
                      : 'bg-negro text-white hover:bg-turquesa hover:text-negro'
                  }`}
                >
                  Solicitar cotización
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

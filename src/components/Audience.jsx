import { Crown, UserCog, MapPin } from 'lucide-react'
import Reveal from './Reveal'

const segments = [
  {
    icon: Crown,
    title: 'Dirección y corporativo',
    text: 'Visibilidad para decidir: KPI de cumplimiento, riesgos identificados y comparación entre sedes o razones sociales, sin esperar al reporte de fin de mes.',
  },
  {
    icon: UserCog,
    title: 'Responsable de cumplimiento',
    text: 'Control integrado de requisitos, permisos críticos, auditorías, riesgos y planes de acción. Responde a cualquier fiscalización sin reconstruir el historial a mano.',
  },
  {
    icon: MapPin,
    title: 'Gerentes de sede',
    text: 'Claridad sobre qué hacer y para cuándo. Cada gerente ve sus tareas, plazos y evidencias, sin depender de correos ni hojas de cálculo.',
  },
]

export default function Audience() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-turquesa text-xs font-semibold tracking-wide uppercase">
            Beneficios
          </span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-azul">
            Cada rol ve lo que necesita
          </h2>
          <p className="mt-4 text-grafito/65 leading-relaxed">
            Desde un grupo corporativo con varias plantas hasta un comercio con un solo
            local, Normvix le da a cada persona la vista que le corresponde.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-black/5 p-6 hover:border-turquesa/40 hover:shadow-lg hover:shadow-azul/5 transition-all">
                <div className="w-11 h-11 rounded-xl bg-azul/5 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Icon size={22} className="text-turquesa" />
                </div>
                <h3 className="mt-5 font-heading font-semibold text-azul">{title}</h3>
                <p className="mt-2 text-sm text-grafito/65 leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

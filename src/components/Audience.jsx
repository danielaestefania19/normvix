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
          <span className="eyebrow">
            Beneficios
          </span>
          <h2 className="mt-4 font-heading font-bold text-2xl md:text-[2.1rem] leading-tight text-negro">
            Cada rol ve lo que necesita
          </h2>
          <p className="mt-4 text-grafito/65 leading-relaxed">
            Desde un grupo corporativo con varias plantas hasta un comercio con un solo
            local, Normvix le da a cada persona la vista que le corresponde.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="group relative isolate h-full overflow-hidden rounded-3xl border border-black/5 bg-linear-to-b from-white to-marfil p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-turquesa/40 hover:shadow-xl hover:shadow-azul/10">
                <span
                  className="absolute -z-10 -bottom-16 -right-16 w-40 h-40 rounded-full bg-ambar/15 blur-2xl transition-transform duration-700 group-hover:scale-150"
                  aria-hidden="true"
                />
                <div className="relative w-14 h-14 rounded-2xl bg-negro flex items-center justify-center shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={26} className="text-turquesa" />
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

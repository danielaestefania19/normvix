import { Building2, Scale, Calculator, Network } from 'lucide-react'
import Reveal from './Reveal'

const segments = [
  {
    icon: Building2,
    title: 'Empresas en crecimiento',
    text: 'Cada nueva sucursal, permiso o línea de negocio suma obligaciones. Escala tus operaciones sin perder el control de lo que la ley exige en cada etapa.',
  },
  {
    icon: Scale,
    title: 'Equipos legales y de cumplimiento',
    text: 'Centraliza normativa, plazos y evidencias en un solo repositorio auditable. Responde a cualquier requerimiento sin tener que reconstruir el historial a mano.',
  },
  {
    icon: Calculator,
    title: 'Finanzas y contabilidad',
    text: 'Anticipa vencimientos fiscales y evita recargos por olvido. Ten a la vista qué está pagado, qué está pendiente y qué requiere atención esta semana.',
  },
  {
    icon: Network,
    title: 'Grupos y multi-sede',
    text: 'Gestiona el cumplimiento de varias razones sociales desde un solo lugar. Compara el estado de cada sede y detecta a tiempo dónde se está quedando atrás.',
  },
]

export default function Audience() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-azul">
            Diseñado para equipos que no pueden permitirse un olvido
          </h2>
          <p className="mt-4 text-grafito/65 leading-relaxed">
            Sin importar el tamaño de tu empresa, cumplir a tiempo depende de tener la
            información correcta al alcance de la mano. Nexo se adapta al perfil de cada
            equipo para que nadie dependa de la memoria de una sola persona.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

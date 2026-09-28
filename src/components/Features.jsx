import Reveal from './Reveal'

const pillars = [
  {
    n: '01',
    title: 'Control total',
    text: 'Visibilidad y seguimiento de cada obligación legal, fiscal y operativa, en un solo lugar. Sabes en todo momento qué está al día, qué está por vencer y qué requiere acción inmediata.',
  },
  {
    n: '02',
    title: 'Claridad ejecutiva',
    text: 'Reportes y tableros pensados para que la dirección tome decisiones sin fricción. Sin exportar datos ni armar presentaciones manuales antes de cada reunión.',
  },
  {
    n: '03',
    title: 'Prevención activa',
    text: 'Alertas automáticas antes de cada vencimiento, no después. El equipo responsable se entera con tiempo suficiente para actuar, no para justificar un atraso.',
  },
  {
    n: '04',
    title: 'Confianza y trazabilidad',
    text: 'Historial auditable de cada acción, evidencia y responsable. Frente a cualquier fiscalización o auditoría, la evidencia está lista y disponible al instante.',
  },
]

export default function Features() {
  return (
    <section id="plataforma" className="py-20 md:py-28 bg-azul text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-turquesa text-xs font-semibold tracking-wide uppercase">
            La plataforma
          </span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl">
            Todo lo que necesitas para operar con tranquilidad
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Normvix se construye sobre cuatro pilares que convierten el cumplimiento en un
            proceso gestionado por resultados, no en una carrera contra el calendario.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {pillars.map(({ n, title, text }, i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="border-t border-white/10 pt-6">
                <span className="font-heading font-semibold text-turquesa text-sm">{n}</span>
                <h3 className="mt-3 font-heading font-semibold text-xl">{title}</h3>
                <p className="mt-2 text-white/60 leading-relaxed max-w-md">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

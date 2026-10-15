import Reveal from './Reveal'

const pillars = [
  {
    n: '01',
    title: 'Marco legal venezolano propio',
    text: 'Normativa nacional, estatal y municipal levantada y mantenida por nuestro equipo. No dependes de que alguien en tu empresa esté al tanto de cada gaceta.',
  },
  {
    n: '02',
    title: 'Priorización por riesgo',
    text: 'No todas las obligaciones pesan igual. Normvix ordena las brechas por su consecuencia real, desde una multa hasta un cierre preventivo.',
  },
  {
    n: '03',
    title: 'Aplicabilidad a tu realidad',
    text: 'Los requisitos se definen según la actividad, la ubicación y el tamaño de cada sede, no con una lista genérica que nadie termina de revisar.',
  },
  {
    n: '04',
    title: 'Gestión integrada y trazable',
    text: 'Requisitos, evidencias, responsables, acciones e indicadores conectados en un solo historial auditable que no se pierde cuando cambia el equipo.',
  },
]

export default function Features() {
  return (
    <section id="plataforma" className="py-20 md:py-28 bg-azul text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-turquesa text-xs font-semibold tracking-wide uppercase">
            Por qué Normvix
          </span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl">
            Más que un calendario de vencimientos
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Normvix te lleva de saber qué te exige la ley a poder demostrar, con evidencia,
            que lo estás cumpliendo.
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

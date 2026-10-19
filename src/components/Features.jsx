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
    <section id="plataforma" className="relative overflow-hidden py-20 md:py-28 bg-azul text-white">
      <div className="absolute -top-20 -bottom-20 right-[12%] w-56 bg-turquesa/10 skew-x-34" aria-hidden="true" />
      <div className="absolute -top-20 -bottom-20 right-[2%] w-16 bg-turquesa/20 skew-x-34" aria-hidden="true" />
      <div className="absolute -top-40 right-0 w-lg h-128 rounded-full bg-turquesa/10 blur-3xl animate-blob" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-turquesa">
            Por qué Normvix
          </span>
          <h2 className="mt-4 font-heading font-bold text-2xl md:text-[2.1rem] leading-tight">
            Más que un calendario de vencimientos
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Normvix te lleva de saber qué te exige la ley a poder demostrar, con evidencia,
            que lo estás cumpliendo.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {pillars.map(({ n, title, text }, i) => (
            <Reveal key={n} delay={i * 120} variant={i % 2 === 0 ? 'left' : 'right'}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-white/7 hover:border-turquesa/40 hover:-translate-y-1">
                <span className="font-heading font-bold text-5xl text-gradient opacity-80 transition-opacity group-hover:opacity-100">
                  {n}
                </span>
                <h3 className="mt-4 font-heading font-semibold text-xl">{title}</h3>
                <p className="mt-2 text-white/60 leading-relaxed max-w-md">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import Reveal from './Reveal'

const stats = [
  { value: '92%', label: 'Cumplimiento promedio de los equipos que usan Nexo' },
  { value: '-70%', label: 'Tiempo dedicado a seguimiento manual de obligaciones' },
  { value: '0', label: 'Multas por vencimientos olvidados' },
  { value: '24/7', label: 'Visibilidad en tiempo real del estado de cumplimiento' },
]

export default function Results() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-turquesa text-xs font-semibold tracking-wide uppercase">
            Resultados
          </span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-azul">
            El impacto se mide en tranquilidad y en números
          </h2>
          <p className="mt-4 text-grafito/65 leading-relaxed">
            Estos son los resultados que reportan los equipos que dejaron de gestionar sus
            obligaciones a mano y adoptaron un sistema centralizado.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          {stats.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 100}>
              <p className="font-heading font-semibold text-4xl md:text-5xl text-azul">{value}</p>
              <p className="mt-3 text-sm text-grafito/60 leading-relaxed">{label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

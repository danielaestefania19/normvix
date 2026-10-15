import Reveal from './Reveal'

const steps = [
  {
    n: '01',
    title: 'Define qué aplica',
    text: 'Partimos del marco legal y del perfil de cada sede para determinar qué requisitos le exigen el SENIAT, la alcaldía, los bomberos y los demás entes reguladores.',
  },
  {
    n: '02',
    title: 'Controla tus permisos críticos',
    text: 'Cada licencia, permiso y solvencia queda registrada con su vigencia y su responsable. Las alertas avisan con tiempo, no cuando ya venció.',
  },
  {
    n: '03',
    title: 'Prioriza por riesgo',
    text: 'Las brechas se ordenan según su consecuencia, para que tus recursos vayan primero a lo que puede paralizar o cerrar la operación.',
  },
  {
    n: '04',
    title: 'Del hallazgo a la acción',
    text: 'Cada hallazgo se convierte en un plan de acción con responsable y fecha. La evidencia, los reportes y los KPI se actualizan solos.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-turquesa text-xs font-semibold tracking-wide uppercase">
            Cómo funciona
          </span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-azul">
            Normvix en acción, en cuatro pasos
          </h2>
          <p className="mt-4 text-grafito/65 leading-relaxed">
            Un mismo flujo, desde identificar lo que exige la ley hasta demostrar que lo
            cumples frente a cualquier inspección.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ n, title, text }, i) => (
            <Reveal key={n} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white border border-black/5 p-6">
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-turquesa/10 font-heading font-semibold text-sm text-turquesa">
                  {n}
                </span>
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

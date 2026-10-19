import Reveal from './Reveal'
import useInView from '../hooks/useInView'

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
  const [ref, inView] = useInView()

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

        <div ref={ref} className="relative mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="absolute hidden lg:block left-[12.5%] right-[12.5%] top-11 h-0.5 bg-azul/10" aria-hidden="true">
            <div
              className={`h-full bg-linear-to-r from-turquesa to-ambar origin-left transition-transform duration-1600 ease-out ${
                inView ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </div>

          {steps.map(({ n, title, text }, i) => (
            <Reveal key={n} delay={i * 250}>
              <div className="group relative h-full rounded-2xl bg-white border border-black/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-turquesa/10 hover:border-turquesa/40 lg:text-center lg:bg-transparent lg:border-transparent lg:hover:bg-white lg:hover:border-turquesa/40">
                <span className="relative inline-flex w-10 h-10 items-center justify-center rounded-full bg-turquesa font-heading font-semibold text-sm text-white shadow-lg shadow-turquesa/30 ring-8 ring-marfil transition-transform duration-300 group-hover:scale-110">
                  <span className="absolute inset-0 rounded-full bg-turquesa animate-ping-soft" style={{ animationDelay: `${i * 500}ms` }} aria-hidden="true" />
                  <span className="relative">{n}</span>
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

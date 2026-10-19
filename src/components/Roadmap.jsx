import { Scale, Sparkles, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'
import useInView from '../hooks/useInView'

const innovations = [
  {
    n: '01',
    icon: Scale,
    title: 'Marketplace jurídico',
    text: 'Interconexión automática con abogados y gestores regionales calificados, para resolver cada trámite con un especialista sin salir de Normvix.',
  },
  {
    n: '02',
    icon: Sparkles,
    title: 'Implementación de IA',
    text: 'Agentes inteligentes que interpretan normativas, resuelven consultas legales y brindan asistencia contextualizada para facilitar el cumplimiento.',
    highlight: true,
  },
  {
    n: '03',
    icon: ShieldCheck,
    title: 'Blockchain',
    text: 'Integridad y trazabilidad de las evidencias de cumplimiento: verifica su autenticidad y detecta cualquier posible alteración.',
  },
]

export default function Roadmap() {
  const [ref, inView] = useInView()

  return (
    <section id="innovacion" className="relative isolate overflow-hidden py-20 md:py-28 bg-negro text-white">
      <div className="absolute -z-10 -top-20 -bottom-20 left-[6%] w-40 bg-turquesa/10 skew-x-34" aria-hidden="true" />
      <div className="absolute -z-10 -top-20 -bottom-20 left-[24%] w-8 bg-ambar/10 skew-x-34" aria-hidden="true" />
      <div className="absolute -z-10 inset-0 bg-dots opacity-20 invert" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-turquesa">Próximas innovaciones</span>
          <h2 className="mt-4 font-heading font-bold text-2xl md:text-[2.1rem] leading-tight">
            El futuro del cumplimiento normativo en Venezuela
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Normvix sigue creciendo. Estas son las capacidades que estamos incorporando a la
            plataforma.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-14 grid lg:grid-cols-3 gap-6">
          <div className="absolute hidden lg:block left-0 right-0 top-0 h-1 bg-white/10" aria-hidden="true">
            <div
              className={`h-full bg-linear-to-r from-turquesa via-turquesa to-ambar origin-left transition-transform duration-1600 ease-out ${
                inView ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </div>

          {innovations.map(({ n, icon: Icon, title, text, highlight }, i) => (
            <Reveal key={n} delay={i * 200} className="lg:pt-8">
              <div
                className={`group relative isolate h-full overflow-hidden rounded-3xl p-8 pb-24 transition-all duration-300 hover:-translate-y-1.5 ${
                  highlight
                    ? 'bg-turquesa text-negro shadow-2xl shadow-turquesa/20'
                    : 'border border-white/10 bg-white/5 backdrop-blur-sm hover:border-turquesa/50 hover:bg-white/8'
                }`}
              >
                <span
                  className={`absolute -z-10 -right-4 -bottom-6 font-heading font-bold text-[6rem] leading-none select-none transition-transform duration-500 group-hover:-translate-y-2 ${
                    highlight ? 'text-negro/10' : 'text-white/5'
                  }`}
                  aria-hidden="true"
                >
                  {n}
                </span>

                <div className="flex items-center justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      highlight ? 'bg-negro text-turquesa' : 'bg-turquesa text-negro'
                    }`}
                  >
                    <Icon size={26} />
                  </div>
                  <span
                    className={`rounded-full text-[11px] font-bold uppercase tracking-wider px-3 py-1 ${
                      highlight ? 'bg-negro text-ambar' : 'bg-ambar text-negro'
                    }`}
                  >
                    Próximamente
                  </span>
                </div>

                <h3 className="mt-6 font-heading font-bold text-lg">{title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${highlight ? 'text-negro/75' : 'text-white/65'}`}>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { CheckCircle2, Clock, AlertTriangle, PlayCircle } from 'lucide-react'
import VideoModal from './VideoModal'

export default function Hero() {
  const [ringFilled, setRingFilled] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setRingFilled(true), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="animate-fade-up inline-flex items-center rounded-full bg-turquesa/10 text-turquesa text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
            Gestión de cumplimiento para empresas venezolanas
          </span>

          <h1
            className="animate-fade-up mt-6 font-heading font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-azul"
            style={{ animationDelay: '100ms' }}
          >
            Tus obligaciones,
            <br />
            bajo control.
          </h1>

          <p
            className="animate-fade-up mt-6 text-lg text-grafito/70 max-w-lg"
            style={{ animationDelay: '200ms' }}
          >
            Nexo centraliza, organiza y te alerta sobre cada obligación legal, fiscal y
            operativa de tu empresa, para que ningún plazo se te escape. Reemplaza las hojas
            de cálculo y los recordatorios sueltos por un solo lugar donde tu equipo puede ver,
            asignar y demostrar el cumplimiento de principio a fin.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: '300ms' }}
          >
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full bg-azul text-white text-sm font-semibold px-7 py-3.5 transition-all hover:bg-turquesa hover:scale-[1.03]"
            >
              Solicitar demo gratuita
            </a>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-azul/20 text-azul text-sm font-semibold px-7 py-3.5 transition-all hover:border-turquesa hover:text-turquesa hover:scale-[1.03]"
            >
              <PlayCircle size={18} />
              Ver cómo funciona
            </button>
          </div>
        </div>

        <div className="animate-fade-up relative" style={{ animationDelay: '350ms' }}>
          <div className="absolute -inset-6 bg-turquesa/10 rounded-4xl blur-2xl" aria-hidden="true" />
          <div className="relative rounded-3xl bg-white shadow-xl shadow-azul/10 border border-black/5 p-6 md:p-8">
            <div className="flex items-center justify-between">
              <p className="font-heading font-semibold text-azul">Resumen de Cumplimiento</p>
              <span className="text-xs text-grafito/50">Actualizado hoy, 09:45 a.m.</span>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <div className="relative w-28 h-28 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#F7F8FA" strokeWidth="12" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#18A6A0"
                    strokeWidth="12"
                    strokeLinecap="round"
                    className="transition-[stroke-dasharray] duration-1000 ease-out"
                    strokeDasharray={`${2 * Math.PI * 42 * (ringFilled ? 0.92 : 0)} ${2 * Math.PI * 42}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-heading font-semibold text-2xl text-azul">
                  92%
                </div>
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-grafito/70">
                    <CheckCircle2 size={16} className="text-turquesa" /> Obligaciones al día
                  </span>
                  <span className="font-semibold text-azul">24</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-grafito/70">
                    <Clock size={16} className="text-ambar" /> Por vencer
                  </span>
                  <span className="font-semibold text-azul">3</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-grafito/70">
                    <AlertTriangle size={16} className="text-red-400" /> Vencidas
                  </span>
                  <span className="font-semibold text-azul">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  )
}

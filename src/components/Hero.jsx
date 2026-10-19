import { useState } from 'react'
import { PlayCircle, ArrowRight, CheckCircle2, Clock } from 'lucide-react'
import VideoModal from './VideoModal'
import heroImage from '../assets/Hero.png'

const authorities = [
  'SENIAT',
  'Alcaldías',
  'Cuerpo de Bomberos',
  'Ministerios',
  'Institutos reguladores',
  'Licencias',
  'Permisos',
  'Solvencias',
]

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="top" className="relative overflow-hidden pt-16 md:pt-24">
      <div className="absolute inset-0 bg-dots mask-[radial-gradient(ellipse_at_top_left,black_20%,transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 hidden lg:block w-1/2 overflow-hidden" aria-hidden="true">
        <div className="hero-stripe absolute -top-20 -bottom-20 left-[18%] w-40 bg-turquesa skew-x-34" />
        <div className="hero-stripe absolute -top-20 -bottom-20 left-[48%] w-24 bg-turquesa skew-x-34" style={{ animationDelay: '150ms' }} />
        <div className="hero-stripe absolute -top-20 -bottom-20 left-[72%] w-10 bg-ambar skew-x-34" style={{ animationDelay: '300ms' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white border border-black/10 shadow-sm text-turquesa-ink text-xs font-bold tracking-wide uppercase px-4 py-1.5">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-turquesa animate-ping-soft" />
              <span className="relative w-2 h-2 rounded-full bg-turquesa" />
            </span>
            Cumplimiento legal en Venezuela
          </span>

          <h1
            className="animate-fade-up mt-6 font-heading font-bold text-[2rem] sm:text-5xl lg:text-[2.75rem] xl:text-5xl leading-[1.12] text-negro"
            style={{ animationDelay: '100ms' }}
          >
            Tus obligaciones,
            <br />
            <span className="brand-mark">bajo control.</span>
          </h1>

          <p
            className="animate-fade-up mt-6 text-lg text-grafito/70 max-w-lg"
            style={{ animationDelay: '200ms' }}
          >
            Normvix centraliza, organiza y te alerta sobre cada obligación legal, fiscal y
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
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-negro text-white text-sm font-bold px-7 py-3.5 shadow-lg shadow-black/20 transition-all hover:bg-turquesa hover:text-negro hover:shadow-turquesa/40 hover:-translate-y-0.5"
            >
              Solicitar demo gratuita
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-negro/20 bg-white/80 backdrop-blur text-negro text-sm font-bold px-7 py-3.5 transition-all hover:border-negro hover:bg-negro hover:text-white hover:-translate-y-0.5"
            >
              <PlayCircle size={18} className="transition-transform group-hover:scale-110" />
              Ver cómo funciona
            </button>
          </div>
        </div>

        <div className="animate-fade-up relative" style={{ animationDelay: '350ms' }}>
          <div className="absolute inset-10 bg-negro/25 rounded-4xl blur-3xl" aria-hidden="true" />
          <img
            src={heroImage}
            alt="Resumen ejecutivo de riesgo legal en el tablero de Normvix"
            className="relative w-full h-auto animate-float-slow"
          />

          <div
            className="absolute -left-4 top-8 sm:-left-8 animate-float hidden sm:flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur border border-black/5 shadow-xl shadow-azul/10 px-4 py-3"
            aria-hidden="true"
          >
            <span className="w-9 h-9 rounded-xl bg-turquesa flex items-center justify-center">
              <CheckCircle2 size={18} className="text-negro" />
            </span>
            <span>
              <span className="block text-xs font-bold text-negro">Solvencia municipal</span>
              <span className="block text-[11px] text-grafito/60">Renovada y al día</span>
            </span>
          </div>

          <div
            className="absolute -right-2 bottom-10 sm:-right-6 animate-float hidden sm:flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur border border-black/5 shadow-xl shadow-azul/10 px-4 py-3"
            style={{ animationDelay: '-3s' }}
            aria-hidden="true"
          >
            <span className="w-9 h-9 rounded-xl bg-ambar flex items-center justify-center">
              <Clock size={18} className="text-negro" />
            </span>
            <span>
              <span className="block text-xs font-bold text-negro">Permiso de bomberos</span>
              <span className="block text-[11px] text-grafito/60">Vence en 15 días</span>
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-20 md:mt-28 bg-negro py-5 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-negro to-transparent z-10" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-negro to-transparent z-10" aria-hidden="true" />
        <div className="flex w-max animate-marquee">
          {[...authorities, ...authorities].map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= authorities.length}
              className="flex items-center gap-10 pr-10 font-heading font-semibold text-sm uppercase tracking-widest text-white/80"
            >
              {item}
              <span className="w-2 h-2 bg-turquesa skew-x-[-34deg]" />
            </span>
          ))}
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  )
}

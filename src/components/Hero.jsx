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
      <div className="absolute inset-0 bg-dots mask-[radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="absolute -top-32 -left-32 w-md h-112 rounded-full bg-turquesa/20 blur-3xl animate-blob" aria-hidden="true" />
      <div
        className="absolute top-40 -right-40 w-lg h-128 rounded-full bg-ambar/15 blur-3xl animate-blob"
        style={{ animationDelay: '-7s' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white border border-turquesa/20 shadow-sm text-turquesa text-xs font-semibold tracking-wide uppercase px-4 py-1.5">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-turquesa animate-ping-soft" />
              <span className="relative w-2 h-2 rounded-full bg-turquesa" />
            </span>
            Cumplimiento legal en Venezuela
          </span>

          <h1
            className="animate-fade-up mt-6 font-heading font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-azul"
            style={{ animationDelay: '100ms' }}
          >
            Tus obligaciones,
            <br />
            <span className="text-gradient">bajo control.</span>
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
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-azul text-white text-sm font-semibold px-7 py-3.5 shadow-lg shadow-azul/20 transition-all hover:bg-turquesa hover:shadow-turquesa/30 hover:-translate-y-0.5"
            >
              Solicitar demo gratuita
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-azul/20 bg-white/60 backdrop-blur text-azul text-sm font-semibold px-7 py-3.5 transition-all hover:border-turquesa hover:text-turquesa hover:-translate-y-0.5"
            >
              <PlayCircle size={18} className="transition-transform group-hover:scale-110" />
              Ver cómo funciona
            </button>
          </div>
        </div>

        <div className="animate-fade-up relative" style={{ animationDelay: '350ms' }}>
          <div className="absolute inset-6 bg-turquesa/20 rounded-4xl blur-3xl" aria-hidden="true" />
          <img
            src={heroImage}
            alt="Resumen ejecutivo de riesgo legal en el tablero de Normvix"
            className="relative w-full h-auto animate-float-slow"
          />

          <div
            className="absolute -left-4 top-8 sm:-left-8 animate-float hidden sm:flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur border border-black/5 shadow-xl shadow-azul/10 px-4 py-3"
            aria-hidden="true"
          >
            <span className="w-9 h-9 rounded-xl bg-turquesa/10 flex items-center justify-center">
              <CheckCircle2 size={18} className="text-turquesa" />
            </span>
            <span>
              <span className="block text-xs font-semibold text-azul">Solvencia municipal</span>
              <span className="block text-[11px] text-grafito/60">Renovada y al día</span>
            </span>
          </div>

          <div
            className="absolute -right-2 bottom-10 sm:-right-6 animate-float hidden sm:flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur border border-black/5 shadow-xl shadow-azul/10 px-4 py-3"
            style={{ animationDelay: '-3s' }}
            aria-hidden="true"
          >
            <span className="w-9 h-9 rounded-xl bg-ambar/15 flex items-center justify-center">
              <Clock size={18} className="text-ambar" />
            </span>
            <span>
              <span className="block text-xs font-semibold text-azul">Permiso de bomberos</span>
              <span className="block text-[11px] text-grafito/60">Vence en 15 días</span>
            </span>
          </div>
        </div>
      </div>

      <div className="relative mt-20 md:mt-28 border-y border-black/5 bg-white/60 backdrop-blur py-5 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-marfil to-transparent z-10" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-marfil to-transparent z-10" aria-hidden="true" />
        <div className="flex w-max animate-marquee">
          {[...authorities, ...authorities].map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= authorities.length}
              className="flex items-center gap-10 pr-10 font-heading font-semibold text-sm uppercase tracking-widest text-azul/40"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-turquesa/50" />
            </span>
          ))}
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  )
}

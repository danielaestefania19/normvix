import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_email: email },
        { publicKey: PUBLIC_KEY },
      )
      setStatus('sent')
      setEmail('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-marfil px-6">
      <Reveal
        variant="scale"
        className="relative isolate overflow-hidden mx-auto max-w-5xl rounded-4xl bg-linear-to-br from-negro via-negro to-azul px-6 py-16 md:px-16 md:py-20 text-center shadow-2xl shadow-black/25"
      >
        <div className="absolute -z-10 hidden lg:block -top-10 -bottom-10 left-[4%] w-20 bg-turquesa skew-x-34" aria-hidden="true" />
        <div className="absolute -z-10 hidden lg:block -top-10 -bottom-10 left-[14%] w-6 bg-ambar skew-x-34" aria-hidden="true" />
        <div
          className="absolute -z-10 -bottom-24 -right-24 w-80 h-80 rounded-full bg-ambar/20 blur-3xl animate-blob"
          style={{ animationDelay: '-5s' }}
          aria-hidden="true"
        />
        <div className="absolute -z-10 inset-0 bg-dots opacity-20 invert" aria-hidden="true" />

        <h2 className="font-heading font-bold text-2xl md:text-[2.6rem] text-white leading-tight">
          ¿Listo para tomar el control
          <br className="hidden md:block" /> de tus <span className="text-gradient">obligaciones</span>?
        </h2>
        <p className="mt-5 text-white/65 max-w-xl mx-auto">
          Agenda una demo gratuita y descubre cómo Normvix ayuda a tu empresa a mantenerse al día,
          prevenir riesgos y ganar tranquilidad. Sin instalaciones ni permanencia mínima: solo
          déjanos tu correo y nuestro equipo te contacta en menos de 24 horas.
        </p>

        {status === 'sent' ? (
          <p className="mt-10 text-ambar font-semibold">
            ¡Listo! Recibimos tu correo, te contactaremos muy pronto.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@empresa.com"
              className="flex-1 rounded-full border border-white/15 bg-white/10 backdrop-blur px-5 py-3.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-turquesa focus:bg-white/15 focus:ring-4 focus:ring-turquesa/20 transition-all"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-shine rounded-full bg-ambar text-azul text-sm font-semibold px-7 py-3.5 shadow-lg shadow-ambar/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ambar/40 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === 'sending' ? 'Enviando...' : 'Solicitar demo'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-4 text-sm text-red-300">
            No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos a contact@normvix.com.
          </p>
        )}
      </Reveal>
    </section>
  )
}

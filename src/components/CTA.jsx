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
    <section id="contacto" className="py-20 md:py-28 bg-marfil border-t border-black/5">
      <Reveal className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl text-azul">
          ¿Listo para tomar el control de tus obligaciones?
        </h2>
        <p className="mt-4 text-grafito/65 max-w-xl mx-auto">
          Agenda una demo gratuita y descubre cómo Normvix ayuda a tu empresa a mantenerse al día,
          prevenir riesgos y ganar tranquilidad. Sin instalaciones ni permanencia mínima: solo
          déjanos tu correo y nuestro equipo te contacta en menos de 24 horas.
        </p>

        {status === 'sent' ? (
          <p className="mt-10 text-turquesa font-semibold">
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
              className="flex-1 rounded-full border border-black/10 bg-white px-5 py-3 text-sm outline-none focus:border-turquesa transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-ambar text-azul text-sm font-semibold px-7 py-3 transition-all hover:brightness-95 hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === 'sending' ? 'Enviando...' : 'Solicitar demo'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-4 text-sm text-red-500">
            No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos a contact@normvix.com.
          </p>
        )}
      </Reveal>
    </section>
  )
}

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'

const faqs = [
  {
    q: '¿Qué tipo de obligaciones puedo gestionar con Normvix?',
    a: 'Obligaciones legales, fiscales, laborales y municipales: declaraciones, permisos, renovaciones, pólizas y cualquier compromiso con fecha de vencimiento que tu empresa deba cumplir.',
  },
  {
    q: 'Normvix reemplaza a mi contador o abogado?',
    a: 'No. Normvix organiza y centraliza la información para que tu equipo, tus asesores legales y contables trabajen sobre los mismos datos, con recordatorios y evidencia siempre a la mano.',
  },
  {
    q: '¿Cuánto tiempo toma implementar Normvix en mi empresa?',
    a: 'La mayoría de los equipos carga su primer calendario de obligaciones y empieza a recibir alertas en menos de una semana, sin necesidad de instalar nada.',
  },
  {
    q: '¿Mis datos y documentos están seguros?',
    a: 'Sí. Toda la información se almacena cifrada, con control de accesos y un historial auditable de quién vio o modificó cada documento.',
  },
  {
    q: '¿Puedo gestionar varias empresas o sedes desde una sola cuenta?',
    a: 'Sí, el módulo multi-empresa te permite administrar el cumplimiento de distintas razones sociales o sucursales y comparar su desempeño desde un solo panel.',
  },
  {
    q: '¿Qué pasa si necesito ayuda?',
    a: 'Nuestro equipo responde por correo a contact@normvix.com y por los canales de contacto del pie de página, normalmente en menos de 24 horas.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-black/5">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-turquesa text-xs font-semibold tracking-wide uppercase">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-azul">
            ¿Tienes dudas? Aquí resolvemos las más comunes
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-black/5 border-t border-b border-black/5">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i
            return (
              <div key={q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-heading font-semibold text-azul">{q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-turquesa transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm text-grafito/65 leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'

const faqs = [
  {
    q: '¿Qué tipo de obligaciones puedo gestionar con Normvix?',
    a: 'Licencias, permisos, solvencias y demás requisitos exigidos por el SENIAT, las alcaldías, los bomberos, los ministerios y los institutos reguladores, a nivel nacional, estatal y municipal.',
  },
  {
    q: '¿Cómo sé qué normas aplican a mi empresa?',
    a: 'Ese es el punto de partida. El diagnóstico normativo de Normvix identifica los requerimientos que la ley le exige a cada sede según su actividad y ubicación, para que no dependas de revisar la normativa por tu cuenta.',
  },
  {
    q: '¿Normvix reemplaza a mi contador o abogado?',
    a: 'No. Normvix centraliza la información para que tu equipo y tus asesores trabajen sobre los mismos datos. Próximamente, nuestro marketplace jurídico también te conectará con abogados y gestores regionales calificados cuando necesites apoyo en un trámite.',
  },
  {
    q: '¿Sirve para una PYME o solo para grandes empresas?',
    a: 'Para ambas. El plan B2B PYMES incluye las funciones esenciales de cumplimiento con límites de usuarios y establecimientos. El plan B2B Big Corp suma más usuarios, múltiples plantas o razones sociales y gestión centralizada desde un solo tablero.',
  },
  {
    q: '¿Qué pasa con el historial si cambia el personal?',
    a: 'Se queda en la empresa. Permisos, vencimientos, evidencias y acciones quedan registrados en Normvix, así que una renuncia o una rotación no significa empezar de cero.',
  },
  {
    q: '¿Cómo me ayuda frente a una inspección o fiscalización?',
    a: 'Con las auditorías en campo registras evidencia digital verificada en el momento, y los reportes reúnen todo el respaldo de cumplimiento en un solo documento, listo para presentarlo.',
  },
  {
    q: '¿Mis datos y documentos están seguros?',
    a: 'Sí. La información se almacena cifrada, con control de accesos y un historial auditable de quién vio o modificó cada documento. Estamos incorporando blockchain para garantizar que ninguna evidencia pueda ser alterada.',
  },
  {
    q: '¿Necesito instalar algo?',
    a: 'No. Normvix funciona en la nube y solo necesitas un navegador. En la demo revisamos tus sedes y obligaciones y te damos un estimado de puesta en marcha.',
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

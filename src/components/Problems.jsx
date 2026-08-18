import { FolderX, CalendarClock, GitBranch, EyeOff } from 'lucide-react'

const problems = [
  {
    icon: FolderX,
    title: 'Información dispersa',
    text: 'Los datos viven en hojas de cálculo, correos y carpetas compartidas que nadie termina de actualizar. Cada auditoría se convierte en horas buscando el documento correcto.',
  },
  {
    icon: CalendarClock,
    title: 'Plazos inciertos',
    text: 'Vencimientos legales y fiscales que se descubren demasiado tarde, cuando ya no hay margen de maniobra. Sin un calendario centralizado, cada fecha depende de que alguien la recuerde.',
  },
  {
    icon: GitBranch,
    title: 'Acciones sin seguimiento',
    text: 'Las tareas correctivas se registran pero nadie hace seguimiento. Sin responsables claros ni alertas automáticas, los hallazgos quedan abiertos indefinidamente.',
  },
  {
    icon: EyeOff,
    title: 'Sin visibilidad ejecutiva',
    text: 'La dirección no tiene indicadores consolidados del estado real de cumplimiento. Las decisiones se toman de forma reactiva, después de que el problema ya ocurrió.',
  },
]

export default function Problems() {
  return (
    <section id="problematica" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-turquesa text-xs font-semibold tracking-wide uppercase">
            La gestión de obligaciones, hoy
          </span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-azul">
            Cuatro problemas que se repiten en toda empresa
          </h2>
          <p className="mt-4 text-grafito/65 leading-relaxed">
            Son fallas de proceso, no de esfuerzo: sin un sistema centralizado, hasta los
            equipos más disciplinados terminan reaccionando a última hora en lugar de
            anticiparse.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {problems.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-5 rounded-2xl bg-white border border-black/5 p-6"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-red-50 flex items-center justify-center">
                <Icon size={22} className="text-red-400" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-azul">{title}</h3>
                <p className="mt-2 text-sm text-grafito/65 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

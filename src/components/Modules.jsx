import {
  BookOpen,
  ScanSearch,
  FileClock,
  ShieldAlert,
  ListChecks,
  ClipboardCheck,
  FileBarChart,
  LayoutDashboard,
} from 'lucide-react'
import Reveal from './Reveal'

const modules = [
  {
    icon: BookOpen,
    title: 'Marco legal',
    text: 'Biblioteca de normativa venezolana nacional, estatal y municipal, organizada por autoridad y siempre actualizada. Consulta el texto que respalda cada obligación.',
  },
  {
    icon: ScanSearch,
    title: 'Aplicabilidad',
    text: 'Diagnóstico normativo de cada sede según su actividad, ubicación y tamaño. Sabes exactamente qué requisitos te exige la ley, y cuáles no.',
  },
  {
    icon: FileClock,
    title: 'Permisos críticos',
    text: 'Licencias, permisos y solvencias con su vigencia, responsable y estatus. Alertas automáticas antes de cada vencimiento, con escalamiento si nadie actúa.',
  },
  {
    icon: ShieldAlert,
    title: 'Riesgos',
    text: 'Jerarquiza cada incumplimiento según su consecuencia: multa, paralización o cierre del establecimiento. Atiende primero lo que más expone a tu empresa.',
  },
  {
    icon: ListChecks,
    title: 'Planes de acción',
    text: 'Convierte cada brecha en tareas con responsable, acciones y fecha compromiso. Da seguimiento hasta el cierre, sin perder el historial.',
  },
  {
    icon: ClipboardCheck,
    title: 'Auditorías',
    text: 'Evalúa el cumplimiento en campo y registra evidencia digital verificada en el momento. Detecta brechas antes de que lo haga la autoridad.',
  },
  {
    icon: FileBarChart,
    title: 'Reportes',
    text: 'Resultados y evidencias de cumplimiento listos para la dirección o para una fiscalización, generados con un solo clic.',
  },
  {
    icon: LayoutDashboard,
    title: 'Tableros y KPI',
    text: 'Indicadores en tiempo real con semáforo verde, amarillo y rojo. Compara el nivel de cumplimiento entre sedes o razones sociales.',
  },
]

export default function Modules() {
  return (
    <section id="modulos" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-turquesa text-xs font-semibold tracking-wide uppercase">
            Módulos
          </span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-azul">
            Una plataforma, todas las piezas del cumplimiento
          </h2>
          <p className="mt-4 text-grafito/65 leading-relaxed">
            Cada módulo resuelve una parte del proceso, pero funcionan mejor juntos: la
            información fluye del marco legal a la aplicabilidad, de los riesgos a los planes
            de acción y de ahí a los tableros, sin doble digitación.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-black/5 p-6 hover:border-turquesa/40 hover:shadow-lg hover:shadow-azul/5 transition-all">
                <div className="w-11 h-11 rounded-xl bg-turquesa/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Icon size={22} className="text-turquesa" />
                </div>
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

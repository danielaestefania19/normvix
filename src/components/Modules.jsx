import { LayoutDashboard, CalendarCheck, FolderLock, BellRing, FileBarChart, Building } from 'lucide-react'

const modules = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard ejecutivo',
    text: 'Visión de 360° del estado de cumplimiento de tu empresa en tiempo real. Filtra por área, sede o tipo de obligación sin salir del tablero.',
  },
  {
    icon: CalendarCheck,
    title: 'Calendario de obligaciones',
    text: 'Vencimientos legales, fiscales y operativos organizados en una sola vista. Cada obligación tiene un responsable y una fecha, sin ambigüedad.',
  },
  {
    icon: FolderLock,
    title: 'Gestión documental',
    text: 'Repositorio centralizado y seguro para toda tu evidencia de cumplimiento. Versiones, permisos y accesos quedan registrados automáticamente.',
  },
  {
    icon: BellRing,
    title: 'Alertas inteligentes',
    text: 'Notificaciones automáticas antes de cada vencimiento, por el canal que prefieras. Escalan a un supervisor si el responsable no actúa a tiempo.',
  },
  {
    icon: FileBarChart,
    title: 'Reportes automáticos',
    text: 'Informes listos para directorio, sin armar presentaciones a mano. Genera el reporte del período con un solo clic, cuando lo necesites.',
  },
  {
    icon: Building,
    title: 'Multi-empresa',
    text: 'Administra el cumplimiento de varias razones sociales desde una sola cuenta. Compara el desempeño entre empresas o sedes en segundos.',
  },
]

export default function Modules() {
  return (
    <section id="modulos" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-turquesa text-xs font-semibold tracking-wide uppercase">
            Módulos
          </span>
          <h2 className="mt-3 font-heading font-semibold text-3xl md:text-4xl text-azul">
            Una plataforma, todas las piezas del cumplimiento
          </h2>
          <p className="mt-4 text-grafito/65 leading-relaxed">
            Cada módulo resuelve una parte del proceso, pero funcionan mejor juntos: la
            información fluye del calendario a las alertas, de las alertas a los reportes,
            sin doble digitación.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/5 p-6 hover:border-turquesa/40 hover:shadow-lg hover:shadow-azul/5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-turquesa/10 flex items-center justify-center">
                <Icon size={22} className="text-turquesa" />
              </div>
              <h3 className="mt-5 font-heading font-semibold text-azul">{title}</h3>
              <p className="mt-2 text-sm text-grafito/65 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

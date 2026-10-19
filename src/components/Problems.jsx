import { Landmark, Coins, FolderX, ShieldAlert } from 'lucide-react'
import Reveal from './Reveal'

const problems = [
  {
    icon: Landmark,
    title: 'Incertidumbre normativa',
    text: 'Las exigencias están fragmentadas entre el SENIAT, las alcaldías, los bomberos, los ministerios y los institutos reguladores. Saber qué aplica a tu empresa, y cuándo, es un trabajo en sí mismo.',
  },
  {
    icon: Coins,
    title: 'Sobrecosto operativo',
    text: 'Personal dedicado exclusivamente a revisar carpetas y rastrear fechas. Horas de nómina que se van en seguimiento manual en lugar de en la operación del negocio.',
  },
  {
    icon: FolderX,
    title: 'Gestión manual',
    text: 'Hojas de cálculo y carpetas físicas vulnerables al error humano y al desorden. Cuando alguien deja la empresa, el historial de permisos y trámites se va con esa persona.',
  },
  {
    icon: ShieldAlert,
    title: 'Alto riesgo financiero',
    text: 'Un permiso, licencia o solvencia vencida puede traducirse en multas severas, la paralización de líneas de producción o el cierre preventivo del establecimiento.',
  },
]

export default function Problems() {
  return (
    <section id="problematica" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            El reto regulatorio
          </span>
          <h2 className="mt-4 font-heading font-bold text-2xl md:text-[2.1rem] leading-tight text-negro">
            Operar en Venezuela exige cumplir con todos, a tiempo
          </h2>
          <p className="mt-4 text-grafito/65 leading-relaxed">
            Es un entorno altamente fiscalizado, complejo y repartido entre múltiples
            autoridades nacionales, estatales y municipales. Sin un sistema centralizado,
            hasta los equipos más disciplinados terminan reaccionando a última hora.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {problems.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100} variant={i % 2 === 0 ? 'left' : 'right'}>
              <div className="group relative h-full overflow-hidden flex gap-5 rounded-2xl bg-white border border-black/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/5 hover:border-red-200">
                <span
                  className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-red-400 to-ambar origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                  aria-hidden="true"
                />
                <div className="w-11 h-11 shrink-0 rounded-xl bg-red-50 flex items-center justify-center transition-all duration-300 group-hover:bg-red-400 group-hover:rotate-6">
                  <Icon size={22} className="text-red-400 transition-colors group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-azul">{title}</h3>
                  <p className="mt-2 text-sm text-grafito/65 leading-relaxed">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

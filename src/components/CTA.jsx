export default function CTA() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl text-azul">
          ¿Listo para tomar el control de tus obligaciones?
        </h2>
        <p className="mt-4 text-grafito/65 max-w-xl mx-auto">
          Agenda una demo gratuita y descubre cómo Nexo ayuda a tu empresa a mantenerse al día,
          prevenir riesgos y ganar tranquilidad. Sin instalaciones ni permanencia mínima: solo
          déjanos tu correo y nuestro equipo te contacta en menos de 24 horas.
        </p>

        <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="tu@empresa.com"
            className="flex-1 rounded-full border border-black/10 px-5 py-3 text-sm outline-none focus:border-turquesa"
          />
          <button
            type="submit"
            className="rounded-full bg-ambar text-azul text-sm font-semibold px-7 py-3 hover:brightness-95 transition"
          >
            Solicitar demo
          </button>
        </form>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Icon from './Icon'

const WA = 'https://wa.me/51996589002?text=Hola,%20quiero%20mi%20viaje%20organizado%20con%20gesti%C3%B3n%20premium'

const withoutUs = [
  'Horas buscando vuelos',
  'Incertidumbre total',
  'Estrés de última hora',
  'Restaurantes al azar',
  'Sorpresas desagradables',
]

const withUs = [
  'Todo organizado por expertos',
  'Itinerario optimizado día a día',
  'Zero estrés',
  'Mejores restaurantes reservados',
  'Hoteles verificados',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function ComparisonSection() {
  const { ref: leftRef, isInView: leftInView } = useScrollReveal()
  const { ref: rightRef, isInView: rightInView } = useScrollReveal()

  return (
    <section className="py-40 px-8 md:px-24">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        {/* Sin Nosotros */}
        <motion.div
          ref={leftRef}
          variants={fadeUp}
          initial="hidden"
          animate={leftInView ? 'visible' : 'hidden'}
          className="p-16 rounded-3xl bg-[#08101a] border border-white/5 flex flex-col items-center text-center opacity-80"
        >
          <Icon name="cancel" className="text-6xl text-slate-700 mb-8" />
          <h4 className="text-2xl font-headline font-bold mb-8 text-slate-500">Sin Nosotros</h4>
          <ul className="space-y-6 text-slate-600 text-sm font-medium">
            {withoutUs.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Icon name="close" className="text-red-900/40 text-lg" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Gestión Premium */}
        <motion.div
          ref={rightRef}
          variants={fadeUp}
          initial="hidden"
          animate={rightInView ? 'visible' : 'hidden'}
          className="glass p-16 rounded-[40px] border border-primary/40 relative shadow-[0_40px_100px_rgba(242,195,107,0.15)] flex flex-col items-center text-center transform md:scale-110 z-20"
        >
          <div className="absolute -top-5 right-8 bg-primary text-on-primary font-bold text-[10px] px-6 py-2 rounded-full tracking-widest uppercase shadow-[0_0_20px_rgba(242,195,107,0.5)]">
            RECOMENDADO
          </div>
          <Icon name="verified" filled className="text-6xl text-primary mb-8" />
          <h4 className="text-3xl font-headline font-bold mb-10 text-primary">Gestión Premium</h4>
          <ul className="space-y-6 text-on-surface text-base font-semibold">
            {withUs.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <Icon name="check_circle" filled className="text-primary text-xl" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 primary-gradient text-on-primary font-bold px-10 py-4 rounded-xl hover:scale-105 transition-all shadow-lg inline-block"
          >
            Quiero mi viaje organizado
          </a>
        </motion.div>
      </div>
    </section>
  )
}

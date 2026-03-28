import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Icon from './Icon'

const services = [
  { icon: 'flight_takeoff', label: 'Vuelos' },
  { icon: 'hotel', label: 'Hospedaje' },
  { icon: 'restaurant', label: 'Restaurantes' },
  { icon: 'event_available', label: 'Itinerario' },
]

const checks = [
  'Acceso exclusivo a expertos',
  'Acompañamiento 24/7',
  'Gestión integral',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function SolutionSection() {
  const { ref: leftRef, isInView: leftInView } = useScrollReveal()
  const { ref: rightRef, isInView: rightInView } = useScrollReveal()

  return (
    <section id="nosotros" className="py-40 px-8 md:px-24 bg-navy-dark/40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          ref={leftRef}
          variants={fadeUp}
          initial="hidden"
          animate={leftInView ? 'visible' : 'hidden'}
        >
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">
            Tu asistente personal de viajes
          </h2>
          <ul className="space-y-6">
            {checks.map((text) => (
              <li key={text} className="flex items-center gap-4 text-xl">
                <Icon name="check_circle" filled className="text-primary" />
                {text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          ref={rightRef}
          variants={fadeUp}
          initial="hidden"
          animate={rightInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 gap-6"
        >
          {services.map((s) => (
            <div
              key={s.label}
              className="glass p-8 rounded-3xl flex flex-col items-center text-center gap-4 border-white/5"
            >
              <Icon name={s.icon} className="text-primary text-5xl" />
              <span className="font-bold text-lg uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

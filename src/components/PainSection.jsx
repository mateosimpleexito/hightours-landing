import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Icon from './Icon'

const pains = [
  { icon: 'timer', title: 'Demasiadas opciones', desc: 'Comparar mil hoteles y vuelos es agotador. ¿Habré elegido bien?', offset: '' },
  { icon: 'sync_problem', title: 'Sin tiempo para planificar', desc: 'El trabajo no para. El viaje queda siempre para después.', offset: 'translate-x-8 md:translate-x-12' },
  { icon: 'group_off', title: '¿Y si sale mal?', desc: 'El hotel no era como en las fotos. Las vacaciones se arruinaron.', offset: 'translate-x-16 md:translate-x-24' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

function PainCard({ pain, index }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`relative group max-w-xl ${pain.offset}`}
    >
      <span className="absolute -left-16 -top-12 text-9xl font-headline font-black text-white/[0.03] select-none">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div
        className={`glass p-8 rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] ${
          index === 0 ? 'border-l-4 border-l-primary/60' : 'border-white/5 hover:border-primary/20'
        }`}
      >
        <div className="flex gap-4 items-start">
          <Icon name={pain.icon} className="text-primary mt-1" />
          <div>
            <h4 className="text-xl font-bold mb-2">{pain.title}</h4>
            <p className="text-on-surface-variant">{pain.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function PainSection() {
  const { ref, isInView } = useScrollReveal()
  return (
    <section className="py-40 px-8 md:px-24">
      <div className="grid md:grid-cols-12 gap-16 items-start">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="md:col-span-4 sticky top-40"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-on-surface leading-tight">
            Organizar un viaje se volvió <span className="italic text-primary">agotador</span>
          </h2>
          <p className="text-on-surface-variant text-lg">
            El lujo no debería ser estresante ni consumir tu tiempo más valioso.
          </p>
        </motion.div>
        <div className="md:col-span-8 space-y-12 pl-4">
          {pains.map((pain, i) => (
            <PainCard key={i} pain={pain} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

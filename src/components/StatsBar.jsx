import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'
import Icon from './Icon'

function StatNumber({ target, suffix, label }) {
  const { ref, count } = useCountUp(target)
  return (
    <div ref={ref} className="px-4">
      <div className="text-3xl font-headline font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
        {label}
      </div>
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function StatsBar() {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="max-w-screen-xl mx-auto px-8 relative z-30 mb-20"
    >
      <div className="glass py-12 px-8 rounded-[20px] max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 items-center text-center shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] border-primary/20">
        <StatNumber target={17} suffix=" años" label="Experiencia" />
        <div className="border-l border-primary/30">
          <StatNumber target={5000} suffix="+" label="Viajeros" />
        </div>
        <div className="border-l border-primary/30">
          <StatNumber target={12} suffix="" label="Destinos" />
        </div>
        <div className="px-4 border-l border-primary/30 flex flex-col items-center">
          <Icon name="verified_user" filled className="text-primary mb-2 text-3xl" />
          <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
            Safe Travels
          </div>
        </div>
      </div>
    </motion.div>
  )
}

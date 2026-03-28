import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Icon from './Icon'

const testimonials = [
  {
    quote: '"Les dije que quería ir a Cusco con mi familia y me entregaron TODO listo. Increíble."',
    name: 'Carlos R.',
    meta: 'Cusco · Familia · 2025',
    center: false,
  },
  {
    quote: '"No tenía ni una hora libre para organizar. High Tours se encargó de todo. Viaje perfecto."',
    name: 'Miguel G.',
    meta: 'Arequipa · Pareja · 2025',
    center: true,
  },
  {
    quote: '"Les escribí un martes, el viernes ya tenía mi viaje completo."',
    name: 'Lucía P.',
    meta: 'Lima · Negocios · 2024',
    center: false,
  },
]

const Stars = ({ size = 'text-lg', gap = 'gap-1' }) => (
  <div className={`flex justify-center ${gap}`}>
    {[...Array(5)].map((_, i) => (
      <Icon key={i} name="star" filled className={`text-primary ${size}`} />
    ))}
  </div>
)

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

function TestimonialCard({ t }) {
  const { ref, isInView } = useScrollReveal()

  if (t.center) {
    return (
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="w-full md:w-1/3 z-10 scale-100 opacity-100"
      >
        <div className="glass p-12 rounded-[2rem] border-primary/40 text-center shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative">
          <div className="mb-8">
            <Stars size="text-xl" gap="gap-1.5" />
          </div>
          <blockquote className="font-headline text-2xl md:text-3xl italic leading-relaxed mb-10 text-on-surface">
            {t.quote}
          </blockquote>
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full border-2 border-primary overflow-hidden shadow-lg bg-surface-container-highest" />
            <div>
              <div className="font-bold text-lg">{t.name}</div>
              <div className="text-[11px] text-on-surface-variant uppercase tracking-[0.2em] font-black">
                {t.meta}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="w-full md:w-1/3 opacity-70 scale-90"
    >
      <div className="glass p-10 rounded-3xl flex flex-col items-center text-center h-full">
        <div className="mb-6">
          <Stars />
        </div>
        <blockquote className="font-headline italic text-lg leading-relaxed mb-8 text-on-surface">
          {t.quote}
        </blockquote>
        <div className="mt-auto flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-surface-container-highest mb-3 border border-white/10" />
          <div className="text-[11px] font-bold text-on-surface-variant tracking-wider uppercase">
            {t.name} · {t.meta}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-40 bg-surface-dim relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

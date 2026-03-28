import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Icon from './Icon'

const steps = [
  {
    num: '01',
    title: 'La Entrevista',
    desc: 'Escuchamos tus deseos y entendemos tu estilo para crear la base de tu aventura.',
    extra: false,
    mt: '',
  },
  {
    num: '02',
    title: 'La Propuesta',
    desc: 'Diseñamos una experiencia a medida, optimizando cada detalle y reserva exclusiva.',
    extra: false,
    mt: 'md:mt-20',
  },
  {
    num: '03',
    title: 'El Viaje',
    desc: 'Tú solo llegas al aeropuerto. Nosotros nos encargamos de que todo sea perfecto.',
    extra: true,
    mt: '',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

function StepCard({ step }) {
  const { ref, isInView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`relative ${step.mt}`}
    >
      <span className="absolute -top-16 left-0 text-[140px] font-black text-primary/5 select-none leading-none">
        {step.num}
      </span>
      <div className="relative pt-8">
        <h4 className="text-2xl font-bold mb-4 font-headline">{step.title}</h4>
        <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
        {step.extra && (
          <div className="mt-12 glass p-6 rounded-2xl shadow-2xl border-primary/20 transform md:rotate-3 max-w-[280px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="flight" className="text-primary text-sm" />
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold">
                Vuelo Confirmado
              </div>
            </div>
            <div className="text-sm font-semibold mb-2">Lima → Machu Picchu</div>
            <div className="text-[10px] text-on-surface-variant">
              Gate 4B • Boarding 06:30 AM
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function StepsSection() {
  const { ref, isInView } = useScrollReveal()
  return (
    <section className="py-40 px-8 md:px-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-headline text-4xl md:text-5xl font-bold text-center mb-32"
        >
          El camino al paraíso
        </motion.h2>
        <div className="relative">
          <svg
            className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 hidden md:block opacity-20"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="dashed-path"
              d="M0,50 Q250,100 500,50 T1000,50"
              fill="none"
              stroke="#f2c36b"
              strokeWidth="2"
            />
          </svg>
          <div className="grid md:grid-cols-3 gap-24 md:gap-12 relative z-10">
            {steps.map((step) => (
              <StepCard key={step.num} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

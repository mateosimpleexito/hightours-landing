import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const WA = 'https://wa.me/51996589002?text=Hola,%20organicen%20mi%20viaje'
const BG_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ-yBiQreUUrMtCIoDJMmAKweD4SQvaM_YYrtoeIUJyyg6UcEsY16re16Iult5faqFqjeFqO67i7jfBPwF75fGSKuO7hyM8Ke1j2l0gRL6TTf1D9TA31mf8EGIJMq-gH4EFSqOHg4mDh2S81ZaXYc0iFzlTXoWev0kSC4rr-Don40O7zNLCmMnhgecZavzioXj90pNiq4Xmh8jOiPnM-MoyZm23OYmMo4emcyCn1R5V4nkXAuNumtPZex8zRb9WZwKOzfB-rbFO4k'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function FinalCTA() {
  const { ref, isInView } = useScrollReveal()
  return (
    <section className="relative py-60 px-8 overflow-hidden min-h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          alt="Luxury travel experience"
          src={BG_IMG}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <h2 className="font-headline text-5xl md:text-7xl font-bold mb-8 text-on-surface leading-tight">
          ¿Listo para lo extraordinario?
        </h2>
        <p className="text-xl text-on-surface-variant mb-14 leading-relaxed max-w-2xl mx-auto">
          Déjanos el estrés a nosotros. Tú solo disfruta de la vista.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#d4a853] text-white font-black px-12 py-5 rounded-2xl text-xl uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_10px_40px_rgba(212,168,83,0.4)] relative overflow-hidden group"
        >
          <span className="relative z-10">Organicen mi viaje</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
        </a>
      </motion.div>
    </section>
  )
}

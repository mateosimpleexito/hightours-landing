import { motion } from 'framer-motion'
import Icon from './Icon'

const WA = 'https://wa.me/51996589002?text=Hola,%20quiero%20comenzar%20mi%20experiencia'
const HERO_POSTER =
  'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2000&auto=format&fit=crop'
const HERO_VIDEO =
  'https://player.vimeo.com/external/494252666.hd.mp4?s=235f111874983057393ef0d694580517e47a9e69&profile_id=175'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: 'easeOut' },
  }),
}

export default function Hero({ onOpenModal }) {
  return (
    <header className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_POSTER}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/60 to-surface-dim/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dim via-transparent to-transparent" />
        <div className="absolute inset-0 vignette pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="font-headline text-5xl md:text-[76px] leading-[1.1] font-bold text-on-surface mb-8 tracking-tight"
        >
          Tu próximo viaje, <br />
          <span className="text-primary italic">sin mover un dedo</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-xl text-on-surface-variant mb-12 max-w-xl font-light leading-relaxed"
        >
          Diseñamos experiencias de lujo personalizadas. Desde el primer vuelo
          hasta el último brindis, nosotros nos encargamos de todo.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex flex-wrap items-center gap-8"
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-gradient text-on-primary font-bold px-10 py-5 rounded-2xl text-lg flex items-center gap-3 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(242,195,107,0.3)]"
          >
            Comenzar Experiencia
            <Icon name="arrow_forward" />
          </a>
          <button
            onClick={onOpenModal}
            className="flex items-center gap-4 group cursor-pointer bg-transparent"
          >
            <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center glass group-hover:scale-110 transition-transform">
              <Icon name="play_arrow" filled className="text-primary text-3xl" />
            </div>
            <span className="font-label text-sm uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
              Ver Película
            </span>
          </button>
        </motion.div>
      </div>
    </header>
  )
}

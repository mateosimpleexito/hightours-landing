import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Icon from './Icon'

const destinations = [
  {
    name: 'Machu Picchu',
    tagline: 'Donde el cielo toca la tierra',
    img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop',
    waText: 'Hola,%20quiero%20ir%20a%20Machu%20Picchu',
  },
  {
    name: 'Cusco',
    tagline: 'El corazón del imperio',
    img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2000&auto=format&fit=crop',
    waText: 'Hola,%20quiero%20ir%20a%20Cusco',
  },
  {
    name: 'Máncora',
    tagline: 'Arena, sol y mar sin fin',
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop',
    waText: 'Hola,%20quiero%20ir%20a%20Mancora',
  },
  {
    name: 'Paracas',
    tagline: 'Donde el desierto abraza el océano',
    img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2000&auto=format&fit=crop',
    waText: 'Hola,%20quiero%20ir%20a%20Paracas',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function DestinationsCarousel() {
  const carouselRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const { ref: headerRef, isInView } = useScrollReveal()

  const scroll = (dir) => {
    const el = carouselRef.current
    if (!el) return
    const cardWidth = el.querySelector('div')?.offsetWidth + 32
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const onScroll = () => {
      const pct = el.scrollLeft / (el.scrollWidth - el.clientWidth)
      setProgress(Math.max(0.1666, pct))
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="destinos" className="py-32 overflow-hidden bg-navy-dark">
      <motion.div
        ref={headerRef}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="px-8 md:px-24 mb-16 flex justify-between items-end"
      >
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            Destinos de Leyenda
          </h2>
          <p className="text-on-surface-variant text-lg">
            Curamos lo mejor de Perú para ojos exigentes.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => scroll(-1)}
            className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer bg-transparent"
          >
            <Icon name="chevron_left" className="text-primary" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer bg-transparent"
          >
            <Icon name="chevron_right" className="text-primary" />
          </button>
        </div>
      </motion.div>

      <div
        ref={carouselRef}
        className="flex gap-8 px-8 md:px-24 overflow-x-auto pb-12 snap-x no-scrollbar scroll-smooth items-stretch"
      >
        {destinations.map((d) => (
          <div
            key={d.name}
            className="min-w-[calc(100%-2rem)] md:min-w-[calc(50%-1rem)] h-[550px] relative group overflow-hidden rounded-[2.5rem] snap-center shrink-0"
          >
            <img
              alt={d.name}
              src={d.img}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <h4 className="text-4xl font-headline text-white font-bold mb-2">{d.name}</h4>
              <p className="text-slate-300 text-lg mb-6">{d.tagline}</p>
              <a
                href={`https://wa.me/51996589002?text=${d.waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
              >
                Quiero ir <Icon name="arrow_forward" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="max-w-xl mx-auto px-8 mt-12">
        <div className="w-full h-0.5 bg-surface-container-highest rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}

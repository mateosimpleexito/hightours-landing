import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Icon from './Icon'

const WA = 'https://wa.me/51996589002'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-60 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-dark/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-headline font-bold text-amber-200 tracking-widest">
          High Tours
        </div>
        <div className="hidden md:flex items-center gap-12">
          <button
            onClick={() => scrollTo('destinos')}
            className="text-amber-400 font-bold border-b border-amber-400/50 uppercase tracking-tight font-headline cursor-pointer bg-transparent"
          >
            Destinos
          </button>
          <button
            onClick={() => scrollTo('nosotros')}
            className="text-slate-300 font-medium hover:text-amber-200 transition-colors uppercase tracking-tight font-headline cursor-pointer bg-transparent"
          >
            Nosotros
          </button>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-gradient text-on-primary font-bold px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(212,168,83,0.4)]"
          >
            WhatsApp
          </a>
        </div>
        <button
          className="md:hidden text-primary cursor-pointer bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy-dark/95 backdrop-blur-xl px-8 pb-8 flex flex-col gap-6"
        >
          <button
            onClick={() => scrollTo('destinos')}
            className="text-amber-400 font-bold uppercase tracking-tight font-headline text-left cursor-pointer bg-transparent"
          >
            Destinos
          </button>
          <button
            onClick={() => scrollTo('nosotros')}
            className="text-slate-300 font-medium uppercase tracking-tight font-headline text-left cursor-pointer bg-transparent"
          >
            Nosotros
          </button>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-gradient text-on-primary font-bold px-8 py-3 rounded-full text-center shadow-[0_0_15px_rgba(212,168,83,0.4)]"
          >
            WhatsApp
          </a>
        </motion.div>
      )}
    </nav>
  )
}

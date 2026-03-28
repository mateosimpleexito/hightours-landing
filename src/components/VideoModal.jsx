import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icon'

export default function VideoModal({ isOpen, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
        >
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-primary z-20 cursor-pointer bg-transparent"
              onClick={onClose}
            >
              <Icon name="close" className="text-4xl" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1la9t8-mMTc?autoplay=1&mute=0&rel=0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="High Tours Video"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

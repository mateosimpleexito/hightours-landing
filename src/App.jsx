import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainSection from './components/PainSection'
import SolutionSection from './components/SolutionSection'
import StepsSection from './components/StepsSection'
import DestinationsCarousel from './components/DestinationsCarousel'
import ComparisonSection from './components/ComparisonSection'
import Testimonials from './components/Testimonials'
import StatsBar from './components/StatsBar'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="bg-surface-dim min-h-screen">
      <Navbar />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <PainSection />
      <SolutionSection />
      <StepsSection />
      <DestinationsCarousel />
      <ComparisonSection />
      <Testimonials />
      <StatsBar />
      <FinalCTA />
      <Footer />
      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

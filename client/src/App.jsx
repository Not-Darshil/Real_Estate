import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import ExpertiseSection from './components/ExpertiseSection'
import VisualStatement from './components/VisualStatement'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <div className="bg-[#FAFAF7] text-[#1A1A1A]">
      {/* Custom circular cursor */}
      <CustomCursor />

      {/* Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Page Content */}
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExpertiseSection />
        <VisualStatement />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

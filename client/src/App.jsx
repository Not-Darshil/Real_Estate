import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="bg-[#FAFAF7] text-[#1A1A1A] min-h-screen flex flex-col">
      <ScrollToTop />
      {/* Custom circular cursor */}
      <CustomCursor />

       {/* Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" /> 

      {/* Navigation */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

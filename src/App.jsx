import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Homepage from './pages/Homepages';
import ServicesPages from './pages/ServicesPage';
import Aboutpages from './pages/Aboutpages';
import Contactpages from './pages/Contactpages';
import ScrollToTop from './components/Scroll';
import PropertyDetail from './pages/PropertyDetail';

// Komponen Loading
function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* Loading Spinner */}
          <div className="w-16 h-16 border-4 border-[#800000] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>

          {/* Loading Text dengan branding Sonia Property */}
          <div className="flex items-center justify-center space-x-2">
            <span className="text-[#800000] font-semibold text-lg font-serif">Sonia Property</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#800000] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-[#B22222] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>

          <p className="text-gray-600 mt-2 text-sm font-sans">Memuat halaman...</p>
        </div>
      </div>
    </div>
  )
}

// Komponen utama dengan navigation detection
function AppContent() {
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Set loading true setiap kali location berubah
    setLoading(true)

    // Set timeout untuk menyembunyikan loading setelah 1 detik
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    // Cleanup timer
    return () => clearTimeout(timer)
  }, [location]) // Trigger effect setiap kali location berubah

  return (
    <>
      {loading && <LoadingOverlay />}

      <ScrollToTop />
      <main role="main">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/layanan' element={<ServicesPages />} />
          <Route path='/layanan/:propertySlug' element={<PropertyDetail />} />
          <Route path='/tentang-kami' element={<Aboutpages />} />
          <Route path='/kontak' element={<Contactpages />} />
        </Routes>
      </main>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="font-sans overflow-x-hidden">
        <AppContent />
      </div>
    </Router>
  )
}

export default App
import { useState } from 'react'
import HomePage from './pages/HomePage'
import OurStoryPage from './pages/OurStoryPage'
import WhyILoveYouPage from './pages/WhyILoveYouPage'
import FloatingLilies from './components/FloatingLilies'
import LilyDecoration from './components/LilyDecoration'  // ← NUEVA LÍNEA
import './styles/App.css'
import './styles/App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />
      case 'story':
        return <OurStoryPage onNavigate={setCurrentPage} />
      case 'reasons':
        return <WhyILoveYouPage onNavigate={setCurrentPage} />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

return (
  <div className="app">
    <LilyDecoration />      {/* ← Lirios decorativos en esquinas */}
    <FloatingLilies />      {/* ← Lirios flotantes pequeños */}
    {renderPage()}
  </div>
)

}

export default App

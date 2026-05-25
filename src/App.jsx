import React from 'react'
import './index.css'
import { ThemeProvider } from './context/Theme'
import ColorPicker from './components/ColorPicker'
import Header from './pages/Header'
import About from './pages/About'
import Featured from './pages/Featured'
import TechnicalSkills from './pages/TechnicalSkills'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {
  return (
    <ThemeProvider>
      <ColorPicker />
      <Header />
      <div className='bg-[linear-gradient(to_bottom,_black_20%,_var(--dark-bg-color)_100%)]'>
        <About />
        <Featured />
        <TechnicalSkills />
        <Contact/>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default App
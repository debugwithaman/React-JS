import React from 'react'
import HeroSection from './components/HeroSection'
import OrderSection from './components/OrderSection'
import FeaturesSection from './components/FeaturesSection'
import Gold from './components/Gold'
import Download from './components/Download'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <HeroSection/>
      <OrderSection/>
      <FeaturesSection/>
      <Gold/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default App
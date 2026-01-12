import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div className='flex flex-col h-screen w-full px-8 py-8 md:px-28 gap-16' >
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default App
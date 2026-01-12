import React from 'react'
import { APP_STORE_URL, PLAY_STORE_URL, VIDEO_URL } from '../utils/app.constants'


const HeroSection = () => {
  return (
    <div className='relative w-screen h-screen'>
      <video src={VIDEO_URL} autoPlay loop playsInline muted  className='absolute inset-0 w-full h-full object-cover -z-10'/>
      <div className='-z-10 absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent'></div>
      <div className='flex flex-col items-center justify-center h-full pt-80'>
        <img src="/assests/zomato.png" alt="Zomato-icon" className='w-52' />
        <div className='mb-5 px-5 text-center font-semibold text-5xl text-white mt-8'>
          India's #1 <br></br>food delivery app
        </div>
        <span className='text-white text-2xl px-5 text-center font-medium'> Experience fast and easy online ordering <br /> on the Zomato app
         </span>
         <div className='flex gap-6 mt-10'>
          <img src={PLAY_STORE_URL} alt="" className='w-44 ' />
          <img src={APP_STORE_URL} alt="" className='w-44 ' />
         </div>

         <div className='flex items-center justify-center gap-2 mt-8 animate-bounce'> 
          <span className='text-white font-medium '> Scroll Down</span>
          <img src="/assests/double-arrow.svg" alt="Double-Arrow" />
         </div>
      </div>
    </div>
  )
}

export default HeroSection
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex items-center justify-center gap-8 lg:gap-0 lg:justify-between w-[82%] m-auto mt-28 lg:flex-nowrap flex-wrap '>
      <div className='flex flex-col gap-4 w-full'>
        <span className='text-[3.25rem] font-medium '>Shop Smarter , Shop Better.</span>
        <span className='w-full lg:w-[38rem]
'>
          Discover thousands of product each carefully selected for quality style, and value bringing everything you need and love into one convenient place.
        </span>
        <div className='flex gap-4 mt-8'>
          <button className='bg-black text-white px-8 py-3 rounded-md font-medium cursor-pointer hover:bg-black/80'>Shop Now</button>
          <button className='bg-black text-white px-8 py-3 rounded-md font-medium cursor-pointer hover:bg-black/80'>Explore Deals</button>
        </div>
      </div>
      <img src="/assests/hero-image.png" alt="hero-img" className='w-[20rem] lg:w-[30rem] lg:h-[25rem]' />
    </div>
  )
}

export default HeroSection
import React from 'react'

const HeroSection = () => {
  return (
    <div className='mt-8 flex items-center justify-center md:nt-24 md:justify-between flex-wrap'>
      <div className='text-blue-400 text-xl '>
        <span>Welcome to my site !</span>
        <h1 className='text-5xl md:text-7xl mt-8 text-blue-500 leading-tight'>Hi! I am Aman Kazi, a <br/><span className='text-blue-700'>software engineer</span>
        </h1>

        <span className='flex md:max-w-xl mt-8 text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at sint modi maxime ducimus doloribus voluptatem quo rerum tenetur, incidunt quis voluptatum quidem quam ab voluptatibus velit, placeat cumque totam?
          
        </span>
        <div className='flex items-center gap-4 mt-8'>
          <button className='cursor-pointer bg-blue-500 text-white py-2 px-6 text-xl rounded-md hover:bg-blue-800'>
            Hire Me
          </button>

          <button className='cursor-pointer bg-blue-500 text-white py-2 px-6 text-xl rounded-md hover:bg-blue-800'>
            Resume
          </button>
        </div>
      </div>
      <div>
        <img src="/assests/hero-image.png" alt="hero-img" className='w-25rem h-25rem md:mt-0 mt-16 ' />
      </div>
    </div>
  )
}

export default HeroSection
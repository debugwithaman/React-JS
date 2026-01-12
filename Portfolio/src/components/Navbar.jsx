import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex gap-4 md:gap-0 items-start md:items-center justify-between flex-wrap md:flex-row'>
      <span className='bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl'>AK</span>
      
      <div className='flex items-center justify-center gap-8'>
        <span className='text-gray-600 flex items-center justify-center gap-2 cursor-pointer  hover:text-blue-500'>
          <img src="/assests/home-icon.svg" alt="home-icon" />
          <span>Home</span>
        </span>

        <span className='text-gray-600 flex items-center justify-center gap-2 cursor-pointer  hover:text-blue-500'>
          <img src="/assests/user-icon.svg" alt="home-icon" />
          <span>About Me</span>
        </span>

        <span className='text-gray-600 flex items-center justify-center gap-2 cursor-pointer  hover:text-blue-500'>
          <img src="/assests/phone-icon.svg" alt="home-icon" />
          <span>Contact Me</span>
        </span>
        
      </div>
    </nav>
  )
}

export default Navbar
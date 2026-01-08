import React from 'react'
import { APP_STORE_URL, PLAY_STORE_URL } from '../utils/app.constants'

const Footer = () => {
  return (
    <div className='bg-black text-white p-20 md:px-36  flex flex-col '>
     <span className='text-3xl font-medium'>
      Zomato
     </span>
     <span className='mt-8 hover:underline'>Visit Help Center</span>

     <div className='flex justify-between gap-2 mt-8 flex-wrap'>
      <div>
        <span className='text-lg font-medium'>Company</span>
        <div className='flex flex-col gap-3 mt-2'>
          <span className='text-sm'>About Us</span>
          <span className='text-sm'>Our offering</span>
          <span className='text-sm'>Newsroom</span>
          <span className='text-sm'>Investor</span>
        </div>
      </div>
      <div>
        <span className='text-lg font-medium'>Quick Links</span>
        <div className='flex flex-col gap-3 mt-2'>
          <span className='text-sm'>Home</span>
          <span className='text-sm'>Shop</span>
          <span className='text-sm'>Best Sellers</span>
          <span className='text-sm'>Deals</span>
        </div>
      </div>
     
      <div>
        <span className='text-lg font-medium'>Customer Support</span>
        <div className='flex flex-col gap-3 mt-2'>
          <span className='text-sm'>FAQ's</span>
          <span className='text-sm'>Shipping & Delivery</span>
          <span className='text-sm'>Returns & Refunds</span>
          <span className='text-sm'>Privacy Policy</span>
        </div>
      </div>
       <div>
        <span className='text-lg font-medium'>Follow Us</span>
        <div className='flex flex-col gap-3 mt-2'>
          <span className='text-sm'>Instagram</span>
          <span className='text-sm'>Facebook</span>
          <span className='text-sm'>Twitter / X</span>
          <span className='text-sm'>Linkedin</span>
        </div>
      </div>
     </div>

     <div className='flex items-center justify-start gap-2 mt-8'>
      <img src={PLAY_STORE_URL} alt="Play-store-image" className='w-[188px] h-[56px] '/>

      <img src={APP_STORE_URL} alt="App-store-image" className='w-[167px] h-[56px] '/>

     </div>
      <span className='text-gray-400 text-xs mt-4'>@ 2025 Zomato Technologies INC.</span>
    </div>
  )
}

export default Footer
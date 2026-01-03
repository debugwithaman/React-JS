import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white p-20 md:px-36 mt-16 flex flex-col '>
     <span className='text-lg font-medium'>
      ShopEase
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
    </div>
  )
}

export default Footer
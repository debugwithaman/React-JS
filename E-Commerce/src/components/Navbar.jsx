import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-between py-4 px-16'>
      <div className='flex items-center justify-center gap-5'>
        <span className='text-lg font-medium cursor-pointer'>ShopEase</span>
        <span className='text-sm cursor-pointer hover:underline'>Shop</span>
        <span className='text-sm cursor-pointer hover:underline'>Best Seller</span>
        <span className='text-sm cursor-pointer hover:underline'>Deals</span>
      </div>
        <div className='md:flex items-center justify-center gap-5 hidden'>
          <div className='flex items-center justify-center gap-1 hover:underline cursor-pointer'>
            <img src="/assests/cart-icon.svg" alt="cart-icon" />
            <span className='text-sm'>Cart</span>
          </div>
          <span className='hover:underline cursor-pointer text-sm '>Help</span>
          <span className='hover:underline cursor-pointer text-sm'>Login</span>
          <span className='bg-white text-black py-2 px-3 rounded-full font-medium text-sm cursor-pointer hover:bg-amber-200 transition delay-150 duration-300 ease-in-out'>Sign up</span>
        </div>
      </div>
    
  )
}

export default Navbar
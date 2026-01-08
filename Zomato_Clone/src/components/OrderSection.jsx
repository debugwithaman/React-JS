import React from 'react'
import { BURGER_IMG_URL, CITIES_IMG_URL, LEAVES_IMG_URL, LEFT_SIDE_LINE, MOMOS_IMG_URL, ORDER_DELIVERED_IMG_URL, PIZZA_IMG_URL, RESTAURANT_IMG_URL, RIGHT_SIDE_LINE, TOMATO_IMG_URL } from '../utils/app.constants'

const OrderSection = () => {
  return (
    <div className='relative min-h-[37rem] pb-[15rem] overflow-x-clip'>
      
      {/* Left Side Line - behind everything */}
      <div className='absolute left-0 -top-44 h-auto w-[70%] -translate-x-[45%] z-0'>
        <img 
          src={LEFT_SIDE_LINE} 
          alt="left-side-line" 
          className='h-auto w-full'
        />
      </div>
      
      {/* Right Side Line - behind everything */}
      <div className='absolute right-0 -top-44 h-auto w-[70%] translate-x-[45%] z-0'>
        <img 
          src={RIGHT_SIDE_LINE} 
          alt="right-side-line" 
          className='h-auto w-full'
        />
      </div>

      {/* Decorative images - on top of lines */}
      <img 
        src={BURGER_IMG_URL} 
        alt="burger-img" 
        className='w-[15rem] absolute left-52 top-10 z-10'
      />

      <img 
        src={MOMOS_IMG_URL} 
        alt="momo-img" 
        className='w-[15rem] h-[13rem] absolute right-52 -top-44 z-10'
      />

      <img 
        src={PIZZA_IMG_URL} 
        alt="pizza-img" 
        className='w-[15rem] absolute right-36 top-40 z-10'
      />

      <img 
        src={TOMATO_IMG_URL} 
        alt="tomato-img" 
        className='w-12 absolute top-96 left-32 z-10'
      />

      <img 
        src={TOMATO_IMG_URL} 
        alt="tomato-img" 
        className='w-12 absolute top-10 right-32 rotate-45 z-10'
      />

      <img 
        src={LEAVES_IMG_URL} 
        alt="leave-img" 
        className='absolute w-12 -top-38 left-[30%] z-10'
      />

      {/* Main Content */}
      <div className='relative z-20'>
        <div className='w-[30%] text-center m-auto flex items-center justify-center flex-col mt-[14rem]'>
          <span className='text-carnation text-5xl font-medium leading-[3.5rem]'>
            Better food for more people
          </span>
          <span className='text-comet text-xl mt-8 w-[25rem]'>
            For over a decade we have enabled our customers to discover new taste deliver right to their doorstep
          </span>
        </div>
      </div>

      {/* Stats Section - Reduced spacing */}
      <div className='relative z-20 mt-[8rem]'>
        <div className='absolute left-1/2 -translate-x-1/2 rounded-4xl bg-white shadow-2xl w-[55%] py-6 px-7 flex items-center justify-center gap-8'>
          
          <div className='flex items-center justify-center gap-3 flex-1 border-r border-gray-200 pr-5'>
            <div className='flex flex-col'> 
              <span className='text-comet text-3xl font-bold'>3,00,000+</span>
              <span className='text-raven text-lg'>restaurants</span>
            </div>
            <img 
              src={RESTAURANT_IMG_URL} 
              alt="restaurant-img" 
              className='w-16 h-14'
            />
          </div>

          <div className='flex items-center justify-center gap-3 flex-1 border-r border-gray-200 pr-5'>
            <div className='flex flex-col'> 
              <span className='text-comet text-3xl font-bold'>800+</span>
              <span className='text-raven text-lg'>cities</span>
            </div>
            <img 
              src={CITIES_IMG_URL} 
              alt="cities-img" 
              className='w-9 h-12'
            />
          </div>

          <div className='flex items-center justify-center gap-3 flex-1'>
            <div className='flex flex-col'> 
              <span className='text-comet text-3xl font-bold'>3 billion+</span>
              <span className='text-raven text-lg'>orders delivered</span>
            </div>
            <img 
              src={ORDER_DELIVERED_IMG_URL} 
              alt="order-delivered-img" 
              className='w-16 h-14'
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default OrderSection
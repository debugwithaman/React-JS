import React from 'react'
import { FREE_DELIVERY_IMG_URL, GOLD_IMG_URL, GOLD_STAR_IMG_URL, SCOTTER_IMG_URL } from '../utils/app.constants'
import GoldStar from './GoldStar'
import ImageCard from './ImageCard'

const Gold = () => {
  return (
    <div className='bg-black relative py-[15rem] mt-[20rem] text-white flex items-center justify-center flex-col '>
      <img src={GOLD_IMG_URL} alt="gold-img" className='w-[306px] h-[134px]'/>

      <div className='mt-6 text-xl flex flex-col font-normal bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-center text-transparent'>
        <span>India's Top Savings</span>
        <span>Program for food lover</span>
      </div>

      <div className='mt-6 flex items-center justify-center gap-2'>
        <GoldStar/>
          <span className='text-2xl font-medium tracking-[4px]'>GOLD BENEFITS

          </span>
          <GoldStar/>
      </div>

      <div className='flex gap-10 mt-8'>
         <ImageCard imgUrl={FREE_DELIVERY_IMG_URL} title="Free Delivery" secondaryTitle="At all restaurants within 7 km"/>

         <ImageCard imgUrl={SCOTTER_IMG_URL} title="Upto 3-% extra off" secondaryTitle="At 20,000+ partner restaurants"/>
      </div>

      <img src={GOLD_STAR_IMG_URL} alt="Gold Star Image" className='w-[11rem] absolute top-0 left-0 ' />

      <img src={GOLD_STAR_IMG_URL} alt="Gold Star Image" className='w-[19rem] absolute top-0 right-0 rotate-1' />
    </div>
  )
}

export default Gold
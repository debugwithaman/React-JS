import React from 'react'
import {CALENDAR_IMG_URL, COLLECTIONS_IMG_URL, FOOD_ON_TRAIN_IMG_URL, GIFT_CARDS_IMG_URL, GOURMET_IMG_URL, HEALTHY_IMG_URL, OFFERS_IMG_URL, PARTY_IMG_URL, PHONE_IMG_URL, VEG_MODE_IMG_URL } from '../utils/app.constants'
import FeatureCard from './FeatureCard'
const FeaturesSection = () => {
  return (
    <div className='h-[30rem] bg-gradient-to-b from-chablis to-white'>
      <div className='relative text-center flex flex-col items-center justify-center py-28'>
         <span className='text-carnation text-[48px] font-bold leading-tight'>What's waiting for you <br>
      </br>on the app?</span>
      
      <span className='text-xl text-comet font-extralight mt-5 '> 
        Our app is packed with features that <br />enable you to experience food <br /> delivery like never before 

      </span>

      <div className='relative'>
        <img src={PHONE_IMG_URL} alt="phone-img" className='w-[18rem] mt-6' />
        <div className='absolute top-[8.5rem] left-[4.5rem] shadow-2xl bg-white rounded-3xl flex flex-col items-center justify-center border border-athens-gray py-3.5 pb-2'>
          <img src={CALENDAR_IMG_URL} alt="calendar_img" className='w-[144px] h-[90px]'/>
          <span>Schedule <br /> Your Order</span>
        </div>
      </div>
{/* This component is created for cards data */}
      <FeatureCard imgUrl={VEG_MODE_IMG_URL} title="Veg Mode" className="bottom-[18rem] left-[23.5rem]"/>

      <FeatureCard imgUrl={HEALTHY_IMG_URL} title=" Healthy" className="bottom-[16rem] left-[15rem]"/>

      <FeatureCard imgUrl={PARTY_IMG_URL} title="Plan a party" className="bottom-[7rem] left-[15rem]"/>

      <FeatureCard imgUrl={GIFT_CARDS_IMG_URL} title="Gift Cards" className="bottom-[7rem] left-[25rem]"/>

      <FeatureCard imgUrl={GOURMET_IMG_URL} title="Gourmet" className="bottom-[18rem] right-[27rem]"/>

      <FeatureCard imgUrl={OFFERS_IMG_URL} title="Offers" className="bottom-[17.5rem] right-[18.5rem]"/>

      <FeatureCard imgUrl={FOOD_ON_TRAIN_IMG_URL} title="Food on train" className="bottom-[7rem] right-[25.5rem]"/>

      <FeatureCard imgUrl={COLLECTIONS_IMG_URL} title="Collections" className="bottom-[8.5rem] right-[17rem]"/>

      </div>
     
    </div>
  )
}

export default FeaturesSection
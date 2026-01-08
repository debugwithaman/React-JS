import React from 'react'
import { APP_STORE_URL, PHONE_IMG_URL, PLAY_STORE_URL, QR_CODE_IMG_URL } from '../utils/app.constants'

const Download = () => {
  return (
    <div className='pt-24 gap-28 flex items-center justify-center bg-gradient-to-b from-[#FFEDEF] to-[#FFDBE0]'>
      {/* Left Side Content */}
      <div className='flex flex-col'>
        <span className='text-[2.5rem] font-bold'>Download the app now!</span>
        <span className='text-2xl text-gray-600'> Experience seamless online ordering <br />only on the Zomato app
        </span>

        <div className='flex gap-4 mt-8'>
          <img src={PLAY_STORE_URL} alt="Play Store image" className='w-[188px] h-[56px]'/>
          <img src={APP_STORE_URL} alt="Play Store image" className='w-[167px] h-[56px]'/>
        </div>
      </div>
{/* Right Side Content */}
 
     <div className='relative '>
        <img src={PHONE_IMG_URL} alt="Phone image" className='w-[28rem] h-[29rem]'/>
        <span className='w-[14rem] absolute left-[7.5rem] top-32 text-center text-xl text-gray-700 font-medium'> Scan the QR code to download the app </span>

        <img src={QR_CODE_IMG_URL} alt="QR Code image"  className='w-[14rem] absolute left-[7.5rem] bottom-10'/>
     </div>
    </div>
  )
}

export default Download
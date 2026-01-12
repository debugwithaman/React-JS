import React from 'react'

const FeatureCard = ({imgUrl, title , className}) => {
  return (
    <div className={`py-2 pb-2 ${className} absolute shadow-2xl bg-white rounded-2xl  flex flex-col items-center justify-center border border-athens-gray`}>
      <img src={imgUrl} alt={title} className='w-[111px] h-[69px] '/>
      <span className='text-ebony-clay py-2' >{title}</span>
    </div>
  )
}

export default FeatureCard
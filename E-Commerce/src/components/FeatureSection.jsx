import React from 'react'

// here we have use props to get title , description , ctaTitle, srcIMg, classNames

const FeatureSection = ({title,description,ctaTitle,srcImg,classNames}) => {
  return (
    <div className={`mt-28 px-8 flex items-center xl:gap-0 gap-8 justify-center lg:justify-evenly flex-wrap ${classNames}`}>
      <div className='bg-wild-sand p-8 rounded-md  '>
        <img src={srcImg} alt="" className='w-[28rem] h-[25rem] object-contain'/>
      </div>
      <div className='flex flex-col items-start gap-4 justify-center w-[30rem] '>
        <span className='text-4xl font-bold'>{title}</span>
        <span className='text-base'>{description}</span>
        <button className='bg-black text-white px-6 py-3 rounded-md font-medium cursor-pointer hover:bg-black/80'>{ctaTitle}</button>
      </div>
    </div>
  )
}

export default FeatureSection
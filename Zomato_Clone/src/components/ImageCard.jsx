import React from 'react'

const ImageCard = ({imgUrl, title, secondaryTitle}) => {
  return (
    <div className='flex items-center justify-center gap-5'>
       <img src={imgUrl} alt={title} className='w-[4.6rem] '/>
       <div className='flex flex-col '>
        <span className='text-2xl'>{title}</span>
        <span className='bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-center text-transparent text-xl mt-1'>{secondaryTitle}</span>
       </div>
    </div>
  )
}

export default ImageCard
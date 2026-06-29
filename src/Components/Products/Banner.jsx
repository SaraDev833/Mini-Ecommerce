import React from 'react'

const Banner = ({title , des}) => {
  return (
    <div className=' rounded-md w-full relative overflow-hidden'>
        <img src="../../images/banner.jfif" alt="banner.jpg" className='rounded-md w-[907.21px]' />  
        <div className='absolute inset-0  bg-blue-600/20 z-20 overflow-hidden flex flex-col justify-center gap-3 items-start px-6'>
              <h2 className='text-4xl text-white font-medium'>{title}</h2>
              <p className='text-slate-950 text-sm font-medium'>{des}</p>
                <button className='py-2 px-3 text-white font-medium bg-blue-700 hover:bg-blue-400 rounded-md'>Shop Now</button>
        </div>
    </div>
  )
}

export default Banner

import React from 'react'
import { Gift } from 'lucide-react'

const categoryLinks= [ "Electronics" ,"Fashion" , "Home and Kitchen" , "Beauty" , "Sports" , "Books" , "Accessories"]

const Categories = () => {
  return (
    <div className='w-[20%] my-3 bg-white border-white/15 shadow rounded-lg h-[600px]'>
   <ul className='flex flex-col gap-3 py-2 px-2'>
    <li className='text-lg font-medium'>Categories</li>
    <li className='text-sm  bg-blue-600/20 py-2 px-3 font-medium rounded-md text-blue-600'><a href="">All Categories</a></li>
    {categoryLinks.map((category) =>(
  <li className='text-sm hover:font-medium  text-slate-800  py-2 px-3 hover:text-blue-600 hover:font-stretch-50% cursor-pointer'><a href=""></a>{category}</li>
    ))}
  
   
   </ul>

   <div className="giftBox my-3 py-3 px-3 flex gap-4 items-center bg-blue-600/15 mx-2 rounded-md">
        <div className="gift-svg ">
      <img src="../../images/gift.png" alt="" className='h-20'/>
        </div>
        <div className="info flex flex-col gap-2 justify-center items-start">
   <h3 className='text-sm font-medium'>Special Offer</h3>
   <p className='text-sm'>Get 20% off on your first order</p>
   <button className='py-1 px-2 text-white bg-blue-600 rounded-md'>Shop Now</button>
        </div>
   </div>
    </div>
  )
}

export default Categories

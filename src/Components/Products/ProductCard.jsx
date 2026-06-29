import React from 'react'

const ProductCard = ({product}) => {
  
  return (
    <div className='w-[280px] h-[300px] flex flex-col rounded-md border border-slate-200 shadow-lg bg-white'>
      <img src={product.image} alt="" className='w-full h-[167px] object-cover rounded-md overflow-hidden'/>
      <div className="text m-3">
         <h3 className='font-bold text-sm '>{product.name}</h3>
         <p className='text-sm text-slate-600'>{product.category}</p>
         <span className='font-bold text-sm'>{product.price}$</span>
         <button className="w-full bg-blue-600 text-white py-1 text-s,sm font-medium rounded-md">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard

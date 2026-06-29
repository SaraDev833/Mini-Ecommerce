import React from 'react'
import CartItem from './CartItem'

const Carts = () => {
  const data =[
      {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 99.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
  },
  ]
  return (
    <div className='w-[20%] my-3 bg-white border-white/20 shadow-lg rounded-lg px-2 h-[650px]'>
      <div className='flex justify-between '>
        <h3 className='text-lg font-medium '>Your Cart(3)</h3>
        <button><span className="material-symbols-outlined text-lg font-medium">
          close
        </span></button>
      </div>
  
    <div className='my-4 flex flex-col gap-4'>
      {data.map((product)=>(
<CartItem product={product}/>
      ))}
    
   
    </div>
    <div>
    <div className="bill py-2 border-y border-slate-400 shadow flex flex-col gap-2">
   <div className="flex justify-between ">
      <span>Subtotal</span>
      <span>$1289</span>
   </div>
   <div className="flex justify-between ">
      <span>Shipping</span>
      <span>$1289</span>
   </div>
  
    </div>
   <div className="flex justify-between my-1">
      <span className='font-bold'>Total</span>
      <span>$1289</span>
   </div>
   </div>
   <div className='my-8'>
    <button className='bg-blue-600 text-white w-full py-2 rounded-md'>Proceed to Checkout</button>
   </div>
    </div>
  )
}

export default Carts

import React from 'react'

const CartItem = ({ product }) => {
    console.log(product)
    return (
        <div className='p-2 flex justify-between items-center  bg-white border-white/15 shadow rounded-lg '>
            <img src={product.image} alt="" className='h-12 w-12 object-cover' />
            <div className="text flex flex-col gap-2">
                <h3 className='text-slate-700'>{product.name}</h3>
                <p className='font-bold'>{product.price}</p>
                <div className='flex gap-3 items-center jus'>
                    <button className='border py-1 px-2'>+</button>
                    <span >2</span>
                    <button className='border py-1 px-2'>-</button>
                </div>
                <div>
                </div>
            </div>
            <div>
                <span class="material-symbols-outlined">
                    delete
                </span>
            </div>
        </div>
    )
}

export default CartItem

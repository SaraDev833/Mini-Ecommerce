import React from 'react'

const Navbar = () => {
    return (
        <div className='my-1 bg-[#0B0B45]  py-3 px-3 min-w-full sticky
        '>
            <div className="container flex items-center justify-between mx-auto">
                <div className="logo flex gap-1 ">
                    <span className="material-symbols-outlined text-white leading-normal!">
                        shopping_bag
                    </span>
                    <p className='text-white text-2xl font-medium'>Shop<span className='text-blue-600'>Lite</span></p>
                </div>
                <div className="search-input relative bg-white  rounded-md w-100">
                    <input type="text" className='w-full py-3 px-2 text-sm text-slate-500 ' placeholder='search for products' />
                    <span class="material-symbols-outlined absolute right-0 inset-y-0! leading-normal! text-lg bg-blue-600  py-0.5 px-1.5 text-center text-white">
                        search
                    </span>
                </div>
                <div className="menu">
                    <ul className='flex items-center gap-4'>
                        <li className='text-white list-none text-lg font-medium'><a href="#">Home</a></li>
                        <li className='text-white list-none text-lg font-medium'><a href="#">Products</a></li>
                        <li className='text-white list-none text-lg font-medium'><a href="#">Categories</a></li>
                    </ul>
                </div>
                <div className="signin flex gap-3 items-center">
                    <span class="material-symbols-outlined text-white text-2xl">
                        shopping_cart
                    </span>
                    <span className="material-symbols-outlined text-white text-2xl">
                        account_circle
                    </span>
                </div>
            </div>

        </div>
    )
}
export default Navbar

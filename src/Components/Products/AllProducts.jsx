import React, { useState } from 'react'
import products from '../../Data/Product'
import ProductCard from './ProductCard'
const AllProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 8;
    const lastIndex = currentPage * productPerPage;
    const firstIndex = lastIndex - productPerPage;
    const currentProducts = products.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(products.length / productPerPage);

    
    const categories = ["Electronics", "Fashion", "Home and Kitchen", "Beauty", "Sports", "Books", "Accessories"]
    const latests = ["Short by Latest", "Short by Oldest"]
    return (
        <div className='mt-4 mb-40'>
            <div className='flex justify-between items-center'>
                <h2 className='text-lg font-bold'>All Products</h2>
                <div className='flex gap-3'>

                    <select name="categories" id="category" className='border border-slate-500 shadow p-1 rounded-md'>
                        <option value="" className='text-sm'>All Category</option>
                        {categories.map((category) => (
                            <option className="text-sm" value="{category[]}">{category}</option>

                        ))}
                    </select>
                    <select name="short" id="short" className='border border-slate-500 shadow p-1 rounded-md'>

                        {latests.map((latest) => (
                            <option className='text-sm' value="{latest[]}">{latest}</option>

                        ))}
                    </select>
                </div>
            </div>
                <div className="mt-3 mb-9 flex flex-wrap  gap-8">
                    {currentProducts.map((product)=>(
                    <ProductCard product={product}/>
                    ))}
                </div>
               <div className='flex  justify-evenly '>
                 {[...Array(totalPages)].map((_, index) =>(
                    <button className='hover:bg-blue-600 py-2 px-4 hover:text-white text-sm bg-white text-black border'
                    key={index}
                    onClick={()=> setCurrentPage(index + 1)}
                    
                    >
          <div >{index + 1}</div>
                    </button>
                ))}
               </div>
               
        </div>
    )
}

export default AllProducts

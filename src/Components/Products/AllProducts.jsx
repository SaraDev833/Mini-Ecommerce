import React from 'react'

const AllProducts = () => {
    const categories = ["Electronics", "Fashion", "Home and Kitchen", "Beauty", "Sports", "Books", "Accessories"]
    const latests = ["Short by Latest", "Short by Oldest"]
    return (
        <div className='my-3 '>
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
        </div>
    )
}

export default AllProducts

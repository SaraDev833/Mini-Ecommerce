import React from 'react'
// import { Gift } from 'lucide-react'

const categoryLinks= [ "Electronics" ,"Fashion" , "Home and Kitchen" , "Beauty" , "Sports" , "Books" , "Accessories"]

const Categories = () => {
  return (
    <div className="w-full lg:w-[20%] my-3 bg-white shadow rounded-lg">

      <ul className="flex flex-col gap-2 p-3 max-h-[80vh] overflow-y-auto">

        <li className="text-lg font-medium">Categories</li>

        <li className="text-sm bg-blue-600/20 py-2 px-3 rounded-md text-blue-600">
          All Categories
        </li>

        {categoryLinks.map((category, index) => (
          <li
            key={index}
            className="text-sm py-2 px-3 hover:text-blue-600 cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="m-3 p-3 flex gap-3 items-center bg-blue-600/15 rounded-md">
        <img src="../../images/gift.png" className="h-16 sm:h-20" />

        <div>
          <h3 className="text-sm font-medium">Special Offer</h3>
          <p className="text-xs sm:text-sm">Get 20% off</p>
          <button className="mt-2 bg-blue-600 text-white px-2 py-1 rounded-md text-sm">
            Shop Now
          </button>
        </div>
      </div>

    </div>
  );
};
export default Categories

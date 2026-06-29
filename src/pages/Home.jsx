import React from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import Products from '../Components/Products/Products'
import Carts from '../Components/Carts'

const home = () => {
  return (
    <div className=' min-h-screen'>
      <Navbar/>
      <div className="flex justify-between container mx-auto">
         <Categories/>
         <Products/>
         <Carts/>
      </div>
    </div>
  )
}

export default home

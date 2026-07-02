import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { PopupContext } from "../context/PopupContext";
import Popup from "./Popup";

const Navbar = () => {
  const {popUp, setPopUp} = useContext(PopupContext)
  const{ searchValue , setSearchValue} = useContext(SearchContext)
  console.log('search value :' , searchValue)
  return (
    <nav className="bg-[#0B0B45] py-3 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* popup */}
{popUp && <Popup title="SignUp /Signin" image = "/images/" des="This feature is not available"/>}

        {/*  */}
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-white">
            shopping_bag
          </span>
          <p className="text-white text-2xl font-medium">
            Shop<span className="text-blue-600">Lite</span>
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:max-w-md ">
          <input
           onChange={(e)=>setSearchValue(e.target.value)}
            type="text"
            placeholder="Search for products"
            className="w-full py-2 px-3 rounded-md text-sm bg-white outline-none"
          />
          <span className="material-symbols-outlined absolute right-0 top-0 h-full  bg-blue-600 px-3 text-white rounded-r-md !flex items-center">
            search
          </span>
        </div>

        {/* Menu */}
        <div className="hidden lg:block">
          <ul className="flex gap-6 text-white font-medium">
            <li className="cursor-pointer" onClick={()=>document.getElementById('banner')?.scrollIntoView({
              behavior:'smooth'
            })}>Home</li>
            <li className="cursor-pointer" onClick={()=>document.getElementById('products')?.scrollIntoView({
              behavior:"smooth"
            })}>Products</li>
            <li className="cursor-pointer" onClick={()=>document.getElementById('products')?.scrollIntoView({
              behavior:'smooth'
            })}>Categories</li>
          </ul>
        </div>

        {/* Icons */}
        <div className="flex gap-3 text-white text-2xl">
          <span className="material-symbols-outlined cursor-pointer" onClick={()=> document.getElementById('cart').scrollIntoView({
            behavior:"smooth"
          })}>shopping_cart</span>
          <span className="material-symbols-outlined" onClick={()=>setPopUp(!popUp)}>account_circle</span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
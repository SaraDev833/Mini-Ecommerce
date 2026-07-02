import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";
import { PopupContext } from "../../context/PopupContext";

const Carts = () => {
    const { cart, totalPrice } = useContext(CartContext);
    const {openPop} = useContext(PopupContext)
  return (
    <div className="w-full lg:w-[20%] my-3 bg-white shadow rounded-lg p-2 mb-50 lg:mb-0 " id="cart">

      <div className="flex justify-between items-center">
        <h3 className="font-medium">Your Cart</h3>
      </div>
  {cart.length > 0 ?  
  
  ( 
  <>
  <div className="flex flex-col gap-3 mt-3 mb-10">
        {/* example static */}
        {cart.map((item) => (
          <CartItem key={item} item={item} />
        ))}
      </div>

      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md">
        Total Price : ${totalPrice}
      </button> 
       <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md" onClick={()=>openPop({
        title:"Way to checkout",
        des: "This feature is not currently available"
       })}>Checkout</button>
      </> ) : <div className="flex items-center h-[300px] justify-center" >
        <p className="font-medium text-lg">Cart is Empty</p>
        
        </div>}
   

    </div>
  );
};

export default Carts;
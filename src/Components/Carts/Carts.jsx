import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";

const Carts = () => {
    const { cart, totalPrice } = useContext(CartContext);
  return (
    <div className="w-full lg:w-[20%] my-3 bg-white shadow rounded-lg p-2 mb-50 lg:mb-0">

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
      </button> </> ) : <div className="flex items-center justify-center" >
        <p>Cart is Empty</p>
        
        </div>}
   

    </div>
  );
};

export default Carts;
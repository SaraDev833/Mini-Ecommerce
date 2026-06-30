import React, { useState } from "react";

const CartItem = () => {
  const [qty, setQty] = useState(1);
  const increase = ()=>(setQty(qty + 1))
  const decrease = ()=>{
    if(qty > 1){
  setQty(qty - 1 )
    }
    return qty
  }

  return (
    <div className="flex justify-between items-center p-2 border rounded-md">

      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        className="h-10 w-10 object-cover"
        alt=""
      />

      <div className="text-xs">
        <p>Product Name</p>
        <p className="font-bold">$50</p>
      </div>

      <div className="flex gap-2 items-center">
        <button className="border px-2" onClick={increase}>+</button>
        <span>{qty}</span>
        <button className="border px-2" onClick={decrease}>-</button>
      </div>

    </div>
  );
};

export default CartItem;
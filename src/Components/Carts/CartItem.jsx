import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item}) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center p-2 border rounded-md">

      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        className="h-10 w-10 object-cover"
        alt=""
      />

      <div className="text-xs">
        <p>{item.name}</p>
        <p className="font-bold">${item.price}</p>
      </div>

      <div className="flex gap-2 items-center">
        <button className="border px-2" onClick={() => increaseQuantity(item.id)}>+</button>
        <span>{item.quantity}</span>
        <button className="border px-2" onClick={() => decreaseQuantity(item.id)}>-</button>
      </div>
        <div className="remove text-red-700" onClick={()=>removeProduct(item.id)}>
        <span class="material-symbols-outlined">
delete
</span>
        </div>
    </div>
  );
};

export default CartItem;
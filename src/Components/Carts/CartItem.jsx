import React from "react";

const CartItem = () => {
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
        <button className="border px-2">+</button>
        <span>1</span>
        <button className="border px-2">-</button>
      </div>

    </div>
  );
};

export default CartItem;
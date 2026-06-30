import React from "react";
import CartItem from "./CartItem";

const Carts = () => {
  return (
    <div className="w-full lg:w-[20%] my-3 bg-white shadow rounded-lg p-2 mb-50 lg:mb-0">

      <div className="flex justify-between items-center">
        <h3 className="font-medium">Your Cart</h3>
      </div>

      <div className="flex flex-col gap-3 mt-3 mb-10">
        {/* example static */}
        {[1, 2, 3].map((item) => (
          <CartItem key={item} />
        ))}
      </div>

      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md">
        Checkout
      </button>

    </div>
  );
};

export default Carts;
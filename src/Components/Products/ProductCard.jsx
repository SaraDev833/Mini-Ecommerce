import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full bg-white shadow rounded-md overflow-hidden">

      <img
        src={product.image}
        className="w-full h-40 object-cover"
        alt=""
      />

      <div className="p-3">
        <h3 className="font-bold text-sm">{product.name}</h3>
        <p className="text-xs text-gray-500">{product.category}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="font-bold">${product.price}</span>
        </div>

        <button className="mt-3 w-full bg-blue-600 text-white py-2 text-sm rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
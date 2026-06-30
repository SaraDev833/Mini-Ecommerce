import React, { useState } from "react";
import products from "../../Data/Product";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const productPerPage = 8;
  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;

  const currentProducts = products.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(products.length / productPerPage);

  return (
    <div className="mt-4 mb-10">

      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <h2 className="font-bold text-lg">All Products</h2>

        <div className="flex gap-2">
          <select className="border p-1 text-sm rounded-md">
            <option>All Category</option>
          </select>

          <select className="border p-1 text-sm rounded-md">
            <option>Sort by Latest</option>
          </select>
        </div>
      </div>

      {/* GRID */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6 flex-wrap">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className="px-3 py-1 border hover:bg-blue-600 hover:text-white"
          >
            {index + 1}
          </button>
        ))}
      </div>

    </div>
  );
};

export default AllProducts;
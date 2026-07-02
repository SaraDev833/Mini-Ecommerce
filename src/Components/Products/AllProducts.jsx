import React, { useContext, useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import axios from "axios";
import { SearchContext } from "../../context/SearchContext";

const AllProducts = () => {

  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [category , setCategory] = useState("");
  console.log(category)
  useEffect(() => {
    try {
      const data = async () => {
        const response = await axios.get("http://localhost:3000/api/products")
        setProducts(response.data)
      }
      data()
    } catch (error) {

    }
  }, [])
  useEffect(() => {
    try {
      const data = async () => {
        const response = await axios.get("http://localhost:3000/api/categories")
        setCategories(response.data)
      }
      data()
    } catch (error) {

    }
  }, [])

  const [currentPage, setCurrentPage] = useState(1);

  const productPerPage = 8;
  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;

  const filteredProducts = products.filter((product) => (
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  ))
  const filteredProductsByCategory = filteredProducts.filter((product)=>(
     product.category.toLowerCase().includes(category.toLowerCase())
  ))
  const currentProducts = filteredProductsByCategory.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(products.length / productPerPage);

  return (
    <div className="mt-4 mb-10">

      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <h2 className="font-bold text-lg">All Products</h2>

        <div className="flex gap-2">
          <select onChange={(e)=>setCategory(e.target.value)} className="border p-1 text-sm rounded-md">
            <option>All categories</option>
            {categories.map((category) => (
              <option value={category} >{category}</option>
            ))}
          </select>

          <select className="border p-1 text-sm rounded-md">
            <option>Sort by Latest</option>
            <option>Sort by oldest</option>
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
      <div className="flex justify-center gap-2 mt-6 flex-wrap lg:mb-50">
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
import React from "react";
import Banner from "./Banner";
import AllProducts from "./AllProducts";

const Products = () => {
  return (
    <div className="w-full lg:w-[60%] my-3">
      <Banner
        title="Discover Amazing Products"
        des="Find the best products at best price"
      />
      <AllProducts />
    </div>
  );
};

export default Products;
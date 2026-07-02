import React from "react";
import Navbar from "../Components/Navbar";
import Categories from "../Components/Categories";
import Products from "../Components/Products/Products";
import Carts from "../Components/Carts/Carts";
import Footer from "../Components/Footer";
import Popup from "../Components/Popup";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto flex flex-col lg:flex-row gap-4 px-2">
        <Categories />
        <Products />
        <Carts />
      </div>
            <Popup/>
      <Footer />
    </div>
  );
};

export default Home;
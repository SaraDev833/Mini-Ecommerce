// import { createContext, useState } from "react";

import {  createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // add to cart 
  const addToCart = (product) => {
    const foundProduct = cart.find((item) => (
      item.id === product.id
    ));
    if (foundProduct) {
      const updatedCart = cart.map((item) => (
        item.id === foundProduct.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
      setCart(updatedCart)
    }
    else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  // 
// increase quantity fn
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => (
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))
    console.log('updatedCartIncrease:' , updatedCart)
    setCart(updatedCart)

  }
  // decrease quantity fn
  const decreaseQuantity = (id) => {
    const updatedCart = cart
    .map((item) => (
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ))
    .filter(item=> item.quantity>0 )

    setCart(updatedCart)
  }
// 

// remove
const removeCart = (id)=>{
   const removed = cart.filter((item)=>(
    item.id !== id
   ))
   setCart(removed)
}

// total count
const totalPrice = cart.reduce((total,item) => total + item.quantity * item.price, 0)


return(
  <CartContext.Provider
   value={{
     addToCart , increaseQuantity , decreaseQuantity, cart, totalPrice, removeCart
   }}
  
  >
{children}
  </CartContext.Provider>
)

}

export default CartProvider
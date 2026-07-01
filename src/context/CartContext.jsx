import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ADD PRODUCT
  const addToCart = (product) => {
    const foundProduct = cart.find(
      (item) => item.id === product.id
    );

    if (foundProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // INCREASE
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  // DECREASE
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  // REMOVE
  const removeProduct = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );
    setCart(updatedCart);
  };

  // TOTAL PRICE
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeProduct,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
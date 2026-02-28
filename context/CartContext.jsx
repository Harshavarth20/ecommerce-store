"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load cart from localStorage (client only)
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Error loading cart:", error);
    }
    setLoaded(true);
  }, []);

  // Save cart to localStorage (only after loaded)
  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.error("Error saving cart:", error);
      }
    }
  }, [cart, loaded]);

  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      increaseQuantity(product.id);
    } else {
      setCart(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {

    const existing = cart.find(item => item.id === id);

    if (!existing) return;

    if (existing.quantity === 1) {
      removeFromCart(id);
    } else {
      setCart(prev =>
        prev.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
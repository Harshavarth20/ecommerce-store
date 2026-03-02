"use client";

import { useEffect, useState } from "react";
import ProductList from "./ProductList";

export default function ProductListWrapper() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(product => ({
          id: product.id,
          name: product.title,
          price: Math.floor(product.price * 80),
          image: product.image,
          category: product.category,
          description: product.description
        }));

        setProducts(formatted);
      });
  }, []);

  return <ProductList products={products} />;
}
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "../../../context/CartContext";
import toast from "react-hot-toast";

export default function ProductDetails() {

  const params = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setProduct({
          id: data.id,
          name: data.title,
          price: Math.floor(data.price * 80),
          image: data.image,
          category: data.category,
          description: data.description
        });
      });
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="grid md:grid-cols-2 gap-8">

      <img
        src={product.image}
        className="w-full rounded-lg"
      />

      <div>

        <h1 className="text-3xl font-bold mb-4">
          {product.name}
        </h1>

        <p className="text-gray-400 mb-4">
          {product.category}
        </p>

        <p className="text-2xl mb-4">
          ₹{product.price}
        </p>

        <p className="text-gray-400 mb-6">
          {product.description}
        </p>

        <button
          onClick={() => {
            addToCart(product);
            toast.success("Added to cart");
          }}
          className="
            bg-cyan-400
            text-black
            px-6 py-3
            rounded-lg
            cursor-pointer
            hover:bg-cyan-300
          "
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}
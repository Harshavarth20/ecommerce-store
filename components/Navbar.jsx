"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {

  const { cart } = useCart();

  return (
    <nav className="bg-black border-b border-gray-800 p-4">

      <div className="max-w-6xl mx-auto flex justify-between">

        <Link href="/">
          <h1 className="text-xl font-bold text-cyan-400">
            Ecommerce
          </h1>
        </Link>

        <Link href="/cart">
          <p className="text-white">
            Cart ({cart.length})
          </p>
        </Link>

      </div>

    </nav>
  );
}
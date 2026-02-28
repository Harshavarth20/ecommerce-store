"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {

	const { addToCart } = useCart();

	return (
		<div className="
  		border border-gray-800
  		rounded-lg p-4
  		transition-all duration-300
  		hover:border-cyan-400
  		hover:shadow-lg hover:shadow-cyan-400/10
			"
		>

			<Link href={`/product/${product.id}`}>
				<img
					src={product.image}
					className="
    				w-full
    				h-40 sm:h-48 md:h-52
    				object-cover
    				rounded-md
  				"
				/>

				<h2 className="text-lg font-semibold mt-3 cursor-pointer">
					{product.name}
				</h2>
			</Link>

			<p className="text-gray-400">
				₹{product.price}
			</p>

			<button
				onClick={() => {
					addToCart(product);
					toast.success("Added to cart 🛒");
				}}
				className="
    			mt-4 w-full
    			bg-cyan-400
    			text-black
    			font-semibold
    			py-2 px-4
    			rounded-lg
    			cursor-pointer
    			transition-all duration-300
    			hover:bg-cyan-300
    			hover:scale-105
  				"
			>
				Add to Cart
			</button>

		</div>
	);
}
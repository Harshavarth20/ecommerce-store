"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { useWishlist } from "../context/WishlistContext";
import { Heart } from "lucide-react";

export default function ProductCard({ product }) {

	const { addToCart } = useCart();
	const { toggleWishlist, isWishlisted } = useWishlist();

	return (
		<div className="
      border border-gray-800
      rounded-lg p-4
      flex flex-col
      h-full
      hover:border-cyan-400
      transition-all duration-300
    ">

			{/* Wishlist Button */}
			<div className="flex justify-end mb-2">

				<Heart
					size={22}
					onClick={() => toggleWishlist(product)}
					className={`
      			cursor-pointer
      			transition-all
      			${isWishlisted(product.id)
							? "text-red-500 fill-red-500"
							: "text-gray-400 hover:text-red-400"}
    			`}
				/>

			</div>
			{/* Image */}
			<Link href={`/product/${product.id}`}>
				<img
					src={product.image}
					className="
            w-full h-48 object-contain
            rounded-md mb-4
            cursor-pointer
          "
				/>
			</Link>

			{/* Content wrapper */}
			<div className="flex flex-col flex-grow">

				{/* Product Name */}
				<Link href={`/product/${product.id}`}>
					<h2 className="
            text-lg font-semibold
            cursor-pointer
            mb-2
          ">
						{product.name}
					</h2>
				</Link>

				{/* Price */}
				<p className="text-gray-400 mb-4">
					₹{product.price}
				</p>

				{/* Push button to bottom */}
				<div className="mt-auto">

					<button
						onClick={() => {
							addToCart(product);
							toast.success("Added to cart");
						}}
						className="
              w-full
              bg-cyan-400
              text-black
              font-semibold
              py-2 px-4
              rounded-lg
              cursor-pointer
              hover:bg-cyan-300
              transition-all duration-300
            "
					>
						Add to Cart
					</button>

				</div>

			</div>

		</div>
	);
}
"use client";

import { useParams } from "next/navigation";
import { products } from "../../../data/products";
import { useCart } from "../../../context/CartContext";
import toast from "react-hot-toast";

export default function ProductDetails() {

	const params = useParams();
	const { addToCart } = useCart();

	const product = products.find(
		(p) => p.id === parseInt(params.id)
	);

	if (!product) {
		return <p>Product not found</p>;
	}

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
					Category: {product.category}
				</p>

				<p className="text-2xl mb-4">
					₹{product.price}
				</p>

				<button
					onClick={() => {
						addToCart(product);
						toast.success("Added to cart 🛒");
					}}
					className="bg-cyan-400 text-black px-6 py-3 rounded-lg cursor-pointer hover:bg-cyan-300"
				>
					Add to Cart
				</button>

			</div>

		</div>
	);
}
"use client";

import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
	const router = useRouter();

	const {
		cart,
		increaseQuantity,
		decreaseQuantity,
		removeFromCart
	} = useCart();

	const total = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	return (
		<div>

			<h1 className="text-3xl font-bold mb-8">
				Shopping Cart
			</h1>

			{cart.map(item => (

				<div
					key={item.id}
					className="
            flex items-center gap-6
            border border-gray-800
            rounded-lg p-4 mb-4
          "
				>

					{/* Image */}
					<img
						src={item.image}
						className="w-24 h-24 rounded object-cover"
					/>

					{/* Details */}
					<div className="flex-1">

						<h2 className="font-semibold">
							{item.name}
						</h2>

						<p className="text-gray-400">
							₹{item.price}
						</p>

					</div>

					{/* Quantity Controls */}
					<div className="flex items-center gap-3">

						<button
							onClick={() => decreaseQuantity(item.id)}
							className="
                w-8 h-8
                bg-gray-800
                rounded
                hover:bg-gray-700
                cursor-pointer
              "
						>
							−
						</button>

						<span>{item.quantity}</span>

						<button
							onClick={() => increaseQuantity(item.id)}
							className="
                w-8 h-8
                bg-gray-800
                rounded
                hover:bg-gray-700
                cursor-pointer
              "
						>
							+
						</button>

					</div>

					{/* Remove */}
					<button
						onClick={() => removeFromCart(item.id)}
						className="
              text-red-400
              hover:text-red-300
              cursor-pointer
            "
					>
						Remove
					</button>

				</div>

			))}

			<h2 className="text-xl font-bold mt-6">
				Total: ₹{total}
			</h2>

			{cart.length > 0 && (
				<button
					onClick={() => router.push("/checkout")}
					className="
      mt-6
      bg-cyan-400
      text-black
      px-6 py-3
      rounded-lg
      font-semibold
      cursor-pointer
      hover:bg-cyan-300
      transition-all
    "
				>
					Checkout
				</button>
			)}
		</div>
	);
}
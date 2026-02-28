"use client";

import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {

  const { cart, clearCart } = useCart();
  const router = useRouter();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {

    clearCart();

    router.push("/success");
  };

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      {/* Product List */}
      <div className="space-y-4">

        {cart.map(item => (

          <div
            key={item.id}
            className="
              flex items-center gap-6
              border border-gray-800
              rounded-lg p-4
            "
          >

            {/* Image */}
            <img
              src={item.image}
              className="w-20 h-20 rounded object-cover"
            />

            {/* Details */}
            <div className="flex-1">

              <h2 className="font-semibold">
                {item.name}
              </h2>

              <p className="text-gray-400">
                Price: ₹{item.price}
              </p>

              <p className="text-gray-400">
                Quantity: {item.quantity}
              </p>

            </div>

            {/* Subtotal */}
            <div className="font-semibold">
              ₹{item.price * item.quantity}
            </div>

          </div>

        ))}

      </div>

      {/* Total */}
      <div className="
        mt-8
        border-t border-gray-800
        pt-6
      ">

        <h2 className="text-2xl font-bold mb-4">
          Total: ₹{total}
        </h2>

        <button
          onClick={handleOrder}
          className="
            bg-green-500
            text-black
            px-6 py-3
            rounded-lg
            font-semibold
            cursor-pointer
            hover:bg-green-400
            transition-all
          "
        >
          Place Order
        </button>

      </div>

    </div>
  );
}
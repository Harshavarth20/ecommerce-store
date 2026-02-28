"use client";

import Link from "next/link";

export default function SuccessPage() {

  return (
    <div className="text-center mt-20">

      <h1 className="text-4xl font-bold text-green-400 mb-4">
        Order Successful ✓
      </h1>

      <p className="text-gray-400 mb-6">
        Thank you for your purchase.
      </p>

      <Link
        href="/"
        className="
          bg-cyan-400
          text-black
          px-6 py-3
          rounded-lg
        "
      >
        Continue Shopping
      </Link>

    </div>
  );
}
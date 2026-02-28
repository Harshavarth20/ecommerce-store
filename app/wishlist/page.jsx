"use client";

import { useWishlist } from "../../context/WishlistContext";
import ProductCard from "../../components/ProductCard";

export default function WishlistPage() {

  const { wishlist } = useWishlist();

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        My Wishlist ❤️
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-400">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-6
        ">

          {wishlist.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      )}

    </div>
  );
}
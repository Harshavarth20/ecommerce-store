"use client";

import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import { products } from "../data/products";

export default function Home() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || product.category === category)
  );

  return (
    <div className="w-full">

      <h1 className="
        text-2xl sm:text-3xl md:text-4xl
        font-bold
        mb-6
      ">
        Explore Products
      </h1>

      {/* Search + Filter container */}
      <div className="
        flex
        flex-col
        sm:flex-row
        gap-4
        mb-6
      ">

        <div className="flex-1">
          <SearchBar setSearch={setSearch} />
        </div>

        <div className="flex-1 sm:max-w-xs">
          <CategoryFilter setCategory={setCategory} />
        </div>

      </div>

      {/* Product grid */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-6
      ">

        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
}
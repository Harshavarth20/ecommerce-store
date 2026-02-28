"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

export default function ProductList({ products }) {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  let filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || product.category === category)
  );

  // SORT LOGIC
  if (sort === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "name-asc") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sort === "name-desc") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <>
      {/* Search Filter Sort Row */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">

        <div className="flex-1">
          <SearchBar setSearch={setSearch} />
        </div>

        <div className="flex-1 sm:max-w-xs">
          <CategoryFilter setCategory={setCategory} />
        </div>

        {/* SORT DROPDOWN */}
        <div className="flex-1 sm:max-w-xs">

          <select
            onChange={(e) => setSort(e.target.value)}
            className="
              w-full px-4 py-3
              bg-black border border-gray-700
              rounded-lg cursor-pointer
            "
          >
            <option value="">Sort</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="name-asc">Name: A → Z</option>
            <option value="name-desc">Name: Z → A</option>
          </select>

        </div>

      </div>

      {/* Product Grid */}
      <div className="
        grid grid-cols-1
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

    </>
  );
}
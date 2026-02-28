"use client";

export default function CategoryFilter({ setCategory }) {

  const categories = [
    "",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics"
  ];

  return (
    <select
      onChange={(e) => setCategory(e.target.value)}
      className="
        w-full px-4 py-3
        bg-black border border-gray-700
        rounded-lg
        cursor-pointer
      "
    >
      <option value="">All Categories</option>

      {categories.slice(1).map(cat => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}

    </select>
  );
}
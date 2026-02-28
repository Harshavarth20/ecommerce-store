"use client";

export default function CategoryFilter({ setCategory }) {
  return (
    <div className="w-full">
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="
          w-full
          px-4 py-3
          text-sm sm:text-base
          bg-black
          border border-gray-700
          rounded-lg
          outline-none
          focus:border-cyan-400
          transition-all
        "
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>
    </div>
  );
}
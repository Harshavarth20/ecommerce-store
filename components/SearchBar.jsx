"use client";

export default function SearchBar({ setSearch }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
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
      />
    </div>
  );
}
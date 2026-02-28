"use client";

export default function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => setSearch(e.target.value)}
      className="
        w-full
        px-4 py-3
        bg-black
        border border-gray-700
        rounded-lg
        cursor-text
        focus:border-cyan-400
        outline-none
      "
    />
  );
}
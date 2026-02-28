"use client";

import { useRouter, usePathname } from "next/navigation";

export default function BackButton() {

  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="mt-6">

      <button
        onClick={() => router.back()}
        className="
          text-cyan-400
          hover:text-cyan-300
          cursor-pointer
          transition-all
        "
      >
        ← Back
      </button>

    </div>
  );
}
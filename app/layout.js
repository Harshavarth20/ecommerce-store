"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import { CartProvider } from "../context/CartContext";
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from "../context/WishlistContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">

        <CartProvider>
          <WishlistProvider>
            <Navbar />

            <main className="flex-1 max-w-6xl mx-auto w-full p-6 flex flex-col">
              <div className="flex-1">
                {children}
              </div>

              <BackButton />
            </main>

            {/* Toast container */}
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "#111",
                  color: "#22d3ee",
                  border: "1px solid #22d3ee"
                }
              }}
            />
          </WishlistProvider>
        </CartProvider>

      </body>
    </html>
  );
}
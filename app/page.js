export const dynamic = "force-dynamic";

import ProductList from "../components/ProductList";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status);
      return [];
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("Invalid data:", data);
      return [];
    }

    return data;

  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export default async function Home() {

  const products = await getProducts();

  const formattedProducts = products.map(product => ({
    id: product.id,
    name: product.title,
    price: Math.floor(product.price * 80),
    image: product.image,
    category: product.category,
    description: product.description
  }));

  return (
    <div className="w-full">

      <h1 className="text-3xl font-bold mb-6">
        Explore Products
      </h1>

      <ProductList products={formattedProducts} />

    </div>
  );
}
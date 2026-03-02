import ProductList from "../components/ProductList";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return await res.json();

  } catch (error) {
    console.error("API Error:", error);
    return []; // prevent crash
  }
}

export default async function Home() {

  const products = await getProducts();

  // transform API data
  const formattedProducts = (products || []).map(product => ({
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
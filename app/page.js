import ProductList from "../components/ProductList";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {

  const products = await getProducts();

  // transform API data
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
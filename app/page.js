import ProductListWrapper from "../components/ProductListWrapper";

export default function Home() {
  return (
    <div className="w-full">

      <h1 className="text-3xl font-bold mb-6">
        Explore Products
      </h1>

      <ProductListWrapper />

    </div>
  );
}
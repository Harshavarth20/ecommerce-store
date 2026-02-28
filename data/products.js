export const products = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: 1000 + index * 150,
  image: `https://picsum.photos/400?random=${index + 1}`,
  category: index % 2 === 0 ? "Electronics" : "Fashion",
  description: "High-quality product"
}));
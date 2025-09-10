import { getProducts } from "@/services/productService";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Welcome to E-Shop!</h1>
        <p className="text-secondary fs-5">
          Discover amazing products at unbeatable prices.
        </p>
      </div>

      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}

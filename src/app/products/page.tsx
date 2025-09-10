"use client";
import { useSearch } from "@/context/SearchContext";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

export default function ProductsPage() {
  const { query } = useSearch();
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setFiltered(products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    ));
  }, [query, products]);

  if (loading) return <p className="text-center mt-5">Loading products...</p>;

  return (
    <div className="container my-4">
      {query && <h2 className="mb-3">Results for "{query}"</h2>}
      {filtered.length > 0 ? (
        <div className="row g-3">
          {filtered.map(p => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3 col-xl-2 d-flex">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-5">No products found</p>
      )}
    </div>
  );
}

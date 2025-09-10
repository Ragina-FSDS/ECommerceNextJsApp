// services/productService.ts
import { Product } from "@/types";
import { apiGet } from "@/lib/api";


export async function getProducts(): Promise<Product[]> {
  return apiGet<Product[]>("/products");
}


export async function getProductById(id: number): Promise<Product> {
  return apiGet<Product>(`/products/${id}`);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const products = await getProducts();
  return products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );
}

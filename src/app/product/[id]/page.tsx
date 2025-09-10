import { Metadata } from "next";
import { getProductById } from "@/services/productService";
import Rating from "@/components/Rating";
import { Product } from "@/types";
import AddToCartButton from "./AddToCartButton";

type PageProps = {
  params: { id: string } | any; // 👈 Loosen type
};

// Helper
async function getProduct(id: string): Promise<Product> {
  return await getProductById(Number(id));
}

// Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await getProduct(params.id);
  return {
    title: `${product.title} | ZentroShop`,
    description: product.description.slice(0, 150) + "...",
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.image, width: 300, height: 300, alt: product.title }],
    },
  };
}

// Page
export default async function ProductDetailPage({ params }: PageProps) {
  const product = await getProduct(params.id);
  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-12 col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="display-6 fw-bold mb-3">{product.title}</h1>
          <Rating rate={product.rating.rate} count={product.rating.count} />
          <p className="fs-4 fw-bold mt-3 mb-3">${product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

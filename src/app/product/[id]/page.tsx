import { Metadata } from "next";
import { getProductById } from "@/services/productService";
import Rating from "@/components/Rating";
import { Product } from "@/types";
import AddToCartButton from "./AddToCartButton";

type Props = { params: { id: string } };

// ✅ Generate dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product: Product = await getProductById(Number(params.id));

  return {
    title: `${product.title} | E-Shop`,
    description: product.description.slice(0, 150) + "...",
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 300,
          height: 300,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const product: Product = await getProductById(Number(params.id));

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {/* Product image */}
        <div className="col-12 col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        {/* Product details */}
        <div className="col-12 col-md-6">
          <h1 className="display-6 fw-bold mb-3">{product.title}</h1>
          <Rating rate={product.rating.rate} count={product.rating.count} />
          <p className="fs-4 fw-bold mt-3 mb-3">${product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>

          {/* ✅ Client-side Add to Cart button */}
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

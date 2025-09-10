import Link from "next/link";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card h-100 border-0 shadow-sm product-card">
      <Link
        href={`/product/${product.id}`}
        className="text-decoration-none text-dark"
      >
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top p-3"
          style={{ height: "180px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column p-2">
          {/* Title */}
          <h6 className="card-title fw-semibold text-truncate">
            {product.title}
          </h6>

          {/* Description (2 lines max) */}
          <p
            className="card-text text-muted small mb-2"
            style={{
              WebkitLineClamp: 2,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.description}
          </p>

          {/* Price */}
          <div className="fw-bold text-danger mb-2">${product.price}</div>

          {/* Add to Cart */}
          <button className="btn btn-sm btn-warning w-100 mt-auto">
            View
          </button>
        </div>
      </Link>
    </div>
  );
}

"use client";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }: { product: Product }) {
    const { addItem } = useCart();
    const router = useRouter();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addItem(product, 1);
        setAdded(true);
        setTimeout(() => {
            router.push("/products");
        }, 1500);
    };

    return (
        <div className="position-relative">
            <button
                onClick={handleAddToCart}
                className="btn btn-primary w-100 w-md-auto"
                style={{ minWidth: "150px" }}
            >
                Add to Cart
            </button>

            {added && (
                <div
                    className="position-absolute top-100 start-50 translate-middle alert alert-success mt-2 p-1 text-center"
                    style={{ minWidth: "150px", zIndex: 1000 }}
                >
                    Item added! Redirecting...
                </div>
            )}
        </div>
    );
}

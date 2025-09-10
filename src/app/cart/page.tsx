// app/cart/page.tsx
"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, updateItemQuantity, removeItem, totalItems, totalPrice, clearCart } =
    useCart();

  if (cart.length === 0)
    return <p className="p-4 text-center fs-4">Your cart is empty.</p>;

  return (
    <div className="container my-5">
      <h1 className="mb-4 display-5 fw-bold text-center">Shopping Cart</h1>
      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          {cart.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="card mb-3 shadow-sm border-0 rounded-3"
            >
              <div className="row g-0 align-items-center">
                <div className="col-md-3 text-center">
                  <img
                    src={product.image || "/placeholder.png"}
                    alt={product.title}
                    className="img-fluid p-2"
                    style={{ maxHeight: "120px", objectFit: "contain" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-muted">${product.price.toFixed(2)}</p>
                    <div className="d-flex align-items-center gap-2">
                      <span>Qty:</span>
                      <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) =>
                          updateItemQuantity(product.id, Number(e.target.value))
                        }
                        className="form-control w-25"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <p className="fw-bold mb-2">${(product.price * quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm rounded-3 p-3 sticky-top" style={{ top: "80px" }}>
            <h4 className="mb-3">Order Summary</h4>
            <p className="d-flex justify-content-between">
              Items ({totalItems}):
              <span>${totalPrice.toFixed(2)}</span>
            </p>
            <hr />
            <button className="btn btn-primary w-100 mb-2">
              Proceed to Checkout
            </button>
            <button className="btn btn-outline-danger w-100" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

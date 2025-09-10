"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { CartItem, Product } from "@/types";

interface CartContextType {
    cart: CartItem[];
    addItem: (product: Product, quantity?: number) => void;
    removeItem: (productId: number) => void;
    updateItemQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [toast, setToast] = useState<{ product: Product; visible: boolean } | null>(null);
    // Load cart from localStorage on mount
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) setCart(JSON.parse(storedCart));
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const showToast = (product: Product) => {
        setToast({ product, visible: true });
        setTimeout(() => setToast(null), 4500); // auto-hide after 2.5s
    };


    const addItem = (product: Product, quantity: number = 1) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.product.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prev, { product, quantity }];
            }
        });
    };

    const removeItem = (productId: number) => {
        setCart((prev) => prev.filter((item) => item.product.id !== productId));
    };

    const updateItemQuantity = (productId: number, quantity: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.product.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, updateItemQuantity, clearCart, totalItems, totalPrice }}
        >
            {children}
            {/* Amazon-style toast */}
            {toast?.visible && (
                <div
                    className="position-fixed top-0 end-0 m-3"
                    style={{ zIndex: 9999, maxWidth: "300px", pointerEvents: "auto" }}
                >
                    <div
                        className="d-flex align-items-center bg-white border shadow-sm rounded p-2 animate-fade"
                        style={{ transition: "all 0.3s ease", cursor: "pointer" }}
                        onClick={() => setToast(null)}
                    >
                        <img
                            src={toast.product.image || "/placeholder.png"}
                            alt={toast.product.title}
                            className="rounded me-2"
                            style={{ width: "50px", height: "50px", objectFit: "contain" }}
                        />
                        <div>
                            <strong>{toast.product.title}</strong>
                            <div className="text-success">Added to cart</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Fade animation */}
            <style jsx>{`
        .animate-fade {
          opacity: 0;
          transform: translateX(50%);
          animation: fadeInRight 0.3s forwards;
        }

        @keyframes fadeInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </CartContext.Provider>
    );
};

// Custom hook for easier usage
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};

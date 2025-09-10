"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useSearch } from "@/context/SearchContext";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const { cart } = useCart();
  const { query, setQuery } = useSearch();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          {/* Logo */}
          <Link
            href="/"
            className="navbar-brand fw-bold text-warning"
            onClick={() => setQuery("")}
          >
           <img
              src="/Logo2.png" 
              alt="E-Shop Logo"
              width={100}
              height={60}
              className="me-2"
            />
          </Link>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link" onClick={() => setQuery("")}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Global Search */}
            <div
              className="d-flex mx-3 flex-grow-1"
              style={{ maxWidth: "600px" }}
            >
              <input
                type="search"
                className="form-control rounded-0 rounded-start"
                placeholder="Search products..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (pathname !== "/products") {
                    router.push("/products");
                  }
                }}
              />
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="btn btn-outline-light position-relative"
            >
              <i className="bi bi-cart-fill me-1"></i> Cart
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

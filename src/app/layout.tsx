import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "Built with App Router and Bootstrap",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <SearchProvider>
          <CartProvider>
            <Header />
            <main className="flex-grow-1">{children}</main>
            <Footer />
          </CartProvider>
        </SearchProvider>
      </body>
    </html>
  );
}

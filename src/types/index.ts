// types/index.ts

// Product type based on FakeStore API
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Cart item type (product + quantity)
export interface CartItem {
  product: Product;
  quantity: number;
}

// Contact form type
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Generic API response wrapper (optional)
export interface ApiResponse<T> {
  data: T;
  error?: string;
}

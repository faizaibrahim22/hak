import { Product } from "../../../types/products";

// Function to check if localStorage is available
const isLocalStorageAvailable = () => typeof window !== "undefined";

// Function to add a product to the cart
export const addToCart = (product: Product) => {
  if (!isLocalStorageAvailable()) return;

  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingProductIndex = cart.findIndex((item) => item._id === product._id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to get the cart items from localStorage
export const getCartItems = (): Product[] => {
  if (!isLocalStorageAvailable()) return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

// Function to remove a product from the cart
export const removeFromCart = (id: string) => {
  if (!isLocalStorageAvailable()) return;

  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const updatedCart = cart.filter((item) => item._id !== id);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

// ✅ Function to update product quantity in cart
export const updateCartQuantity = (id: string, quantity: number) => {
  if (!isLocalStorageAvailable()) return;

  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const updatedCart = cart.map((item) =>
    item._id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
  );

  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

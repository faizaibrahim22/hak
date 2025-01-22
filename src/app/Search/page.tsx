"use client";

import { useState } from "react";
import Image from "next/image";
const products = [
  { id: 1, name: "Stylish T-Shirt", image: "/sofa.jpg", description: "Cotton T-Shirt" },
  { id: 2, name: "Classic Sneakers", image: "/sofa2.jpg", description: "Comfortable sneakers" },
  { id: 3, name: "Denim Jeans", image: "/sofa3.jpg", description: "Denim Jeans" },
  { id: 4, name: "Jeans", image: "/sofa4.jpg", description: " Jeans" },
  { id: 5, name: "Casual Jeans", image: "/sofa5.jpg", description: " Jeans" },
  { id: 6, name: "Casual Jeans", image: "/sofa6.jpg", description: " Jeans comfortable" },
  { id: 7, name: "Casual Jeans", image: "/sofa7.jpg", description: " Jeans" },
  { id: 8, name: "Casual Jeans", image: "/sofa8.jpg", description: " Tropical Vibe" },
  { id: 9, name: "Jeans comfortable", image: "/sofa9.jpg", description: " Jeans comfortable" },
  { id: 10, name: "Poplar The suede sofa", image: "/sofa10.jpg", description: " PoplarThe  suede sofa" },
  { id: 11, name: "Bed", image: "/bed.jpg", description: " bed" },
  { id: 12, name: "Casual Jeans", image: "/bed1.jpg", description: " comfortable bed" },
  { id: 13, name: "sofa bed", image: "/bed2.jpg", description: "Bed" },
  { id: 14, name: "sofa bed", image: "/beb sofa.jpg", description: "Bed sofa" },
];

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="p-8">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search products..."
        className="p-2 border rounded mb-4 w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

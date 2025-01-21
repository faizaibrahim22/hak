"use client";
import React, { useState } from "react";

interface Product {
  id: string;
  name: string;
  tags: string[];
  description: string;
}

interface ProductSearchProps {
  products: Product[];
}

const ProductSearch = ({ products }: ProductSearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // State for search input

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products by name or tag..."
        className="border rounded-lg p-2 w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
      />

      {/* Display Filtered Products */}
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 mb-4 rounded-lg">
              <h2 className="font-bold text-xl">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex mt-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-lg text-sm mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;

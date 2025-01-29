"use client";
import React, { useState } from "react";
import Image from "next/image";


const ProductView: React.FC = () => {
  const [product, setProduct] = useState({
    name: "Products",
    price: 400,
    color: "Yellow",
    image: "/yellow-sofa.jpg",
  });

  const [showProduct, setShowProduct] = useState(true);

  // Dynamic color map
  const colorMap: Record<string, string> = {
    Yellow: "/yellow-sofa.jpg",
    Blue: "/blue-sofa.jpg",
    Red: "/red-sofa.jpg",
  };

  // Handle color change
  const handleColorChange = (color: string) => {
    if (colorMap[color]) {
      setProduct({ ...product, color, image: colorMap[color] });
    }
  };

  const handleRemove = () => {
    setShowProduct(false);
  };

  if (!showProduct) {
    return (
      <p className="text-yellow-500 font-thin">
        No product selected. Please choose another product.
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <Image
        src={product.image}
        alt={`Image of ${product.color} ${product.name}`}
        width={300}
        height={200}
        className="rounded-lg shadow-lg"
      />
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <p className="font-bold text-xl">Price: ${product.price}</p>
        <p className="font-bold">Color: {product.color}</p>
      </div>

      <div className="flex items-center space-x-4">
        <h4 className="text-sm font-bold">Select Color:</h4>
        <button
          className="bg-yellow-500 text-white rounded-xl px-3 py-1"
          aria-label="Select Yellow"
          onClick={() => handleColorChange("Yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-blue-800 text-white rounded-xl px-3 py-1"
          aria-label="Select Blue"
          onClick={() => handleColorChange("Blue")}
        >
          Blue
        </button>
        <button
          className="bg-red-700 text-white rounded-xl px-3 py-1"
          aria-label="Select Red"
          onClick={() => handleColorChange("Red")}
        >
          Red
        </button>
      </div>

      <button
        className="bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700"
        onClick={handleRemove}
      >
        Remove Product
      </button>
    </div>
  );
};

export default ProductView;

"use client"
import React, { useState } from 'react';
import Image from 'next/image';
const ProductView: React.FC = () => {
  const [product, setProduct] = useState({
    name: 'Products',
    price: 400,
    color: 'Yellow',
    image: '/yellow-sofa.jpg',
  });

  const [showProduct, setShowProduct] = useState(true);

  // Dynamic color map
  const colorMap: Record<string, string> = {
    Yellow: '/yellow-sofa.jpg',
    Blue: '/blue-sofa.jpg',
    Red: '/red-sofa.jpg',
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
    return <p className='text-yellow-500 font-thin'>No product selected. Please choose another product.</p>;
  }

  return (
    <div>
      <Image 
       src={product.image}
       alt={product.name} 
       width={300}
       height={100}

       />
       <div className='relative ml-96 bottom-96 left-60'>
      <h2>{product.name}</h2>
      <p className='font-bold text-xl'>Price: ${product.price}</p>
      <p className='font-bold'>Color: {product.color}</p>

      <h4 className='text-sm font-bold'>Select Color:</h4>
      <button  className=" bg-yellow-500 text-white rounded-xl w-6"onClick={() => handleColorChange('Yellow')}>Y</button>
      <button  className=" bg-blue-800 text-white rounded-xl w-6"onClick={() => handleColorChange('Blue')}>B</button>
      <button  className="bg-red-700 text-white rounded-xl w-6"onClick={() => handleColorChange('Red')}>R</button>

      <br />
      <button  className="bg-black text-black rounded-md  "onClick={handleRemove} style={{ marginTop: '20px', color: 'red' }}>
        Remove Product
      </button>
      </div>
    </div>
  );
};

export default ProductView;

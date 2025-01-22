"use client";

import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/sanity";
import Image from "next/image";

import ProductView from "@/app/components/productview";
import BillingDetails from "@/app/components/BillingDetails";
import PaymentDetails from "@/app/components/PaymentDetails";
import Footer from "@/app/components/Footer";

// Define the Product interface properly
interface Product {
  name: string;
  id: string;
  price: string;
  description: string;
  image: { asset: { url: string; _type: string } }; // Improved image type
  sizes: string[];
  colors: string[];
}

// Define the FormData type with billingAddress and paymentDetails
interface PaymentDetailsData {
  cardNumber: string;
  expiryDate: string;
}

interface FormData {
  billingAddress: string;
  paymentDetails: PaymentDetailsData;
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<FormData>({
    billingAddress: "",
    paymentDetails: {
      cardNumber: "",
      expiryDate: "",
    },
  });

  
  useEffect(() => {
    const fetchProduct = async () => {
      const result = await client.fetch(
        `*[_type == "product" && slug.current == $slug][0...20]{
          name,
          price,
          id,
          description,
          image,
          sizes,
          colors
        }`,
        
      );
      setProduct(result);
    };

  
      fetchProduct();
  }, []);

  const handleChange = (updatedData: FormData) => {
    setFormData(updatedData);
  };

  if (!product) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="p-6">
        {/* Fix image rendering to match required format */}
        <Image
          src={product.image?.asset?.url || "/fallback.jpg"}
          alt={product.name}
          width={600}
          height={400}
          className="rounded-lg"
        />

        <div className="relative bottom-80 ml-96 left-60">
          <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
          <p className="text-xl text-red-600 mt-2">${product.price}</p>

      <p className="text-black mt-4">{product.description}</p>
      
      </div>
      

        {/* Product View */}
        <ProductView />

        {/* Billing Details */}
        <BillingDetails formData={formData} onChange={handleChange} />

        {/* Payment Details */}
        <PaymentDetails formData={formData} onChange={handleChange} />
      </div>
      <div  className="relative top-96 py-44">
        <Footer/>
        </div>
        </div>
    
  );
};

export default ProductDetail;

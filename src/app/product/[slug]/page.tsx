"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { client } from "../../../sanity/lib/sanity";
import Image from "next/image";

import ProductView from "@/app/components/productview";
import BillingDetails from "@/app/components/BillingDetails";
import PaymentDetails from "@/app/components/PaymentDetails";
import Footer from "@/app/components/Footer";


interface Product {
  name: string;
  id: string;
  price: string;
  description: string;
  image: { asset: { url: string; _type: string } };
  sizes: string[];
  colors: string[];
}

// FormData interface
interface PaymentDetailsData {
  cardNumber: string;
  expiryDate: string;
}

interface FormData {
  billingAddress: string;
  paymentDetails: PaymentDetailsData;
}

const ProductDetail = () => {
  const router = useRouter();
  const slug = typeof window !== "undefined" ? window.location.pathname.split("/").pop() : null;

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
      if (!slug) return;

      try {
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
          { slug }
        );

        setProduct(result);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [slug]);

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


      <Image
  src={product.image?.asset?.url || "/fallback.jpg"}
  alt={product.name || "Product Image"} // Provide a fallback alt text
  width={600}
  height={400}
  className="rounded-lg"
/>


        <div className="relative bottom-80 ml-96 left-60">
          <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
          <p className="text-xl text-red-600 mt-2">${product.price}</p>
          <p className="text-black mt-4">{product.description}</p>
        </div>

        <ProductView />
        <BillingDetails formData={formData} onChange={handleChange} />
        <PaymentDetails formData={formData} onChange={handleChange} />
      </div>

      <div className="relative top-96 py-44">
        <Footer />
      </div>
    </div>

  );
};

export default ProductDetail; 

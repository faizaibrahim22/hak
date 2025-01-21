
import React from "react";
import { client, urlFor } from "../../../sanity/lib/sanity";
import Image from "next/image";
import { colors } from "@mui/material";
import ProductView from "@/app/components/productview";
import BillingDetails from "@/app/components/BillingDetails"
import Payment from "@/app/components/PaymentDetails"
import Footer from "@/app/components/Footer";

interface Product {
  name: string;
  id:string;
  price: string;
  description: string;
  image: any;
  sizes: string[];
  colors: string[];
  
}


const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  // Fetch the product using Sanity query
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      name,
      price,
      id,
      description,
      image,
      sizes,
      colors
    }`,
    { slug: params.slug }
  );

  // Return a not found message if the product is not found
  if (!product) {
    return <div>Product not found!</div>;
  }
  
  return (
    <div>
    <div className="p-6">
      {/* Display product image */}
      <Image
        src={urlFor(product.image)?.width(600).height(400).url() || "/fallback.jpg"}
        alt={product.name}
        width={600}
        height={400}
        className="rounded-lg"
      />
      
      <div className="relative bottom-80 ml-96 left-60">
      <h1 className="text-3xl font-bold mt-4 ">{product.name}</h1>
      <p className="text-xl text-red-600 mt-2">${product.price}</p>

      <p className="text-black mt-4">{product.description}</p>
      </div>
      

        <ProductView />
        
        <BillingDetails/>
        <Payment/>

        
        
      </div>
      <div  className="relative top-96 py-44">
        <Footer/>
        </div>
        </div>
    
  );
};

export default ProductDetail;

"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Product from "@/app/product/id/page";
import { products as productData } from "@/app/product/data";

export interface ProductL {
  id: number;
  name: string | "";
  sale?: string;
  price: number;
  rating: number;
  reviews: number;
  answers: number;
  inStock: boolean; // Make this a boolean
  delivery: string;
  deliveryDate: string;
  category: string;
  video?: string;
  model: string;
  size?: string[];
  images: string[];
  features: string[];
  description: string;
}

const Hospital = () => {
  const params = useParams();
  const productId = params?.id;
  const [selectedProduct, setSelectedProduct] = useState<ProductL | null>(null);

  useEffect(() => {
    if (productId) {
      const foundProduct = productData.find(
        (product) => product.id === Number(productId)
      );
      setSelectedProduct(foundProduct || null);
    }
  }, [productId]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('/api/product');
  //       const data = await response.json();

  //       const productsArray = Array.isArray(data)
  //         ? data
  //         : data.data
  //         ? data.data
  //         : [];

  //       if (productId !== null) {
  //         console.log("numericId: ", productId);
  //         const foundProduct = productsArray.find((p) => p.id === productId);
  //         setSelectedProduct(foundProduct || null);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   }

  //   if (productId !== null) { // Check if productId exists before fetching
  //     fetchData();
  //   }
  // }, [productId]);
  // useEffect(() => {
  //   if (numericId !== null && !isNaN(numericId)) {
  //     console.log("numericId: ", numericId)
  //     const foundProduct = productData.find((p) => p.id === numericId);
  //     setSelectedProduct(foundProduct || null);
  //   }
  // }, [numericId]);

  if (!selectedProduct) {
    return <div className="p-4">Loading or Product not found</div>;
  }

  return (
    <div className="relative flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8 py-12">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">{selectedProduct.name}</h1>
        <Product product={selectedProduct} />
      </div>
    </div>
  );
};

export default Hospital;

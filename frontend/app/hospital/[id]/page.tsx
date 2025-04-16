"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ProductCard } from "@/components/ui/product-card";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductSkeleton } from "@/components/products/product-skeleton";
import { products as productData } from "@/app/product/data";
import Product from "@/app/product/id/page";

export interface ProductL {
  id: number;
  name: string | "";
  sale?: string;
  price: number;
  rating: number;
  reviews: number;
  answers: number;
  inStock: boolean;
  delivery: string;
  deliveryDate: string;
  seller: string;
  color?: string[];
  category: string;
  video?: string;
  model: string;
  size?: string[];
  images: string[];
  features: string[];
  description: string;
  chartData: any[]; // You can replace with actual ChartData interface
}

const Hospital = () => {
  const params = useParams();
  const productId = params?.id;

  // Convert string to number (only if it's a single string, not an array)

  const [selectedProduct, setSelectedProduct] = useState<ProductL | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/product");
        const data = await response.json();

        const productsArray = Array.isArray(data)
          ? data
          : data.data
          ? data.data
          : [];

        if (productId !== null) {
          console.log("numericId: ", productId);
          const foundProduct = productsArray.find((p) => p.id === productId);
          setSelectedProduct(foundProduct || null);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    if (productId !== null) {
      // Check if productId exists before fetching
      fetchData();
    }
  }, [productId]);
  // useEffect(() => {
  //   if (numericId !== null && !isNaN(numericId)) {
  //     console.log("numericId: ", numericId)
  //     const foundProduct = productData.find((p) => p.id === numericId);
  //     setSelectedProduct(foundProduct || null);
  //   }
  // }, [numericId]);

  if (!selectedProduct) {
    return <div className="p-4">Уншиж байна</div>;
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

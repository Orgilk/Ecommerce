"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ProductCard } from "@/components/ui/product-card";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductSkeleton } from "@/components/products/product-skeleton";
import Product from "../../product/id/page";
import { products as productData } from '@/app/product/data';

export interface Product {
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
  const numericId = typeof productId === "string" ? parseInt(productId, 10) : null;

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (numericId !== null && !isNaN(numericId)) {
      console.log("numericId: ", numericId)
      const foundProduct = productData.find((p) => p.id === numericId);
      setSelectedProduct(foundProduct || null);
    }
  }, [numericId]);

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

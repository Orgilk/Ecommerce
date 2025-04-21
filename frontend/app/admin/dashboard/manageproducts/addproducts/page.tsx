"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { Plus, Save, ChevronDown, Truck, Box, Logs, Shirt } from "lucide-react";
import FileUploadInProductAdd from "@/components/FileUploadInProductAdd";



interface ProductData {
  name: string;
  price: number;
  rating: number;
  reviews: number;
  inStock: number;
  delivery: string;
  deliveryDate: string;
  seller: string;
  color: string[];
  category: string;
  model: string;
  size: string[];
  images: string[];
  features: string[];
  description: string;
  chartData: { month: string; revenue: number }[];
}

const ProductCreationForm: React.FC = () => {
  const [productData, setProductData] = useState<ProductData>({
    name: "",
    price: 0,
    rating: 0,
    reviews: 0,
    inStock: 0,
    delivery: "",
    deliveryDate: "5-7 өдөрт хүргэнэ",
    seller: "",
    color: [],
    category: "",
    model: "",
    size: [],
    images: [],
    features: [],
    description: "",
    chartData: [],
  });


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    productData.inStock = parseInt(productData.inStock.toString(), 10);
    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("Product created successfully!");
      } else {
        const error = await response.json();
        toast.error(`Error: ${error.message}`);
      }
    } catch (error) {
      toast.error("Failed to create product");
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-10">
      <Toaster position="top-right" />
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-8 space-y-6"
      >
        <h1 className="text-3xl font-bold text-red-800 mb-6 text-center">
           Бараа нэмэх
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
              placeholder="Барааны нэр"
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
            <Plus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
          </div>
          <div className="relative">
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              placeholder="Үнэ"
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">
              ₮
            </span>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              name="delivery"
              value={productData.delivery}
              onChange={handleInputChange}
              placeholder="Хүргэлтийн төрөл"
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <Truck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
          </div>
          <div className="relative">
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              placeholder="Барааны төрөл"
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <Logs className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="number"
              name="inStock"
              value={productData.inStock}
              onChange={handleInputChange}
              placeholder="Тоо ширхэг"
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <Box className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
          </div>
          <div className="relative">
            <input
              type="text"
              name="model"
              value={productData.model}
              onChange={handleInputChange}
              placeholder="Шүүлтүүрийн төрөл"
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <Shirt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
          </div>
        </div>

        <FileUploadInProductAdd
          products={productData}
          setProductData={setProductData}
        />

        <div className="relative">
          <textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            placeholder="Барааны мэдээлэл"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 min-h-[150px]"
          />
          <Plus className="absolute left-3 top-4 text-red-500" />
        </div>

        <div className="flex justify-center">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-red-500 text-white rounded-lg flex items-center"
          >
            <Save className="mr-2" />
            Хадгалах
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default ProductCreationForm;

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Save,
  X,
  ChevronDown,
  Calendar,
  Truck,
  Loader2,
  Shirt,
  Box,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/components/Loader";
import Image from "next/image";



interface ProductData {
  _id?: string;
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
  features: string[];
  description: string;
  chartData: { month: string; revenue: number }[];
  images?: string[];
}

const ProductUpdateForm: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [productData, setProductData] = useState<ProductData>({
    name: "",
    price: 0,
    rating: 0,
    reviews: 0,
    inStock: 0,
    delivery: "",
    deliveryDate: "",
    seller: "",
    color: [],
    category: "",
    model: "",
    size: [],
    features: [],
    description: "",
    chartData: [],
  });


  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const pathname = window.location.pathname;
        const productId = pathname.split("/").pop();

        if (!productId) {
          throw new Error("Product ID oldsongui");
        }

        const response = await fetch(`/api/product/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }

        const result = await response.json();
        console.log("Fetch product data:", result); 

        if (result.success && result.data) {
          const formattedData = {
            ...result.data,
            color: Array.isArray(result.data.color) ? result.data.color : [],
            size: Array.isArray(result.data.size) ? result.data.size : [],
            features: Array.isArray(result.data.features)
              ? result.data.features
              : [],
          };
          console.log("Formatted data:", formattedData); 
          setProductData(formattedData);
        } else {
          throw new Error(result.error || "Failed");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Faileda");
        router.push("/admin/dashboard/manageproducts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, [router]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let parsedValue = value;

    if (name === "price" || name === "inStock") {
      parsedValue = (parseFloat(value) || 0).toString();
    }

    setProductData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const pathname = window.location.pathname;
      const productId = pathname.split("/").pop();

      if (!productId) {
        throw new Error("Product ID not found");
      }

      const dataToSend = {
        ...productData,
        price: Number(productData.price),
        inStock: Number(productData.inStock),
        rating: Number(productData.rating),
        reviews: Number(productData.reviews),
        color: Array.isArray(productData.color) ? productData.color : [],
        size: Array.isArray(productData.size) ? productData.size : [],
        features: Array.isArray(productData.features)
          ? productData.features
          : [],
      };
 
      console.log("Sending update data:", dataToSend);
      const response = await fetch(`/api/product/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed");
      }

      toast.success("Success");
      router.refresh();
    } catch (error) {
      console.error("failed:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed"
      );
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto mt-10 bg-white shadow-2xl rounded-2xl p-8 space-y-6"
    >
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold text-red-800 mb-6 text-center">
        Барааны мэдээлэл өөрчлөх
      </h1>

      {/* Basic Information */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            placeholder="Product Name"
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
            placeholder="Price"
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
            placeholder="Delivery Type"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
          />
          <Truck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
        </div>
        <div className="relative">
          <input
            type="text"
            name="deliveryDate"
            value={productData.deliveryDate}
            onChange={handleInputChange}
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300
                        text-gray-600 appearance-none"
          />
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
        </div>
      </div>

      {/* Description */}
      <div className="relative">
        <textarea
          name="description"
          value={productData.description}
          onChange={handleInputChange}
          placeholder="Product Description"
          className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 min-h-[150px]"
        />
        <Plus className="absolute left-3 top-4 text-red-500" />
      </div>

      {/* Stock and Category */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="number"
            name="inStock"
            value={productData.inStock}
            onChange={handleInputChange}
            placeholder="Stock Quantity"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
          />
          <Box className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
        </div>
        <div className="relative">
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            placeholder="Category"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
          />
          <Plus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
        </div>
      </div>

      {/* Model and Seller */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="text"
            name="model"
            value={productData.model}
            onChange={handleInputChange}
            placeholder="Model Number"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
          />
          <Shirt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
        </div>
        <div className="relative">
          <input
            type="text"
            name="seller"
            value={productData.seller}
            onChange={handleInputChange}
            placeholder=" Нийлүүлэгчийн нэр"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
          />
          <Plus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
        </div>
      </div>

      {/* Rating and Reviews */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="number"
            name="rating"
            value={productData.rating}
            onChange={handleInputChange}
            placeholder="Rating (0-5)"
            min="0"
            max="5"
            step="0.1"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">
            ★
          </span>
        </div>
        <div className="relative">
          <input
            type="number"
            name="reviews"
            value={productData.reviews}
            onChange={handleInputChange}
            placeholder="Number of Reviews"
            min="0"
            className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500">
            #
          </span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productData.images?.map((image: any, index: number) => (
          <div key={index} className="relative">
            <Image
              src={image}
              objectFit="contain"
              width={500}
              height={500}
              alt={`Product Image ${index + 1}`}
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Submit and Cancel Buttons */}
      <div className="flex space-x-4 pt-6">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors disabled:bg-red-400"
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <Loader2 className="animate-spin mr-2" />
              Засаж байна...
            </>
          ) : (
            <>
              <Save className="mr-2" />
              Засах
            </>
          )}
        </motion.button>

        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/admin/dashboard/manageproducts")}
          className="flex items-center justify-center bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
          disabled={isSaving}
        >
          <X className="mr-2" />
          Буцах
        </motion.button>
      </div>
   
    </motion.form>
  );
};

export default ProductUpdateForm;

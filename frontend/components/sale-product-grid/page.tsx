"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ImageOff, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface Product {
  _id: string;
  name: string;
  description?: string;
  category: string;
  price: number;
  size?: string[];
  image?: string;
}

const ProductGridComponent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const router = useRouter();
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
        setProducts(productsArray.slice(0, 8));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchData();
  }, []);

  const handleImageError = (productId: string) => {
    setImageErrors((prev) => ({ ...prev, [productId]: true }));
  };

  return (
    <motion.div
      className="container mx-auto px-2 sm:px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {products.map((product: any) => {
          const redirectLink =
            product.redirectLink || `/pharmacy/${product.id}`;
          const hasValidImage = !imageErrors[product._id];

          return (
            <motion.div
              key={product._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-[400px] sm:h-[490px] flex flex-col"
              whileHover={{ y: -5 }}
            >
              <Link href={redirectLink} className="block h-full">
                <div className="relative h-[250px] sm:h-[300px]">
                  <div className="relative w-full h-full bg-gray-50">
                    {hasValidImage ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        onError={() => handleImageError(product._id)}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                        <ImageOff className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
                      </div>
                    )}
                    {product.inStock <= 5 && product.inStock > 0 && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-md text-xs">
                        {/* барааны үлдэгдэл {product.inStock} ! */}
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="font-semibold text-gray-800 text-sm sm:text-base truncate hover:text-red-600 transition-colors line-clamp-2">
                    {product.name}
                  </h2>
                  <div className="flex items-center gap-1 my-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={
                            i < Math.floor(product.rating) ? "#ef4444" : "none"
                          }
                          className="text-red-500"
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex flex-col">
                        <span className="text-sm sm:text-xl font-bold text-gray-900">
                          ₮{product.price.toLocaleString("en-Mn")}
                        </span>
                        {product.delivery && (
                          <span className="text-xs text-gray-500">
                            {product.deliveryDate}
                          </span>
                        )}
                      </div>
                    </div>

                    {product.inStock > 0 ? (
                      <button
                        className="w-full bg-red-500 text-white py-2.5 rounded-lg text-sm 
                                        hover:bg-red-600 transition-colors duration-200 flex items-center justify-center gap-2 group"
                      >
                        <Info className="w-4 h-4 group-hover:animate-bounce" />
                        <span onClick={() => router.push("/pharmacy/1")}>
                          Барааг харах
                        </span>
                      </button>
                    ) : (
                      <div className="w-full bg-red-50 text-red-600 text-center py-2.5 rounded-lg text-sm">
                        Дууссан
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProductGridComponent;

"use client";

import React, { useEffect, useState } from "react";
import { ProductChart } from "./ProductChart";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { Edit2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Loader from "@/components/Loader";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

// Mock customer data
const recentCustomers = [
  {
    id: 1,
    name: "Бат",
    date: "2024-02-05",
    amount: 4399,
    avatar: "/avatars/01.png",
  },
  {
    id: 2,
    name: "Болд",
    date: "2024-02-04",
    amount: 7979,
    avatar: "/avatars/02.png",
  },
  {
    id: 3,
    name: "Цэцэгээ",
    date: "2024-02-03",
    amount: 6399,
    avatar: "/avatars/03.png",
  },
  {
    id: 4,
    name: "Төрөө",
    date: "2024-02-02",
    amount: 9949,
    avatar: "/avatars/04.png",
  },
  {
    id: 5,
    name: "Нараа",
    date: "2024-02-01",
    amount: 5419,
    avatar: "/avatars/05.png",
  },
  {
    id: 6,
    name: "Сараа",
    date: "2024-01-31",
    amount: 3997,
    avatar: "/avatars/06.png",
  },
  {
    id: 7,
    name: "Санчир",
    date: "2024-01-30",
    amount: 8999,
    avatar: "/avatars/07.png",
  },
  {
    id: 8,
    name: "Энхээ",
    date: "2024-01-29",
    amount: 6997,
    avatar: "/avatars/08.png",
  },
  {
    id: 9,
    name: "Цогт",
    date: "2024-01-28",
    amount: 4499,
    avatar: "/avatars/09.png",
  },
  {
    id: 10,
    name: "Даваа",
    date: "2024-01-27",
    amount: 7459,
    avatar: "/avatars/10.png",
  },
  {
    id: 11,
    name: "Мягмар",
    date: "2024-01-26",
    amount: 5829,
    avatar: "/avatars/11.png",
  },
  {
    id: 12,
    name: "Лхагва",
    date: "2024-01-25",
    amount: 3429,
    avatar: "/avatars/12.png",
  },
  {
    id: 13,
    name: "Пүрэв",
    date: "2024-01-24",
    amount: 7599,
    avatar: "/avatars/13.png",
  },
  {
    id: 14,
    name: "Баасан",
    date: "2024-01-23",
    amount: 5969,
    avatar: "/avatars/14.png",
  },
  {
    id: 15,
    name: "Бямба",
    date: "2024-01-22",
    amount: 4269,
    avatar: "/avatars/15.png",
  },
  {
    id: 16,
    name: "Ням",
    date: "2024-01-21",
    amount: 9499,
    avatar: "/avatars/16.png",
  },
  {
    id: 17,
    name: "Сайнаа",
    date: "2024-01-20",
    amount: 6469,
    avatar: "/avatars/17.png",
  },
  {
    id: 18,
    name: "Од",
    date: "2024-01-19",
    amount: 5649,
    avatar: "/avatars/18.png",
  },
  {
    id: 19,
    name: "Жаргал",
    date: "2024-01-18",
    amount: 3689,
    avatar: "/avatars/19.png",
  },
  {
    id: 20,
    name: "Даш",
    date: "2024-01-17",
    amount: 7996,
    avatar: "/avatars/20.png",
  },
  {
    id: 21,
    name: "Тэмүүлэн",
    date: "2024-01-16",
    amount: 6469,
    avatar: "/avatars/21.png",
  },
  {
    id: 22,
    name: "Ганаа",
    date: "2024-01-15",
    amount: 4359,
    avatar: "/avatars/22.png",
  },
  {
    id: 23,
    name: "Хонгороо",
    date: "2024-01-14",
    amount: 9991,
    avatar: "/avatars/23.png",
  },
  {
    id: 24,
    name: "Марал",
    date: "2024-01-13",
    amount: 1589,
    avatar: "/avatars/24.png",
  },
  {
    id: 25,
    name: "Хишигээ",
    date: "2024-01-12",
    amount: 7409,
    avatar: "/avatars/25.png",
  },
  {
    id: 26,
    name: "Сүрэн",
    date: "2024-01-11",
    amount: 5059,
    avatar: "/avatars/26.png",
  },
  {
    id: 27,
    name: "Нярав",
    date: "2024-01-10",
    amount: 6029,
    avatar: "/avatars/27.png",
  },
  {
    id: 28,
    name: "Галт",
    date: "2024-01-09",
    amount: 4709,
    avatar: "/avatars/28.png",
  },
  {
    id: 29,
    name: "Хүдэр",
    date: "2024-01-08",
    amount: 8099,
    avatar: "/avatars/29.png",
  },
  {
    id: 30,
    name: "Алт",
    date: "2024-01-07",
    amount: 6699,
    avatar: "/avatars/30.png",
  },
];

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductDetails({ params }: PageProps) {
  const [product, setProduct] = useState<any>(
    products.find((p) => p.id.toString() === params.id)
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  // const fetchProduct = async (product:any) => {
  //     if (!product) {
  //         toast.error("Error while fetching product!");
  //         return
  //     }
  //     setLoading(true);
  //     try {
  //         const resp = await fetch(`/api/product/name/${product.name}-${product.price}-${product.category}`).then((res) => res.json());

  //         if (resp.success) {
  //             console.log(resp.data);
  //             // setProduct(resp.data);
  //         }
  //     }
  //     catch (err) {
  //         toast.error("Error while fetching product!")
  //     }
  //     finally {
  //         setLoading(false);
  //     }

  // }

  const handleEdit = async () => {
    setLoading(true);
    console.log(product);
    try {
      const data = await fetch(
        `/api/product/name/${product.name}-${product.price}-${product.category}`
      ).then((res) => res.json());
      if (data.success) {
        router.push(
          `/admin/dashboard/manageproducts/updateproducts/${data.data._id}`
        );
      } else {
        throw new Error("Failed to fetch product details");
      }
    } catch (err) {
      toast.error("Sorry! we are having issue while redirect!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Toaster position="top-right" />
      {/* Header with Edit Controls */}
      <div className="mb-8 ml-2">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-500 mt-2">Төрөл: {product.model}</p>
          </div>
          <Button onClick={handleEdit} className="flex items-center text-white">
            <Edit2 className="w-4 h-4 mr-2" />
            Барааны мэдээлэл засах
          </Button>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Үнэ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₮ {product.price.toLocaleString()}
              {product.sale && (
                <span className="ml-2 text-sm text-green-600 font-normal">
                  {product.sale} OFF
                </span>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Байгаа эсэх төлөв
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">{product.inStock}</div>
              <Badge
                variant={product.inStock ? "default" : "destructive"}
                className="text-white"
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Үнэлгээ болон сэтгэгдэл
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{product.rating}/5</div>
            <p className="text-sm text-gray-500">{product.reviews} reviews</p>
          </CardContent>
        </Card>
      </div>

      {/* Sales Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Орлогын мэдээлэл</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductChart chartData={product.chartData} />
        </CardContent>
      </Card>

      {/* Recent Customers */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cүүлийн хэрэлэгчид</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recentCustomers
              .filter((customer) => customer.id % 5 === parseInt(params.id) % 5)
              .map((customer) => (
                <div
                  key={customer.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-gray-500">
                        Худалдаж авсан огноо {customer.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₮{customer.amount}</p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Барааны мэдээлэл</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="font-medium text-gray-500">Төрөл</dt>
                <dd className="mt-1 text-gray-900">{product.category}</dd>
              </div>
              {/* <div>
                <dt className="font-medium text-gray-500">Зар</dt>
                <dd className="mt-1 text-gray-900">{product.seller}</dd>
              </div>
              {product.color && (
                <div>
                  <dt className="font-medium text-gray-500">
                    Available Colors
                  </dt>
                  <dd className="mt-1 text-gray-900 flex gap-2">
                    {product.color.map((color: any) => (
                      <Badge key={color} variant="outline">
                        {color}
                      </Badge>
                    ))}
                  </dd>
                </div>
              )} */}
              {/* {product.size && (
                <div>
                  <dt className="font-medium text-gray-500">Available Sizes</dt>
                  <dd className="mt-1 text-gray-900 flex gap-2">
                    {product.size.map((size: any) => (
                      <Badge key={size} variant="outline">
                        {size}
                      </Badge>
                    ))}
                  </dd>
                </div>
              )} */}
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Мэдээлэл</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {product.features.map((feature: any, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

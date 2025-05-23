"use client";

import React, { useEffect, useState } from "react";
import { ShoppingCart, Package, Box, Check, Ban } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CategoryGrid from "@/app/admin/dashboard/components/catagorygrid";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";

interface OrderStats {
  totalOrders: number;
  totalPendingOrders: number;
  totalCancelledOrders: number;
  totalDeliveredOrders: number;
  totalProcessingOrders: number;
  totalMoneyToday: number;
  totalMoneyThisMonth: number;
  totalMoneyTillNow: number;
}

const DashboardStats = () => {
  const [orderStats, setOrderStats] = useState<OrderStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchOrderStats = async () => {
      try {
        const response = await fetch("/api/admin/order");
        if (!response.ok) throw new Error("fetch hiihed aldaa garlaa");
        const result = await response.json();
        if (result.success && result.data) {
          setOrderStats(result.data);
        } else {
          throw new Error("aldaa");
        }
      } catch (err: any) {
        console.error("stats avahad aldaa garlaa:", err);
        setError(err.message || "unshihad aldaa garlaa");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderStats();
  }, []);

  const handleChnagePage = () => {
    setIsLoading(true);
    router.push("/admin/dashboard/orders");
  };

  const handleCheckUser = () => {
    setIsLoading(true);
    router.push("/admin/dashboard/users");
  };
  const handleAddNewProduct = () => {
    setIsLoading(true);
    router.push("/admin/dashboard/manageproducts");
  };

  const handleChangeProduct = () => {
    setIsLoading(true);
    router.push("/admin/dashboard/changeproduct");
  };

  const stats = orderStats
    ? [
        {
          title: "Өнөөдрийн захиалгууд",
          amount: `₮${orderStats.totalMoneyToday.toLocaleString("en-MN")}`,
          bgColor: "bg-teal-600",
        },
        {
          title: "Энэ сард",
          amount: `₮${orderStats.totalMoneyThisMonth.toLocaleString("en-MN")}`,
          bgColor: "bg-blue-500",
        },
        {
          title: "Нийт орлого",
          amount: `₮${orderStats.totalMoneyTillNow.toLocaleString("en-MN")}`,
          bgColor: "bg-green-600",
        },
      ]
    : [];

  const orderStatusCards = orderStats
    ? [
        {
          label: "Нийт захиалгууд",
          value: orderStats.totalOrders.toString(),
          icon: ShoppingCart,
          bgColor: "bg-orange-50",
          iconColor: "text-orange-500",
        },
        {
          label: "Хүлээгдэж буй захиалгууд",
          value: orderStats.totalPendingOrders.toString(),
          icon: Package,
          bgColor: "bg-blue-50",
          iconColor: "text-blue-500",
        },
        {
          label: "Замд явж буй захиалгууд",
          value: orderStats.totalProcessingOrders.toString(),
          icon: Box,
          bgColor: "bg-teal-50",
          iconColor: "text-teal-500",
        },
        {
          label: "Хүргэгдсэн захиалгууд",
          value: orderStats.totalDeliveredOrders.toString(),
          icon: Check,
          bgColor: "bg-green-50",
          iconColor: "text-green-500",
        },
        {
          label: "Цуцлагдсан захиалгууд",
          value: orderStats.totalCancelledOrders.toString(),
          icon: Ban,
          bgColor: "bg-red-50",
          iconColor: "text-red-500",
        },
      ]
    : [];

  const product = [
    {
      chartData: [
        { month: "Jan", "Нийт орлого": 3029900 },
        { month: "Feb", "Нийт орлого": 2928800 },
        { month: "Mar", "Нийт орлого": 3680500 },
        { month: "Apr", "Нийт орлого": 3620100 },
        { month: "May", "Нийт орлого": 3373800 },
        { month: "Jun", "Нийт орлого": 3104900 },
        { month: "Jul", "Нийт орлого": 3157000 },
        { month: "Aug", "Нийт орлого": 3666000 },
        { month: "Sep", "Нийт орлого": 3755000 },
        { month: "Oct", "Нийт орлого": 3367800 },
        { month: "Nov", "Нийт орлого": 3376400 },
        { month: "Dec", "Нийт орлого": 2982400 },
      ],
    },
  ];

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="p-6">
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <h3 className="text-red-600 text-lg font-semibold">
              Error 
            </h3>
            <p className="text-red-500 mt-2">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className={`${stat.bgColor} text-white`}>
            <CardContent className="p-6">
              <h3 className="text-sm font-medium opacity-80">{stat.title}</h3>
              <p className="text-2xl font-bold mt-2">{stat.amount}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {orderStatusCards.map((stat, index) => (
          <Card key={index} className="border">
            <CardContent className="p-4 flex items-center gap-4">
              <div className={`${stat.bgColor} p-3 rounded-full`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <h3 className="text-lg font-semibold">
            Өнгөрсөн жилийн зарсан бүтээгдэхүүний тоо (2024)
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <button
              className="p-4 bg-blue-300 border border-black rounded-full h-10 w-full sm:w-56 flex items-center justify-center"
              onClick={handleAddNewProduct}
            >
              Бүтээгдэхүүн удирдах
            </button>
            <button
              className="p-4 bg-orange-300 border border-black rounded-full h-10 w-full sm:w-56 flex items-center justify-center"
              onClick={handleCheckUser}
            >
              Хэрэглэгчдийг харах
            </button>
            <button
              className="p-4 bg-white border border-black rounded-full h-10 w-full sm:w-56 flex items-center justify-center"
              onClick={handleChnagePage}
            >
              Бүх захиалгыг харах
            </button>

          </div>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={product[0].chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Нийт орлого"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <CategoryGrid />
    </div>
  );
};

export default DashboardStats;

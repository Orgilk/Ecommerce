import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CategoryGrid = () => {
  const basePath = "/admin/dashboard";
  const categories = [
    {
      title: "Нэг удаагийн хэрэглэл",
      path: `${basePath}/category/Нэгудаагийнхэрэглэл`,
    },
    {
      title: "Захиалгат хэрэгсэл",
      path: `${basePath}/category/Захиалгатхэрэгсэл`,
    },
    { title: "Ханиадны эм", path: `${basePath}/category/Ханиадныэм` },
    { title: "Үе мөчний тариа", path: `${basePath}/category/Үемөчнийтариа` },
    { title: "Зүрхний эм", path: `${basePath}/category/Зүрхнийэм` },
    {
      title: "Үрэвслийн эсрэг тариа",
      path: `${basePath}/category/Үрэвслийнэсрэгтариа`,
    },
    {
      title: "Нэг удаагийн эмчилгээний хэрэглэл",
      path: `${basePath}/category/Нэгудаагийнэмчилгээнийхэрэглэл`,
    },
    {
      title: "Эмнэлэгийн хэрэгсэл",
      path: `${basePath}/category/Эмнэлэгийн хэрэгсэл`,
    },
    {
      title: "Захиалгын төхөөрөмж",
      path: `${basePath}/category/Захиалгын төхөөрөмж`,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Төрлүүд</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link
            href={category.path}
            key={index}
            className="transform transition-transform hover:scale-105"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-lg text-gray-800">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Бараанууд</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;

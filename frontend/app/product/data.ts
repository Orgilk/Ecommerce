interface Product {
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
  category: string;
  video?: string;
  model: string;
  images: string[];
  features: string[];
  description: string;
  chartData: ChartData[];
}

interface ChartData {
  month: string;
  revenue: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Витагрипп Чацарганатай 20гр",
    price: 2899,
    rating: 5,
    reviews: 1500,
    answers: 120,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "9-12 ажлын өдөр",
    category: "Эм",
    model: "Ханиадны эм",
    images: [
      "/detailphotos/2.1.webp",
      "/detailphotos/2.2.webp",
      "/detailphotos/2.3.webp",
      "/detailphotos/2.4.webp",
    ],
    features: [
      "Ханиадны эм",
      "Хүргэлт : 9-12 ажлын өдөр",
      "Германд үйлдвэрлэсэн.",
      "Үйлдвэрлэсэн он:2024-7-22",
      "Хугацаа дуусах он:2025-7-22",
    ],
    description:
      "\n\nХэрэглэх заавар:Насанд хүрэгсэд 1 уут буюу 20г бэлдмэлийг 200мл халуун бүлээн усанд уусгаж,өдөрт 1 уутыг ууж хэрэглэнэ.\n\nТайлбар:Витагрипп мөхлөгийг ханиад томууны үед эмчилгээний зориулалтаар,халдварт өвчний дараа биемахбодыг тамиржуулах,хордлого тайлах,аксорбины хүчлийн дутагдал зэрэгт загварын дагуу хэрэглэнэ.\n\n Найрлага:Аксорбины хүчил 1000мг агуулагдана. \n\n Анхааруулга:Аксорбины хүчилд хэт мэдрэг хүмүүс,цусны бүлэгнэлт ихэссэн үед,чихрийн шижин өвчин болон бөөр чулуужих өвчин зэрэгт их тунгаар хэрэглэхийг хориглоно.",
    chartData: [
      {
        month: "Jan",
        revenue: 446,
      },
      {
        month: "Feb",
        revenue: 989,
      },
      {
        month: "Mar",
        revenue: 446,
      },
      {
        month: "Apr",
        revenue: 329,
      },
      {
        month: "May",
        revenue: 840,
      },
      {
        month: "Jun",
        revenue: 547,
      },
      {
        month: "Jul",
        revenue: 790,
      },
      {
        month: "Aug",
        revenue: 804,
      },
      {
        month: "Sep",
        revenue: 725,
      },
      {
        month: "Oct",
        revenue: 837,
      },
      {
        month: "Nov",
        revenue: 467,
      },
      {
        month: "Dec",
        revenue: 945,
      },
    ],
  },
  {
    id: 2,
    name: "Залтирон 10мл",
    price: 3199,
    rating: 4.5,
    reviews: 120,
    answers: 50,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "9-12 ажлын өдөр",
    category: "Тариа",
    model: "Үе мөчний тариа",
    images: [
      "/detailphotos/3.1.webp",
      "/detailphotos/3.2.webp",
      "/detailphotos/3.3.webp",
      "/detailphotos/3.4.webp",
    ],
    features: [
      "Ханиадны эм",
      "Хүргэлт : 9-12 ажлын өдөр",
      "Германд үйлдвэрлэсэн.",
      "Үйлдвэрлэсэн он:2024-7-22",
      "Хугацаа дуусах он:2025-7-22",
    ],
    description:
      "\n\nХэрэглэх заавар:Насанд хүрэгсэд 1 уут буюу 20г бэлдмэлийг 200мл халуун бүлээн усанд уусгаж,өдөрт 1 уутыг ууж хэрэглэнэ.\n\nТайлбар:Витагрипп мөхлөгийг ханиад томууны үед эмчилгээний зориулалтаар,халдварт өвчний дараа биемахбодыг тамиржуулах,хордлого тайлах,аксорбины хүчлийн дутагдал зэрэгт загварын дагуу хэрэглэнэ.\n\n Найрлага:Аксорбины хүчил 1000мг агуулагдана. \n\n Анхааруулга:Аксорбины хүчилд хэт мэдрэг хүмүүс,цусны бүлэгнэлт ихэссэн үед,чихрийн шижин өвчин болон бөөр чулуужих өвчин зэрэгт их тунгаар хэрэглэхийг хориглоно.",
    chartData: [
      {
        month: "Jan",
        revenue: 813,
      },
      {
        month: "Feb",
        revenue: 543,
      },
      {
        month: "Mar",
        revenue: 216,
      },
      {
        month: "Apr",
        revenue: 626,
      },
      {
        month: "May",
        revenue: 225,
      },
      {
        month: "Jun",
        revenue: 167,
      },
      {
        month: "Jul",
        revenue: 377,
      },
      {
        month: "Aug",
        revenue: 534,
      },
      {
        month: "Sep",
        revenue: 783,
      },
      {
        month: "Oct",
        revenue: 550,
      },
      {
        month: "Nov",
        revenue: 748,
      },
      {
        month: "Dec",
        revenue: 283,
      },
    ],
  },
  {
    id: 3,
    name: "Терафлюы",
    price: 4899,
    rating: 3.5,
    reviews: 700,
    answers: 234,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "9-12 ажлын өдөр",
    category: "Эм",
    model: "Ханиадны эм",
    images: [
      "/detailphotos/4.1.webp",
      "/detailphotos/4.2.webp",
      "/detailphotos/4.3.webp",
      "/detailphotos/4.4.webp",
    ],
    features: [
      "Ханиадны эм",
      "Хүргэлт : 9-12 ажлын өдөр",
      "Германд үйлдвэрлэсэн.",
      "Үйлдвэрлэсэн он:2024-7-22",
      "Хугацаа дуусах он:2025-7-22",
    ],
    description:
      "\n\nХэрэглэх заавар:Насанд хүрэгсэд 1 уут буюу 20г бэлдмэлийг 200мл халуун бүлээн усанд уусгаж,өдөрт 1 уутыг ууж хэрэглэнэ.\n\nТайлбар:Витагрипп мөхлөгийг ханиад томууны үед эмчилгээний зориулалтаар,халдварт өвчний дараа биемахбодыг тамиржуулах,хордлого тайлах,аксорбины хүчлийн дутагдал зэрэгт загварын дагуу хэрэглэнэ.\n\n Найрлага:Аксорбины хүчил 1000мг агуулагдана. \n\n Анхааруулга:Аксорбины хүчилд хэт мэдрэг хүмүүс,цусны бүлэгнэлт ихэссэн үед,чихрийн шижин өвчин болон бөөр чулуужих өвчин зэрэгт их тунгаар хэрэглэхийг хориглоно.",
    chartData: [
      {
        month: "Jan",
        revenue: 515,
      },
      {
        month: "Feb",
        revenue: 805,
      },
      {
        month: "Mar",
        revenue: 485,
      },
      {
        month: "Apr",
        revenue: 798,
      },
      {
        month: "May",
        revenue: 299,
      },
      {
        month: "Jun",
        revenue: 930,
      },
      {
        month: "Jul",
        revenue: 182,
      },
      {
        month: "Aug",
        revenue: 618,
      },
      {
        month: "Sep",
        revenue: 109,
      },
      {
        month: "Oct",
        revenue: 159,
      },
      {
        month: "Nov",
        revenue: 883,
      },
      {
        month: "Dec",
        revenue: 317,
      },
    ],
  },
  {
    id: 4,
    name: "Ацц 600мг уусдаг шахмал",
    price: 4299,
    rating: 2.6,
    reviews: 520,
    answers: 34,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "9-12 ажлын өдөр",
    category: "Эм",
    model: "Ханиадны эм",
    images: [
      "/detailphotos/5.1.webp",
      "/detailphotos/5.2.webp",
      "/detailphotos/5.3.webp",
      "/detailphotos/5.4.webp",
    ],
    features: [
      "Ханиадны эм",
      "Хүргэлт : 9-12 ажлын өдөр",
      "Германд үйлдвэрлэсэн.",
      "Үйлдвэрлэсэн он:2024-7-22",
      "Хугацаа дуусах он:2025-7-22",
    ],
    description:
      "\n\nХэрэглэх заавар:Насанд хүрэгсэд 1 уут буюу 20г бэлдмэлийг 200мл халуун бүлээн усанд уусгаж,өдөрт 1 уутыг ууж хэрэглэнэ.\n\nТайлбар:Витагрипп мөхлөгийг ханиад томууны үед эмчилгээний зориулалтаар,халдварт өвчний дараа биемахбодыг тамиржуулах,хордлого тайлах,аксорбины хүчлийн дутагдал зэрэгт загварын дагуу хэрэглэнэ.\n\n Найрлага:Аксорбины хүчил 1000мг агуулагдана. \n\n Анхааруулга:Аксорбины хүчилд хэт мэдрэг хүмүүс,цусны бүлэгнэлт ихэссэн үед,чихрийн шижин өвчин болон бөөр чулуужих өвчин зэрэгт их тунгаар хэрэглэхийг хориглоно.",
    chartData: [
      {
        month: "Jan",
        revenue: 326,
      },
      {
        month: "Feb",
        revenue: 382,
      },
      {
        month: "Mar",
        revenue: 410,
      },
      {
        month: "Apr",
        revenue: 555,
      },
      {
        month: "May",
        revenue: 787,
      },
      {
        month: "Jun",
        revenue: 196,
      },
      {
        month: "Jul",
        revenue: 866,
      },
      {
        month: "Aug",
        revenue: 379,
      },
      {
        month: "Sep",
        revenue: 197,
      },
      {
        month: "Oct",
        revenue: 330,
      },
      {
        month: "Nov",
        revenue: 537,
      },
      {
        month: "Dec",
        revenue: 288,
      },
    ],
  },
  {
    id: 5,
    name: "Кардионат 250мг",
    price: 4899,
    rating: 6,
    reviews: 1200,
    answers: 234,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "9-12 ажлын өдөр",
    category: "Эм",
    model: "Зүрхний эм",
    images: [
      "/detailphotos/6.1.webp",
      "/detailphotos/6.2.webp",
      "/detailphotos/6.3.webp",
      "/detailphotos/6.4.webp",
    ],
    features: [
      "Ханиадны эм",
      "Хүргэлт : 9-12 ажлын өдөр",
      "Германд үйлдвэрлэсэн.",
      "Үйлдвэрлэсэн он:2024-7-22",
      "Хугацаа дуусах он:2025-7-22",
    ],
    description:
      "\n\nХэрэглэх заавар:Насанд хүрэгсэд 1 уут буюу 20г бэлдмэлийг 200мл халуун бүлээн усанд уусгаж,өдөрт 1 уутыг ууж хэрэглэнэ.\n\nТайлбар:Витагрипп мөхлөгийг ханиад томууны үед эмчилгээний зориулалтаар,халдварт өвчний дараа биемахбодыг тамиржуулах,хордлого тайлах,аксорбины хүчлийн дутагдал зэрэгт загварын дагуу хэрэглэнэ.\n\n Найрлага:Аксорбины хүчил 1000мг агуулагдана. \n\n Анхааруулга:Аксорбины хүчилд хэт мэдрэг хүмүүс,цусны бүлэгнэлт ихэссэн үед,чихрийн шижин өвчин болон бөөр чулуужих өвчин зэрэгт их тунгаар хэрэглэхийг хориглоно.",
    chartData: [
      {
        month: "Jan",
        revenue: 281,
      },
      {
        month: "Feb",
        revenue: 783,
      },
      {
        month: "Mar",
        revenue: 211,
      },
      {
        month: "Apr",
        revenue: 676,
      },
      {
        month: "May",
        revenue: 825,
      },
      {
        month: "Jun",
        revenue: 806,
      },
      {
        month: "Jul",
        revenue: 266,
      },
      {
        month: "Aug",
        revenue: 724,
      },
      {
        month: "Sep",
        revenue: 279,
      },
      {
        month: "Oct",
        revenue: 423,
      },
      {
        month: "Nov",
        revenue: 482,
      },
      {
        month: "Dec",
        revenue: 808,
      },
    ],
  },
  {
    id: 6,
    name: "Нейромалин 50мг",
    price: 4799,
    rating: 4.5,
    reviews: 900,
    answers: 234,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "9-12 ажлын өдөр",
    category: "Тариа",
    model: "Үе мөчний тариа",
    images: [
      "/detailphotos/7.1.webp",
      "/detailphotos/7.2.webp",
      "/detailphotos/7.3.webp",
      "/detailphotos/7.4.webp",
    ],
    features: [
      "Ханиадны эм",
      "Хүргэлт : 9-12 ажлын өдөр",
      "Германд үйлдвэрлэсэн.",
      "Үйлдвэрлэсэн он:2024-7-22",
      "Хугацаа дуусах он:2025-7-22",
    ],
    description:
      "\n\nХэрэглэх заавар:Насанд хүрэгсэд 1 уут буюу 20г бэлдмэлийг 200мл халуун бүлээн усанд уусгаж,өдөрт 1 уутыг ууж хэрэглэнэ.\n\nТайлбар:Витагрипп мөхлөгийг ханиад томууны үед эмчилгээний зориулалтаар,халдварт өвчний дараа биемахбодыг тамиржуулах,хордлого тайлах,аксорбины хүчлийн дутагдал зэрэгт загварын дагуу хэрэглэнэ.\n\n Найрлага:Аксорбины хүчил 1000мг агуулагдана. \n\n Анхааруулга:Аксорбины хүчилд хэт мэдрэг хүмүүс,цусны бүлэгнэлт ихэссэн үед,чихрийн шижин өвчин болон бөөр чулуужих өвчин зэрэгт их тунгаар хэрэглэхийг хориглоно.",
    chartData: [
      {
        month: "Jan",
        revenue: 668,
      },
      {
        month: "Feb",
        revenue: 946,
      },
      {
        month: "Mar",
        revenue: 468,
      },
      {
        month: "Apr",
        revenue: 537,
      },
      {
        month: "May",
        revenue: 776,
      },
      {
        month: "Jun",
        revenue: 155,
      },
      {
        month: "Jul",
        revenue: 137,
      },
      {
        month: "Aug",
        revenue: 659,
      },
      {
        month: "Sep",
        revenue: 745,
      },
      {
        month: "Oct",
        revenue: 155,
      },
      {
        month: "Nov",
        revenue: 684,
      },
      {
        month: "Dec",
        revenue: 836,
      },
    ],
  },
  {
    id: 7,
    name: "Gaeti Green Embroidery Handblock Chanderi Kurta Pant Set",
    price: 4999,
    rating: 4,
    reviews: 8000,
    answers: 234,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "9-12 ажлын өдөр",
    seller: "Indigo Apparel Co.",
    color: ["Green"],
    category: "Тариа",
    model: "Fit - Relaxed (Code JA-657 WD)",
    size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    images: [
      "/detailphotos/8.1.webp",
      "/detailphotos/3.2.webp",
      "/detailphotos/3.3.webp",
      "/detailphotos/3.4.webp",
    ],
    features: [
      "Fit - Relaxed (Code JA-657 WD)",
      "Hand wash separately in cold water",
      "Always use mild detergent.",
      "8 To 9 Working day",
      "Kurta length 46",
      "Pant length 38",
    ],
    description:
      "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Features innovative styling elements\n- Easy maintenance and care requirements\n- Created using sustainable practices\n- Versatile design suitable for multiple occasions",
    chartData: [
      {
        month: "Jan",
        revenue: 4466,
      },
      {
        month: "Feb",
        revenue: 7675,
      },
      {
        month: "Mar",
        revenue: 5773,
      },
      {
        month: "Apr",
        revenue: 5116,
      },
      {
        month: "May",
        revenue: 1651,
      },
      {
        month: "Jun",
        revenue: 7954,
      },
      {
        month: "Jul",
        revenue: 7597,
      },
      {
        month: "Aug",
        revenue: 5959,
      },
      {
        month: "Sep",
        revenue: 5167,
      },
      {
        month: "Oct",
        revenue: 3325,
      },
      {
        month: "Nov",
        revenue: 6788,
      },
      {
        month: "Dec",
        revenue: 9097,
      },
    ],
  },
  {
    id: 8,
    name: "Royal Affairs Handblock Kurta and Pant Only",
    price: 3399,
    rating: 4.2,
    reviews: 8500,
    answers: 234,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "5-7 ажлын өдөрs",
    seller: "Indigo Apparel Co.",
    color: ["White"],
    category: "Тариа",
    model: "Fit - Relaxed (Code JA-453 WD)",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "/detailphotos/9.1.webp",
      "/detailphotos/9.2.webp",
      "/detailphotos/9.3.webp",
      "/detailphotos/9.4.webp",
    ],
    features: [
      "Fit - Relaxed (Code JA-453 WD)",
      "Washing instruction-  Quick dip wash or Dry clean",
      "Хүргэлт : 5-7 ажлын өдөрs",
      "Fabric - Pure Cotton",
      "Kurta length 46",
      "Pant length 38",
    ],
    description:
      "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Available in a range of carefully curated sizes\n- Easy maintenance and care requirements\n- Versatile design suitable for multiple occasions\n- Expertly crafted with attention to every detail",
    chartData: [
      {
        month: "Jan",
        revenue: 8851,
      },
      {
        month: "Feb",
        revenue: 7093,
      },
      {
        month: "Mar",
        revenue: 6277,
      },
      {
        month: "Apr",
        revenue: 8788,
      },
      {
        month: "May",
        revenue: 8379,
      },
      {
        month: "Jun",
        revenue: 5094,
      },
      {
        month: "Jul",
        revenue: 9128,
      },
      {
        month: "Aug",
        revenue: 3520,
      },
      {
        month: "Sep",
        revenue: 3917,
      },
      {
        month: "Oct",
        revenue: 8905,
      },
      {
        month: "Nov",
        revenue: 3787,
      },
      {
        month: "Dec",
        revenue: 5337,
      },
    ],
  },
  {
    id: 9,
    name: "Patina Handblock Short Kurta",
    price: 1499,
    rating: 4.3,
    reviews: 8600,
    answers: 234,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "9-12 ажлын өдөр",
    seller: "Indigo Apparel Co.",
    color: ["Green"],
    category: "Эм",
    model: "Fit - Relaxed (Code JA_607_SKP)",
    size: ["XS", "S", "M", "L", "XL"],
    images: [
      "/detailphotos/10.1.webp",
      "/detailphotos/10.2.webp",
      "/detailphotos/10.3.webp",
      "/detailphotos/10.4.webp",
    ],
    features: [
      "Fit - Relaxed (Code JA_607_SKP)",
      "Fabric - Pure Cotton",
      "Do not soak",
      "Always use mild detergent",
      "Kurta length 46",
      "Pant length 38",
    ],
    description:
      "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Expertly crafted with attention to every detail\n- Features innovative styling elements\n- Premium quality materials ensuring lasting comfort and durability\n- Created using sustainable practices",
    chartData: [
      {
        month: "Jan",
        revenue: 7128,
      },
      {
        month: "Feb",
        revenue: 6756,
      },
      {
        month: "Mar",
        revenue: 9268,
      },
      {
        month: "Apr",
        revenue: 1084,
      },
      {
        month: "May",
        revenue: 5843,
      },
      {
        month: "Jun",
        revenue: 6510,
      },
      {
        month: "Jul",
        revenue: 1297,
      },
      {
        month: "Aug",
        revenue: 4548,
      },
      {
        month: "Sep",
        revenue: 7764,
      },
      {
        month: "Oct",
        revenue: 5978,
      },
      {
        month: "Nov",
        revenue: 1744,
      },
      {
        month: "Dec",
        revenue: 5368,
      },
    ],
  },
  {
    id: 10,
    name: "Naadia Block Printed Cotton Kalidaar Handwork Suit Set",
    price: 4899,
    rating: 4.2,
    reviews: 8300,
    answers: 234,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "9-12 ажлын өдөр",
    seller: "Indigo Apparel Co.",
    color: ["Green"],
    category: "Тариа",
    model: "Fit - Relaxed (Code JA-622)",
    size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    images: [
      "/detailphotos/19.1.webp",
      "/detailphotos/19.2.webp",
      "/detailphotos/19.3.webp",
      "/detailphotos/19.4.webp",
    ],
    features: [
      "Fit - Relaxed (Code JA-622)",
      "Hand wash separately in cold water",
      "Always use mild detergent",
      "Do not soak",
      "Kurta length 46",
      "Pant length 38",
    ],
    description:
      "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Easy maintenance and care requirements\n- Premium quality materials ensuring lasting comfort and durability\n- Designed to provide optimal comfort throughout the day\n- Versatile design suitable for multiple occasions",
    chartData: [
      {
        month: "Jan",
        revenue: 3206,
      },
      {
        month: "Feb",
        revenue: 5946,
      },
      {
        month: "Mar",
        revenue: 4952,
      },
      {
        month: "Apr",
        revenue: 8926,
      },
      {
        month: "May",
        revenue: 2604,
      },
      {
        month: "Jun",
        revenue: 7249,
      },
      {
        month: "Jul",
        revenue: 2786,
      },
      {
        month: "Aug",
        revenue: 3114,
      },
      {
        month: "Sep",
        revenue: 9727,
      },
      {
        month: "Oct",
        revenue: 3245,
      },
      {
        month: "Nov",
        revenue: 3429,
      },
      {
        month: "Dec",
        revenue: 1903,
      },
    ],
  },

  {
    id: 11,
    name: "Sakhi Silk Suit Set with Embroidered Floral Detailing",
    price: 5999,
    rating: 4.5,
    reviews: 7403,
    answers: 156,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "5-7 ажлын өдөрs",
    category: "latest-collection",
    model: "RP-804)",
    images: [
      "/detailphotos/28.1.webp",
      "/detailphotos/28.2.webp",
      "/detailphotos/28.3.webp",
      "/detailphotos/28.4.webp",
      "/detailphotos/28.5.webp",
    ],
    features: [
      "Хүргэлт : 5-7 ажлын өдөрs",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-804)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38",
    ],
    description:
      "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Created using sustainable practices\n- Versatile design suitable for multiple occasions\n- Premium quality materials ensuring lasting comfort and durability\n- Features innovative styling elements",
    chartData: [
      {
        month: "Jan",
        revenue: 5867,
      },
      {
        month: "Feb",
        revenue: 1300,
      },
      {
        month: "Mar",
        revenue: 2849,
      },
      {
        month: "Apr",
        revenue: 5449,
      },
      {
        month: "May",
        revenue: 7790,
      },
      {
        month: "Jun",
        revenue: 3713,
      },
      {
        month: "Jul",
        revenue: 5802,
      },
      {
        month: "Aug",
        revenue: 9518,
      },
      {
        month: "Sep",
        revenue: 1020,
      },
      {
        month: "Oct",
        revenue: 8313,
      },
      {
        month: "Nov",
        revenue: 9275,
      },
      {
        month: "Dec",
        revenue: 5843,
      },
    ],
  },
  {
    id: 12,
    name: "Kalyani Silk Satin Embroidered Suit Set with Organza Dupatta",
    price: 5999,
    rating: 5,
    reviews: 200,
    answers: 34,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "5-7 ажлын өдөрs",
    category: "latest-collection",
    model: "RP-794)",
    images: [
      "/detailphotos/29.1.webp",
      "/detailphotos/29.2.webp",
      "/detailphotos/29.3.webp",
      "/detailphotos/29.4.webp",
      "/detailphotos/29.5.webp",
    ],
    features: [
      "Хүргэлт : 5-7 ажлын өдөрs",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-794)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38",
    ],
    description:
      "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Created using sustainable practices\n- Available in a range of carefully curated sizes\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail",
    chartData: [
      {
        month: "Jan",
        revenue: 8216,
      },
      {
        month: "Feb",
        revenue: 8600,
      },
      {
        month: "Mar",
        revenue: 6442,
      },
      {
        month: "Apr",
        revenue: 7475,
      },
      {
        month: "May",
        revenue: 2149,
      },
      {
        month: "Jun",
        revenue: 9706,
      },
      {
        month: "Jul",
        revenue: 6919,
      },
      {
        month: "Aug",
        revenue: 7004,
      },
      {
        month: "Sep",
        revenue: 3081,
      },
      {
        month: "Oct",
        revenue: 3032,
      },
      {
        month: "Nov",
        revenue: 3662,
      },
      {
        month: "Dec",
        revenue: 5814,
      },
    ],
  },
  {
    id: 13,
    name: "Ruby Floral A-line Silk Suit set",
    price: 5499,
    rating: 4.2,
    reviews: 10200,
    answers: 304,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "5-7 ажлын өдөрs",
    category: "latest-collection",
    model: "RP-782)",
    images: [
      "/detailphotos/30.1.webp",
      "/detailphotos/30.2.webp",
      "/detailphotos/30.3.webp",
      "/detailphotos/30.4.webp",
      "/detailphotos/30.5.webp",
      "/detailvideos/30.mp4",
    ],
    features: [
      "Хүргэлт : 5-7 ажлын өдөрs",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-782)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38",
    ],
    description:
      "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Designed to provide optimal comfort throughout the day\n- Created using sustainable practices\n- Easy maintenance and care requirements\n- Premium quality materials ensuring lasting comfort and durability",
    chartData: [
      {
        month: "Jan",
        revenue: 5941,
      },
      {
        month: "Feb",
        revenue: 2378,
      },
      {
        month: "Mar",
        revenue: 4888,
      },
      {
        month: "Apr",
        revenue: 6838,
      },
      {
        month: "May",
        revenue: 6765,
      },
      {
        month: "Jun",
        revenue: 5782,
      },
      {
        month: "Jul",
        revenue: 9616,
      },
      {
        month: "Aug",
        revenue: 4010,
      },
      {
        month: "Sep",
        revenue: 8054,
      },
      {
        month: "Oct",
        revenue: 7718,
      },
      {
        month: "Nov",
        revenue: 9264,
      },
      {
        month: "Dec",
        revenue: 7966,
      },
    ],
  },
  {
    id: 14,
    name: "Ruby Floral A-line Silk Suit set",
    price: 5699,
    rating: 4.6,
    reviews: 7450,
    answers: 127,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "5-7 ажлын өдөрs",
    category: "latest-collection",
    model: "RP-777)",
    images: [
      "/detailphotos/31.1.webp",
      "/detailphotos/31.2.webp",
      "/detailphotos/31.3.webp",
      "/detailphotos/31.4.webp",
      "/detailphotos/31.5.webp",
    ],
    features: [
      "Хүргэлт : 5-7 ажлын өдөрs",
      "Fabric - Pure Chanderi Kurta with lining & Chanderi Silk Dupatta & Cotton Pant",
      "Fit - Relaxed (CODE :RP-782)",
      "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
      "Kurta length 46",
      "Pant length 38",
    ],
    description:
      "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Versatile design suitable for multiple occasions\n- Easy maintenance and care requirements",
    chartData: [
      {
        month: "Jan",
        revenue: 6189,
      },
      {
        month: "Feb",
        revenue: 5232,
      },
      {
        month: "Mar",
        revenue: 4825,
      },
      {
        month: "Apr",
        revenue: 9224,
      },
      {
        month: "May",
        revenue: 6857,
      },
      {
        month: "Jun",
        revenue: 4785,
      },
      {
        month: "Jul",
        revenue: 3779,
      },
      {
        month: "Aug",
        revenue: 8205,
      },
      {
        month: "Sep",
        revenue: 5596,
      },
      {
        month: "Oct",
        revenue: 7249,
      },
      {
        month: "Nov",
        revenue: 6391,
      },
      {
        month: "Dec",
        revenue: 5739,
      },
    ],
  },
  {
    id: 15,
    name: "Gerua Chanderi Silk Suit with Handwork Detailing",
    price: 5999,
    rating: 4.5,
    reviews: 7230,
    answers: 97,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "5-7 ажлын өдөрs",
    category: "latest-collection",
    model: "RP-814)",
    images: [
      "/detailphotos/32.1.webp",
      "/detailphotos/32.2.webp",
      "/detailphotos/32.3.webp",
      "/detailphotos/32.4.webp",
      "/detailphotos/32.5.webp",
    ],
    features: [
      "Хүргэлт : 5-7 ажлын өдөрs",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-814)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38",
    ],
    description:
      "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Available in a range of carefully curated sizes\n- Easy maintenance and care requirements\n- Versatile design suitable for multiple occasions\n- Features innovative styling elements",
    chartData: [
      {
        month: "Jan",
        revenue: 4217,
      },
      {
        month: "Feb",
        revenue: 8806,
      },
      {
        month: "Mar",
        revenue: 5912,
      },
      {
        month: "Apr",
        revenue: 6154,
      },
      {
        month: "May",
        revenue: 9117,
      },
      {
        month: "Jun",
        revenue: 8776,
      },
      {
        month: "Jul",
        revenue: 7599,
      },
      {
        month: "Aug",
        revenue: 7024,
      },
      {
        month: "Sep",
        revenue: 8607,
      },
      {
        month: "Oct",
        revenue: 5559,
      },
      {
        month: "Nov",
        revenue: 7469,
      },
      {
        month: "Dec",
        revenue: 8374,
      },
    ],
  },
  {
    id: 16,
    name: "Jade Oasis Coord Set with Floral Embroidered Detailing",
    price: 3299,
    rating: 4.9,
    reviews: 12030,
    answers: 345,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "5-7 ажлын өдөрs",
    category: "lounge-wear",
    model: "RP-787)",
    images: [
      "/detailphotos/33.1.webp",
      "/detailphotos/33.2.webp",
      "/detailphotos/33.3.webp",
      "/detailphotos/33.4.webp",
      "/detailphotos/33.5.webp",
      "/detailphotos/33.6.webp",
      "/detailphotos/33.7.webp",
    ],
    features: [
      "Хүргэлт : 5-7 ажлын өдөрs",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-787)",
      "Washing instruction-  Separate wash only (Might bleed color) eferably Dry clean.",
      "Kurta length 46",
      "Pant length 38",
    ],
    description:
      "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Created using sustainable practices\n- Expertly crafted with attention to every detail\n- Versatile design suitable for multiple occasions",
    chartData: [
      {
        month: "Jan",
        revenue: 4353,
      },
      {
        month: "Feb",
        revenue: 9585,
      },
      {
        month: "Mar",
        revenue: 9849,
      },
      {
        month: "Apr",
        revenue: 3679,
      },
      {
        month: "May",
        revenue: 2966,
      },
      {
        month: "Jun",
        revenue: 2645,
      },
      {
        month: "Jul",
        revenue: 2561,
      },
      {
        month: "Aug",
        revenue: 7296,
      },
      {
        month: "Sep",
        revenue: 8925,
      },
      {
        month: "Oct",
        revenue: 8388,
      },
      {
        month: "Nov",
        revenue: 1402,
      },
      {
        month: "Dec",
        revenue: 4318,
      },
    ],
  },
  {
    id: 17,
    name: "Moonlight silk Embroidered Coord Set",
    price: 3299,
    rating: 4.8,
    reviews: 10676,
    answers: 237,
    inStock: true,
    delivery: "Хүргэлт үнэгүй",
    deliveryDate: "5-7 ажлын өдөрs",
    category: "lounge-wear",
    model: "",
    images: [
      "/detailphotos/34.1.webp",
      "/detailphotos/34.2.webp",
      "/detailphotos/34.3.webp",
    ],
    // "video": "/detailvideos/34.mp4",
    features: [
      "Хүргэлт : 5-7 ажлын өдөрs",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-781)",
      "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
      "Kurta length 46",
      "Pant length 38",
    ],
    description:
      "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Expertly crafted with attention to every detail\n- Created using sustainable practices\n- Features innovative styling elements\n- Easy maintenance and care requirements",
    chartData: [
      {
        month: "Jan",
        revenue: 5905,
      },
      {
        month: "Feb",
        revenue: 3177,
      },
      {
        month: "Mar",
        revenue: 5024,
      },
      {
        month: "Apr",
        revenue: 2296,
      },
      {
        month: "May",
        revenue: 2468,
      },
      {
        month: "Jun",
        revenue: 7977,
      },
      {
        month: "Jul",
        revenue: 1363,
      },
      {
        month: "Aug",
        revenue: 1971,
      },
      {
        month: "Sep",
        revenue: 4363,
      },
      {
        month: "Oct",
        revenue: 2843,
      },
      {
        month: "Nov",
        revenue: 9247,
      },
      {
        month: "Dec",
        revenue: 5682,
      },
    ],
  },
];

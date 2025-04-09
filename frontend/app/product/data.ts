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
  seller: string;
  color?: string[];
  category: string;
  video?: string;
  model: string;
  size?: string[];
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
    "id": 1,
    "name": "Indigo Dream Suit Set",
    "price": 3199,
    "rating": 5,
    "reviews": 10000,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshak Co.",
    "color": [
      "NavyBlue"
    ],
    "category": "kurta-sets",
    "model": "JA-729)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "/detailphotos/1.1.webp",
      "/detailphotos/1.2.webp",
      "/detailphotos/1.3.webp",
      "/detailphotos/1.4.webp"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :JA-729)",
      "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Easy maintenance and care requirements\n- Versatile design suitable for multiple occasions\n- Created using sustainable practices\n- Designed to provide optimal comfort throughout the day",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 3299
      },
      {
        "month": "Feb",
        "revenue": 9288
      },
      {
        "month": "Mar",
        "revenue": 3805
      },
      {
        "month": "Apr",
        "revenue": 6201
      },
      {
        "month": "May",
        "revenue": 3738
      },
      {
        "month": "Jun",
        "revenue": 9049
      },
      {
        "month": "Jul",
        "revenue": 1570
      },
      {
        "month": "Aug",
        "revenue": 6660
      },
      {
        "month": "Sep",
        "revenue": 7550
      },
      {
        "month": "Oct",
        "revenue": 3678
      },
      {
        "month": "Nov",
        "revenue": 3764
      },
      {
        "month": "Dec",
        "revenue": 9824
      }
    ]
  },
  {
    "id": 2,
    "name": "Mogra Gher Mul Cotton Suit Set",
    "price": 2899,
    "rating": 5.5,
    "reviews": 11000,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "9 To 12 Working days",
    "seller": "Rajwadi Poshak Co.",
    "color": [
      "Yellow"
    ],
    "category": "traditional-suits",
    "model": "Fit - Relaxed (Code JA-792)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/2.1.webp",
      "/detailphotos/2.2.webp",
      "/detailphotos/2.3.webp",
      "/detailphotos/2.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-792)",
      "Dispatch Time : 9 To 12 Working days",
      "Hand wash separately in cold water.",
      "Always use mild detergent.",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Created using sustainable practices\n- Easy maintenance and care requirements\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 4462
      },
      {
        "month": "Feb",
        "revenue": 9890
      },
      {
        "month": "Mar",
        "revenue": 4460
      },
      {
        "month": "Apr",
        "revenue": 3291
      },
      {
        "month": "May",
        "revenue": 8408
      },
      {
        "month": "Jun",
        "revenue": 5472
      },
      {
        "month": "Jul",
        "revenue": 7908
      },
      {
        "month": "Aug",
        "revenue": 8042
      },
      {
        "month": "Sep",
        "revenue": 7254
      },
      {
        "month": "Oct",
        "revenue": 8370
      },
      {
        "month": "Nov",
        "revenue": 4672
      },
      {
        "month": "Dec",
        "revenue": 9454
      }
    ]
  },
  {
    "id": 3,
    "name": "Tarin Green Floral Print Embroidered Suit Set",
    "price": 3199,
    "rating": 4.5,
    "reviews": 9000,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Green"
    ],
    "category": "kurta-sets",
    "model": "Fit - Relaxed (Code JA-704)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "/detailphotos/3.1.webp",
      "/detailphotos/3.2.webp",
      "/detailphotos/3.3.webp",
      "/detailphotos/3.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-704)",
      "Hand wash separately in cold water.",
      "Dispatching Time-4-5 days",
      "Dry in shade",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Created using sustainable practices\n- Easy maintenance and care requirements",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 8138
      },
      {
        "month": "Feb",
        "revenue": 5430
      },
      {
        "month": "Mar",
        "revenue": 2160
      },
      {
        "month": "Apr",
        "revenue": 6267
      },
      {
        "month": "May",
        "revenue": 2254
      },
      {
        "month": "Jun",
        "revenue": 1674
      },
      {
        "month": "Jul",
        "revenue": 3770
      },
      {
        "month": "Aug",
        "revenue": 5341
      },
      {
        "month": "Sep",
        "revenue": 7835
      },
      {
        "month": "Oct",
        "revenue": 5503
      },
      {
        "month": "Nov",
        "revenue": 7483
      },
      {
        "month": "Dec",
        "revenue": 2839
      }
    ]
  },
  {
    "id": 4,
    "name": "Izza Blue Floral Handblock Print Suit Set",
    "price": 4899,
    "rating": 3.5,
    "reviews": 7000,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Blue"
    ],
    "category": "traditional-suits",
    "model": "Fit - Relaxed (Code JA-701)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/4.1.webp",
      "/detailphotos/4.2.webp",
      "/detailphotos/4.3.webp",
      "/detailphotos/4.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-701)",
      "Dry in shade.",
      "Always use mild detergent",
      "Hand wash separately in cold water.",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Created using sustainable practices\n- Premium quality materials ensuring lasting comfort and durability\n- Features innovative styling elements\n- Versatile design suitable for multiple occasions",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 5153
      },
      {
        "month": "Feb",
        "revenue": 8058
      },
      {
        "month": "Mar",
        "revenue": 4855
      },
      {
        "month": "Apr",
        "revenue": 7984
      },
      {
        "month": "May",
        "revenue": 2997
      },
      {
        "month": "Jun",
        "revenue": 9300
      },
      {
        "month": "Jul",
        "revenue": 1872
      },
      {
        "month": "Aug",
        "revenue": 6189
      },
      {
        "month": "Sep",
        "revenue": 1097
      },
      {
        "month": "Oct",
        "revenue": 1599
      },
      {
        "month": "Nov",
        "revenue": 8833
      },
      {
        "month": "Dec",
        "revenue": 3173
      }
    ]
  },
  {
    "id": 5,
    "name": "Bhargavi with Chanderi Dupttta Suit Set",
    "price": 4299,
    "rating": 2.6,
    "reviews": 5200,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "White"
    ],
    "category": "traditional-suits",
    "model": "Fit - Relaxed (Code JA-478)",
    "size": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "/detailphotos/5.1.webp",
      "/detailphotos/5.2.webp",
      "/detailphotos/5.3.webp",
      "/detailphotos/5.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-478)",
      " Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
      "First Wash- Color may bleed slightly",
      "DISPATCH TIME 5 To 6 Working day",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Designed to provide optimal comfort throughout the day\n- Easy maintenance and care requirements\n- Versatile design suitable for multiple occasions\n- Created using sustainable practices",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 3261
      },
      {
        "month": "Feb",
        "revenue": 3826
      },
      {
        "month": "Mar",
        "revenue": 4106
      },
      {
        "month": "Apr",
        "revenue": 5550
      },
      {
        "month": "May",
        "revenue": 7872
      },
      {
        "month": "Jun",
        "revenue": 1960
      },
      {
        "month": "Jul",
        "revenue": 8668
      },
      {
        "month": "Aug",
        "revenue": 3794
      },
      {
        "month": "Sep",
        "revenue": 1970
      },
      {
        "month": "Oct",
        "revenue": 3308
      },
      {
        "month": "Nov",
        "revenue": 5377
      },
      {
        "month": "Dec",
        "revenue": 2886
      }
    ]
  },
  {
    "id": 6,
    "name": "Ryza Megenta Floral Flarey Suit Set",
    "price": 4899,
    "rating": 6,
    "reviews": 12000,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Megenta"
    ],
    "category": "traditional-suits",
    "model": "Fit - Relaxed (Code JA-718)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "images": [
      "/detailphotos/6.1.webp",
      "/detailphotos/6.2.webp",
      "/detailphotos/6.3.webp",
      "/detailphotos/6.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-718)",
      "Hand wash separately in cold water",
      "Always use mild detergent.",
      "Dry in shade",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Created using sustainable practices\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Versatile design suitable for multiple occasions",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 2814
      },
      {
        "month": "Feb",
        "revenue": 7839
      },
      {
        "month": "Mar",
        "revenue": 2112
      },
      {
        "month": "Apr",
        "revenue": 6767
      },
      {
        "month": "May",
        "revenue": 8250
      },
      {
        "month": "Jun",
        "revenue": 8061
      },
      {
        "month": "Jul",
        "revenue": 2662
      },
      {
        "month": "Aug",
        "revenue": 7248
      },
      {
        "month": "Sep",
        "revenue": 2791
      },
      {
        "month": "Oct",
        "revenue": 4239
      },
      {
        "month": "Nov",
        "revenue": 4824
      },
      {
        "month": "Dec",
        "revenue": 8081
      }
    ]
  },
  {
    "id": 7,
    "name": "Paisley Kashish Block Print Suit Set",
    "price": 4799,
    "rating": 4.5,
    "reviews": 9000,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Mud"
    ],
    "category": "kurta-sets",
    "model": "Fit - Relaxed (Code JA-SKU-769)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/7.1.webp",
      "/detailphotos/7.2.webp",
      "/detailphotos/7.3.webp",
      "/detailphotos/7.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-SKU-769)",
      "Quick dip wash or Dry clean",
      "Hand wash separately in cold water",
      "Dry in shade",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Versatile design suitable for multiple occasions\n- Created using sustainable practices\n- Expertly crafted with attention to every detail\n- Designed to provide optimal comfort throughout the day",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 6686
      },
      {
        "month": "Feb",
        "revenue": 9461
      },
      {
        "month": "Mar",
        "revenue": 4686
      },
      {
        "month": "Apr",
        "revenue": 5376
      },
      {
        "month": "May",
        "revenue": 7769
      },
      {
        "month": "Jun",
        "revenue": 1558
      },
      {
        "month": "Jul",
        "revenue": 1379
      },
      {
        "month": "Aug",
        "revenue": 6591
      },
      {
        "month": "Sep",
        "revenue": 7455
      },
      {
        "month": "Oct",
        "revenue": 1557
      },
      {
        "month": "Nov",
        "revenue": 6841
      },
      {
        "month": "Dec",
        "revenue": 8362
      }
    ]
  },
  {
    "id": 8,
    "name": "Gaeti Green Embroidery Handblock Chanderi Kurta Pant Set",
    "price": 4999,
    "rating": 4,
    "reviews": 8000,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Green"
    ],
    "category": "kurta-sets",
    "model": "Fit - Relaxed (Code JA-657 WD)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "images": [
      "/detailphotos/8.1.webp",
      "/detailphotos/3.2.webp",
      "/detailphotos/3.3.webp",
      "/detailphotos/3.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-657 WD)",
      "Hand wash separately in cold water",
      "Always use mild detergent.",
      "8 To 9 Working day",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Features innovative styling elements\n- Easy maintenance and care requirements\n- Created using sustainable practices\n- Versatile design suitable for multiple occasions",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 4466
      },
      {
        "month": "Feb",
        "revenue": 7675
      },
      {
        "month": "Mar",
        "revenue": 5773
      },
      {
        "month": "Apr",
        "revenue": 5116
      },
      {
        "month": "May",
        "revenue": 1651
      },
      {
        "month": "Jun",
        "revenue": 7954
      },
      {
        "month": "Jul",
        "revenue": 7597
      },
      {
        "month": "Aug",
        "revenue": 5959
      },
      {
        "month": "Sep",
        "revenue": 5167
      },
      {
        "month": "Oct",
        "revenue": 3325
      },
      {
        "month": "Nov",
        "revenue": 6788
      },
      {
        "month": "Dec",
        "revenue": 9097
      }
    ]
  },
  {
    "id": 9,
    "name": "Royal Affairs Handblock Kurta and Pant Only",
    "price": 3399,
    "rating": 4.2,
    "reviews": 8500,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Indigo Apparel Co.",
    "color": [
      "White"
    ],
    "category": "kurta-sets",
    "model": "Fit - Relaxed (Code JA-453 WD)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/9.1.webp",
      "/detailphotos/9.2.webp",
      "/detailphotos/9.3.webp",
      "/detailphotos/9.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-453 WD)",
      "Washing instruction-  Quick dip wash or Dry clean",
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Available in a range of carefully curated sizes\n- Easy maintenance and care requirements\n- Versatile design suitable for multiple occasions\n- Expertly crafted with attention to every detail",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 8851
      },
      {
        "month": "Feb",
        "revenue": 7093
      },
      {
        "month": "Mar",
        "revenue": 6277
      },
      {
        "month": "Apr",
        "revenue": 8788
      },
      {
        "month": "May",
        "revenue": 8379
      },
      {
        "month": "Jun",
        "revenue": 5094
      },
      {
        "month": "Jul",
        "revenue": 9128
      },
      {
        "month": "Aug",
        "revenue": 3520
      },
      {
        "month": "Sep",
        "revenue": 3917
      },
      {
        "month": "Oct",
        "revenue": 8905
      },
      {
        "month": "Nov",
        "revenue": 3787
      },
      {
        "month": "Dec",
        "revenue": 5337
      }
    ]
  },
  {
    "id": 10,
    "name": "Patina Handblock Short Kurta",
    "price": 1499,
    "rating": 4.3,
    "reviews": 8600,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Green"
    ],
    "category": "traditional-suits",
    "model": "Fit - Relaxed (Code JA_607_SKP)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "/detailphotos/10.1.webp",
      "/detailphotos/10.2.webp",
      "/detailphotos/10.3.webp",
      "/detailphotos/10.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA_607_SKP)",
      "Fabric - Pure Cotton",
      "Do not soak",
      "Always use mild detergent",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Expertly crafted with attention to every detail\n- Features innovative styling elements\n- Premium quality materials ensuring lasting comfort and durability\n- Created using sustainable practices",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 7128
      },
      {
        "month": "Feb",
        "revenue": 6756
      },
      {
        "month": "Mar",
        "revenue": 9268
      },
      {
        "month": "Apr",
        "revenue": 1084
      },
      {
        "month": "May",
        "revenue": 5843
      },
      {
        "month": "Jun",
        "revenue": 6510
      },
      {
        "month": "Jul",
        "revenue": 1297
      },
      {
        "month": "Aug",
        "revenue": 4548
      },
      {
        "month": "Sep",
        "revenue": 7764
      },
      {
        "month": "Oct",
        "revenue": 5978
      },
      {
        "month": "Nov",
        "revenue": 1744
      },
      {
        "month": "Dec",
        "revenue": 5368
      }
    ]
  },
  {
    "id": 11,
    "name": "Peach Floral Buti Print Cotton Short Kurta",
    "price": 1499,
    "rating": 3.8,
    "reviews": 7500,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Peach"
    ],
    "category": "traditional-suits",
    "model": "Not specified",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/11.1.webp",
      "/detailphotos/11.2.webp",
      "/detailphotos/11.3.webp",
      "/detailphotos/11.4.webp"
    ],
    "features": [
      "Fit - Relaxed (code : JA-649-SKP)",
      "Kurta- Pure Handblock  Cotton",
      "Washing instruction-  Quick dip wash or Dry clean",
      "Dispatch Time : 5 To 6 Working days",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Versatile design suitable for multiple occasions\n- Available in a range of carefully curated sizes\n- Expertly crafted with attention to every detail",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 6762
      },
      {
        "month": "Feb",
        "revenue": 3793
      },
      {
        "month": "Mar",
        "revenue": 5362
      },
      {
        "month": "Apr",
        "revenue": 2109
      },
      {
        "month": "May",
        "revenue": 6235
      },
      {
        "month": "Jun",
        "revenue": 6624
      },
      {
        "month": "Jul",
        "revenue": 2198
      },
      {
        "month": "Aug",
        "revenue": 5686
      },
      {
        "month": "Sep",
        "revenue": 5758
      },
      {
        "month": "Oct",
        "revenue": 7949
      },
      {
        "month": "Nov",
        "revenue": 2268
      },
      {
        "month": "Dec",
        "revenue": 2969
      }
    ]
  },
  {
    "id": 12,
    "name": "FLORAL FANTASY SHORT KURTA",
    "price": 1099,
    "rating": 1,
    "reviews": 2000,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Indigo Apparel Co.",
    "color": [
      "NavyBlue"
    ],
    "category": "traditional-suits",
    "model": "Not specified",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/12.1.webp",
      "/detailphotos/12.2.webp",
      "/detailphotos/12.3.webp",
      "/detailphotos/12.4.webp"
    ],
    "features": [
      "Fit - Relaxed (code : JA-589-SK)",
      "Kurta- Pure Cotton",
      "Washing instruction-  Quick dip wash or Dry clean",
      "Dispatch Time : 5 To 6 Working days",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Expertly crafted with attention to every detail\n- Easy maintenance and care requirements\n- Features innovative styling elements\n- Designed to provide optimal comfort throughout the day",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 5403
      },
      {
        "month": "Feb",
        "revenue": 1401
      },
      {
        "month": "Mar",
        "revenue": 9797
      },
      {
        "month": "Apr",
        "revenue": 7072
      },
      {
        "month": "May",
        "revenue": 3534
      },
      {
        "month": "Jun",
        "revenue": 4623
      },
      {
        "month": "Jul",
        "revenue": 5619
      },
      {
        "month": "Aug",
        "revenue": 4318
      },
      {
        "month": "Sep",
        "revenue": 4954
      },
      {
        "month": "Oct",
        "revenue": 9720
      },
      {
        "month": "Nov",
        "revenue": 4745
      },
      {
        "month": "Dec",
        "revenue": 9988
      }
    ]
  },
  {
    "id": 13,
    "name": "Mogra Gher Mul Cotton Suit Set",
    "price": 2899,
    "rating": 4,
    "reviews": 8000,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "9 To 12 Working days",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Yellow"
    ],
    "category": "traditional-suits",
    "model": "Fit - Relaxed (Code JA-792)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/13.1.webp",
      "/detailphotos/13.2.webp",
      "/detailphotos/13.3.webp",
      "/detailphotos/13.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-792)",
      "Hand wash separately in cold water",
      "Always use mild detergent",
      "Dispatch Time : 9 To 12 Working days",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Features innovative styling elements\n- Created using sustainable practices\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 7909
      },
      {
        "month": "Feb",
        "revenue": 3044
      },
      {
        "month": "Mar",
        "revenue": 7785
      },
      {
        "month": "Apr",
        "revenue": 1590
      },
      {
        "month": "May",
        "revenue": 1975
      },
      {
        "month": "Jun",
        "revenue": 8818
      },
      {
        "month": "Jul",
        "revenue": 8277
      },
      {
        "month": "Aug",
        "revenue": 1193
      },
      {
        "month": "Sep",
        "revenue": 9746
      },
      {
        "month": "Oct",
        "revenue": 9924
      },
      {
        "month": "Nov",
        "revenue": 2434
      },
      {
        "month": "Dec",
        "revenue": 3381
      }
    ]
  },
  {
    "id": 14,
    "name": "Najia Green Floral Handblock Print Suit Set",
    "price": 4899,
    "rating": 1,
    "reviews": 2000,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Green"
    ],
    "category": "traditional-suits",
    "model": "Not specified",
    "size": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/14.1.webp",
      "/detailphotos/14.2.webp",
      "/detailphotos/14.3.webp",
      "/detailphotos/14.4.webp"
    ],
    "features": [
      "Fit - Relaxed (code : JA-589-SK)",
      "Washing instruction-  Quick dip wash or Dry clean",
      "Kurta- Pure Cotton",
      "Washing instruction-  Quick dip wash or Dry clean",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Features innovative styling elements\n- Premium quality materials ensuring lasting comfort and durability\n- Available in a range of carefully curated sizes\n- Easy maintenance and care requirements",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 7983
      },
      {
        "month": "Feb",
        "revenue": 1322
      },
      {
        "month": "Mar",
        "revenue": 1218
      },
      {
        "month": "Apr",
        "revenue": 6609
      },
      {
        "month": "May",
        "revenue": 6482
      },
      {
        "month": "Jun",
        "revenue": 8734
      },
      {
        "month": "Jul",
        "revenue": 3144
      },
      {
        "month": "Aug",
        "revenue": 3910
      },
      {
        "month": "Sep",
        "revenue": 5686
      },
      {
        "month": "Oct",
        "revenue": 1107
      },
      {
        "month": "Nov",
        "revenue": 3747
      },
      {
        "month": "Dec",
        "revenue": 5360
      }
    ]
  },
  {
    "id": 15,
    "name": "Mehreen Maroon Anarkali Cotton Suit Set",
    "price": 3449,
    "rating": 4,
    "reviews": 8000,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Maroon"
    ],
    "category": "traditional-suits",
    "model": "Fit - Relaxed (Code JA-687)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/15.1.webp",
      "/detailphotos/15.2.webp",
      "/detailphotos/15.3.webp",
      "/detailphotos/15.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-687)",
      "Hand wash separately in cold water",
      "Dry in shade",
      "Do not soak",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Created using sustainable practices\n- Features innovative styling elements\n- Designed to provide optimal comfort throughout the day",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 9165
      },
      {
        "month": "Feb",
        "revenue": 4301
      },
      {
        "month": "Mar",
        "revenue": 1258
      },
      {
        "month": "Apr",
        "revenue": 8361
      },
      {
        "month": "May",
        "revenue": 1962
      },
      {
        "month": "Jun",
        "revenue": 2253
      },
      {
        "month": "Jul",
        "revenue": 7295
      },
      {
        "month": "Aug",
        "revenue": 2152
      },
      {
        "month": "Sep",
        "revenue": 9867
      },
      {
        "month": "Oct",
        "revenue": 2413
      },
      {
        "month": "Nov",
        "revenue": 7783
      },
      {
        "month": "Dec",
        "revenue": 5538
      }
    ]
  },
  {
    "id": 16,
    "name": "Bageecha Chanderi Silk Suit with Handwork Detailing",
    "price": 6199,
    "rating": 3.8,
    "reviews": 7500,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Green"
    ],
    "category": "traditional-suits",
    "model": "Fit - Relaxed (Code JA-819)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "images": [
      "/detailphotos/16.1.webp",
      "/detailphotos/16.2.webp",
      "/detailphotos/16.3.webp",
      "/detailphotos/16.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-819)",
      "8 To 9 Working day",
      "Dry in shade",
      "Hand wash separately in cold water.",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Easy maintenance and care requirements\n- Created using sustainable practices\n- Expertly crafted with attention to every detail\n- Designed to provide optimal comfort throughout the day",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 7703
      },
      {
        "month": "Feb",
        "revenue": 8532
      },
      {
        "month": "Mar",
        "revenue": 7512
      },
      {
        "month": "Apr",
        "revenue": 5270
      },
      {
        "month": "May",
        "revenue": 4802
      },
      {
        "month": "Jun",
        "revenue": 2218
      },
      {
        "month": "Jul",
        "revenue": 2305
      },
      {
        "month": "Aug",
        "revenue": 2703
      },
      {
        "month": "Sep",
        "revenue": 5177
      },
      {
        "month": "Oct",
        "revenue": 4286
      },
      {
        "month": "Nov",
        "revenue": 6672
      },
      {
        "month": "Dec",
        "revenue": 9578
      }
    ]
  },
  {
    "id": 17,
    "name": "Parnia Peach Embroidery Handblock Chanderi Suit Set",
    "price": 5899,
    "rating": 3.9,
    "reviews": 7800,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Peach"
    ],
    "category": "traditional-suits",
    "model": "Fit - Relaxed (Code JA-649)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/17.1.webp",
      "/detailphotos/17.2.webp",
      "/detailphotos/17.3.webp",
      "/detailphotos/17.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-649)",
      "Hand wash separately in cold water",
      "Always use mild detergent",
      "8 To 9 Working day",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Expertly crafted with attention to every detail\n- Versatile design suitable for multiple occasions\n- Created using sustainable practices\n- Features innovative styling elements",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 7953
      },
      {
        "month": "Feb",
        "revenue": 2974
      },
      {
        "month": "Mar",
        "revenue": 2528
      },
      {
        "month": "Apr",
        "revenue": 4079
      },
      {
        "month": "May",
        "revenue": 1428
      },
      {
        "month": "Jun",
        "revenue": 5606
      },
      {
        "month": "Jul",
        "revenue": 6933
      },
      {
        "month": "Aug",
        "revenue": 7438
      },
      {
        "month": "Sep",
        "revenue": 1160
      },
      {
        "month": "Oct",
        "revenue": 1101
      },
      {
        "month": "Nov",
        "revenue": 1801
      },
      {
        "month": "Dec",
        "revenue": 1146
      }
    ]
  },
  {
    "id": 18,
    "name": "Iris Blue Floral Chanderi Straight Fit Suit Set",
    "price": 5499,
    "rating": 3.8,
    "reviews": 7600,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "SkyBlue"
    ],
    "category": "traditional-suits",
    "model": "Not specified",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/18.1.webp",
      "/detailphotos/18.2.webp",
      "/detailphotos/18.3.webp",
      "/detailphotos/18.4.webp"
    ],
    "features": [
      "Fit - Relaxed code  JA-789",
      "Fabric -  Pure Chanderi Kurta with lining & Chanderi Silk Dupatta & Cotton Pant",
      "Quick dip wash or Dry clean",
      "dry in shadow",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Features innovative styling elements\n- Easy maintenance and care requirements\n- Versatile design suitable for multiple occasions\n- Created using sustainable practices",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 6604
      },
      {
        "month": "Feb",
        "revenue": 3677
      },
      {
        "month": "Mar",
        "revenue": 3794
      },
      {
        "month": "Apr",
        "revenue": 3532
      },
      {
        "month": "May",
        "revenue": 7501
      },
      {
        "month": "Jun",
        "revenue": 5834
      },
      {
        "month": "Jul",
        "revenue": 6040
      },
      {
        "month": "Aug",
        "revenue": 4022
      },
      {
        "month": "Sep",
        "revenue": 4398
      },
      {
        "month": "Oct",
        "revenue": 7678
      },
      {
        "month": "Nov",
        "revenue": 6684
      },
      {
        "month": "Dec",
        "revenue": 6385
      }
    ]
  },
  {
    "id": 19,
    "name": "Naadia Block Printed Cotton Kalidaar Handwork Suit Set",
    "price": 4899,
    "rating": 4.2,
    "reviews": 8300,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Green"
    ],
    "category": "kurta-sets",
    "model": "Fit - Relaxed (Code JA-622)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "images": [
      "/detailphotos/19.1.webp",
      "/detailphotos/19.2.webp",
      "/detailphotos/19.3.webp",
      "/detailphotos/19.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-622)",
      "Hand wash separately in cold water",
      "Always use mild detergent",
      "Do not soak",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Easy maintenance and care requirements\n- Premium quality materials ensuring lasting comfort and durability\n- Designed to provide optimal comfort throughout the day\n- Versatile design suitable for multiple occasions",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 3206
      },
      {
        "month": "Feb",
        "revenue": 5946
      },
      {
        "month": "Mar",
        "revenue": 4952
      },
      {
        "month": "Apr",
        "revenue": 8926
      },
      {
        "month": "May",
        "revenue": 2604
      },
      {
        "month": "Jun",
        "revenue": 7249
      },
      {
        "month": "Jul",
        "revenue": 2786
      },
      {
        "month": "Aug",
        "revenue": 3114
      },
      {
        "month": "Sep",
        "revenue": 9727
      },
      {
        "month": "Oct",
        "revenue": 3245
      },
      {
        "month": "Nov",
        "revenue": 3429
      },
      {
        "month": "Dec",
        "revenue": 1903
      }
    ]
  },
  {
    "id": 20,
    "name": "Yami Yellow Embroidered Anarkali Suit Set",
    "price": 5499,
    "rating": 2.2,
    "reviews": 4500,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Yellow"
    ],
    "category": "kurta-sets",
    "model": "Fit - Relaxed (Code JA-615)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/20.1.webp",
      "/detailphotos/20.2.webp",
      "/detailphotos/20.3.webp",
      "/detailphotos/20.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-615)",
      "Dry clean only",
      "8 To 9 Working day",
      "Hand wash separately in cold water",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Features innovative styling elements\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Created using sustainable practices",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 4787
      },
      {
        "month": "Feb",
        "revenue": 4256
      },
      {
        "month": "Mar",
        "revenue": 5153
      },
      {
        "month": "Apr",
        "revenue": 3164
      },
      {
        "month": "May",
        "revenue": 1760
      },
      {
        "month": "Jun",
        "revenue": 3299
      },
      {
        "month": "Jul",
        "revenue": 9496
      },
      {
        "month": "Aug",
        "revenue": 2625
      },
      {
        "month": "Sep",
        "revenue": 9457
      },
      {
        "month": "Oct",
        "revenue": 1124
      },
      {
        "month": "Nov",
        "revenue": 7260
      },
      {
        "month": "Dec",
        "revenue": 8286
      }
    ]
  },
  {
    "id": 21,
    "name": "Paakiza Purple Cotton Straight Handwork Suit Set",
    "price": 5399,
    "rating": 4.5,
    "reviews": 8900,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "Not specified",
    "seller": "Indigo Apparel Co.",
    "color": [
      "Purple"
    ],
    "category": "kurta-sets",
    "model": "Fit - Relaxed (Code JA-627)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/21.1.webp",
      "/detailphotos/22.2.webp",
      "/detailphotos/23.3.webp",
      "/detailphotos/23.4.webp"
    ],
    "features": [
      "Fit - Relaxed (Code JA-627)",
      "Fabric - Pure Cotton",
      "Hand wash separately in cold water.",
      "8 To 9 Working day",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Created using sustainable practices\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Versatile design suitable for multiple occasions",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 4317
      },
      {
        "month": "Feb",
        "revenue": 6095
      },
      {
        "month": "Mar",
        "revenue": 5607
      },
      {
        "month": "Apr",
        "revenue": 4806
      },
      {
        "month": "May",
        "revenue": 4811
      },
      {
        "month": "Jun",
        "revenue": 5615
      },
      {
        "month": "Jul",
        "revenue": 1630
      },
      {
        "month": "Aug",
        "revenue": 2216
      },
      {
        "month": "Sep",
        "revenue": 1096
      },
      {
        "month": "Oct",
        "revenue": 9687
      },
      {
        "month": "Nov",
        "revenue": 7804
      },
      {
        "month": "Dec",
        "revenue": 9134
      }
    ]
  },
  {
    "id": 22,
    "name": "Lavanya Habutai Silk Suit Set",
    "price": 5999,
    "rating": 4.2,
    "reviews": 5000,
    "answers": 154,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "Maroon",
      "Green"
    ],
    "category": "latest-collection",
    "model": "RP-817)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/22.1.webp",
      "/detailphotos/22.2.webp",
      "/detailphotos/22.3.webp",
      "/detailphotos/22.4.webp"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-817)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Created using sustainable practices\n- Expertly crafted with attention to every detail\n- Designed to provide optimal comfort throughout the day",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 2311
      },
      {
        "month": "Feb",
        "revenue": 2540
      },
      {
        "month": "Mar",
        "revenue": 2333
      },
      {
        "month": "Apr",
        "revenue": 4855
      },
      {
        "month": "May",
        "revenue": 3047
      },
      {
        "month": "Jun",
        "revenue": 8751
      },
      {
        "month": "Jul",
        "revenue": 6790
      },
      {
        "month": "Aug",
        "revenue": 2797
      },
      {
        "month": "Sep",
        "revenue": 7951
      },
      {
        "month": "Oct",
        "revenue": 7368
      },
      {
        "month": "Nov",
        "revenue": 2873
      },
      {
        "month": "Dec",
        "revenue": 5281
      }
    ]
  },
  {
    "id": 23,
    "name": "Kusum Suit Set in Silk with Handwork",
    "price": 5999,
    "rating": 4,
    "reviews": 5760,
    "answers": 206,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "Pink",
      "Green"
    ],
    "category": "latest-collection",
    "model": "RP-816)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXL"
    ],
    "images": [
      "/detailphotos/23.1.webp",
      "/detailphotos/23.2.webp",
      "/detailphotos/23.3.webp",
      "/detailphotos/23.4.webp"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-816)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Easy maintenance and care requirements\n- Created using sustainable practices",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 9921
      },
      {
        "month": "Feb",
        "revenue": 5130
      },
      {
        "month": "Mar",
        "revenue": 4178
      },
      {
        "month": "Apr",
        "revenue": 6388
      },
      {
        "month": "May",
        "revenue": 7529
      },
      {
        "month": "Jun",
        "revenue": 7794
      },
      {
        "month": "Jul",
        "revenue": 3871
      },
      {
        "month": "Aug",
        "revenue": 1479
      },
      {
        "month": "Sep",
        "revenue": 1660
      },
      {
        "month": "Oct",
        "revenue": 3943
      },
      {
        "month": "Nov",
        "revenue": 3490
      },
      {
        "month": "Dec",
        "revenue": 9330
      }
    ]
  },
  {
    "id": 24,
    "name": "Tyohar Jacquard Silk Handwork Suit Set with Organza Dupatta",
    "price": 5999,
    "rating": 4.3,
    "reviews": 12000,
    "answers": 398,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "Brown"
    ],
    "category": "latest-collection",
    "model": "RP-806)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXL"
    ],
    "images": [
      "/detailphotos/24.1.webp",
      "/detailphotos/24.2.webp"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-806)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Easy maintenance and care requirements\n- Designed to provide optimal comfort throughout the day\n- Versatile design suitable for multiple occasions\n- Features innovative styling elements",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 8938
      },
      {
        "month": "Feb",
        "revenue": 2376
      },
      {
        "month": "Mar",
        "revenue": 1941
      },
      {
        "month": "Apr",
        "revenue": 3425
      },
      {
        "month": "May",
        "revenue": 5207
      },
      {
        "month": "Jun",
        "revenue": 5056
      },
      {
        "month": "Jul",
        "revenue": 4392
      },
      {
        "month": "Aug",
        "revenue": 4708
      },
      {
        "month": "Sep",
        "revenue": 3415
      },
      {
        "month": "Oct",
        "revenue": 9244
      },
      {
        "month": "Nov",
        "revenue": 3620
      },
      {
        "month": "Dec",
        "revenue": 2434
      }
    ]
  },
  {
    "id": 25,
    "name": "Riyaaz Silk Suit Set with Jacquard Crush Dupatta",
    "price": 5499,
    "rating": 4.6,
    "reviews": 7041,
    "answers": 234,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "Maroon",
      "Grey"
    ],
    "category": "latest-collection",
    "model": "RP-798)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXL"
    ],
    "images": [
      "/detailphotos/25.1.webp",
      "/detailphotos/25.2.webp",
      "/detailphotos/25.3.webp"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-798)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Versatile design suitable for multiple occasions\n- Easy maintenance and care requirements",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 5098
      },
      {
        "month": "Feb",
        "revenue": 9153
      },
      {
        "month": "Mar",
        "revenue": 4008
      },
      {
        "month": "Apr",
        "revenue": 7830
      },
      {
        "month": "May",
        "revenue": 9726
      },
      {
        "month": "Jun",
        "revenue": 1356
      },
      {
        "month": "Jul",
        "revenue": 9517
      },
      {
        "month": "Aug",
        "revenue": 9032
      },
      {
        "month": "Sep",
        "revenue": 4979
      },
      {
        "month": "Oct",
        "revenue": 1961
      },
      {
        "month": "Nov",
        "revenue": 6936
      },
      {
        "month": "Dec",
        "revenue": 9756
      }
    ]
  },
  {
    "id": 26,
    "name": "Sanjari Muslin Silk Suit Set with Organza Dupatta",
    "price": 5499,
    "rating": 4.4,
    "reviews": 9496,
    "answers": 276,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "Brown",
      "Green"
    ],
    "category": "latest-collection",
    "model": "RP-812)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/26.1.webp",
      "/detailphotos/26.2.webp",
      "/detailphotos/26.3.webp",
      "/detailphotos/26.4.webp"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-812)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Features innovative styling elements\n- Expertly crafted with attention to every detail\n- Designed to provide optimal comfort throughout the day\n- Versatile design suitable for multiple occasions",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 3855
      },
      {
        "month": "Feb",
        "revenue": 8335
      },
      {
        "month": "Mar",
        "revenue": 8186
      },
      {
        "month": "Apr",
        "revenue": 8628
      },
      {
        "month": "May",
        "revenue": 4791
      },
      {
        "month": "Jun",
        "revenue": 9257
      },
      {
        "month": "Jul",
        "revenue": 3443
      },
      {
        "month": "Aug",
        "revenue": 9994
      },
      {
        "month": "Sep",
        "revenue": 7117
      },
      {
        "month": "Oct",
        "revenue": 6956
      },
      {
        "month": "Nov",
        "revenue": 2325
      },
      {
        "month": "Dec",
        "revenue": 9046
      }
    ]
  },
  {
    "id": 27,
    "name": "Naari Zari Silk Suit Set with Patchwork & Embroidery",
    "price": 6499,
    "rating": 4.9,
    "reviews": 4303,
    "answers": 122,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "Brown"
    ],
    "category": "latest-collection",
    "model": "RP-813)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "/detailphotos/27.1.webp",
      "/detailphotos/27.2.webp"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-813)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Available in a range of carefully curated sizes\n- Versatile design suitable for multiple occasions\n- Created using sustainable practices\n- Expertly crafted with attention to every detail",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 1269
      },
      {
        "month": "Feb",
        "revenue": 9416
      },
      {
        "month": "Mar",
        "revenue": 5931
      },
      {
        "month": "Apr",
        "revenue": 8028
      },
      {
        "month": "May",
        "revenue": 2885
      },
      {
        "month": "Jun",
        "revenue": 9114
      },
      {
        "month": "Jul",
        "revenue": 7542
      },
      {
        "month": "Aug",
        "revenue": 7972
      },
      {
        "month": "Sep",
        "revenue": 9487
      },
      {
        "month": "Oct",
        "revenue": 4416
      },
      {
        "month": "Nov",
        "revenue": 1911
      },
      {
        "month": "Dec",
        "revenue": 9316
      }
    ]
  },
  {
    "id": 28,
    "name": "Sakhi Silk Suit Set with Embroidered Floral Detailing",
    "price": 5999,
    "rating": 4.5,
    "reviews": 7403,
    "answers": 156,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "Cream",
      "Yellow"
    ],
    "category": "latest-collection",
    "model": "RP-804)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/28.1.webp",
      "/detailphotos/28.2.webp",
      "/detailphotos/28.3.webp",
      "/detailphotos/28.4.webp",
      "/detailphotos/28.5.webp"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-804)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Created using sustainable practices\n- Versatile design suitable for multiple occasions\n- Premium quality materials ensuring lasting comfort and durability\n- Features innovative styling elements",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 5867
      },
      {
        "month": "Feb",
        "revenue": 1300
      },
      {
        "month": "Mar",
        "revenue": 2849
      },
      {
        "month": "Apr",
        "revenue": 5449
      },
      {
        "month": "May",
        "revenue": 7790
      },
      {
        "month": "Jun",
        "revenue": 3713
      },
      {
        "month": "Jul",
        "revenue": 5802
      },
      {
        "month": "Aug",
        "revenue": 9518
      },
      {
        "month": "Sep",
        "revenue": 1020
      },
      {
        "month": "Oct",
        "revenue": 8313
      },
      {
        "month": "Nov",
        "revenue": 9275
      },
      {
        "month": "Dec",
        "revenue": 5843
      }
    ]
  },
  {
    "id": 29,
    "name": "Kalyani Silk Satin Embroidered Suit Set with Organza Dupatta",
    "price": 5999,
    "rating": 5,
    "reviews": 200,
    "answers": 34,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "Cream",
      "Yellow"
    ],
    "category": "latest-collection",
    "model": "RP-794)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "XXXL"
    ],
    "images": [
      "/detailphotos/29.1.webp",
      "/detailphotos/29.2.webp",
      "/detailphotos/29.3.webp",
      "/detailphotos/29.4.webp",
      "/detailphotos/29.5.webp"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-794)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Created using sustainable practices\n- Available in a range of carefully curated sizes\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 8216
      },
      {
        "month": "Feb",
        "revenue": 8600
      },
      {
        "month": "Mar",
        "revenue": 6442
      },
      {
        "month": "Apr",
        "revenue": 7475
      },
      {
        "month": "May",
        "revenue": 2149
      },
      {
        "month": "Jun",
        "revenue": 9706
      },
      {
        "month": "Jul",
        "revenue": 6919
      },
      {
        "month": "Aug",
        "revenue": 7004
      },
      {
        "month": "Sep",
        "revenue": 3081
      },
      {
        "month": "Oct",
        "revenue": 3032
      },
      {
        "month": "Nov",
        "revenue": 3662
      },
      {
        "month": "Dec",
        "revenue": 5814
      }
    ]
  },
  {
    "id": 30,
    "name": "Ruby Floral A-line Silk Suit set",
    "price": 5499,
    "rating": 4.2,
    "reviews": 10200,
    "answers": 304,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "SkyBlue"
    ],
    "category": "latest-collection",
    "model": "RP-782)",
    "size": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/30.1.webp",
      "/detailphotos/30.2.webp",
      "/detailphotos/30.3.webp",
      "/detailphotos/30.4.webp",
      "/detailphotos/30.5.webp",
      "/detailvideos/30.mp4"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-782)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Designed to provide optimal comfort throughout the day\n- Created using sustainable practices\n- Easy maintenance and care requirements\n- Premium quality materials ensuring lasting comfort and durability",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 5941
      },
      {
        "month": "Feb",
        "revenue": 2378
      },
      {
        "month": "Mar",
        "revenue": 4888
      },
      {
        "month": "Apr",
        "revenue": 6838
      },
      {
        "month": "May",
        "revenue": 6765
      },
      {
        "month": "Jun",
        "revenue": 5782
      },
      {
        "month": "Jul",
        "revenue": 9616
      },
      {
        "month": "Aug",
        "revenue": 4010
      },
      {
        "month": "Sep",
        "revenue": 8054
      },
      {
        "month": "Oct",
        "revenue": 7718
      },
      {
        "month": "Nov",
        "revenue": 9264
      },
      {
        "month": "Dec",
        "revenue": 7966
      }
    ]
  },
  {
    "id": 31,
    "name": "Ruby Floral A-line Silk Suit set",
    "price": 5699,
    "rating": 4.6,
    "reviews": 7450,
    "answers": 127,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "Green"
    ],
    "category": "latest-collection",
    "model": "RP-777)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/31.1.webp",
      "/detailphotos/31.2.webp",
      "/detailphotos/31.3.webp",
      "/detailphotos/31.4.webp",
      "/detailphotos/31.5.webp"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Chanderi Kurta with lining & Chanderi Silk Dupatta & Cotton Pant",
      "Fit - Relaxed (CODE :RP-782)",
      "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Versatile design suitable for multiple occasions\n- Easy maintenance and care requirements",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 6189
      },
      {
        "month": "Feb",
        "revenue": 5232
      },
      {
        "month": "Mar",
        "revenue": 4825
      },
      {
        "month": "Apr",
        "revenue": 9224
      },
      {
        "month": "May",
        "revenue": 6857
      },
      {
        "month": "Jun",
        "revenue": 4785
      },
      {
        "month": "Jul",
        "revenue": 3779
      },
      {
        "month": "Aug",
        "revenue": 8205
      },
      {
        "month": "Sep",
        "revenue": 5596
      },
      {
        "month": "Oct",
        "revenue": 7249
      },
      {
        "month": "Nov",
        "revenue": 6391
      },
      {
        "month": "Dec",
        "revenue": 5739
      }
    ]
  },
  {
    "id": 32,
    "name": "Gerua Chanderi Silk Suit with Handwork Detailing",
    "price": 5999,
    "rating": 4.5,
    "reviews": 7230,
    "answers": 97,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "Red"
    ],
    "category": "latest-collection",
    "model": "RP-814)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/32.1.webp",
      "/detailphotos/32.2.webp",
      "/detailphotos/32.3.webp",
      "/detailphotos/32.4.webp",
      "/detailphotos/32.5.webp"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-814)",
      "Washing instruction-  Dry clean only",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Available in a range of carefully curated sizes\n- Easy maintenance and care requirements\n- Versatile design suitable for multiple occasions\n- Features innovative styling elements",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 4217
      },
      {
        "month": "Feb",
        "revenue": 8806
      },
      {
        "month": "Mar",
        "revenue": 5912
      },
      {
        "month": "Apr",
        "revenue": 6154
      },
      {
        "month": "May",
        "revenue": 9117
      },
      {
        "month": "Jun",
        "revenue": 8776
      },
      {
        "month": "Jul",
        "revenue": 7599
      },
      {
        "month": "Aug",
        "revenue": 7024
      },
      {
        "month": "Sep",
        "revenue": 8607
      },
      {
        "month": "Oct",
        "revenue": 5559
      },
      {
        "month": "Nov",
        "revenue": 7469
      },
      {
        "month": "Dec",
        "revenue": 8374
      }
    ]
  },
  {
    "id": 33,
    "name": "Jade Oasis Coord Set with Floral Embroidered Detailing",
    "price": 3299,
    "rating": 4.9,
    "reviews": 12030,
    "answers": 345,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "Green"
    ],
    "category": "lounge-wear",
    "model": "RP-787)",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/33.1.webp",
      "/detailphotos/33.2.webp",
      "/detailphotos/33.3.webp",
      "/detailphotos/33.4.webp",
      "/detailphotos/33.5.webp",
      "/detailphotos/33.6.webp",
      "/detailphotos/33.7.webp"
    ],
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-787)",
      "Washing instruction-  Separate wash only (Might bleed color) eferably Dry clean.",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Created using sustainable practices\n- Expertly crafted with attention to every detail\n- Versatile design suitable for multiple occasions",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 4353
      },
      {
        "month": "Feb",
        "revenue": 9585
      },
      {
        "month": "Mar",
        "revenue": 9849
      },
      {
        "month": "Apr",
        "revenue": 3679
      },
      {
        "month": "May",
        "revenue": 2966
      },
      {
        "month": "Jun",
        "revenue": 2645
      },
      {
        "month": "Jul",
        "revenue": 2561
      },
      {
        "month": "Aug",
        "revenue": 7296
      },
      {
        "month": "Sep",
        "revenue": 8925
      },
      {
        "month": "Oct",
        "revenue": 8388
      },
      {
        "month": "Nov",
        "revenue": 1402
      },
      {
        "month": "Dec",
        "revenue": 4318
      }
    ]
  },
  {
    "id": 34,
    "name": "Moonlight silk Embroidered Coord Set",
    "price": 3299,
    "rating": 4.8,
    "reviews": 10676,
    "answers": 237,
    "inStock": true,
    "delivery": "FREE delivery",
    "deliveryDate": "5 To 6 Working days",
    "seller": "Rajwadi Poshaak Co.",
    "color": [
      "Cream"
    ],
    "category": "lounge-wear",
    "model": "",
    "size": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "/detailphotos/34.1.webp",
      "/detailphotos/34.2.webp",
      "/detailphotos/34.3.webp"
    ],
    // "video": "/detailvideos/34.mp4",
    "features": [
      "Dispatch Time : 5 To 6 Working days",
      "Fabric - Pure Cotton",
      "Fit - Relaxed (CODE :RP-781)",
      "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
      "Kurta length 46",
      "Pant length 38"
    ],
    "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Expertly crafted with attention to every detail\n- Created using sustainable practices\n- Features innovative styling elements\n- Easy maintenance and care requirements",
    "chartData": [
      {
        "month": "Jan",
        "revenue": 5905
      },
      {
        "month": "Feb",
        "revenue": 3177
      },
      {
        "month": "Mar",
        "revenue": 5024
      },
      {
        "month": "Apr",
        "revenue": 2296
      },
      {
        "month": "May",
        "revenue": 2468
      },
      {
        "month": "Jun",
        "revenue": 7977
      },
      {
        "month": "Jul",
        "revenue": 1363
      },
      {
        "month": "Aug",
        "revenue": 1971
      },
      {
        "month": "Sep",
        "revenue": 4363
      },
      {
        "month": "Oct",
        "revenue": 2843
      },
      {
        "month": "Nov",
        "revenue": 9247
      },
      {
        "month": "Dec",
        "revenue": 5682
      }
    ]
  },
]